(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i.n(c),p=i(6),s=i.n(p),d=i(3),n=i.p+"static/media/pepeOk.1261d5c8.png",r=i(0),m=function(e){return Object(r.jsxs)("header",{children:[Object(r.jsx)("img",{className:"logo",alt:"logo",title:"Pepe Emoji Memory Game",src:n}),Object(r.jsxs)("div",{className:"titleHeader",children:[Object(r.jsx)("h1",{children:"Pepe Emoji Memory Game"}),Object(r.jsx)("p",{children:"Don't click on the same image more than once."})]}),Object(r.jsxs)("div",{className:"scoreDiv",children:[Object(r.jsx)("p",{children:"Max Score: 24"}),Object(r.jsxs)("p",{children:["Best Score: ",e.bestScore]}),Object(r.jsxs)("p",{children:["Current Score: ",e.score]})]})]})},o=i(7),g=[{id:1,img:i.p+"static/media/bigWOW.250d7d08.png",text:"bigWOW"},{id:2,img:i.p+"static/media/FeelsWeirdMan.ca9b2827.png",text:"feelsWeirdMan"},{id:3,img:i.p+"static/media/HappyAwesome.c7be9b5c.png",text:"happyAwesome"},{id:4,img:i.p+"static/media/HYPERS.ce59e3d7.png",text:"HYPERS"},{id:5,img:i.p+"static/media/monkaHmm.3461104a.png",text:"monkaHmm"},{id:6,img:i.p+"static/media/monkaS.3078edc5.png",text:"monkaS"},{id:7,img:i.p+"static/media/peepo_excited.b4062e43.png",text:"peepoExcited"},{id:8,img:i.p+"static/media/peepo_sad.47c48514.png",text:"peepoSad"},{id:9,img:i.p+"static/media/peepoAngeryHmph.a0f7dec6.png",text:"peepoAngeryHmph"},{id:10,img:i.p+"static/media/peepoHappy.01224afb.png",text:"peepoHappy"},{id:11,img:i.p+"static/media/UwU.dc7e272e.png",text:"UwU"},{id:12,img:i.p+"static/media/peepoHug.f330d7ef.png",text:"peepoHug"},{id:13,img:i.p+"static/media/peepoJedi.ad7b9174.png",text:"peepoJedi"},{id:14,img:i.p+"static/media/peepoSmile.c7fc2a2c.png",text:"peepoSmile"},{id:15,img:i.p+"static/media/pepe_like.ae54067c.png",text:"pepeLike"},{id:16,img:i.p+"static/media/pepe-1.b22f0654.png",text:"pepe"},{id:17,img:i.p+"static/media/Pepega.faa49949.png",text:"Pepega"},{id:18,img:i.p+"static/media/PepeHands.3d13f34c.png",text:"PepeHands"},{id:19,img:i.p+"static/media/pepeLaugh.05ad6d34.png",text:"pepeLaugh"},{id:20,img:i.p+"static/media/pepeLOL.2a8bf48a.png",text:"pepeLOL"},{id:21,img:i.p+"static/media/POGGERS.0b36db0d.png",text:"POGGERS"},{id:22,img:i.p+"static/media/POGGIES.98035734.png",text:"POGGIES"},{id:23,img:i.p+"static/media/sus.6885703f.png",text:"sus"},{id:24,img:i.p+"static/media/YEP.9210efc6.png",text:"YEP"}],j=function(e){var t=Object(c.useState)([]),i=Object(d.a)(t,2),a=i[0],p=i[1],s=g;Object(c.useEffect)((function(){!function(){for(var e=s.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),i=[s[t],s[e]];s[e]=i[0],s[t]=i[1]}}()}));return Object(r.jsx)("div",{className:"flexCard",children:s.map((function(t){return Object(r.jsxs)("div",{onClick:function(t){!function(t){a.includes(Number(t.target.closest(".card").id))?(e.fillBestScore(a.length),e.resetScore(),p([])):(p((function(e){return[].concat(Object(o.a)(e),[Number(t.target.closest(".card").id)])})),e.increaseScore())}(t)},id:t.id,className:"card",children:[Object(r.jsx)("img",{className:"imgCard",alt:t.text,src:t.img}),Object(r.jsx)("div",{className:"textCard",children:Object(r.jsx)("p",{children:t.text})})]},t.id)}))})},l=function(){return Object(r.jsx)("footer",{children:Object(r.jsxs)("p",{children:["This project is part of"," ",Object(r.jsx)("a",{href:"https://theodinproject.com/",target:"_blank",rel:"noopener noreferrer",children:"The Odin Project"}),"'s curriculum"]})})},x=(i(13),function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),i=t[0],a=t[1],p=Object(c.useState)(0),s=Object(d.a)(p,2),n=s[0],o=s[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(m,{bestScore:n,score:i}),Object(r.jsx)(j,{increaseScore:function(){a(i+1)},fillBestScore:function(e){n<e&&o(e)},setScore:a,resetScore:function(){a(0),23===i?alert("POGGERS"):alert("You Lost! Feels Bad Man!")}}),Object(r.jsx)(l,{})]})});s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.18b54849.chunk.js.map