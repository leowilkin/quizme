import{d as p,a as h,b as v,w as C,o as i,e as s,n as t,g as d,I as n,f as r,r as m,t as _,F as f,p as k,i as $,_ as b}from"./index-99547e6a.js";import{_ as g}from"./WithSidebar.vue_vue_type_style_index_0_lang-84c19417.js";const x=o=>(k("data-v-9e8ea913"),o=o(),$(),o),I={class:"wrap"},S={class:"dashboard"},w={class:"head"},B=x(()=>s("h1",null,"Courses",-1)),y={class:"actions"},F={class:"courses"},N={class:"course"},q={class:"info"},E={class:"muted"},L={class:"actions"},U=p({__name:"index",setup(o){const a=h();return(c,l)=>(i(),v(g,null,{default:C(()=>[s("div",I,[s("div",S,[s("div",w,[B,s("div",y,[t(n,{icon:"add",label:"Create",type:"action-green",onClick:l[0]||(l[0]=e=>d(a).addCourse({title:"New Course",description:"",questions:[],id:Math.random().toString(36).substring(7)}))}),t(n,{icon:"file_upload",label:"Upload",onClick:d(a).addFromUpload},null,8,["onClick"])])]),s("div",F,[(i(!0),r(f,null,m(d(a).courses,e=>(i(),r("div",N,[s("div",q,[s("h2",null,_(e.title),1),s("p",E,_(e.description),1)]),s("div",L,[t(n,{label:"Edit",icon:"edit",onClick:u=>c.$router.push(`/courses/${e.id}`)},null,8,["onClick"]),t(n,{label:"Learn",icon:"school",onClick:u=>c.$router.push(`/quiz/${e.id}`)},null,8,["onClick"])])]))),256))])])])]),_:1}))}});const D=b(U,[["__scopeId","data-v-9e8ea913"]]);export{D as default};
