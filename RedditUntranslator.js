// ==UserScript==
// @name			NR Reddit Untranslator
// @version			1.0.0.0
// @description		Toggles Reddit's automatic translations off when loading the page (useful in incognito mode)
// @author			NotReal96
// @license			https://github.com/NotReal96/Userscripts/blob/main/LICENSE-C
// @match			https://www.reddit.com/*
// @icon			https://www.redditstatic.com/shreddit/assets/favicon/64x64.png
// ==/UserScript==

let x,y=(r,s)=>{
	let R=r.querySelector(s)
	if(!R)for(let h of r.querySelectorAll("*"))if((h=h.shadowRoot)&&h.mode=="open")if(R=y(h,s))break
	return R
},T=200,t=setInterval(f=>{
	if((x=y(document,"#hui-translation-switch"))||!--T)clearInterval(t)
	if(x?.checked)x.shadowRoot.querySelector(".switch-input-primary").click()
},1)
