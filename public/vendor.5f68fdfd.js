let e=v;const t={},n={owned:null,cleanups:null,context:null,owner:null};var o=null;let r=null,l=null,s=null,u=0;function i(e,t,n){d(p(e,t,!1,1))}function f(e){let t;return t=e(),t}function c(t){!function(t,n,o){e=b;const r=p(t,n,!1,1);r.user=!0,s&&s.push(r)}((()=>f(t)))}function a(e,n,o){if(e.comparator&&e.comparator(e.value,n))return n;if(r)return e.pending===t&&r.push(e),e.pending=n,n;let u=!1;return e.value=n,e.observers&&e.observers.length&&g((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];u,n.pure?l.push(n):s.push(n),n.observers&&!n.state&&w(n),n.state=1}if(l.length>1e6)throw l=[],new Error}),!1),n}function d(e){if(!e.fn)return;A(e);const t=o,n=u;o=e,function(e,t,n){let o;try{o=e.fn(t)}catch(r){m(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?a(e,o):e.value=o,e.updatedAt=n)}(e,e.value,n),o=t}function p(e,t,r,l=1,s){const u={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:o,context:null,pure:r};return null===o||o!==n&&(o.owned?o.owned.push(u):o.owned=[u]),u}function h(e){if(1!==e.state)return e.state=0;if(e.suspense&&f(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<u);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)d(e);else if(2===e.state){const t=l;l=null,y(e),l=t}}function g(n,o){if(l)return n();let i=!1;o||(l=[]),s?i=!0:s=[],u++;try{n()}catch(f){m(f)}finally{!function(n){l&&(v(l),l=null);if(n)return;s.length?function(e){if(r)return e();let n;const o=r=[];try{n=e()}finally{r=null}g((()=>{for(let e=0;e<o.length;e+=1){const n=o[e];if(n.pending!==t){const e=n.pending;n.pending=t,a(n,e)}}}),!1)}((()=>{e(s),s=null})):s=null}(i)}}function v(e){for(let t=0;t<e.length;t++)h(e[t])}function b(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:h(o)}const o=e.length;for(t=0;t<n;t++)h(e[t]);for(t=o;t<e.length;t++)h(e[t])}function y(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state?h(n):2===n.state&&y(n))}}function w(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.pure?l.push(n):s.push(n),n.observers&&w(n))}}function A(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const e=o.pop(),r=t.observerSlots.pop();n<o.length&&(e.sourceSlots[r]=n,o[n]=e,t.observerSlots[n]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)A(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function m(e){throw e}function C(e,t){return f((()=>e(t)))}function x(e,t,n){let o=n.length,r=t.length,l=o,s=0,u=0,i=t[r-1].nextSibling,f=null;for(;s<r||u<l;)if(t[s]!==n[u]){for(;t[r-1]===n[l-1];)r--,l--;if(r===s){const t=l<o?u?n[u-1].nextSibling:n[l-u]:i;for(;u<l;)e.insertBefore(n[u++],t)}else if(l===u)for(;s<r;)f&&f.has(t[s])||e.removeChild(t[s]),s++;else if(t[s]===n[l-1]&&n[u]===t[r-1]){const o=t[--r].nextSibling;e.insertBefore(n[u++],t[s++].nextSibling),e.insertBefore(n[--l],o),t[r]=n[l]}else{if(!f){f=new Map;let e=u;for(;e<l;)f.set(n[e],e++)}const o=f.get(t[s]);if(null!=o)if(u<o&&o<l){let i,c=s,a=1;for(;++c<r&&c<l&&null!=(i=f.get(t[c]))&&i===o+a;)a++;if(a>o-u){const r=t[s];for(;u<o;)e.insertBefore(n[u++],r)}else e.replaceChild(n[u++],t[s++])}else s++;else e.removeChild(t[s++])}}else s++,u++}function S(e,t,r){let l;return function(e,t){t&&(o=t);const r=o,l=0===e.length?n:{owned:null,cleanups:null,context:null,owner:r};let s;o=l;try{g((()=>s=e((()=>A(l)))),!0)}finally{o=r}}((n=>{l=n,T(t,e(),t.firstChild?null:void 0,r)})),()=>{l(),t.textContent=""}}function N(e,t,n){const o=document.createElement("template");o.innerHTML=e;let r=o.content.firstChild;return n&&(r=r.firstChild),r}function E(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let o=0,r=e.length;o<r;o++){const r=e[o];n.has(r)||(n.add(r),t.addEventListener(r,B))}}function T(e,t,n,o){if(void 0===n||o||(o=[]),"function"!=typeof t)return $(e,t,o,n);i((o=>$(e,t(),o,n)),o)}function B(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const o=n[t];if(o&&!n.disabled){const r=n[`${t}Data`];if(void 0!==r?o(r,e):o(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function $(e,t,n,o,r){for(;"function"==typeof n;)n=n();if(t===n)return n;const l=typeof t,s=void 0!==o;if(e=s&&n[0]&&n[0].parentNode||e,"string"===l||"number"===l)if("number"===l&&(t=t.toString()),s){let r=n[0];r&&3===r.nodeType?r.data=t:r=document.createTextNode(t),n=P(e,n,o,r)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===l)n=P(e,n,o);else{if("function"===l)return i((()=>{let r=t();for(;"function"==typeof r;)r=r();n=$(e,r,n,o)})),()=>n;if(Array.isArray(t)){const l=[];if(D(l,t,r))return i((()=>n=$(e,l,n,o,!0))),()=>n;if(0===l.length){if(n=P(e,n,o),s)return n}else Array.isArray(n)?0===n.length?L(e,l,o):x(e,n,l):null==n||""===n?L(e,l):x(e,s&&n||[e.firstChild],l);n=l}else if(t instanceof Node){if(Array.isArray(n)){if(s)return n=P(e,n,o,t);P(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function D(e,t,n){let o=!1;for(let r=0,l=t.length;r<l;r++){let l,s=t[r];if(s instanceof Node)e.push(s);else if(null==s||!0===s||!1===s);else if(Array.isArray(s))o=D(e,s)||o;else if("string"==(l=typeof s))e.push(document.createTextNode(s));else if("function"===l)if(n){for(;"function"==typeof s;)s=s();o=D(e,Array.isArray(s)?s:[s])||o}else e.push(s),o=!0;else e.push(document.createTextNode(s.toString()))}return o}function L(e,t,n){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function P(e,t,n,o){if(void 0===n)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(r!==s){const t=s.parentNode===e;o||l?t&&e.removeChild(s):t?e.replaceChild(r,s):e.insertBefore(r,n)}else o=!0}}else e.insertBefore(r,n);return[r]}export{C as c,E as d,T as i,c as o,S as r,N as t};
