(this["webpackJsonpreact-gb-dashbord"]=this["webpackJsonpreact-gb-dashbord"]||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a(33),s=a(51),i=a(151),l=a(22),u=a(74),m=a(87),d=a(75),p=a(13),b=a.n(p),g=a(25);const h="@GLOBAL_AUTH//START",v="@GLOBAL_AUTH//LOGOUT",O="@GLOBAL_AUTH//SUCCESS",f="@GLOBAL_AUTH//FAILURE",E="@GLOBAL_AUTH/*saga*/SIGN_IN",j="@GLOBAL_AUTH/*saga*/GOOGLE_LOGIN";var w=a(28);const k=Object(w.createAction)(h)(),y=Object(w.createAction)(v)(),x=Object(w.createAction)(f)(),A=Object(w.createAction)(O)();var C=b.a.mark(D),F=b.a.mark(B),S=b.a.mark(R),I=b.a.mark(L);function D(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,console.log("start");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),C,null,[[0,5]])}function B(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.c)(k());case 3:return console.log("googleSignIn start"),t.next=6,gapi.auth2.getAuthInstance().signIn();case 6:e=t.sent,console.log(e),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(g.c)(x("LOGIN ERROR"));case 14:case"end":return t.stop()}}),F,null,[[0,10]])}function R(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)(E,D);case 2:return e.next=4,Object(g.d)(j,B);case 4:case"end":return e.stop()}}),S)}function L(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.b)(R)]);case 2:case"end":return e.stop()}}),I)}var _=b.a.mark(T);function T(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.b)(L)]);case 2:case"end":return e.stop()}}),_)}var P=a(14);const N={isAuth:!1,isFetch:!1,profile:{email:"",fullName:""}};var Y=Object(w.createReducer)(N).handleAction(k,(e,t)=>Object(P.a)(Object(P.a)({},e),{},{isFetch:!0})).handleAction(y,(e,t)=>N).handleAction(x,(e,t)=>Object(P.a)(Object(P.a)({},e),{},{isFetch:!1,errors:t.payload})).handleAction(A,(e,t)=>({isAuth:!0,isFetch:!1,profile:t.payload}));var G=Object(l.combineReducers)({global:Y});var H=function(){const e=Object(m.a)(),t=Object(u.composeWithDevTools)({}),a=[d.a,e],n=Object(l.createStore)(G,t(Object(l.applyMiddleware)(...a)));return e.run(T),n}(),U=a(38),M=a(59);const W=Object({NODE_ENV:"production",PUBLIC_URL:"/react-gb-dashbord",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GOOGLE_CLIENT_ID:"735720181512-qi8stm50pen4oi0avu98i36chb8bscfa.apps.googleusercontent.com"}).REACT_APP_FACEBOOK_APP_ID,K="/react-gb-dashbord/";var z=a(10);const V=()=>r.a.createElement("section",null,r.a.createElement("h5",null,"Home"));V.whyDidYouRender=!0;var q=V;const J=()=>r.a.createElement("section",null,r.a.createElement("h5",null,"Profile"));J.whyDidYouRender=!0;var X=J;const $=()=>r.a.createElement("section",null,r.a.createElement("h5",null,"Settings"));$.whyDidYouRender=!0;var Q=[{exact:!0,redirectPath:"/login",path:"/",component:q},{exact:!0,redirectPath:"/login",path:"/settings",component:$},{exact:!0,redirectPath:"/login",path:"/profile",component:X}],Z=a(27);var ee=a(39);const te=(e,t)=>new Promise((a,n)=>{if(document.getElementById(e))return a(!0);const r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("id",e),r.setAttribute("src",t),r.addEventListener("load",a),r.addEventListener("error",()=>n(new Error("Error loading ".concat(e,".")))),r.addEventListener("abort",()=>n(new Error("".concat(e,"  loading aborted.")))),document.getElementsByTagName("head")[0].appendChild(r)}),ae=function(){var e=Object(ee.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"googleAuth","//apis.google.com/js/client:platform.js",e.next=5,te("googleAuth","//apis.google.com/js/client:platform.js");case 5:gapi.load("auth2",()=>{gapi.auth2.getAuthInstance()||gapi.auth2.init({client_id:"735720181512-qi8stm50pen4oi0avu98i36chb8bscfa.apps.googleusercontent.com"})}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(ee.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"facebookAuth","https://connect.facebook.net/en_US/sdk.js",t={appId:W,version:"v3.2",cookie:!1,xfbml:!1},e.next=6,te("facebookAuth","https://connect.facebook.net/en_US/sdk.js");case 6:return e.next=8,FB.init(t);case 8:FB.getLoginStatus(e=>console.log("FB:status:",e,e.status)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.name,":",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();function re(){Object(n.useEffect)(()=>{ae(),ne()},[])}const oe={login:"",password:""},ce={id:"login",type:"email",name:"login",autoComplete:"none",label:"\u041b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u043e\u0447\u0442\u0430"},se={id:"password",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"none"};var ie=a(35),le=a(147),ue=a(146),me=a(142);const de=Object(me.a)({root:{top:0,left:0,right:0,bottom:0,overflowX:"auto",position:"fixed",backgroundSize:"cover",backgroundImage:"url(".concat("/react-gb-dashbord","/assets/img/githubBg.jpg)")}}),pe=Object(me.a)(({transitions:e,spacing:t})=>({root:{top:100,opacity:.9,position:"relative",marginBottom:t(7),transition:e.create(["opacity","top"],{easing:e.easing.sharp,duration:e.duration.enteringScreen})},paper:{display:"flex",alignItems:"center",flexDirection:"column"},formHidden:{top:0,opacity:0}})),be=({children:e})=>{const t=pe(),a=Object(n.useState)(t.formHidden),o=Object(Z.a)(a,2),c=o[0],s=o[1];return Object(n.useEffect)(()=>{setTimeout(()=>{s(t.root)},200)},[t.root]),r.a.createElement(ue.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:c},r.a.createElement(le.a,{className:t.paper},e)))};be.whyDidYouRender=!0;var ge=be,he=a(148);const ve=Object(me.a)(({spacing:e,palette:t})=>({root:{width:"100%",marginTop:e(2),"& .MuiButtonBase-root":{width:"90%",borderRadius:5,backgroundColor:t.success.dark,margin:e(3,"5%",2)}}})),Oe=Object(me.a)(({spacing:e,palette:t})=>({root:{bottom:35,width:"80%",display:"flex",borderRadius:4,position:"relative",alignItems:"center",flexDirection:"column",backgroundColor:"#979797",paddingBottom:e(1)},avatar:{margin:e(1),backgroundColor:"".concat(t.error.light," !important")}})),fe=Object(me.a)(({spacing:e})=>({root:{width:"90% !important",margin:e(0,"5%",2),"& a":{color:"#FFF"}}})),Ee=Object(me.a)(({transitions:e})=>({root:{height:50,width:"60%",display:"flex",justifyContent:"space-evenly","& img":{width:33,"&:hover":{cursor:"pointer",transform:"scale(1.4)",transition:e.create("transform",{easing:e.easing.easeIn,duration:e.duration.short})}}}})),je=({isSignIn:e,handleSubmit:t,children:a})=>{const n=ve(),o=e?"\u0412\u043e\u0439\u0442\u0438":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f";return r.a.createElement("form",{className:n.root,noValidate:!0,autoComplete:"off"},a,r.a.createElement(he.a,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",onClick:t},o))};je.whyDidYouRender=!0;var we=je,ke=a(153),ye=a(89),xe=a(78),Ae=a.n(xe);const Ce=({isSignIn:e})=>{const t=Oe();return r.a.createElement("div",{className:t.root},r.a.createElement(ke.a,{className:t.avatar,color:"secondary"},r.a.createElement(Ae.a,null)),r.a.createElement(ye.a,{component:"h1",variant:"h5"},e?"\u0412\u0445\u043e\u0434":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))};Ce.whyDidYouRender=!0;var Fe=Object(n.memo)(Ce),Se=a(150),Ie=a(149);const De=({isSignIn:e,to:t})=>{const a=fe(),n=e?"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?":"",o=e?"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?":"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?";return r.a.createElement(Ie.a,{container:!0,className:a.root},r.a.createElement(Ie.a,{item:!0,xs:!0},r.a.createElement(Se.a,{variant:"body2"},r.a.createElement(ye.a,{variant:"subtitle1"},n))),r.a.createElement(Ie.a,{item:!0},r.a.createElement(Se.a,{to:t,component:U.b},r.a.createElement(ye.a,{variant:"subtitle1"},o))))};De.whyDidYouRender=!0;var Be=Object(n.memo)(De);const Re=()=>{const e=Object(c.b)(),t=Ee(),a=function(){var e=Object(ee.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,FB.getLoginStatus(e=>{console.log("FB:status:",e.status);console.log({provider:"facebook"}),FB.login(t=>{console.log("FB:status:",t.status),t.authResponse&&console.log(e.authResponse.accessToken)},{scope:"email"})});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:t.root},r.a.createElement("img",{alt:"fb-auth",src:"/react-gb-dashbord/assets/svg/facebook.svg",onClick:a}),r.a.createElement("img",{alt:"google-auth",src:"/react-gb-dashbord/assets/svg/google.svg",onClick:()=>{e(Object(w.action)(j))}}))};Re.whyDidYouRender=!0;var Le=Object(n.memo)(Re);const _e=()=>{re();const e=Object(n.useState)(oe),t=Object(Z.a)(e,2),a=t[0],o=t[1],c=Object(n.useCallback)(e=>{e.preventDefault();const t=e.currentTarget,a=t.name,n=t.value;o(e=>Object(P.a)(Object(P.a)({},e),{},{[a]:n}))},[]),s=Object(n.useCallback)(e=>{e.preventDefault(),console.log(a)},[a]),i=Object(n.useMemo)(()=>Object(P.a)(Object(P.a)({},ce),{},{value:a.login,onChange:c}),[c,a.login]),l=Object(n.useMemo)(()=>Object(P.a)(Object(P.a)({},se),{},{value:a.password,onChange:c}),[c,a.password]);return r.a.createElement(ge,null,r.a.createElement(Fe,{isSignIn:!0}),r.a.createElement(Le,null),r.a.createElement("div",{id:"my-signIn"}),r.a.createElement(we,{isSignIn:!0,handleSubmit:s},r.a.createElement(ie.InputBase,i),r.a.createElement(ie.InputBase,l)),r.a.createElement(Be,{isSignIn:!0,to:"/registration"}))};_e.whyDidYouRender=!0;var Te=_e;const Pe=()=>r.a.createElement("section",null,r.a.createElement("h5",null,"NotFound"));Pe.whyDidYouRender=!0;var Ne=Pe,Ye=a(52);const Ge=e=>{let t=e.isAuth,a=(e.children,Object(Ye.a)(e,["isAuth","children"]));return t?r.a.createElement(z.b,a):r.a.createElement(z.a,{to:{pathname:a.redirectPath}})};Ge.whyDidYouRender=!0;var He=Ge;const Ue={name:"",password:""},Me={id:"login",type:"email",name:"login",autoComplete:"none",label:"\u041b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u043e\u0447\u0442\u0430"},We={id:"password",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"none"},Ke=()=>{re();const e=Object(n.useState)(Ue),t=Object(Z.a)(e,2),a=t[0],o=t[1],c=Object(n.useCallback)(e=>{e.preventDefault();const t=e.currentTarget,a=t.name,n=t.value;o(e=>Object(P.a)(Object(P.a)({},e),{},{[a]:n}))},[]),s=Object(n.useCallback)(e=>{e.preventDefault(),console.log(a)},[a]),i=Object(n.useMemo)(()=>Object(P.a)(Object(P.a)({},Me),{},{value:a.name,onChange:c}),[c,a.name]),l=Object(n.useMemo)(()=>Object(P.a)(Object(P.a)({},We),{},{value:a.password,onChange:c}),[c,a.password]);return r.a.createElement(ge,null,r.a.createElement(Fe,{isSignIn:!1}),r.a.createElement(Le,null),r.a.createElement(we,{isSignIn:!1,handleSubmit:s},r.a.createElement(ie.InputBase,i),r.a.createElement(ie.InputBase,l)),r.a.createElement(Be,{isSignIn:!1,to:"/login"}))};Ke.whyDidYouRender=!0;var ze=Ke;const Ve=()=>{const e=de(),t=Object(c.c)(({global:e})=>e.isAuth);return r.a.createElement("div",{className:e.root},r.a.createElement(z.d,null,r.a.createElement(He,{redirectPath:"/",path:"/login",isAuth:!t,component:Te}),r.a.createElement(He,{redirectPath:"/",isAuth:!t,path:"/registration",component:ze}),Q.map(e=>r.a.createElement(He,Object.assign({},e,{isAuth:t,key:e.path}))),!t&&r.a.createElement(z.a,{to:"/login"}),r.a.createElement(z.b,{component:Ne})))};Ve.whyDidYouRender=!0;var qe=Ve;const Je=()=>r.a.createElement(U.a,{basename:K},r.a.createElement(qe,null),r.a.createElement(M.b,{newestOnTop:!0,hideProgressBar:!0,autoClose:3e3,transition:M.a}));Je.whyDidYouRender=!0;var Xe=Je;var $e=a(80),Qe=a(79);Object(Qe.setConfig)({showReactDomPatchNotification:!1});var Ze=Object($e.hot)(Xe),et=a(81);const tt=.15,at=.1,nt={info:"#9013FE",main:"#7A682A",error:"#EF3B2C",success:"#3CD4A0",primary:"#536DFE",warning:"#FFC260",secondary:"#FF5C93",errorLight:"#D54A38",bgWhite:"#F6F7FF",bgDark:"#575454",textWhite:"#FFF"},rt={keys:["xs","sm","md","lg","xl"],values:{xs:375,sm:600,md:768,lg:1024,xl:1440}},ot={colors:nt,breakpoints:Object(et.mapValues)(rt.values,e=>e+"px")};var ct=a(82);function st(){const e=Object(ct.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    width: 100%;\n    height: 100%;\n  }\n  input, select { \n    font-size: 100%;\n  }\n  \n  #root {\n    max-width: 100%;\n    max-height: 100%;\n    position: relative;\n  }\n"]);return st=function(){return e},e}const it=Object(s.b)(st());var lt=a(29),ut=a.n(lt),mt=a(86);const dt=Object(mt.a)({palette:{text:{primary:nt.textWhite},background:{default:nt.bgWhite,paper:nt.bgDark},info:{main:nt.info,light:ut()(nt.info).lighten(at).string()},error:{main:nt.error,light:nt.errorLight},primary:{main:nt.main,dark:ut()(nt.main).darken(tt).string(),light:ut()(nt.main).lighten(at).string()},warning:{main:nt.warning,dark:ut()(nt.warning).darken(tt).string()},success:{main:nt.success,dark:ut()(nt.success).darken(tt).string()},secondary:{main:nt.secondary,dark:ut()(nt.secondary).darken(tt).string(),light:ut()(nt.secondary).lighten(at).string()}},breakpoints:{keys:rt.keys,values:rt.values}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(113);Object(o.render)(r.a.createElement(c.a,{store:H},r.a.createElement(s.a,{theme:ot},r.a.createElement(i.a,{theme:dt},r.a.createElement(Ze,null))),r.a.createElement(it,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})},35:function(e,t,a){"use strict";var n=a(64);a.o(n,"InputBase")&&a.d(t,"InputBase",(function(){return n.InputBase}))},64:function(e,t,a){"use strict";var n=a(72);a.d(t,"InputBase",(function(){return n.a}));a(67)},67:function(e,t,a){"use strict";a(68),a(69)},68:function(e,t){},69:function(e,t){},72:function(e,t,a){"use strict";var n=a(27),r=a(52),o=a(0),c=a.n(o),s=a(154),i=a(152),l=a(155),u=a(145),m=a(76),d=a.n(m),p=a(77),b=a.n(p),g=a(144),h=a(142);const v=Object(h.a)({root:{color:"#FFF",backgroundColor:"transparent !important"}}),O=Object(h.a)(({spacing:e,palette:t})=>({root:{width:"90%",margin:e(3),"& .MuiFormLabel, .MuiFormLabel-root, .Mui-focused":{color:"#FFF !important"},"& .MuiFilledInput-underline:before, .MuiFilledInput-underline:after":{borderBottomColor:t.success.light}}})),f=({isShowPsw:e,handleShowPsw:t,handleHidePsw:a})=>{const n=v();return c.a.createElement(g.a,{position:"end"},c.a.createElement(u.a,{edge:"end",onClick:t,className:n.root,onMouseDown:a,"aria-label":"toggle password visibility"},e?c.a.createElement(d.a,null):c.a.createElement(b.a,null)))};f.whyDidYouRender=!0;var E=Object(o.memo)(f);const j=e=>{let t=e.label,a=Object(r.a)(e,["label"]);const u=O(),m=Object(o.useState)(!1),d=Object(n.a)(m,2),p=d[0],b=d[1],g=Object(o.useCallback)(()=>{b(!0)},[]),h=Object(o.useCallback)(e=>{e.preventDefault(),b(!1)},[]),v=a.id,f=p?"text":"password",j="password"===v&&c.a.createElement(E,{isShowPsw:p,handleShowPsw:g,handleHidePsw:h});return c.a.createElement(l.a,{className:u.root,variant:"outlined"},c.a.createElement(s.a,{htmlFor:v},t),c.a.createElement(i.a,Object.assign({type:f,endAdornment:j},a)))};j.whyDidYouRender=!0;t.a=Object(o.memo)(j)},93:function(e,t,a){e.exports=a(114)}},[[93,1,2]]]);