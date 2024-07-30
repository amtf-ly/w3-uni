import{W as e,aa as a,M as t,R as i,ab as s,T as r,k as l,l as o,o as n,c,w as d,e as u,a as m,f,d as p,t as y,g as h,F as g,h as v,O as C,i as _}from"./index-DCzgWlOw.js";import{_ as x,a as F}from"./uni-list.DbFRQaPt.js";import{_ as I}from"./uni-easyinput.BDXBu93H.js";import{_ as N}from"./uni-forms-item.BQy5pMue.js";import{_ as k}from"./uni-forms.Dnq2PB2F.js";import{_ as w}from"./uni-id-pages-agreements.CkR5RCJV.js";import{m as j}from"./login-page.mixin.CiTvLnOn.js";import{s as V,m as b}from"./store.Dg_zzOqN.js";import{_ as T}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.D_S1BNgj.js";import"./uni-popup-dialog.3Cd38TVg.js";import"./uni-popup.DyN6wxIx.js";e.importObject("uni-id-co");const A=T({mixins:[j],data:()=>({realName:"",idCard:"",certifyId:"",verifyFail:!1,verifyFailCode:0,verifyFailTitle:"",verifyFailContent:""}),computed:{userInfo:()=>V.userInfo,certifyIdNext(){return Boolean(this.realName)&&Boolean(this.idCard)&&this.needAgreements&&this.agree},isCertify(){return this.userInfo.realNameAuth&&2===this.userInfo.realNameAuth.authStatus},isDev:()=>!1},onLoad(){const e=a("uni-id-pages-temp-frv");e&&(this.realName=e.realName,this.idCard=e.idCard)},methods:{async getCertifyId(){if(this.certifyIdNext)return t({content:"暂不支持实名认证",showCancel:!1})},startFacialRecognitionVerify(){},async getFrvAuthResult(){const a=e.importObject("uni-id-co",{customUI:!0});try{i({title:"验证中...",mask:!1});const e=await a.getFrvAuthResult({certifyId:this.certifyId}),{errCode:l,...o}=e;this.verifyFailContent&&console.log(`[frv-debug] 客户端刷脸失败，由实人认证服务查询具体原因，原因：${this.verifyFailContent}`),t({content:"实名认证成功",showCancel:!1,success:()=>{b.setUserInfo({realNameAuth:o}),this.verifyFail=!1}}),s({key:"uni-id-pages-temp-frv"})}catch(l){this.verifyFail=!0,this.verifyFailTitle=l.errMsg,console.error(JSON.stringify(l))}finally{r()}},retry(){10013!==this.verifyFailCode?this.getCertifyId():this.verifyFail=!1}}},[["render",function(e,a,t,i,s,r){const j=l(o("uni-list-item"),x),V=l(o("uni-list"),F),b=v,T=u,A=C,D=_,M=l(o("uni-easyinput"),I),O=l(o("uni-forms-item"),N),U=l(o("uni-forms"),k),z=l(o("uni-id-pages-agreements"),w);return n(),c(T,null,{default:d((()=>[r.isCertify?(n(),c(V,{key:0},{default:d((()=>[m(j,{class:"item",title:"姓名",rightText:r.userInfo.realNameAuth.realName},null,8,["rightText"]),m(j,{class:"item",title:"身份证号码",rightText:r.userInfo.realNameAuth.identity},null,8,["rightText"])])),_:1})):(n(),c(T,{key:1,class:"uni-content"},{default:d((()=>[s.verifyFail?(n(),f(g,{key:0},[m(T,{class:"face-icon"},{default:d((()=>[m(b,{src:"data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1675667510055'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4003'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M807.936%20106.656h-76a24.32%2024.32%200%200%200-17.92%207.936%2027.744%2027.744%200%200%200-7.424%2019.104c0%206.944%202.464%2013.792%207.424%2019.104a24.32%2024.32%200%200%200%2017.92%207.904h76v81.088c0%206.944%202.432%2013.76%207.424%2019.104a24.32%2024.32%200%200%200%2035.808%200%2027.744%2027.744%200%200%200%207.424-19.104V160.704c0-29.824-22.72-54.048-50.656-54.048zM833.248%20512a25.12%2025.12%200%200%200-17.92%207.392%2025.12%2025.12%200%200%200-7.392%2017.92v76h-76a25.12%2025.12%200%200%200-17.92%207.424c-1.344%201.344-2.08%203.072-3.072%204.704-28.576-27.52-60.704-50.112-96.256-65.152%2072.192-43.136%20117.888-126.08%20103.872-219.296-13.216-87.456-81.056-160.576-167.648-178.656a228.16%20228.16%200%200%200-46.944-4.896%20217.056%20217.056%200%200%200-217.12%20217.12c0%2079.264%2042.976%20147.936%20106.368%20185.824-35.456%2015.04-67.648%2037.632-96.256%2065.152-0.96-1.632-1.696-3.36-3.072-4.704a25.12%2025.12%200%200%200-17.92-7.424H200v-76a25.12%2025.12%200%200%200-7.424-17.92%2025.12%2025.12%200%200%200-17.92-7.424%2025.12%2025.12%200%200%200-17.92%207.424%2025.12%2025.12%200%200%200-7.392%2017.92v76c0%2027.936%2022.72%2050.656%2050.656%2050.656H262.4c-42.336%2054.816-71.712%20123.488-80.96%20200.192-3.424%2028.224%2019.104%2053.12%2047.488%2053.12h550.048c28.416%200%2050.848-24.96%2047.488-53.12-9.216-76.8-38.624-145.472-80.96-200.288h62.4c27.968%200%2050.688-22.72%2050.688-50.656V537.28a25.12%2025.12%200%200%200-7.424-17.92%2025.12%2025.12%200%200%200-17.92-7.392zM174.72%20268.8a24.32%2024.32%200%200%200%2017.888-7.904%2027.744%2027.744%200%200%200%207.424-19.104V160.704h76a24.32%2024.32%200%200%200%2017.92-7.904%2027.744%2027.744%200%200%200%207.392-19.104%2027.744%2027.744%200%200%200-7.424-19.104%2024.32%2024.32%200%200%200-17.92-7.936H200c-27.968%200-50.656%2024.224-50.656%2054.08v81.056c0%206.944%202.432%2013.76%207.392%2019.104a24.32%2024.32%200%200%200%2017.92%207.904z'%20fill='%2372a7ff'%20p-id='4004'%3e%3c/path%3e%3c/svg%3e",class:"face-icon-image"})])),_:1}),m(T,{class:"error-title"},{default:d((()=>[p(y(s.verifyFailTitle),1)])),_:1}),m(T,{class:"error-description"},{default:d((()=>[p(y(s.verifyFailContent),1)])),_:1}),10013!==s.verifyFailCode?(n(),c(A,{key:0,type:"primary",onClick:r.retry},{default:d((()=>[p("重新开始验证")])),_:1},8,["onClick"])):(n(),c(A,{key:1,type:"primary",onClick:r.retry},{default:d((()=>[p("返回")])),_:1},8,["onClick"])),r.isDev?(n(),c(T,{key:2,class:"dev-tip"},{default:d((()=>[p("请在控制台查看详细错误（此提示仅在开发环境展示）")])),_:1})):h("",!0)],64)):(n(),f(g,{key:1},[m(D,{class:"title"},{default:d((()=>[p("实名认证")])),_:1}),m(U,null,{default:d((()=>[m(O,{name:"realName"},{default:d((()=>[m(M,{placeholder:"姓名",class:"input-box",modelValue:s.realName,"onUpdate:modelValue":a[0]||(a[0]=e=>s.realName=e),clearable:!1},null,8,["modelValue"])])),_:1}),m(O,{name:"idCard"},{default:d((()=>[m(M,{placeholder:"身份证号码",class:"input-box",modelValue:s.idCard,"onUpdate:modelValue":a[1]||(a[1]=e=>s.idCard=e),clearable:!1},null,8,["modelValue"])])),_:1})])),_:1}),m(z,{scope:"realNameVerify",ref:"agreements",style:{"margin-bottom":"20px"}},null,512),m(A,{type:"primary",disabled:!r.certifyIdNext,onClick:r.getCertifyId},{default:d((()=>[p("确定")])),_:1},8,["disabled","onClick"])],64))])),_:1}))])),_:1})}],["__scopeId","data-v-3c012959"]]);export{A as default};
