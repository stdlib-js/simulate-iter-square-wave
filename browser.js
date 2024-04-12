// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=l.call(n,m,"$1e"),n=l.call(n,h,"e"),n=l.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,d,"e-0$1"),e.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):f.call(n)}function w(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,o,a,u,f,s,l,p,d,g,y;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",f=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,g=n.padRight,y=void 0,(y=d-p.length)<0?p:p=g?p+w(y):w(y)+p)),u+=n.arg||"",f+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,i;for(t=[],i=0,n=S.exec(e);n;)(r=e.slice(i,S.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),i=S.lastIndex,n=S.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[k(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var P,V=Object.prototype,A=V.toString,F=V.__defineGetter__,N=V.__defineSetter__,Z=V.__lookupGetter__,C=V.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||C.call(e,r)?(n=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var $=P;function R(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=Object.prototype.hasOwnProperty;function G(e,r){return null!=e&&B.call(e,r)}var L="function"==typeof Symbol?Symbol:void 0,M="function"==typeof L&&"symbol"==typeof L("foo")&&G(L,"iterator")&&"symbol"==typeof L.iterator?Symbol.iterator:null,W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y="function"==typeof L?L.toStringTag:"",q=U()?function(e){var r,t,n;if(null==e)return X.call(e);t=e[Y],r=G(e,Y);try{e[Y]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return X.call(e)},z=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)},Q=/./;function D(e){return"boolean"==typeof e}var H=Boolean,J=Boolean.prototype.toString,K=U();function ee(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function re(e){return D(e)||ee(e)}R(re,"isPrimitive",D),R(re,"isObject",ee);var te="object"==typeof self?self:null,ne="object"==typeof window?window:null,ie="object"==typeof globalThis?globalThis:null,oe=function(e){if(arguments.length){if(!D(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ie)return ie;if(te)return te;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=oe.document&&oe.document.childNodes,ce=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var fe=/^\s*function\s*([^(]*)/i;function se(e){return null!==e&&"object"==typeof e}function le(e){var r,t,n,i;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=fe.exec(n.toString()))return r[1]}return se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}R(ue,"REGEXP",fe),R(se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!z(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se));var pe="function"==typeof Q||"object"==typeof ce||"function"==typeof ae?function(e){return le(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?le(e).toLowerCase():r};function de(e){return"function"===pe(e)}var ge,ye=Object,be=Object.getPrototypeOf;ge=de(Object.getPrototypeOf)?be:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var he=ge,me=Object.prototype;function ve(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!z(e)}(e)&&(r=function(e){return null==e?null:(e=ye(e),he(e))}(e),!r||!G(e,"constructor")&&G(r,"constructor")&&de(r.constructor)&&"[object Function]"===q(r.constructor)&&G(r,"isPrototypeOf")&&de(r.isPrototypeOf)&&(r===me||function(e){var r;for(r in e)if(!G(e,r))return!1;return!0}(e)))}function we(e){return"number"==typeof e}var je=Number,_e=je.prototype.toString,Ee=U();function xe(e){return"object"==typeof e&&(e instanceof je||(Ee?function(e){try{return _e.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function Oe(e){return we(e)||xe(e)}R(Oe,"isPrimitive",we),R(Oe,"isObject",xe);var Se=Number.POSITIVE_INFINITY,Te=je.NEGATIVE_INFINITY,ke=Math.floor;function Ie(e){return ke(e)===e}function Pe(e){return e<Se&&e>Te&&Ie(e)}function Ve(e){return we(e)&&Pe(e)}function Ae(e){return xe(e)&&Pe(e.valueOf())}function Fe(e){return Ve(e)||Ae(e)}function Ne(e){return Ve(e)&&e>0}function Ze(e){return Ae(e)&&e.valueOf()>0}function Ce(e){return Ne(e)||Ze(e)}function $e(e){return Ve(e)&&e>=0}function Re(e){return Ae(e)&&e.valueOf()>=0}function Be(e){return $e(e)||Re(e)}function Ge(e){return e!=e}function Le(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function Me(e,r){return ve(r)?!G(r,"period")||(e.period=r.period,Ne(r.period)&&Ie(r.period/2))?G(r,"min")&&(e.min=r.min,!we(r.min)||Ge(r.min))?new TypeError(Le("0tZ8P","min",r.min)):G(r,"max")&&(e.max=r.max,!we(r.max)||Ge(r.max))?new TypeError(Le("0tZ8P","max",r.max)):G(r,"offset")&&(e.offset=r.offset,!Ve(r.offset))?new TypeError(Le("0tZ8M","offset",r.offset)):G(r,"iter")&&(e.iter=r.iter,!$e(r.iter))?new TypeError(Le("0tZ2t","iter",r.iter)):null:new TypeError(Le("0tZ8Q","period",r.period)):new TypeError(Le("0tZ2V",r))}return R(Fe,"isPrimitive",Ve),R(Fe,"isObject",Ae),R(Ce,"isPrimitive",Ne),R(Ce,"isObject",Ze),R(Be,"isPrimitive",$e),R(Be,"isObject",Re),function e(r){var t,n,i,o,a,c,u;if(t={period:10,min:-1,max:1,offset:0,iter:1e308},arguments.length&&(o=Me(t,r)))throw o;return(a=(t.period-t.offset)%t.period)<0&&(a+=t.period),a-=1,c=t.period/2,u=0,R(n={},"next",(function(){return u+=1,i||u>t.iter?{done:!0}:{value:(a+=1)%t.period<c?t.max:t.min,done:!1}})),R(n,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),M&&R(n,M,(function(){return e(t)})),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterSquareWave=r();
//# sourceMappingURL=browser.js.map
