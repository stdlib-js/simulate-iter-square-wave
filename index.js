// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterSquareWave=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var a,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(t,r)||f.call(t,r)?(a=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=a):t[r]=e.value),p="get"in e,y="set"in e,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&u&&u.call(t,r,e.set),t};var a=r;function l(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=Object.prototype.hasOwnProperty;function y(t,r){return null!=t&&p.call(t,r)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&y(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d="function"==typeof Symbol?Symbol.toStringTag:"";var j=m()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[d],r=y(t,d);try{t[d]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[d]=e:delete t[d],n}:function(t){return v.call(t)};var _=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var g=/./;function w(t){return"boolean"==typeof t}var O=Boolean.prototype.toString;var h=m();function S(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function E(t){return w(t)||S(t)}function P(){return new Function("return this;")()}l(E,"isPrimitive",w),l(E,"isObject",S);var T="object"==typeof self?self:null,x="object"==typeof window?window:null,I="object"==typeof global?global:null;var A=function(t){if(arguments.length){if(!w(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return P()}if(T)return T;if(x)return x;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),N=A.document&&A.document.childNodes,G=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;function V(t){return null!==t&&"object"==typeof t}function Z(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=F.exec(n.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(B,"REGEXP",F),l(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!_(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(V));var C="function"==typeof g||"object"==typeof G||"function"==typeof N?function(t){return Z(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Z(t).toLowerCase():r};function L(t){return"function"===C(t)}var M,U=Object.getPrototypeOf;M=L(Object.getPrototypeOf)?U:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var k=M;var J=Object.prototype;function R(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!_(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),k(t))}(t),!r||!y(t,"constructor")&&y(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&y(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!y(t,r))return!1;return!0}(t)))}function Y(t){return"number"==typeof t}var q=Number,D=q.prototype.toString;var Q=m();function W(t){return"object"==typeof t&&(t instanceof q||(Q?function(t){try{return D.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return Y(t)||W(t)}l(X,"isPrimitive",Y),l(X,"isObject",W);var z=Number.POSITIVE_INFINITY,H=q.NEGATIVE_INFINITY,K=Math.floor;function $(t){return K(t)===t}function tt(t){return t<z&&t>H&&$(t)}function rt(t){return Y(t)&&tt(t)}function et(t){return W(t)&&tt(t.valueOf())}function nt(t){return rt(t)||et(t)}function ot(t){return rt(t)&&t>0}function it(t){return et(t)&&t.valueOf()>0}function ut(t){return ot(t)||it(t)}function ct(t){return rt(t)&&t>=0}function ft(t){return et(t)&&t.valueOf()>=0}function at(t){return ct(t)||ft(t)}function lt(t){return t!=t}function pt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function yt(t,r){return R(r)?!y(r,"period")||(t.period=r.period,ot(r.period)&&$(r.period/2))?y(r,"min")&&(t.min=r.min,!Y(r.min)||lt(r.min))?new TypeError(pt("0tZ8P,GU","min",r.min)):y(r,"max")&&(t.max=r.max,!Y(r.max)||lt(r.max))?new TypeError(pt("0tZ8P,GU","max",r.max)):y(r,"offset")&&(t.offset=r.offset,!rt(r.offset))?new TypeError(pt("0tZ8M,JG","offset",r.offset)):y(r,"iter")&&(t.iter=r.iter,!ct(r.iter))?new TypeError(pt("0tZ2t,G9","iter",r.iter)):null:new TypeError(pt("0tZ8Q,JL","period",r.period)):new TypeError(pt("0tZ2V,FD",r))}return l(nt,"isPrimitive",rt),l(nt,"isObject",et),l(ut,"isPrimitive",ot),l(ut,"isObject",it),l(at,"isPrimitive",ct),l(at,"isObject",ft),function t(r){var e,n,o,i,u,c,f;if(e={period:10,min:-1,max:1,offset:0,iter:1e308},arguments.length&&(i=yt(e,r)))throw i;return(u=(e.period-e.offset)%e.period)<0&&(u+=e.period),u-=1,c=e.period/2,f=0,l(n={},"next",a),l(n,"return",p),s&&l(n,s,y),n;function a(){return f+=1,o||f>e.iter?{done:!0}:{value:(u+=1)%e.period<c?e.max:e.min,done:!1}}function p(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}}function y(){return t(e)}}}));
//# sourceMappingURL=index.js.map
