function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,r){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}(e,r))}function c(t,n,e,r){if(t){const o=f(t,n,e,r);return t[0](o)}}function f(t,n,e,r){return t[1]&&r?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](r(n))):e.ctx}function a(t,n,e,r,o,i,u){const c=function(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}(n,r,o,i);if(c){const o=f(n,e,r,u);t.p(o,c)}}function s(t,n){t.appendChild(n)}function _(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function d(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function y(){return m("")}function $(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t){return Array.from(t.childNodes)}function E(t,n,e,r){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){let n=0;const i=[];for(;n<r.attributes.length;){const t=r.attributes[n++];e[t.name]||i.push(t.name)}for(let t=0;t<i.length;t++)r.removeAttribute(i[t]);return t.splice(o,1)[0]}}return r?p(n):d(n)}function x(t,n){for(let e=0;e<t.length;e+=1){const r=t[e];if(3===r.nodeType)return r.data=""+n,t.splice(e,1)[0]}return m(n)}function w(t){return x(t," ")}function A(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function S(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}function O(t,n=document.body){return Array.from(n.querySelectorAll(t))}let j;function k(t){j=t}function H(t){(function(){if(!j)throw new Error("Function called outside component initialization");return j})().$$.on_mount.push(t)}const F=[],q=[],P=[],T=[],z=Promise.resolve();let C=!1;function D(t){P.push(t)}function N(t){T.push(t)}let B=!1;const M=new Set;function I(){if(!B){B=!0;do{for(let t=0;t<F.length;t+=1){const n=F[t];k(n),L(n.$$)}for(k(null),F.length=0;q.length;)q.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];M.has(n)||(M.add(n),n())}P.length=0}while(F.length);for(;T.length;)T.pop()();C=!1,B=!1,M.clear()}}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(D)}}const V=new Set;let G;function J(){G={r:0,c:[],p:G}}function K(){G.r||r(G.c),G=G.p}function R(t,n){t&&t.i&&(V.delete(t),t.i(n))}function Q(t,n,e,r){if(t&&t.o){if(V.has(t))return;V.add(t),G.c.push((()=>{V.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function U(t,n,e){const r=t.$$.props[n];void 0!==r&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}function W(t){t&&t.c()}function X(t,n){t&&t.l(n)}function Y(t,e,i){const{fragment:u,on_mount:c,on_destroy:f,after_update:a}=t.$$;u&&u.m(e,i),D((()=>{const e=c.map(n).filter(o);f?f.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(D)}function Z(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function tt(t,n){-1===t.$$.dirty[0]&&(F.push(t),C||(C=!0,z.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function nt(n,o,i,u,c,f,a=[-1]){const s=j;k(n);const _=n.$$={fragment:null,ctx:null,props:f,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:e(),dirty:a,skip_bound:!1};let h=!1;if(_.ctx=i?i(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return _.ctx&&c(_.ctx[t],_.ctx[t]=o)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](o),h&&tt(n,t)),e})):[],_.update(),h=!0,r(_.before_update),_.fragment=!!u&&u(_.ctx),o.target){if(o.hydrate){const t=v(o.target);_.fragment&&_.fragment.l(t),t.forEach(l)}else _.fragment&&_.fragment.c();o.intro&&R(n.$$.fragment),Y(n,o.target,o.anchor),I()}k(s)}class et{$destroy(){Z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var rt,ot=function(t){try{var n=window[t],e="__storage_test__";return n.setItem(e,e),n.removeItem(e),!0}catch(r){return!1}},it=function t(n,e){if(n===e)return!0;if(n&&e&&"object"==typeof n&&"object"==typeof e){if(n.constructor!==e.constructor)return!1;var r,o,i;if(Array.isArray(n)){if((r=n.length)!=e.length)return!1;for(o=r;0!=o--;)if(!t(n[o],e[o]))return!1;return!0}if(n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(o of n.entries())if(!e.has(o[0]))return!1;for(o of n.entries())if(!t(o[1],e.get(o[0])))return!1;return!0}if(n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(o of n.entries())if(!e.has(o[0]))return!1;return!0}if(ArrayBuffer.isView(n)&&ArrayBuffer.isView(e)){if((r=n.length)!=e.length)return!1;for(o=r;0!=o--;)if(n[o]!==e[o])return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===e.toString();if((r=(i=Object.keys(n)).length)!==Object.keys(e).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(e,i[o]))return!1;for(o=r;0!=o--;){var u=i[o];if(!t(n[u],e[u]))return!1}return!0}return n!=n&&e!=e};rt={__e:function(t,n){for(var e,r,o;n=n.__;)if((e=n.__c)&&!e.__)try{if((r=e.constructor)&&null!=r.getDerivedStateFromError&&(e.setState(r.getDerivedStateFromError(t)),o=e.__d),null!=e.componentDidCatch&&(e.componentDidCatch(t),o=e.__d),o)return e.__E=e}catch(i){t=i}throw t},__v:0},"function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;var ut,ct,ft=[],at=rt.__b,st=rt.__r,_t=rt.diffed,lt=rt.__c,ht=rt.unmount;function dt(){ft.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(mt),t.__H.__h.forEach(gt),t.__H.__h=[]}catch(n){t.__H.__h=[],rt.__e(n,t.__v)}})),ft=[]}rt.__b=function(t){ut=null,at&&at(t)},rt.__r=function(t){st&&st(t);var n=(ut=t.__c).__H;n&&(n.__h.forEach(mt),n.__h.forEach(gt),n.__h=[])},rt.diffed=function(t){_t&&_t(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==ft.push(n)&&ct===rt.requestAnimationFrame||((ct=rt.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),pt&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);pt&&(n=requestAnimationFrame(e))})(dt)),ut=void 0},rt.__c=function(t,n){n.some((function(t){try{t.__h.forEach(mt),t.__h=t.__h.filter((function(t){return!t.__||gt(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],rt.__e(e,t.__v)}})),lt&&lt(t,n)},rt.unmount=function(t){ht&&ht(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(mt)}catch(e){rt.__e(e,n.__v)}};var pt="function"==typeof requestAnimationFrame;function mt(t){var n=ut;"function"==typeof t.__c&&t.__c(),ut=n}function gt(t){var n=ut;t.__c=t.__(),ut=n}export{$ as A,m as B,x as C,A as D,q as E,U as F,J as G,K as H,N as I,u as J,h as K,O as L,et as S,b as a,S as b,E as c,_ as d,d as e,l as f,v as g,y as h,nt as i,s as j,c as k,W as l,g as m,t as n,H as o,X as p,w as q,Y as r,i as s,R as t,a as u,Q as v,Z as w,ot as x,it as y,p as z};
