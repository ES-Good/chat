(function(){"use strict";var e={436:function(e,s,t){var o=t(963),n=t(252),r=t(577);const a={class:"container content"};function i(e,s,t,o,i,l){const c=(0,n.up)("Header"),u=(0,n.up)("MessageContainer"),d=(0,n.up)("LoginUser"),m=(0,n.up)("RegistrationUser"),g=(0,n.up)("modal");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(c,{onOpenModalLogin:l.showModalLogin,onOpenModalRegistration:l.showModalRegistration},null,8,["onOpenModalLogin","onOpenModalRegistration"]),(0,n.Wm)(u),(0,n.Wm)(g,{class:(0,r.C_)({"modal-show":i.openModal}),onCloseModal:l.closeModal},{default:(0,n.w5)((()=>[i.modalLogin?((0,n.wg)(),(0,n.j4)(d,{key:0})):((0,n.wg)(),(0,n.j4)(m,{key:1}))])),_:1},8,["class","onCloseModal"])])}const l={class:"header"},c={key:0,class:"header__button-box"},u={key:1,class:"title"};function d(e,s,t,o,a,i){return(0,n.wg)(),(0,n.iD)("header",l,[o.userInfo?((0,n.wg)(),(0,n.iD)("h1",u,(0,r.zw)(o.userInfo),1)):((0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("button",{class:"button button_header",onClick:s[0]||(s[0]=s=>e.$emit("openModalLogin"))},"Войти"),(0,n._)("button",{class:"button button_header",onClick:s[1]||(s[1]=s=>e.$emit("openModalRegistration"))},"Зарегестрироватся")]))])}var m=t(977);const g={apiKey:"AIzaSyDc8TC8zTYr5fJ7nCSZ8-eIUBlCL9MTrPE",authDomain:"chat-887ce.firebaseapp.com",projectId:"chat-887ce",storageBucket:"chat-887ce.appspot.com",messagingSenderId:"41477159920",appId:"1:41477159920:web:767f7899add428093c3b35",measurementId:"G-X2N158NY5H"},p=(0,m.ZF)(g);var h=t(451);const f=(0,h.v0)(p);function w(e){(0,h.Aj)(f,(s=>{if(s){const t=s;e.value=t.email,localStorage.setItem("user",t.email)}else console.log("not user")}))}var v=t(262),y={name:"Header",emits:["openModalLogin","openModalRegistration"],setup(){let e=(0,v.iH)(null);return w(e),{userInfo:e}}},b=t(744);const _=(0,b.Z)(y,[["render",d]]);var M=_;const x={class:"message-block"};function k(e,s,t,o,r,a){const i=(0,n.up)("ShowMessages"),l=(0,n.up)("SendingMessages");return(0,n.wg)(),(0,n.iD)("div",x,[(0,n.Wm)(i,{messagesUsers:o.messages},null,8,["messagesUsers"]),(0,n.Wm)(l)])}function U(e,s,t,r,a,i){return(0,n.wg)(),(0,n.iD)("form",{onKeyup:s[3]||(s[3]=(0,o.D2)((0,o.iM)(((...e)=>i.submit&&i.submit(...e)),["exact"]),["enter"])),class:"sending-messages-form"},[(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":s[0]||(s[0]=e=>a.textUser=e),onKeydown:s[1]||(s[1]=(...s)=>e.showDownButton&&e.showDownButton(...s)),placeholder:"Введите сообщение",class:"sending-messages-form__textaria"},null,544),[[o.nr,a.textUser]]),(0,n._)("button",{onClick:s[2]||(s[2]=(0,o.iM)(((...e)=>i.submit&&i.submit(...e)),["prevent"])),class:"sending-messages-form__button"},"Отправить")],32)}var D=t(355);function z(e){const s=/(?<=^|[^а-я])(([уyu]|[нзnz3][аa]|(хитро|не)?[вvwb][зz3]?[ыьъi]|[сsc][ьъ']|(и|[рpr][аa4])[зсzs]ъ?|([оo0][тбtb6]|[пp][оo0][дd9])[ьъ']?|(.\B)+?[оаеиeo])?-?([еёe][бb6](?!о[рй])|и[пб][ае][тц]).*?|([нn][иеаaie]|([дпdp]|[вv][еe3][рpr][тt])[оo0]|[рpr][аa][зсzc3]|[з3z]?[аa]|с(ме)?|[оo0]([тt]|дно)?|апч)?-?[хxh][уuy]([яйиеёюuie]|ли(?!ган)).*?|([вvw][зы3z]|(три|два|четыре)жды|(н|[сc][уuy][кk])[аa])?-?[бb6][лl]([яy](?!(х|ш[кн]|мб)[ауеыио]).*?|[еэe][дтdt][ь']?)|([рp][аa][сзc3z]|[знzn][аa]|[соsc]|[вv][ыi]?|[пp]([еe][рpr][еe]|[рrp][оиioеe]|[оo0][дd])|и[зс]ъ?|[аоao][тt])?[пpn][иеёieu][зz3][дd9].*?|([зz3][аa])?[пp][иеieu][дd][аоеaoe]?[рrp](ну.*?|[оаoa][мm]|([аa][сcs])?([иiu]([лl][иiu])?[нщктлtlsn]ь?)?|([оo](ч[еиei])?|[аa][сcs])?[кk]([оo]й)?|[юu][гg])[ауеыauyei]?|[мm][аa][нnh][дd]([ауеыayueiи]([лl]([иi][сзc3щ])?[ауеыauyei])?|[оo][йi]|[аоao][вvwb][оo](ш|sh)[ь']?([e]?[кk][ауеayue])?|юк(ов|[ауи])?)|[мm][уuy][дd6]([яyаиоaiuo0].*?|[еe]?[нhn]([ьюия'uiya]|ей))|мля([тд]ь)?|лять|([нз]а|по)х|м[ао]л[ао]фь([яию]|[её]й))(?=($|[^а-я]))/gi;return e?e.replaceAll(s,"сладкий"):""}const C=(0,h.v0)(p);async function O(){return new Promise(((e,s)=>{(0,h.Aj)(C,(s=>{if(s){const t=s;e(t)}else{let s="Anonim";e(s)}}))}))}let T=(0,D.N8)(p),j=(0,D.iH)(T,"/messages"),I=null;async function L(e){if(!e.length)return;let s=(0,D.VF)(j),t={name:I.length?"Anonym":I.email,text:z(e),id:s.key};(0,D.t8)(s,t)}O().then((e=>I=e));var S={name:"SendingMessages",data(){return{textUser:"",key:""}},emits:["messageSent"],methods:{submit(){L(this.textUser.trim()),this.textUser=""}}};const R=(0,b.Z)(S,[["render",U]]);var Z=R;const H={class:"messages-wrapper"},$={class:"messages-container"};function W(e,s,t,o,a,i){const l=(0,n.up)("user-message");return(0,n.wg)(),(0,n.iD)("div",H,[(0,n._)("div",$,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.messagesUsers,(e=>((0,n.wg)(),(0,n.j4)(l,{class:(0,r.C_)({"my-message":e.name===i.user}),key:e.id,id:e.id},{"name-user":(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.name),1)])),"text-message":(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.text),1)])),_:2},1032,["class","id"])))),128))])])}const A={class:"user-message"},V={class:"user-message__header"},B={class:"user-message__name-user"},N={class:"user-message__text"};function E(e,s,t,o,r,a){return(0,n.wg)(),(0,n.iD)("div",A,[(0,n._)("div",V,[(0,n._)("p",B,[(0,n.WI)(e.$slots,"name-user",{},(()=>[(0,n.Uk)(" По каким то причинам имя недоступно... ")]))])]),(0,n._)("p",N,[(0,n.WI)(e.$slots,"text-message",{},(()=>[(0,n.Uk)(" По каким то причинам сообщение недоступно... ")]))])])}var K={emits:["pushMessage"]};const P=(0,b.Z)(K,[["render",E]]);var F=P,X={name:"ShowMessages",components:{UserMessage:F},props:{messagesUsers:Object},computed:{user(){return localStorage.getItem("user")}}};const Y=(0,b.Z)(X,[["render",W]]);var q=Y;let G=(0,D.N8)(p),J=(0,D.iH)(G,"/messages");function Q(e){(0,D.jM)(J,(s=>{let t=s.val();e.value=t}))}var ee={name:"MessageContainer",components:{ShowMessages:q,SendingMessages:Z},setup(){let e=(0,v.iH)(null);return Q(e),{messages:e}}};const se=(0,b.Z)(ee,[["render",k]]);var te=se;const oe={class:"form-container"},ne=(0,n._)("button",{class:"button"},"Войти",-1),re={key:1,class:"form-container__registered-text"};function ae(e,s,t,a,i,l){return(0,n.wg)(),(0,n.iD)("div",oe,[i.login?((0,n.wg)(),(0,n.iD)("p",re,"Вы вошли как "+(0,r.zw)(i.email),1)):((0,n.wg)(),(0,n.iD)("form",{key:0,class:"form-modal",onSubmit:s[2]||(s[2]=(0,o.iM)(((...e)=>l.loginUser&&l.loginUser(...e)),["prevent"]))},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>i.email=e),type:"text",placeholder:"E-mail",class:"form-modal__input"},null,512),[[o.nr,i.email]]),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>i.password=e),type:"password",name:"",placeholder:"Пароль",autocomplete:"current-password",class:"form-modal__input"},null,512),[[o.nr,i.password]]),ne],32))])}const ie=(0,h.v0)(p);function le(e,s){(0,h.e5)(ie,e,s).then((e=>{const s=e.user;console.log(s)})).catch((e=>{const s=e.code,t=e.message;console.log(s),console.log(t)}))}const ce=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;function ue(e){return!ce.test(e)}function de(e){return e.length<6}var me={name:"LoginUser",data(){return{email:"",password:"",errorText:"",login:!1}},methods:{loginUser(){ue(this.email)&&de(this.password)?this.errorText="Некорректный email и пароль":ue(this.email)?this.errorText="Не корректный email":de(this.password)?this.errorText="Не корректный пароль, не менее 6 символов":(le(this.email,this.password),this.login=!0)}}};const ge=(0,b.Z)(me,[["render",ae]]);var pe=ge;const he={class:"modal"};function fe(e,s,t,r,a,i){return(0,n.wg)(),(0,n.iD)("div",{class:"owerlay-modal",onClick:s[1]||(s[1]=(0,o.iM)((s=>e.$emit("closeModal")),["self"]))},[(0,n._)("div",he,[(0,n.WI)(e.$slots,"default"),(0,n._)("button",{class:"button-close-modal",title:"Закрыть",onClick:s[0]||(s[0]=(0,o.iM)((s=>e.$emit("closeModal")),["self"]))},"Close Modal")])])}var we={name:"Modal"};const ve=(0,b.Z)(we,[["render",fe]]);var ye=ve;const be={class:"form-container"},_e={key:0,class:"form-modal__error-text"},Me=(0,n._)("button",{class:"button"},"Зарегестрироватся",-1),xe={key:1,class:"form-container__registered-text"};function ke(e,s,t,a,i,l){return(0,n.wg)(),(0,n.iD)("div",be,[i.registered?((0,n.wg)(),(0,n.iD)("p",xe,"Вы зарегестрировались как "+(0,r.zw)(i.email),1)):((0,n.wg)(),(0,n.iD)("form",{key:0,class:"form-modal",onSubmit:s[2]||(s[2]=(0,o.iM)(((...e)=>l.RegistrationUser&&l.RegistrationUser(...e)),["prevent"]))},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>i.email=e),type:"text",placeholder:"E-mail",class:"form-modal__input"},null,512),[[o.nr,i.email]]),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>i.password=e),type:"password",name:"",placeholder:"Пароль",autocomplete:"current-password",class:"form-modal__input"},null,512),[[o.nr,i.password]]),i.errorText?((0,n.wg)(),(0,n.iD)("p",_e,(0,r.zw)(i.errorText),1)):(0,n.kq)("",!0),Me],32))])}const Ue=(0,D.N8)(p);function De(e,s="nonym"){const t=(0,D.iH)(Ue,"/users/"+e);console.log("ушло в бд",e);let o={name:s,uid:e};(0,D.t8)(t,o)}const ze=(0,h.v0)(p);function Ce(e,s){(0,h.Xb)(ze,e,s).then((e=>{const s=e.user;return De(s.uid,s.email),!1})).catch((e=>{const s=e.code,t=e.message;return console.log(s),console.log(t),!0}))}const Oe=(0,h.v0)(p);function Te(e,s){return(0,h.Xb)(Oe,e,s).then((e=>{e.user;return!1})).catch((e=>{const s=e.code,t=e.message;return console.log(s),console.log(t),!0}))}var je={name:"RegistrationUser",data(){return{email:"",password:"",errorText:"",registered:!1}},methods:{async RegistrationUser(){if(ue(this.email)&&de(this.password))return void(this.errorText="Некорректный email и пароль");if(ue(this.email))return void(this.errorText="Не корректный email");if(de(this.password))return void(this.errorText="Не корректный пароль, не менее 6 символов");let e=await Te(this.email,this.password);e?this.errorText="Такой пользователь уже существует":(Ce(this.email,this.password),this.registered=!0)}}};const Ie=(0,b.Z)(je,[["render",ke]]);var Le=Ie,Se={name:"App",components:{MessageContainer:te,Modal:ye,Header:M,LoginUser:pe,RegistrationUser:Le},data(){return{openModal:!1,modalLogin:!0,name:""}},methods:{showModalLogin(){this.openModal=!0,this.modalLogin=!0},showModalRegistration(){this.openModal=!0,this.modalLogin=!1},closeModal(){this.openModal=!1}}};const Re=(0,b.Z)(Se,[["render",i]]);var Ze=Re;(0,o.ri)(Ze).mount("#app")}},s={};function t(o){var n=s[o];if(void 0!==n)return n.exports;var r=s[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(s,o,n,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],r=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var c=n();void 0!==c&&(s=c)}}return s}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,n,r]}}(),function(){t.d=function(e,s){for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,o){var n,r,a=o[0],i=o[1],l=o[2],c=0;if(a.some((function(s){return 0!==e[s]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(l)var u=l(t)}for(s&&s(o);c<a.length;c++)r=a[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},o=self["webpackChunkchat"]=self["webpackChunkchat"]||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(436)}));o=t.O(o)})();
//# sourceMappingURL=app.5e6ff98b.js.map