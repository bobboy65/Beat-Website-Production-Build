(this.webpackJsonpogbeats=this.webpackJsonpogbeats||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(20),n=a.n(r),s=a(9),i=a(3),o=(a(27),a(5)),l=(a(28),a(29),a(30),a(2));function u(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=(t[0],t[1],Object(c.useState)(!0)),r=Object(o.a)(a,2),n=(r[0],r[1]),s=function(){window.innerWidth<=960?n(!1):n(!0)};return Object(c.useEffect)((function(){s()}),[]),window.addEventListener("resize",s),Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{className:"starterText",children:"Updates/Content Weekly"}),Object(l.jsx)("div",{className:"starterText2",children:"Dm comments/inquiries"}),Object(l.jsx)("div",{className:"starterText3",children:"Enjoy"}),Object(l.jsx)("div",{className:"starterText4",children:"11 songs and 30:10 Minutes of freestyle, press play once and it'll run through 'em all"})]})}var j=a(12),b=a(22);var d=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!0),i=Object(o.a)(n,2),u=(i[0],i[1]),d=function(){return r(!a)},m=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(c.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsxs)("a",{href:"/",className:"logopic",children:['"',Object(l.jsx)(j.b,{}),' Logo"']}),Object(l.jsx)("h1",{className:a?"nav-menu active":"nav-menu",children:Object(l.jsxs)("div",{className:"nav-item",children:[Object(l.jsx)(s.b,{to:"/about",children:Object(l.jsx)("a",{className:a?"Beats":"Not-Beats",onClick:d,children:"About"})}),Object(l.jsx)("a",{className:a?"BurgerChange":"BurgerMenu",onClick:d,children:a?Object(l.jsx)(b.a,{}):Object(l.jsx)(j.a,{})}),Object(l.jsx)("a",{href:"/",className:a?"whitetlname":"tlname",children:'"Producer Name Here"'})]})})]})})};a(37);var m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"backsplash"})})};a(38);var f=a(13),h=a(14);var O=function(e){var t,a,r,n,i=Object(c.useState)([{title:"The Funk",artist:"2 chainz",img_src:"../images/fire.jpg",src:"../beats/the funk prod.mp3"},{title:"Mimosa",artist:"Machine Gun Kelly",img_src:"../images/mimosa.jfif",src:"../beats/hornsprod.mp3"},{title:"Orbit",artist:"2 chainz",img_src:"../images/orbit.jpg",src:"../beats/orbitprod.mp3"},{title:"Trapavelli",artist:"2 chainz",img_src:"../images/ig88.jfif",src:"../beats/trapavelliprod1.mp3"},{title:"Halftime",artist:"2 chainz",img_src:"../images/halftime.jfif",src:"../beats/halftime Kyrie Prod.mp3"},{title:"Let it Go",artist:"2 chainz",img_src:"../images/purplebeach.jpg",src:"../beats/let it go prod.mp3"},{title:"Delta Ave",artist:"2 chainz",img_src:"../images/hoh.jpg",src:"../beats/delta ave prod.mp3"},{title:"Riding out",artist:"2 chainz",img_src:"../images/kfc.jfif",src:"../beats/Riding out.mp3"},{title:"Rako",artist:"2 chainz",img_src:"../images/rako.jpg",src:"../beats/Rako.mp3"},{title:"Get it",artist:"2 chainz",img_src:"../images/get.jpg",src:"../beats/Get.mp3"},{title:"42 Dugg",artist:"2 chainz",img_src:"../images/piano.jfif",src:"../beats/dugg.mp3"}]),u=Object(o.a)(i,1)[0],j=Object(c.useState)(0),b=Object(o.a)(j,2),d=b[0],m=b[1],O=Object(c.useState)(0),g=Object(o.a)(O,2),p=(g[0],g[1]);r=0,n=u.length-1,r=Math.ceil(r),n=Math.floor(n),Math.floor(Math.random()*(n-r+1)+r),Object(c.useEffect)((function(){p((function(){return d+1>u.length-1?0:d+1}))}),[d]);var v=Object(c.useState)(!1),x=Object(o.a)(v,2),N=x[0],y=x[1],w=Object(c.useState)(0),k=Object(o.a)(w,2),S=k[0],z=k[1],_=Object(c.useState)(0),M=Object(o.a)(_,2),E=M[0],C=M[1],T=Object(c.useState)(0),F=Object(o.a)(T,2),R=(F[0],F[1],Object(c.useRef)()),A=Object(c.useRef)(),P=Object(c.useRef)();Object(c.useEffect)((function(){var e=Math.floor(R.current.duration);z(e),A.current.max=e}),[null===R||void 0===R||null===(t=R.current)||void 0===t?void 0:t.loadedmetadata,null===R||void 0===R||null===(a=R.current)||void 0===a?void 0:a.readyState,E,N]);var B=function(e){var t=Math.floor(e/60),a=t<10?"0".concat(t):"".concat(t),c=Math.floor(e%60),r=c<10?"0".concat(c):"".concat(c);return"".concat(a,":").concat(r)};Object(c.useEffect)((function(){1===d&&0===E?(R.current.play(),y(!1)):(R.current.play(),y(!0))}),[S]);var G=function e(){A.current.value=R.current.currentTime,q(),P.current=requestAnimationFrame(e)},L=function(){R.current.currentTime=A.current.value,q()},q=function(){A.current.style.setProperty("--seek-before-width","".concat(A.current.value/S*100,"%")),C(A.current.value)},D=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];m(e?function(){var e=d;return++e>u.length-1&&(e=0),e}:function(){var e=d;return--e<0&&(e=u.length-1),e})};return Object(c.useEffect)((function(){B(E)===B(S)?(console.log("ebola"),D(!0)):console.log("penis")}),[E]),Object(l.jsxs)("div",{className:"Audioplayer",children:[Object(l.jsx)(s.b,{href:"https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css",rel:"sytlesheet"}),Object(l.jsx)("audio",{src:u[d].src,ref:R,preload:"metadata",children:"//'../beats/trapavelliprod.mp3' console.log(props.songs[props.currentSongIndex].src)"}),Object(l.jsx)("img",{className:"songPhoto",src:u[d].img_src}),Object(l.jsxs)("div",{className:"currentlyPlaying",children:["Now Playing: ",u[d].title]}),Object(l.jsx)("button",{className:"forwardbackward",onClick:function(){!function(){m(arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?function(){var e=d;return++e<0&&(e=u.length-1),e}:function(){var e=d;return--e<0&&(e=u.length-1),e})}(),y(!0)},children:Object(l.jsx)(f.a,{})}),Object(l.jsx)("button",{onClick:function(){var e=N;y(!e),e?(R.current.pause(),cancelAnimationFrame(P.current)):(R.current.play(),P.current=requestAnimationFrame(G))},className:"playpause",children:N?Object(l.jsx)(h.a,{className:"pause"}):Object(l.jsx)(h.b,{className:"play"})}),Object(l.jsx)("button",{className:"forwardbackward",onClick:function(){D(),y(!0)},children:Object(l.jsx)(f.b,{})}),Object(l.jsx)("div",{className:"currenttime",children:B(E)}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"range",className:"progressbar",defaultValue:"0",ref:A,onChange:L})}),Object(l.jsx)("div",{className:"duration",children:S&&!isNaN(S)&&B(S)})]})};var g=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(i.a,{path:"/"}),Object(l.jsx)(i.a,{path:"/about",component:u}),Object(l.jsx)(d,{}),Object(l.jsx)(m,{}),Object(l.jsx)(O,{}),Object(l.jsx)("a",{})]})})};n.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2496a5f7.chunk.js.map