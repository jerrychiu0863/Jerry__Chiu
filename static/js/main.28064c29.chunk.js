(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){e.exports=a.p+"static/media/one_page_600x299.fdd9d13e.jpg"},117:function(e,t,a){e.exports=a.p+"static/media/clue_event_600x299.2d0e0890.jpg"},118:function(e,t,a){e.exports=a.p+"static/media/clue_article_600x299.c1c26255.jpg"},119:function(e,t,a){e.exports=a.p+"static/media/red_600x299.43b9cfe6.jpg"},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(11),i=a.n(r),o=(a(61),a(12)),l=a(13),s=a(16),m=a(14),u=a(17),d=(a(62),a(23)),p=(a(69),a(8)),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a.handleClick=function(e){"logo"!==e||a.state.isOpen?a.props.width<768&&a.setState({isOpen:!a.state.isOpen}):a.setState({isOpen:a.state.isOpen})},a.handleClickOutside=function(e){a.navbarRef.current.contains(e.target)||a.setState({isOpen:!1})},a.handleScreenScrolling=function(e){"scroll"===e.type&&a.setState({isOpen:!1})},a.state={isOpen:!1,activeItem:""},a.navbarRef=c.a.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClickOutside),window.addEventListener("scroll",this.handleScreenScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickOutside),window.removeEventListener("scroll",this.handleScreenScrolling)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Navbar",ref:this.navbarRef},c.a.createElement(p.d,{className:"Navbar__navbar",id:"top-nav",light:!0,expand:"md",fixed:"top",scrolling:!0},c.a.createElement(p.b,{fluid:!0,className:"Navbar__container"},c.a.createElement(p.e,{className:"Navbar__navbar-brand"}),c.a.createElement(p.g,{className:"Navbar__toggler",onClick:function(){e.handleClick(),e.toggleCollapse()}}),c.a.createElement(p.a,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(p.f,{className:"Navbar__nav",right:!0},c.a.createElement(p.c,{className:"Navbar__nav-item"},c.a.createElement(d.HashLink,{className:"Navbar__nav-link--about nav-links mobile-link",to:"/",onClick:function(){return window.scrollTo(0,0)}},"Home")),c.a.createElement(p.c,{className:"Navbar__nav-item"},c.a.createElement(d.HashLink,{className:"Navbar__nav-link--about nav-links mobile-link",to:"/#skills",scroll:function(t){return e.props.onScrollWithOffset(t,120)},onClick:function(){e.handleClick()}},"Skills")),c.a.createElement(p.c,{className:"Navbar__nav-item"},c.a.createElement(d.HashLink,{className:"Navbar__nav-link--about nav-links mobile-link",to:"/#projects",scroll:function(t){return e.props.onScrollWithOffset(t,60)},onClick:function(){e.handleClick()}},"Projects")),c.a.createElement(p.c,{className:"Navbar__nav-item"},c.a.createElement(d.HashLink,{className:"Navbar__nav-link--support nav-links",to:"/#contact",scroll:function(t){return e.props.onScrollWithOffset(t,0)},onClick:function(){e.handleClick()}},"Contact")))))))}}]),t}(n.Component),f=(a(113),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).setHeaderAnimation=function(){var e=document.getElementsByClassName("Banner__header--main"),t=document.getElementsByClassName("Banner__header--sub");e[0].classList.add("show"),t[0].classList.add("show")},a.hideStripes=function(){var e=document.querySelectorAll(".stripe"),t=!0,a=!1,n=void 0;try{for(var c,r=e[Symbol.iterator]();!(t=(c=r.next()).done);t=!0){c.value.classList.add("hide")}}catch(i){a=!0,n=i}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}},a.removeStopClass=function(){var e=document.querySelectorAll(".stripe"),t=!0,a=!1,n=void 0;try{for(var c,r=e[Symbol.iterator]();!(t=(c=r.next()).done);t=!0){c.value.classList.remove("stop")}}catch(i){a=!0,n=i}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("DOMContentLoaded",function(){e.removeStopClass(),setTimeout(function(){e.hideStripes(),e.setHeaderAnimation()},1800)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"Banner"},c.a.createElement("div",null,c.a.createElement("div",{className:"stripe stripe-0 stop"}),c.a.createElement("div",{className:"stripe stripe-1 stop"}),c.a.createElement("div",{className:"stripe stripe-2 stop"}),c.a.createElement("div",{className:"stripe stripe-3 stop"})),c.a.createElement("div",{className:"Banner__container"},c.a.createElement("h1",{className:"Banner__header--main"},"Kuan-Jen Chiu"),c.a.createElement("p",{className:"Banner__header--sub"},"Web Developer / Front End Developer")))}}]),t}(n.Component)),v=(a(43),function(e){var t=e.id,a=e.type,n=e.content;return c.a.createElement("div",{className:"Card col-12 col-sm-6 col-md-6 col-lg-4"},c.a.createElement("div",{className:"Card__container card"},c.a.createElement("div",{className:"Card__container--title Card__container--title-".concat(t)},c.a.createElement("span",null,a)),c.a.createElement("p",{className:"Card__container--text"},n)))}),_=(a(114),function(e){var t=e.header;return c.a.createElement("h2",{className:"HeaderDisplay"},t)}),E=[{id:1,type:"Front end",content:"HTML / CSS / JavaScript / React / Redux / Bootstrap / jQuery / Sass / RWD / React Router / Ajax / GatsbyJS / P5JS"},{id:2,type:"Design Tool",content:"AdobeXD / Figma / Illustrator / Photoshop"},{id:3,type:"Misc.",content:"Git / Github / Gitlab / NPM / Yarn / Heroku"}],b=function(){return c.a.createElement("div",{className:"Skills container",id:"skills"},c.a.createElement(_,{header:"Skills"}),c.a.createElement("div",{className:"Skills__container row"},E.map(function(e){return c.a.createElement(v,{key:e.id,id:e.id,type:e.type,content:e.content})})))},N=(a(115),a(116),a(117),a(118),a(50)),g=a.n(N),w=a(51),j=a.n(w),k=a(52),C=a.n(k),y=(a(119),a(53)),O=a.n(y),S=a(54),x=a.n(S),T=a(55),W=a.n(T),L=(a(120),function(e){var t=e.urlOne,a=e.urlTwo,n=e.porjectOne,r=e.projectTwo,i=e.titleOne,o=e.titleTwo;return c.a.createElement("div",{className:"ProjectItem row"},c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("div",{className:"ProjectItem__container"},c.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"ProjectItem__container--img",src:n,alt:"project"})),c.a.createElement("div",{className:"ProjectItem__titleContainer"},c.a.createElement("p",{className:"ProjectItem__titleContainer--title"},i)))),c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("div",{className:"ProjectItem__container"},c.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"ProjectItem__container--img",src:r,alt:"project"})),c.a.createElement("div",{className:"ProjectItem__titleContainer"},c.a.createElement("p",{className:"ProjectItem__titleContainer--title"},o)))))}),P=function(){return c.a.createElement("div",{className:"Projects",id:"projects"},c.a.createElement("div",{className:"container"},c.a.createElement(_,{header:"Projects"}),c.a.createElement(L,{porjectOne:C.a,titleOne:"Animal Adoption Website",urlOne:"https://competnion.netlify.app/",projectTwo:W.a,urlTwo:"https://jerrychiu0863.github.io/clue/",titleTwo:"Columbia English Consulting Company"}),c.a.createElement(L,{porjectOne:j.a,titleOne:"Deco me",urlOne:"https://jerrychiu0863.github.io/ecommerce/#/",projectTwo:g.a,titleTwo:"Css Background Generator",urlTwo:"https://jerrychiu0863.github.io/react_redux_transitionBackgroundGenerator/"}),c.a.createElement(L,{porjectOne:O.a,titleOne:"Green",urlOne:"https://jerrychiu0863.github.io/multi-layer-banner/",projectTwo:x.a,titleTwo:"P5 Projects",urlTwo:"https://openprocessing.org/user/307138?view=sketches"})))},B=(a(121),[{icon:"fas fa-map-pin",body:"Changhua, Taiwan"},{icon:"fas fa-phone",body:"+886910-200-918"},{icon:"fab fa-github",body:"https://github.com/jerrychiu0863"}]),I=function(){return c.a.createElement("div",{className:"Contact",id:"contact"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"Contact__left col-0 col-sm-0 col-md-6"}),c.a.createElement("div",{className:"Contact__right col-12 col-sm-12 col-md-6 container"},c.a.createElement("span",{className:"Contact__right--header"},"Contact Info"),c.a.createElement("ul",{className:"Contact__list"},B.map(function(e,t){return c.a.createElement("li",{className:"Contact__list--item",key:t},c.a.createElement("i",{className:"Contact__list--icon ".concat(e.icon)}),c.a.createElement("p",{className:"Contact__list--info"},e.body))})," ",c.a.createElement("li",{className:"Contact__list--item"},c.a.createElement("i",{className:"Contact__list--icon fas fa-envelope"}),c.a.createElement("a",{className:"Contact__list--info",href:"mailto:m08632000@hotmail.com"},"m08632000@hotmail.com"))))))},R=(a(122),function(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("p",{className:"Footer-copyright"},"Copyright \xa9 Kuan-Jen Chiu. All-Right Reserved."))}),A=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).updateWidth=function(){e.setState({width:window.innerWidth})},e.scrollWithOffset=function(e,t){var a=e.offsetTop-t;console.log(e),window.scroll({top:a,left:0,behavior:"smooth"})},e.state={width:window.innerWidth},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,{width:this.state.width,onScrollWithOffset:this.scrollWithOffset}),c.a.createElement(f,null),c.a.createElement(b,null),c.a.createElement(P,null),c.a.createElement(I,null),c.a.createElement(R,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(31);i.a.render(c.a.createElement(D.BrowserRouter,{basename:"/Jerry__Chiu"},c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/css-generator_600x299.439ea81d.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/decome_600x299.b85a85a9.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/competnion_600x299.2c3db388.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/green_600x299.25a4184b.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/p5_600x299.faac9e1d.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/clue_600x299.83e18c25.jpg"},56:function(e,t,a){e.exports=a(123)},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.28064c29.chunk.js.map