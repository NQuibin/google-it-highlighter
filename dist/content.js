!function(o){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=o,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r(r.s=1)}([function(e,t,o){},function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.r(t);var r=function e(){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_createBox",function(e){var t=document.createElement("div");t.style.position="absolute",t.style.border="1px solid red";var o=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.scrollLeft||document.body.scrollLeft;t.style.margin=t.style.padding="0",t.style.top="".concat(e.top+o,"px"),t.style.left="".concat(e.left+n,"px"),t.style.width="".concat(e.width-2,"px"),t.style.height="".concat(e.height-2,"px"),document.body.appendChild(t)}),n(this,"_doSearch",function(e){var t="http://www.google.com/search?q=".concat(encodeURIComponent(a.text));e&&(t+="&as_filetype=".concat(e)),window.open(t)}),n(this,"_handleOptionClick",function(e){var t=e.currentTarget.getAttribute("data-filetype");a._doSearch(t)}),n(this,"_toggleOptionListeners",function(e){var t=e?"addEventListener":"removeEventListener",o=a.popover.querySelectorAll("#google-it-highlighter-popover .search-nq"),n=!0,r=!1,i=void 0;try{for(var c,l=o[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){c.value[t]("click",a._handleOptionClick)}}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}}),n(this,"_getCoordinates",function(){var e=window.getSelection();if(!e||"Range"!==e.type||e.isCollapsed)return[];try{var t=(e&&e.rangeCount&&e.getRangeAt(0).cloneRange()).getBoundingClientRect(),o=document.documentElement.scrollTop,n=t.left+t.width/2-55,r=t.top-45+o,i="tail";n<0?(n=t.right+10,r=t.top,i="tail-left"):n+110>=document.documentElement.clientWidth?(n=t.left-120,r=t.top+o,i="tail-right"):r<0&&(r=t.bottom+10+o,i="tail-top");var c=t&&window.getSelection().toString();return a.text=c&&c.trim(),[n,r,i]}catch(e){return[]}}),n(this,"_createPopover",function(){var e=a._getCoordinates();if(e.length){a.popover=document.createElement("div"),a.popover.id="google-it-highlighter-popover";var t=chrome.runtime.getURL("assets/google.png"),o=chrome.runtime.getURL("assets/pdf.png"),n=chrome.runtime.getURL("assets/doc.png");a.popover.innerHTML='\n                <div class="search-options-nq">\n                    <span class="tail"></span>\n                    <img class="search-nq" src="'.concat(t,'" alt="Google search" />\n                    <img class="search-nq" src="').concat(o,'" alt="search PDF files" data-filetype="pdf" />\n                    <img class="search-nq" src="').concat(n,'" alt="search doc files" data-filetype="doc" />\n                </div>\n            '),a.popover.style.left="".concat(e[0],"px"),a.popover.style.top="".concat(e[1],"px"),a.popover.querySelector(".tail").classList.replace("tail",e[2]),a._toggleOptionListeners(!0),document.body.appendChild(a.popover)}}),n(this,"_destroyPopover",function(){a.popover&&(a.popover.style.animation="google-it-highlighter-outro 0.2s",a.popover.style.animationFillMode="forwards",a._toggleOptionListeners(!1),a.popover.addEventListener("animationend",function(){a.popover&&a.popover.parentNode.removeChild(a.popover),a.popover=null,a.text=""}))}),n(this,"create",function(){return!a.popover&&(a._createPopover(),!0)}),n(this,"destroy",function(){return!!a.popover&&(a._destroyPopover(),!0)}),n(this,"quickSearch",function(){a._doSearch("")}),this.popover=null,this.text=""},i=(o(0),["g","G"]),c=null,l=0,a=function(e){c||(c=new r),i.includes(e.key)&&(c.create(),l+=1);var t=setTimeout(function(){l=0},300);2===l&&(c.quickSearch(),l=0,clearTimeout(t))},s=function(){c&&(c.destroy(),c=null)},p=setInterval(function(){"complete"===document.readyState&&(clearInterval(p),window.addEventListener("keyup",a),document.addEventListener("selectionchange",s))},10)}]);