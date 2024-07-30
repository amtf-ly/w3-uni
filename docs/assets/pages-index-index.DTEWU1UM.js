import{o as t,c as e,w as i,a,n as s,b as l,d as n,t as r,i as o,e as d,m as u,f as c,r as f,g as p,h,j as _,k as y,l as g,p as k,u as m,F as S}from"./index-DCzgWlOw.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as b,a as w}from"./uni-list.DbFRQaPt.js";import{a as v}from"./a4_store.DQTtG2ES.js";import"./uni-icons.D_S1BNgj.js";const C=x({name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:()=>({}),computed:{textAlign(){let t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end"}return t}},watch:{title(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat(){""===this.stat&&(this.isStat=!1);let t="boolean"==typeof this.stat&&this.stat||"string"==typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}},[["render",function(u,c,f,p,h,_){const y=o,g=d;return t(),e(g,{class:"uni-title__box",style:l({"align-items":_.textAlign})},{default:i((()=>[a(y,{class:s(["uni-title__base",["uni-"+f.type]]),style:l({color:f.color})},{default:i((()=>[n(r(f.title),1)])),_:1},8,["class","style"])])),_:1},8,["style"])}],["__scopeId","data-v-7e58812f"]]);const U=x({name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created(){this._isH5=null},methods:{isMail(){return this.href.startsWith("mailto:")},isTel(){return this.href.startsWith("tel:")},openURL(){window.open(this.href)},makePhoneCall(t){u({phoneNumber:t})}}},[["render",function(a,d,u,p,h,_){const y=o;return _.isShowA?(t(),c("a",{key:0,class:s(["uni-link",{"uni-link--withline":!0===u.showUnderLine||"true"===u.showUnderLine}]),href:u.href,style:l({color:u.color,fontSize:u.fontSize+"px"}),download:u.download},[f(a.$slots,"default",{},(()=>[n(r(u.text),1)]),!0)],14,["href","download"])):(t(),e(y,{key:1,class:s(["uni-link",{"uni-link--withline":!0===u.showUnderLine||"true"===u.showUnderLine}]),style:l({color:u.color,fontSize:u.fontSize+"px"}),onClick:_.openURL},{default:i((()=>[f(a.$slots,"default",{},(()=>[n(r(u.text),1)]),!0)])),_:3},8,["class","style","onClick"]))}],["__scopeId","data-v-44511933"]]);const L=x({name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick(t){this.$emit("click",t)}}},[["render",function(u,c,_,y,g,k){const m=h,S=d,x=o;return t(),e(S,{class:s(["uni-card",{"uni-card--full":_.isFull,"uni-card--shadow":_.isShadow,"uni-card--border":_.border}]),style:l({margin:_.isFull?0:_.margin,padding:_.spacing,"box-shadow":_.isShadow?_.shadow:""})},{default:i((()=>[f(u.$slots,"cover",{},(()=>[_.cover?(t(),e(S,{key:0,class:"uni-card__cover"},{default:i((()=>[a(m,{class:"uni-card__cover-image",mode:"widthFix",onClick:c[0]||(c[0]=t=>k.onClick("cover")),src:_.cover},null,8,["src"])])),_:1})):p("",!0)]),!0),f(u.$slots,"title",{},(()=>[_.title||_.extra?(t(),e(S,{key:0,class:"uni-card__header"},{default:i((()=>[a(S,{class:"uni-card__header-box",onClick:c[1]||(c[1]=t=>k.onClick("title"))},{default:i((()=>[_.thumbnail?(t(),e(S,{key:0,class:"uni-card__header-avatar"},{default:i((()=>[a(m,{class:"uni-card__header-avatar-image",src:_.thumbnail,mode:"aspectFit"},null,8,["src"])])),_:1})):p("",!0),a(S,{class:"uni-card__header-content"},{default:i((()=>[a(x,{class:"uni-card__header-content-title uni-ellipsis"},{default:i((()=>[n(r(_.title),1)])),_:1}),_.title&&_.subTitle?(t(),e(x,{key:0,class:"uni-card__header-content-subtitle uni-ellipsis"},{default:i((()=>[n(r(_.subTitle),1)])),_:1})):p("",!0)])),_:1})])),_:1}),a(S,{class:"uni-card__header-extra",onClick:c[2]||(c[2]=t=>k.onClick("extra"))},{default:i((()=>[a(x,{class:"uni-card__header-extra-text"},{default:i((()=>[n(r(_.extra),1)])),_:1})])),_:1})])),_:1})):p("",!0)]),!0),a(S,{class:"uni-card__content",style:l({padding:_.padding}),onClick:c[3]||(c[3]=t=>k.onClick("content"))},{default:i((()=>[f(u.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),a(S,{class:"uni-card__actions",onClick:c[4]||(c[4]=t=>k.onClick("actions"))},{default:i((()=>[f(u.$slots,"actions",{},void 0,!0)])),_:3})])),_:3},8,["class","style"])}],["__scopeId","data-v-b4135a35"]]),j=x({__name:"index",setup(s){_(0);const{a4:l}=v();return(s,o)=>{const u=y(g("uni-title"),C),f=d,h=y(g("uni-link"),U),_=y(g("uni-list-item"),b),x=y(g("uni-list"),w),v=y(g("uni-card"),L);return t(),e(f,{class:"content a-pa-md"},{default:i((()=>[a(u,{type:"h1",title:"大驾光临，蓬荜生辉 ✨",color:"blue",align:"center"}),a(v,{class:"置顶栏"},{default:i((()=>[a(x,null,{default:i((()=>[(t(!0),c(S,null,k(m(l).置顶,(s=>(t(),e(_,{title:"body插槽",key:s._id},{body:i((()=>[a(f,{class:"row justify-between",style:{flex:"1"}},{default:i((()=>[a(f,{class:""},{default:i((()=>[n(r(s.biaoti),1)])),_:2},1024),a(f,{class:""},{default:i((()=>[n("🚀")])),_:1}),"link"==s.type?(t(),e(h,{key:0,class:"a-fugaitouming",href:s.link,text:s.biaoti,color:"blue","font-size":"16",showUnderLine:"false"},null,8,["href","text"])):p("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),a(v,{title:"最新消息🔔"},{default:i((()=>[m(l).最新消息.length?(t(!0),c(S,{key:1},k(m(l).最新消息,(a=>(t(),e(_,{title:"body插槽",link:"",key:a._id},{body:i((()=>[n(r(a.biaoti)+" ",1),"link"==a.type?(t(),e(h,{key:0,class:"a-fugaitouming",href:a.link,text:a.biaoti,color:"blue","font-size":"16",showUnderLine:"false"},null,8,["href","text"])):p("",!0)])),_:2},1024)))),128)):(t(),e(_,{key:0,title:"幸得太平无一事~~"}))])),_:1})])),_:1})}}},[["__scopeId","data-v-dad7a2eb"]]);export{j as default};
