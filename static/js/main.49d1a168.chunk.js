(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){e.exports=t.p+"static/media/logo.06e73328.svg"},19:function(e,a,t){},21:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var l=t(1),o=t.n(l),n=t(6),c=t.n(n),r=(t(16),t(3)),s=(t(18),t(19),t(4));t(21);function i(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.Mode," bg-").concat(e.Mode," ").concat(e.Bluish)},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(s.b,{className:"navbar-brand",to:"/"},e.title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link",to:"about"},"About"))),o.a.createElement("div",{className:"circle1 my-1",onClick:e.changeToBlue}),o.a.createElement("div",{className:"circle2 my-1"}),o.a.createElement("div",{className:"circle3 my-1"}),o.a.createElement("div",{class:"form-check form-switch"},o.a.createElement("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.ToggleMode}),o.a.createElement("label",{class:"form-check-label",for:"flexSwitchCheckDefault",style:e.Style},"Enable dark mode"))))))}i.defaultProps={title:"vidhi"};var d=i;var m=function(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),n=t[0],c=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"mb-3 container"},o.a.createElement("h1",{className:"mb-3",style:{color:"light"===e.Mode?"black":"white"}},"Input text "),o.a.createElement("textarea",{placeholder:"Enter something",className:"form-control mb-3",value:n,onChange:function(e){c(e.target.value)},id:"exampleFormControlTextarea1",rows:"7"}),o.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var a=n.toUpperCase();c(a),e.showAlert("changed to uppercase","success")}},"click to Uppercase"),o.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var a=n.toLowerCase();c(a),e.showAlert("changed to lowercase","success")}},"click to Lowercase"),o.a.createElement("button",{className:"btn btn-danger mx-2 my-1",onClick:function(){c(""),e.showAlert("text cleared","success")}},"clear")),o.a.createElement("div",{className:"container",style:{color:"light"===e.Mode?"black":"white"}},o.a.createElement("p",null,"total words : ",n.split(" ").filter(function(e){if(""!==e)return!0}).length," total characters : ",n.length),o.a.createElement("h1",null,"Summary"),o.a.createElement("p",null,""===n?"Enter something in above textbox for summary":n)))};function u(e){var a=Object(l.useState)({backgroundColor:"white",color:"black"}),t=Object(r.a)(a,2),n=(t[0],t[1],Object(l.useState)("Enable dark mode")),c=Object(r.a)(n,2);c[0],c[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"accordion my-3 ",id:"accordionExample"},o.a.createElement("div",{className:"accordion-item",style:e.AboutStyle},o.a.createElement("h2",{className:"accordion-header",id:"headingOne"},o.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:e.AboutStyle},"Accordion Item #1")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item",style:e.AboutStyle},o.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},o.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:e.AboutStyle},"Accordion Item #2")),o.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item",style:e.AboutStyle},o.a.createElement("h2",{className:"accordion-header",id:"headingThree"},o.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:e.AboutStyle},"Accordion Item #3")),o.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}function h(e){return e.Alertt&&o.a.createElement("div",{className:"alert alert-".concat(e.Alertt.type),role:"alert"},e.Alertt.message)}var b=t(0),p="SWAYAM";var g=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)({color:"black"}),i=Object(r.a)(c,2),g=i[0],E=i[1],v=Object(l.useState)({color:"black",backgroundColor:"white"}),y=Object(r.a)(v,2),f=y[0],w=y[1],N=Object(l.useState)(null),S=Object(r.a)(N,2),k=S[0],C=S[1];function T(e,a){var t=e.toLowerCase();e=e.charAt(0).toUpperCase()+t.slice(1),C({message:e,type:a}),setTimeout(function(){C(null)},5e3)}var x=Object(l.useState)(""),A=Object(r.a)(x,2),j=A[0],O=A[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(d,{title:p,Mode:t,ToggleMode:function(){"light"===t?(n("dark"),E({color:"white"}),w({color:"white",backgroundColor:"black"}),document.body.style.backgroundColor="black",T("dark mode enabled","success")):(n("light"),E({color:"black"}),w({color:"black",backgroundColor:"white"}),document.body.style.backgroundColor="white",T("light mode enabled","success"))},Style:g,Bluish:j,changeToBlue:function(){console.log(" lkjsdflj; "),O("Blue")}}),o.a.createElement(h,{Alertt:k}),o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/about",element:o.a.createElement(u,{AboutStyle:f})}),o.a.createElement(b.a,{path:"/",element:o.a.createElement(m,{Mode:t,showAlert:T})}),o.a.createElement(b.a,{path:"*",element:o.a.createElement("h1",null,"error! not found!")}))))},E=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,24)).then(function(a){var t=a.getCLS,l=a.getFID,o=a.getFCP,n=a.getLCP,c=a.getTTFB;t(e),l(e),o(e),n(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null))),E()},7:function(e,a,t){e.exports=t(23)}},[[7,3,2]]]);
//# sourceMappingURL=main.49d1a168.chunk.js.map