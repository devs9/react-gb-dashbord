(this["webpackJsonpreact-gb-dashbord"]=this["webpackJsonpreact-gb-dashbord"]||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a(36),s=a(53),i=a(159),l=a(23),u=a(76),m=a(87),d=a(77),g=a(16),p=a.n(g),b=a(26);const h="@GLOBAL_AUTH//START",f="@GLOBAL_AUTH//LOGOUT",v="@GLOBAL_AUTH//SUCCESS",O="@GLOBAL_AUTH//FAILURE",E="@GLOBAL_AUTH/*saga*/SIGN_IN",j="@GLOBAL_AUTH/*saga*/GOOGLE_LOGIN";var w=a(30);const k=Object(w.createAction)(h)(),y=Object(w.createAction)(f)(),A=Object(w.createAction)(O)(),x=Object(w.createAction)(v)();var C=p.a.mark(I),S=p.a.mark(R),F=p.a.mark(L),D=p.a.mark(T);function I(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,console.log("start");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),C,null,[[0,5]])}function R(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.c)(k());case 3:return console.log("googleSignIn start"),t.next=6,gapi.auth2.getAuthInstance().signIn();case 6:e=t.sent,console.log(e),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(b.c)(A("LOGIN ERROR"));case 14:case"end":return t.stop()}}),S,null,[[0,10]])}function L(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(E,I);case 2:return e.next=4,Object(b.d)(j,R);case 4:case"end":return e.stop()}}),F)}function T(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.b)(L)]);case 2:case"end":return e.stop()}}),D)}var B=p.a.mark(_);function _(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.b)(T)]);case 2:case"end":return e.stop()}}),B)}var N=a(21);const P={isAuth:!1,isFetch:!1,profile:{email:"",fullName:""}};var Y=Object(w.createReducer)(P).handleAction(k,(e,t)=>Object(N.a)(Object(N.a)({},e),{},{isFetch:!0})).handleAction(y,(e,t)=>P).handleAction(A,(e,t)=>Object(N.a)(Object(N.a)({},e),{},{isFetch:!1,errors:t.payload})).handleAction(x,(e,t)=>({isAuth:!0,isFetch:!1,profile:t.payload}));var G=Object(l.combineReducers)({global:Y});var U=function(){const e=Object(m.a)(),t=Object(u.composeWithDevTools)({}),a=[d.a,e],n=Object(l.createStore)(G,t(Object(l.applyMiddleware)(...a)));return e.run(_),n}(),W=a(41),H=a(60);const M=Object({NODE_ENV:"production",PUBLIC_URL:"/react-gb-dashbord",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GOOGLE_CLIENT_ID:"735720181512-qi8stm50pen4oi0avu98i36chb8bscfa.apps.googleusercontent.com"}).REACT_APP_FACEBOOK_APP_ID,K="/react-gb-dashbord/";var z=a(13);const V=()=>r.a.createElement("section",null,r.a.createElement("h5",null,"Home"));V.whyDidYouRender=!0;var q=V;const J=()=>r.a.createElement("section",null,r.a.createElement("h5",null,"Profile"));J.whyDidYouRender=!0;var $=J;const Q=()=>r.a.createElement("section",null,r.a.createElement("h5",null,"Settings"));Q.whyDidYouRender=!0;var X=[{exact:!0,redirectPath:"/login",path:"/",component:q},{exact:!0,redirectPath:"/login",path:"/settings",component:Q},{exact:!0,redirectPath:"/login",path:"/profile",component:$}],Z=a(37),ee=a(57);const te=(e,t)=>new Promise((a,n)=>{if(document.getElementById(e))return a(!0);const r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("id",e),r.setAttribute("src",t),r.addEventListener("load",a),r.addEventListener("error",()=>n(new Error("Error loading ".concat(e,".")))),r.addEventListener("abort",()=>n(new Error("".concat(e,"  loading aborted.")))),document.getElementsByTagName("head")[0].appendChild(r)}),ae=function(){var e=Object(ee.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"googleAuth","//apis.google.com/js/client:platform.js",e.next=5,te("googleAuth","//apis.google.com/js/client:platform.js");case 5:gapi.load("auth2",()=>{gapi.auth2.getAuthInstance()||gapi.auth2.init({client_id:"735720181512-qi8stm50pen4oi0avu98i36chb8bscfa.apps.googleusercontent.com"})}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(ee.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"facebookAuth","https://connect.facebook.net/en_US/sdk.js",t={appId:M,version:"v3.2",cookie:!1,xfbml:!1},e.next=6,te("facebookAuth","https://connect.facebook.net/en_US/sdk.js");case 6:return e.next=8,FB.init(t);case 8:FB.getLoginStatus(e=>console.log("FB:status:",e,e.status)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.name,":",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),re={login:"",password:""},oe={name:"login",label:"\u041b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u043e\u0447\u0442\u0430",autoComplete:"username",iconFA:"fas fa-user"},ce={name:"password",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"current-password",iconFA:"fas fa-unlock-alt"};var se=a(67),ie=a(156),le=a(157),ue=a(151);const me=Object(ue.a)(({transitions:e,palette:t,spacing:a})=>({root:{height:"100vh",backgroundSize:"cover",backgroundImage:"url(".concat("/react-gb-dashbord","/assets/img/githubBg.jpg)")},form:{top:100,opacity:.95,position:"relative",transition:e.create(["opacity","top"],{easing:e.easing.sharp,duration:e.duration.enteringScreen})},paper:{display:"flex",alignItems:"center",flexDirection:"column",paddingTop:a(2),backgroundColor:t.background.paper},formHidden:{top:0,opacity:0}})),de=({children:e})=>{const t=me(),a=Object(n.useState)(t.formHidden),o=Object(Z.a)(a,2),c=o[0],s=o[1];return Object(n.useEffect)(()=>{setTimeout(()=>{s(t.form)},200)},[t.form]),r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:c},r.a.createElement(le.a,{component:"main",maxWidth:"xs"},r.a.createElement(ie.a,{className:t.paper},e))))};de.whyDidYouRender=!0;var ge=de,pe=a(161);const be=Object(ue.a)(({spacing:e})=>({root:{width:"100%",marginTop:e(2),"& .MuiButtonBase-root":{width:"90%",borderRadius:5,margin:e(3,"5%",2)}}})),he=Object(ue.a)(({spacing:e,palette:t})=>({root:{bottom:60,width:"80%",display:"flex",borderRadius:4,position:"relative",alignItems:"center",flexDirection:"column",backgroundColor:"#979797",paddingBottom:e(1)},avatar:{margin:e(1),backgroundColor:"".concat(t.error.light," !important")}})),fe=Object(ue.a)(({spacing:e,palette:t})=>({root:{width:"90%",margin:e(0,"5%",2),"& a":{color:t.text.primary}}})),ve=Object(ue.a)(({transitions:e})=>({root:{width:"60%",marginTop:-25,display:"flex",paddingBottom:15,position:"relative",justifyContent:"space-evenly","& img":{width:33,"&:hover":{cursor:"pointer",transform:"scale(1.4)",transition:e.create("transform",{easing:e.easing.easeIn,duration:e.duration.short})}}}})),Oe=({isSignIn:e,handleSubmit:t,children:a})=>{const n=be();return r.a.createElement("form",{className:n.root,noValidate:!0,autoComplete:"off"},a,r.a.createElement(pe.a,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",onClick:t},e?"\u0412\u043e\u0439\u0442\u0438":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))};Oe.whyDidYouRender=!0;var Ee=Oe,je=a(163),we=a(118),ke=a(78),ye=a.n(ke);const Ae=({isSignIn:e})=>{const t=he();return r.a.createElement("div",{className:t.root},r.a.createElement(je.a,{className:t.avatar,color:"secondary"},r.a.createElement(ye.a,null)),r.a.createElement(we.a,{component:"h1",variant:"h5"},e?"\u0412\u0445\u043e\u0434":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))};Ae.whyDidYouRender=!0;var xe=Object(n.memo)(Ae),Ce=a(158),Se=a(154);const Fe=({isSignIn:e,to:t})=>{const a=fe();return r.a.createElement(Se.a,{container:!0,className:a.root},r.a.createElement(Se.a,{item:!0,xs:!0},r.a.createElement(Ce.a,{variant:"body2"},e?"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?":"")),r.a.createElement(Se.a,{item:!0},r.a.createElement(Ce.a,{to:t,component:W.b},e?"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?":"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?")))};Fe.whyDidYouRender=!0;var De=Object(n.memo)(Fe);const Ie=()=>{const e=Object(c.b)(),t=ve();return r.a.createElement("div",{className:t.root},r.a.createElement("img",{alt:"fb-auth",src:"/react-gb-dashbord/assets/svg/facebook.svg",onClick:()=>{FB.getLoginStatus(e=>{console.log("FB:status:",e.status);console.log({provider:"facebook"}),FB.login(t=>{console.log("FB:status:",t.status),t.authResponse&&console.log(e.authResponse.accessToken)},{scope:"email"})})}}),r.a.createElement("img",{alt:"google-auth",src:"/react-gb-dashbord/assets/svg/google.svg",onClick:()=>{e(Object(w.action)(j))}}))};Ie.whyDidYouRender=!0;var Re=Object(n.memo)(Ie);const Le=()=>{const e=Object(n.useState)(re),t=Object(Z.a)(e,2),a=t[0],o=t[1],c=Object(n.useCallback)(e=>{e.preventDefault();const t=e.currentTarget,a=t.name,n=t.value;o(e=>Object(N.a)(Object(N.a)({},e),{},{[a]:n}))},[]),s=Object(n.useCallback)(e=>{e.preventDefault(),console.log(a)},[a]);return Object(n.useEffect)(()=>{ae(),ne()},[]),r.a.createElement(ge,null,r.a.createElement(xe,{isSignIn:!0}),r.a.createElement(Re,null),r.a.createElement("div",{id:"my-signIn"}),r.a.createElement(Ee,{isSignIn:!0,handleSubmit:s},r.a.createElement(se.default,Object.assign({},oe,{value:a.login,onChange:c})),r.a.createElement(se.default,Object.assign({},ce,{value:a.password,onChange:c}))),r.a.createElement(De,{isSignIn:!0,to:"/registration"}))};Le.whyDidYouRender=!0;var Te=Le;const Be=()=>r.a.createElement("section",null,r.a.createElement("h5",null,"NotFound"));Be.whyDidYouRender=!0;var _e=Be,Ne=a(54);const Pe=e=>{let t=e.isAuth,a=(e.children,Object(Ne.a)(e,["isAuth","children"]));return t?r.a.createElement(z.b,a):r.a.createElement(z.a,{to:{pathname:a.redirectPath}})};Pe.whyDidYouRender=!0;var Ye=Pe;const Ge={name:"",password:""},Ue={name:"name",label:"\u0418\u043c\u044f",autoComplete:"username",iconFA:"fas fa-user"},We={name:"password",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"current-password",iconFA:"fas fa-unlock-alt"},He=()=>{const e=Object(n.useState)(Ge),t=Object(Z.a)(e,2),a=t[0],o=t[1],c=Object(n.useCallback)(e=>{e.preventDefault();const t=e.currentTarget,a=t.name,n=t.value;o(e=>Object(N.a)(Object(N.a)({},e),{},{[a]:n}))},[]),s=Object(n.useCallback)(e=>{e.preventDefault(),console.log(a)},[a]);return Object(n.useEffect)(()=>{ae(),ne()},[]),r.a.createElement(ge,null,r.a.createElement(xe,{isSignIn:!1}),r.a.createElement(Re,null),r.a.createElement(Ee,{isSignIn:!1,handleSubmit:s},r.a.createElement(se.default,Object.assign({},Ue,{value:a.name,onChange:c})),r.a.createElement(se.default,Object.assign({},We,{value:a.password,onChange:c}))),r.a.createElement(De,{isSignIn:!1,to:"/login"}))};He.whyDidYouRender=!0;var Me=He;const Ke=()=>{const e=Object(c.c)(({global:e})=>e.isAuth);return r.a.createElement(z.d,null,r.a.createElement(Ye,{redirectPath:"/",path:"/login",isAuth:!e,component:Te}),r.a.createElement(Ye,{redirectPath:"/",isAuth:!e,path:"/registration",component:Me}),X.map(t=>r.a.createElement(Ye,Object.assign({},t,{isAuth:e,key:t.path}))),!e&&r.a.createElement(z.a,{to:"/login"}),r.a.createElement(z.b,{component:_e}))};Ke.whyDidYouRender=!0;var ze=Ke;const Ve=()=>r.a.createElement("div",null,r.a.createElement(W.a,{basename:K},r.a.createElement(ze,null),r.a.createElement(H.b,{newestOnTop:!0,hideProgressBar:!0,autoClose:3e3,transition:H.a})));Ve.whyDidYouRender=!0;var qe=Ve;var Je=a(80),$e=a(79);Object($e.setConfig)({showReactDomPatchNotification:!1});var Qe=Object(Je.hot)(qe),Xe=a(81);const Ze=.15,et=.1,tt={info:"#9013FE",main:"#7A682A",error:"#EF3B2C",success:"#3CD4A0",primary:"#536DFE",warning:"#FFC260",secondary:"#FF5C93",errorLight:"#D54A38",bgWhite:"#F6F7FF",bgDark:"#575454",textWhite:"#FFF"},at={keys:["xs","sm","md","lg","xl"],values:{xs:375,sm:600,md:768,lg:1024,xl:1440}},nt={colors:tt,breakpoints:Object(Xe.mapValues)(at.values,e=>e+"px")};var rt=a(82);function ot(){const e=Object(rt.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    width: 100%;\n    height: 100%;\n  }\n  input, select { \n    font-size: 100%;\n  }\n  \n  #root {\n    max-width: 100%;\n    max-height: 100%;\n    position: relative;\n  }\n"]);return ot=function(){return e},e}const ct=Object(s.b)(ot());var st=a(31),it=a.n(st),lt=a(86);const ut=Object(lt.a)({palette:{text:{primary:tt.textWhite},background:{default:tt.bgWhite,paper:tt.bgDark},info:{main:tt.info,light:it()(tt.info).lighten(et).string()},error:{main:tt.error,light:tt.errorLight},primary:{main:tt.main,dark:it()(tt.main).darken(Ze).string(),light:it()(tt.main).lighten(et).string()},warning:{main:tt.warning,dark:it()(tt.warning).darken(Ze).string()},success:{main:tt.success,dark:it()(tt.success).darken(Ze).string()},secondary:{main:tt.secondary,dark:it()(tt.secondary).darken(Ze).string(),light:it()(tt.secondary).lighten(et).string()}},breakpoints:{keys:at.keys,values:at.values}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(115);Object(o.render)(r.a.createElement(c.a,{store:U},r.a.createElement(s.a,{theme:nt},r.a.createElement(i.a,{theme:ut},r.a.createElement(Qe,null))),r.a.createElement(ct,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})},67:function(e,t,a){"use strict";var n=a(74);a.d(t,"default",(function(){return n.a}));a(68)},68:function(e,t,a){"use strict";a(69)},69:function(e,t){},74:function(e,t,a){"use strict";var n=a(54),r=a(0),o=a.n(r),c=a(154),s=a(160),i=a(151),l=a(162);const u=Object(i.a)(({spacing:e,palette:t})=>Object(l.a)({root:{margin:e(1),paddingLeft:e(2),paddingRight:e(2)},input:{"& .MuiFormLabel-root":{color:t.text.primary},"& .MuiInput-underline:after, .MuiInput-underline:before":{borderBottomColor:t.success.light}},icons:{color:t.text.primary}})),m=e=>{let t=e.iconFA,a=Object(n.a)(e,["iconFA"]);const r=u();return o.a.createElement("div",{className:r.root},o.a.createElement(c.a,{container:!0,spacing:4,alignItems:"flex-end",justify:"center"},o.a.createElement(c.a,{item:!0},o.a.createElement("i",{className:"".concat(t," ").concat(r.icons)})),o.a.createElement(c.a,{item:!0,xs:9},o.a.createElement(s.a,Object.assign({fullWidth:!0,className:r.input},a)))))};m.whyDidYouRender=!0;t.a=Object(r.memo)(m)},94:function(e,t,a){e.exports=a(116)}},[[94,1,2]]]);