import{m as d,i as S,n as f,c as r}from"./index-167b7d9a.js";const n="quizme.stats",h=d("stats",()=>{const o=JSON.parse(localStorage.getItem(n)||"{}"),s=S(o);(()=>{s.value.start&&new Date(s.value.start).getDate()===new Date().getDate()||(s.value={start:JSON.stringify(new Date),streaks:[],runs:[]})})(),f(s,t=>{localStorage.setItem(n,JSON.stringify(t))},{deep:!0});const u=r(()=>s.value.runs.reduce((t,e)=>{if(!e.endTime)return t;typeof e.endTime=="string"&&(e.endTime=new Date(e.endTime)),typeof e.startTime=="string"&&(e.startTime=new Date(e.startTime));const g=e.endTime.getTime()-e.startTime.getTime();return t+g},0)),i=r(()=>s.value.runs.reduce((t,e)=>t+e.correct.length,0)),c=(t=!0)=>{const e=s.value.streaks;if(!t){a();return}e.length===0&&e.push(0),e[e.length-1]+=1,console.log("current streak",e[e.length-1])},a=()=>{const t=s.value.streaks;console.log("streak ended!",t[t.length-1]),t.push(0)},l=t=>{s.value.runs.push(t)},m=r(()=>Math.max(...s.value.streaks));return{stats:s,timeSpent:u,correctQuestions:i,addToStreak:c,resetStreak:a,addRun:l,bestStreak:m,streaksOver:t=>s.value.streaks.filter(e=>e>=t).length}});export{h as u};
