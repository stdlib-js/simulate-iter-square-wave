// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,x=isNaN,O=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,x(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function A(r){return"string"==typeof r}function V(r){var e,t,n;if(!A(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var F,N=Object.prototype,Z=N.toString,C=N.__defineGetter__,G=N.__defineSetter__,$=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&G&&G.call(r,e,t.set),r};var B=F;function L(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U=Object.prototype.hasOwnProperty;function M(r,e){return null!=r&&U.call(r,e)}var W="function"==typeof Symbol?Symbol:void 0;var X="function"==typeof W&&"symbol"==typeof W("foo")&&M(W,"iterator")&&"symbol"==typeof W.iterator?Symbol.iterator:null;var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return J&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var D="function"==typeof W?W.toStringTag:"";var Q=Y()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[D],e=M(r,D);try{r[D]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[D]=t:delete r[D],n}:function(r){return z.call(r)};var q=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};var H=/./;function K(r){return"boolean"==typeof r}var rr=Boolean,er=Boolean.prototype.toString;var tr=Y();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function or(r){return K(r)||nr(r)}function ir(){return new Function("return this;")()}L(or,"isPrimitive",K),L(or,"isObject",nr);var ar="object"==typeof self?self:null,cr="object"==typeof window?window:null,ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},fr="object"==typeof ur?ur:null,lr="object"==typeof globalThis?globalThis:null;var sr=function(r){if(arguments.length){if(!K(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(lr)return lr;if(ar)return ar;if(cr)return cr;if(fr)return fr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=sr.document&&sr.document.childNodes,dr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;function br(r){return null!==r&&"object"==typeof r}function vr(r){var e,t,n,o;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(gr,"REGEXP",yr),L(br,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!q(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(br));var hr="function"==typeof H||"object"==typeof dr||"function"==typeof pr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};function mr(r){return"function"===hr(r)}var wr,jr=Object,_r=Object.getPrototypeOf;wr=mr(Object.getPrototypeOf)?_r:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=wr;var xr=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!q(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),Er(r))}(r),!e||!M(r,"constructor")&&M(e,"constructor")&&mr(e.constructor)&&"[object Function]"===Q(e.constructor)&&M(e,"isPrototypeOf")&&mr(e.isPrototypeOf)&&(e===xr||function(r){var e;for(e in r)if(!M(r,e))return!1;return!0}(r)))}function Sr(r){return"number"==typeof r}var Tr=Number,kr=Tr.prototype.toString;var Ir=Y();function Pr(r){return"object"==typeof r&&(r instanceof Tr||(Ir?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function Ar(r){return Sr(r)||Pr(r)}L(Ar,"isPrimitive",Sr),L(Ar,"isObject",Pr);var Vr=Number.POSITIVE_INFINITY,Fr=Tr.NEGATIVE_INFINITY,Nr=Math.floor;function Zr(r){return Nr(r)===r}function Cr(r){return r<Vr&&r>Fr&&Zr(r)}function Gr(r){return Sr(r)&&Cr(r)}function $r(r){return Pr(r)&&Cr(r.valueOf())}function Rr(r){return Gr(r)||$r(r)}function Br(r){return Gr(r)&&r>0}function Lr(r){return $r(r)&&r.valueOf()>0}function Ur(r){return Br(r)||Lr(r)}function Mr(r){return Gr(r)&&r>=0}function Wr(r){return $r(r)&&r.valueOf()>=0}function Xr(r){return Mr(r)||Wr(r)}function Jr(r){return r!=r}function Yr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function zr(r,e){return Or(e)?!M(e,"period")||(r.period=e.period,Br(e.period)&&Zr(e.period/2))?M(e,"min")&&(r.min=e.min,!Sr(e.min)||Jr(e.min))?new TypeError(Yr("0tZ8P,GU","min",e.min)):M(e,"max")&&(r.max=e.max,!Sr(e.max)||Jr(e.max))?new TypeError(Yr("0tZ8P,GU","max",e.max)):M(e,"offset")&&(r.offset=e.offset,!Gr(e.offset))?new TypeError(Yr("0tZ8M,JG","offset",e.offset)):M(e,"iter")&&(r.iter=e.iter,!Mr(e.iter))?new TypeError(Yr("0tZ2t,G9","iter",e.iter)):null:new TypeError(Yr("0tZ8Q,JL","period",e.period)):new TypeError(Yr("0tZ2V,FD",e))}function Dr(r){var e,t,n,o,i,a,c;if(e={period:10,min:-1,max:1,offset:0,iter:1e308},arguments.length&&(o=zr(e,r)))throw o;return(i=(e.period-e.offset)%e.period)<0&&(i+=e.period),i-=1,a=e.period/2,c=0,L(t={},"next",u),L(t,"return",f),X&&L(t,X,l),t;function u(){return c+=1,n||c>e.iter?{done:!0}:{value:(i+=1)%e.period<a?e.max:e.min,done:!1}}function f(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return Dr(e)}}L(Rr,"isPrimitive",Gr),L(Rr,"isObject",$r),L(Ur,"isPrimitive",Br),L(Ur,"isObject",Lr),L(Xr,"isPrimitive",Mr),L(Xr,"isObject",Wr);export{Dr as default};
//# sourceMappingURL=mod.js.map