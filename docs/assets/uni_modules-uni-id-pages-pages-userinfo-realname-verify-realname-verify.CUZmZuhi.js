import{a9 as e,M as a,R as t,aa as i,T as s,k as r,l,c as o,w as n,e as c,o as d,a as u,f as m,d as f,t as p,g as y,F as h,h as g,O as v,i as C}from"./index-CIWIA-pi.js";import{V as _}from"./uni-cloud.es.B_W3E-Ew.js";import{_ as x,a as F}from"./uni-list.BIF8ocEi.js";import{_ as I}from"./uni-easyinput.CJt8y4HP.js";import{_ as N}from"./uni-forms-item.DnUp95-v.js";import{_ as k}from"./uni-forms.M1boJhv0.js";import{_ as w}from"./uni-id-pages-agreements.xOL7IrPN.js";import{m as j}from"./login-page.mixin.Cwl58H02.js";import{s as V,m as T}from"./store.CmmNAAzQ.js";import{_ as b}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.FDEwJa58.js";import"./uni-popup-dialog.etP6FnJ2.js";import"./uni-popup.34yZ4x7L.js";_.importObject("uni-id-co");const A=b({mixins:[j],data:()=>({realName:"",idCard:"",certifyId:"",verifyFail:!1,verifyFailCode:0,verifyFailTitle:"",verifyFailContent:""}),computed:{userInfo:()=>V.userInfo,certifyIdNext(){return Boolean(this.realName)&&Boolean(this.idCard)&&this.needAgreements&&this.agree},isCertify(){return this.userInfo.realNameAuth&&2===this.userInfo.realNameAuth.authStatus},isDev:()=>!1},onLoad(){const a=e("uni-id-pages-temp-frv");a&&(this.realName=a.realName,this.idCard=a.idCard)},methods:{async getCertifyId(){if(this.certifyIdNext)return a({content:"暂不支持实名认证",showCancel:!1})},startFacialRecognitionVerify(){},async getFrvAuthResult(){const e=_.importObject("uni-id-co",{customUI:!0});try{t({title:"验证中...",mask:!1});const r=await e.getFrvAuthResult({certifyId:this.certifyId}),{errCode:l,...o}=r;this.verifyFailContent&&console.log(`[frv-debug] 客户端刷脸失败，由实人认证服务查询具体原因，原因：${this.verifyFailContent}`),a({content:"实名认证成功",showCancel:!1,success:()=>{T.setUserInfo({realNameAuth:o}),this.verifyFail=!1}}),i({key:"uni-id-pages-temp-frv"})}catch(r){this.verifyFail=!0,this.verifyFailTitle=r.errMsg,console.error(JSON.stringify(r))}finally{s()}},retry(){10013!==this.verifyFailCode?this.getCertifyId():this.verifyFail=!1}}},[["render",function(e,a,t,i,s,_){const j=r(l("uni-list-item"),x),V=r(l("uni-list"),F),T=g,b=c,A=v,D=C,B=r(l("uni-easyinput"),I),M=r(l("uni-forms-item"),N),O=r(l("uni-forms"),k),U=r(l("uni-id-pages-agreements"),w);return d(),o(b,null,{default:n((()=>[_.isCertify?(d(),o(V,{key:0},{default:n((()=>[u(j,{class:"item",title:"姓名",rightText:_.userInfo.realNameAuth.realName},null,8,["rightText"]),u(j,{class:"item",title:"身份证号码",rightText:_.userInfo.realNameAuth.identity},null,8,["rightText"])])),_:1})):(d(),o(b,{key:1,class:"uni-content"},{default:n((()=>[s.verifyFail?(d(),m(h,{key:0},[u(b,{class:"face-icon"},{default:n((()=>[u(T,{src:"data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1675667510055'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4003'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M807.936%20106.656h-76a24.32%2024.32%200%200%200-17.92%207.936%2027.744%2027.744%200%200%200-7.424%2019.104c0%206.944%202.464%2013.792%207.424%2019.104a24.32%2024.32%200%200%200%2017.92%207.904h76v81.088c0%206.944%202.432%2013.76%207.424%2019.104a24.32%2024.32%200%200%200%2035.808%200%2027.744%2027.744%200%200%200%207.424-19.104V160.704c0-29.824-22.72-54.048-50.656-54.048zM833.248%20512a25.12%2025.12%200%200%200-17.92%207.392%2025.12%2025.12%200%200%200-7.392%2017.92v76h-76a25.12%2025.12%200%200%200-17.92%207.424c-1.344%201.344-2.08%203.072-3.072%204.704-28.576-27.52-60.704-50.112-96.256-65.152%2072.192-43.136%20117.888-126.08%20103.872-219.296-13.216-87.456-81.056-160.576-167.648-178.656a228.16%20228.16%200%200%200-46.944-4.896%20217.056%20217.056%200%200%200-217.12%20217.12c0%2079.264%2042.976%20147.936%20106.368%20185.824-35.456%2015.04-67.648%2037.632-96.256%2065.152-0.96-1.632-1.696-3.36-3.072-4.704a25.12%2025.12%200%200%200-17.92-7.424H200v-76a25.12%2025.12%200%200%200-7.424-17.92%2025.12%2025.12%200%200%200-17.92-7.424%2025.12%2025.12%200%200%200-17.92%207.424%2025.12%2025.12%200%200%200-7.392%2017.92v76c0%2027.936%2022.72%2050.656%2050.656%2050.656H262.4c-42.336%2054.816-71.712%20123.488-80.96%20200.192-3.424%2028.224%2019.104%2053.12%2047.488%2053.12h550.048c28.416%200%2050.848-24.96%2047.488-53.12-9.216-76.8-38.624-145.472-80.96-200.288h62.4c27.968%200%2050.688-22.72%2050.688-50.656V537.28a25.12%2025.12%200%200%200-7.424-17.92%2025.12%2025.12%200%200%200-17.92-7.392zM174.72%20268.8a24.32%2024.32%200%200%200%2017.888-7.904%2027.744%2027.744%200%200%200%207.424-19.104V160.704h76a24.32%2024.32%200%200%200%2017.92-7.904%2027.744%2027.744%200%200%200%207.392-19.104%2027.744%2027.744%200%200%200-7.424-19.104%2024.32%2024.32%200%200%200-17.92-7.936H200c-27.968%200-50.656%2024.224-50.656%2054.08v81.056c0%206.944%202.432%2013.76%207.392%2019.104a24.32%2024.32%200%200%200%2017.92%207.904z'%20fill='%2372a7ff'%20p-id='4004'%3e%3c/path%3e%3c/svg%3e",class:"face-icon-image"})])),_:1}),u(b,{class:"error-title"},{default:n((()=>[f(p(s.verifyFailTitle),1)])),_:1}),u(b,{class:"error-description"},{default:n((()=>[f(p(s.verifyFailContent),1)])),_:1}),10013!==s.verifyFailCode?(d(),o(A,{key:0,type:"primary",onClick:_.retry},{default:n((()=>[f("重新开始验证")])),_:1},8,["onClick"])):(d(),o(A,{key:1,type:"primary",onClick:_.retry},{default:n((()=>[f("返回")])),_:1},8,["onClick"])),_.isDev?(d(),o(b,{key:2,class:"dev-tip"},{default:n((()=>[f("请在控制台查看详细错误（此提示仅在开发环境展示）")])),_:1})):y("",!0)],64)):(d(),m(h,{key:1},[u(D,{class:"title"},{default:n((()=>[f("实名认证")])),_:1}),u(O,null,{default:n((()=>[u(M,{name:"realName"},{default:n((()=>[u(B,{placeholder:"姓名",class:"input-box",modelValue:s.realName,"onUpdate:modelValue":a[0]||(a[0]=e=>s.realName=e),clearable:!1},null,8,["modelValue"])])),_:1}),u(M,{name:"idCard"},{default:n((()=>[u(B,{placeholder:"身份证号码",class:"input-box",modelValue:s.idCard,"onUpdate:modelValue":a[1]||(a[1]=e=>s.idCard=e),clearable:!1},null,8,["modelValue"])])),_:1})])),_:1}),u(U,{scope:"realNameVerify",ref:"agreements",style:{"margin-bottom":"20px"}},null,512),u(A,{type:"primary",disabled:!_.certifyIdNext,onClick:_.getCertifyId},{default:n((()=>[f("确定")])),_:1},8,["disabled","onClick"])],64))])),_:1}))])),_:1})}],["__scopeId","data-v-3c012959"]]);export{A as default};
