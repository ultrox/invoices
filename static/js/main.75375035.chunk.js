(this.webpackJsonpinvoices=this.webpackJsonpinvoices||[]).push([[0],[,,,,,,function(e,n,t){e.exports={app:"styles_app__2kGhL",header:"styles_header__2Flqj",headerAndMenu:"styles_headerAndMenu__KiQ_A",main:"styles_main__1gW_0"}},,function(e,n,t){e.exports={menu:"styles_menu__3pfnh",link:"styles_link__DZOza",activeLink:"styles_activeLink__22bo6"}},,function(e,n,t){e.exports={table:"styles_table__3ShGV",activeColumnHeading:"styles_activeColumnHeading__3jYNk"}},,function(e,n,t){e.exports={header:"styles_header__3GNOB",logo:"styles_logo__3vo9k"}},,,,,function(e,n,t){e.exports={themeProvider:"ThemeProvider_themeProvider__1hUB0"}},function(e,n,t){e.exports=t.p+"static/media/logo.29e71b12.svg"},function(e,n,t){e.exports={container:"styles_container__1Ddpw"}},function(e,n,t){e.exports={container:"styles_container__2CYxk"}},,,function(e,n,t){e.exports={main:"styles_main__EEBhq"}},,function(e,n,t){e.exports=t(38)},,,,,,,,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),i=t.n(c),o=t(3),u=["en","sv"],l={"invoicing/app name":{en:"Invoicing App 1.0",sv:"Faktureringsapp 1.0"},"invoicing/create invoice":{en:"Create Invoice",sv:"Skapa faktura"},"invoicing/invoices":{en:"Invoices",sv:"Fakturor"},"invoicing/page not found":{en:"Page not found",sv:"Sidan kunde inte hittas"},"invoicing/total":{en:"Total",sv:"Att betala"},logo:{en:"Logo",sv:"Logga"}},s=Object(a.createContext)("en");s.displayName="I18nContext";var m=s,v=t(11);function f(){var e,n=Object(v.a)(navigator.languages);try{for(n.s();!(e=n.n()).done;){var t,a=e.value,r=Object(v.a)(u);try{for(r.s();!(t=r.n()).done;){var c=t.value;if(a.startsWith(c))return c}}catch(i){r.e(i)}finally{r.f()}}}catch(i){n.e(i)}finally{n.f()}return"en"}function p(e){var n=e.children,t=e.language,c=Object(a.useState)((function(){return f()})),i=Object(o.a)(c,2),u=i[0],l=i[1];return Object(a.useEffect)((function(){var e=function(){l(f())};return globalThis.addEventListener("languagechange",e),function(){return globalThis.removeEventListener("languagechange",e)}}),[]),r.a.createElement(m.Provider,{value:t||u},n)}function d(){var e=Object(a.useContext)(m);return Object(a.useCallback)((function(n){return l[n][e]}),[e])}function g(e){var n=e.label,t=d();return r.a.createElement(r.a.Fragment,null,n&&t(n))}var h=t(10),E=t.n(h),b=t(24);function _(e,n,t){var a=t;if(void 0!==n){var r=e[n];(r||""===r||0===r)&&(a="u"+e[n])}return a}function y(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return!!e})).join(" ")}var k=(0,a.memo)((function(e){var n=e.className,t=e.columns,c=e.rows,i=e.idKey,u=Object(a.useState)(),l=Object(o.a)(u,2),s=l[0],m=l[1],v=Object(a.useState)(1),f=Object(o.a)(v,2),p=f[0],d=f[1],g=function(e,n){var t=function(e){return e};if(e){var a,r=e.compare;if("string"===typeof r){var c=r;a=function(e,t){return n*(Number(e[c]>t[c])-Number(e[c]<t[c]))}}else{var i=r;a=function(e,t){return n*i(e,t)}}t=function(e){return Object(b.a)(e).sort(a)}}return t}(s,p);return r.a.createElement("table",{className:y(E.a.table,n)},r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e,n){return r.a.createElement("td",{className:e===s?E.a.activeColumnHeading:"",key:n,onClick:function(){return function(e){m(s!==e||1===p?e:void 0),d(s===e?-1:1)}(e)}},"string"===typeof e.heading?e.heading:r.a.createElement(e.heading,null))})))),r.a.createElement("tbody",{className:E.a.tableBody},g(c).map((function(e,n){return r.a.createElement("tr",{key:_(e,i,n)},t.map((function(n,t){var a=n.cell;return r.a.createElement("td",{key:t},function(){if("string"===typeof a)return String(e[a]);var n=a;return r.a.createElement(n,{row:e})}())})))}))))})),N=t(17),j=t.n(N);function O(e){var n=e.children;return r.a.createElement("div",{className:j.a.themeProvider},n)}var w=t(12),x=t.n(w),C=t(18),P=t.n(C);function L(e){var n=e.className,t=d();return r.a.createElement("header",{className:y(x.a.header,n)},r.a.createElement("img",{src:P.a,className:x.a.logo,alt:t("logo")}),r.a.createElement("h1",null,t("invoicing/app name")))}var S=t(19),M=t.n(S);var I=function(e){e.invoice;var n=Object(a.useCallback)((function(e){e.preventDefault();var n=new FormData(e.target);alert(n),console.log(n)}),[]);return r.a.createElement("section",{className:M.a.container},r.a.createElement("form",{onSubmit:n},r.a.createElement("input",{type:"number"}),r.a.createElement("input",{type:"submit",value:"!"})))},A=t(20),F=t.n(A);var B=[{cell:function(e){var n=e.row,t=n.currency,a=n.lineItems.reduce((function(e,n){var t=n.baseValue;return e+n.count*t}),0);return r.a.createElement(r.a.Fragment,null,a," ",t)},compare:"currency",heading:function(){return r.a.createElement(g,{label:"invoicing/total"})}}];var D=Object(a.memo)((function(e){var n=e.invoices;return r.a.createElement("div",{className:F.a.container},r.a.createElement(k,{columns:B,rows:n,idKey:"id"}))})),K=t(9);var T=t(22),W=t.n(T),G=t(1),H=t.n(G),J=t(2),V=(t(13),{invoices:[{currency:"SEK",id:451,lineItems:[{baseValue:40.5,count:10,description:"Potatoes"}],recipient:"Example"}],nextId:20380451});function q(){var e=localStorage.getItem("invoicing");return e?JSON.parse(e):V}function R(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(J.a)(H.a.mark((function e(n){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q()[n]);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return Q.apply(this,arguments)}function Q(){return(Q=Object(J.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R("invoices"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=[{Component:function(e){var n=d();return r.a.createElement("div",null,n("invoicing/page not found"))},defaultRoute:!0,routingPath:"404"},{Component:function(e){var n=W()(z,[]),t=Object(o.a)(n,2),a=t[0],c=t[1];return c?r.a.createElement(r.a.Fragment,null,String(c)):r.a.createElement(D,{invoices:a||[]})},navMenuLabel:"invoicing/invoices",navMenuLinkPath:".",routingPath:"/"},{Component:function(e){return r.a.createElement(I,null)},navMenuLabel:"invoicing/create invoice",navMenuLinkPath:"create",routingPath:"create"}],Z=t(23),$=t.n(Z);var X=Object(a.memo)((function(e){var n=e.className;return r.a.createElement("main",{className:y($.a.main,n)},r.a.createElement(K.b,null,U.map((function(e,n){var t=e.Component,a=e.defaultRoute,c=e.routingPath;return r.a.createElement(t,{key:n,default:a,path:c})}))))})),ee=t(8),ne=t.n(ee);function te(e){var n=e.isCurrent;return{className:y(ne.a.link,n&&ne.a.activeLink)}}var ae=Object(a.memo)((function(e){var n=e.className,t=d();return r.a.createElement("nav",{className:y(ne.a.menu,n)},r.a.createElement("ul",null,U.map((function(e,n){var a=e.navMenuLabel,c=e.navMenuLinkPath;return a&&c&&r.a.createElement("li",{key:n},r.a.createElement(K.a,{className:ne.a.link,getProps:te,to:c},t(a)))}))))})),re=t(6),ce=t.n(re);var ie=function(){return r.a.createElement(p,null,r.a.createElement(O,null,r.a.createElement("div",{className:ce.a.app},r.a.createElement("div",{className:ce.a.headerAndMenu},r.a.createElement(L,{className:ce.a.header}),r.a.createElement(ae,{className:ce.a.menu})),r.a.createElement(X,{className:ce.a.main}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(37);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.75375035.chunk.js.map