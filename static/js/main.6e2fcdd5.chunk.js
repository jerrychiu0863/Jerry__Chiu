(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),o=a.n(c),i=(a(61),a(9)),l=a(10),s=a(12),m=a(11),u=a(13),d=(a(62),a(23)),p=(a(69),a(8)),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a.handleClick=function(e){"logo"!==e||a.state.isOpen?a.props.width<768&&a.setState({isOpen:!a.state.isOpen}):a.setState({isOpen:a.state.isOpen})},a.handleClickOutside=function(e){a.navbarRef.current.contains(e.target)||a.setState({isOpen:!1})},a.handleScreenScrolling=function(e){"scroll"===e.type&&a.setState({isOpen:!1})},a.state={isOpen:!1,activeItem:""},a.navbarRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClickOutside),window.addEventListener("scroll",this.handleScreenScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickOutside),window.removeEventListener("scroll",this.handleScreenScrolling)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Navbar",ref:this.navbarRef},r.a.createElement(p.d,{className:"Navbar__navbar",id:"top-nav",light:!0,expand:"md",fixed:"top",scrolling:!0},r.a.createElement(p.b,{fluid:!0,className:"Navbar__container"},r.a.createElement(p.e,{className:"Navbar__navbar-brand"}),r.a.createElement(p.g,{className:"Navbar__toggler",onClick:function(){e.handleClick(),e.toggleCollapse()}}),r.a.createElement(p.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(p.f,{className:"Navbar__nav",right:!0},r.a.createElement(p.c,{className:"Navbar__nav-item"},r.a.createElement(d.HashLink,{className:"Navbar__nav-link--about nav-links mobile-link",to:"/",onClick:function(){return window.scrollTo(0,0)}},"Home")),r.a.createElement(p.c,{className:"Navbar__nav-item"},r.a.createElement(d.HashLink,{className:"Navbar__nav-link--about nav-links mobile-link",to:"/#skills",scroll:function(t){return e.props.onScrollWithOffset(t,120)},onClick:function(){e.handleClick()}},"Skills")),r.a.createElement(p.c,{className:"Navbar__nav-item"},r.a.createElement(d.HashLink,{className:"Navbar__nav-link--about nav-links mobile-link",to:"/#projects",scroll:function(t){return e.props.onScrollWithOffset(t,60)},onClick:function(){e.handleClick()}},"Projects")),r.a.createElement(p.c,{className:"Navbar__nav-item"},r.a.createElement(d.HashLink,{className:"Navbar__nav-link--support nav-links",to:"/#contact",scroll:function(t){return e.props.onScrollWithOffset(t,0)},onClick:function(){e.handleClick()}},"Contact")))))))}}]),t}(n.Component),f=(a(113),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).setAnimation=function(){var e=document.getElementsByClassName("Banner__header--main"),t=document.getElementsByClassName("Banner__header--sub");e[0].classList.add("show"),t[0].classList.add("show")},a.hideStripes=function(){var e=document.querySelectorAll(".stripe"),t=!0,a=!1,n=void 0;try{for(var r,c=e[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){r.value.classList.add("hide")}}catch(o){a=!0,n=o}finally{try{t||null==c.return||c.return()}finally{if(a)throw n}}},a.removeStopClass=function(){var e=document.querySelectorAll(".stripe"),t=!0,a=!1,n=void 0;try{for(var r,c=e[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){r.value.classList.remove("stop")}}catch(o){a=!0,n=o}finally{try{t||null==c.return||c.return()}finally{if(a)throw n}}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("DOMContentLoaded",function(){e.removeStopClass(),setTimeout(function(){e.hideStripes(),e.setAnimation()},1800)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Banner"},r.a.createElement("div",null,r.a.createElement("div",{className:"stripe stripe-0 stop"}),r.a.createElement("div",{className:"stripe stripe-1 stop"}),r.a.createElement("div",{className:"stripe stripe-2 stop"}),r.a.createElement("div",{className:"stripe stripe-3 stop"})),r.a.createElement("div",{className:"Banner__container"},r.a.createElement("h1",{className:"Banner__header--main"},"Kuan-Jen Chiu"),r.a.createElement("p",{className:"Banner__header--sub"},"Web Developer / Front End Developer")))}}]),t}(n.Component)),v=(a(43),function(e){var t=e.id,a=e.type,n=e.content;return r.a.createElement("div",{className:"Card col-12 col-sm-6 col-md-6 col-lg-4"},r.a.createElement("div",{className:"Card__container card"},r.a.createElement("div",{className:"Card__container--title Card__container--title-".concat(t)},r.a.createElement("span",null,a)),r.a.createElement("p",{className:"Card__container--text"},n)))}),E=(a(114),function(e){var t=e.header;return r.a.createElement("h2",{className:"HeaderDisplay"},t)}),_=[{id:1,type:"Front end",content:"HTML / CSS / JavaScript / React / Redux / Bootstrap / jQuery / Sass / RWD / React Router / Ajax / Redux-Thunk"},{id:2,type:"Back end",content:"REST API / Node.js / Express / MongoDB / Mongoose"},{id:3,type:"Misc.",content:"Git / Github / Gitlab / NPM / Yarn / Heroku / Google Analytics"}],b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).renderList=function(){return _.map(function(e){return r.a.createElement(v,{key:e.id,id:e.id,type:e.type,content:e.content})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Skills container",id:"skills"},r.a.createElement(E,{header:"Skills"}),r.a.createElement("div",{className:"Skills__container row"},this.renderList()))}}]),t}(n.Component),N=(a(115),a(50)),w=a.n(N),k=a(51),j=a.n(k),g=a(52),O=a.n(g),y=a(53),C=a.n(y),S=a(54),T=a.n(S),L=a(55),x=a.n(L),W=(a(116),function(e){var t=e.urlOne,a=e.urlTwo,n=e.porjectOne,c=e.projectTwo,o=e.titleOne,i=e.titleTwo;return r.a.createElement("div",{className:"ProjectItem row"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("div",{className:"ProjectItem__container"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"ProjectItem__container--img",src:n,alt:"project"})),r.a.createElement("div",{className:"ProjectItem__titleContainer"},r.a.createElement("p",{className:"ProjectItem__titleContainer--title"},o)))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("div",{className:"ProjectItem__container"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"ProjectItem__container--img",src:c,alt:"project"})),r.a.createElement("div",{className:"ProjectItem__titleContainer"},r.a.createElement("p",{className:"ProjectItem__titleContainer--title"},i)))))}),B=function(){return r.a.createElement("div",{className:"Projects",id:"projects"},r.a.createElement("div",{className:"container"},r.a.createElement(E,{header:"Projects"}),r.a.createElement(W,{porjectOne:w.a,titleOne:"Win-Kel",urlOne:"https://www.win-kel.com",projectTwo:O.a,urlTwo:"https://stark-brook-84904.herokuapp.com/",titleTwo:"Blog Engine"}),r.a.createElement(W,{porjectOne:j.a,titleOne:"Css Background Generator",urlOne:"https://jerrychiu0863.github.io/react_redux_transitionBackgroundGenerator/",projectTwo:C.a,titleTwo:"News Search Engine",urlTwo:"https://jerrychiu0863.github.io/react_news_app/"}),r.a.createElement(W,{porjectOne:T.a,titleOne:"The Eisenhower Matrix Todo App",urlOne:"https://jerrychiu0863.github.io/react_todo_app/",projectTwo:x.a,titleTwo:"Artist's Portfolio",urlTwo:"https://jerrychiu0863.github.io/artist_web/"})))},I=(a(117),[{icon:"fas fa-map-pin",body:"Changhua, Taiwan"},{icon:"fas fa-phone",body:"0910-200-918"},{icon:"fas fa-envelope",body:"m08632000@hotmail.com"},{icon:"fab fa-github",body:"https://github.com/jerrychiu0863"}]),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).renderContactInfo=function(e){return e.map(function(e,t){return r.a.createElement("li",{className:"Contact__list--item",key:t},r.a.createElement("i",{className:"Contact__list--icon ".concat(e.icon)}),r.a.createElement("p",{className:"Contact__list--info"},e.body))})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Contact",id:"contact"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Contact__left col-0 col-sm-0 col-md-6"}),r.a.createElement("div",{className:"Contact__right col-12 col-sm-12 col-md-6 container"},r.a.createElement("span",{className:"Contact__right--header"},"Contact Info"),r.a.createElement("ul",{className:"Contact__list"},this.renderContactInfo(I)))))}}]),t}(n.Component),A=(a(118),function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",{className:"Footer-copyright"},"Copyright \xa9 Kuan-Jen Chiu. All-Right Reserved."))}),R=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).updateWidth=function(){e.setState({width:window.innerWidth})},e.scrollWithOffset=function(e,t){var a=e.offsetTop-t;console.log(e),window.scroll({top:a,left:0,behavior:"smooth"})},e.state={width:window.innerWidth},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{width:this.state.width,onScrollWithOffset:this.scrollWithOffset}),r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(B,null),r.a.createElement(P,null),r.a.createElement(A,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(31);o.a.render(r.a.createElement(M.BrowserRouter,{basename:"/Jerry__Chiu"},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/winkel.72f34b83.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/cssGenerator.184b37d4.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/blog.c99df92f.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/news.c4010740.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/todo.138bf9b0.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/artist.fe8cd713.jpg"},56:function(e,t,a){e.exports=a(119)},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.6e2fcdd5.chunk.js.map