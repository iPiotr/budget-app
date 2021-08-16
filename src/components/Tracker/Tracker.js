import React, { Component } from 'react';
import fire from '../../config/Fire';
import './Tracker.css';
import Transaction from './Transaction/Transaction';

class Tracker extends Component {

    state = {
        transactions: [],
        money: 0,
        transactionName: '',
        transactionType: '',
        price: '',
        currentUID: fire.auth().currentUser.uid,
    }

    logOut = () => {
        fire.auth().signOut();
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value !=="0" ? e.target.value : ""
        })
    }

    addNewTransaction = () => {
        const {
            transactionName,
            transactionType,
            price,
            currentUID,
            money
        } = this.state;

        //validation
        if(transactionName && transactionType && price && !isNaN(price)) {
            const BackUpState = this.state.transactions;
            BackUpState.push({
                id: BackUpState.length + 1,
                name: transactionName,
                type: transactionType,
                price: price,
                user_id: currentUID
            })
            

            fire.database().ref('Transactions/' + currentUID).push({
                id: BackUpState.length,
                name: transactionName,
                type: transactionType,
                price: price,
                user_id: currentUID
            }).then((data) => {
                this.setState({
                    transactions: BackUpState,
                    money: transactionType === 'income' ? money + parseFloat(price) : money - parseFloat(price),
                    transactionName: '',
                    transactionType: '',
                    price: ''
                    })
                }).catch((error) => {
                    console.log('error', error)
                });
        }
    }

    deleteTransaction(){
        const { currentUID } = this.state;

        fire.database().ref('Transactions/' + currentUID).remove();
        window.location.reload(false)
    }

    componentWillMount() {
        const {currentUID, money} = this.state;
        let totalMoney = money;
        const BackUpState = this.state.transactions;
        fire.database().ref('Transactions/' + currentUID).once('value',
        (snapshot) => {
            snapshot.forEach((ChildSnapshot) => {
                totalMoney = 
                ChildSnapshot.val().type === 'income' ? 
                parseFloat(ChildSnapshot.val().price) + totalMoney : 
                totalMoney - parseFloat(ChildSnapshot.val().price);

                BackUpState.push({
                    id: ChildSnapshot.val().id,
                    name: ChildSnapshot.val().name,
                    type: ChildSnapshot.val().type,
                    price: ChildSnapshot.val().price,
                    user_id: ChildSnapshot.val().user_id,
                });
            });

            this.setState({
                transactions: BackUpState,
                money: totalMoney,
            })

        });
    }

    render() {

        var currentUser = fire.auth().currentUser;

        return(
            <>
            <div className="welcomeBlock">

                <span>Hi, {currentUser.displayName}!</span>
                <button className="logOut" onClick={this.logOut}>Log Out</button>
            </div>
            
           

            <div className="budgetBlock">
                
                <div className="newTransactionBlock">
                     <div className="block totalMoney">
                    <div>Balance: <span> {this.state.money} $</span></div>
                </div>
                    <div className="newTransaction block">
                        <form>
                            <input 
                            placeholder="Transaction Name"
                            type="text"
                            name="transaction"
                            maxLength="32"
                            value={this.state.transactionName}
                            onChange={this.handleChange('transactionName')}
                            />
                            <div className="inputGroup">
                                <select name="type"
                                    value={this.state.transactionType}
                                    onChange={this.handleChange('transactionType')}>
                                    <option value="0">Type</option>
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>

                                </select>
                                <input 
                            placeholder="Price"
                            type="text"
                            name="price"
                            maxLength="15"
                            value={this.state.price}
                            onChange={this.handleChange('price')}
                            />
                            </div>
                        </form>
                        <button 
                                className="addTransaction"
                                onClick={() => this.addNewTransaction()}>
                                    + Add Transaction
                            </button>
                    </div>
                </div>
                <div className="lastesTransactions">
                <div className="lastesText"><span>Lastes Transactions</span> <button className="reset" onClick={() => this.deleteTransaction()}>Reset</button></div> 
                    <ul>
                        {
                            Object.keys(this.state.transactions).map((id) => (
                                <Transaction key={id} 
                                    type={this.state.transactions[id].type}
                                    name={this.state.transactions[id].name}
                                    price={this.state.transactions[id].price}
                                />
                            ))
                        }
                    </ul>
                </div>    
            </div>
            </>
        );
    }
}

export default Tracker;
