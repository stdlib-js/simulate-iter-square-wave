// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-even@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function f(e,r){return t(r)?!s(r,"period")||(e.period=r.period,o(r.period)&&d(r.period))?s(r,"min")&&(e.min=r.min,!i(r.min)||p(r.min))?new TypeError(a("0Rg8h","min",r.min)):s(r,"max")&&(e.max=r.max,!i(r.max)||p(r.max))?new TypeError(a("0Rg8h","max",r.max)):s(r,"offset")&&(e.offset=r.offset,!n(r.offset))?new TypeError(a("0Rg8e","offset",r.offset)):s(r,"iter")&&(e.iter=r.iter,!m(r.iter))?new TypeError(a("0Rg35","iter",r.iter)):null:new TypeError(a("0Rg8i","period",r.period)):new TypeError(a("0Rg2h",r))}function l(t){var s,i,n,o,m,d,p;if(s={period:10,min:-1,max:1,offset:0,iter:1e308},arguments.length&&(o=f(s,t)))throw o;return(m=(s.period-s.offset)%s.period)<0&&(m+=s.period),m-=1,d=s.period/2,p=0,e(i={},"next",a),e(i,"return",j),r&&e(i,r,h),i;function a(){return p+=1,n||p>s.iter?{done:!0}:{value:(m+=1)%s.period<d?s.max:s.min,done:!1}}function j(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return l(s)}}export{l as default};
//# sourceMappingURL=index.mjs.map