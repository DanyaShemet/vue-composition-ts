(function(t){function e(e){for(var r,a,o=e[0],i=e[1],u=e[2],d=0,b=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&b.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-composition-ts/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./uk":"ada2","./uk.js":"ada2","./uz":"2e8c","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=c(t);return n(e)}function c(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=c,t.exports=s,s.id="4678"},5203:function(t,e,n){"use strict";n("63f3")},"63f3":function(t,e,n){},"706b":function(t,e,n){},"72ef":function(t,e,n){"use strict";n("f8d7")},a750:function(t,e,n){"use strict";n("706b")},cd49:function(t,e,n){"use strict";n.r(e);var r=n("9ab4"),s=n("7a23"),c=Object(s["i"])("div",{class:"modal-background"},null,-1),a=Object(s["i"])("div",{class:"modal-content"},[Object(s["i"])("div",{id:"modal"})],-1),o={class:"section"},i={class:"container"};function u(t,e,n,r,u,l){var d=Object(s["D"])("Navbar"),b=Object(s["D"])("router-view");return Object(s["x"])(),Object(s["h"])(s["a"],null,[Object(s["i"])("div",{class:"modal",style:Object(s["s"])(t.style)},[c,a,Object(s["i"])("button",{class:"modal-close is-large",onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.hide&&t.hide.apply(t,e)})})],4),Object(s["i"])("section",o,[Object(s["i"])("div",i,[Object(s["k"])(d),Object(s["k"])(b)])])],64)}var l={class:"navbar"},d={class:"navbar-end"},b={key:0,class:"buttons"},j=Object(s["j"])("New Post"),f={key:1,class:"buttons"};function p(t,e,n,r,c,a){var o=Object(s["D"])("router-link");return Object(s["x"])(),Object(s["h"])(s["a"],null,[Object(s["i"])("div",l,[Object(s["i"])("div",d,[t.auth?(Object(s["x"])(),Object(s["h"])("div",b,[Object(s["k"])(o,{class:"button",to:"/posts/new"},{default:Object(s["K"])((function(){return[j]})),_:1}),Object(s["i"])("button",{class:"button",onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.signOut&&t.signOut.apply(t,e)})},"Sign Out")])):(Object(s["x"])(),Object(s["h"])("div",f,[Object(s["i"])("button",{class:"button",onClick:e[1]||(e[1]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.signUp&&t.signUp.apply(t,e)}),"data-test":"sign-up"}," Sign Up "),Object(s["i"])("button",{class:"button",onClick:e[2]||(e[2]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.signIn&&t.signIn.apply(t,e)})},"Sign In")]))])]),(Object(s["x"])(),Object(s["f"])(s["c"],{to:"#modal"},[(Object(s["x"])(),Object(s["f"])(Object(s["E"])(t.component)))]))],64)}var v=["disabled"];function O(t,e,n,r,c,a){var o=Object(s["D"])("FormInput");return Object(s["x"])(),Object(s["h"])("form",{onSubmit:e[2]||(e[2]=Object(s["M"])((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.submit&&t.submit.apply(t,e)}),["prevent"]))},[Object(s["k"])(o,{name:"Username",type:"text",modelValue:t.username,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.username=e}),error:t.usernameStatus.message},null,8,["modelValue","error"]),Object(s["k"])(o,{name:"Password",type:"password",modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.password=e}),error:t.passwordStatus.message},null,8,["modelValue","error"]),Object(s["i"])("button",{class:"button is-primary",disabled:!t.usernameStatus.valid||!t.passwordStatus.valid}," Button ",8,v)],32)}var h={class:"field"},m=["name"],g={class:"control"},y=["type","id","value"],w={class:"is-danger help"};function k(t,e,n,r,c,a){return Object(s["x"])(),Object(s["h"])("div",h,[Object(s["i"])("label",{class:"label",name:t.name},Object(s["G"])(t.name),9,m),Object(s["i"])("div",g,[Object(s["i"])("input",{type:t.type,id:t.name,class:"input",value:t.modelValue,onInput:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.handleInput&&t.handleInput.apply(t,e)})},null,40,y)]),Object(s["i"])("p",w,Object(s["G"])(t.error),1)])}var S=Object(s["l"])({props:{name:{type:String,required:!0},type:{type:String,default:"text"},modelValue:{type:String,required:!0},error:{type:String}},setup:function(t,e){var n=function(t){e.emit("update:modelValue",t.target.value)};return{handleInput:n}}}),P=n("6b0d"),x=n.n(P);const I=x()(S,[["render",k]]);var T=I;function M(){return{type:"required"}}function D(t){return{type:"length",options:t}}function U(t,e){for(var n=0,r=e;n<r.length;n++){var s=r[n];if("required"===s.type&&(!t||0===t.length))return{valid:!1,message:"Field is required"};if("length"===s.type&&(t.length<s.options.min||t.length>s.options.max))return{valid:!1,message:"The value must be between "+s.options.min+" and "+s.options.max}}return{valid:!0}}var E=n("bc3a"),z=n.n(E),_=Symbol("store"),q=function(){function t(t){this.state=Object(s["z"])(t)}return t.prototype.install=function(t){t.provide(_,this)},t.prototype.getState=function(){return Object(s["A"])(this.state)},t.prototype.createPost=function(t){return Object(r["b"])(this,void 0,void 0,(function(){var e;return Object(r["c"])(this,(function(n){switch(n.label){case 0:return[4,z.a.post("/posts",t)];case 1:return e=n.sent(),this.state.posts.all.set(e.data.id,e.data),this.state.posts.ids.push(e.data.id),[2]}}))}))},t.prototype.updatePost=function(t){return Object(r["b"])(this,void 0,void 0,(function(){var e;return Object(r["c"])(this,(function(n){switch(n.label){case 0:return[4,z.a.put("/posts",t)];case 1:return e=n.sent(),this.state.posts.all.set(e.data.id,e.data),[2]}}))}))},t.prototype.createUser=function(t){return Object(r["b"])(this,void 0,void 0,(function(){var e;return Object(r["c"])(this,(function(n){switch(n.label){case 0:return[4,z.a.post("/users",t)];case 1:return e=n.sent(),this.state.authors.all.set(e.data.id,e.data),this.state.authors.ids.push(e.data.id),this.state.authors.currentUserId=e.data.id,[2]}}))}))},t.prototype.fetchPost=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t,e,n,s,c;return Object(r["c"])(this,(function(r){switch(r.label){case 0:return[4,z.a.get("/posts")];case 1:for(t=r.sent(),e={all:new Map,ids:[],loaded:!0},n=0,s=t.data;n<s.length;n++)c=s[n],e.ids.push(c.id),e.all.set(c.id,c);return this.state.posts=e,[2]}}))}))},t}(),V=new Map,A=new q({authors:{all:new Map,ids:[],loaded:!1,currentUserId:void 0},posts:{all:V,ids:[],loaded:!1}});function B(){var t=Object(s["o"])(_);if(!t)throw Error("Did you forgot to call provide");return t}var C=Object(s["B"])(!1),L=Object(s["B"])();function K(){return{show:C,showModal:function(){return C.value=!0},hideModal:function(){return C.value=!1},component:L}}var N=Object(s["l"])({components:{FormInput:T},setup:function(){var t=this,e=B(),n=K(),c=Object(s["B"])("username"),a=Object(s["B"])("password"),o=Object(s["d"])((function(){return U(c.value,[M(),D({min:5,max:10})])})),i=Object(s["d"])((function(){return U(a.value,[M(),D({min:10,max:40})])})),u=function(){return Object(r["b"])(t,void 0,void 0,(function(){var t;return Object(r["c"])(this,(function(r){switch(r.label){case 0:return o.value.valid&&i.value.valid?(t={id:"-1",username:c.value,password:a.value},[4,e.createUser(t)]):[2];case 1:return r.sent(),n.hideModal(),[2]}}))}))};return{username:c,usernameStatus:o,password:a,passwordStatus:i,submit:u}}});n("a750");const G=x()(N,[["render",O]]);var W=G,F=Object(s["l"])({name:"NavBar",components:{SignUp:W},setup:function(){var t=K(),e=B(),n=Object(s["d"])((function(){return!!e.getState().authors.currentUserId})),r=function(){t.component.value=Object(s["p"])(W),t.showModal()},c=function(){var e=Object(s["l"])({setup:function(){return function(){return Object(s["n"])("div","Demo")}}});t.component.value=Object(s["p"])(e),t.showModal()},a=function(){var e=Object(s["l"])({setup:function(){return function(){return Object(s["n"])("div","Demo2")}}});t.component.value=Object(s["p"])(e),t.showModal()};return{component:t.component,auth:n,signIn:c,signUp:r,signOut:a}}});const H=x()(F,[["render",p]]);var J=H,Q=Object(s["l"])({name:"App",components:{Navbar:J},setup:function(){var t=K(),e=Object(s["d"])((function(){return{display:t.show.value?"block":"none"}})),n=function(){t.hideModal()};return{style:e,hide:n}}});n("72ef");const R=x()(Q,[["render",u]]);var X=R,Y=n("c1df"),Z=n.n(Y),$={id:"1",title:"Today",created:Z()().subtract(1,"second"),authorId:"1"},tt={id:"2",title:"This Week",created:Z()().subtract(2,"days"),authorId:"1"},et={id:"3",title:"This Month",created:Z()().subtract(12,"days"),authorId:"1"},nt=n("6c02");function rt(t,e,n,r,c,a){var o=Object(s["D"])("Timeline"),i=Object(s["D"])("Spinner");return Object(s["x"])(),Object(s["f"])(s["b"],null,{default:Object(s["K"])((function(){return[Object(s["k"])(o)]})),fallback:Object(s["K"])((function(){return[Object(s["k"])(i)]})),_:1})}var st={class:"message is-primary is-marginless"},ct={class:"message-header"},at={class:"is-primary panel"},ot={class:"panel-tabs"},it=["data-test","onClick"];function ut(t,e,n,r,c,a){var o=Object(s["D"])("TimeLinePost");return Object(s["x"])(),Object(s["h"])(s["a"],null,[Object(s["i"])("div",st,[Object(s["i"])("div",ct,[Object(s["i"])("div",null,"Posts for "+Object(s["G"])(t.currentPeriod.toLowerCase()),1)])]),Object(s["i"])("nav",at,[Object(s["i"])("span",ot,[(Object(s["x"])(!0),Object(s["h"])(s["a"],null,Object(s["C"])(t.periods,(function(e){return Object(s["x"])(),Object(s["h"])("a",{key:e,class:Object(s["r"])({"is-active":t.currentPeriod===e}),"data-test":e,onClick:function(n){return t.setPeriod(e)}},Object(s["G"])(e),11,it)})),128))]),(Object(s["x"])(!0),Object(s["h"])(s["a"],null,Object(s["C"])(t.posts,(function(t){return Object(s["x"])(),Object(s["f"])(o,{key:t.id,class:"panel-block",post:t},null,8,["post"])})),128))])],64)}function lt(t,e,n,r,c,a){var o=Object(s["D"])("router-link");return Object(s["x"])(),Object(s["f"])(o,{to:t.to,class:"is-align-items-flex-start is-flex is-flex-direction-column"},{default:Object(s["K"])((function(){return[Object(s["i"])("span",null,Object(s["G"])(t.post.title),1),Object(s["i"])("div",null,Object(s["G"])(t.post.created.format("Do MMM")),1)]})),_:1},8,["to"])}var dt=Object(s["l"])({name:"TimeLinePost",props:{post:{type:Object,required:!0}},setup:function(t){return{to:"/posts/"+t.post.id}}});const bt=x()(dt,[["render",lt]]);var jt=bt,ft=Object(s["l"])({name:"Timeline",components:{TimeLinePost:jt},setup:function(){return Object(r["b"])(this,void 0,void 0,(function(){var t,e,n,c,a,o;return Object(r["c"])(this,(function(r){switch(r.label){case 0:return t=["Today","This week","This month"],e=Object(s["B"])("Today"),n=B(),n.getState().posts.loaded?[3,2]:[4,n.fetchPost()];case 1:r.sent(),r.label=2;case 2:return c=n.getState().posts.ids.reduce((function(t,e){var r=n.getState().posts.all.get(e);if(!r)throw Error("This post was not found");return t.concat(r)}),[]),a=Object(s["d"])((function(){return c.filter((function(t){return"Today"===e.value?t.created.isAfter(Z()().subtract(1,"day")):"This week"===e.value?t.created.isAfter(Z()().subtract(1,"week")):"This month"===e.value&&t.created.isAfter(Z()().subtract(1,"month"))}))})),o=function(t){e.value=t},[2,{periods:t,currentPeriod:e,setPeriod:o,posts:a}]}}))}))}});const pt=x()(ft,[["render",ut]]);var vt=pt;const Ot={class:"progress is-primary is-small"};function ht(t,e){return Object(s["x"])(),Object(s["h"])("progress",Ot)}const mt={},gt=x()(mt,[["render",ht]]);var yt=gt,wt=Object(s["l"])({name:"App",components:{Spinner:yt,Timeline:vt}});const kt=x()(wt,[["render",rt]]);var St=kt;function Pt(t,e,n,r,c,a){var o=Object(s["D"])("PostWriter");return Object(s["x"])(),Object(s["f"])(o,{post:t.newPost,onSave:t.save},null,8,["post","onSave"])}var xt={class:"columns"},It={class:"column"},Tt={class:"field"},Mt=Object(s["i"])("div",{class:"label"},"New Post",-1),Dt={class:"columns"},Ut={class:"column"},Et={class:"column"},zt=["innerHTML"],_t={class:"columns"},qt={class:"column"};function Vt(t,e,n,r,c,a){return Object(s["x"])(),Object(s["h"])(s["a"],null,[Object(s["i"])("div",xt,[Object(s["i"])("div",It,[Object(s["i"])("div",Tt,[Mt,Object(s["L"])(Object(s["i"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.title=e}),type:"text",class:"input","data-test":"title"},null,512),[[s["I"],t.title]])])])]),Object(s["i"])("div",Dt,[Object(s["i"])("div",Ut,[Object(s["i"])("div",{contenteditable:"",ref:"contentEditable",onInput:e[1]||(e[1]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.handleInput&&t.handleInput.apply(t,e)}),"data-test":"content"},null,544)]),Object(s["i"])("div",Et,[Object(s["i"])("div",{innerHTML:t.html},null,8,zt)])]),Object(s["i"])("div",_t,[Object(s["i"])("div",qt,[Object(s["i"])("button",{onClick:e[2]||(e[2]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.save&&t.save.apply(t,e)}),"data-test":"submit",class:"button is-primary is-pulled-right"}," Submit ")])])],64)}var At=n("0e54"),Bt=n("1487"),Ct=n.n(Bt),Lt=n("b047"),Kt=n.n(Lt),Nt=Object(s["l"])({name:"PostWriter",props:{post:{type:Object,required:!0}},emits:{save:function(t){return!0}},setup:function(t,e){var n=Object(s["B"])(t.post.title),c=Object(s["B"])(t.post.markdown||""),a=Object(s["B"])(""),o=function(t){a.value=Object(At["parse"])(t,{gfm:!0,breaks:!0,highlight:function(t){return Ct.a.highlightAuto(t).value}})};Object(s["J"])(c,Kt()(o,250),{immediate:!0});var i=Object(s["B"])(null),u=function(){var t;c.value=(null===(t=i.value)||void 0===t?void 0:t.innerText)||""};Object(s["v"])((function(){if(!i.value)throw Error("This should never happen");i.value.innerText=c.value}));var l=function(){var s=Object(r["a"])(Object(r["a"])({},t.post),{html:a.value,title:n.value,markdown:c.value});e.emit("save",s)};return{html:a,title:n,content:c,contentEditable:i,handleInput:u,save:l}}});n("5203");const Gt=x()(Nt,[["render",Vt]]);var Wt=Gt,Ft=Object(s["l"])({name:"NewPost",components:{PostWriter:Wt},setup:function(){var t=this,e=B(),n=e.getState().authors.currentUserId;if(!n)throw Error("currentUserId was not found");var s={id:"-1",title:"Enter your title",created:Z()().subtract(1,"second"),authorId:n},c=Object(nt["d"])(),a=function(n){return Object(r["b"])(t,void 0,void 0,(function(){return Object(r["c"])(this,(function(t){switch(t.label){case 0:return[4,e.createPost(n)];case 1:return t.sent(),c.push("/"),[2]}}))}))};return{save:a,newPost:s}}});const Ht=x()(Ft,[["render",Pt]]);var Jt=Ht;function Qt(t,e,n,r,c,a){var o=Object(s["D"])("PostViewer"),i=Object(s["D"])("Spinner");return Object(s["x"])(),Object(s["f"])(s["b"],null,{default:Object(s["K"])((function(){return[Object(s["k"])(o)]})),fallback:Object(s["K"])((function(){return[Object(s["k"])(i)]})),_:1})}var Rt={class:"columns"},Xt=Object(s["i"])("div",{class:"column"},null,-1),Yt={class:"column is-two-thirds"},Zt=Object(s["j"])(" Edit "),$t=["innerHTML"],te=Object(s["i"])("div",{class:"column"},null,-1);function ee(t,e,n,r,c,a){var o=Object(s["D"])("router-link");return Object(s["x"])(),Object(s["h"])("div",Rt,[Xt,Object(s["i"])("div",Yt,[t.canEdit?(Object(s["x"])(),Object(s["f"])(o,{key:0,to:"/posts/"+t.post.id+"/edit",class:"button is-link is-rounded","data-test":"can-edit"},{default:Object(s["K"])((function(){return[Zt]})),_:1},8,["to"])):Object(s["g"])("",!0),Object(s["i"])("h1",null,Object(s["G"])(t.post.title),1),Object(s["i"])("div",{innerHTML:t.post.html},null,8,$t)]),te])}var ne=Object(s["l"])({setup:function(){return Object(r["b"])(this,void 0,void 0,(function(){var t,e,n,s;return Object(r["c"])(this,(function(r){switch(r.label){case 0:return t=B(),e=Object(nt["c"])().params.id,t.getState().posts.loaded?[3,2]:[4,t.fetchPost()];case 1:r.sent(),r.label=2;case 2:if(n=t.getState().posts.all.get(e),!n)throw Error("Post was not found");return s=n.authorId===t.getState().authors.currentUserId,[2,{post:n,canEdit:s}]}}))}))}});const re=x()(ne,[["render",ee]]);var se=re,ce=Object(s["l"])({components:{PostViewer:se,Spinner:yt}});const ae=x()(ce,[["render",Qt]]);var oe=ae;function ie(t,e,n,r,c,a){var o=Object(s["D"])("PostEditor"),i=Object(s["D"])("Spinner");return Object(s["x"])(),Object(s["f"])(s["b"],null,{default:Object(s["K"])((function(){return[Object(s["k"])(o)]})),fallback:Object(s["K"])((function(){return[Object(s["k"])(i)]})),_:1})}function ue(t,e,n,r,c,a){var o=Object(s["D"])("PostWriter");return Object(s["x"])(),Object(s["f"])(o,{post:t.post,onSave:t.save},null,8,["post","onSave"])}var le=Object(s["l"])({components:{PostWriter:Wt},setup:function(){return Object(r["b"])(this,void 0,void 0,(function(){var t,e,n,s,c,a=this;return Object(r["c"])(this,(function(o){switch(o.label){case 0:return t=B(),e=Object(nt["d"])(),n=Object(nt["c"])().params.id,t.getState().posts.loaded?[3,2]:[4,t.fetchPost()];case 1:o.sent(),o.label=2;case 2:if(s=t.getState().posts.all.get(n),!s)throw Error("Post was not found");return s.authorId!==t.getState().authors.currentUserId&&e.push("/"),c=function(n){return Object(r["b"])(a,void 0,void 0,(function(){return Object(r["c"])(this,(function(r){switch(r.label){case 0:return[4,t.updatePost(n)];case 1:return r.sent(),e.push("/"),[2]}}))}))},[2,{post:s,save:c}]}}))}))}});const de=x()(le,[["render",ue]]);var be=de,je=Object(s["l"])({components:{PostEditor:be,Spinner:yt}});const fe=x()(je,[["render",ie]]);var pe=fe;function ve(t){var e=Object(nt["a"])({history:Object(nt["b"])("/vue-composition-ts"),routes:[{path:"/",component:St},{path:"/posts/:id",component:oe},{path:"/posts/:id/edit",component:pe,meta:{requiredAuth:!0}},{path:"/posts/new",component:Jt,meta:{requiredAuth:!0}}]});return e.beforeEach((function(e,n,r){var s=!!t.getState().authors.currentUserId;e.meta.requiredAuth?e.meta.requiredAuth&&s?r():r({path:"/"}):r()})),e}var Oe=n("2ef0");n("6470");function he(){return new Promise((function(t){setTimeout(t,2e3)}))}z.a.get=function(t){return Object(r["b"])(void 0,void 0,void 0,(function(){return Object(r["c"])(this,(function(e){switch(e.label){case 0:return"/posts"!==t?[3,2]:[4,he()];case 1:return e.sent(),[2,Promise.resolve({data:[$,tt,et]})];case 2:return[2]}}))}))},z.a.post=function(t,e){return Object(r["b"])(void 0,void 0,void 0,(function(){var n,s,c;return Object(r["c"])(this,(function(a){switch(a.label){case 0:return"/posts"!==t?[3,2]:(s=Object(Oe["random"])(100,1e4),[4,he()]);case 1:return a.sent(),n=Object(r["a"])(Object(r["a"])({},e),{title:e.title,created:e.created,id:s.toString(),authorId:e.authorId}),[2,Promise.resolve({data:n})];case 2:return"/users"!==t?[3,4]:(s=Object(Oe["random"])(100,1e4),[4,he()]);case 3:return a.sent(),c={id:s.toString(),username:e.username},[2,Promise.resolve({data:c})];case 4:return[2]}}))}))},z.a.put=function(t,e){return Object(r["b"])(void 0,void 0,void 0,(function(){var n;return Object(r["c"])(this,(function(s){switch(s.label){case 0:return"/posts"!==t?[3,2]:[4,he()];case 1:return s.sent(),n=Object(r["a"])(Object(r["a"])({},e),{title:e.title,created:e.created,authorId:e.authorId}),[2,Promise.resolve({data:n})];case 2:return[2]}}))}))};var me=ve(A);Object(s["e"])(X).use(me).use(A).mount("#app")},f8d7:function(t,e,n){}});
//# sourceMappingURL=app.105bf15b.js.map