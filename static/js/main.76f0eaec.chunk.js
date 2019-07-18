(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(n,e,t){n.exports=t.p+"static/media/budget-illustration.4ad29cbf.png"},110:function(n,e,t){n.exports=t.p+"static/media/user.5e946c20.svg"},111:function(n,e,t){n.exports=t.p+"static/media/lock.1b3f94dc.svg"},117:function(n,e,t){n.exports=t(176)},122:function(n,e,t){},176:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(40),i=t.n(o),c=(t(122),t(42)),l=t(18),s=t(114),m=[],d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_EXPENSE":return[].concat(Object(s.a)(n),[e.expense]);case"REMOVE_EXPENSE":return n.filter(function(n){return n.id!==e.id});case"EDIT_EXPENSE":return n.map(function(n){return n.id===e.id?Object(l.a)({},n,e.update):n});default:return n}},u=t(2),p=t.n(u),f={text:"",sortBy:"date",startDate:p()().startOf("month"),endDate:p()().endOf("month")},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){default:return n;case"SET_TEXT_FILTER":return Object(l.a)({},n,{text:e.text});case"SORT_BY_DATE":return Object(l.a)({},n,{sortBy:"date"});case"SORT_BY_AMOUNT":return Object(l.a)({},n,{sortBy:"amount"});case"SET_START_DATE":return Object(l.a)({},n,{startDate:e.startDate});case"SET_END_DATE":return Object(l.a)({},n,{endDate:e.endDate})}},b=t(104),g=t.n(b),x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.description,t=void 0===e?"":e,a=n.note,r=void 0===a?"":a,o=n.amount,i=void 0===o?0:o,c=n.createdAt,l=void 0===c?0:c;return{type:"ADD_EXPENSE",expense:{id:g()(),description:t,note:r,amount:i,createdAt:l}}},E=t(15),v=t(4),w=t(5);function y(){var n=Object(v.a)(["\n  img {\n    border-radius: 100px;\n    margin-left: 100px;\n    height: 50rem;\n  }\n\n  @media screen and (max-width: 1040px) {\n    display: none;\n  }\n"]);return y=function(){return n},n}function O(){var n=Object(v.a)(['\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 25%;\n\n  @media screen and (max-width: 1020px) {\n    text-align: center;\n    width: inherit;\n  }\n\n  #password,\n  #email {\n    position: relative;\n    margin: 0 auto;\n  }\n\n  #email,\n  #password {\n    span {\n      img {\n        width: 20px;\n      }\n\n      position: absolute;\n      top: 10px;\n      left: 5%;\n\n      @media screen and (max-width: 1020px) {\n        left: 2.5%;\n      }\n    }\n  }\n\n  .home-title {\n    color: rgb(77, 81, 94);\n    font-size: 4.5rem;\n    text-transform: uppercase;\n    margin-bottom: 4rem;\n\n    span {\n      color: #6dbfcc;\n      font-size: 5rem;\n    }\n  }\n\n  form.form-container {\n    display: flex;\n    flex-direction: column;\n\n    input {\n      &:first-child {\n        margin-bottom: 4rem;\n      }\n\n      color: #a8a9af;\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n      font-size: 1.5rem;\n      font-weight: lighter;\n      padding: 1rem 2rem;\n      padding-left: 4rem;\n      border: none;\n      border-radius: 15px;\n      display: inline-block;\n\n      &::placeholder {\n        color: #a8a9af;\n      }\n\n      @media screen and (max-width: 1040px) {\n        width: 75vw;\n      }\n    }\n\n    #password {\n      background-image: url("../../assets/lock.svg");\n    }\n\n    p.msg-form {\n      margin-top: 5rem;\n      font-size: 2rem;\n      color: #7f8084;\n      font-weight: bold;\n\n      cursor: pointer;\n\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n\n    .login-button {\n      margin-top: 3rem;\n      background-color: #6dbfcc;\n      border: none;\n      font-size: 1.8rem;\n      font-weight: bold;\n      padding: 2rem 4rem;\n      color: white;\n      border-radius: 100px;\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n      cursor: pointer;\n      text-decoration: none;\n      transition: all 0.5s;\n\n      &:hover {\n        transform: translateY(-6px);\n      }\n\n      &:active {\n        transform: translateY(0px);\n        box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);\n      }\n\n      @media screen and (max-width: 1040px) {\n        width: 50vw;\n        margin: 3rem auto;\n      }\n    }\n  }\n\n  div.msg-container {\n    margin-top: 5rem;\n    text-align: left;\n\n    p {\n      font-size: 1.5rem;\n      color: #7f8084;\n      font-weight: bold;\n\n      span {\n        color: rgb(209, 77, 53);\n        cursor: pointer;\n\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n    .copy {\n      color: rgb(209, 77, 53);\n      font-weight: 700;\n      margin-top: 0.5rem;\n\n      a {\n        color: inherit;\n      }\n    }\n    @media screen and (max-width: 1040px) {\n      margin: 4.5rem auto;\n\n      p {\n        font-size: 2rem;\n      }\n    }\n  }\n']);return O=function(){return n},n}function D(){var n=Object(v.a)(["\n  background-color: $background-color;\n  padding: 8rem 18rem;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n\n  @media screen and (max-width: 1040px) {\n    margin: 4rem auto;\n  }\n"]);return D=function(){return n},n}var j=w.a.section(D()),N=w.a.div(O()),S=w.a.div(y()),C=t(109),_=t.n(C),T=t(110),A=t.n(T),k=t(111),z=t.n(k),F=t(9),R=function(){return r.a.createElement(j,null,r.a.createElement(N,null," ",r.a.createElement("header",null,r.a.createElement("h1",{className:"home-title"},r.a.createElement("span",null,"2"),"Budget")),r.a.createElement("form",{className:"form-container"},r.a.createElement("div",{id:"email"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Email"}),r.a.createElement("span",null,r.a.createElement("img",{src:A.a,alt:"user-cion"}))),r.a.createElement("div",{id:"password"},r.a.createElement("input",{id:"password",type:"password",name:"password",placeholder:"Password"}),r.a.createElement("span",null,r.a.createElement("img",{id:"user",src:z.a,alt:"user-cion"}))),r.a.createElement("p",{className:"msg-form"},"Forgot Password?"),r.a.createElement(F.b,{to:"/dashboard",className:"login-button"},"Login >")),r.a.createElement("div",{className:"msg-container"},r.a.createElement("p",null,"Don't have an account? ",r.a.createElement("span",null,"Sign up")),r.a.createElement("p",{className:"copy"},"Copyright \xa9"," ",r.a.createElement("a",{href:"https://github.com/LauraBeatris",target:"_blank",rel:"noopener noreferrer"},"Laura Beatris"," ")))),r.a.createElement(S,null,r.a.createElement("img",{src:_.a,alt:"budget-illustration"})))};function Y(){var n=Object(v.a)(["\n  display: none;\n\n  h1 {\n    position: fixed;\n    top: 40px;\n    left: 40px;\n    z-index: 6;\n    color: rgb(77, 81, 94);\n    font-size: 2.2rem;\n    text-transform: uppercase;\n\n    > span {\n      text-transform: none;\n      opacity: .5;\n      font-weight: 300;\n      font-size: 12px;\n    }\n  }\n\n    span {\n      color: #6dbfcc;\n      font-size: 2.7rem;\n    }\n  }\n\n  input + label {\n    position: fixed;\n    top: 45px;\n    right: 70px;\n    height: 20px;\n    width: 15px;\n    z-index: 5;\n    span {\n      position: absolute;\n      width: 100%;\n      height: 2px;\n      top: 50%;\n      margin-top: -1px;\n      left: 0;\n      display: block;\n      background: rgb(77, 81, 94);\n      transition: 0.5s;\n    }\n    span:first-child {\n      top: 3px;\n    }\n    span:last-child {\n      top: 16px;\n    }\n  }\n  label:hover {\n    cursor: pointer;\n  }\n  input:checked + label {\n    span {\n      opacity: 0;\n      top: 50%;\n    }\n    span:first-child {\n      opacity: 1;\n      transform: rotate(405deg);\n    }\n    span:last-child {\n      opacity: 1;\n      transform: rotate(-405deg);\n    }\n  }\n  input ~ nav {\n    position: fixed;\n    background: white;\n    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100px;\n    z-index: 3;\n    transition: 0.5s;\n    transition-delay: 0.5s;\n    overflow: hidden;\n    > ul {\n      text-align: center;\n      position: absolute;\n      top: 35%;\n      left: 20%;\n      right: 20%;\n      list-style: none;\n      > li {\n        opacity: 0;\n        transition: 0.5s;\n        transition-delay: 0s;\n        > a {\n          text-decoration: none;\n          text-transform: uppercase;\n          color: $blackColor;\n          font-weight: 700;\n          font-family: sans-serif;\n          display: block;\n          padding: 30px;\n        }\n      }\n    }\n  }\n  input:checked ~ nav {\n    height: 100%;\n    transition-delay: 0s;\n    > ul {\n      > li {\n        opacity: 1;\n        transition-delay: 0.5s;\n      }\n    }\n  }\n\n  @media screen and (max-width: 45rem) {\n    display: flex;\n    flex-direction: row;\n  }\n"]);return Y=function(){return n},n}function B(){var n=Object(v.a)(["\n  background-color: #fff;\n  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1rem;\n  padding: 2rem 4rem;\n  max-width: 100vw;\n\n  h1.logo {\n    color: rgb(77, 81, 94);\n    font-size: 2.2rem;\n    text-transform: uppercase;\n\n    span {\n      color: #6dbfcc;\n      font-size: 2.7rem;\n    }\n  }\n\n  .navbar-wrapper {\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n\n    justify-content: space-between;\n\n    height: 7rem;\n  }\n\n  div.navbar-1 {\n    display: flex;\n    flex-direction: row;\n\n    nav {\n      margin-left: 2rem;\n      a {\n        font-family: inherit;\n        text-decoration: none;\n        text-transform: uppercase;\n        font-size: 1.4rem;\n        font-weight: bold;\n        color: rgb(77, 81, 94);\n        cursor: pointer;\n        display: inline-block;\n        padding: 1rem 1rem;\n\n        &.is-active,\n        &:hover {\n          color: #6dbfcc;\n        }\n      }\n\n      @media screen and (max-width: 45rem) {\n        display: none;\n      }\n    }\n  }\n\n  div.navbar-2 {\n    a {\n      font-family: inherit;\n      text-decoration: none;\n      text-transform: uppercase;\n      font-size: 1.4rem;\n      font-weight: bold;\n      color: rgb(77, 81, 94);\n      cursor: pointer;\n      display: inline-block;\n      padding: 1rem 1rem;\n\n      &.is-active,\n      &:hover {\n        color: #6dbfcc;\n      }\n\n      &.logout {\n        border-radius: 12px;\n        margin-left: 1rem;\n        border: 1px solid rgb(77, 81, 94);\n      }\n    }\n  }\n"]);return B=function(){return n},n}var M=w.a.header(B()),P=w.a.nav(Y()),X=function(){return r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement(M,{className:"header"},r.a.createElement("div",{className:"navbar-1"},r.a.createElement("h1",{className:"logo"},r.a.createElement("span",null,"2"),"Budget"),r.a.createElement("nav",null,r.a.createElement(F.c,{exact:!0,to:"/dashboard",activeClassName:"is-active"},"Dashboard"),r.a.createElement(F.c,{to:"/create",activeClassName:"is-active"},"Create Expense"))),r.a.createElement("div",{className:"navbar-2"},r.a.createElement(P,null,r.a.createElement("h1",{className:"logo"},r.a.createElement("span",null,"2"),"Budget"),r.a.createElement("input",{id:"burger",type:"checkbox"}),r.a.createElement("label",{htmlFor:"burger"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(F.c,{exact:!0,to:"/dashboard",activeClassName:"is-active"},"Dashboard")),r.a.createElement("li",null,r.a.createElement(F.c,{to:"/create",activeClassName:"is-active"},"Create Expense")),r.a.createElement("li",null,r.a.createElement(F.c,{exact:!0,to:"/",activeClassName:"is-active"},"LogOut"))))),r.a.createElement(F.c,{className:"logout",exact:!0,to:"/",activeClassName:"is-active"},"LogOut"))))},L=function(){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement("h1",null," What are you doing here? "),r.a.createElement(F.b,{to:"/dashboard"},"Go Home"))},I=t(27),$=t(28),U=t(30),V=t(29),G=t(31),J=t(48);t(175);function W(){var n=Object(v.a)(['\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n\n  .msg-error {\n    font-size: 1.5rem;\n    color: rgb(209, 77, 53);\n    margin-bottom: 1rem;\n    font-weight: bold;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n\n    justify-content: center;\n    align-items: center;\n  }\n\n  .description-amount {\n    padding: 1rem;\n    margin-bottom: 2rem;\n    text-align: center;\n\n    input:first-child {\n      margin-right: 1rem;\n      border-radius: 8px;\n      border: 1px solid rgb(77, 81, 94);\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n      color: rgb(77, 81, 94);\n      font-style: italic;\n      font-size: 1.5rem;\n      padding: 0.5rem 1rem;\n      text-transform: lowercase;\n      font-style: italic;\n      &::placeholder {\n        font-weight: lighter;\n        color: rgb(77, 81, 94);\n      }\n    }\n\n    input:last-child {\n      padding: 5px 10px;\n      width: 100px;\n      font-style: italic;\n      font-weight: lighter;\n      background-color: transparent;\n      border: none;\n      color: rgb(77, 81, 94);\n      font-size: 1.8rem;\n      border-bottom: 1px solid rgb(77, 81, 94);\n    }\n  }\n\n  .note {\n    border: 1px solid rgb(77, 81, 94, 0.9);\n    background-color: #fff;\n    overflow: auto;\n    resize: none;\n    padding: 2rem 2rem;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 2rem;\n    color: #6dbfcc;\n    margin-bottom: 2rem;\n\n    &::placeholder {\n      font-weight: bold;\n      color: #6dbfcc;\n      font-family: "Raleway";\n    }\n  }\n\n  button.btn-submit {\n    margin-top: 3rem;\n    background-color: #6dbfcc;\n    border: none;\n    font-size: 1.6rem;\n    font-weight: bold;\n    padding: 2rem 4rem;\n    color: white;\n    border-radius: 100px;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    text-decoration: none;\n    transition: all 0.5s;\n\n    &:hover {\n      transform: translateY(-6px);\n    }\n\n    &:active {\n      transform: translateY(0px);\n      box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);\n    }\n  }\n']);return W=function(){return n},n}var H=w.a.div(W()),q=function(n){function e(n){var t;return Object(I.a)(this,e),(t=Object(U.a)(this,Object(V.a)(e).call(this,n))).onDescriptionChange=function(n){var e=n.target.value;t.setState({description:e})},t.onTextAreaChange=function(n){var e=n.target.value;t.setState({note:e})},t.onAmountChange=function(n){var e=n.target.value;e&&!e.match(/^\d{1,}(\.\d{0,2})?$/)||t.setState({amount:e})},t.onDateChange=function(n){n&&t.setState({createdAt:n})},t.onFocusChange=function(n){var e=n.focused;t.setState({calendarFocused:e})},t.onSubmit=function(n){if(n.preventDefault(),t.state.description&&t.state.amount)t.setState({error:""}),t.props.onSubmit({description:t.state.description,amount:100*parseFloat(t.state.amount,10),createdAt:t.state.createdAt.valueOf(),note:t.state.note});else{t.setState({error:"Please provide description and amount"})}},t.state={description:n.expense?n.expense.description:"",note:n.expense?n.expense.note:"",amount:n.expense?(n.expense.amount/100).toString():"",createdAt:n.expense?p()(n.expense.createdAt):p()(),calendarFocused:!1,error:""},t}return Object(G.a)(e,n),Object($.a)(e,[{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement("form",{onSubmit:this.onSubmit}," ",r.a.createElement("div",null,this.state.error&&r.a.createElement("p",{className:"msg-error"},this.state.error)),r.a.createElement("div",{className:"description-amount"},r.a.createElement("input",{type:"text",placeholder:"Type a description",value:this.state.description,onChange:this.onDescriptionChange,autoFocus:!0}),r.a.createElement("input",{type:"number",placeholder:"amount",value:this.state.amount,onChange:this.onAmountChange})),r.a.createElement("textarea",{placeholder:"Add a note for your expense (optional)",value:this.state.rent,onChange:this.onTextAreaChange,className:"note",rows:"2"}),r.a.createElement(J.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onDateChange,focused:this.state.calendarFocused,onFocusChange:this.onFocusChange,numberOfMonths:1,isOutsideRange:function(n){return!1}}),r.a.createElement("button",{className:"btn-submit"},"Add Expense")))}}]),e}(a.Component);function K(){var n=Object(v.a)(["\n  text-align: center;\n\n  .add-title {\n    margin-top: 4rem;\n    font-size: 2rem;\n    font-weight: 100;\n    color: rgb(77, 81, 94);\n  }\n"]);return K=function(){return n},n}var Q=w.a.div(K()),Z=Object(E.b)()(function(n){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(Q,null,r.a.createElement("h1",{className:"add-title"},"Add a expense"),r.a.createElement(q,{onSubmit:function(e){n.dispatch(x(e)),n.history.push("/dashboard")}})))});function nn(){var n=Object(v.a)(["\n  text-align: center;\n"]);return nn=function(){return n},n}function en(){var n=Object(v.a)(["\n  margin-top: 1rem;\n  background-color: #6dbfcc;\n  border: none;\n  font-size: 1.6rem;\n  font-weight: bold;\n  padding: 2rem 4rem;\n  color: white;\n  border-radius: 100px;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.5s;\n\n  &:hover {\n    transform: translateY(-6px);\n  }\n\n  &:active {\n    transform: translateY(0px);\n    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);\n  }\n"]);return en=function(){return n},n}var tn=w.a.button(en()),an=w.a.div(nn()),rn=Object(E.b)(function(n,e){return{expense:n.expenses.find(function(n){return n.id===e.match.params.id})}})(function(n){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(an,null,r.a.createElement(q,{expense:n.expense,onSubmit:function(e){n.dispatch({type:"EDIT_EXPENSE",id:n.expense.id,update:e}),n.history.push("/dashboard")}}),r.a.createElement(tn,{onClick:function(){n.dispatch(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:n.expense.id})),n.history.push("/dashboard")},className:"btn-remove"},"Remove")))});function on(){var n=Object(v.a)(['\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 30%;\n  font-size: 2rem;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid rgb(77, 81, 94);\n  transition: all 0.25s;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n\n  a.description {\n    text-decoration: none;\n    font-family: "Montserrat", sans-serif;\n    color: #6dbfcc;\n    font-weight: 600;\n  }\n\n  p {\n    color: rgb(77, 81, 94);\n    font-weight: 500;\n  }\n\n  @media screen and (max-width: 45rem) {\n    width: inherit;\n\n    p {\n      margin-left: 2rem;\n    }\n  }\n']);return on=function(){return n},n}var cn=w.a.div(on()),ln=function(n){var e=n.id,t=n.description,a=n.amount,o=n.createdAt;return r.a.createElement(cn,null,r.a.createElement(F.b,{className:"description",to:"/edit/".concat(e)},t),r.a.createElement("p",{className:"amount"},"$",a),r.a.createElement("p",{className:"createdAt"},p()(o).format("DD/MM/YYYY")))},sn=function(n,e){var t=e.text,a=e.sortBy,r=e.startDate,o=e.endDate;return n.filter(function(n){var e=p()(n.createdAt),a=!r||r.isSameOrBefore(e,"day"),i=!o||o.isSameOrAfter(e,"day"),c=n.description.toLowerCase().includes(t.toLowerCase());return a&&i&&c}).sort(function(n,e){return"date"===a?e.createdAt<n.createdAt?-1:1:"amount"===a?n.amount>e.amount?-1:1:void 0})};function mn(){var n=Object(v.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-family: "Montserrat", sans-serif;\n  margin-top: 4rem;\n\n  .summary {\n    line-height: 1;\n    margin-bottom: 4rem;\n    color: #6dbfcc;\n    h1.total-amount {\n      font-weight: 400;\n      font-size: 6.5rem;\n      margin-bottom: 1.5rem;\n    }\n\n    h2 {\n      font-size: 2rem;\n      text-transform: uppercase;\n      font-weight: bold;\n    }\n\n    .moment {\n      font-size: 1.8rem;\n\n      margin-bottom: 1rem;\n      text-transform: uppercase;\n      font-weight: 500;\n    }\n  }\n\n  @media screen and (max-width: 45rem) {\n    margin: 2rem auto;\n  }\n']);return mn=function(){return n},n}var dn=w.a.div(mn()),un=Object(E.b)(function(n){return{expenses:sn(n.expenses,n.filters)}})(function(n){return r.a.createElement(dn,null,r.a.createElement("div",{className:"summary"},r.a.createElement("p",{className:"moment"},p()().format("MMMM YYYY")),r.a.createElement("h1",{className:"total-amount"},"$208,5"),r.a.createElement("h2",null,"Total Amount")),n.expenses.map(function(n){return r.a.createElement(ln,Object.assign({key:n.id},n))}))}),pn=function(n){return{type:"SET_START_DATE",startDate:n}},fn=function(n){return{type:"SET_END_DATE",endDate:n}};function hn(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 1rem;\n  .input-container {\n    input:first-child {\n      margin-right: 0.5rem;\n      padding: 0.5rem 1rem;\n      font-size: 1.5rem;\n      border-radius: 8px;\n      border: 1px solid rgb(77, 81, 94);\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n\n      &::placeholder {\n        font-style: italic;\n        text-transform: lowercase;\n        color: rgb(77, 81, 94);\n      }\n    }\n\n    .DateRangePickerInput {\n      margin: 1rem 2rem;\n    }\n\n    select {\n      border-radius: 8px;\n      border: 1px solid rgb(77, 81, 94);\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n      color: rgb(77, 81, 94);\n      font-size: 1.5rem;\n      padding: 0.5rem 1rem;\n      text-transform: lowercase;\n      font-style: italic;\n\n      option:hover {\n        background-color: rgb(77, 81, 94, 0.9);\n      }\n    }\n  }\n\n  .date-range {\n    margin-top: 2rem;\n  }\n"]);return hn=function(){return n},n}var bn=w.a.div(hn()),gn=function(n){function e(){var n,t;Object(I.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(U.a)(this,(n=Object(V.a)(e)).call.apply(n,[this].concat(r)))).state={calendarFocused:null},t.onDatesChange=function(n){var e=n.startDate,a=n.endDate;t.props.dispatch(pn(e)),t.props.dispatch(fn(a))},t.onFocusChange=function(n){t.setState({calendarFocused:n})},t}return Object(G.a)(e,n),Object($.a)(e,[{key:"render",value:function(){var n=this;return r.a.createElement(bn,null,r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{type:"text",value:this.props.filters.text,onChange:function(e){n.props.dispatch(function(){return{type:"SET_TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(e.target.value))},placeholder:"Filter by Description"}),r.a.createElement("select",{value:this.props.filters.sortBy,onChange:function(e){"date"===e.target.value?n.props.dispatch({type:"SORT_BY_DATE"}):n.props.dispatch({type:"SORT_BY_AMOUNT"})}},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Amount")),r.a.createElement("div",{className:"date-range"},r.a.createElement(J.DateRangePicker,{startDate:this.props.filters.startDate,endDate:this.props.filters.endDate,onDatesChange:this.onDatesChange,focusedInput:this.state.calendarFocused,onFocusChange:this.onFocusChange,showClearDates:!0,numberOfMonths:1,isOutsideRange:function(){return!1}}))))}}]),e}(a.Component),xn=Object(E.b)(function(n){return{filters:n.filters}})(gn);function En(){var n=Object(v.a)(["\n  text-align: center;\n  margin-top: 3rem;\n  label {\n    font-size: 2rem;\n    color: rgb(77, 81, 94);\n  }\n"]);return En=function(){return n},n}var vn=w.a.div(En()),wn=function(n){function e(){return Object(I.a)(this,e),Object(U.a)(this,Object(V.a)(e).apply(this,arguments))}return Object(G.a)(e,n),Object($.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(vn,null,r.a.createElement("label",null,"Filters"),r.a.createElement(xn,null),r.a.createElement(un,null)))}}]),e}(a.Component),yn=t(17),On=function(){return r.a.createElement(F.a,null,r.a.createElement("div",null,r.a.createElement(yn.c,null,r.a.createElement(yn.a,{exact:!0,path:"/",component:R}),r.a.createElement(yn.a,{path:"/2budget",component:R}),r.a.createElement(yn.a,{path:"/dashboard",component:wn}),r.a.createElement(yn.a,{path:"/create",component:Z}),r.a.createElement(yn.a,{path:"/edit/:id",component:rn}),r.a.createElement(yn.a,{component:L})," ")))},Dn=Object(c.c)(Object(c.b)({expenses:d,filters:h}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Dn.dispatch(x({description:"Water bill",note:"Some bill",amount:320})),Dn.dispatch(x({description:"Gas bill",note:"Some bill",amount:420})),Dn.dispatch(x({description:"Rent",note:"Some bill",createdAt:1e3,amount:12e3}));var jn=r.a.createElement(E.a,{store:Dn},r.a.createElement(On,null));i.a.render(jn,document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.76f0eaec.chunk.js.map