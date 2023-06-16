import{_ as P,c as W,a as G}from"./index.vue_vue_type_script_setup_true_lang-056d3256.js";import{d as H,a as J,j as _,k as R,l as K,m as U,c as h,f as r,F as X,e as t,t as k,g as A,b as E,n as m,I as p,h as Y,o as a,p as Z,i as ee,_ as te}from"./index-99547e6a.js";import{u as se}from"./stats-6ffcf633.js";import"./ExpandedDropdown-9b45fbf1.js";const d=f=>(Z("data-v-94ea44cb"),f=f(),ee(),f),ne={class:"quiz"},oe={class:"header"},le={class:"flex gap-2"},ue=["max","value"],ae={class:"body"},ie={key:0,class:"correct-missed"},re=d(()=>t("h1",null," Let's correct the exercises you got wrong last time! ",-1)),ce=[re],de={key:1,class:"end"},ve=d(()=>t("h1",null,"Well done!",-1)),he={class:"review"},_e={class:"score"},pe=d(()=>t("span",{class:"label"},"SCORE",-1)),me={class:"value"},fe={class:"time"},ye=d(()=>t("span",{class:"label"},"TIME",-1)),ge={class:"value"},we={class:"footer"},ke={key:0,class:"check"},be={key:1,class:"check"},qe={key:2,class:"checking"},xe={key:0,class:"correct"},Ce=d(()=>t("div",{class:"continue"},[t("div",{class:"icon"},[t("span",{class:"material-symbols-rounded"},"check")])],-1)),Te=d(()=>t("div",{class:"text"},[t("h2",null,"Correct!")],-1)),Se={class:"continue"},Ie={key:1,class:"wrong"},Me=d(()=>t("div",{class:"continue"},[t("div",{class:"icon"},[t("span",{class:"material-symbols-rounded"},"close")])],-1)),$e={class:"text"},Re=d(()=>t("h2",null,"Correct solution:",-1)),Ae={class:"continue"},Ee=H({__name:"index",setup(f){const y=J(),g=se(),b=_(R().params.id);K(()=>{const s=R().params.id;b.value=s,u.value=0});const c=_({correct:[],wrong:[],startTime:new Date,endTime:null}),l=_(y.getQuiz(b.value)),j=l.value.questions.length,q=U(),u=_(0),n=h(()=>l.value.questions[u.value]),T=h(()=>{var s;const e=n.value;if(!e)return!1;if(e.type==="flashcard")return!0;if(e.type=="matching"){const o=e.answer||{},i=e.solution||{};return Object.keys(i).every($=>o[$]===i[$])}return((s=l.value.questions[u.value])==null?void 0:s.answer)!=null}),B=h(()=>{var e;return((e=l.value.questions[u.value])==null?void 0:e.hint)!=null}),Q=()=>{alert(l.value.questions[u.value].hint)},v=_(!1),S=()=>{if(["flashcard","matching"].includes(n.value.type))return w(),!0;if(n.value.type=="multiple-answer"){const e=n.value.solution||[],s=n.value.answer||[];return e.every(o=>s.includes(o))}if(n.value.type=="ordering"){const e=n.value.solution||[],s=n.value.answer||[];return e.every((o,i)=>o===s[i])}return n.value.type==="text-answer"?W(n.value):n.value.type==="number-answer"?G(n.value):(console.log(n.value.answer),n.value.answer===L.value)},z=h(()=>{var e;return["matching","flashcard"].includes((e=n.value)==null?void 0:e.type)?"Continue":"Check"}),L=h(()=>n.value.solution),N=h(()=>{var s,o;const e=n.value;if(e.type==="multiple-choice")return e.options[e.solution];if(e.type==="multiple-answer")return e.solution.map(i=>e.options[i]).join(", ");if(e.type==="true-false")return e.solution?"True":"False";if(e.type==="text-answer")return e.solution?e.solution:e.solutionRegex?`Matches ${e.solutionRegex}`:(s=e.solutionAny)!=null&&s.length?`Matches any of ${e.solutionAny.join(", ")}`:(o=e.solutionAll)!=null&&o.length?`Matches all of ${e.solutionAll.join(", ")}`:"Any";if(e.type==="number-answer")return e.min!=null&&e.max!=null?"Between "+e.min+" and "+e.max:`${e.solution} (+/- ${e.delta})`;if(e.type==="ordering")return e.solution.join(", ")}),w=()=>{v.value=!1,u.value++,D()},x=()=>u.value===l.value.questions.length,D=()=>{x()&&(c.value.endTime=new Date,g.resetStreak(),g.addRun(c.value))},F=()=>{if(u.value===0){q.push("/");return}confirm("Are you sure you want to quit?")&&q.push("/")},I=()=>{v.value=!0;const e=n.value.id,s=y.getCourse(b.value),o=n.value;if(S()){c.value.correct.push(e),y.onCorrectQuestion(s,o),g.addToStreak();return}c.value.wrong.push(e),y.onIncorrectQuestion(s,o),g.resetStreak(),l.value.questions.filter(i=>i.id===e).length===1&&(l.value.questions.push({...o}),delete l.value.questions[l.value.questions.length-1].answer)},V=h(()=>{if(c.value.endTime==null)return 0;const e=c.value.endTime.getTime()-c.value.startTime.getTime(),s=Math.floor(e/1e3),o=Math.floor(s/60),i=(s-o*60).toString().padStart(2,"0");return`${o}:${i}`});document.addEventListener("keydown",e=>{if(e.key==="Enter"){if(v.value){w();return}if(!T.value)return;I()}});let C=_(!1),M=null;const O=()=>M?!0:C.value?!1:u.value>=j?(M=window.setTimeout(()=>{C.value=!0},3e3),!0):!1;return(e,s)=>(a(),r("div",ne,[x()?(a(),r("div",de,[ve,t("div",he,[t("div",_e,[pe,t("span",me,k(Math.round(c.value.correct.length/l.value.questions.length*100))+" % ",1)]),t("div",fe,[ye,t("span",ge,k(V.value),1)])])])):(a(),r(X,{key:0},[t("div",oe,[t("h1",null,k(l.value.title),1),t("div",le,[t("span",{onClick:F,class:"material-symbols-rounded muted cursor-pointer"},"close"),t("progress",{max:l.value.questions.length,value:u.value+(v.value?1:0)},null,8,ue)])]),t("div",ae,[O()&&!A(C)?(a(),r("div",ie,ce)):(a(),E(P,{key:1,question:l.value.questions[u.value],disabled:v.value,"show-correction":v.value},null,8,["question","disabled","show-correction"]))])],64)),t("div",we,[x()?(a(),r("div",ke,[m(p,{class:"left",label:"Review Lesson",type:"minimal-grey"}),m(p,{class:"right",label:"Continue",type:"submit",onClick:s[0]||(s[0]=o=>A(q).push("/"))})])):v.value?(a(),r("div",qe,[S()?(a(),r("div",xe,[Ce,Te,t("div",Se,[m(p,{label:"Continue",type:"submit",onClick:w})])])):(a(),r("div",Ie,[Me,t("div",$e,[Re,t("p",null,k(N.value),1)]),t("div",Ae,[m(p,{label:"Continue",type:"action-red",onClick:w})])]))])):(a(),r("div",be,[B.value?(a(),E(p,{key:0,class:"left",icon:"lightbulb",label:"Show Tip",type:"minimal-blue",onClick:Q})):Y("",!0),m(p,{class:"right",label:z.value,type:"submit",disabled:!T.value,onClick:I},null,8,["label","disabled"])]))])]))}});const Le=te(Ee,[["__scopeId","data-v-94ea44cb"]]);export{Le as default};
