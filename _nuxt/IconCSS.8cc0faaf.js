import{l as _,H as m,k as o,x as d,I as x,J as f}from"./swiper-vue.bfe11543.js";import{u as S}from"./config.2372ed2c.js";import{a as I}from"./entry.4e233eb7.js";const v=_({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){var c;const n=u;m(t=>({"5fa51ebc":p.value}));const e=S();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=o(()=>{var t;return(((t=e==null?void 0:e.nuxtIcon)==null?void 0:t.aliases)||{})[n.name]||n.name}),p=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var s,r,i;if(!n.size&&typeof((s=e.nuxtIcon)==null?void 0:s.size)=="boolean"&&!((r=e.nuxtIcon)!=null&&r.size))return;const t=n.size||((i=e.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(t))===t?`${t}px`:t});return(t,s)=>(d(),x("span",{style:f({width:a.value,height:a.value})},null,4))}});const h=I(v,[["__scopeId","data-v-5ee01813"]]);export{h as default};