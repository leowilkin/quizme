import{d as _,aX as l,o as i,a as d,w as u,b as e,t as n,_ as p,e as h,k as s,aW as m}from"./index-167b7d9a.js";const b={class:"entry"},v={class:"material-symbols-rounded"},k={class:"label"},f=_({__name:"NavLink",props:{icon:{type:String,required:!1},label:{type:String,required:!0},to:{type:String,required:!0}},setup(t){return(a,c)=>{const r=l("RouterLink");return i(),d(r,{to:t.to,class:"link"},{default:u(()=>[e("div",b,[e("span",v,n(t.icon),1),e("span",k,n(t.label),1)])]),_:1},8,["to"])}}});const o=p(f,[["__scopeId","data-v-1f1e0443"]]),y={class:"wrapper"},g={class:"sidebar"},S=e("h1",{class:"logo"},"Qz",-1),x={class:"slot"},L=_({__name:"WithSidebar",setup(t){return(a,c)=>(i(),h("div",y,[e("div",g,[S,s(o,{to:"/",icon:"home",label:"Home"}),s(o,{to:"/quiz",icon:"school",label:"Quiz Me"}),s(o,{to:"/courses",icon:"edit",label:"Courses"}),s(o,{to:"/about",icon:"question_mark",label:"About"})]),e("div",x,[m(a.$slots,"default")])]))}});export{L as _};
