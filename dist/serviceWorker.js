!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c}));const r="Telegram WebZ",s=(e.env.APP_VERSION,!1),o=!1,i="tt-media-progressive",a=524288,c="tt-assets";new Set(["newMessage","newScheduledMessage","deleteMessages","deleteScheduledMessages","deleteHistory"]),"undefined"!=typeof window&&window.innerHeight}).call(this,n(1))},function(e,t){var n,r,s=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=n(0);const s=new Map;async function o(e){const{url:t}=e.request,n=e.request.headers.get("range"),o=/^bytes=(\d+)-(\d+)?$/g.exec(n||""),i=Number(o[1]),a=Number(o[2]);let c=a;if((!c||c-i+1>524288)&&(c=i+524288-1),0===i&&1===c){const t=e.request.url.match(/fileSize=(\d+)&mimeType=([\w/]+)/),n=t&&Number(t[1]),r=t&&t[2];if(n&&r)return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:[["Content-Range","bytes 0-1/"+n],["Accept-Ranges","bytes"],["Content-Length","2"],["Content-Type",r]]})}const u=`${t}?start=${i}&end=${c}`,[l,f]=r.e?[]:await async function(e){const t=await self.caches.open(r.f);return Promise.all([t.match(e+"&type=arrayBuffer").then(e=>e?e.arrayBuffer():void 0),t.match(e+"&type=headers").then(e=>e?e.json():void 0)])}(u);if(r.c&&console.log(`FETCH PROGRESSIVE ${u} (request: ${i}-${a}) CACHED: ${Boolean(l)}`),l)return new Response(l,{status:206,statusText:"Partial Content",headers:f});let d;try{d=await async function(e,t){if(!e.clientId)return;const n=await self.clients.get(e.clientId);if(!n)return;const r=(e=>{let t;do{t=String(Math.random()).replace("0.","id")}while(e.hasOwnProperty(t));return t})(s),o={},i=Promise.race([(a=3e4,new Promise(e=>{setTimeout(()=>e(),a)})).then(()=>Promise.reject(new Error("ERROR_PART_TIMEOUT"))),new Promise((e,t)=>{Object.assign(o,{resolve:e,reject:t})})]);var a;return s.set(r,o),i.catch(()=>{}).finally(()=>{s.delete(r)}),n.postMessage({type:"requestPart",messageId:r,params:t}),i}(e,{url:t,start:i,end:c})}catch(e){r.c&&console.error("FETCH PROGRESSIVE",e)}if(!d)return new Response("",{status:500,statusText:"Failed to fetch progressive part"});const{arrayBuffer:p,fullSize:h,mimeType:m}=d,g=Math.min(c-i+1,p.byteLength);c=i+g-1;const y=p.slice(0,g),w=[["Content-Range",`bytes ${i}-${c}/${h}`],["Accept-Ranges","bytes"],["Content-Length",String(g)],["Content-Type",m]];return!r.e&&g<=r.d&&c<2097151&&async function(e,t,n){const s=await self.caches.open(r.f);Promise.all([s.put(new Request(e+"&type=arrayBuffer"),new Response(t)),s.put(new Request(e+"&type=headers"),new Response(JSON.stringify(n)))])}(u,y,w),new Response(y,{status:206,statusText:"Partial Content",headers:w})}var i;self.addEventListener("message",e=>{const{type:t,messageId:n,result:r}=e.data;if("partResponse"===t){const e=s.get(n);e&&e.resolve(r)}}),function(e){e.True="1",e.False="0"}(i||(i={}));const a={},c=new Set;function u(e){return e.custom.from_id?parseInt(e.custom.from_id,10):e.custom.chat_id?-1*parseInt(e.custom.chat_id,10):e.custom.channel_id?-1*parseInt(e.custom.channel_id,10):void 0}function l(e){if(e.custom.msg_id)return parseInt(e.custom.msg_id,10)}function f({chatId:e,messageId:t,body:n,title:r}){return self.registration.showNotification(r,{body:n,data:{chatId:e,messageId:t},icon:"icon-192x192.png",badge:"icon-192x192.png",vibrate:[200,100,200]})}async function d(e,t){const{chatId:n,messageId:s}=t;if(n){e.postMessage({type:"focusMessage",payload:{chatId:n,messageId:s}});try{await e.focus()}catch(e){r.c&&console.warn("[SW] ",e)}}}const p=/[0-9a-f]{20}.*\.(js|css|woff2?|svg|png|jpg|json|wasm)$/;self.addEventListener("install",e=>{r.c&&console.log("ServiceWorker installed"),e.waitUntil(self.skipWaiting())}),self.addEventListener("activate",e=>{r.c&&console.log("ServiceWorker activated"),e.waitUntil(self.caches.delete(r.b)),e.waitUntil(self.clients.claim())}),self.addEventListener("fetch",e=>{e.respondWith((()=>{const{url:t}=e.request;return t.includes("/progressive/")?o(e):t.startsWith("http")&&t.match(p)?async function(e){const t=await self.caches.open(r.b),n=await t.match(e.request);if(n)return n;const s=await fetch(e.request);return t.put(e.request,s.clone()),s}(e):fetch(e.request)})())}),self.addEventListener("push",(function(e){r.c&&(console.log("[SW] Push received event",e),e.data&&console.log("[SW] Push received with data",e.data.json()));const t=function(e){try{return e.data.json()}catch(t){return void(r.c&&console.log("[SW] Unable to parse push notification data",e.data))}}(e);if(!t||t.mute===i.True)return;const n=function(e){return{chatId:u(e),messageId:l(e),title:e.title||r.a,body:e.description}}(t);c.has(n.messageId)?c.delete(n.messageId):e.waitUntil(f(n))})),self.addEventListener("notificationclick",(function(e){e.notification.close();const{data:t}=e.notification;e.waitUntil((async()=>{const n=(await self.clients.matchAll({type:"window"})).filter(e=>e.url===self.registration.scope);if(e.waitUntil(Promise.all(n.map(e=>(a[e.id]=t,d(e,t))))),!self.clients.openWindow||n.length>0)return;const r=await self.clients.openWindow("https://webz.telegram.org/");r&&(a[r.id]=t)})())})),self.addEventListener("message",(function(e){if(r.c&&console.log("[SW] New message from client",e),!e.data)return;const t=e.source;if("clientReady"===e.data.type&&a[t.id]&&(e.waitUntil(d(t,a[t.id])),delete a[t.id]),"newMessageNotification"===e.data.type){const t=e.data.payload;e.waitUntil(f(t)),c.add(t.messageId)}}))}]);
//# sourceMappingURL=serviceWorker.js.map