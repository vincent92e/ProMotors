"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}window.FontAwesomeKitConfig={asyncLoading:{enabled:!1},autoA11y:{enabled:!0},baseUrl:"https://ka-f.fontawesome.com",baseUrlKit:"https://kit.fontawesome.com",detectConflictsUntil:null,iconUploads:{},id:73003497,license:"free",method:"css",minify:{enabled:!0},token:"c479ef5045",v4FontFaceShim:{enabled:!0},v4shim:{enabled:!0},v5FontFaceShim:{enabled:!0},version:"6.1.1"},function(t){"function"==typeof define&&define.amd?define("kit-loader",t):t()}(function(){function r(t){return(r="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return _typeof(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof(t)})(t)}function e(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function u(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,n;e=o,n=r[t=t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function o(t,e){var n=e&&e.addOn||"",n=e&&e.baseFilename||t.license+n,o=e&&e.minify?".min":"",r=e&&e.fileSuffix||t.method,e=e&&e.subdir||t.method;return t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/"+e+"/"+n+o+"."+r}function f(o,t){t="."+Array.prototype.join.call(t||["fa"],",."),t=o.querySelectorAll(t);Array.prototype.forEach.call(t,function(t){var e=t.getAttribute("title"),n=(t.setAttribute("aria-hidden","true"),!t.nextElementSibling||!t.nextElementSibling.classList.contains("sr-only"));e&&n&&((n=o.createElement("span")).innerHTML=e,n.classList.add("sr-only"),t.parentNode.insertBefore(n,t.nextSibling))})}function c(){}var n,a="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,s="undefined"==typeof setImmediate?setTimeout:setImmediate,d=[];function l(){for(var t=0;t<d.length;t++)d[t][0](d[t][1]);n=!(d=[])}function m(t,e){d.push([t,e]),n||(n=!0,s(l,0))}function h(t){var e=t.owner,n=e._state,e=e._data,o=t[n],r=t.then;if("function"==typeof o){n="fulfilled";try{e=o(e)}catch(t){v(r,t)}}p(r,e)||("fulfilled"===n&&y(r,e),"rejected"===n&&v(r,e))}function p(e,n){var o;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===r(n))){var t=n.then;if("function"==typeof t)return t.call(n,function(t){o||(o=!0,(n===t?b:y)(e,t))},function(t){o||(o=!0,v(e,t))}),1}}catch(t){return o||v(e,t),1}}function y(t,e){t!==e&&p(t,e)||b(t,e)}function b(t,e){"pending"===t._state&&(t._state="settled",t._data=e,m(w,t))}function v(t,e){"pending"===t._state&&(t._state="settled",t._data=e,m(A,t))}function g(t){t._then=t._then.forEach(h)}function w(t){t._state="fulfilled",g(t)}function A(t){t._state="rejected",g(t),!t._handled&&a&&global.process.emit("unhandledRejection",t._data,t)}function S(t){global.process.emit("rejectionHandled",t)}function O(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof O==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[];var e=t,n=this;function o(t){v(n,t)}try{e(function(t){y(n,t)},o)}catch(e){o(e)}}O.prototype={constructor:O,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(c),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&a&&m(S,this)),"fulfilled"===this._state||"rejected"===this._state?m(h,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},O.all=function(c){if(Array.isArray(c))return new O(function(n,t){var o=[],r=0;for(var e,i=0;i<c.length;i++)(e=c[i])&&"function"==typeof e.then?e.then(function(e){return r++,function(t){o[e]=t,--r||n(o)}}(i),t):o[i]=e;r||n(o)});throw new TypeError("You must pass an array to Promise.all().")},O.race=function(r){if(Array.isArray(r))return new O(function(t,e){for(var n,o=0;o<r.length;o++)(n=r[o])&&"function"==typeof n.then?n.then(t,e):t(n)});throw new TypeError("You must pass an array to Promise.race().")},O.resolve=function(e){return e&&"object"===r(e)&&e.constructor===O?e:new O(function(t){t(e)})},O.reject=function(n){return new O(function(t,e){e(n)})};var j,_,F,E,C="function"==typeof Promise?Promise:O;function P(t,e){var r=e.fetch,i=e.XMLHttpRequest,e=e.token,c=t;return"URLSearchParams"in window?(c=new URL(t)).searchParams.set("token",e):c=c+"?token="+encodeURIComponent(e),c=c.toString(),new C(function(e,n){var o;"function"==typeof r?r(c,{mode:"cors",cache:"default"}).then(function(t){if(t.ok)return t.text();throw new Error("")}).then(function(t){e(t)}).catch(n):"function"==typeof i?((o=new i).addEventListener("loadend",function(){this.responseText?e(this.responseText):n(new Error(""))}),["abort","error","timeout"].map(function(t){o.addEventListener(t,function(){n(new Error(""))})}),o.open("GET",c),o.send()):n(new Error(""))})}function U(t,n,o){var r=t;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(t,e){return"".concat(e).concat(n)}],[/(url\("?)\.\.\/webfonts/g,function(t,e){return"".concat(e).concat(n,"/releases/v").concat(o,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(t,e){return"".concat(e).concat(n)}]].forEach(function(t){e=2;var t=function(t){if(Array.isArray(t))return t}(t=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),e=t[0],t=t[1];r=r.replace(e,t)}),r}function k(c,a,t){var t=2<arguments.length&&void 0!==t?t:function(){},e=a.document||e,e=f.bind(f,e,["fa","fab","fas","far","fal","fad","fak"]),n=0<Object.keys(c.iconUploads||{}).length,t=(c.autoA11y.enabled&&t(e),[{id:"fa-main",addOn:void 0}]),e=(c.v4shim&&c.v4shim.enabled&&t.push({id:"fa-v4-shims",addOn:"-v4-shims"}),c.v5FontFaceShim&&c.v5FontFaceShim.enabled&&t.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),c.v4FontFaceShim&&c.v4FontFaceShim.enabled&&t.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),n&&t.push({id:"fa-kit-upload",customCss:!0}),t.map(function(i){return new C(function(r,t){P(i.customCss?c.baseUrlKit+"/"+c.token+"/"+c.id+"/kit-upload.css":o(c,{addOn:i.addOn,minify:c.minify.enabled}),a).then(function(t){var e,n,o;r((t=t,e=u(u({},a),{},{baseUrl:c.baseUrl,version:c.version,id:i.id,contentFilter:function(t,e){return U(t,e.baseUrl,e.version)}}),n=e.contentFilter||function(t,e){return t},o=document.createElement("style"),n=document.createTextNode(n(t,e)),o.appendChild(n),o.media="all",e.id&&o.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&o.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),o))}).catch(t)})}));return C.all(e)}function L(n,i){i.autoA11y=n.autoA11y.enabled,"pro"===n.license&&(i.autoFetchSvg=!0,i.fetchSvgFrom=n.baseUrl+"/releases/"+("latest"===n.version?"latest":"v".concat(n.version))+"/svgs",i.fetchUploadedSvgFrom=n.uploadsUrl);var t=[];return n.v4shim.enabled&&t.push(new C(function(e,t){P(o(n,{addOn:"-v4-shims",minify:n.minify.enabled}),i).then(function(t){e(I(t,u(u({},i),{},{id:"fa-v4-shims"})))}).catch(t)})),t.push(new C(function(r,t){P(o(n,{minify:n.minify.enabled}),i).then(function(t){var e,n,o,t=I(t,u(u({},i),{},{id:"fa-main"}));r((t=t,n=(e=i)&&void 0!==e.autoFetchSvg?e.autoFetchSvg:void 0,void 0!==(o=e&&void 0!==e.autoA11y?e.autoA11y:void 0)&&t.setAttribute("data-auto-a11y",o?"true":"false"),n&&(t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),t.setAttribute("data-fetch-svg-from",e.fetchSvgFrom),t.setAttribute("data-fetch-uploaded-svg-from",e.fetchUploadedSvgFrom)),t))}).catch(t)})),C.all(t)}function I(t,e){var n=document.createElement("SCRIPT"),t=document.createTextNode(t);return n.appendChild(t),n.referrerPolicy="strict-origin",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function T(t){var e,n=[],o=document,r=(o.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);r||o.addEventListener("DOMContentLoaded",e=function(){for(o.removeEventListener("DOMContentLoaded",e),r=1;e=n.shift();)e()}),r?setTimeout(t,0):n.push(t)}try{window.FontAwesomeKitConfig&&(j=window.FontAwesomeKitConfig,_={detectingConflicts:j.detectConflictsUntil&&new Date<=new Date(j.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:j.token,XMLHttpRequest:window.XMLHttpRequest,document:document},F=document.currentScript,E=F?F.parentElement:document.head,function(t,e){t=0<arguments.length&&void 0!==t?t:{},e=1<arguments.length&&void 0!==e?e:{};return"js"===t.method?L(t,e):"css"===t.method?k(t,e,function(t){T(t),t=t,"undefined"!=typeof MutationObserver&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}):void 0}(j,_).then(function(t){t.map(function(e){try{E.insertBefore(e,F?F.nextSibling:null)}catch(t){E.appendChild(e)}}),_.detectingConflicts&&F&&T(function(){F.setAttributeNode(document.createAttribute(_.detectionIgnoreAttr));t=j,n=_,e=document.createElement("script"),n.detectionIgnoreAttr&&e.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)),e.src=o(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled});var t,e,n=e;document.body.appendChild(n)})}).catch(function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}))}catch(r){console.error("".concat("Font Awesome Kit:"," ").concat(r))}});
//# sourceMappingURL=fontawesome.js.map