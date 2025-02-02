// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,m,"$1e"),n=l.call(n,h,"e"),n=l.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,d,"e-0$1"),r.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function w(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,o,a,u,f,s,l,p,d,g,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,g=n.padRight,y=void 0,(y=d-p.length)<0?p:p=g?p+w(y):w(y)+p)),u+=n.arg||"",f+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var P,V=Object.prototype,A=V.toString,F=V.__defineGetter__,Z=V.__defineSetter__,C=V.__lookupGetter__,$=V.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&Z&&Z.call(r,e,t.set),r};var N=P;function R(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=Object.prototype.hasOwnProperty;function G(r,e){return null!=r&&B.call(r,e)}var L="function"==typeof Symbol?Symbol:void 0,M="function"==typeof L&&"symbol"==typeof L("foo")&&G(L,"iterator")&&"symbol"==typeof L.iterator?Symbol.iterator:null,W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y="function"==typeof L?L.toStringTag:"",q=U()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[Y],e=G(r,Y);try{r[Y]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return X.call(r)},z=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)},Q=/./;function D(r){return"boolean"==typeof r}var H=Boolean,J=Boolean.prototype.toString,K=U();function rr(r){return"object"==typeof r&&(r instanceof H||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function er(r){return D(r)||rr(r)}R(er,"isPrimitive",D),R(er,"isObject",rr);var tr="object"==typeof self?self:null,nr="object"==typeof window?window:null,ir="object"==typeof globalThis?globalThis:null,or=function(r){if(arguments.length){if(!D(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,cr=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;function sr(r){return null!==r&&"object"==typeof r}function lr(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return sr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}R(ur,"REGEXP",fr),R(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!z(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(sr));var pr="function"==typeof Q||"object"==typeof cr||"function"==typeof ar?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?lr(r).toLowerCase():e};function dr(r){return"function"===pr(r)}var gr,yr=Object,br=Object.getPrototypeOf;gr=dr(Object.getPrototypeOf)?br:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var hr=gr,mr=Object.prototype;function vr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!z(r)}(r)&&(e=function(r){return null==r?null:(r=yr(r),hr(r))}(r),!e||!G(r,"constructor")&&G(e,"constructor")&&dr(e.constructor)&&"[object Function]"===q(e.constructor)&&G(e,"isPrototypeOf")&&dr(e.isPrototypeOf)&&(e===mr||function(r){var e;for(e in r)if(!G(r,e))return!1;return!0}(r)))}function wr(r){return"number"==typeof r}var jr=Number,_r=jr.prototype.toString,Er=U();function xr(r){return"object"==typeof r&&(r instanceof jr||(Er?function(r){try{return _r.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Or(r){return wr(r)||xr(r)}R(Or,"isPrimitive",wr),R(Or,"isObject",xr);var Sr=Number.POSITIVE_INFINITY,Tr=jr.NEGATIVE_INFINITY,kr=Math.floor;function Ir(r){return kr(r)===r}function Pr(r){return r<Sr&&r>Tr&&Ir(r)}function Vr(r){return wr(r)&&Pr(r)}function Ar(r){return xr(r)&&Pr(r.valueOf())}function Fr(r){return Vr(r)||Ar(r)}function Zr(r){return Vr(r)&&r>0}function Cr(r){return Ar(r)&&r.valueOf()>0}function $r(r){return Zr(r)||Cr(r)}function Nr(r){return Vr(r)&&r>=0}function Rr(r){return Ar(r)&&r.valueOf()>=0}function Br(r){return Nr(r)||Rr(r)}function Gr(r){return r!=r}function Lr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function Mr(r,e){return vr(e)?!G(e,"period")||(r.period=e.period,Zr(e.period)&&Ir(e.period/2))?G(e,"min")&&(r.min=e.min,!wr(e.min)||Gr(e.min))?new TypeError(Lr("0tZ8P","min",e.min)):G(e,"max")&&(r.max=e.max,!wr(e.max)||Gr(e.max))?new TypeError(Lr("0tZ8P","max",e.max)):G(e,"offset")&&(r.offset=e.offset,!Vr(e.offset))?new TypeError(Lr("0tZ8M","offset",e.offset)):G(e,"iter")&&(r.iter=e.iter,!Nr(e.iter))?new TypeError(Lr("0tZ2t","iter",e.iter)):null:new TypeError(Lr("0tZ8Q","period",e.period)):new TypeError(Lr("0tZ2V",e))}return R(Fr,"isPrimitive",Vr),R(Fr,"isObject",Ar),R($r,"isPrimitive",Zr),R($r,"isObject",Cr),R(Br,"isPrimitive",Nr),R(Br,"isObject",Rr),function r(e){var t,n,i,o,a,c,u;if(t={period:10,min:-1,max:1,offset:0,iter:1e308},arguments.length&&(o=Mr(t,e)))throw o;return(a=(t.period-t.offset)%t.period)<0&&(a+=t.period),a-=1,c=t.period/2,u=0,R(n={},"next",(function(){return u+=1,i||u>t.iter?{done:!0}:{value:(a+=1)%t.period<c?t.max:t.min,done:!1}})),R(n,"return",(function(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}})),M&&R(n,M,(function(){return r(t)})),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSquareWave=e();
//# sourceMappingURL=browser.js.map
