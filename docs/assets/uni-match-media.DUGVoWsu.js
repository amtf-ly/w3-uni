import{a9 as t,I as e,J as i,o as a,c as h,w as n,r as s,e as r}from"./index-DCzgWlOw.js";import{_ as d}from"./_plugin-vue_export-helper.BCo6x5W8.js";let m;const o=d({name:"UniMatchMedia",props:{width:{type:[Number,String],default:""},minWidth:{type:[Number,String],default:""},maxWidth:{type:[Number,String],default:""},height:{type:[Number,String],default:""},minHeight:{type:[Number,String],default:""},maxHeight:{type:[Number,String],default:""},orientation:{type:String,default:""}},data:()=>({matches:!0}),mounted(){m=t(this),m.observe({width:this.width,maxWidth:this.maxWidth,minWidth:this.minWidth,height:this.height,minHeight:this.minHeight,maxHeight:this.maxHeight,orientation:this.orientation},(t=>{this.matches=t}))},destroyed(){m.disconnect()}},[["render",function(t,d,m,o,u,g){const l=r;return e((a(),h(l,null,{default:n((()=>[s(t.$slots,"default",{},void 0,!0)])),_:3},512)),[[i,u.matches]])}],["__scopeId","data-v-be1092f0"]]);export{o as _};
