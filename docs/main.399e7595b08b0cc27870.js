(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO");var o={startBtn:document.querySelector('button[data-action="start"'),stopBtn:document.querySelector('button[data-action="stop"'),bodyColor:document.querySelector("body")},r=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];o.startBtn.addEventListener("click",(function(){a=setInterval((function(t){var e,n,o;e=0,n=5,t=Math.floor(Math.random()*(n-e+1)+e),o=r[t],document.body.style.backgroundColor=o}),1e3),o.stopBtn.removeAttribute("disabled"),o.startBtn.setAttribute("disabled",!0)})),o.stopBtn.addEventListener("click",(function(){clearInterval(a),o.startBtn.removeAttribute("disabled"),o.stopBtn.setAttribute("disabled",!0)}));var a=null}},[["QfWi",1]]]);
//# sourceMappingURL=main.399e7595b08b0cc27870.js.map