// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var f=function(r,e,t){var n,f,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,f&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=f,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g,d=Object.prototype.hasOwnProperty;var b=function(r,e){return null!=r&&d.call(r,e)},h=b;var y=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&h(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},E=Object.prototype.toString,P=E;var O=function(r){return P.call(r)},_="function"==typeof Symbol?Symbol.toStringTag:"",x=b,T=_,S=E;var V=O,k=function(r){var e,t,n;if(null==r)return S.call(r);t=r[T],e=x(r,T);try{r[T]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[T]=t:delete r[T],n},I=j()?k:V,A=I;var F=Array.isArray?Array.isArray:function(r){return"[object Array]"===A(r)},R=F;var $=function(r){return"object"==typeof r&&null!==r&&!R(r)},M=/./;var C=function(r){return"boolean"==typeof r},N=Boolean.prototype.toString;var B=I,G=function(r){try{return N.call(r),!0}catch(r){return!1}},L=j();var Z=function(r){return"object"==typeof r&&(r instanceof Boolean||(L?G(r):"[object Boolean]"===B(r)))},W=C,X=Z;var z=m,U=function(r){return W(r)||X(r)},Y=Z;z(U,"isPrimitive",C),z(U,"isObject",Y);var D="object"==typeof self?self:null,q="object"==typeof window?window:null,H=U.isPrimitive,J=function(){return new Function("return this;")()},K=D,Q=q,rr=r(Object.freeze({__proto__:null}));var er=function(r){if(arguments.length){if(!H(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(rr)return rr;throw new Error("unexpected error. Unable to resolve global object.")},tr=er(),nr=tr.document&&tr.document.childNodes,ir=Int8Array,or=M,ar=nr,ur=ir;var cr=function(){return"function"==typeof or||"object"==typeof ur||"function"==typeof ar};var sr=function(){return/^\s*function\s*([^(]*)/i},fr=sr;m(fr,"REGEXP",sr());var lr=fr,pr=F;var vr=function(r){return null!==r&&"object"==typeof r};m(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var gr=vr;var mr=I,dr=lr.REGEXP,br=function(r){return gr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var hr=function(r){var e,t,n;if(("Object"===(t=mr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return br(r)?"Buffer":t},yr=hr;var wr=hr;var jr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?yr(r).toLowerCase():e},Er=function(r){return wr(r).toLowerCase()},Pr=cr()?Er:jr;var Or=function(r){return"function"===Pr(r)},_r=Object.getPrototypeOf;var xr=function(r){return r.__proto__},Tr=I,Sr=xr;var Vr=function(r){var e=Sr(r);return e||null===e?e:"[object Function]"===Tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},kr=_r,Ir=Vr,Ar=Or(Object.getPrototypeOf)?kr:Ir;var Fr=$,Rr=Or,$r=function(r){return null==r?null:(r=Object(r),Ar(r))},Mr=b,Cr=I,Nr=Object.prototype;var Br=function(r){var e;return!!Fr(r)&&(!(e=$r(r))||!Mr(r,"constructor")&&Mr(e,"constructor")&&Rr(e.constructor)&&"[object Function]"===Cr(e.constructor)&&Mr(e,"isPrototypeOf")&&Rr(e.isPrototypeOf)&&(e===Nr||function(r){var e;for(e in r)if(!Mr(r,e))return!1;return!0}(r)))},Gr=Br;var Lr=function(r){return"number"==typeof r},Zr=Number,Wr=Zr.prototype.toString;var Xr=I,zr=Zr,Ur=function(r){try{return Wr.call(r),!0}catch(r){return!1}},Yr=j();var Dr=function(r){return"object"==typeof r&&(r instanceof zr||(Yr?Ur(r):"[object Number]"===Xr(r)))},qr=Lr,Hr=Dr;var Jr=m,Kr=function(r){return qr(r)||Hr(r)},Qr=Dr;Jr(Kr,"isPrimitive",Lr),Jr(Kr,"isObject",Qr);var re=Kr,ee=Number.POSITIVE_INFINITY,te=Zr.NEGATIVE_INFINITY,ne=Math.floor;var ie=function(r){return ne(r)===r},oe=ee,ae=te,ue=ie;var ce=function(r){return r<oe&&r>ae&&ue(r)},se=re.isPrimitive,fe=ce;var le=function(r){return se(r)&&fe(r)},pe=re.isObject,ve=ce;var ge=function(r){return pe(r)&&ve(r.valueOf())},me=le,de=ge;var be=m,he=function(r){return me(r)||de(r)},ye=ge;be(he,"isPrimitive",le),be(he,"isObject",ye);var we=he,je=we.isPrimitive;var Ee=function(r){return je(r)&&r>0},Pe=we.isObject;var Oe=function(r){return Pe(r)&&r.valueOf()>0},_e=Ee,xe=Oe;var Te=m,Se=function(r){return _e(r)||xe(r)},Ve=Oe;Te(Se,"isPrimitive",Ee),Te(Se,"isObject",Ve);var ke=Se,Ie=we.isPrimitive;var Ae=function(r){return Ie(r)&&r>=0},Fe=we.isObject;var Re=function(r){return Fe(r)&&r.valueOf()>=0},$e=Ae,Me=Re;var Ce=m,Ne=function(r){return $e(r)||Me(r)},Be=Re;Ce(Ne,"isPrimitive",Ae),Ce(Ne,"isObject",Be);var Ge=Ne,Le=ie;var Ze=function(r){return Le(r/2)};var We=function(r){return r!=r};var Xe=function(r){return"string"==typeof r},ze=String.prototype.valueOf;var Ue=I,Ye=function(r){try{return ze.call(r),!0}catch(r){return!1}},De=j();var qe=function(r){return"object"==typeof r&&(r instanceof String||(De?Ye(r):"[object String]"===Ue(r)))},He=Xe,Je=qe;var Ke=m,Qe=function(r){return He(r)||Je(r)},rt=qe;Ke(Qe,"isPrimitive",Xe),Ke(Qe,"isObject",rt);var et=Qe,tt=ie;var nt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tt(r.length)&&r.length>=0&&r.length<=9007199254740991},it=re.isPrimitive,ot=We;var at=function(r){return it(r)&&ot(r)},ut=re.isObject,ct=We;var st=function(r){return ut(r)&&ct(r.valueOf())},ft=at,lt=st;var pt=m,vt=function(r){return ft(r)||lt(r)},gt=st;pt(vt,"isPrimitive",at),pt(vt,"isObject",gt);var mt=nt,dt=we.isPrimitive,bt=et.isPrimitive,ht=vt.isPrimitive;var yt=function(r,e,t){var n,i,o;if(!mt(r)&&!bt(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!dt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(bt(r)){if(!bt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,ht(e)){for(o=i;o<n;o++)if(ht(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},wt=et.isPrimitive;var jt=function(r){if(!wt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Et=et.isPrimitive;var Pt=function(r){if(!Et(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ot=jt,_t=Pt,xt=et.isPrimitive;var Tt=function(r){return xt(r)&&r===_t(r)&&r!==Ot(r)},St=ee,Vt=te;var kt=function(r){return r==r&&r>Vt&&r<St},It=Ge.isPrimitive,At=et.isPrimitive;var Ft=function(r,e){var t,n;if(!At(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!It(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Rt=we.isPrimitive,$t=et.isPrimitive;var Mt=Ft,Ct=function(r,e,t){var n,i;if(!$t(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!$t(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Rt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var Nt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Ct(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Mt("0",i):Mt("0",i)+r,n&&(r="-"+r)),r},Bt=Tt,Gt=Pt,Lt=jt,Zt=kt,Wt=re.isPrimitive,Xt=Nt;var zt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Zt(n)){if(!Wt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Xt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Xt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Bt(r.specifier)?Gt(t):Lt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ut=et.isPrimitive,Yt=/[-\/\\^$*+?.()|[\]{}]/g;var Dt=function(r){var e,t;if(!Ut(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Yt,"\\$&"):(e=(e=r.substring(1,t)).replace(Yt,"\\$&"),r=r[0]+e+r.substring(t))},qt=RegExp.prototype.exec;var Ht=I,Jt=function(r){try{return qt.call(r),!0}catch(r){return!1}},Kt=j();var Qt=Dt,rn=Or,en=et.isPrimitive,tn=function(r){return"object"==typeof r&&(r instanceof RegExp||(Kt?Jt(r):"[object RegExp]"===Ht(r)))};var nn=Tt,on=Pt,an=jt,un=function(r,e,t){if(!en(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(en(e))e=Qt(e),e=new RegExp(e,"g");else if(!tn(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!en(t)&&!rn(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},cn=kt,sn=re.isPrimitive,fn=function(r){return Math.abs(r)},ln=/e\+(\d)$/,pn=/e-(\d)$/,vn=/^(\d+)$/,gn=/^(\d+)e/,mn=/\.0$/,dn=/\.0*e/,bn=/(\..*[^0])0*e/;var hn=function(r){var e,t,n=parseFloat(r.arg);if(!cn(n)){if(!sn(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":fn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=un(t,bn,"$1e"),t=un(t,dn,"e"),t=un(t,mn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=un(t,ln,"e+0$1"),t=un(t,pn,"e-0$1"),r.alternate&&(t=un(t,vn,"$1."),t=un(t,gn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=nn(r.specifier)?on(t):an(t)},yn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var wn=Ft;var jn=et.isPrimitive,En=yt,Pn=We,On=zt,_n=hn,xn=function(r){var e,t,n,i,o;for(e=0,n=[],o=yn.exec(r);o;)(t=r.slice(e,yn.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=yn.lastIndex,o=yn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Tn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+wn(" ",n):wn(" ",n)+r},Sn=Nt,Vn=String.fromCharCode;var kn=Gr,In=b,An=re.isPrimitive,Fn=we.isPrimitive,Rn=ke.isPrimitive,$n=Ge.isPrimitive,Mn=Ze,Cn=We,Nn=function(r){var e,t,n,i,o,a,u,c,s;if(!jn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=xn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],jn(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!En(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Pn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Pn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=On(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Pn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Pn(o)?String(n.arg):Vn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=_n(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Sn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Tn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a};var Bn=m,Gn=y,Ln=function(r,e){return kn(e)?!In(e,"period")||(r.period=e.period,Rn(e.period)&&Mn(e.period))?In(e,"min")&&(r.min=e.min,!An(e.min)||Cn(e.min))?new TypeError(Nn("invalid option. `%s` option must be a number. Option: `%s`.","min",e.min)):In(e,"max")&&(r.max=e.max,!An(e.max)||Cn(e.max))?new TypeError(Nn("invalid option. `%s` option must be a number. Option: `%s`.","max",e.max)):In(e,"offset")&&(r.offset=e.offset,!Fn(e.offset))?new TypeError(Nn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):In(e,"iter")&&(r.iter=e.iter,!$n(e.iter))?new TypeError(Nn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(Nn("invalid option. `%s` option must be an positive even integer. Option: `%s`.","period",e.period)):new TypeError(Nn("invalid argument. Options argument must be an object. Value: `%s`.",e))};var Zn=function r(e){var t,n,i,o,a,u,c;if(t={period:10,min:-1,max:1,offset:0,iter:1e308},arguments.length&&(o=Ln(t,e)))throw o;return(a=(t.period-t.offset)%t.period)<0&&(a+=t.period),a-=1,u=t.period/2,c=0,Bn(n={},"next",s),Bn(n,"return",f),Gn&&Bn(n,Gn,l),n;function s(){return c+=1,i||c>t.iter?{done:!0}:{value:(a+=1)%t.period<u?t.max:t.min,done:!1}}function f(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t)}},Wn=Zn;export{Wn as default};
//# sourceMappingURL=mod.js.map
