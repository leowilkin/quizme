if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>i(s,r),d={module:{uri:r},exports:u,require:t};e[r]=Promise.all(n.map((s=>d[s]||t(s)))).then((s=>(l(...s),u)))}}define(["./workbox-9517df1b"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/ExpandedDropdown-a222e5c5.js",revision:null},{url:"assets/ExpandedDropdown-e9e66329.css",revision:null},{url:"assets/index-0118c5b1.js",revision:null},{url:"assets/index-15b8f9a6.js",revision:null},{url:"assets/index-3116d0a1.css",revision:null},{url:"assets/index-4a2b8d75.js",revision:null},{url:"assets/index-62e21298.css",revision:null},{url:"assets/index-65a4c047.css",revision:null},{url:"assets/index-759ce9fe.js",revision:null},{url:"assets/index-7987b7e0.css",revision:null},{url:"assets/index-8ffc6307.css",revision:null},{url:"assets/index-9ad04d81.js",revision:null},{url:"assets/index-aee03c43.js",revision:null},{url:"assets/index-b00d2720.css",revision:null},{url:"assets/index-c0f3b1d9.css",revision:null},{url:"assets/index-c289071c.js",revision:null},{url:"assets/index-cd54a012.css",revision:null},{url:"assets/index.vue_vue_type_script_setup_true_lang-de5b68af.js",revision:null},{url:"assets/Redirect-e5b77027.js",revision:null},{url:"assets/stats-2ab92f12.js",revision:null},{url:"assets/WithSidebar-df9ec44c.css",revision:null},{url:"assets/WithSidebar.vue_vue_type_style_index_0_lang-e43d43f7.js",revision:null},{url:"index.html",revision:"fe91b6ee95e0d50caf7b99a8584f697a"},{url:"registerSW.js",revision:"3832d3938e3095f54d74d43c76d9a5c1"},{url:"manifest.webmanifest",revision:"5b26d2dac2a7f5170ad8d30e1a72d59a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
