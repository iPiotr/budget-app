import React, { Component } from "react";
import './Main.css';
import fire from '../config/Fire';
import Login from './Forms/Login';
import Register from './Forms/Register';
import Tracker from "./Tracker/Tracker";



export default class Main extends Component {

    state = {
        user: 1,
        loading: true,
        formSwitcher: false,
    }

    componentDidMount(){
        this.authListener();
    } 

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({user});
            } else {
                this.setState({user: null});
            }
        });

    }

    formSwitcher = (action) => {
        this.setState({
            formSwitcher: action === 'register' ? true : false
        });
    }

    render() {

        const form = !this.state.formSwitcher ? <Login /> : <Register />;

        if(this.state.user === 1) {
            return (
                <div className="mainBlock">
                    <div className="Spinner">
                        <p>Loading...</p>
                    </div>
                </div>
            )
        }
        
        return (
            <>
            {!this.state.user ? 
                (<div className="mainBlock">
                    {form}
                    {!this.state.formSwitcher ?
                        (
                        <span className="underLine">
                            Don’t have an account? <button 
                            onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} 
                            className="linkBtn">Sing Up</button>
                        </span>) : (
                            <span className="underLine">
                            Have an account? <button 
                            onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} 
                            className="linkBtn">Sing in</button>
                            </span>
                        )
                    }
                </div>) : (<Tracker />)

            }
            </>
        );
    }
}