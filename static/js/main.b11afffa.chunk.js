(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,n,t){e.exports=t.p+"static/media/budget-illustration.4ad29cbf.png"},110:function(e,n,t){e.exports=t.p+"static/media/user.5e946c20.svg"},111:function(e,n,t){e.exports=t.p+"static/media/lock.1b3f94dc.svg"},116:function(e,n,t){e.exports=t(174)},121:function(e,n,t){},174:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(30),c=t.n(o),i=(t(121),t(32)),l=t(14),s=t(113),u=[],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_EXPENSE":return[].concat(Object(s.a)(e),[n.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==n.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===n.id?Object(l.a)({},e,n.update):e});default:return e}},d={text:"",sortBy:"date",startDate:void 0,endDate:void 0},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){default:return e;case"SET_TEXT_FILTER":return Object(l.a)({},e,{text:n.text});case"SORT_BY_DATE":return Object(l.a)({},e,{sortBy:"date"});case"SORT_BY_AMOUNT":return Object(l.a)({},e,{sortBy:"amount"});case"SET_START_DATE":return Object(l.a)({},e,{startDate:n.startDate});case"SET_END_DATE":return Object(l.a)({},e,{endDate:n.endDate})}},h=t(102),E=t.n(h),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.description,t=void 0===n?"":n,a=e.note,r=void 0===a?"":a,o=e.amount,c=void 0===o?0:o,i=e.createdAt,l=void 0===i?0:i;return{type:"ADD_EXPENSE",expense:{id:E()(),description:t,note:r,amount:c,createdAt:l}}},g=t(12),b=t(10),v=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Budget"),r.a.createElement("nav",null,r.a.createElement(b.c,{exact:!0,to:"/dashboard",activeClassName:"is-active"},"Dashboard"),r.a.createElement(b.c,{to:"/create",activeClassName:"is-active"},"Create"),r.a.createElement(b.c,{to:"/help",activeClassName:"is-active"},"Help"))))},x=t(44),w=t(45);function y(){var e=Object(x.a)(["\n  img {\n    border-radius: 100px;\n    margin-left: 100px;\n    height: 50rem;\n  }\n\n  @media screen and (max-width: 1040px) {\n    display: none;\n  }\n"]);return y=function(){return e},e}function O(){var e=Object(x.a)(['\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 25%;\n\n  @media screen and (max-width: 1040px) {\n    text-align: center;\n    width: inherit;\n  }\n\n  #password,\n  #email {\n    position: relative;\n    margin: 0 auto;\n  }\n\n  #email,\n  #password {\n    span {\n      img {\n        width: 20px;\n      }\n\n      position: absolute;\n      top: 10px;\n      left: 5%;\n    }\n  }\n\n  .home-title {\n    color: rgb(77, 81, 94);\n    font-size: 4.5rem;\n    text-transform: uppercase;\n    margin-bottom: 4rem;\n\n    span {\n      color: #6dbfcc;\n      font-size: 5rem;\n    }\n  }\n\n  form.form-container {\n    display: flex;\n    flex-direction: column;\n\n    input {\n      &:first-child {\n        margin-bottom: 4rem;\n      }\n\n      color: #a8a9af;\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n      font-size: 1.5rem;\n      font-weight: lighter;\n      padding: 1rem 2rem;\n      padding-left: 4rem;\n      border: none;\n      border-radius: 15px;\n      display: inline-block;\n\n      &::placeholder {\n        color: #a8a9af;\n      }\n\n      @media screen and (max-width: 1040px) {\n        width: 75vw;\n      }\n    }\n\n    #password {\n      background-image: url("../../assets/lock.svg");\n    }\n\n    p.msg-form {\n      margin-top: 5rem;\n      font-size: 2rem;\n      color: #7f8084;\n      font-weight: bold;\n\n      cursor: pointer;\n\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n\n    .login-button {\n      margin-top: 3rem;\n      background-color: #6dbfcc;\n      border: none;\n      font-size: 1.8rem;\n      font-weight: bold;\n      padding: 2rem 4rem;\n      color: white;\n      border-radius: 100px;\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n      cursor: pointer;\n      text-decoration: none;\n      transition: all 0.5s;\n\n      &:hover {\n        transform: translateY(-6px);\n      }\n\n      &:active {\n        transform: translateY(0px);\n        box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);\n      }\n\n      @media screen and (max-width: 1040px) {\n        width: 50vw;\n        margin: 3rem auto;\n      }\n    }\n  }\n\n  div.msg-container {\n    margin-top: 5rem;\n    text-align: left;\n\n    p {\n      font-size: 1.5rem;\n      color: #7f8084;\n      font-weight: bold;\n\n      span {\n        color: rgb(209, 77, 53);\n        cursor: pointer;\n\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n    .copy {\n      color: rgb(209, 77, 53);\n      font-weight: 700;\n      margin-top: 0.5rem;\n\n      a {\n        color: inherit;\n      }\n    }\n    @media screen and (max-width: 1040px) {\n      margin: 15rem auto;\n\n      p {\n        font-size: 2.5rem;\n      }\n    }\n  }\n']);return O=function(){return e},e}function A(){var e=Object(x.a)(["\n  background-color: $background-color;\n  padding: 8rem 18rem;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n\n  @media screen and (max-width: 1040px) {\n    width: 100vw;\n    position: absolute;\n    top: 40%;\n  }\n"]);return A=function(){return e},e}var D=w.a.section(A()),j=w.a.div(O()),C=w.a.div(y()),T=t(109),N=t.n(T),S=t(110),_=t.n(S),k=t(111),B=t.n(k),R=function(){return r.a.createElement(D,null,r.a.createElement(j,null," ",r.a.createElement("header",null,r.a.createElement("h1",{className:"home-title"},r.a.createElement("span",null,"2"),"Budget")),r.a.createElement("form",{className:"form-container"},r.a.createElement("div",{id:"email"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Email"}),r.a.createElement("span",null,r.a.createElement("img",{src:_.a,alt:"user-cion"}))),r.a.createElement("div",{id:"password"},r.a.createElement("input",{id:"password",type:"password",name:"password",placeholder:"Password"}),r.a.createElement("span",null,r.a.createElement("img",{src:B.a,alt:"user-cion"}))),r.a.createElement("p",{className:"msg-form"},"Forgot Password?"),r.a.createElement(b.b,{to:"/dashboard",className:"login-button"},"Login >")),r.a.createElement("div",{className:"msg-container"},r.a.createElement("p",null,"Don't have an account? ",r.a.createElement("span",null,"Sign up")),r.a.createElement("p",{className:"copy"},"Copyright \xa9"," ",r.a.createElement("a",{href:"https://github.com/LauraBeatris",target:"_blank",rel:"noopener noreferrer"},"Laura Beatris"," ")))),r.a.createElement(C,null,r.a.createElement("img",{src:N.a,alt:"budget-illustration"})))},F=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("h1",null," What are you doing here? "),r.a.createElement(b.b,{to:"/dashboard"},"Go Home"))},L=t(38),P=t(39),z=t(41),X=t(40),Y=t(42),M=t(3),I=t.n(M),G=t(112),H=(t(173),function(e){function n(){var e,t;Object(L.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(z.a)(this,(e=Object(X.a)(n)).call.apply(e,[this].concat(r)))).state={description:"",rent:"",amount:"",createdAt:I()(),calendarFocused:!1},t.onDescriptionChange=function(e){var n=e.target.value;t.setState({description:n})},t.onTextAreaChange=function(e){var n=e.target.value;t.setState({rent:n})},t.onAmountChange=function(e){var n=e.target.value;n.match(/^\d*(\.\d{0,2})?$/)&&t.setState({amount:n})},t.onDateChange=function(e){t.setState({createdAt:e})},t.onFocusChange=function(e){var n=e.focused;t.setState({calendarFocused:n})},t}return Object(Y.a)(n,e),Object(P.a)(n,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"description",value:this.state.description,onChange:this.onDescriptionChange,autoFocus:!0}),r.a.createElement("input",{type:"number",placeholder:"amount",value:this.state.amount,onChange:this.onAmountChange}),r.a.createElement(G.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onDateChange,focused:this.state.calendarFocused,onFocusChange:this.onFocusChange,numberOfMonths:1,isOutsideRange:function(e){return!1}}),r.a.createElement("textarea",{placeholder:"Add a note for your expense (optional)",value:this.state.rent,onChange:this.onTextAreaChange}),r.a.createElement("button",null,"Add Expense"))}}]),n}(a.Component)),J=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",null,r.a.createElement("h1",null,"Add a expense page"),r.a.createElement(H,null)))},U=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",null,r.a.createElement("h1",null,"Do you wanna some help?")))},V=function(e){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",null,r.a.createElement("h1",null,"Editing the expense with id of ",e.match.params.id)))},W=Object(g.b)()(function(e){var n=e.id,t=e.description,a=e.amount,o=e.createdAt,c=e.dispatch;return r.a.createElement("div",{className:"item-container"},r.a.createElement("p",{className:"description"},t),r.a.createElement("p",{className:"amount"},a),r.a.createElement("p",{className:"createdAt"},o),r.a.createElement("button",{onClick:function(){c(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:n}))}},"Remove"))}),$=function(e,n){var t=n.text,a=n.sortBy,r=n.startDate,o=n.endDate;return e.filter(function(e){var n="number"!==typeof r||e.createdAt>=r,a="number"!==typeof o||e.createdAt<=o,c=e.description.toLowerCase().includes(t.toLowerCase());return n&&a&&c}).sort(function(e,n){return"date"===a?n.createdAt<e.createdAt?-1:1:"amount"===a?e.amount>n.amount?-1:1:void 0})},q=Object(g.b)(function(e){return{expenses:$(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",{className:"list-container"},r.a.createElement("h1",null,"Expense List"),e.expenses.map(function(e){return r.a.createElement(W,Object.assign({key:e.id},e))}))}),K=Object(g.b)(function(e){return{filters:e.filters}})(function(e){return r.a.createElement("div",{className:"d-flex-column"},r.a.createElement("input",{type:"text",value:e.filters.text,onChange:function(n){e.dispatch(function(){return{type:"SET_TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(n.target.value))}}),r.a.createElement("select",{value:e.filters.sortBy,onChange:function(n){"date"===n.target.value?e.dispatch({type:"SORT_BY_DATE"}):e.dispatch({type:"SORT_BY_AMOUNT"})}},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Amount")))}),Q=function(e){function n(){return Object(L.a)(this,n),Object(z.a)(this,Object(X.a)(n).apply(this,arguments))}return Object(Y.a)(n,e),Object(P.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(q,null)))}}]),n}(a.Component),Z=t(13),ee=function(){return r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(Z.c,null,r.a.createElement(Z.a,{exact:!0,path:"/",component:R}),r.a.createElement(Z.a,{path:"/2budget",component:R}),r.a.createElement(Z.a,{path:"/dashboard",component:Q}),r.a.createElement(Z.a,{path:"/create",component:J}),r.a.createElement(Z.a,{path:"/edit/:id",component:V}),r.a.createElement(Z.a,{path:"/help",component:U}),r.a.createElement(Z.a,{component:F})," ")))},ne=Object(i.c)(Object(i.b)({expenses:m,filters:p}));ne.dispatch(f({description:"Water bill",note:"Some bill",amount:320})),ne.dispatch(f({description:"Gas bill",note:"Some bill",amount:420})),ne.dispatch(f({description:"Rent",note:"Some bill",createdAt:1e3,amount:12e3}));var te=r.a.createElement(g.a,{store:ne},r.a.createElement(ee,null));c.a.render(te,document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.b11afffa.chunk.js.map