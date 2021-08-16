(this.webpackJsonpbudget=this.webpackJsonpbudget||[]).push([[0],{20:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a.n(n),c=a(21),r=a.n(c),i=(a(27),a(28),a(10)),o=a(11),l=a(13),u=a(12),h=(a(29),a(22).a.initializeApp({apiKey:"AIzaSyB-BgzVPdVBtrAXQOy84iUaSK1gfNP3r_4",authDomain:"budget-52c46.firebaseapp.com",projectId:"budget-52c46",storageBucket:"budget-52c46.appspot.com",messagingSenderId:"865992618244",appId:"1:865992618244:web:342556028b22484279a051",measurementId:"G-0TFBL50PRL"})),d=a(15),j=(a(20),a(2)),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",fireErrors:""},e.login=function(t){t.preventDefault(),h.auth().signInWithEmailAndPassword(e.state.email,e.state.password).catch((function(t){e.setState({fireErrors:t.message})}))},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.fireErrors?Object(j.jsx)("div",{className:"Error",children:this.state.fireErrors}):null;return Object(j.jsxs)(j.Fragment,{children:[e,Object(j.jsx)("div",{class:"title",children:"Welcome"}),Object(j.jsx)("div",{class:"subtitle",children:"Log in to your account!"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",className:"regField",placeholder:"Email",value:this.state.email,onChange:this.handleChange,name:"email"}),Object(j.jsx)("input",{type:"password",className:"regField",placeholder:"Password",value:this.state.password,onChange:this.handleChange,name:"password"}),Object(j.jsx)("input",{onClick:this.login,type:"submit",className:"submitBtn",value:"Log In"})]})]})}}]),a}(n.Component),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",displayName:"",fireErrors:""},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.register=function(t){t.preventDefault(),h.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){h.auth().currentUser.updateProfile({displayName:e.state.displayName})})).catch((function(t){e.setState({fireErrors:t.message})}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.fireErrors?Object(j.jsx)("div",{className:"Error",children:this.state.fireErrors}):null;return Object(j.jsxs)(j.Fragment,{children:[e,Object(j.jsxs)("form",{children:[Object(j.jsx)("div",{class:"title",children:"Welcome"}),Object(j.jsx)("div",{class:"subtitle",children:"Let's create your account!"}),Object(j.jsx)("input",{type:"text",className:"regField",placeholder:"Your Name",onChange:this.handleChange,value:this.state.displayName,name:"displayName"}),Object(j.jsx)("input",{type:"text",className:"regField",placeholder:"Email",onChange:this.handleChange,value:this.state.email,name:"email"}),Object(j.jsx)("input",{type:"password",className:"regField",placeholder:"Password",onChange:this.handleChange,value:this.state.password,name:"password"}),Object(j.jsx)("input",{onClick:this.register,type:"submit",className:"submitBtn",value:"Register"})]})]})}}]),a}(n.Component),b=(a(36),function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{id:e.id,children:e.name}),Object(j.jsx)("div",{children:"income"===e.type?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("span",{className:"income",children:["+$ ",e.price]})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("span",{className:"expense",children:["-$ ",e.price]})})})]})}),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={transactions:[],money:0,transactionName:"",transactionType:"",price:"",currentUID:h.auth().currentUser.uid},e.logOut=function(){h.auth().signOut()},e.handleChange=function(t){return function(a){e.setState(Object(d.a)({},t,"0"!==a.target.value?a.target.value:""))}},e.addNewTransaction=function(){var t=e.state,a=t.transactionName,n=t.transactionType,s=t.price,c=t.currentUID,r=t.money;if(a&&n&&s&&!isNaN(s)){var i=e.state.transactions;i.push({id:i.length+1,name:a,type:n,price:s,user_id:c}),h.database().ref("Transactions/"+c).push({id:i.length,name:a,type:n,price:s,user_id:c}).then((function(t){e.setState({transactions:i,money:"income"===n?r+parseFloat(s):r-parseFloat(s),transactionName:"",transactionType:"",price:""})})).catch((function(e){console.log("error",e)}))}},e}return Object(o.a)(a,[{key:"deleteTransaction",value:function(){var e=this.state.currentUID;h.database().ref("Transactions/"+e).remove(),window.location.reload(!1)}},{key:"componentWillMount",value:function(){var e=this,t=this.state,a=t.currentUID,n=t.money,s=this.state.transactions;h.database().ref("Transactions/"+a).once("value",(function(t){t.forEach((function(e){n="income"===e.val().type?parseFloat(e.val().price)+n:n-parseFloat(e.val().price),s.push({id:e.val().id,name:e.val().name,type:e.val().type,price:e.val().price,user_id:e.val().user_id})})),e.setState({transactions:s,money:n})}))}},{key:"render",value:function(){var e=this,t=h.auth().currentUser;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"welcomeBlock",children:[Object(j.jsxs)("span",{children:["Hi, ",t.displayName,"!"]}),Object(j.jsx)("button",{className:"logOut",onClick:this.logOut,children:"Log Out"})]}),Object(j.jsxs)("div",{className:"budgetBlock",children:[Object(j.jsxs)("div",{className:"newTransactionBlock",children:[Object(j.jsx)("div",{className:"block totalMoney",children:Object(j.jsxs)("div",{children:["Balance: ",Object(j.jsxs)("span",{children:[" ",this.state.money," $"]})]})}),Object(j.jsxs)("div",{className:"newTransaction block",children:[Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{placeholder:"Transaction Name",type:"text",name:"transaction",maxLength:"32",value:this.state.transactionName,onChange:this.handleChange("transactionName")}),Object(j.jsxs)("div",{className:"inputGroup",children:[Object(j.jsxs)("select",{name:"type",value:this.state.transactionType,onChange:this.handleChange("transactionType"),children:[Object(j.jsx)("option",{value:"0",children:"Type"}),Object(j.jsx)("option",{value:"income",children:"Income"}),Object(j.jsx)("option",{value:"expense",children:"Expense"})]}),Object(j.jsx)("input",{placeholder:"Price",type:"text",name:"price",maxLength:"15",value:this.state.price,onChange:this.handleChange("price")})]})]}),Object(j.jsx)("button",{className:"addTransaction",onClick:function(){return e.addNewTransaction()},children:"+ Add Transaction"})]})]}),Object(j.jsxs)("div",{className:"lastesTransactions",children:[Object(j.jsxs)("div",{className:"lastesText",children:[Object(j.jsx)("span",{children:"Lastes Transactions"})," ",Object(j.jsx)("button",{className:"reset",onClick:function(){return e.deleteTransaction()},children:"Reset"})]}),Object(j.jsx)("ul",{children:Object.keys(this.state.transactions).map((function(t){return Object(j.jsx)(b,{type:e.state.transactions[t].type,name:e.state.transactions[t].name,price:e.state.transactions[t].price},t)}))})]})]})]})}}]),a}(n.Component),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={user:1,loading:!0,formSwitcher:!1},e.formSwitcher=function(t){e.setState({formSwitcher:"register"===t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;h.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"render",value:function(){var e=this,t=this.state.formSwitcher?Object(j.jsx)(m,{}):Object(j.jsx)(p,{});return 1===this.state.user?Object(j.jsx)("div",{className:"mainBlock",children:Object(j.jsx)("div",{className:"Spinner",children:Object(j.jsx)("p",{children:"Loading..."})})}):Object(j.jsx)(j.Fragment,{children:this.state.user?Object(j.jsx)(O,{}):Object(j.jsxs)("div",{className:"mainBlock",children:[t,this.state.formSwitcher?Object(j.jsxs)("span",{className:"underLine",children:["Have an account? ",Object(j.jsx)("button",{onClick:function(){return e.formSwitcher(e.state.formSwitcher?"login":"register")},className:"linkBtn",children:"Sing in"})]}):Object(j.jsxs)("span",{className:"underLine",children:["Don\u2019t have an account? ",Object(j.jsx)("button",{onClick:function(){return e.formSwitcher(e.state.formSwitcher?"login":"register")},className:"linkBtn",children:"Sing Up"})]})]})})}}]),a}(n.Component);var f=function(){return Object(j.jsx)(g,{})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),v()}},[[37,1,2]]]);
//# sourceMappingURL=main.59ac0c26.chunk.js.map