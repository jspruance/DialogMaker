(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(31)},25:function(e,a,t){},27:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(13),c=t.n(s),r=(t(22),t(23),t(24),t(25),t(34)),i=t(36),m=t(35),o=t(3),u=t(4),d=t(6),p=t(5),E=t(7),v=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("a",{className:"navbar-item",href:"/"},l.a.createElement("img",{src:"logo.png",width:"219px",height:"50px",alt:"logo"}))),l.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},l.a.createElement("div",{className:"navbar-start"}),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("div",{className:"buttons"},l.a.createElement("a",{href:"/register",className:"button is-primary"},l.a.createElement("strong",null,"Sign up")),l.a.createElement("a",{href:"/login",className:"button is-light"},"Log in"))))))}}]),a}(n.Component);function h(){return l.a.createElement("section",{className:"hero is-primary"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{class:"is-size-3"},"Easy dialog creation & integration for Bot Framework bots"),l.a.createElement("a",{href:"/dialogs",class:"nes-btn has-text-primary has-margin-1 is-size-4"},"Get started >"))))}function g(){return l.a.createElement("section",{className:"container home-content"},l.a.createElement("div",{className:"columns features text-align-left"},l.a.createElement("div",{className:"column is-4"},l.a.createElement("div",{className:"card is-shady"},l.a.createElement("div",{className:"card-image has-text-centered"},l.a.createElement("i",{className:"fa fa-paw"})),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"Create dialogs"),l.a.createElement("p",null,"Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam."),l.a.createElement("p",null,l.a.createElement("a",{href:"/"},"Learn more")))))),l.a.createElement("div",{className:"column is-4"},l.a.createElement("div",{className:"card is-shady"},l.a.createElement("div",{className:"card-image has-text-centered"},l.a.createElement("i",{className:"fa fa-empire"})),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"Easy integration"),l.a.createElement("p",null,"Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem sed risus."),l.a.createElement("p",null,l.a.createElement("a",{href:"/"},"Learn more")))))),l.a.createElement("div",{className:"column is-4"},l.a.createElement("div",{className:"card is-shady"},l.a.createElement("div",{className:"card-image has-text-centered"},l.a.createElement("i",{className:"fa fa-apple"})),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"Save your dialogs"),l.a.createElement("p",null,"Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis."),l.a.createElement("p",null,l.a.createElement("a",{href:"/"},"Learn more"))))))))}function f(){return l.a.createElement(n.Fragment,null,l.a.createElement(h,null),l.a.createElement(g,null))}var N=t(8),b=t.n(N),y=t(11),w=t(14),x=t.n(w),j=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("p",null,"Waterfall Dialog Maker")}}]),a}(n.Component),O=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("p",null,"Standalone Prompt Dialog Maker")}}]),a}(n.Component),k=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("p",null,"Component Dialog Maker")}}]),a}(n.Component),C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={step:1,dialogType:"waterfalldialog",dialogSteps:[]},t.onNextStep=function(){var e=Object(y.a)(b.a.mark(function e(a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t.setState({step:t.state.step+1});case 3:console.log("Dialog type: ".concat(t.state.dialogType));case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.onPreviousStep=function(){var e=Object(y.a)(b.a.mark(function e(a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t.setState({step:t.state.step-1});case 3:console.log("Dialog type: ".concat(t.state.dialogType));case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.onDialogTypeChange=function(){var e=Object(y.a)(b.a.mark(function e(a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({dialogType:a.target.value});case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){x.a.attach()}},{key:"render",value:function(){return l.a.createElement("div",{className:"dialogs-wrapper has-padding-1"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Create a dialog"),l.a.createElement("p",null,"Create a dialog for your bot using the form below. Then export the json file and drop it into your bot's 'dialogs' folder."),l.a.createElement("div",{className:"dialogs-steps"},l.a.createElement("div",{className:"steps"},l.a.createElement("div",{className:"step-item is-active is-success"},l.a.createElement("div",{className:"step-marker"},"1"),l.a.createElement("div",{className:"step-details"},l.a.createElement("p",{className:"step-title"},"Choose dialog type"))),l.a.createElement("div",{className:"step-item"},l.a.createElement("div",{className:"step-marker"},"2"),l.a.createElement("div",{className:"step-details"},l.a.createElement("p",{className:"step-title"},"Create dialog steps"))),l.a.createElement("div",{className:"step-item"},l.a.createElement("div",{className:"step-marker"},"3"),l.a.createElement("div",{className:"step-details"},l.a.createElement("p",{className:"step-title"},"Review dialog"))),l.a.createElement("div",{className:"step-item"},l.a.createElement("div",{className:"step-marker"},"4"),l.a.createElement("div",{className:"step-details"},l.a.createElement("p",{className:"step-title"},"Export dialog"))),l.a.createElement("div",{className:"steps-content"},l.a.createElement("div",{className:"step-content has-text-centered is-active"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Dialog type")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"select is-primary"},l.a.createElement("select",{value:this.state.dialogType,onChange:this.onDialogTypeChange},l.a.createElement("option",{value:"waterfalldialog"},"waterfall dialog"),l.a.createElement("option",{value:"standaloneprompt"},"standalone prompt"),l.a.createElement("option",{value:"componentdialog"},"component dialog"))))))))),l.a.createElement("div",{className:"step-content has-text-centered"},"waterfalldialog"===this.state.dialogType&&l.a.createElement(j,null),"standaloneprompt"===this.state.dialogType&&l.a.createElement(O,null),"componentdialog"===this.state.dialogType&&l.a.createElement(k,null)),l.a.createElement("div",{className:"step-content has-text-centered"},l.a.createElement("p",null,"Please review your dialog")),l.a.createElement("div",{className:"step-content has-text-centered"},l.a.createElement("a",{class:"nes-btn is-success is-large white-text"},"Export dialog >"))),l.a.createElement("div",{className:"steps-actions"},l.a.createElement("div",{className:"steps-action"},l.a.createElement("a",{href:"/",onClick:this.onPreviousStep,"data-nav":"previous",className:"nes-btn has-text-primary"},"Previous")),l.a.createElement("div",{className:"steps-action"},l.a.createElement("a",{href:"/",onClick:this.onNextStep,"data-nav":"next",className:"nes-btn has-text-primary"},"Next")))))))}}]),a}(n.Component);function T(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("p",null,"Dialog Maker 2019. The source code is licensed MIT. The website content is licensed CC BY NC SA 4.0.")))}t(27);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(i.a,null,l.a.createElement(m.a,{exact:!0,path:"/",component:f}),l.a.createElement(m.a,{exact:!0,path:"/dialogs",component:C})),l.a.createElement(T,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.acdff859.chunk.js.map