(this["webpackJsonpapp-marvel"]=this["webpackJsonpapp-marvel"]||[]).push([[0],{62:function(n,e,t){},68:function(n,e,t){"use strict";t.r(e);var c,a,r,o,i,s,b=t(0),d=t.n(b),l=t(32),u=t.n(l),p=t(20),j=t(8),h=t(9),x=t.p+"static/media/iron-man.44b59cef.svg",m=Object(h.a)(c||(c=Object(j.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #000000 url(",") no-repeat 87% top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 16px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 20px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"])),x),O=t(3),g=t(16),f=t.n(g),v=t(21),k=t(12),w=t(36),y=t.n(w).a.create({baseURL:"https://gateway.marvel.com",params:{ts:"1613092991",apikey:"35bc09b43df66e5c38b2a6f5bc7e6f8b",hash:"fa726e2e14e6dfbf8cd45637f07bc92b"}}),E=t(25),C=t(38),S=(t(62),t(1)),N=function(n){var e=n.show,t=n.comic,c=Object(C.a)(n,["show","comic"]);return e?Object(S.jsx)("div",{className:"modal-overlay ".concat(e?"active":""),children:Object(S.jsxs)("div",{className:"modal",id:"modal",children:[Object(S.jsx)("h1",{children:null===t||void 0===t?void 0:t.title}),Object(S.jsxs)("div",{className:"content",children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("strong",{children:"Descri\xe7\xe3o:"}),(null===t||void 0===t?void 0:t.description)?t.description:"Quadrinho sem descri\xe7\xe3o"]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("strong",{children:"N\xfamero de p\xe1ginas:"}),(null===t||void 0===t?void 0:t.pageCount)&&0!==(null===t||void 0===t?void 0:t.pageCount)?t.pageCount:"Quadrinho sem n\xfamero de p\xe1ginas"]})]}),Object(S.jsx)("div",{className:"actions",children:Object(S.jsx)("button",Object(E.a)(Object(E.a)({className:"toggle-button",type:"button"},c),{},{children:"fechar"}))})]})}):null},q=t.p+"static/media/marvel.69550def.png",D=t(37),z=h.c.h1(a||(a=Object(j.a)(["\n  font-size: 48px;\n  color: #b5b5b5;\n  max-width: 470px;\n  line-height: 56px;\n\n  margin-top: 80px;\n"]))),F=h.c.form(r||(r=Object(j.a)(["\n  margin-top: 40px;\n  max-width: 100%;\n  flex: 1;\n\n  display: flex;\n\n  input {\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n    border: 0;\n    color: #b5b5b5;\n    background-color: #1c1c1c;\n    border-radius: 5px;\n    border: 2px solid #1c1c1c;\n\n    ","\n\n    &:focus {\n      border: 2px solid #eead0e;\n    }\n\n    &::placeholder {\n      color: #b5b5b5;\n    }\n  }\n"])),(function(n){return n.hasError&&Object(h.b)(o||(o=Object(j.a)(["\n        border-color: #c53030;\n      "])))})),M=h.c.span(i||(i=Object(j.a)(["\n  display: block;\n  color: #c53030;\n"]))),J=h.c.div(s||(s=Object(j.a)(["\n  margin-top: 80px;\n  max-width: 100%;\n\n  li {\n    background: #1c1c1c;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    & + li {\n      margin-top: 16px;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    button {\n      width: 150px;\n      height: 70px;\n      background: #eead0e;\n      border-radius: 5px;\n      border: 0;\n      color: #1c1c1c;\n      font-weight: bold;\n      transition: background-color 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n\n    img {\n      width: 100px;\n      height: 150px;\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #b5b5b5;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: #cbcbcdd6;\n    }\n  }"])),Object(D.a)(.2,"#EEAD0E")),Q=function(){var n=Object(b.useState)(""),e=Object(k.a)(n,2),t=e[0],c=e[1],a=Object(b.useState)([]),r=Object(k.a)(a,2),o=r[0],i=r[1],s=Object(b.useState)(),d=Object(k.a)(s,2),l=d[0],u=d[1],p=Object(b.useState)(""),j=Object(k.a)(p,2),h=j[0],x=j[1],m=Object(b.useState)(!1),O=Object(k.a)(m,2),g=O[0],w=O[1];function E(){return(E=Object(v.a)(f.a.mark((function n(){var e,c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.get("v1/public/comics",{params:{titleStartsWith:t}});case 2:e=n.sent,c=e.data.data.results,i(c);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(b.useEffect)((function(){o&&!t||function(){E.apply(this,arguments)}()}),[t]);var C=Object(b.useCallback)((function(){w(!g)}),[g]);function D(n){return Q.apply(this,arguments)}function Q(){return(Q=Object(v.a)(f.a.mark((function n(e){var t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.target.value){n.next=4;break}return x("Digite o t\xedtulo do quadrinho"),n.abrupt("return");case 4:if(n.prev=4,!t.length){n.next=10;break}return n.next=8,setTimeout((function(){c(t)}),500);case 8:n.next=12;break;case 10:i([]),x("Erro na busca por esse quadrinho");case 12:x(""),c(""),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(4),x("Erro na busca por esse quadrinho");case 19:case"end":return n.stop()}}),n,null,[[4,16]])})))).apply(this,arguments)}var R=Object(b.useCallback)((function(n){u(n),w(!g)}),[g]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("img",{src:q,style:{width:150,height:70,backgroundColor:"#b5b5b5"},alt:"Marvel"}),Object(S.jsx)(z,{children:"Explore os quadrinhos da Marvel"}),Object(S.jsx)(F,{hasError:!!h,onSubmit:D,children:Object(S.jsx)("input",{onChange:D,placeholder:"Digite o t\xedtulo do quadrinho",type:"text"})}),h&&Object(S.jsx)(M,{children:h}),Object(S.jsx)(J,{children:0!==o.length&&o.map((function(n){var e,t;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("li",{children:[Object(S.jsx)("img",{src:"".concat(null===(e=n.images[0])||void 0===e?void 0:e.path,".").concat(null===(t=n.images[0])||void 0===t?void 0:t.extension),alt:n.title}),Object(S.jsx)("div",{children:Object(S.jsx)("strong",{children:n.title})}),Object(S.jsx)("button",{type:"button",onClick:function(){return R(n)},children:"Detalhes"})]},n.id)})}))}),Object(S.jsx)(N,{onClick:C,show:g,comic:l})]})},R=function(){return Object(S.jsxs)(O.c,{children:[Object(S.jsx)(O.a,{path:"/",exact:!0,component:Q}),Object(S.jsx)(O.a,{component:Q})]})},A=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(p.a,{children:Object(S.jsx)(R,{})}),Object(S.jsx)(m,{})]})};u.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(A,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.79340b6a.chunk.js.map