(this["webpackJsonpgithub-username-cards-app"]=this["webpackJsonpgithub-username-cards-app"]||[]).push([[0],{20:function(e,a,t){e.exports=t(45)},25:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),s=(t(25),t(19)),o=t(2),i=t(3),m=t(4),u=t(5),p=t(6),b=t.n(p),d=t(17),f=t(18),h=t.n(f),E=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={username:""},e.handleSubmit=function(){var a=Object(d.a)(b.a.mark((function a(t){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),h.a.get("https://api.github.com/users/".concat(e.state.username)).then((function(a){console.log(a.data),e.props.onSubmit(a.data),e.setState({username:""})})).catch((function(e){alert("Username Not Found"),console.log(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-group mb-3 justify-content-center"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"@")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",className:"form-control","aria-describedby":"basic-addon1","aria-label":"Username",value:this.state.username,onChange:function(a){return e.setState({username:a.target.value})},placeholder:"GitHub username",required:!0})),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary",type:"button"},"Add Card"))))}}]),t}(n.Component),v=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("img",{className:"card-img-top",src:e.avatar_url,alt:e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Username: "),e.login),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Company: "),e.company),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Bio:")," ",e.bio),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Followers:")," ",e.followers),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Following:")," ",e.following),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Repo:")," ",e.public_repos)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-success"},r.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},"Github Link")))))}}]),t}(n.Component);var g=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e.profiles.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e))}))),r.a.createElement("br",null))},N=(t(44),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={profiles:[]},e.addNewProfile=function(a){e.setState((function(e){return{profiles:[].concat(Object(s.a)(e.profiles),[a])}}))},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light justify-content-center"},r.a.createElement("h4",{className:"navbar-brand"},"Github Cards App React")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E,{onSubmit:this.addNewProfile}),r.a.createElement(g,{profiles:this.state.profiles}),r.a.createElement("nav",{className:"navbar navbar-light bg-light justify-content-center"},r.a.createElement("span",{className:"navbar-brand mb-0 h1 "},"Made By patidarparas13")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3c5c9bd2.chunk.js.map