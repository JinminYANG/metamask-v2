(this["webpackJsonpreact-and-web3-demo-app"]=this["webpackJsonpreact-and-web3-demo-app"]||[]).push([[0],{110:function(e,t,n){e.exports={login:"Login_login__1vDL5",button:"Login_button__1Binv"}},195:function(e,t,n){e.exports={card:"Card_card__Gobze"}},206:function(e,t,n){},220:function(e,t){},222:function(e,t){},227:function(e,t){},228:function(e,t){},254:function(e,t){},256:function(e,t){},270:function(e,t){},272:function(e,t){},286:function(e,t){},386:function(e,t){},388:function(e,t){},394:function(e,t){},406:function(e,t){},409:function(e,t){},414:function(e,t){},499:function(e,t,n){"use strict";n.r(t);var c=n(13),r=n.n(c),a=n(194),o=n.n(a),s=(n(206),n(14)),u=n(32),i=n(22),l=n(110),b=n.n(l),j=n(195),h=n.n(j),d=n(9),f=function(e){return Object(d.jsx)("div",{className:"".concat(h.a.card," ").concat(e.className),children:e.children})},O=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(window.ethereum),l=Object(i.a)(o,2),j=l[0],h=l[1],O=Object(c.useState)(!1),p=Object(i.a)(O,2),w=p[0],m=p[1];Object(c.useEffect)((function(){h(x())}),[]),Object(c.useEffect)((function(){j&&(j!==window.ethereum&&console.error("Not window.ethereum provider. Do you have multiple wallets installed?"),m(!0))}),[j]);var x=function(){var e;return window.ethereum?e=window.ethereum:window.web3?e=window.web3.currentProvider:console.warn("No Ethereum browser detected! Check out MetaMask"),e},v=function(){var t=Object(u.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("ontouchstart"in window)&&!("onmsgesturechange"in window)){t.next=4;break}k(),t.next=9;break;case 4:return a(!0),t.next=7,j.request({method:"eth_requestAccounts"});case 7:a(!1),e.onLogin(j);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){return window.open("https://metamask.app.link/dapp/18.207.114.82")};return Object(d.jsx)(f,{className:b.a.login,children:w&&Object(d.jsxs)("button",{onClick:v,className:b.a.button,type:"button",children:[!r&&"Connect",r&&"Loading..."]})})},p=n(73),w=n.n(p),m=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(f,{className:w.a.home,children:[Object(d.jsx)("h1",{children:"Welcome"}),Object(d.jsxs)("p",{children:["Wallet Address : ",e.currentAccount]}),Object(d.jsxs)("p",{children:["Current Network : ",e.currentNetwork]}),Object(d.jsxs)("p",{children:["Balance : ",e.balance]})]}),Object(d.jsx)("div",{className:w.a.btns,children:Object(d.jsx)("button",{className:w.a.logout,onClick:e.clickLogoutBtn,children:"Logout"})})]})},x=n(196),v=n.n(x);var k=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),o=Object(i.a)(a,2),l=o[0],b=o[1],j=Object(c.useState)(0),h=Object(i.a)(j,2),f=h[0],p=h[1],w=Object(c.useState)(window.ethereum),x=Object(i.a)(w,2),k=x[0],g=x[1],N=Object(c.useState)(null),_=Object(i.a)(N,2),C=_[0],y=_[1],L=Object(c.useState)(null),S=Object(i.a)(L,2),A=S[0],B=S[1],E={1:"Ethereum Main Network",3:"Ropsten Test Network",4:"Rinkeby Test Network",5:"Goerli Test Network",42:"Kovan Test Network"},M=function(){var e=Object(u.a)(Object(s.a)().mark((function e(t){var n,c,a,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new v.a(t),e.next=3,n.eth.getAccounts();case 3:return c=e.sent,e.next=6,n.eth.getChainId();case 6:return a=e.sent,e.t0=n.utils,e.next=10,n.eth.getBalance(c[0]);case 10:e.t1=e.sent,o=e.t0.fromWei.call(e.t0,e.t1,"ether"),0===c.length?console.log("Please connect to MataMask!"):c[0]!==l&&(g(t),B(n),y(a),b(c[0]),r(!0),p(Number(o).toFixed(10)));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(Object(s.a)().mark((function e(t){var n,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=A.utils,e.next=3,A.eth.getBalance(t[0]);case 3:if(e.t1=e.sent,n=e.t0.fromWei.call(e.t0,e.t1,"ether"),0!==t.length){e.next=10;break}return e.next=8,q();case 8:e.next=16;break;case 10:if(t[0]===l){e.next=16;break}return e.next=13,A.eth.getAccounts();case 13:c=e.sent,b(c),p(Number(n).toFixed(10));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=Object(u.a)(Object(s.a)().mark((function e(t){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.eth.getChainId();case 2:n=e.sent,y(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n&&(k.on("accountsChanged",e),k.on("chainChanged",t))}),[n]);var q=function(){var e=Object(u.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!1),b(null),p(0),g(null),y(null),B(null);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.request({method:"wallet_requestPermissions",params:[{eth_accounts:{requiredMethods:["signTypedData_v4"]}}]}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{className:"main-header",children:[Object(d.jsx)("h1",{children:"AIxCON"}),Object(d.jsx)("nav",{className:"nav",children:Object(d.jsx)("ul",{children:Object(d.jsx)("li",{children:Object(d.jsx)("a",{onClick:T,children:l})})})})]}),Object(d.jsxs)("main",{children:[!n&&Object(d.jsx)(O,{onLogin:M}),n&&Object(d.jsx)(m,{currentAccount:l,currentNetwork:function(e){return E[e]}(C),balance:f,clickLogoutBtn:q})]})]})};o.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}))},73:function(e,t,n){e.exports={home:"Home_home__21WEm",btns:"Home_btns__q8LfX",logout:"Home_logout__3OV6U"}}},[[499,1,2]]]);
//# sourceMappingURL=main.2576c324.chunk.js.map