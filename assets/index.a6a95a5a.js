import"src/index.css";import{j as c,r as u,R as h,a as m,b as g}from"./vendor.9aefbd33.js";const p=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}};p();var b="/assets/Logo.a5daf0e0.webp";const e=c.exports.jsx,o=c.exports.jsxs,f=c.exports.Fragment;function s(l){return o("div",{className:"col-span-2 grid grid-cols-3",children:[e("img",{src:l.img,alt:"logo",className:"w-3/4 rounded-full border-solid border-black border-4"}),o("div",{className:"top-0 bottom-0 left-0 right-0 m-auto cols-2 w-full",children:[e("h1",{className:"text-center text-xl ",children:e("a",{href:l.href,className:"text-white",target:"_blank",children:l.name})}),e("h1",{className:"text-center text-xs text-green-500 ",children:l.title})]})]})}function x(){const[l,n]=u.exports.useState(!1);return o(f,{children:[e(h,{isOpen:l,contentLabel:"Minimal Modal Example",ariaHideApp:!1,style:{content:{background:"#0b0b0b",border:"none",borderRadius:"15px",boxShadow:"0px 0px 10px #000"}},overlayClassName:"background-none centered w-1/3 h-4/5 border-none",className:"",children:o("div",{className:"centered text-center",children:[e("h1",{className:"text-5xl pb-5 text-green-600 font-bold",children:"Privacy Policy"}),e("h2",{className:"text-2xl pb-5 text-green-500 font-bold",children:"What type of data is collected?"}),e("p",{className:"w-3/4 left-0 right-0 m-auto pb-5 text-green-300",children:"Identifiers (IDs) for various items are collected to monitor usage of the bot as well as supplement some features. This data is only stored as long as is necessary."}),e("h2",{className:"text-2xl pb-5 text-green-500 font-bold",children:"Selling Your Data"}),e("p",{className:"w-3/4 left-0 right-0 m-auto pb-5 text-green-300",children:"The only way that your data leaves our hands willingly is if it is properly subpoenaed from a legal entity that holds proper jurisdiction over our conduct."}),e("button",{className:"bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full",onClick:()=>n(!1),children:"Close"})]})}),o("div",{className:"centered grid grid-cols-5 gap-10",style:{background:"#0b0b0b",padding:"15px",borderRadius:"15px"},children:[e("img",{src:b,alt:"logo",className:"col-span-2 rounded-3xl border-solid border-black border-4 align-middle top-0 bottom-0 m-auto",style:{display:"inline !important",verticalAlign:"middle"}}),o("div",{className:"col-span-3 w-full text-white ",children:[e("h1",{className:"w-full text-center text-5xl",children:"ObamaBot"}),e("p",{className:"w-full text-center",children:"your average gen-purpose discord bot."}),o("div",{className:"grid grid-cols-3 gap-10 py-5",children:[e("button",{className:"col-span-1 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full",onClick:a=>window.location.assign("https://top.gg/bot/444463875908304901/invite/"),children:"Add to server"}),e("button",{className:"col-span-1 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full",children:"Commands"}),e("button",{className:"col-span-1 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full",onClick:a=>window.location.assign("https://discord.gg/ZU8zFx8"),children:"Support Server"})]}),e("h1",{className:"w-full text-center text-3xl",children:" Developers"}),o("div",{className:"grid grid-cols-4 gap-10 py-5",children:[e(s,{href:"https://github.com/Wolfkid200444",name:"Wolfie",title:"Lead Dev",img:"https://avatars.githubusercontent.com/u/32025746?v=4"}),e(s,{href:"https://github.com/jdadonut",name:"Jai",title:`frontend dev 
 resident catgirl`,img:"https://avatars.githubusercontent.com/u/47060357?v=4"}),e(s,{href:"https://github.com/PokemonLeader",name:"PokemonLeader",title:"Dev",img:"https://avatars.githubusercontent.com/u/30406817?v=4"}),e(s,{href:"https://github.com/yehezkieldio",name:"Liz",title:"frontend dev",img:"https://avatars.githubusercontent.com/u/47420407?v=4"})]})]})]}),e("div",{className:"bottom-0 absolute m-auto w-screen center p-5",children:o("p",{className:"w-full text-center text-xl text-white w-full ",children:["made with meows and nyas by jai <3"," ",e("br",{})," ",e("a",{href:"#",onClick:a=>n(!0),className:"text-white",children:"Privacy Policy"})]})})]})}m.render(e(g.StrictMode,{children:e(x,{})}),document.getElementById("root"));
