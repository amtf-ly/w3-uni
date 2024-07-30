import{o as e,c as t,w as s,d as a,t as n,i as l,a as o,n as i,r,b as u,g as c,e as d,W as f,A as h,C as m,s as p,B as y,D as g,j as _,E as k,G as b,H as S,k as M,l as w,u as v,I,J as j,f as C,p as x,F as L,K as T,L as z,M as F,N as R,h as D,O as N}from"./index-DCzgWlOw.js";import{_ as U}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as $,a as A}from"./uni-list.DbFRQaPt.js";import{s as O,m as q}from"./store.Dg_zzOqN.js";import"./uni-icons.D_S1BNgj.js";function B(e,t=2){for(e+="";e.length<t;)e="0"+e;return e.slice(-t)}const H={yyyy:e=>B(e.year,4),yy:e=>B(e.year),MM:e=>B(e.month),M:e=>e.month,dd:e=>B(e.day),d:e=>e.day,hh:e=>B(e.hour),h:e=>e.hour,mm:e=>B(e.minute),m:e=>e.minute,ss:e=>B(e.second),s:e=>e.second,SSS:e=>B(e.millisecond,3),S:e=>e.millisecond};function E(e){return e instanceof Date?e:"string"==typeof e?e.indexOf("T")>-1?new Date(e):new Date(e.replace(/-/g,"/")):new Date(e)}function G(e,{locale:t="zh",threshold:s=[6e4,36e5],format:a="yyyy/MM/dd hh:mm:ss"}){if("-"===e)return e;if(!e&&0!==e)return"";const n={zh:{year:"年",month:"月",day:"天",hour:"小时",minute:"分钟",second:"秒",ago:"前",later:"后",justNow:"刚刚",soon:"马上",template:"{num}{unit}{suffix}"},en:{year:"year",month:"month",day:"day",hour:"hour",minute:"minute",second:"second",ago:"ago",later:"later",justNow:"just now",soon:"soon",template:"{num} {unit} {suffix}"}},l=n[t]||n.zh;let o,i,r=E(e),u=r.getTime()-Date.now(),c=Math.abs(u);if(c<s[0])return u<0?l.justNow:l.soon;if(c>=s[1])return function(e,t="yyyy/MM/dd hh:mm:ss"){if(!e&&0!==e)return"";const s={year:(e=E(e)).getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()},a=/yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/;let n=!0,l=t;for(;n;)n=!1,l=l.replace(a,(function(e){return n=!0,H[e](s)}));return l}(r,a);let d=l.later;u<0&&(d=l.ago,u=-u);const f=Math.floor(u/1e3),h=Math.floor(f/60),m=Math.floor(h/60),p=Math.floor(m/24),y=Math.floor(p/30),g=Math.floor(y/12);switch(!0){case g>0:o=g,i=l.year;break;case y>0:o=y,i=l.month;break;case p>0:o=p,i=l.day;break;case m>0:o=m,i=l.hour;break;case h>0:o=h,i=l.minute;break;default:o=f,i=l.second}return"en"===t&&(1===o?o="a":i+="s"),l.template.replace(/{\s*num\s*}/g,o+"").replace(/{\s*unit\s*}/g,i).replace(/{\s*suffix\s*}/g,d)}const J=U({name:"uniDateformat",props:{date:{type:[Object,String,Number],default:()=>"-"},locale:{type:String,default:"zh"},threshold:{type:Array,default:()=>[0,0]},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:()=>({refreshMark:0}),computed:{dateShow(){return this.refreshMark,G(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler(){this.setAutoRefresh()},immediate:!0}},methods:{refresh(){this.refreshMark++},setAutoRefresh(){clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((()=>{this.refresh()}),parseInt(this.refreshRate)))}}},[["render",function(o,i,r,u,c,d){const f=l;return e(),t(f,null,{default:s((()=>[a(n(d.dateShow),1)])),_:1})}]]);const K=U({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick(){this.$emit("click")}}},[["render",function(f,h,m,p,y,g){const _=d,k=l;return e(),t(_,{class:"uni-section"},{default:s((()=>[o(_,{class:"uni-section-header",onClick:g.onClick},{default:s((()=>[m.type?(e(),t(_,{key:0,class:i(["uni-section-header__decoration",m.type])},null,8,["class"])):r(f.$slots,"decoration",{key:1},void 0,!0),o(_,{class:"uni-section-header__content"},{default:s((()=>[o(k,{style:u({"font-size":m.titleFontSize,color:m.titleColor}),class:i(["uni-section__content-title",{distraction:!m.subTitle}])},{default:s((()=>[a(n(m.title),1)])),_:1},8,["style","class"]),m.subTitle?(e(),t(k,{key:0,style:u({"font-size":m.subTitleFontSize,color:m.subTitleColor}),class:"uni-section-header__content-sub"},{default:s((()=>[a(n(m.subTitle),1)])),_:1},8,["style"])):c("",!0)])),_:1}),o(_,{class:"uni-section-header__slot-right"},{default:s((()=>[r(f.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),o(_,{class:"uni-section-content",style:u({padding:g._padding})},{default:s((()=>[r(f.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-0a8818d5"]]);f.importObject("a_admin",{customUI:!0});const P=h("user",{state:()=>{f.database().command;const e=m("需要刷新了"),t=p({userInfo:y((()=>O.userInfo)),hasLogin:y((()=>O.hasLogin)),daoqi_date:0,likeNum:0});return g(t,((e,t)=>{}),{immediate:!0}),g(e,((e,t)=>{}),{immediate:!0}),{user:t}}});function W(e,t=!1){const s=y((()=>{var t;return(null==(t=null==e?void 0:e.nickname)?void 0:t.trim())||(null==e?void 0:e.username)||(null==e?void 0:e.mobile)})),a=_("");return g(O,(async(s,n)=>{if(a.value="../../static/images/笑脸h.png",t&&!O.hasLogin)return;const l=await async function(e){var t;const s=null==(t=null==e?void 0:e.avatar_file)?void 0:t.url;if(!s)return null;if(s&&"cloud://"==s.substring(0,8)){return(await f.getTempFileURL({fileList:[s]})).fileList[0].tempFileURL}return s}(e);l&&(a.value=l)}),{immediate:!0}),{"展示用户名":s,"展示用户头像":a}}const Y=U({__name:"user",setup(r){k((async()=>{console.log("onPullDownRefresh"),location.reload()}));const u=f.importObject("a_admin",{customUI:!0}),c=m("ws8");m("需要刷新了");const{user:h,get1:p}=P(),{"展示用户名":y,"展示用户头像":g}=W(h.userInfo,!0);f.database();const _=()=>{if(h.hasLogin)T({url:"/uni_modules/uni-id-pages/pages/userinfo/userinfo"});else{let e=z(),t=e[e.length-1].route;T({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd?uniIdRedirectUrl=/"+t})}},U=()=>{O()||F({title:"是否确认退出?",success:e=>{e.confirm&&q.logout()}})},O=()=>!h.hasLogin&&(R({title:"未登录",icon:"none"}),!0);return b((()=>{})),S((()=>{})),(r,f)=>{const m=D,p=d,k=M(w("uni-dateformat"),J),b=l,S=N,T=M(w("uni-list-item"),$),z=M(w("uni-list"),A),F=M(w("uni-section"),K);return e(),t(p,{class:"user"},{default:s((()=>[o(p,{class:"top"},{default:s((()=>[o(p,{class:"group",onClick:_},{default:s((()=>[o(p,{class:"userInfo"},{default:s((()=>[o(p,{class:"pic"},{default:s((()=>[o(m,{src:v(g),mode:"aspectFill"},null,8,["src"])])),_:1}),v(h).hasLogin?(e(),t(p,{key:0,class:"text"},{default:s((()=>[o(p,{class:"nickname"},{default:s((()=>[a(n(v(y)),1)])),_:1}),o(p,{class:"year"},{default:s((()=>[o(k,{date:v(h).userInfo.register_date,threshold:[3600,3122064e6]},null,8,["date"]),a(" 注册 ")])),_:1})])),_:1})):(e(),t(p,{key:1,class:"text"},{default:s((()=>[o(p,{class:"nickname"},{default:s((()=>[a("点击登录")])),_:1})])),_:1}))])),_:1}),o(p,{class:"more"},{default:s((()=>[o(b,{class:"iconfont icon-a-10-you"})])),_:1})])),_:1}),o(p,{class:"bg"},{default:s((()=>[o(m,{src:v(g),mode:"aspectFill"},null,8,["src"])])),_:1})])),_:1}),o(p,{class:"main"},{default:s((()=>[o(p,{class:"group"},{default:s((()=>[o(z,null,{default:s((()=>[o(T,{title:"body插槽",link:""},{body:s((()=>[a(" 联系客服🙂 "),o(S,{"open-type":"contact",class:"a-fugaitouming"},{default:s((()=>[a("联系客服")])),_:1})])),_:1})])),_:1})])),_:1}),I(o(p,{class:"group"},{default:s((()=>[o(z,null,{default:s((()=>[o(T,{title:"退出登录",link:"",onClick:U})])),_:1})])),_:1},512),[[j,v(h).hasLogin]]),o(p,{class:"group"},{default:s((()=>[o(z,null,{default:s((()=>[o(F,{title:"推送消息👇",type:"line"},{default:s((()=>[v(c).msg.length?(e(!0),C(L,{key:1},x(v(c).msg,((l,c)=>(e(),t(T,{key:l.time,class:"a-bg",title:r.aa,showArrow:"",onClick:e=>async function(e){if(console.log("去充电item: ",e),1!=e.已处理)try{e.天数;let t={user_id:e.user_id,appId:e.appId};const s=await u.update1_nengliang(t);R({title:"充电后台处理完成"}),console.log("充电res: ",s),e.已处理=!0,t.title="充电后台处理完成",u.push_chondianwancheng(t).then((e=>{console.log("催充电res: ",e)}))}catch(t){console.error("发生错误:",t)}else R({title:"已处理",icon:"error"})}(l),clickable:"",note:""},{body:s((()=>[o(b,null,{default:s((()=>[a(n(`${l.username}:${l.title}`),1)])),_:2},1024),o(b,null,{default:s((()=>[a(n(l.appName),1)])),_:2},1024),a(" 日期： "),o(k,{date:l.time,class:i({"已处理":l.已处理})},null,8,["date","class"])])),_:2},1032,["title","onClick"])))),128)):(e(),t(T,{key:0,title:"幸得太平无一事~~"}))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-7b95dca5"]]);export{Y as default};
