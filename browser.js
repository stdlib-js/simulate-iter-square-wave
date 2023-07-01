// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterSquareWave=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&u&&u.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=Object.prototype.hasOwnProperty;function y(t,r){return null!=t&&p.call(t,r)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&y(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return b&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var v="function"==typeof Symbol?Symbol.toStringTag:"";var j=d()?function(t){var r,e,n;if(null==t)return m.call(t);e=t[v],r=y(t,v);try{t[v]=void 0}catch(r){return m.call(t)}return n=m.call(t),r?t[v]=e:delete t[v],n}:function(t){return m.call(t)};var g=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var _=/./;function w(t){return"boolean"==typeof t}var h=Boolean.prototype.toString;var O=d();function S(t){return"object"==typeof t&&(t instanceof Boolean||(O?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function E(t){return w(t)||S(t)}function T(){return new Function("return this;")()}a(E,"isPrimitive",w),a(E,"isObject",S);var P="object"==typeof self?self:null,x="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof I?I:null;var N=function(t){if(arguments.length){if(!w(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(P)return P;if(x)return x;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),R=N.document&&N.document.childNodes,B=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;function C(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(F,"REGEXP",V),a(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!g(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(C));var k="function"==typeof _||"object"==typeof B||"function"==typeof R?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function L(t){return"function"===k(t)}var M,U=Object.getPrototypeOf;M=L(Object.getPrototypeOf)?U:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Y=M;var q=Object.prototype;function W(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!g(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Y(t))}(t),!r||!y(t,"constructor")&&y(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&y(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===q||function(t){var r;for(r in t)if(!y(t,r))return!1;return!0}(t)))}function X(t){return"number"==typeof t}var z=Number,D=z.prototype.toString;var H=d();function J(t){return"object"==typeof t&&(t instanceof z||(H?function(t){try{return D.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function K(t){return X(t)||J(t)}a(K,"isPrimitive",X),a(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,Z=z.NEGATIVE_INFINITY,$=Math.floor;function tt(t){return $(t)===t}function rt(t){return t<Q&&t>Z&&tt(t)}function et(t){return X(t)&&rt(t)}function nt(t){return J(t)&&rt(t.valueOf())}function ot(t){return et(t)||nt(t)}function it(t){return et(t)&&t>0}function ut(t){return nt(t)&&t.valueOf()>0}function ft(t){return it(t)||ut(t)}function ct(t){return et(t)&&t>=0}function lt(t){return nt(t)&&t.valueOf()>=0}function at(t){return ct(t)||lt(t)}function pt(t){return t!=t}function yt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function st(t,r){return W(r)?!y(r,"period")||(t.period=r.period,it(r.period)&&tt(r.period/2))?y(r,"min")&&(t.min=r.min,!X(r.min)||pt(r.min))?new TypeError(yt("0Rg8h","min",r.min)):y(r,"max")&&(t.max=r.max,!X(r.max)||pt(r.max))?new TypeError(yt("0Rg8h","max",r.max)):y(r,"offset")&&(t.offset=r.offset,!et(r.offset))?new TypeError(yt("0Rg8e","offset",r.offset)):y(r,"iter")&&(t.iter=r.iter,!ct(r.iter))?new TypeError(yt("0Rg35","iter",r.iter)):null:new TypeError(yt("0Rg8i","period",r.period)):new TypeError(yt("0Rg2h",r))}return a(ot,"isPrimitive",et),a(ot,"isObject",nt),a(ft,"isPrimitive",it),a(ft,"isObject",ut),a(at,"isPrimitive",ct),a(at,"isObject",lt),function t(r){var e,n,o,i,u,f,c;if(e={period:10,min:-1,max:1,offset:0,iter:1e308},arguments.length&&(i=st(e,r)))throw i;return(u=(e.period-e.offset)%e.period)<0&&(u+=e.period),u-=1,f=e.period/2,c=0,a(n={},"next",l),a(n,"return",p),s&&a(n,s,y),n;function l(){return c+=1,o||c>e.iter?{done:!0}:{value:(u+=1)%e.period<f?e.max:e.min,done:!1}}function p(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}}function y(){return t(e)}}}));
//# sourceMappingURL=browser.js.map
