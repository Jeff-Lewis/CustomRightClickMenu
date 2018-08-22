"use strict";importScripts("crmapi.js");var _self=self;!function(){function log(e,a){self.postMessage({type:"log",data:JSON.stringify(e),lineNo:a})}_self.log=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var t=(new Error).stack.split("\n")[1];-1<t.indexOf("eval")&&((t=(new Error).stack.split("\n")[2])||(t=(new Error).stack.split("\n")[1]));var n=t.split("at");log(e,n.slice(1,n.length).join("at"))},_self.logNoStack=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];log(e)},_self.console={log:_self.log},_self.onerror=function(e,a,t,n,s){_self.log(s.name+" occurred in background page",s.stack)};var handshakeData=null,handshake=function(e,a,t){return handshakeData={id:e,secretKey:a,handler:t},_self.postMessage({type:"handshake",data:JSON.stringify({id:e,key:a,tabId:0}),key:a}),handshake=null,{postMessage:function(e){_self.postMessage({type:"crmapi",data:JSON.stringify(e),key:a})}}};function verifyKey(e){return e===handshakeData.secretKey.join("")+handshakeData.id+"verified"}Object.defineProperty(self,"handshake",{get:function(){return handshake}}),_self.addEventListener("message",function(e){var data=e.data;switch(data.type){case"init":var loadedLibraries=!0;if(data.libraries.forEach(function(a){try{importScripts(a)}catch(e){loadedLibraries=!1,_self.logNoStack([e.name," occurred in loading library ",a.split(/(\/|\\)/).pop(),"\n","Message: "].join(""),e.message,".\nStack:",e.stack)}}),!loadedLibraries)return;!function(script,log){try{eval(["(function(window) {",script,"}(typeof window === 'undefined' ? self : window));"].join("")),log("Succesfully launched script")}catch(e){_self.logNoStack([e.name," occurred in executing background script","\n","Message: "].join(""),e.message,".\nStack:",e.stack),log("Script boot failed, call window.debugBackgroundScript(node id) to restart and debug it")}}(data.script,_self.log);break;case"verify":case"message":verifyKey(data.key)&&handshakeData.handler(JSON.parse(data.message))}})}();