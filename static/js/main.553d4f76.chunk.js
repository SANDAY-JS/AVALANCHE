(this.webpackJsonpavalanche=this.webpackJsonpavalanche||[]).push([[0],{32:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),a=c(33),r=c.n(a),i=(c(46),c(7)),j=(c(47),c(6)),l=c(20),b=(c(48),c(2));var o=function(){return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("div",{className:"footer__logo",children:Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("h3",{children:"AVALANCHE"})})}),Object(b.jsxs)("div",{className:"footer__links",children:[Object(b.jsx)("div",{className:"footer__pages",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)(j.b,{to:"/",children:"Home"}),Object(b.jsx)(j.b,{to:"/about",children:"About"}),Object(b.jsx)(j.b,{to:"/information",children:"Information"}),Object(b.jsx)(j.b,{to:"/contact",children:"Contact"}),Object(b.jsx)(j.b,{to:"/profile",children:Object(b.jsx)(l.b,{})})]})}),Object(b.jsx)("div",{className:"footer__sns",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("a",{target:"_blank",href:"https://twitter.com/avalanche_shiga",children:Object(b.jsx)("i",{className:"fab fa-twitter"})}),Object(b.jsx)("a",{target:"_blank",href:"https://www.instagram.com/avalanche.official/?hl=ja",children:Object(b.jsx)("i",{className:"fab fa-instagram"})}),Object(b.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCnhekCRthw7qGc0UywzCepw",children:Object(b.jsx)("i",{className:"fab fa-youtube"})})]})})]}),Object(b.jsx)("div",{className:"footer__copyright",children:Object(b.jsx)("small",{children:"\xa9 2021 AVALANCHE"})})]})},u=c(8),d=c(23),h=(c(54),c(72),c(71),d.a.initializeApp({apiKey:"AIzaSyCVSGsdBSvojsdJBbmXulNxpt5xPTChTkc",authDomain:"avalanche-e45e8.firebaseapp.com",projectId:"avalanche-e45e8",storageBucket:"avalanche-e45e8.appspot.com",messagingSenderId:"375766993808",appId:"1:375766993808:web:3d15e383431ac0b60d4115",measurementId:"G-V1544HWXC2"}));d.a.analytics();var O=h.auth(),x=(d.a.firestore(),Object(n.createContext)()),p=function(){return Object(n.useContext)(x)};function m(e){var t=e.children,c=Object(n.useState)(),s=Object(u.a)(c,2),a=s[0],r=s[1];Object(n.useEffect)((function(){return O.onAuthStateChanged((function(e){r(e)}))}),[]);var i={currentUser:a,signup:function(e,t,c){return O.createUserWithEmailAndPassword(e,t).then((function(e){return e.user.updateProfile({displayName:c})})).catch((function(e){return console.error(e)}))},login:function(e,t){return O.signInWithEmailAndPassword(e,t)},logout:function(){return O.signOut()},resetPassword:function(e){return O.sendPasswordResetEmail(e)},updateName:function(e){return a.updateProfile({displayName:e})},updateEmail:function(e){return a.updateEmail(e)},updatePassword:function(e){return a.updatePassword(e)}};return Object(b.jsx)(x.Provider,{value:i,children:t})}c(56);var f=function(){var e=p(),t=e.currentUser,c=(e.logout,Object(n.useState)(!1)),s=Object(u.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(!0),d=Object(u.a)(o,2),h=d[0],O=d[1],x=Object(n.useState)(""),m=Object(u.a)(x,2),f=m[0];m[1],Object(i.f)(),Object(n.useEffect)((function(){v(),window.addEventListener("resize",v)}),[]);var v=function(){var e=window.matchMedia("(max-width: 767px)");return e.matches?O(!0):e.matches?void 0:O(!1)};return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"header__logo",children:Object(b.jsx)(j.b,{to:"/",onClick:function(){return r(!1)},children:Object(b.jsx)("h1",{children:"AVALANCHE"})})}),Object(b.jsx)("ul",{className:"header__links",onClick:function(){return r(!a)},children:h?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{className:a?"active":""}),Object(b.jsxs)("div",{className:a?"header__menu active":"header__menu",children:[f&&Object(b.jsx)("p",{className:"error",children:f}),Object(b.jsxs)("div",{className:"signin-form",children:[!t&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.b,{to:"login",children:"Login"}),Object(b.jsx)(j.b,{to:"signup",children:"Sign Up"})]}),Object(b.jsxs)(j.b,{to:"/profile",children:[Object(b.jsx)(l.a,{})," ",t?t.displayName:"\u30b2\u30b9\u30c8"]})]}),Object(b.jsx)(j.b,{to:"/",children:"Home"}),Object(b.jsx)(j.b,{to:"/about",children:"About"}),Object(b.jsx)(j.b,{to:"/information",children:"Information"}),Object(b.jsx)(j.b,{to:"/contact",children:"Contact"})]})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.b,{to:"/",children:"Home"}),Object(b.jsx)(j.b,{to:"/about",children:"About"}),Object(b.jsx)(j.b,{to:"/information",children:"Information"}),Object(b.jsx)(j.b,{to:"/contact",children:"Contact"}),Object(b.jsxs)(j.b,{to:"/profile",children:[Object(b.jsx)(l.a,{})," ",t?t.displayName:"\u30b2\u30b9\u30c8"]})]})})]})};c(57);var v=function(){return Object(b.jsxs)("div",{className:"news",children:[Object(b.jsx)("h2",{children:"~News~"}),Object(b.jsx)("h3",{children:"\u30e9\u30a4\u30d6\u60c5\u5831\uff01"}),Object(b.jsx)("p",{children:"5\u67085\u65e5\u306b\u30e9\u30a4\u30d6\u3092\u884c\u3044\u307e\u3059\uff01\u8a73\u7d30\u306f\u4e0b\u8a18\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"\u65e5\u6642\uff1a5\u67085\u65e5 19\u6642~"}),Object(b.jsxs)("li",{children:["\u5834\u6240\uff1a",Object(b.jsx)("a",{href:"https://cocozahikone.wixsite.com/cocoza",target:"_blank",children:"\u30e9\u30a4\u30d6\u30cf\u30a6\u30b9COCOZA"})]}),Object(b.jsx)("li",{children:"\u6599\u91d1\uff1a\xa52,000 (\xa51,500(\u30c1\u30b1\u30c3\u30c8\u6599\u91d1) + \xa5500(\u30c9\u30ea\u30f3\u30af\u4ee3))"})]}),Object(b.jsxs)("p",{children:["\uff0a\u304a\u554f\u3044\u5408\u308f\u305b\u306f",Object(b.jsx)(j.b,{to:"/contact",children:"\u3053\u3061\u3089"})]})]})},g=c(37),N=(c(58),c(59),c.p+"static/media/live_pic1.ade29344.jpg"),w=c.p+"static/media/live_pic2.e2ad9f9a.jpg",_=c.p+"static/media/live_pic3.ff2af6f7.jpg",y=[N,w,_];var S=function(){return Object(b.jsx)("div",{className:"slider",children:Object(b.jsx)(g.Slide,{easing:"ease-in-out",children:y.map((function(e,t){return Object(b.jsx)("figure",{className:"each-slide",children:Object(b.jsx)("img",{src:e})},t)}))})})};c(60);var A=function(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(S,{}),Object(b.jsx)(v,{})]})},C=(c(61),c.p+"static/media/about_us.7814e68f.jpg");var k=function(){return Object(b.jsxs)("div",{className:"about",children:[Object(b.jsx)("figure",{children:Object(b.jsx)("img",{src:C})}),Object(b.jsx)("h2",{children:"About Us"}),Object(b.jsxs)("div",{className:"about__band",children:[Object(b.jsx)("h3",{children:" AVALANCHE "}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["\u6ecb\u8cc0\u770c\u51fa\u8eab\u3001\u5927\u5b66\u751f\uff14\u4eba\u7d44\u30d0\u30f3\u30c9",Object(b.jsx)("br",{}),'\u6ecb\u8cc0\u770c\u5f66\u6839\u5e02\u306e\u30e9\u30a4\u30d6\u30cf\u30a6\u30b9"COCOZA"\u3067\u306e\u30e9\u30a4\u30d6\u3084"SAVE THE BIRTHDAY"\u306a\u3069\u306b\u51fa\u6f14\u3002']})})]}),Object(b.jsxs)("div",{className:"about__member",children:[Object(b.jsx)("h3",{children:" MEMBERS "}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Singer: ",Object(b.jsx)("span",{children:"Shota"})]}),Object(b.jsxs)("p",{children:["Guitar: ",Object(b.jsx)("span",{children:"Tomoki"})]}),Object(b.jsxs)("p",{children:["Base: ",Object(b.jsx)("span",{children:"Yuto"})]}),Object(b.jsxs)("p",{children:["Drums: ",Object(b.jsx)("span",{children:"Sun"})]})]})]})]})};c(62);var E=function(){return Object(b.jsxs)("div",{className:"info",children:[Object(b.jsxs)("figure",{children:[Object(b.jsx)("h2",{children:"Live Information"}),Object(b.jsx)("img",{src:w,alt:""})]}),Object(b.jsx)("p",{children:"\u73fe\u5728\u4e88\u5b9a\u4e2d\u306e\u30e9\u30a4\u30d6\u306f\u3042\u308a\u307e\u305b\u3093\u3002 "})]})},F=(c(63),c(24));var P=function(){var e=Object(F.b)("mrgrzazb"),t=Object(u.a)(e,2),c=t[0],n=t[1];return c.succeeded?Object(b.jsx)("p",{children:"\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f\u3002"}):Object(b.jsx)("div",{className:"contactForm",children:Object(b.jsxs)("form",{onSubmit:n,method:"POST",action:"https://formspree.io/f/mrgrzazb",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"name",children:"\u304a\u540d\u524d"}),Object(b.jsx)("input",{name:"name",type:"text",id:"name",required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"email",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(b.jsx)("input",{name:"email",type:"email",id:"email",required:!0}),Object(b.jsx)(F.a,{prefix:"Email",field:"email",errors:c.errors})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"message",children:"\u3054\u7528\u4ef6"}),Object(b.jsx)("textarea",{name:"message",id:"message"}),Object(b.jsx)(F.a,{prefix:"Message",field:"message",errors:c.errors})]}),Object(b.jsx)("button",{type:"submit",disabled:c.submitting,children:"\u9001\u4fe1"})]})})};c(66);var R=function(){return Object(b.jsxs)("div",{className:"contact",children:[Object(b.jsx)("h2",{children:"Contact"}),Object(b.jsx)(P,{}),Object(b.jsxs)("div",{className:"contact__other__means",children:[Object(b.jsx)("h4",{children:"\u3053\u3061\u3089\u304b\u3089\u3082\u3054\u9023\u7d61\u3044\u305f\u3060\u3051\u307e\u3059\u3002"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{target:"_blank",href:"https://twitter.com/avalanche_shiga",children:Object(b.jsx)("i",{className:"fab fa-twitter"})}),Object(b.jsx)("a",{target:"_blank",href:"https://www.instagram.com/avalanche.official/?hl=ja",children:Object(b.jsx)("i",{className:"fab fa-instagram"})})]})]})]})},H=c(15),L=c.n(H),I=c(18);c(32);function U(){var e=p().login,t=Object(n.useState)(""),c=Object(u.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!1),l=Object(u.a)(r,2),o=l[0],d=l[1],h=Object(n.useRef)(),O=Object(n.useRef)(),x=Object(i.f)(),m=function(){var t=Object(I.a)(L.a.mark((function t(c){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,a(""),d(!0),t.next=6,e(h.current.value,O.current.value);case 6:x.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a("\u5165\u529b\u5185\u5bb9\u306b\u8aa4\u308a\u304c\u3042\u308a\u307e\u3059");case 12:d(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("div",{className:"login__container",children:[Object(b.jsx)("h2",{children:"Login"}),s&&Object(b.jsx)("p",{className:"error",children:s}),Object(b.jsxs)("form",{onSubmit:m,children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{ref:h,type:"email",id:"email"}),Object(b.jsx)("label",{htmlFor:"password",children:"password"}),Object(b.jsx)("input",{ref:O,type:"password",id:"password"}),Object(b.jsx)("button",{disabled:o,type:"submit",children:"Login"})]}),Object(b.jsx)(j.b,{to:"/password-reset",children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u304a\u5fd8\u308c\u306e\u5834\u5408"}),Object(b.jsx)(j.b,{to:"/signup",children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u3067\u306a\u3044\u65b9"})]})})}function V(){var e=p().signup,t=Object(n.useState)(""),c=Object(u.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!1),l=Object(u.a)(r,2),o=l[0],d=l[1],h=Object(n.useRef)(),O=Object(n.useRef)(),x=Object(n.useRef)(),m=Object(n.useRef)(),f=Object(i.f)(),v=function(){var t=Object(I.a)(L.a.mark((function t(c){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),x.current.value===m.current.value){t.next=3;break}return t.abrupt("return",a("\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093"));case 3:return t.prev=3,a(""),d(!0),t.next=8,e(O.current.value,x.current.value,h.current.value);case 8:f.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),a("\u5165\u529b\u5185\u5bb9\u306b\u8aa4\u308a\u304c\u3042\u308a\u307e\u3059");case 14:d(!1);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"signup",children:Object(b.jsxs)("div",{className:"signup__container",children:[Object(b.jsx)("h2",{children:"Sign Up"}),s&&Object(b.jsx)("p",{className:"error",children:s}),Object(b.jsxs)("form",{onSubmit:v,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{ref:h,type:"text",id:"name"}),Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{ref:O,type:"email",id:"email"}),Object(b.jsx)("label",{htmlFor:"password",children:"password"}),Object(b.jsx)("input",{ref:x,type:"password",id:"password"}),Object(b.jsx)("label",{htmlFor:"passwordConfirmation",children:"password confirmation"}),Object(b.jsx)("input",{ref:m,type:"password",id:"passwordConfirmation"}),Object(b.jsx)("button",{disabled:o,type:"submit",children:"Sign Up"})]}),Object(b.jsx)(j.b,{to:"/login",children:"\u65e2\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u3067\u3059\u304b\uff1f"})]})})}c(68);var z=c(29);function B(){var e=p(),t=e.currentUser,c=e.logout,s=Object(n.useState)(""),a=Object(u.a)(s,2),r=a[0],o=a[1],d=Object(n.useState)(!1),h=Object(u.a)(d,2),O=h[0],x=h[1],m=Object(i.f)(),f=function(){var e=Object(I.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(""),e.prev=1,e.next=4,c();case 4:m.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),o("\u30ed\u30b0\u30a2\u30a6\u30c8\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsxs)("h2",{children:[Object(b.jsx)(l.a,{})," Your Profile"]}),r&&Object(b.jsx)("p",{className:"error",children:r}),Object(b.jsx)("div",{className:"profile__details",children:t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Your Name: ",Object(b.jsx)("span",{children:t.displayName})]}),Object(b.jsxs)("p",{children:["Your Email: ",Object(b.jsx)("span",{children:t.email})]}),Object(b.jsx)(j.b,{className:"edit-profile",to:"/update-profile",children:"\u767b\u9332\u60c5\u5831\u3092\u7de8\u96c6\u3059\u308b"}),Object(b.jsx)(j.b,{className:"btn signout",to:"/login",onClick:f,children:"Sign Out"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"no-user",children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"}),Object(b.jsxs)("span",{onClick:function(){return x(!O)},children:[O?Object(b.jsx)(z.b,{}):Object(b.jsx)(z.a,{})," AVALANCHE \u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u306f\uff1f"]}),O&&Object(b.jsxs)("p",{className:"detail",children:['\u304a\u540d\u524d\u3068\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u767b\u9332\u3059\u308b\u3060\u3051\u3067\u3001"AVALANCHE\u30a2\u30ab\u30a6\u30f3\u30c8"\u306b\u767b\u9332\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002',Object(b.jsx)("br",{}),"AVALANCHE\u306e\u30e9\u30a4\u30d6\u306b\u95a2\u3059\u308b\u60c5\u5831\u3084\u30b0\u30c3\u30ba\u60c5\u5831\u306a\u3069\u3092\u3044\u3061\u65e9\u304f\u77e5\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"]}),Object(b.jsx)(j.b,{to:"/signup",children:"\u65b0\u3057\u304fAVALANCHE\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u308b"}),Object(b.jsx)(j.b,{className:"btn",to:"signup",children:"Sign Up"}),Object(b.jsx)(j.b,{to:"/login",children:"\u65e2\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u3067\u3059\u304b\uff1f"}),Object(b.jsx)(j.b,{className:"btn",to:"login",children:"Login"})]})})]})}function D(){var e=p(),t=e.currentUser,c=e.updatePassword,s=e.updateName,a=e.updateEmail,r=Object(n.useState)(""),j=Object(u.a)(r,2),l=j[0],o=j[1],d=Object(n.useState)(!1),h=Object(u.a)(d,2),O=h[0],x=h[1],m=Object(n.useState)(t?t.displayName:""),f=Object(u.a)(m,2),v=f[0],g=f[1],N=Object(n.useState)(t?t.email:""),w=Object(u.a)(N,2),_=w[0],y=w[1],S=Object(n.useRef)(),A=Object(n.useRef)(),C=Object(n.useRef)(),k=Object(n.useRef)(),E=Object(i.f)();Object(n.useEffect)((function(){if(void 0!==t)return function(){g(t.displayName),y(t.email)}}),[t]);var F=function(){var e=Object(I.a)(L.a.mark((function e(n){var r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),C.current.value===k.current.value){e.next=3;break}return e.abrupt("return",o("\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093"));case 3:return r=[],x(!0),o(""),S.current.value!==t.displayName&&r.push(s(S.current.value)),A.current.value!==t.email&&r.push(a(A.current.value)),C.current.value&&r.push(c(C.current.value)),e.next=11,Promise.all(r).then((function(){E.push("/profile")})).catch((function(){o("\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f")})).finally((function(){x(!1)}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"update-profile",children:Object(b.jsxs)("div",{className:"update-profile__container",children:[Object(b.jsx)("h2",{children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u66f4\u65b0"}),l&&Object(b.jsx)("p",{className:"error",children:l}),Object(b.jsxs)("form",{onSubmit:F,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",id:"name",value:v,ref:S,onChange:function(e){return g(e.target.value)},required:!0}),Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"email",id:"email",value:_,ref:A,onChange:function(e){return y(e.target.value)},required:!0}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",id:"password",ref:C,placeholder:"\u5909\u66f4\u3059\u308b\u5834\u5408\u306e\u307f\u5165\u529b"}),Object(b.jsx)("label",{htmlFor:"passwordConfirmation",children:"Password Confirmation"}),Object(b.jsx)("input",{type:"password",id:"passwordConfirmation",ref:k,placeholder:"\u5909\u66f4\u3059\u308b\u5834\u5408\u306e\u307f\u5165\u529b"}),Object(b.jsx)("button",{disabled:O,type:"submit",children:"\u66f4\u65b0\u3059\u308b"})]})]})})}c(69);function T(){var e=p().resetPassword,t=Object(n.useState)(""),c=Object(u.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),j=i[0],l=i[1],o=Object(n.useState)(!1),d=Object(u.a)(o,2),h=d[0],O=d[1],x=Object(n.useRef)();return Object(b.jsxs)("div",{className:"password-reset",children:[Object(b.jsx)("h2",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u30ea\u30bb\u30c3\u30c8"}),Object(b.jsx)("p",{children:"\u3054\u6307\u5b9a\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u306a\u304a\u3059\u305f\u3081\u306e\u901a\u77e5\u30e1\u30fc\u30eb\u304c\u5c4a\u304d\u307e\u3059\u3002"}),s&&Object(b.jsx)("p",{className:"error",children:s}),j&&Object(b.jsx)("p",{className:"success",children:j}),Object(b.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),x.current.value){l(""),a("");try{e(x.current.value).then((function(){return l("\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f")})).catch((function(){return a("\u6307\u5b9a\u3055\u308c\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u305b\u3093")})),O(!0)}catch(c){a("\u9001\u4fe1\u306b\u5931\u6557\u3057\u307e\u3057\u305f")}O(!1)}},children:[Object(b.jsx)("label",{htmlFor:"email",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(b.jsx)("input",{ref:x,type:"email",id:"email"}),Object(b.jsx)("button",{type:"submit",disabled:h,children:"\u9001\u4fe1"})]})]})}var q=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(f,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",component:A}),Object(b.jsx)(i.a,{exact:!0,path:"/about",component:k}),Object(b.jsx)(i.a,{exact:!0,path:"/information",component:E}),Object(b.jsx)(i.a,{exact:!0,path:"/contact",component:R}),Object(b.jsx)(i.a,{exact:!0,path:"/login",component:U}),Object(b.jsx)(i.a,{exact:!0,path:"/signup",component:V}),Object(b.jsx)(i.a,{exact:!0,path:"/profile",component:B}),Object(b.jsx)(i.a,{exact:!0,path:"/update-profile",component:D}),Object(b.jsx)(i.a,{exact:!0,path:"/password-reset",component:T})]}),Object(b.jsx)(o,{})]})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(j.a,{basename:"/avalanche",children:Object(b.jsx)(m,{children:Object(b.jsx)(q,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.553d4f76.chunk.js.map