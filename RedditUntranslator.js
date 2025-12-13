// ==UserScript==
// @name			NR Reddit Untranslator
// @version			1.1.0.0
// @description		Remove Reddit's automatic translations when loading the page (useful in incognito mode)
// @author			NotReal96
// @license			https://github.com/NotReal96/Userscripts/blob/main/LICENSE-C
// @match			https://www.reddit.com/*
// @icon			https://www.redditstatic.com/shreddit/assets/favicon/64x64.png
// @run-at			document-start
// ==/UserScript==

let D=document,y,x=new URL(location.href),T=200,t,z
if(x.searchParams.has("tl"))location.replace(x.searchParams.delete("tl"),x)
y=(r,s)=>{
	let R=r.querySelector(s)
	if(!R)for(let h of r.querySelectorAll("*"))if((h=h.shadowRoot)&&h.mode=="open")if(R=y(h,s))break
	return R
}
z=f=>{
	if((x=y(D,"#hui-translation-switch"))&&x.checked)x.shadowRoot.querySelector(".switch-input-primary").click()
	return x
}
D.addEventListener("DOMContentLoaded",f=>{
	t=setInterval(f=>{
		if(z()||!--T){
			clearInterval(t)
			if(!T)D.addEventListener("load",z)
		}
	},1)
})
