import{u as m}from"./asyncData.Dr7YED5x.js";import{L as c,H as p,d as i,ac as u,r as l,M as e,k as d}from"./entry.eSWIERFW.js";import f from"./Ellipsis._u01u885.js";import y from"./ComponentPlaygroundData.GA7ZkQlp.js";import"./TabsHeader.Nwbi6Hp7.js";import"./ComponentPlaygroundProps.0r4TBGdU.js";import"./ProseH4.7cOTTKKU.js";import"./ProseCodeInline.rN06is0K.js";import"./Badge.9gDTiVkf.js";import"./MDCSlot.txHc-l1E.js";import"./slot.hPjUD3PD.js";import"./ProseP.My2K8avI.js";import"./index.QSaF8IF9.js";import"./ComponentPlaygroundSlots.vue.QXGPaUIj.js";import"./ComponentPlaygroundTokens.vue.VAwzNIfY.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=d(h,[["__scopeId","data-v-8134fc35"]]);export{E as default};
