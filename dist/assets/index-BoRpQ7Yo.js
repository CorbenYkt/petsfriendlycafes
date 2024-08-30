var cg=Object.defineProperty;var dg=(e,t,n)=>t in e?cg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ju=(e,t,n)=>dg(e,typeof t!="symbol"?t+"":t,n);function pg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vd={exports:{}},us={},Wd={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ai=Symbol.for("react.element"),fg=Symbol.for("react.portal"),hg=Symbol.for("react.fragment"),gg=Symbol.for("react.strict_mode"),mg=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),wg=Symbol.for("react.forward_ref"),_g=Symbol.for("react.suspense"),Eg=Symbol.for("react.memo"),xg=Symbol.for("react.lazy"),Uu=Symbol.iterator;function Sg(e){return e===null||typeof e!="object"?null:(e=Uu&&e[Uu]||e["@@iterator"],typeof e=="function"?e:null)}var Gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yd=Object.assign,Kd={};function Pr(e,t,n){this.props=e,this.context=t,this.refs=Kd,this.updater=n||Gd}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qd(){}qd.prototype=Pr.prototype;function Aa(e,t,n){this.props=e,this.context=t,this.refs=Kd,this.updater=n||Gd}var $a=Aa.prototype=new qd;$a.constructor=Aa;Yd($a,Pr.prototype);$a.isPureReactComponent=!0;var Fu=Array.isArray,Qd=Object.prototype.hasOwnProperty,Na={current:null},Xd={key:!0,ref:!0,__self:!0,__source:!0};function Zd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Qd.call(t,r)&&!Xd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ai,type:e,key:o,ref:s,props:i,_owner:Na.current}}function Cg(e,t){return{$$typeof:Ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ai}function Lg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bu=/\/+/g;function Fs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lg(""+e.key):t.toString(36)}function lo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ai:case fg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Fs(s,0):r,Fu(i)?(n="",e!=null&&(n=e.replace(Bu,"$&/")+"/"),lo(i,t,n,"",function(u){return u})):i!=null&&(Ia(i)&&(i=Cg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Bu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Fu(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Fs(o,l);s+=lo(o,t,n,a,i)}else if(a=Sg(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Fs(o,l++),s+=lo(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Bi(e,t,n){if(e==null)return e;var r=[],i=0;return lo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Pg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},ao={transition:null},kg={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:ao,ReactCurrentOwner:Na};function Jd(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Bi,forEach:function(e,t,n){Bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bi(e,function(){t++}),t},toArray:function(e){return Bi(e,function(t){return t})||[]},only:function(e){if(!Ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Pr;z.Fragment=hg;z.Profiler=mg;z.PureComponent=Aa;z.StrictMode=gg;z.Suspense=_g;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kg;z.act=Jd;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Na.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Qd.call(t,a)&&!Xd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ai,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:yg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vg,_context:e},e.Consumer=e};z.createElement=Zd;z.createFactory=function(e){var t=Zd.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:wg,render:e}};z.isValidElement=Ia;z.lazy=function(e){return{$$typeof:xg,_payload:{_status:-1,_result:e},_init:Pg}};z.memo=function(e,t){return{$$typeof:Eg,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=ao.transition;ao.transition={};try{e()}finally{ao.transition=t}};z.unstable_act=Jd;z.useCallback=function(e,t){return Ae.current.useCallback(e,t)};z.useContext=function(e){return Ae.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ae.current.useEffect(e,t)};z.useId=function(){return Ae.current.useId()};z.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ae.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};z.useRef=function(e){return Ae.current.useRef(e)};z.useState=function(e){return Ae.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ae.current.useTransition()};z.version="18.3.1";Wd.exports=z;var x=Wd.exports;const W=Hd(x),ee=pg({__proto__:null,default:W},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og=x,Ag=Symbol.for("react.element"),$g=Symbol.for("react.fragment"),Ng=Object.prototype.hasOwnProperty,Ig=Og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rg={key:!0,ref:!0,__self:!0,__source:!0};function ep(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ng.call(t,r)&&!Rg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ag,type:e,key:o,ref:s,props:i,_owner:Ig.current}}us.Fragment=$g;us.jsx=ep;us.jsxs=ep;Vd.exports=us;var I=Vd.exports,tp={exports:{}},Ge={},np={exports:{}},rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,T){var D=R.length;R.push(T);e:for(;0<D;){var re=D-1>>>1,ue=R[re];if(0<i(ue,T))R[re]=T,R[D]=ue,D=re;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var T=R[0],D=R.pop();if(D!==T){R[0]=D;e:for(var re=0,ue=R.length,Ui=ue>>>1;re<Ui;){var hn=2*(re+1)-1,Us=R[hn],gn=hn+1,Fi=R[gn];if(0>i(Us,D))gn<ue&&0>i(Fi,Us)?(R[re]=Fi,R[gn]=D,re=gn):(R[re]=Us,R[hn]=D,re=hn);else if(gn<ue&&0>i(Fi,D))R[re]=Fi,R[gn]=D,re=gn;else break e}}return T}function i(R,T){var D=R.sortIndex-T.sortIndex;return D!==0?D:R.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],d=1,c=null,f=3,m=!1,v=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=R)r(u),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(u)}}function _(R){if(w=!1,g(R),!v)if(n(a)!==null)v=!0,zs(L);else{var T=n(u);T!==null&&js(_,T.startTime-R)}}function L(R,T){v=!1,w&&(w=!1,h($),$=-1),m=!0;var D=f;try{for(g(T),c=n(a);c!==null&&(!(c.expirationTime>T)||R&&!Ie());){var re=c.callback;if(typeof re=="function"){c.callback=null,f=c.priorityLevel;var ue=re(c.expirationTime<=T);T=e.unstable_now(),typeof ue=="function"?c.callback=ue:c===n(a)&&r(a),g(T)}else r(a);c=n(a)}if(c!==null)var Ui=!0;else{var hn=n(u);hn!==null&&js(_,hn.startTime-T),Ui=!1}return Ui}finally{c=null,f=D,m=!1}}var A=!1,O=null,$=-1,H=5,b=-1;function Ie(){return!(e.unstable_now()-b<H)}function je(){if(O!==null){var R=e.unstable_now();b=R;var T=!0;try{T=O(!0,R)}finally{T?Bn():(A=!1,O=null)}}else A=!1}var Bn;if(typeof p=="function")Bn=function(){p(je)};else if(typeof MessageChannel<"u"){var ji=new MessageChannel,Ds=ji.port2;ji.port1.onmessage=je,Bn=function(){Ds.postMessage(null)}}else Bn=function(){P(je,0)};function zs(R){O=R,A||(A=!0,Bn())}function js(R,T){$=P(function(){R(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,zs(L))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var D=f;f=T;try{return R()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,T){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var D=f;f=R;try{return T()}finally{f=D}},e.unstable_scheduleCallback=function(R,T,D){var re=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?re+D:re):D=re,R){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=D+ue,R={id:d++,callback:T,priorityLevel:R,startTime:D,expirationTime:ue,sortIndex:-1},D>re?(R.sortIndex=D,t(u,R),n(a)===null&&R===n(u)&&(w?(h($),$=-1):w=!0,js(_,D-re))):(R.sortIndex=ue,t(a,R),v||m||(v=!0,zs(L))),R},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(R){var T=f;return function(){var D=f;f=T;try{return R.apply(this,arguments)}finally{f=D}}}})(rp);np.exports=rp;var bg=np.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg=x,He=bg;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ip=new Set,ni={};function Un(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(ni[e]=t,e=0;e<t.length;e++)ip.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=Object.prototype.hasOwnProperty,Mg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hu={},Vu={};function Dg(e){return Sl.call(Vu,e)?!0:Sl.call(Hu,e)?!1:Mg.test(e)?Vu[e]=!0:(Hu[e]=!0,!1)}function zg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jg(e,t,n,r){if(t===null||typeof t>"u"||zg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ra=/[\-:]([a-z])/g;function ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ra,ba);ye[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ra,ba);ye[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ra,ba);ye[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ta(e,t,n,r){var i=ye.hasOwnProperty(t)?ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jg(t,n,i,r)&&(n=null),r||i===null?Dg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hi=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Ma=Symbol.for("react.strict_mode"),Cl=Symbol.for("react.profiler"),op=Symbol.for("react.provider"),sp=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Pl=Symbol.for("react.suspense_list"),za=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),lp=Symbol.for("react.offscreen"),Wu=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=Wu&&e[Wu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Bs;function jr(e){if(Bs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bs=t&&t[1]||""}return`
`+Bs+e}var Hs=!1;function Vs(e,t){if(!e||Hs)return"";Hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Hs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jr(e):""}function Ug(e){switch(e.tag){case 5:return jr(e.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 2:case 15:return e=Vs(e.type,!1),e;case 11:return e=Vs(e.type.render,!1),e;case 1:return e=Vs(e.type,!0),e;default:return""}}function kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Yn:return"Portal";case Cl:return"Profiler";case Ma:return"StrictMode";case Ll:return"Suspense";case Pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sp:return(e.displayName||"Context")+".Consumer";case op:return(e._context.displayName||"Context")+".Provider";case Da:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case za:return t=e.displayName||null,t!==null?t:kl(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return kl(e(t))}catch{}}return null}function Fg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kl(t);case 8:return t===Ma?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ap(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bg(e){var t=ap(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vi(e){e._valueTracker||(e._valueTracker=Bg(e))}function up(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ap(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cp(e,t){t=t.checked,t!=null&&Ta(e,"checked",t,!1)}function Al(e,t){cp(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$l(e,t.type,n):t.hasOwnProperty("defaultValue")&&$l(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $l(e,t,n){(t!=="number"||So(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ur=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ku(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Ur(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function dp(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wi,fp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hg=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){Hg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function hp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function gp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vg=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rl(e,t){if(t){if(Vg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ml=null,lr=null,ar=null;function Qu(e){if(e=Ii(e)){if(typeof Ml!="function")throw Error(C(280));var t=e.stateNode;t&&(t=hs(t),Ml(e.stateNode,e.type,t))}}function mp(e){lr?ar?ar.push(e):ar=[e]:lr=e}function vp(){if(lr){var e=lr,t=ar;if(ar=lr=null,Qu(e),t)for(e=0;e<t.length;e++)Qu(t[e])}}function yp(e,t){return e(t)}function wp(){}var Ws=!1;function _p(e,t,n){if(Ws)return e(t,n);Ws=!0;try{return yp(e,t,n)}finally{Ws=!1,(lr!==null||ar!==null)&&(wp(),vp())}}function ii(e,t){var n=e.stateNode;if(n===null)return null;var r=hs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Dl=!1;if(Rt)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Dl=!1}function Wg(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Vr=!1,Co=null,Lo=!1,zl=null,Gg={onError:function(e){Vr=!0,Co=e}};function Yg(e,t,n,r,i,o,s,l,a){Vr=!1,Co=null,Wg.apply(Gg,arguments)}function Kg(e,t,n,r,i,o,s,l,a){if(Yg.apply(this,arguments),Vr){if(Vr){var u=Co;Vr=!1,Co=null}else throw Error(C(198));Lo||(Lo=!0,zl=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ep(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xu(e){if(Fn(e)!==e)throw Error(C(188))}function qg(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Xu(i),e;if(o===r)return Xu(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function xp(e){return e=qg(e),e!==null?Sp(e):null}function Sp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sp(e);if(t!==null)return t;e=e.sibling}return null}var Cp=He.unstable_scheduleCallback,Zu=He.unstable_cancelCallback,Qg=He.unstable_shouldYield,Xg=He.unstable_requestPaint,ie=He.unstable_now,Zg=He.unstable_getCurrentPriorityLevel,Ua=He.unstable_ImmediatePriority,Lp=He.unstable_UserBlockingPriority,Po=He.unstable_NormalPriority,Jg=He.unstable_LowPriority,Pp=He.unstable_IdlePriority,cs=null,wt=null;function em(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(cs,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:rm,tm=Math.log,nm=Math.LN2;function rm(e){return e>>>=0,e===0?32:31-(tm(e)/nm|0)|0}var Gi=64,Yi=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ko(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Fr(l):(o&=s,o!==0&&(r=Fr(o)))}else s=n&~i,s!==0?r=Fr(s):o!==0&&(r=Fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function im(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function om(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ut(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=im(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kp(){var e=Gi;return Gi<<=1,!(Gi&4194240)&&(Gi=64),e}function Gs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function sm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Fa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function Op(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ap,Ba,$p,Np,Ip,Ul=!1,Ki=[],Qt=null,Xt=null,Zt=null,oi=new Map,si=new Map,Wt=[],lm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ju(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function Nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ii(t),t!==null&&Ba(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function am(e,t,n,r,i){switch(t){case"focusin":return Qt=Nr(Qt,e,t,n,r,i),!0;case"dragenter":return Xt=Nr(Xt,e,t,n,r,i),!0;case"mouseover":return Zt=Nr(Zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return oi.set(o,Nr(oi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,si.set(o,Nr(si.get(o)||null,e,t,n,r,i)),!0}return!1}function Rp(e){var t=xn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ep(n),t!==null){e.blockedOn=t,Ip(e.priority,function(){$p(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tl=r,n.target.dispatchEvent(r),Tl=null}else return t=Ii(n),t!==null&&Ba(t),e.blockedOn=n,!1;t.shift()}return!0}function ec(e,t,n){uo(e)&&n.delete(t)}function um(){Ul=!1,Qt!==null&&uo(Qt)&&(Qt=null),Xt!==null&&uo(Xt)&&(Xt=null),Zt!==null&&uo(Zt)&&(Zt=null),oi.forEach(ec),si.forEach(ec)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ul||(Ul=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,um)))}function li(e){function t(i){return Ir(i,e)}if(0<Ki.length){Ir(Ki[0],e);for(var n=1;n<Ki.length;n++){var r=Ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Ir(Qt,e),Xt!==null&&Ir(Xt,e),Zt!==null&&Ir(Zt,e),oi.forEach(t),si.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)Rp(n),n.blockedOn===null&&Wt.shift()}var ur=Ft.ReactCurrentBatchConfig,Oo=!0;function cm(e,t,n,r){var i=B,o=ur.transition;ur.transition=null;try{B=1,Ha(e,t,n,r)}finally{B=i,ur.transition=o}}function dm(e,t,n,r){var i=B,o=ur.transition;ur.transition=null;try{B=4,Ha(e,t,n,r)}finally{B=i,ur.transition=o}}function Ha(e,t,n,r){if(Oo){var i=Fl(e,t,n,r);if(i===null)nl(e,t,r,Ao,n),Ju(e,r);else if(am(i,e,t,n,r))r.stopPropagation();else if(Ju(e,r),t&4&&-1<lm.indexOf(e)){for(;i!==null;){var o=Ii(i);if(o!==null&&Ap(o),o=Fl(e,t,n,r),o===null&&nl(e,t,r,Ao,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else nl(e,t,r,null,n)}}var Ao=null;function Fl(e,t,n,r){if(Ao=null,e=ja(r),e=xn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ep(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ao=e,null}function bp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zg()){case Ua:return 1;case Lp:return 4;case Po:case Jg:return 16;case Pp:return 536870912;default:return 16}default:return 16}}var Yt=null,Va=null,co=null;function Tp(){if(co)return co;var e,t=Va,n=t.length,r,i="value"in Yt?Yt.value:Yt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return co=i.slice(e,1<r?1-r:void 0)}function po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function tc(){return!1}function Ye(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qi:tc,this.isPropagationStopped=tc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Ye(kr),Ni=J({},kr,{view:0,detail:0}),pm=Ye(Ni),Ys,Ks,Rr,ds=J({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rr&&(Rr&&e.type==="mousemove"?(Ys=e.screenX-Rr.screenX,Ks=e.screenY-Rr.screenY):Ks=Ys=0,Rr=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Ks}}),nc=Ye(ds),fm=J({},ds,{dataTransfer:0}),hm=Ye(fm),gm=J({},Ni,{relatedTarget:0}),qs=Ye(gm),mm=J({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=Ye(mm),ym=J({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wm=Ye(ym),_m=J({},kr,{data:0}),rc=Ye(_m),Em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sm[e])?!!t[e]:!1}function Ga(){return Cm}var Lm=J({},Ni,{key:function(e){if(e.key){var t=Em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ga,charCode:function(e){return e.type==="keypress"?po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=Ye(Lm),km=J({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=Ye(km),Om=J({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ga}),Am=Ye(Om),$m=J({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nm=Ye($m),Im=J({},ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rm=Ye(Im),bm=[9,13,27,32],Ya=Rt&&"CompositionEvent"in window,Wr=null;Rt&&"documentMode"in document&&(Wr=document.documentMode);var Tm=Rt&&"TextEvent"in window&&!Wr,Mp=Rt&&(!Ya||Wr&&8<Wr&&11>=Wr),oc=" ",sc=!1;function Dp(e,t){switch(e){case"keyup":return bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function Mm(e,t){switch(e){case"compositionend":return zp(t);case"keypress":return t.which!==32?null:(sc=!0,oc);case"textInput":return e=t.data,e===oc&&sc?null:e;default:return null}}function Dm(e,t){if(qn)return e==="compositionend"||!Ya&&Dp(e,t)?(e=Tp(),co=Va=Yt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mp&&t.locale!=="ko"?null:t.data;default:return null}}var zm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zm[e.type]:t==="textarea"}function jp(e,t,n,r){mp(r),t=$o(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,ai=null;function jm(e){Qp(e,0)}function ps(e){var t=Zn(e);if(up(t))return e}function Um(e,t){if(e==="change")return t}var Up=!1;if(Rt){var Qs;if(Rt){var Xs="oninput"in document;if(!Xs){var ac=document.createElement("div");ac.setAttribute("oninput","return;"),Xs=typeof ac.oninput=="function"}Qs=Xs}else Qs=!1;Up=Qs&&(!document.documentMode||9<document.documentMode)}function uc(){Gr&&(Gr.detachEvent("onpropertychange",Fp),ai=Gr=null)}function Fp(e){if(e.propertyName==="value"&&ps(ai)){var t=[];jp(t,ai,e,ja(e)),_p(jm,t)}}function Fm(e,t,n){e==="focusin"?(uc(),Gr=t,ai=n,Gr.attachEvent("onpropertychange",Fp)):e==="focusout"&&uc()}function Bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(ai)}function Hm(e,t){if(e==="click")return ps(t)}function Vm(e,t){if(e==="input"||e==="change")return ps(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Wm;function ui(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sl.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dc(e,t){var n=cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cc(n)}}function Bp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hp(){for(var e=window,t=So();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=So(e.document)}return t}function Ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gm(e){var t=Hp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bp(n.ownerDocument.documentElement,n)){if(r!==null&&Ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=dc(n,o);var s=dc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ym=Rt&&"documentMode"in document&&11>=document.documentMode,Qn=null,Bl=null,Yr=null,Hl=!1;function pc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||Qn==null||Qn!==So(r)||(r=Qn,"selectionStart"in r&&Ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&ui(Yr,r)||(Yr=r,r=$o(Bl,"onSelect"),0<r.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function Qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},Zs={},Vp={};Rt&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function fs(e){if(Zs[e])return Zs[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vp)return Zs[e]=t[n];return e}var Wp=fs("animationend"),Gp=fs("animationiteration"),Yp=fs("animationstart"),Kp=fs("transitionend"),qp=new Map,fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){qp.set(e,t),Un(t,[e])}for(var Js=0;Js<fc.length;Js++){var el=fc[Js],Km=el.toLowerCase(),qm=el[0].toUpperCase()+el.slice(1);cn(Km,"on"+qm)}cn(Wp,"onAnimationEnd");cn(Gp,"onAnimationIteration");cn(Yp,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Kp,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function hc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kg(r,t,void 0,e),e.currentTarget=null}function Qp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;hc(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;hc(i,l,u),o=a}}}if(Lo)throw e=zl,Lo=!1,zl=null,e}function G(e,t){var n=t[Kl];n===void 0&&(n=t[Kl]=new Set);var r=e+"__bubble";n.has(r)||(Xp(t,e,2,!1),n.add(r))}function tl(e,t,n){var r=0;t&&(r|=4),Xp(n,e,r,t)}var Xi="_reactListening"+Math.random().toString(36).slice(2);function ci(e){if(!e[Xi]){e[Xi]=!0,ip.forEach(function(n){n!=="selectionchange"&&(Qm.has(n)||tl(n,!1,e),tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xi]||(t[Xi]=!0,tl("selectionchange",!1,t))}}function Xp(e,t,n,r){switch(bp(t)){case 1:var i=cm;break;case 4:i=dm;break;default:i=Ha}n=i.bind(null,t,n,e),i=void 0,!Dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=xn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}_p(function(){var u=o,d=ja(n),c=[];e:{var f=qp.get(e);if(f!==void 0){var m=Wa,v=e;switch(e){case"keypress":if(po(n)===0)break e;case"keydown":case"keyup":m=Pm;break;case"focusin":v="focus",m=qs;break;case"focusout":v="blur",m=qs;break;case"beforeblur":case"afterblur":m=qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Am;break;case Wp:case Gp:case Yp:m=vm;break;case Kp:m=Nm;break;case"scroll":m=pm;break;case"wheel":m=Rm;break;case"copy":case"cut":case"paste":m=wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ic}var w=(t&4)!==0,P=!w&&e==="scroll",h=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,g;p!==null;){g=p;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,h!==null&&(_=ii(p,h),_!=null&&w.push(di(p,_,g)))),P)break;p=p.return}0<w.length&&(f=new m(f,v,null,n,d),c.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Tl&&(v=n.relatedTarget||n.fromElement)&&(xn(v)||v[bt]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?xn(v):null,v!==null&&(P=Fn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=nc,_="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=ic,_="onPointerLeave",h="onPointerEnter",p="pointer"),P=m==null?f:Zn(m),g=v==null?f:Zn(v),f=new w(_,p+"leave",m,n,d),f.target=P,f.relatedTarget=g,_=null,xn(d)===u&&(w=new w(h,p+"enter",v,n,d),w.target=g,w.relatedTarget=P,_=w),P=_,m&&v)t:{for(w=m,h=v,p=0,g=w;g;g=Hn(g))p++;for(g=0,_=h;_;_=Hn(_))g++;for(;0<p-g;)w=Hn(w),p--;for(;0<g-p;)h=Hn(h),g--;for(;p--;){if(w===h||h!==null&&w===h.alternate)break t;w=Hn(w),h=Hn(h)}w=null}else w=null;m!==null&&gc(c,f,m,w,!1),v!==null&&P!==null&&gc(c,P,v,w,!0)}}e:{if(f=u?Zn(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var L=Um;else if(lc(f))if(Up)L=Vm;else{L=Bm;var A=Fm}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=Hm);if(L&&(L=L(e,u))){jp(c,L,n,d);break e}A&&A(e,f,u),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&$l(f,"number",f.value)}switch(A=u?Zn(u):window,e){case"focusin":(lc(A)||A.contentEditable==="true")&&(Qn=A,Bl=u,Yr=null);break;case"focusout":Yr=Bl=Qn=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,pc(c,n,d);break;case"selectionchange":if(Ym)break;case"keydown":case"keyup":pc(c,n,d)}var O;if(Ya)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else qn?Dp(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Mp&&n.locale!=="ko"&&(qn||$!=="onCompositionStart"?$==="onCompositionEnd"&&qn&&(O=Tp()):(Yt=d,Va="value"in Yt?Yt.value:Yt.textContent,qn=!0)),A=$o(u,$),0<A.length&&($=new rc($,e,null,n,d),c.push({event:$,listeners:A}),O?$.data=O:(O=zp(n),O!==null&&($.data=O)))),(O=Tm?Mm(e,n):Dm(e,n))&&(u=$o(u,"onBeforeInput"),0<u.length&&(d=new rc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=O))}Qp(c,t)})}function di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $o(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ii(e,n),o!=null&&r.unshift(di(e,o,i)),o=ii(e,t),o!=null&&r.push(di(e,o,i))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ii(n,o),a!=null&&s.unshift(di(n,a,l))):i||(a=ii(n,o),a!=null&&s.push(di(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Xm=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function mc(e){return(typeof e=="string"?e:""+e).replace(Xm,`
`).replace(Zm,"")}function Zi(e,t,n){if(t=mc(t),mc(e)!==t&&n)throw Error(C(425))}function No(){}var Vl=null,Wl=null;function Gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,Jm=typeof clearTimeout=="function"?clearTimeout:void 0,vc=typeof Promise=="function"?Promise:void 0,ev=typeof queueMicrotask=="function"?queueMicrotask:typeof vc<"u"?function(e){return vc.resolve(null).then(e).catch(tv)}:Yl;function tv(e){setTimeout(function(){throw e})}function rl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),vt="__reactFiber$"+Or,pi="__reactProps$"+Or,bt="__reactContainer$"+Or,Kl="__reactEvents$"+Or,nv="__reactListeners$"+Or,rv="__reactHandles$"+Or;function xn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yc(e);e!==null;){if(n=e[vt])return n;e=yc(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[vt]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function hs(e){return e[pi]||null}var ql=[],Jn=-1;function dn(e){return{current:e}}function Y(e){0>Jn||(e.current=ql[Jn],ql[Jn]=null,Jn--)}function V(e,t){Jn++,ql[Jn]=e.current,e.current=t}var ln={},Se=dn(ln),Te=dn(!1),Nn=ln;function gr(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Me(e){return e=e.childContextTypes,e!=null}function Io(){Y(Te),Y(Se)}function wc(e,t,n){if(Se.current!==ln)throw Error(C(168));V(Se,t),V(Te,n)}function Zp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,Fg(e)||"Unknown",i));return J({},n,r)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Nn=Se.current,V(Se,e),V(Te,Te.current),!0}function _c(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Zp(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,Y(Te),Y(Se),V(Se,e)):Y(Te),V(Te,n)}var Lt=null,gs=!1,il=!1;function Jp(e){Lt===null?Lt=[e]:Lt.push(e)}function iv(e){gs=!0,Jp(e)}function pn(){if(!il&&Lt!==null){il=!0;var e=0,t=B;try{var n=Lt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,gs=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(e+1)),Cp(Ua,pn),i}finally{B=t,il=!1}}return null}var er=[],tr=0,bo=null,To=0,Ke=[],qe=0,In=null,Ot=1,At="";function yn(e,t){er[tr++]=To,er[tr++]=bo,bo=e,To=t}function ef(e,t,n){Ke[qe++]=Ot,Ke[qe++]=At,Ke[qe++]=In,In=e;var r=Ot;e=At;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var o=32-ut(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ot=1<<32-ut(t)+i|n<<i|r,At=o+e}else Ot=1<<o|n<<i|r,At=e}function qa(e){e.return!==null&&(yn(e,1),ef(e,1,0))}function Qa(e){for(;e===bo;)bo=er[--tr],er[tr]=null,To=er[--tr],er[tr]=null;for(;e===In;)In=Ke[--qe],Ke[qe]=null,At=Ke[--qe],Ke[qe]=null,Ot=Ke[--qe],Ke[qe]=null}var Be=null,Fe=null,q=!1,at=null;function tf(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Fe=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Ot,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Fe=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xl(e){if(q){var t=Fe;if(t){var n=t;if(!Ec(e,t)){if(Ql(e))throw Error(C(418));t=Jt(n.nextSibling);var r=Be;t&&Ec(e,t)?tf(r,n):(e.flags=e.flags&-4097|2,q=!1,Be=e)}}else{if(Ql(e))throw Error(C(418));e.flags=e.flags&-4097|2,q=!1,Be=e}}}function xc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Ji(e){if(e!==Be)return!1;if(!q)return xc(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gl(e.type,e.memoizedProps)),t&&(t=Fe)){if(Ql(e))throw nf(),Error(C(418));for(;t;)tf(e,t),t=Jt(t.nextSibling)}if(xc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Be?Jt(e.stateNode.nextSibling):null;return!0}function nf(){for(var e=Fe;e;)e=Jt(e.nextSibling)}function mr(){Fe=Be=null,q=!1}function Xa(e){at===null?at=[e]:at.push(e)}var ov=Ft.ReactCurrentBatchConfig;function br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function eo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sc(e){var t=e._init;return t(e._payload)}function rf(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=rn(h,p),h.index=0,h.sibling=null,h}function o(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,_){return p===null||p.tag!==6?(p=dl(g,h.mode,_),p.return=h,p):(p=i(p,g),p.return=h,p)}function a(h,p,g,_){var L=g.type;return L===Kn?d(h,p,g.props.children,_,g.key):p!==null&&(p.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ht&&Sc(L)===p.type)?(_=i(p,g.props),_.ref=br(h,p,g),_.return=h,_):(_=wo(g.type,g.key,g.props,null,h.mode,_),_.ref=br(h,p,g),_.return=h,_)}function u(h,p,g,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=pl(g,h.mode,_),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function d(h,p,g,_,L){return p===null||p.tag!==7?(p=On(g,h.mode,_,L),p.return=h,p):(p=i(p,g),p.return=h,p)}function c(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=dl(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hi:return g=wo(p.type,p.key,p.props,null,h.mode,g),g.ref=br(h,null,p),g.return=h,g;case Yn:return p=pl(p,h.mode,g),p.return=h,p;case Ht:var _=p._init;return c(h,_(p._payload),g)}if(Ur(p)||Ar(p))return p=On(p,h.mode,g,null),p.return=h,p;eo(h,p)}return null}function f(h,p,g,_){var L=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:l(h,p,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Hi:return g.key===L?a(h,p,g,_):null;case Yn:return g.key===L?u(h,p,g,_):null;case Ht:return L=g._init,f(h,p,L(g._payload),_)}if(Ur(g)||Ar(g))return L!==null?null:d(h,p,g,_,null);eo(h,g)}return null}function m(h,p,g,_,L){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(g)||null,l(p,h,""+_,L);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Hi:return h=h.get(_.key===null?g:_.key)||null,a(p,h,_,L);case Yn:return h=h.get(_.key===null?g:_.key)||null,u(p,h,_,L);case Ht:var A=_._init;return m(h,p,g,A(_._payload),L)}if(Ur(_)||Ar(_))return h=h.get(g)||null,d(p,h,_,L,null);eo(p,_)}return null}function v(h,p,g,_){for(var L=null,A=null,O=p,$=p=0,H=null;O!==null&&$<g.length;$++){O.index>$?(H=O,O=null):H=O.sibling;var b=f(h,O,g[$],_);if(b===null){O===null&&(O=H);break}e&&O&&b.alternate===null&&t(h,O),p=o(b,p,$),A===null?L=b:A.sibling=b,A=b,O=H}if($===g.length)return n(h,O),q&&yn(h,$),L;if(O===null){for(;$<g.length;$++)O=c(h,g[$],_),O!==null&&(p=o(O,p,$),A===null?L=O:A.sibling=O,A=O);return q&&yn(h,$),L}for(O=r(h,O);$<g.length;$++)H=m(O,h,$,g[$],_),H!==null&&(e&&H.alternate!==null&&O.delete(H.key===null?$:H.key),p=o(H,p,$),A===null?L=H:A.sibling=H,A=H);return e&&O.forEach(function(Ie){return t(h,Ie)}),q&&yn(h,$),L}function w(h,p,g,_){var L=Ar(g);if(typeof L!="function")throw Error(C(150));if(g=L.call(g),g==null)throw Error(C(151));for(var A=L=null,O=p,$=p=0,H=null,b=g.next();O!==null&&!b.done;$++,b=g.next()){O.index>$?(H=O,O=null):H=O.sibling;var Ie=f(h,O,b.value,_);if(Ie===null){O===null&&(O=H);break}e&&O&&Ie.alternate===null&&t(h,O),p=o(Ie,p,$),A===null?L=Ie:A.sibling=Ie,A=Ie,O=H}if(b.done)return n(h,O),q&&yn(h,$),L;if(O===null){for(;!b.done;$++,b=g.next())b=c(h,b.value,_),b!==null&&(p=o(b,p,$),A===null?L=b:A.sibling=b,A=b);return q&&yn(h,$),L}for(O=r(h,O);!b.done;$++,b=g.next())b=m(O,h,$,b.value,_),b!==null&&(e&&b.alternate!==null&&O.delete(b.key===null?$:b.key),p=o(b,p,$),A===null?L=b:A.sibling=b,A=b);return e&&O.forEach(function(je){return t(h,je)}),q&&yn(h,$),L}function P(h,p,g,_){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Hi:e:{for(var L=g.key,A=p;A!==null;){if(A.key===L){if(L=g.type,L===Kn){if(A.tag===7){n(h,A.sibling),p=i(A,g.props.children),p.return=h,h=p;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ht&&Sc(L)===A.type){n(h,A.sibling),p=i(A,g.props),p.ref=br(h,A,g),p.return=h,h=p;break e}n(h,A);break}else t(h,A);A=A.sibling}g.type===Kn?(p=On(g.props.children,h.mode,_,g.key),p.return=h,h=p):(_=wo(g.type,g.key,g.props,null,h.mode,_),_.ref=br(h,p,g),_.return=h,h=_)}return s(h);case Yn:e:{for(A=g.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=pl(g,h.mode,_),p.return=h,h=p}return s(h);case Ht:return A=g._init,P(h,p,A(g._payload),_)}if(Ur(g))return v(h,p,g,_);if(Ar(g))return w(h,p,g,_);eo(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,g),p.return=h,h=p):(n(h,p),p=dl(g,h.mode,_),p.return=h,h=p),s(h)):n(h,p)}return P}var vr=rf(!0),of=rf(!1),Mo=dn(null),Do=null,nr=null,Za=null;function Ja(){Za=nr=Do=null}function eu(e){var t=Mo.current;Y(Mo),e._currentValue=t}function Zl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){Do=e,Za=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(Za!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Do===null)throw Error(C(308));nr=e,Do.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Sn=null;function tu(e){Sn===null?Sn=[e]:Sn.push(e)}function sf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,tu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tt(e,n)}return i=r.interleaved,i===null?(t.next=t,tu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tt(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fa(e,n)}}function Cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zo(e,t,n,r){var i=e.updateQueue;Vt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(o!==null){var c=i.baseState;s=0,d=u=a=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(f=t,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(m,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(m,c,f):v,f==null)break e;c=J({},c,f);break e;case 2:Vt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,a=c):d=d.next=m,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);bn|=s,e.lanes=s,e.memoizedState=c}}function Lc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Ri={},_t=dn(Ri),fi=dn(Ri),hi=dn(Ri);function Cn(e){if(e===Ri)throw Error(C(174));return e}function ru(e,t){switch(V(hi,t),V(fi,e),V(_t,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Il(t,e)}Y(_t),V(_t,t)}function yr(){Y(_t),Y(fi),Y(hi)}function af(e){Cn(hi.current);var t=Cn(_t.current),n=Il(t,e.type);t!==n&&(V(fi,e),V(_t,n))}function iu(e){fi.current===e&&(Y(_t),Y(fi))}var X=dn(0);function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ol=[];function ou(){for(var e=0;e<ol.length;e++)ol[e]._workInProgressVersionPrimary=null;ol.length=0}var ho=Ft.ReactCurrentDispatcher,sl=Ft.ReactCurrentBatchConfig,Rn=0,Z=null,se=null,de=null,Uo=!1,Kr=!1,gi=0,sv=0;function _e(){throw Error(C(321))}function su(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function lu(e,t,n,r,i,o){if(Rn=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ho.current=e===null||e.memoizedState===null?cv:dv,e=n(r,i),Kr){o=0;do{if(Kr=!1,gi=0,25<=o)throw Error(C(301));o+=1,de=se=null,t.updateQueue=null,ho.current=pv,e=n(r,i)}while(Kr)}if(ho.current=Fo,t=se!==null&&se.next!==null,Rn=0,de=se=Z=null,Uo=!1,t)throw Error(C(300));return e}function au(){var e=gi!==0;return gi=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=e:de=de.next=e,de}function Je(){if(se===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=de===null?Z.memoizedState:de.next;if(t!==null)de=t,se=e;else{if(e===null)throw Error(C(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?Z.memoizedState=de=e:de=de.next=e}return de}function mi(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=Je(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var d=u.lane;if((Rn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,s=r):a=a.next=c,Z.lanes|=d,bn|=d}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,dt(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function al(e){var t=Je(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);dt(o,t.memoizedState)||(be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uf(){}function cf(e,t){var n=Z,r=Je(),i=t(),o=!dt(r.memoizedState,i);if(o&&(r.memoizedState=i,be=!0),r=r.queue,uu(ff.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,vi(9,pf.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(C(349));Rn&30||df(n,t,i)}return i}function df(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pf(e,t,n,r){t.value=n,t.getSnapshot=r,hf(t)&&gf(e)}function ff(e,t,n){return n(function(){hf(t)&&gf(e)})}function hf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function gf(e){var t=Tt(e,1);t!==null&&ct(t,e,1,-1)}function Pc(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=uv.bind(null,Z,e),[t.memoizedState,e]}function vi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mf(){return Je().memoizedState}function go(e,t,n,r){var i=ht();Z.flags|=e,i.memoizedState=vi(1|t,n,void 0,r===void 0?null:r)}function ms(e,t,n,r){var i=Je();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&su(r,s.deps)){i.memoizedState=vi(t,n,o,r);return}}Z.flags|=e,i.memoizedState=vi(1|t,n,o,r)}function kc(e,t){return go(8390656,8,e,t)}function uu(e,t){return ms(2048,8,e,t)}function vf(e,t){return ms(4,2,e,t)}function yf(e,t){return ms(4,4,e,t)}function wf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _f(e,t,n){return n=n!=null?n.concat([e]):null,ms(4,4,wf.bind(null,t,e),n)}function cu(){}function Ef(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&su(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xf(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&su(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sf(e,t,n){return Rn&21?(dt(n,t)||(n=kp(),Z.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function lv(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{B=n,sl.transition=r}}function Cf(){return Je().memoizedState}function av(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lf(e))Pf(t,n);else if(n=sf(e,t,n,r),n!==null){var i=ke();ct(n,e,r,i),kf(n,t,r)}}function uv(e,t,n){var r=nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))Pf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,dt(l,s)){var a=t.interleaved;a===null?(i.next=i,tu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=sf(e,t,i,r),n!==null&&(i=ke(),ct(n,e,r,i),kf(n,t,r))}}function Lf(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Pf(e,t){Kr=Uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fa(e,n)}}var Fo={readContext:Ze,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},cv={readContext:Ze,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:kc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,go(4194308,4,wf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){return go(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=av.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:Pc,useDebugValue:cu,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=Pc(!1),t=e[0];return e=lv.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=ht();if(q){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),pe===null)throw Error(C(349));Rn&30||df(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,kc(ff.bind(null,r,o,e),[e]),r.flags|=2048,vi(9,pf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ht(),t=pe.identifierPrefix;if(q){var n=At,r=Ot;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dv={readContext:Ze,useCallback:Ef,useContext:Ze,useEffect:uu,useImperativeHandle:_f,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:xf,useReducer:ll,useRef:mf,useState:function(){return ll(mi)},useDebugValue:cu,useDeferredValue:function(e){var t=Je();return Sf(t,se.memoizedState,e)},useTransition:function(){var e=ll(mi)[0],t=Je().memoizedState;return[e,t]},useMutableSource:uf,useSyncExternalStore:cf,useId:Cf,unstable_isNewReconciler:!1},pv={readContext:Ze,useCallback:Ef,useContext:Ze,useEffect:uu,useImperativeHandle:_f,useInsertionEffect:vf,useLayoutEffect:yf,useMemo:xf,useReducer:al,useRef:mf,useState:function(){return al(mi)},useDebugValue:cu,useDeferredValue:function(e){var t=Je();return se===null?t.memoizedState=e:Sf(t,se.memoizedState,e)},useTransition:function(){var e=al(mi)[0],t=Je().memoizedState;return[e,t]},useMutableSource:uf,useSyncExternalStore:cf,useId:Cf,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vs={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=nn(e),o=Nt(r,i);o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(ct(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=nn(e),o=Nt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(ct(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=nn(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,r),t!==null&&(ct(t,e,r,n),fo(t,e,r))}};function Oc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ui(n,r)||!ui(i,o):!0}function Of(e,t,n){var r=!1,i=ln,o=t.contextType;return typeof o=="object"&&o!==null?o=Ze(o):(i=Me(t)?Nn:Se.current,r=t.contextTypes,o=(r=r!=null)?gr(e,i):ln),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ac(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function ea(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},nu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ze(o):(o=Me(t)?Nn:Se.current,i.context=gr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Jl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&vs.enqueueReplaceState(i,i.state,null),zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t){try{var n="",r=t;do n+=Ug(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ta(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fv=typeof WeakMap=="function"?WeakMap:Map;function Af(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ho||(Ho=!0,da=r),ta(e,t)},n}function $f(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ta(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ta(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function $c(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=kv.bind(null,e,t,n),t.then(e,e))}function Nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ic(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var hv=Ft.ReactCurrentOwner,be=!1;function Le(e,t,n,r){t.child=e===null?of(t,null,n,r):vr(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var o=t.ref;return cr(t,i),r=lu(e,t,n,r,o,i),n=au(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(q&&n&&qa(t),t.flags|=1,Le(e,t,r,i),t.child)}function bc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!yu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Nf(e,t,o,r,i)):(e=wo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(s,r)&&e.ref===t.ref)return Mt(e,t,i)}return t.flags|=1,e=rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Nf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ui(o,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Mt(e,t,i)}return na(e,t,n,r,i)}function If(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(ir,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(ir,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(ir,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(ir,Ue),Ue|=r;return Le(e,t,i,n),t.child}function Rf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function na(e,t,n,r,i){var o=Me(n)?Nn:Se.current;return o=gr(t,o),cr(t,i),n=lu(e,t,n,r,o,i),r=au(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(q&&r&&qa(t),t.flags|=1,Le(e,t,n,i),t.child)}function Tc(e,t,n,r,i){if(Me(n)){var o=!0;Ro(t)}else o=!1;if(cr(t,i),t.stateNode===null)mo(e,t),Of(t,n,r),ea(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Me(n)?Nn:Se.current,u=gr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Ac(t,s,r,u),Vt=!1;var f=t.memoizedState;s.state=f,zo(t,r,s,i),a=t.memoizedState,l!==r||f!==a||Te.current||Vt?(typeof d=="function"&&(Jl(t,n,d,r),a=t.memoizedState),(l=Vt||Oc(t,n,l,r,f,a,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,lf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:it(t.type,l),s.props=u,c=t.pendingProps,f=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ze(a):(a=Me(n)?Nn:Se.current,a=gr(t,a));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==c||f!==a)&&Ac(t,s,r,a),Vt=!1,f=t.memoizedState,s.state=f,zo(t,r,s,i);var v=t.memoizedState;l!==c||f!==v||Te.current||Vt?(typeof m=="function"&&(Jl(t,n,m,r),v=t.memoizedState),(u=Vt||Oc(t,n,u,r,f,v,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ra(e,t,n,r,o,i)}function ra(e,t,n,r,i,o){Rf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&_c(t,n,!1),Mt(e,t,o);r=t.stateNode,hv.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=vr(t,e.child,null,o),t.child=vr(t,null,l,o)):Le(e,t,l,o),t.memoizedState=r.state,i&&_c(t,n,!0),t.child}function bf(e){var t=e.stateNode;t.pendingContext?wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wc(e,t.context,!1),ru(e,t.containerInfo)}function Mc(e,t,n,r,i){return mr(),Xa(i),t.flags|=256,Le(e,t,n,r),t.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tf(e,t,n){var r=t.pendingProps,i=X.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(X,i&1),e===null)return Xl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_s(s,r,0,null),e=On(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=oa(n),t.memoizedState=ia,e):du(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gv(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=rn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=rn(l,o):(o=On(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?oa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ia,r}return o=e.child,e=o.sibling,r=rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function du(e,t){return t=_s({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,n,r){return r!==null&&Xa(r),vr(t,e.child,null,n),e=du(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(C(422))),to(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=_s({mode:"visible",children:r.children},i,0,null),o=On(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vr(t,e.child,null,s),t.child.memoizedState=oa(s),t.memoizedState=ia,o);if(!(t.mode&1))return to(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(C(419)),r=ul(o,r,void 0),to(e,t,s,r)}if(l=(s&e.childLanes)!==0,be||l){if(r=pe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Tt(e,i),ct(r,e,i,-1))}return vu(),r=ul(Error(C(421))),to(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ov.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Fe=Jt(i.nextSibling),Be=t,q=!0,at=null,e!==null&&(Ke[qe++]=Ot,Ke[qe++]=At,Ke[qe++]=In,Ot=e.id,At=e.overflow,In=t),t=du(t,r.children),t.flags|=4096,t)}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zl(e.return,t,n)}function cl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Le(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&jo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,o);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mv(e,t,n){switch(t.tag){case 3:bf(t),mr();break;case 5:af(t);break;case 1:Me(t.type)&&Ro(t);break;case 4:ru(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Mo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Tf(e,t,n):(V(X,X.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);V(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,If(e,t,n)}return Mt(e,t,n)}var Df,sa,zf,jf;Df=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sa=function(){};zf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Cn(_t.current);var o=null;switch(n){case"input":i=Ol(e,i),r=Ol(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=Nl(e,i),r=Nl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=No)}Rl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ni.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ni.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&G("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vv(e,t,n){var r=t.pendingProps;switch(Qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Me(t.type)&&Io(),Ee(t),null;case 3:return r=t.stateNode,yr(),Y(Te),Y(Se),ou(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(ha(at),at=null))),sa(e,t),Ee(t),null;case 5:iu(t);var i=Cn(hi.current);if(n=t.type,e!==null&&t.stateNode!=null)zf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ee(t),null}if(e=Cn(_t.current),Ji(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vt]=t,r[pi]=o,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)G(Br[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Gu(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":Ku(r,o),G("invalid",r)}Rl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,l,e),i=["children",""+l]):ni.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":Vi(r),Yu(r,o,!0);break;case"textarea":Vi(r),qu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=No)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[vt]=t,e[pi]=r,Df(e,t,!1,!1),t.stateNode=e;e:{switch(s=bl(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)G(Br[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":Gu(e,r),i=Ol(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),G("invalid",e);break;case"textarea":Ku(e,r),i=Nl(e,r),G("invalid",e);break;default:i=r}Rl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?gp(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fp(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ri(e,a):typeof a=="number"&&ri(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ni.hasOwnProperty(o)?a!=null&&o==="onScroll"&&G("scroll",e):a!=null&&Ta(e,o,a,s))}switch(n){case"input":Vi(e),Yu(e,r,!1);break;case"textarea":Vi(e),qu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sr(e,!!r.multiple,o,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Cn(hi.current),Cn(_t.current),Ji(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(o=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Ee(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Fe!==null&&t.mode&1&&!(t.flags&128))nf(),mr(),t.flags|=98560,o=!1;else if(o=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[vt]=t}else mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else at!==null&&(ha(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ae===0&&(ae=3):vu())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return yr(),sa(e,t),e===null&&ci(t.stateNode.containerInfo),Ee(t),null;case 10:return eu(t.type._context),Ee(t),null;case 17:return Me(t.type)&&Io(),Ee(t),null;case 19:if(Y(X),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Tr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=jo(e),s!==null){for(t.flags|=128,Tr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(X,X.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>_r&&(t.flags|=128,r=!0,Tr(o,!1),t.lanes=4194304)}else{if(!r)if(e=jo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return Ee(t),null}else 2*ie()-o.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Tr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,n=X.current,V(X,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function yv(e,t){switch(Qa(t),t.tag){case 1:return Me(t.type)&&Io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),Y(Te),Y(Se),ou(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return iu(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return yr(),null;case 10:return eu(t.type._context),null;case 22:case 23:return mu(),null;case 24:return null;default:return null}}var no=!1,xe=!1,wv=typeof WeakSet=="function"?WeakSet:Set,N=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function la(e,t,n){try{n()}catch(r){te(e,t,r)}}var zc=!1;function _v(e,t){if(Vl=Oo,e=Hp(),Ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var m;c!==n||i!==0&&c.nodeType!==3||(l=s+i),c!==o||r!==0&&c.nodeType!==3||(a=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(m=c.firstChild)!==null;)f=c,c=m;for(;;){if(c===e)break t;if(f===n&&++u===i&&(l=s),f===o&&++d===r&&(a=s),(m=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wl={focusedElem:e,selectionRange:n},Oo=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,P=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:it(t.type,w),P);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(_){te(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=zc,zc=!1,v}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&la(t,n,o)}i=i.next}while(i!==r)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uf(e){var t=e.alternate;t!==null&&(e.alternate=null,Uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[pi],delete t[Kl],delete t[nv],delete t[rv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ff(e){return e.tag===5||e.tag===3||e.tag===4}function jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=No));else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}var ge=null,ot=!1;function Bt(e,t,n){for(n=n.child;n!==null;)Bf(e,t,n),n=n.sibling}function Bf(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(cs,n)}catch{}switch(n.tag){case 5:xe||rr(n,t);case 6:var r=ge,i=ot;ge=null,Bt(e,t,n),ge=r,ot=i,ge!==null&&(ot?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(ot?(e=ge,n=n.stateNode,e.nodeType===8?rl(e.parentNode,n):e.nodeType===1&&rl(e,n),li(e)):rl(ge,n.stateNode));break;case 4:r=ge,i=ot,ge=n.stateNode.containerInfo,ot=!0,Bt(e,t,n),ge=r,ot=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&la(n,t,s),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!xe&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Bt(e,t,n),xe=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function Uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wv),t.forEach(function(r){var i=Av.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,ot=!1;break e;case 3:ge=l.stateNode.containerInfo,ot=!0;break e;case 4:ge=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(ge===null)throw Error(C(160));Bf(o,s,i),ge=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hf(t,e),t=t.sibling}function Hf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),ft(e),r&4){try{qr(3,e,e.return),ys(3,e)}catch(w){te(e,e.return,w)}try{qr(5,e,e.return)}catch(w){te(e,e.return,w)}}break;case 1:nt(t,e),ft(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(nt(t,e),ft(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var i=e.stateNode;try{ri(i,"")}catch(w){te(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&cp(i,o),bl(l,s);var u=bl(l,o);for(s=0;s<a.length;s+=2){var d=a[s],c=a[s+1];d==="style"?gp(i,c):d==="dangerouslySetInnerHTML"?fp(i,c):d==="children"?ri(i,c):Ta(i,d,c,u)}switch(l){case"input":Al(i,o);break;case"textarea":dp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?sr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?sr(i,!!o.multiple,o.defaultValue,!0):sr(i,!!o.multiple,o.multiple?[]:"",!1))}i[pi]=o}catch(w){te(e,e.return,w)}}break;case 6:if(nt(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){te(e,e.return,w)}}break;case 3:if(nt(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(w){te(e,e.return,w)}break;case 4:nt(t,e),ft(e);break;case 13:nt(t,e),ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hu=ie())),r&4&&Uc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||d,nt(t,e),xe=u):nt(t,e),ft(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(c=N=d;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:qr(4,f,f.return);break;case 1:rr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){te(r,n,w)}}break;case 5:rr(f,f.return);break;case 22:if(f.memoizedState!==null){Bc(c);continue}}m!==null?(m.return=f,N=m):Bc(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,a=c.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=hp("display",s))}catch(w){te(e,e.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){te(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:nt(t,e),ft(e),r&4&&Uc(e);break;case 21:break;default:nt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ff(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ri(i,""),r.flags&=-33);var o=jc(e);ca(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=jc(e);ua(e,l,s);break;default:throw Error(C(161))}}catch(a){te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ev(e,t,n){N=e,Vf(e)}function Vf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||no;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||xe;l=no;var u=xe;if(no=s,(xe=a)&&!u)for(N=i;N!==null;)s=N,a=s.child,s.tag===22&&s.memoizedState!==null?Hc(i):a!==null?(a.return=s,N=a):Hc(i);for(;o!==null;)N=o,Vf(o),o=o.sibling;N=i,no=l,xe=u}Fc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Fc(e)}}function Fc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||ys(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Lc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lc(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&li(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}xe||t.flags&512&&aa(t)}catch(f){te(t,t.return,f)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Bc(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Hc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(a){te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){te(t,i,a)}}var o=t.return;try{aa(t)}catch(a){te(t,o,a)}break;case 5:var s=t.return;try{aa(t)}catch(a){te(t,s,a)}}}catch(a){te(t,t.return,a)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var xv=Math.ceil,Bo=Ft.ReactCurrentDispatcher,pu=Ft.ReactCurrentOwner,Xe=Ft.ReactCurrentBatchConfig,U=0,pe=null,oe=null,ve=0,Ue=0,ir=dn(0),ae=0,yi=null,bn=0,ws=0,fu=0,Qr=null,Re=null,hu=0,_r=1/0,Ct=null,Ho=!1,da=null,tn=null,ro=!1,Kt=null,Vo=0,Xr=0,pa=null,vo=-1,yo=0;function ke(){return U&6?ie():vo!==-1?vo:vo=ie()}function nn(e){return e.mode&1?U&2&&ve!==0?ve&-ve:ov.transition!==null?(yo===0&&(yo=kp()),yo):(e=B,e!==0||(e=window.event,e=e===void 0?16:bp(e.type)),e):1}function ct(e,t,n,r){if(50<Xr)throw Xr=0,pa=null,Error(C(185));$i(e,n,r),(!(U&2)||e!==pe)&&(e===pe&&(!(U&2)&&(ws|=n),ae===4&&Gt(e,ve)),De(e,r),n===1&&U===0&&!(t.mode&1)&&(_r=ie()+500,gs&&pn()))}function De(e,t){var n=e.callbackNode;om(e,t);var r=ko(e,e===pe?ve:0);if(r===0)n!==null&&Zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zu(n),t===1)e.tag===0?iv(Vc.bind(null,e)):Jp(Vc.bind(null,e)),ev(function(){!(U&6)&&pn()}),n=null;else{switch(Op(r)){case 1:n=Ua;break;case 4:n=Lp;break;case 16:n=Po;break;case 536870912:n=Pp;break;default:n=Po}n=Zf(n,Wf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wf(e,t){if(vo=-1,yo=0,U&6)throw Error(C(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=ko(e,e===pe?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wo(e,r);else{t=r;var i=U;U|=2;var o=Yf();(pe!==e||ve!==t)&&(Ct=null,_r=ie()+500,kn(e,t));do try{Lv();break}catch(l){Gf(e,l)}while(!0);Ja(),Bo.current=o,U=i,oe!==null?t=0:(pe=null,ve=0,t=ae)}if(t!==0){if(t===2&&(i=jl(e),i!==0&&(r=i,t=fa(e,i))),t===1)throw n=yi,kn(e,0),Gt(e,r),De(e,ie()),n;if(t===6)Gt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Sv(i)&&(t=Wo(e,r),t===2&&(o=jl(e),o!==0&&(r=o,t=fa(e,o))),t===1))throw n=yi,kn(e,0),Gt(e,r),De(e,ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:wn(e,Re,Ct);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=hu+500-ie(),10<t)){if(ko(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yl(wn.bind(null,e,Re,Ct),t);break}wn(e,Re,Ct);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ut(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xv(r/1960))-r,10<r){e.timeoutHandle=Yl(wn.bind(null,e,Re,Ct),r);break}wn(e,Re,Ct);break;case 5:wn(e,Re,Ct);break;default:throw Error(C(329))}}}return De(e,ie()),e.callbackNode===n?Wf.bind(null,e):null}function fa(e,t){var n=Qr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Wo(e,t),e!==2&&(t=Re,Re=n,t!==null&&ha(t)),e}function ha(e){Re===null?Re=e:Re.push.apply(Re,e)}function Sv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~fu,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function Vc(e){if(U&6)throw Error(C(327));dr();var t=ko(e,0);if(!(t&1))return De(e,ie()),null;var n=Wo(e,t);if(e.tag!==0&&n===2){var r=jl(e);r!==0&&(t=r,n=fa(e,r))}if(n===1)throw n=yi,kn(e,0),Gt(e,t),De(e,ie()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Re,Ct),De(e,ie()),null}function gu(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(_r=ie()+500,gs&&pn())}}function Tn(e){Kt!==null&&Kt.tag===0&&!(U&6)&&dr();var t=U;U|=1;var n=Xe.transition,r=B;try{if(Xe.transition=null,B=1,e)return e()}finally{B=r,Xe.transition=n,U=t,!(U&6)&&pn()}}function mu(){Ue=ir.current,Y(ir)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jm(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Io();break;case 3:yr(),Y(Te),Y(Se),ou();break;case 5:iu(r);break;case 4:yr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:eu(r.type._context);break;case 22:case 23:mu()}n=n.return}if(pe=e,oe=e=rn(e.current,null),ve=Ue=t,ae=0,yi=null,fu=ws=bn=0,Re=Qr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Sn=null}return e}function Gf(e,t){do{var n=oe;try{if(Ja(),ho.current=Fo,Uo){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uo=!1}if(Rn=0,de=se=Z=null,Kr=!1,gi=0,pu.current=null,n===null||n.return===null){ae=1,yi=t,oe=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Nc(s);if(m!==null){m.flags&=-257,Ic(m,s,l,o,t),m.mode&1&&$c(o,u,t),t=m,a=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(a),t.updateQueue=w}else v.add(a);break e}else{if(!(t&1)){$c(o,u,t),vu();break e}a=Error(C(426))}}else if(q&&l.mode&1){var P=Nc(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ic(P,s,l,o,t),Xa(wr(a,l));break e}}o=a=wr(a,l),ae!==4&&(ae=2),Qr===null?Qr=[o]:Qr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Af(o,a,t);Cc(o,h);break e;case 1:l=a;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(tn===null||!tn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=$f(o,l,t);Cc(o,_);break e}}o=o.return}while(o!==null)}qf(n)}catch(L){t=L,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Yf(){var e=Bo.current;return Bo.current=Fo,e===null?Fo:e}function vu(){(ae===0||ae===3||ae===2)&&(ae=4),pe===null||!(bn&268435455)&&!(ws&268435455)||Gt(pe,ve)}function Wo(e,t){var n=U;U|=2;var r=Yf();(pe!==e||ve!==t)&&(Ct=null,kn(e,t));do try{Cv();break}catch(i){Gf(e,i)}while(!0);if(Ja(),U=n,Bo.current=r,oe!==null)throw Error(C(261));return pe=null,ve=0,ae}function Cv(){for(;oe!==null;)Kf(oe)}function Lv(){for(;oe!==null&&!Qg();)Kf(oe)}function Kf(e){var t=Xf(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?qf(e):oe=t,pu.current=null}function qf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yv(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(n=vv(n,t,Ue),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ae===0&&(ae=5)}function wn(e,t,n){var r=B,i=Xe.transition;try{Xe.transition=null,B=1,Pv(e,t,n,r)}finally{Xe.transition=i,B=r}return null}function Pv(e,t,n,r){do dr();while(Kt!==null);if(U&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sm(e,o),e===pe&&(oe=pe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,Zf(Po,function(){return dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Xe.transition,Xe.transition=null;var s=B;B=1;var l=U;U|=4,pu.current=null,_v(e,n),Hf(n,e),Gm(Wl),Oo=!!Vl,Wl=Vl=null,e.current=n,Ev(n),Xg(),U=l,B=s,Xe.transition=o}else e.current=n;if(ro&&(ro=!1,Kt=e,Vo=i),o=e.pendingLanes,o===0&&(tn=null),em(n.stateNode),De(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ho)throw Ho=!1,e=da,da=null,e;return Vo&1&&e.tag!==0&&dr(),o=e.pendingLanes,o&1?e===pa?Xr++:(Xr=0,pa=e):Xr=0,pn(),null}function dr(){if(Kt!==null){var e=Op(Vo),t=Xe.transition,n=B;try{if(Xe.transition=null,B=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,Vo=0,U&6)throw Error(C(331));var i=U;for(U|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:qr(8,d,o)}var c=d.child;if(c!==null)c.return=d,N=c;else for(;N!==null;){d=N;var f=d.sibling,m=d.return;if(Uf(d),d===u){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,N=h;break e}N=o.return}}var p=e.current;for(N=p;N!==null;){s=N;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,N=g;else e:for(s=p;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ys(9,l)}}catch(L){te(l,l.return,L)}if(l===s){N=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,N=_;break e}N=l.return}}if(U=i,pn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(cs,e)}catch{}r=!0}return r}finally{B=n,Xe.transition=t}}return!1}function Wc(e,t,n){t=wr(n,t),t=Af(e,t,1),e=en(e,t,1),t=ke(),e!==null&&($i(e,1,t),De(e,t))}function te(e,t,n){if(e.tag===3)Wc(e,e,n);else for(;t!==null;){if(t.tag===3){Wc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=wr(n,e),e=$f(t,e,1),t=en(t,e,1),e=ke(),t!==null&&($i(t,1,e),De(t,e));break}}t=t.return}}function kv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ve&n)===n&&(ae===4||ae===3&&(ve&130023424)===ve&&500>ie()-hu?kn(e,0):fu|=n),De(e,t)}function Qf(e,t){t===0&&(e.mode&1?(t=Yi,Yi<<=1,!(Yi&130023424)&&(Yi=4194304)):t=1);var n=ke();e=Tt(e,t),e!==null&&($i(e,t,n),De(e,n))}function Ov(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qf(e,n)}function Av(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Qf(e,n)}var Xf;Xf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,mv(e,t,n);be=!!(e.flags&131072)}else be=!1,q&&t.flags&1048576&&ef(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mo(e,t),e=t.pendingProps;var i=gr(t,Se.current);cr(t,n),i=lu(null,t,r,e,i,n);var o=au();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(o=!0,Ro(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nu(t),i.updater=vs,t.stateNode=i,i._reactInternals=t,ea(t,r,e,n),t=ra(null,t,r,!0,o,n)):(t.tag=0,q&&o&&qa(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Nv(r),e=it(r,e),i){case 0:t=na(null,t,r,e,n);break e;case 1:t=Tc(null,t,r,e,n);break e;case 11:t=Rc(null,t,r,e,n);break e;case 14:t=bc(null,t,r,it(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),na(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Tc(e,t,r,i,n);case 3:e:{if(bf(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,lf(e,t),zo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=wr(Error(C(423)),t),t=Mc(e,t,r,n,i);break e}else if(r!==i){i=wr(Error(C(424)),t),t=Mc(e,t,r,n,i);break e}else for(Fe=Jt(t.stateNode.containerInfo.firstChild),Be=t,q=!0,at=null,n=of(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mr(),r===i){t=Mt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return af(t),e===null&&Xl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Gl(r,i)?s=null:o!==null&&Gl(r,o)&&(t.flags|=32),Rf(e,t),Le(e,t,s,n),t.child;case 6:return e===null&&Xl(t),null;case 13:return Tf(e,t,n);case 4:return ru(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Rc(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,V(Mo,r._currentValue),r._currentValue=s,o!==null)if(dt(o.value,s)){if(o.children===i.children&&!Te.current){t=Mt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Nt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zl(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(C(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cr(t,n),i=Ze(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),bc(e,t,r,i,n);case 15:return Nf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),mo(e,t),t.tag=1,Me(r)?(e=!0,Ro(t)):e=!1,cr(t,n),Of(t,r,i),ea(t,r,i,n),ra(null,t,r,!0,e,n);case 19:return Mf(e,t,n);case 22:return If(e,t,n)}throw Error(C(156,t.tag))};function Zf(e,t){return Cp(e,t)}function $v(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new $v(e,t,n,r)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nv(e){if(typeof e=="function")return yu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Da)return 11;if(e===za)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")yu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Kn:return On(n.children,i,o,t);case Ma:s=8,i|=8;break;case Cl:return e=Qe(12,n,t,i|2),e.elementType=Cl,e.lanes=o,e;case Ll:return e=Qe(13,n,t,i),e.elementType=Ll,e.lanes=o,e;case Pl:return e=Qe(19,n,t,i),e.elementType=Pl,e.lanes=o,e;case lp:return _s(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case op:s=10;break e;case sp:s=9;break e;case Da:s=11;break e;case za:s=14;break e;case Ht:s=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Qe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function On(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function _s(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=lp,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function pl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Iv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gs(0),this.expirationTimes=Gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wu(e,t,n,r,i,o,s,l,a){return e=new Iv(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(o),e}function Rv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jf(e){if(!e)return ln;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Me(n))return Zp(e,n,t)}return t}function eh(e,t,n,r,i,o,s,l,a){return e=wu(n,r,!0,e,i,o,s,l,a),e.context=Jf(null),n=e.current,r=ke(),i=nn(n),o=Nt(r,i),o.callback=t??null,en(n,o,i),e.current.lanes=i,$i(e,i,r),De(e,r),e}function Es(e,t,n,r){var i=t.current,o=ke(),s=nn(i);return n=Jf(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(i,t,s),e!==null&&(ct(e,i,s,o),fo(e,i,s)),s}function Go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _u(e,t){Gc(e,t),(e=e.alternate)&&Gc(e,t)}function bv(){return null}var th=typeof reportError=="function"?reportError:function(e){console.error(e)};function Eu(e){this._internalRoot=e}xs.prototype.render=Eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Es(e,t,null,null)};xs.prototype.unmount=Eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){Es(null,e,null,null)}),t[bt]=null}};function xs(e){this._internalRoot=e}xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Np();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&Rp(e)}};function xu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yc(){}function Tv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Go(s);o.call(u)}}var s=eh(t,r,e,0,null,!1,!1,"",Yc);return e._reactRootContainer=s,e[bt]=s.current,ci(e.nodeType===8?e.parentNode:e),Tn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Go(a);l.call(u)}}var a=wu(e,0,!1,null,null,!1,!1,"",Yc);return e._reactRootContainer=a,e[bt]=a.current,ci(e.nodeType===8?e.parentNode:e),Tn(function(){Es(t,a,n,r)}),a}function Cs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Go(s);l.call(a)}}Es(t,s,e,i)}else s=Tv(n,t,e,i,r);return Go(s)}Ap=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(Fa(t,n|1),De(t,ie()),!(U&6)&&(_r=ie()+500,pn()))}break;case 13:Tn(function(){var r=Tt(e,1);if(r!==null){var i=ke();ct(r,e,1,i)}}),_u(e,1)}};Ba=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=ke();ct(t,e,134217728,n)}_u(e,134217728)}};$p=function(e){if(e.tag===13){var t=nn(e),n=Tt(e,t);if(n!==null){var r=ke();ct(n,e,t,r)}_u(e,t)}};Np=function(){return B};Ip=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Ml=function(e,t,n){switch(t){case"input":if(Al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hs(r);if(!i)throw Error(C(90));up(r),Al(r,i)}}}break;case"textarea":dp(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};yp=gu;wp=Tn;var Mv={usingClientEntryPoint:!1,Events:[Ii,Zn,hs,mp,vp,gu]},Mr={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dv={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xp(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{cs=io.inject(Dv),wt=io}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xu(t))throw Error(C(200));return Rv(e,t,null,n)};Ge.createRoot=function(e,t){if(!xu(e))throw Error(C(299));var n=!1,r="",i=th;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wu(e,1,!1,null,null,n,!1,r,i),e[bt]=t.current,ci(e.nodeType===8?e.parentNode:e),new Eu(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=xp(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Tn(e)};Ge.hydrate=function(e,t,n){if(!Ss(t))throw Error(C(200));return Cs(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!xu(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=th;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=eh(t,null,e,1,n??null,i,!1,o,s),e[bt]=t.current,ci(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xs(t)};Ge.render=function(e,t,n){if(!Ss(t))throw Error(C(200));return Cs(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!Ss(e))throw Error(C(40));return e._reactRootContainer?(Tn(function(){Cs(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};Ge.unstable_batchedUpdates=gu;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ss(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Cs(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function nh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nh)}catch(e){console.error(e)}}nh(),tp.exports=Ge;var wi=tp.exports,rh,Kc=wi;rh=Kc.createRoot,Kc.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}var qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qt||(qt={}));const qc="popstate";function zv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return ga("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:oh(i)}return Uv(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ih(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jv(){return Math.random().toString(36).substr(2,8)}function Qc(e,t){return{usr:e.state,key:e.key,idx:t}}function ga(e,t,n,r){return n===void 0&&(n=null),Yo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ls(t):t,{state:n,key:t&&t.key||r||jv()})}function oh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ls(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Uv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=qt.Pop,a=null,u=d();u==null&&(u=0,s.replaceState(Yo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function c(){l=qt.Pop;let P=d(),h=P==null?null:P-u;u=P,a&&a({action:l,location:w.location,delta:h})}function f(P,h){l=qt.Push;let p=ga(w.location,P,h);u=d()+1;let g=Qc(p,u),_=w.createHref(p);try{s.pushState(g,"",_)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(_)}o&&a&&a({action:l,location:w.location,delta:1})}function m(P,h){l=qt.Replace;let p=ga(w.location,P,h);u=d();let g=Qc(p,u),_=w.createHref(p);s.replaceState(g,"",_),o&&a&&a({action:l,location:w.location,delta:0})}function v(P){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof P=="string"?P:oh(P);return p=p.replace(/ $/,"%20"),ze(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let w={get action(){return l},get location(){return e(i,s)},listen(P){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(qc,c),a=P,()=>{i.removeEventListener(qc,c),a=null}},createHref(P){return t(i,P)},createURL:v,encodeLocation(P){let h=v(P);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:m,go(P){return s.go(P)}};return w}var Xc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Xc||(Xc={}));function Fv(e,t,n){return n===void 0&&(n="/"),Bv(e,t,n,!1)}function Bv(e,t,n,r){let i=typeof t=="string"?Ls(t):t,o=ah(i.pathname||"/",n);if(o==null)return null;let s=sh(e);Hv(s);let l=null;for(let a=0;l==null&&a<s.length;++a){let u=ey(o);l=Zv(s[a],u,r)}return l}function sh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(ze(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=pr([r,a.relativePath]),d=n.concat(a);o.children&&o.children.length>0&&(ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Qv(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of lh(o.path))i(o,s,a)}),t}function lh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=lh(r.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function Hv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Xv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vv=/^:[\w-]+$/,Wv=3,Gv=2,Yv=1,Kv=10,qv=-2,Zc=e=>e==="*";function Qv(e,t){let n=e.split("/"),r=n.length;return n.some(Zc)&&(r+=qv),t&&(r+=Gv),n.filter(i=>!Zc(i)).reduce((i,o)=>i+(Vv.test(o)?Wv:o===""?Yv:Kv),r)}function Xv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Zv(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",c=Jc({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),f=a.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Jc({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),s.push({params:i,pathname:pr([o,c.pathname]),pathnameBase:ty(pr([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=pr([o,c.pathnameBase]))}return s}function Jc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let w=l[c]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=l[c];return m&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Jv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ih(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ey(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ih(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ah(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const pr=e=>e.join("/").replace(/\/\/+/g,"/"),ty=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function ny(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uh=["post","put","patch","delete"];new Set(uh);const ry=["get",...uh];new Set(ry);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ko.apply(this,arguments)}const iy=x.createContext(null),oy=x.createContext(null),ch=x.createContext(null),Ps=x.createContext(null),ks=x.createContext({outlet:null,matches:[],isDataRoute:!1}),dh=x.createContext(null);function Su(){return x.useContext(Ps)!=null}function sy(){return Su()||ze(!1),x.useContext(Ps).location}function ly(e,t){return ay(e,t)}function ay(e,t,n,r){Su()||ze(!1);let{navigator:i}=x.useContext(ch),{matches:o}=x.useContext(ks),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=sy(),d;if(t){var c;let P=typeof t=="string"?Ls(t):t;a==="/"||(c=P.pathname)!=null&&c.startsWith(a)||ze(!1),d=P}else d=u;let f=d.pathname||"/",m=f;if(a!=="/"){let P=a.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(P.length).join("/")}let v=Fv(e,{pathname:m}),w=fy(v&&v.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:pr([a,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?a:pr([a,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),o,n,r);return t&&w?x.createElement(Ps.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:qt.Pop}},w):w}function uy(){let e=vy(),t=ny(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,null)}const cy=x.createElement(uy,null);class dy extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(ks.Provider,{value:this.props.routeContext},x.createElement(dh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function py(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(iy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(ks.Provider,{value:t},r)}function fy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||ze(!1),s=s.slice(0,Math.min(s.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let c=s[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:m}=n,v=c.route.loader&&f[c.route.id]===void 0&&(!m||m[c.route.id]===void 0);if(c.route.lazy||v){a=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,c,f)=>{let m,v=!1,w=null,P=null;n&&(m=l&&c.route.id?l[c.route.id]:void 0,w=c.route.errorElement||cy,a&&(u<0&&f===0?(v=!0,P=null):u===f&&(v=!0,P=c.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,f+1)),p=()=>{let g;return m?g=w:v?g=P:c.route.Component?g=x.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=d,x.createElement(py,{match:c,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?x.createElement(dy,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var ma=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ma||{});function hy(e){let t=x.useContext(oy);return t||ze(!1),t}function gy(e){let t=x.useContext(ks);return t||ze(!1),t}function my(e){let t=gy(),n=t.matches[t.matches.length-1];return n.route.id||ze(!1),n.route.id}function vy(){var e;let t=x.useContext(dh),n=hy(ma.UseRouteError),r=my(ma.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ph(e){ze(!1)}function yy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=qt.Pop,navigator:o,static:s=!1,future:l}=e;Su()&&ze(!1);let a=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:a,navigator:o,static:s,future:Ko({v7_relativeSplatPath:!1},l)}),[a,l,o,s]);typeof r=="string"&&(r=Ls(r));let{pathname:d="/",search:c="",hash:f="",state:m=null,key:v="default"}=r,w=x.useMemo(()=>{let P=ah(d,a);return P==null?null:{location:{pathname:P,search:c,hash:f,state:m,key:v},navigationType:i}},[a,d,c,f,m,v,i]);return w==null?null:x.createElement(ch.Provider,{value:u},x.createElement(Ps.Provider,{children:n,value:w}))}function wy(e){let{children:t,location:n}=e;return ly(va(t),n)}new Promise(()=>{});function va(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,va(r.props.children,o));return}r.type!==ph&&ze(!1),!r.props.index||!r.props.children||ze(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=va(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _y="6";try{window.__reactRouterVersion=_y}catch{}const Ey="startTransition",ed=ee[Ey];function xy(e){let{basename:t,children:n,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=zv({window:i,v5Compat:!0}));let s=o.current,[l,a]=x.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=x.useCallback(c=>{u&&ed?ed(()=>a(c)):a(c)},[a,u]);return x.useLayoutEffect(()=>s.listen(d),[s,d]),x.createElement(yy,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}var td;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(td||(td={}));var nd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nd||(nd={}));var Sy=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(o=Object.keys(t),r=o.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;i--!==0;){var s=o[i];if(!e(t[s],n[s]))return!1}return!0}return t!==t&&n!==n};const Cy=Hd(Sy);function Ly(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Py(e){var t=Ly(e,"string");return typeof t=="symbol"?t:String(t)}function Et(){return Et=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Et.apply(this,arguments)}function Mn(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const Pt={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"},ky="https://maps.googleapis.com/maps/api/js";class _i{static async load(t,n){var r;const i=t.libraries?t.libraries.split(","):[],o=this.serializeParams(t);this.listeners.push(n),(r=window.google)!=null&&(r=r.maps)!=null&&r.importLibrary?(this.serializedApiParams||(this.loadingStatus=Pt.LOADED),this.notifyLoadingStatusListeners()):(this.serializedApiParams=o,this.initImportLibrary(t)),this.serializedApiParams&&this.serializedApiParams!==o&&console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");const s=["maps",...i];await Promise.all(s.map(l=>google.maps.importLibrary(l)))}static serializeParams(t){return[t.v,t.key,t.language,t.region,t.authReferrerPolicy,t.solutionChannel].join("/")}static initImportLibrary(t){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary){console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");return}let n=null;const r=()=>n||(n=new Promise((i,o)=>{var s;const l=document.createElement("script"),a=new URLSearchParams;for(const[u,d]of Object.entries(t)){const c=u.replace(/[A-Z]/g,f=>"_"+f[0].toLowerCase());a.set(c,d)}a.set("loading","async"),a.set("callback","__googleMapsCallback__"),l.async=!0,l.src=ky+"?"+a.toString(),l.nonce=((s=document.querySelector("script[nonce]"))==null?void 0:s.nonce)||"",l.onerror=()=>{this.loadingStatus=Pt.FAILED,this.notifyLoadingStatusListeners(),o(new Error("The Google Maps JavaScript API could not load."))},window.__googleMapsCallback__=()=>{this.loadingStatus=Pt.LOADED,this.notifyLoadingStatusListeners(),i()},window.gm_authFailure=()=>{this.loadingStatus=Pt.AUTH_FAILURE,this.notifyLoadingStatusListeners()},this.loadingStatus=Pt.LOADING,this.notifyLoadingStatusListeners(),document.head.append(l)}),n);google.maps.importLibrary=i=>r().then(()=>google.maps.importLibrary(i))}static notifyLoadingStatusListeners(){for(const t of this.listeners)t(this.loadingStatus)}}_i.loadingStatus=Pt.NOT_LOADED;_i.serializedApiParams=void 0;_i.listeners=[];const Oy=["onLoad","apiKey","version","libraries"],Ay=["children"],$y="GMP_visgl_rgmlibrary_v1_default",bi=W.createContext(null);function Ny(){const[e,t]=x.useState({});return{mapInstances:e,addMapInstance:(o,s="default")=>{t(l=>Et({},l,{[s]:o}))},removeMapInstance:(o="default")=>{t(s=>Mn(s,[o].map(Py)))},clearMapInstances:()=>{t({})}}}function Iy(e){const{onLoad:t,apiKey:n,version:r,libraries:i=[]}=e,o=Mn(e,Oy),[s,l]=x.useState(_i.loadingStatus),[a,u]=x.useReducer((m,v)=>Et({},m,{[v.name]:v.value}),{}),d=x.useMemo(()=>i==null?void 0:i.join(","),[i]),c=x.useMemo(()=>JSON.stringify(Et({apiKey:n,version:r},o)),[n,r,o]),f=x.useCallback(async m=>{var v;if(a[m])return a[m];if(!((v=google)!=null&&(v=v.maps)!=null&&v.importLibrary))throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");const w=await window.google.maps.importLibrary(m);return u({name:m,value:w}),w},[a]);return x.useEffect(()=>{(async()=>{try{const m=Et({key:n},o);r&&(m.v=r),(d==null?void 0:d.length)>0&&(m.libraries=d),m.solutionChannel===void 0?m.solutionChannel=$y:m.solutionChannel===""&&delete m.solutionChannel,await _i.load(m,v=>l(v));for(const v of["core","maps",...i])await f(v);t&&t()}catch(m){console.error("<ApiProvider> failed to load the Google Maps JavaScript API",m)}})()},[n,d,c]),{status:s,loadedLibraries:a,importLibrary:f}}const Ry=e=>{const{children:t}=e,n=Mn(e,Ay),{mapInstances:r,addMapInstance:i,removeMapInstance:o,clearMapInstances:s}=Ny(),{status:l,loadedLibraries:a,importLibrary:u}=Iy(n),d=x.useMemo(()=>({mapInstances:r,addMapInstance:i,removeMapInstance:o,clearMapInstances:s,status:l,loadedLibraries:a,importLibrary:u}),[r,i,o,s,l,a,u]);return W.createElement(bi.Provider,{value:d},t)};function by(e,t){for(const n of zy){const r=t[n],i=fh[n];x.useEffect(()=>{if(!e||!r)return;const o=google.maps.event.addListener(e,i,s=>{r(Ty(i,e,s))});return()=>o.remove()},[e,i,r])}}function Ty(e,t,n){const r={type:e,map:t,detail:{},stoppable:!1,stop:()=>{}};if(My.includes(e)){const o=r,s=t.getCenter(),l=t.getZoom(),a=t.getHeading()||0,u=t.getTilt()||0,d=t.getBounds();return(!s||!d||!Number.isFinite(l))&&console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),o.detail={center:(s==null?void 0:s.toJSON())||{lat:0,lng:0},zoom:l||0,heading:a,tilt:u,bounds:(d==null?void 0:d.toJSON())||{north:90,east:180,south:-90,west:-180}},o}else if(Dy.includes(e)){var i;if(!n)throw new Error("[createEvent] mouse events must provide a srcEvent");const o=r;return o.domEvent=n.domEvent,o.stoppable=!0,o.stop=()=>n.stop(),o.detail={latLng:((i=n.latLng)==null?void 0:i.toJSON())||null,placeId:n.placeId},o}return r}const fh={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed",onCameraChanged:"bounds_changed"},My=["bounds_changed","center_changed","heading_changed","tilt_changed","zoom_changed"],Dy=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],zy=Object.keys(fh);function hh(e,t){const n=x.useRef(void 0);(!n.current||!Cy(t,n.current))&&(n.current=t),x.useEffect(e,n.current)}const jy=new Set(["backgroundColor","clickableIcons","controlSize","disableDefaultUI","disableDoubleClickZoom","draggable","draggableCursor","draggingCursor","fullscreenControl","fullscreenControlOptions","gestureHandling","isFractionalZoomEnabled","keyboardShortcuts","mapTypeControl","mapTypeControlOptions","mapTypeId","maxZoom","minZoom","noClear","panControl","panControlOptions","restriction","rotateControl","rotateControlOptions","scaleControl","scaleControlOptions","scrollwheel","streetView","streetViewControl","streetViewControlOptions","styles","zoomControl","zoomControlOptions"]);function Uy(e,t){const n={},r=Object.keys(t);for(const i of r)jy.has(i)&&(n[i]=t[i]);hh(()=>{e&&e.setOptions(n)},[n])}function gh(){var e;return((e=x.useContext(bi))==null?void 0:e.status)||Pt.NOT_LOADED}function Fy(e,t){const{viewport:n,viewState:r}=t,i=!!n;return x.useLayoutEffect(()=>{if(!e||!r)return;const{latitude:o,longitude:s,bearing:l,pitch:a,zoom:u}=r;e.moveCamera({center:{lat:o,lng:s},heading:l,tilt:a,zoom:u+1})},[e,r]),i}function By(e){return!e||typeof e!="object"||!("lat"in e&&"lng"in e)?!1:Number.isFinite(e.lat)&&Number.isFinite(e.lng)}function mh(e){return By(e)?e:e.toJSON()}function Hy(e,t,n){const r=n.center?mh(n.center):null;let i=null,o=null;r&&Number.isFinite(r.lat)&&Number.isFinite(r.lng)&&(i=r.lat,o=r.lng);const s=Number.isFinite(n.zoom)?n.zoom:null,l=Number.isFinite(n.heading)?n.heading:null,a=Number.isFinite(n.tilt)?n.tilt:null;x.useLayoutEffect(()=>{if(!e)return;const u={};let d=!1;i!==null&&o!==null&&(t.current.center.lat!==i||t.current.center.lng!==o)&&(u.center={lat:i,lng:o},d=!0),s!==null&&t.current.zoom!==s&&(u.zoom=s,d=!0),l!==null&&t.current.heading!==l&&(u.heading=l,d=!0),a!==null&&t.current.tilt!==a&&(u.tilt=a,d=!0),d&&e.moveCamera(u)})}const Vy=()=>{const e={position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"};return W.createElement("div",{style:e},W.createElement("h2",null,"Error: AuthFailure"),W.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",W.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."))};function Wy(){const[e,t]=x.useState(null),n=x.useCallback(r=>t(r),[t]);return[e,n]}function vh(){return gh()===Pt.LOADED}function Gy(){const[,e]=x.useReducer(t=>t+1,0);return e}function Yy(e,t){const n=e.getCenter(),r=e.getZoom(),i=e.getHeading()||0,o=e.getTilt()||0,s=e.getBounds();(!n||!s||!Number.isFinite(r))&&console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),Object.assign(t.current,{center:(n==null?void 0:n.toJSON())||{lat:0,lng:0},zoom:r||0,heading:i,tilt:o})}function Ky(e){const t=Gy(),n=x.useRef({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0});return x.useEffect(()=>{if(!e)return;const r=google.maps.event.addListener(e,"bounds_changed",()=>{Yy(e,n),t()});return()=>r.remove()},[e,t]),n}const qy=["id","defaultBounds","defaultCenter","defaultZoom","defaultHeading","defaultTilt","reuseMaps"],Qy=["padding"];class _o{static has(t){return this.entries[t]&&this.entries[t].length>0}static pop(t){return this.entries[t]&&this.entries[t].pop()||null}static push(t,n){this.entries[t]||(this.entries[t]=[]),this.entries[t].push(n)}}_o.entries={};function Xy(e,t){const n=vh(),[r,i]=x.useState(null),[o,s]=Wy(),l=Ky(r),{id:a,defaultBounds:u,defaultCenter:d,defaultZoom:c,defaultHeading:f,defaultTilt:m,reuseMaps:v}=e,w=Mn(e,qy),P=e.zoom!==void 0||e.defaultZoom!==void 0,h=e.center!==void 0||e.defaultCenter!==void 0;!u&&(!P||!h)&&console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required"),!w.center&&d&&(w.center=d),!w.zoom&&Number.isFinite(c)&&(w.zoom=c),!w.heading&&Number.isFinite(f)&&(w.heading=f),!w.tilt&&Number.isFinite(m)&&(w.tilt=m);for(const g of Object.keys(w))w[g]===void 0&&delete w[g];const p=x.useRef();return x.useEffect(()=>{if(!o||!n)return;const{addMapInstance:g,removeMapInstance:_}=t,L=e.mapId,A=L||"default";let O,$;if(v&&_o.has(A)?($=_o.pop(A),O=$.getDiv(),o.appendChild(O),$.setOptions(w),setTimeout(()=>$.setCenter($.getCenter()),0)):(O=document.createElement("div"),O.style.height="100%",o.appendChild(O),$=new google.maps.Map(O,w)),i($),g($,a),u){const{padding:H}=u,b=Mn(u,Qy);$.fitBounds(b,H)}else(!P||!h)&&$.fitBounds({east:180,west:-180,south:-90,north:90});if(p.current){const{mapId:H,cameraState:b}=p.current;H!==L&&$.setOptions(b)}return()=>{p.current={mapId:L,cameraState:l.current},O.remove(),v?_o.push(A,$):google.maps.event.clearInstanceListeners($),i(null),_(a)}},[o,n,a,e.mapId]),[r,s,l]}const yh=W.createContext(null),wh=e=>{const{children:t,id:n,className:r,style:i}=e,o=x.useContext(bi),s=gh();if(!o)throw new Error("<Map> can only be used inside an <ApiProvider> component.");const[l,a,u]=Xy(e,o);Hy(l,u,e),by(l,e),Uy(l,e);const d=Fy(l,e),c=!!e.controlled;x.useEffect(()=>{if(l)return d&&l.setOptions({disableDefaultUI:!0}),(d||c)&&l.setOptions({gestureHandling:"none",keyboardShortcuts:!1}),()=>{l.setOptions({gestureHandling:e.gestureHandling,keyboardShortcuts:e.keyboardShortcuts})}},[l,d,c,e.gestureHandling,e.keyboardShortcuts]);const f=e.center?mh(e.center):null;let m=null,v=null;f&&Number.isFinite(f.lat)&&Number.isFinite(f.lng)&&(m=f.lat,v=f.lng);const w=x.useMemo(()=>{var p,g,_,L,A;return{center:{lat:(p=m)!=null?p:0,lng:(g=v)!=null?g:0},zoom:(_=e.zoom)!=null?_:0,heading:(L=e.heading)!=null?L:0,tilt:(A=e.tilt)!=null?A:0}},[m,v,e.zoom,e.heading,e.tilt]);x.useLayoutEffect(()=>{if(!l||!c)return;l.moveCamera(w);const p=l.addListener("bounds_changed",()=>{l.moveCamera(w)});return()=>p.remove()},[l,c,w]);const P=x.useMemo(()=>Et({width:"100%",height:"100%",position:"relative",zIndex:d?-1:0},i),[i,d]),h=x.useMemo(()=>({map:l}),[l]);return s===Pt.AUTH_FAILURE?W.createElement("div",{style:Et({position:"relative"},r?{}:P),className:r},W.createElement(Vy,null)):W.createElement("div",Et({ref:a,"data-testid":"map",style:r?void 0:P,className:r},n?{id:n}:{}),l?W.createElement(yh.Provider,{value:h},t):null)};wh.deckGLViewProps=!0;const rd=new Set;function ya(...e){const t=JSON.stringify(e);rd.has(t)||(rd.add(t),console.error(...e))}const Os=(e=null)=>{const t=x.useContext(bi),{map:n}=x.useContext(yh)||{};if(t===null)return ya("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null;const{mapInstances:r}=t;return e!==null?r[e]||null:n||r.default||null};function Cu(e){const t=vh(),n=x.useContext(bi);return x.useEffect(()=>{!t||!n||n.importLibrary(e)},[t,n,e]),(n==null?void 0:n.loadedLibraries[e])||null}function _h(e,t,n){if(t!=null&&typeof t!="object")throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");const r=e.style;if(n==null){if(t==null)return;for(const i in t)t.hasOwnProperty(i)&&id(r,i,t[i]);return}for(const i in n)n.hasOwnProperty(i)&&(t==null||!t.hasOwnProperty(i))&&(i.indexOf("--")===0?r.setProperty(i,""):i==="float"?r.cssFloat="":r[i]="");if(t!=null)for(const i in t){const o=t[i];t.hasOwnProperty(i)&&n[i]!==o&&id(r,i,o)}}function id(e,t,n){const r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n=="number"&&n!==0&&!Jy(t)?e[t]=n+"px":t==="float"?e.cssFloat=n:e[t]=(""+n).trim()}const Zy=new Set(["animationIterationCount","aspectRatio","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridArea","gridRow","gridRowEnd","gridRowSpan","gridRowStart","gridColumn","gridColumnEnd","gridColumnSpan","gridColumnStart","fontWeight","lineClamp","lineHeight","opacity","order","orphans","scale","tabSize","widows","zIndex","zoom","fillOpacity","floodOpacity","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth"]);function Jy(e){return Zy.has(e)}function or(e,t,n){x.useEffect(()=>{if(!e||!t||!n)return;const r=google.maps.event.addListener(e,t,n);return()=>r.remove()},[e,t,n])}function Dr(e,t,n){x.useEffect(()=>{e&&(e[t]=n)},[e,t,n])}const Eh=W.createContext(null);function e0(e){const[t,n]=x.useState(null),[r,i]=x.useState(null),o=x.useRef(null),s=Os(),l=Cu("marker"),{children:a,className:u,style:d,onClick:c,onDrag:f,onDragStart:m,onDragEnd:v,collisionBehavior:w,clickable:P,draggable:h,position:p,title:g,zIndex:_}=e,L=x.Children.count(a);return x.useEffect(()=>{if(!s||!l)return;const A=new l.AdvancedMarkerElement;A.map=s,n(A);let O=null;return L>0&&(O=document.createElement("div"),A.content=O,i(O)),()=>{var $;A.map=null,($=O)==null||$.remove(),n(null),i(null)}},[s,l,L]),x.useEffect(()=>{!t||!t.content||(t.content.className=u||"")},[t,u]),Dr(r,"className",u??""),x.useEffect(()=>{r&&(_h(r,d||null,o.current),o.current=d||null)},[r,u,d]),Dr(t,"position",p),Dr(t,"title",g??""),Dr(t,"zIndex",_),Dr(t,"collisionBehavior",w),x.useEffect(()=>{t&&(h!==void 0?t.gmpDraggable=h:f||m||v?t.gmpDraggable=!0:t.gmpDraggable=!1)},[t,h,f,v,m]),x.useEffect(()=>{t&&(P!==void 0?t.gmpClickable=P:c?t.gmpClickable=!0:t.gmpClickable=!1)},[t,P,c]),or(t,"click",c),or(t,"drag",f),or(t,"dragstart",m),or(t,"dragend",v),[t,r]}const t0=x.forwardRef((e,t)=>{const{children:n}=e,[r,i]=e0(e),o=x.useMemo(()=>r?{marker:r}:null,[r]);return x.useImperativeHandle(t,()=>r,[r]),i?W.createElement(Eh.Provider,{value:o},wi.createPortal(n,i)):null});function n0(){const[e,t]=x.useState(null);return[x.useCallback(r=>{t(r)},[]),e]}const r0=["children","headerContent","style","className","pixelOffset","anchor","shouldFocus","onClose","onCloseClick"],i0=e=>{const{children:t,headerContent:n,style:r,className:i,pixelOffset:o,anchor:s,shouldFocus:l,onClose:a,onCloseClick:u}=e,d=Mn(e,r0),c=Cu("maps"),[f,m]=x.useState(null),v=x.useRef(null),w=x.useRef(null);x.useEffect(()=>{if(!c)return;v.current=document.createElement("div"),w.current=document.createElement("div");const p=d;o&&(p.pixelOffset=new google.maps.Size(o[0],o[1])),n&&(p.headerContent=typeof n=="string"?n:w.current);const g=new google.maps.InfoWindow(d);return g.setContent(v.current),m(g),()=>{var _,L;g.setContent(null),(_=v.current)==null||_.remove(),(L=w.current)==null||L.remove(),v.current=null,w.current=null,m(null)}},[c]);const P=x.useRef(null);x.useEffect(()=>{!f||!v.current||(_h(v.current,r||null,P.current),P.current=r||null,i!==v.current.className&&(v.current.className=i||""))},[f,i,r]),hh(()=>{if(!f)return;const p=d;o?p.pixelOffset=new google.maps.Size(o[0],o[1]):p.pixelOffset=null,n?p.headerContent=typeof n=="string"?n:w.current:p.headerContent=null,f.setOptions(d)},[d,o,n]),or(f,"close",a),or(f,"closeclick",u);const h=Os();return x.useEffect(()=>{if(!h||!f||s===null)return;const p=!!s,g={map:h};return s&&(g.anchor=s),l!==void 0&&(g.shouldFocus=l),f.open(g),()=>{p&&f.set("anchor",null),f.close()}},[f,s,h,l]),W.createElement(W.Fragment,null,v.current&&wi.createPortal(t,v.current),w.current!==null&&wi.createPortal(n,w.current))},o0=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];function s0(e){const[t,n]=x.useState(null),r=Os(),{onClick:i,onDrag:o,onDragStart:s,onDragEnd:l,onMouseOver:a,onMouseOut:u}=e,d=Mn(e,o0),{position:c,draggable:f}=d;return x.useEffect(()=>{if(!r){r===void 0&&console.error("<Marker> has to be inside a Map component.");return}const m=new google.maps.Marker(d);return m.setMap(r),n(m),()=>{m.setMap(null),n(null)}},[r]),x.useEffect(()=>{if(!t)return;const m=t,v=google.maps.event;return i&&v.addListener(m,"click",i),o&&v.addListener(m,"drag",o),s&&v.addListener(m,"dragstart",s),l&&v.addListener(m,"dragend",l),a&&v.addListener(m,"mouseover",a),u&&v.addListener(m,"mouseout",u),t.setDraggable(!!f),()=>{v.clearInstanceListeners(m)}},[t,f,i,o,s,l,a,u]),x.useEffect(()=>{t&&d&&t.setOptions(d)},[t,d]),x.useEffect(()=>{f||!c||!t||t.setPosition(c)},[f,c,t]),t}x.forwardRef((e,t)=>{const n=s0(e);return x.useImperativeHandle(t,()=>n,[n]),W.createElement(W.Fragment,null)});const l0=e=>{var t;const n=(t=x.useContext(Eh))==null?void 0:t.marker,r=x.useMemo(()=>document.createElement("div"),[]);return x.useEffect(()=>{if(!n){n===void 0&&console.error("The <Pin> component can only be used inside <AdvancedMarker>.");return}e.glyph&&e.children&&ya("The <Pin> component only uses children to render the glyph if both the glyph property and children are present."),x.Children.count(e.children)>1&&ya("Passing multiple children to the <Pin> component might lead to unexpected results.");const i=Et({},e),o=new google.maps.marker.PinElement(i);e.children&&(o.glyph=r),n.content=o.element},[n,r,e]),wi.createPortal(e.children,r)};function a0(){return I.jsx("header",{className:"w-full py-2",children:I.jsx("div",{className:"flex items-center justify-center",children:I.jsx("h1",{className:"h1 text-lg font-bold	",children:"Pets Friendly Cafe's"})})})}function u0(){return I.jsx("footer",{className:"w-full py-2 items-center justify-center",children:I.jsxs("div",{className:"flex flex-col items-center justify-center",children:[I.jsx("div",{className:"text-sm",children:I.jsxs("h6",{className:"text-gray-500 font-normal",children:["E-mail: ",I.jsx("a",{href:"mailto:vool34@gmail.com",className:"text-gray-500 hover:text-gray-200 transition duration-150 ease-in-out",children:"vool34@gmail.com"})]})}),I.jsx("div",{className:"text-sm",children:I.jsxs("h6",{className:"text-gray-500 font-normal",children:["GIT: ",I.jsx("a",{href:"https://github.com/corbenykt",className:"text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out",children:"https://github.com/corbenykt"})]})}),I.jsx("div",{className:"text-sm",children:I.jsxs("div",{className:"text-gray-500 font-normal",children:["LinkedIn: ",I.jsx("a",{href:"https://www.linkedin.com/in/dmitrii-artemev/",className:"text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out",children:"Dmitrii Artemev"})]})})]})})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c0=new Set(["children","localName","ref","style","className"]),od=new WeakMap,sd=(e,t,n,r,i)=>{const o=i==null?void 0:i[t];o===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((s,l,a)=>{let u=od.get(s);u===void 0&&od.set(s,u=new Map);let d=u.get(l);a!==void 0?d===void 0?(u.set(l,d={handleEvent:a}),s.addEventListener(l,d)):d.handleEvent=a:d!==void 0&&(u.delete(l),s.removeEventListener(l,d))})(e,o,n)},ne=({react:e,tagName:t,elementClass:n,events:r,displayName:i})=>{const o=new Set(Object.keys(r??{})),s=e.forwardRef((l,a)=>{const u=e.useRef(new Map),d=e.useRef(null),c={},f={};for(const[m,v]of Object.entries(l))c0.has(m)?c[m==="className"?"class":m]=v:o.has(m)||m in n.prototype?f[m]=v:c[m]=v;return e.useLayoutEffect(()=>{if(d.current===null)return;const m=new Map;for(const v in f)sd(d.current,v,l[v],u.current.get(v),r),u.current.delete(v),m.set(v,l[v]);for(const[v,w]of u.current)sd(d.current,v,void 0,w,r);u.current=m}),e.useLayoutEffect(()=>{var m;(m=d.current)==null||m.removeAttribute("defer-hydration")},[]),c.suppressHydrationWarning=!0,e.createElement(t,{...c,ref:e.useCallback(m=>{d.current=m,typeof a=="function"?a(m):a!==null&&(a.current=m)},[a])})});return s.displayName=i??n.name,s};function y(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}function E(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=globalThis,Lu=Eo.ShadowRoot&&(Eo.ShadyCSS===void 0||Eo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pu=Symbol(),ld=new WeakMap;let xh=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Pu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Lu&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=ld.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ld.set(n,t))}return t}toString(){return this.cssText}};const d0=e=>new xh(typeof e=="string"?e:e+"",void 0,Pu),F=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new xh(n,e,Pu)},p0=(e,t)=>{if(Lu)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Eo.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},ad=Lu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return d0(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:f0,defineProperty:h0,getOwnPropertyDescriptor:g0,getOwnPropertyNames:m0,getOwnPropertySymbols:v0,getPrototypeOf:y0}=Object,on=globalThis,ud=on.trustedTypes,w0=ud?ud.emptyScript:"",fl=on.reactiveElementPolyfillSupport,Zr=(e,t)=>e,qo={toAttribute(e,t){switch(t){case Boolean:e=e?w0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ku=(e,t)=>!f0(e,t),cd={attribute:!0,type:String,converter:qo,reflect:!1,hasChanged:ku};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),on.litPropertyMetadata??(on.litPropertyMetadata=new WeakMap);class Wn extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=cd){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&h0(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=g0(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const l=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??cd}static _$Ei(){if(this.hasOwnProperty(Zr("elementProperties")))return;const t=y0(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Zr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zr("properties"))){const n=this.properties,r=[...m0(n),...v0(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(ad(i))}else t!==void 0&&n.push(ad(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return p0(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:qo).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){var o;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:qo;this._$Em=i,this[i]=l.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ku)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}Wn.elementStyles=[],Wn.shadowRootOptions={mode:"open"},Wn[Zr("elementProperties")]=new Map,Wn[Zr("finalized")]=new Map,fl==null||fl({ReactiveElement:Wn}),(on.reactiveElementVersions??(on.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=globalThis,Qo=Jr.trustedTypes,dd=Qo?Qo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ou="$lit$",kt=`lit$${Math.random().toFixed(9).slice(2)}$`,Au="?"+kt,_0=`<${Au}>`,Dn=document,Ei=()=>Dn.createComment(""),xi=e=>e===null||typeof e!="object"&&typeof e!="function",$u=Array.isArray,Sh=e=>$u(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",hl=`[ 	
\f\r]`,zr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pd=/-->/g,fd=/>/g,mn=RegExp(`>|${hl}(?:([^\\s"'>=/]+)(${hl}*=${hl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hd=/'/g,gd=/"/g,Ch=/^(?:script|style|textarea|title)$/i,E0=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),S=E0(1),Dt=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),md=new WeakMap,Ln=Dn.createTreeWalker(Dn,129);function Lh(e,t){if(!$u(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return dd!==void 0?dd.createHTML(t):t}const Ph=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=zr;for(let l=0;l<n;l++){const a=e[l];let u,d,c=-1,f=0;for(;f<a.length&&(s.lastIndex=f,d=s.exec(a),d!==null);)f=s.lastIndex,s===zr?d[1]==="!--"?s=pd:d[1]!==void 0?s=fd:d[2]!==void 0?(Ch.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=mn):d[3]!==void 0&&(s=mn):s===mn?d[0]===">"?(s=i??zr,c=-1):d[1]===void 0?c=-2:(c=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?mn:d[3]==='"'?gd:hd):s===gd||s===hd?s=mn:s===pd||s===fd?s=zr:(s=mn,i=void 0);const m=s===mn&&e[l+1].startsWith("/>")?" ":"";o+=s===zr?a+_0:c>=0?(r.push(u),a.slice(0,c)+Ou+a.slice(c)+kt+m):a+kt+(c===-2?l:m)}return[Lh(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Si{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const l=t.length-1,a=this.parts,[u,d]=Ph(t,n);if(this.el=Si.createElement(u,r),Ln.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Ln.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Ou)){const f=d[s++],m=i.getAttribute(c).split(kt),v=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:v[2],strings:m,ctor:v[1]==="."?Ah:v[1]==="?"?$h:v[1]==="@"?Nh:Ti}),i.removeAttribute(c)}else c.startsWith(kt)&&(a.push({type:6,index:o}),i.removeAttribute(c));if(Ch.test(i.tagName)){const c=i.textContent.split(kt),f=c.length-1;if(f>0){i.textContent=Qo?Qo.emptyScript:"";for(let m=0;m<f;m++)i.append(c[m],Ei()),Ln.nextNode(),a.push({type:2,index:++o});i.append(c[f],Ei())}}}else if(i.nodeType===8)if(i.data===Au)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(kt,c+1))!==-1;)a.push({type:7,index:o}),c+=kt.length-1}o++}}static createElement(t,n){const r=Dn.createElement("template");return r.innerHTML=t,r}}function zn(e,t,n=e,r){var s,l;if(t===Dt)return t;let i=r!==void 0?(s=n.o)==null?void 0:s[r]:n.l;const o=xi(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n.o??(n.o=[]))[r]=i:n.l=i),i!==void 0&&(t=zn(e,i._$AS(e,t.values),i,r)),t}class kh{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??Dn).importNode(n,!0);Ln.currentNode=i;let o=Ln.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new As(o,o.nextSibling,this,t):a.type===1?u=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(u=new Ih(o,this,t)),this._$AV.push(u),a=r[++l]}s!==(a==null?void 0:a.index)&&(o=Ln.nextNode(),s++)}return Ln.currentNode=Dn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}let As=class Oh{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,n,r,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this.v=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=zn(this,t,n),xi(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==Dt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Sh(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&xi(this._$AH)?this._$AA.nextSibling.data=t:this.T(Dn.createTextNode(t)),this._$AH=t}$(t){var o;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Si.createElement(Lh(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new kh(i,this),l=s.u(this.options);s.p(n),this.T(l),this._$AH=s}}_$AC(t){let n=md.get(t.strings);return n===void 0&&md.set(t.strings,n=new Si(t)),n}k(t){$u(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Oh(this.O(Ei()),this.O(Ei()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this.v=t,(n=this._$AP)==null||n.call(this,t))}};class Ti{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=j}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=zn(this,t,n,0),s=!xi(t)||t!==this._$AH&&t!==Dt,s&&(this._$AH=t);else{const l=t;let a,u;for(t=o[0],a=0;a<o.length-1;a++)u=zn(this,l[r+a],n,a),u===Dt&&(u=this._$AH[a]),s||(s=!xi(u)||u!==this._$AH[a]),u===j?t=j:t!==j&&(t+=(u??"")+o[a+1]),this._$AH[a]=u}s&&!i&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ah extends Ti{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class $h extends Ti{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class Nh extends Ti{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=zn(this,t,n,0)??j)===Dt)return;const r=this._$AH,i=t===j&&r!==j||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==j&&(r===j||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class Ih{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){zn(this,t)}}const x0={M:Ou,P:kt,A:Au,C:1,L:Ph,R:kh,D:Sh,V:zn,I:As,H:Ti,N:$h,U:Nh,B:Ah,F:Ih},gl=Jr.litHtmlPolyfillSupport;gl==null||gl(Si,As),(Jr.litHtmlVersions??(Jr.litHtmlVersions=[])).push("3.2.0");const Rh=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new As(t.insertBefore(Ei(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ei extends Wn{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Rh(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return Dt}}var Bd;ei._$litElement$=!0,ei.finalized=!0,(Bd=globalThis.litElementHydrateSupport)==null||Bd.call(globalThis,{LitElement:ei});const ml=globalThis.litElementPolyfillSupport;ml==null||ml({LitElement:ei});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S0={attribute:!0,type:String,converter:qo,reflect:!1,hasChanged:ku},C0=(e=S0,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,e)},init(l){return l!==void 0&&this.P(s,void 0,e),l}}}if(r==="setter"){const{name:s}=n;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+r)};function k(e){return(t,n)=>typeof n=="object"?C0(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return k({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nu=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(e,t){return(n,r,i)=>{const o=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(e))??null};return Nu(n,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bh(e){return(t,n)=>{const{slot:r,selector:i}=e??{},o="slot"+(r?`[name=${r}]`:":not([name])");return Nu(t,n,{get(){var a;const s=(a=this.renderRoot)==null?void 0:a.querySelector(o),l=(s==null?void 0:s.assignedElements(e))??[];return i===void 0?l:l.filter(u=>u.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L0(e){return(t,n)=>{const{slot:r}=e??{},i="slot"+(r?`[name=${r}]`:":not([name])");return Nu(t,n,{get(){var s;const o=(s=this.renderRoot)==null?void 0:s.querySelector(i);return(o==null?void 0:o.assignedNodes(e))??[]}})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Th{constructor(t){this.host=t,this.host.addController(this)}hostUpdate(){}info(t,...n){console.info(this.formatMessage(t),...n)}warn(t,...n){console.warn(this.formatMessage(t),...n)}error(t,...n){console.error(this.formatMessage(t),...n)}formatMessage(t){return this.prependTagName(t)}prependTagName(t){return`<${this.host.tagName.toLowerCase()}>: ${t}`}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ne extends ei{constructor(){super(...arguments),this.logger=new Th(this)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const P0="0.6.11",k0="NPM";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class an{constructor(){this.promise=new Promise((t,n)=>{this.resolveCallback=t,this.rejectCallback=n})}resolve(t){this.value=t,this.resolveCallback(t)}reject(t){this.rejectCallback(t)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function O0(e){return(t=>{var n,r,i,o="The Google Maps JavaScript API",s="google",l="importLibrary",a="__ib__",u=document,d=window;d=d[s]||(d[s]={});var c=d.maps||(d.maps={}),f=new Set,m=new URLSearchParams,v=()=>n||(n=new Promise(async(w,P)=>{var h;await(r=u.createElement("script")),m.set("libraries",[...f]+"");for(i in t)m.set(i.replace(/[A-Z]/g,p=>"_"+p[0].toLowerCase()),t[i]);m.set("callback",s+".maps."+a),r.src=`https://maps.${s}apis.com/maps/api/js?`+m,c[a]=w,r.onerror=()=>n=P(Error(o+" could not load.")),r.nonce=((h=u.querySelector("script[nonce]"))==null?void 0:h.nonce)||"",u.head.append(r)}));c[l]?console.warn(o+" only loads once. Ignoring:",t):c[l]=(w,...P)=>f.add(w)&&v().then(()=>c[l](w,...P))})(e),google.maps}const A0={load:O0};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var ce;function $0(){try{return google==null?void 0:google.maps}catch{return}}function vd(e){e.importLibrary("maps"),e.importLibrary("marker")}function N0(e){const t=e.logger;return t instanceof Th?t:void 0}let K=ce=class extends Ne{constructor(){super(...arguments),this.version="beta"}set apiKey(t){this.key=t}get apiKey(){return this.key}async connectedCallback(){super.connectedCallback(),ce.instance?this.logger.warn("Found multiple instances of this element on the same page. The Google Maps JavaScript API can only be configured once; please ensure you only have a single instance.",this):ce.instance=this}willUpdate(t){ce.instance===this&&this.tryLoadGoogleMapsAPI(t)}render(){return S`<slot></slot>`}getSolutionChannel(){if(this.solutionChannel!=="")return this.solutionChannel?this.solutionChannel:`GMP_${k0}_extended_v${P0}`}tryLoadGoogleMapsAPI(t){if(ce.googleMapsDeferred.value)if(ce.inlineScriptLoaded){const n=t.keys().next().value;this.logger.warn(`Property '${n}' cannot be updated once the Google Maps JavaScript API is already loaded.`)}else this.logger.warn("Please remove the <gmpx-api-loader> element if you are using the Google Maps JavaScript API inline bootstrap loader. Duplicate configuration may cause unexpected behavior.");else if(this.key!==void 0){const{key:n,version:r,language:i,region:o,authReferrerPolicy:s}=this,l=this.getSolutionChannel(),a=A0.load({key:n,...r&&{v:r},...i&&{language:i},...o&&{region:o},...l&&{solutionChannel:l},...s&&{authReferrerPolicy:s}});ce.inlineScriptLoaded=!0,ce.googleMapsDeferred.resolve(a),vd(a)}}static async importLibrary(t,n){let r=ce.googleMapsDeferred.value;return r||(ce.pollForGoogleMaps(5,1e3,n&&N0(n)),r=await ce.googleMapsDeferred.promise),r.importLibrary(t)}static reset(){delete window.google,delete ce.instance,ce.inlineScriptLoaded=!1,ce.googleMapsDeferred=new an}static pollForGoogleMaps(t,n,r,i=0){const o=$0();if(o)!ce.inlineScriptLoaded&&i>0&&(r??console).warn("Using the legacy Google Maps JavaScript API script loader may result in suboptimal performance. For best results, please include a <gmpx-api-loader> (https://github.com/googlemaps/extended-component-library) or use the inline bootstrap loader (https://goo.gle/js-api-loading) instead."),ce.googleMapsDeferred.resolve(o),vd(o);else if(t>0)window.setTimeout(()=>{ce.pollForGoogleMaps(t-1,n,r,i+1)},n);else{let s=r?r.formatMessage("The Google Maps JavaScript API is required for this element to function correctly. "):"APILoader.importLibrary(): Unable to initialize the Google Maps JavaScript API. ";throw s+="Please ensure you have a <gmpx-api-loader> on the page with a valid API key. https://github.com/googlemaps/extended-component-library",new Error(s)}}};K.googleMapsDeferred=new an;K.inlineScriptLoaded=!1;y([k({attribute:"auth-referrer-policy",reflect:!0,type:String}),E("design:type",String)],K.prototype,"authReferrerPolicy",void 0);y([k({reflect:!0,type:String}),E("design:type",String)],K.prototype,"key",void 0);y([k({reflect:!0,type:String}),E("design:type",String)],K.prototype,"language",void 0);y([k({reflect:!0,type:String}),E("design:type",String)],K.prototype,"region",void 0);y([k({attribute:"solution-channel",reflect:!0,type:String}),E("design:type",String)],K.prototype,"solutionChannel",void 0);y([k({reflect:!0,type:String}),E("design:type",Object)],K.prototype,"version",void 0);K=ce=y([Q("gmpx-api-loader")],K);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mi=e=>(...t)=>({_$litDirective$:e,values:t});let Di=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this.t=t,this._$AM=n,this.i=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xo=Mi(class extends Di{constructor(e){var t;if(super(e),e.type!==$s.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.st)o in t||(n.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return Dt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(e,t,n){return e?t(e):n==null?void 0:n(e)}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const It=F`var(--gmpx-color-primary, #1976d2)`,_n=F`var(--gmpx-color-surface, #fff)`,yd=F`var(--gmpx-color-on-primary, #fff)`,$t=F`var(--gmpx-color-on-surface, #212121)`,Zo=F`var(--gmpx-color-on-surface-variant, #757575)`,I0=F`var(--gmpx-color-outline, #e0e0e0)`,wa=F`var(--gmpx-rating-color, #ffb300)`,_a=F`var(--gmpx-rating-color-empty, #e0e0e0)`,Iu=F`var(--gmpx-font-family-base, 'Google Sans Text', sans-serif)`,Ru=F`var(--gmpx-font-family-headings, ${Iu})`,Pe=F`var(--gmpx-font-size-base, 0.875rem)`;function M(e){return F`calc(${Pe} * (${e}/14))`}const R0=F`400 ${M(18)}/${M(24)} ${Ru}`,xo=F`500 ${M(16)}/${M(24)} ${Ru}`,Er=F`500 ${M(14)}/${M(20)} ${Ru}`,Ns=F`400 ${M(14)}/${M(20)} ${Iu}`,Is=F`400 ${M(12)}/${M(16)} ${Iu}`,Ci=F`1px solid ${I0}`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function b0(e,t){const n=document.createElement("link");return n.rel="stylesheet",n.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@${encodeURIComponent(t.join(";"))}`,n}function wd(e){const t=document.createElement("div");t.innerHTML=e;const n=t.querySelector("a");return{text:t.textContent||void 0,url:n&&n.href||void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var we;(function(e){e.GOOGLE_SANS_TEXT="Google Sans Text",e.MATERIAL_SYMBOLS_OUTLINED="Material Symbols Outlined"})(we||(we={}));const vl=Object.freeze({[we.GOOGLE_SANS_TEXT]:{loadInDocumentHead:!0,loadInShadowRoot:!1,weights:[400,500]},[we.MATERIAL_SYMBOLS_OUTLINED]:{loadInDocumentHead:!0,loadInShadowRoot:!0,weights:[400]}});class fn{constructor(t,n){this.host=t,this.fonts=n,t.addController(this);for(const r of n)vl[r].loadInDocumentHead&&this.injectWebFontAsset(document.head,r)}hostConnected(){for(const t of this.fonts)vl[t].loadInShadowRoot&&this.injectWebFontAsset(this.host.renderRoot,t)}injectWebFontAsset(t,n){t.querySelector(`link[href*="${encodeURIComponent(n)}"]`)||t.appendChild(b0(n,vl[n].weights))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const T0="add",_d=Object.freeze(["outlined","filled"]),Vn=.5;let Ve=class extends Ne{constructor(){super(...arguments),this.ariaHasPopup="false",this.ariaLabel=null,this.condensed=!1,this.variant="outlined",this.hasLabel=!1,this.fontLoader=new fn(this,[we.GOOGLE_SANS_TEXT,we.MATERIAL_SYMBOLS_OUTLINED])}willUpdate(t){t.has("variant")&&!_d.includes(this.variant)&&(this.logger.error(`Value "${this.variant}" for attribute "variant" is invalid. Acceptable choices are ${_d.map(n=>`"${n}"`).join(", ")}.`),this.variant="outlined")}render(){return this.href?S`
        <a
          aria-label=${this.ariaLabel??j}
          class="container"
          href=${this.href}
          target="_blank"
        >${this.renderContent()}</a>
      `:S`
      <button
        aria-haspopup=${this.ariaHasPopup}
        aria-label=${this.ariaLabel??j}
        class="container"
      >${this.renderContent()}</button>
    `}updated(){this.role=this.ariaLabel!=null?"none":null}renderContent(){const t=this.icon||(!this.hasLabel||this.condensed?T0:void 0);return S`
      <div class="layout ${Xo({condensed:this.condensed,"no-label":!this.hasLabel})}">
        <div class="pill ${Xo({filled:this.variant==="filled",outlined:this.variant!=="filled"})}">
          <div class="overlay"></div>
          ${me(t,()=>S`
            <span aria-hidden="true" class="icon material-symbols-outlined">
              ${t}
            </span>
          `)}
          ${me(!this.condensed,()=>this.renderLabel())}
        </div>
        ${me(this.condensed,()=>this.renderLabel())}
      </div>
    `}renderLabel(){return S`
      <div class="label-container">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}handleSlotChange(){var t;this.hasLabel=!!((t=this.defaultSlotNodes)!=null&&t.map(n=>n.textContent??"").join("").trim())}};Ve.styles=F`
    .container {
      all: unset;
      color: ${It};
      cursor: pointer;
      text-align: center;
    }

    .icon {
      font-size: ${M(18)};
    }

    .layout.condensed {
      display: flex;
      flex-direction: column;
    }

    .layout.condensed .pill {
      align-self: center;
    }

    .layout.condensed .label-container {
      font: ${Is};
      margin-top: calc(${Pe} * ${Vn});
    }

    .layout.no-label .label-container {
      margin: 0;
    }

    .layout:not(.condensed):not(.no-label) .pill {
      padding-left: calc(${Pe} * ${Vn});
      padding-right: calc(${Pe} * ${Vn});
    }

    .pill {
      align-items: center;
      border-radius: calc(${Pe} * (1 + ${Vn}));
      display: flex;
      font: ${Er};
      justify-content: center;
      overflow: hidden;
      padding: calc(${Pe} * ${Vn} / 2);
      position: relative;
    }

    .pill > * {
      margin: calc(${Pe} * ${Vn} / 2);
    }

    .pill.filled {
      background-color: ${It};
      color: ${yd};
    }

    .pill.outlined {
      border: ${Ci};
    }

    .pill .overlay {
      inset: 0;
      margin: 0;
      opacity: 0;
      position: absolute;
    }

    .pill.outlined .overlay {
      background-color: ${It};
    }

    .pill.filled .overlay {
      background-color: ${yd};
    }

    .container:hover .overlay {
      opacity: 0.08;
    }

    .container:focus .overlay {
      opacity: 0.24;
    }

    .container:active .overlay {
      opacity: 0.32;
    }
  `;Ve.shadowRootOptions={...Ne.shadowRootOptions,delegatesFocus:!0};y([k({attribute:"aria-haspopup",reflect:!0,type:String}),E("design:type",String)],Ve.prototype,"ariaHasPopup",void 0);y([k({attribute:"aria-label",reflect:!0,type:String}),E("design:type",Object)],Ve.prototype,"ariaLabel",void 0);y([k({reflect:!0,type:Boolean}),E("design:type",Object)],Ve.prototype,"condensed",void 0);y([k({reflect:!0,type:String}),E("design:type",String)],Ve.prototype,"href",void 0);y([k({reflect:!0,type:String}),E("design:type",String)],Ve.prototype,"icon",void 0);y([k({reflect:!0,type:String}),E("design:type",String)],Ve.prototype,"variant",void 0);y([he(),E("design:type",Object)],Ve.prototype,"hasLabel",void 0);y([L0({flatten:!0}),E("design:type",Array)],Ve.prototype,"defaultSlotNodes",void 0);Ve=y([Q("gmpx-icon-button")],Ve);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mh="important",M0=" !"+Mh,Ea=Mi(class extends Di{constructor(e){var t;if(super(e),e.type!==$s.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?n.removeProperty(r):n[r]=null);for(const r in t){const i=t[r];if(i!=null){this.ft.add(r);const o=typeof i=="string"&&i.endsWith(M0);r.includes("-")||o?n.setProperty(r,o?i.slice(0,-11):i,o?Mh:""):n[r]=i}}return Dt}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ed(e){return e?`"${e}"`:"default"}class Rs{constructor(t,n,r){this.host=t,this.logger=n,this.supportedSlotNames=r,t.addController(this)}hostConnected(){for(const t of this.host.children)this.checkChildSlotValidity(t)}checkChildSlotValidity(t){const n=t.getAttribute("slot")??"";this.supportedSlotNames.includes(n)||this.logger.warn(`Detected child element in unsupported ${Ed(n)} slot. This component supports the following slots: ${this.supportedSlotNames.map(Ed).join(", ")}.`,t)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Jo(){var n;let e=document.activeElement;if(!e)return null;let t;for(;t=(n=e.shadowRoot)==null?void 0:n.activeElement;)e=t;return e}function*Dh(e){for(;;)if(yield e,e.parentNode)e=e.parentNode;else if(e instanceof ShadowRoot)e=e.host;else return}function D0(e,t){if(e.length===0||!t)return!1;const n=new Set(e);for(const r of Dh(t))if(n.has(r))return!0;return!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let zt=class extends Ne{constructor(){super(...arguments),this.opened=!1,this.mainLastActiveEl=null,this.slotValidator=new Rs(this,this.logger,["main","overlay"])}async showOverlay(){if(!this.opened&&(this.mainLastActiveEl=this.getMainActiveEl(),this.opened=!0,await this.updateComplete,this.overlayContainer.scroll(0,0),this.mainLastActiveEl)){const t=this.getOverlayAutofocusEl();t?t.focus():this.overlayContainer.focus()}}async hideOverlay(){if(!this.opened)return;const t=this.getOverlayActiveEl();this.opened=!1,(t||Jo()===this.overlayContainer)&&(await this.updateComplete,this.mainLastActiveEl?this.mainLastActiveEl.focus():this.mainContainer.focus()),this.mainLastActiveEl=null}render(){return S`
      <div class="outer-container">
        <div
          class="inner-container main-container"
          style=${Ea({display:this.opened?"none":"block"})}
          tabindex="-1"
        >
          <slot name="main"></slot>
        </div>
        <div
          class="inner-container overlay-container"
          style=${Ea({display:this.opened?"block":"none"})}
          tabindex="-1"
          @keydown=${this.handleOverlayKeydown}
        >
          <slot name="overlay"></slot>
        </div>
      </div>
    `}handleOverlayKeydown(t){t.key==="Escape"&&this.hideOverlay()}getContainedActiveEl(t){const n=Jo();return n instanceof HTMLElement&&D0(t,n)?n:null}getMainActiveEl(){return this.getContainedActiveEl(this.mainAssignedEls)}getOverlayActiveEl(){return this.getContainedActiveEl(this.overlayAssignedEls)}getOverlayAutofocusEl(){for(const t of this.overlayAssignedEls){const n=t.querySelector("[autofocus]");if(n&&n instanceof HTMLElement)return n}return null}};zt.styles=F`
    :host(:not([hidden])) {
      display: block;
      height: 100%;
    }
    .outer-container {
      display: block;
      height: 100%;
      position: relative;
    }
    .inner-container {
      inset: 0;
      overflow: auto;
      position: absolute;
    }
    .inner-container:focus-visible {
      outline: none;
    }
  `;y([bh({slot:"main"}),E("design:type",Array)],zt.prototype,"mainAssignedEls",void 0);y([bh({slot:"overlay"}),E("design:type",Array)],zt.prototype,"overlayAssignedEls",void 0);y([pt(".main-container"),E("design:type",HTMLDivElement)],zt.prototype,"mainContainer",void 0);y([pt(".overlay-container"),E("design:type",HTMLDivElement)],zt.prototype,"overlayContainer",void 0);y([he(),E("design:type",Object)],zt.prototype,"opened",void 0);zt=y([Q("gmpx-overlay-layout")],zt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*xa(e,t){const n=typeof t=="function";if(e!==void 0){let r=-1;for(const i of e)r>-1&&(yield n?t(r):t),r++,yield i}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*jn(e,t){if(e!==void 0){let n=0;for(const r of e)yield t(r,n++)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zh=24*60*60*1e3,yl=7*zh;function z0(e,t=!1){const n=new Date;return n.setDate(n.getDate()-n.getDay()+e.day),n.setHours(e.hour),n.setMinutes(e.minute),n.setSeconds(0),n.toLocaleString(void 0,{hour:"numeric",minute:"numeric",weekday:t?"short":void 0})}function xd(e,t,n=new Date){return z0(e,!jh(t,n))}function jh(e,t=new Date,n=zh){return e>=t&&e.valueOf()-t.valueOf()<n}function bu(e){var t;return((t=e.periods)==null?void 0:t.length)===1&&!e.periods[0].close&&e.periods[0].open.day===0&&e.periods[0].open.hour===0&&e.periods[0].open.minute===0}function j0(e){const t=new Date(e);return t.setUTCDate(t.getUTCDate()-t.getUTCDay()),{year:t.getUTCFullYear(),month:t.getUTCMonth(),day:t.getUTCDate()}}function Uh(e,t){const{year:n,month:r,day:i}=j0(e);let o=Date.UTC(n,r,i,0,-t);const s=e.valueOf()-o;return s<0?o-=yl:s>=yl&&(o+=yl),new Date(o)}function es(e,t){const n=new Date(t);return n.setDate(n.getDate()+e.day),n.setHours(n.getHours()+e.hour),n.setMinutes(n.getMinutes()+e.minute),n}function Fh(e,t,n=new Date){const r=Uh(n,t);for(const i of e.periods){const o={period:i,openDate:es(i.open,r),closeDate:i.close?es(i.close,r):void 0};if(!o.closeDate||(o.closeDate<o.openDate&&(o.openDate>n?o.openDate.setDate(o.openDate.getDate()-7):o.closeDate.setDate(o.closeDate.getDate()+7)),n>=o.openDate&&n<o.closeDate))return o}return{}}var yt;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.ALWAYS_OPEN=1]="ALWAYS_OPEN",e[e.NOT_OPEN_NOW=2]="NOT_OPEN_NOW",e[e.WILL_CLOSE=3]="WILL_CLOSE"})(yt||(yt={}));function U0(e,t=new Date){if(!e.regularOpeningHours||e.utcOffsetMinutes==null)return{status:yt.UNKNOWN};if(bu(e.regularOpeningHours))return{status:yt.ALWAYS_OPEN};const n=Fh(e.regularOpeningHours,e.utcOffsetMinutes,t);if(n.period){if(!n.closeDate)return{status:yt.ALWAYS_OPEN}}else return{status:yt.NOT_OPEN_NOW};return{status:yt.WILL_CLOSE,closeDate:n.closeDate,closePoint:n.period.close}}var st;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NEVER_OPEN=1]="NEVER_OPEN",e[e.ALREADY_OPEN=2]="ALREADY_OPEN",e[e.WILL_OPEN=3]="WILL_OPEN"})(st||(st={}));function F0(e,t=new Date){if(!e.regularOpeningHours||e.utcOffsetMinutes==null)return{status:st.UNKNOWN};if(bu(e.regularOpeningHours))return{status:st.ALREADY_OPEN};const n=Uh(t,e.utcOffsetMinutes),r={status:st.NEVER_OPEN};let i=1/0;for(const o of e.regularOpeningHours.periods){const s=es(o.open,n);if(!o.close)return{status:st.ALREADY_OPEN};const l=es(o.close,n);if(l>=s&&t>=s&&t<l)return{status:st.ALREADY_OPEN};if(l<s&&!(t>=l&&t<s))return{status:st.ALREADY_OPEN};s<t&&s.setDate(s.getDate()+7);const a=s.valueOf()-t.valueOf();a<i&&(i=a,r.status=st.WILL_OPEN,r.openPoint=o.open,r.openDate=s)}return r}function B0(e,t=new Date){if(!e.regularOpeningHours||e.utcOffsetMinutes==null)return;if(bu(e.regularOpeningHours))return!0;const{period:n}=Fh(e.regularOpeningHours,e.utcOffsetMinutes,t);return!!n}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Bh(e){return!e.hasOwnProperty("id")}function Sa(e){var t;return H0(e)?{location:((t=e.location)==null?void 0:t.toJSON())??void 0,placeId:e.id,query:e.formattedAddress??e.displayName??void 0}:V0(e)?{location:e.toJSON()}:{location:e}}function H0(e){return e.hasOwnProperty("id")}function V0(e){return typeof e.lat=="function"}const Hh=Object.freeze({FREE:0,INEXPENSIVE:1,MODERATE:2,EXPENSIVE:3,VERY_EXPENSIVE:4}),W0=Object.freeze(Object.fromEntries(Object.entries(Hh).map(e=>e.reverse())));function G0(e){return typeof e=="number"?e:Hh[e]??null}function Y0(e){return typeof e!="number"?e:W0[e]??null}function Vh(e,t){return t?S`<a href=${t} target="_blank">${e}</a>`:S`<span>${e}</span>`}async function Li(e,t){const n=await K.importLibrary("places",t),r=new n.Place({id:e.place_id??"PLACE_ID_MISSING"});let i=Sd(e);return new Proxy(r,{get(o,s,l){if(s==="fetchFields")return async u=>{const c=u.fields.filter(f=>i[f]===void 0);try{return await o.fetchFields({...u,fields:c})}catch(f){if(ts(f,"fetchFields()")){const m=Gh(c);if(!m.length)return{place:r};const v=await q0(n,r.id,m);return i={...Sd(v),...i},{place:r}}throw f}};if(s==="isOpen")return async u=>{try{return await Reflect.get(o,s,l).apply(l,[u])}catch(d){if(ts(d,"isOpen()"))return B0(l,u);throw d}};const a=i[s];return a===void 0?Reflect.get(o,s,l):a}})}function Wh(e){return!!(e.businessStatus&&e.regularOpeningHours&&e.utcOffsetMinutes!=null)}function Sd(e){var n;const t={};if(e.address_components!==void 0&&(t.addressComponents=e.address_components.map(r=>({longText:r.long_name,shortText:r.short_name,types:r.types}))),e.adr_address!==void 0&&(t.adrFormatAddress=e.adr_address),e.business_status!==void 0&&(t.businessStatus=e.business_status),e.formatted_address!==void 0&&(t.formattedAddress=e.formatted_address),e.formatted_phone_number!==void 0&&(t.nationalPhoneNumber=e.formatted_phone_number),e.geometry!==void 0){const r=e.geometry;r.location&&(t.location=r.location),r.viewport&&(t.viewport=r.viewport)}if(e.html_attributions!==void 0&&(t.attributions=e.html_attributions.map(r=>{const{text:i,url:o}=wd(r);return{provider:i??"",providerURI:o??null}})),e.icon_background_color!==void 0&&(t.iconBackgroundColor=e.icon_background_color),e.icon_mask_base_uri!==void 0&&(t.svgIconMaskURI=e.icon_mask_base_uri),e.international_phone_number!==void 0&&(t.internationalPhoneNumber=e.international_phone_number),e.name!==void 0&&(t.displayName=e.name),e.opening_hours!==void 0){const r=(n=e.opening_hours.periods)==null?void 0:n.map(i=>({open:Cd(i.open),close:i.close?Cd(i.close):null}));t.regularOpeningHours={periods:r??[],weekdayDescriptions:e.opening_hours.weekday_text??[]}}return e.photos!==void 0&&(t.photos=e.photos.map(r=>({authorAttributions:r.html_attributions.map(o=>{const{text:s,url:l}=wd(o);return{displayName:s??"",photoURI:"",uri:l||""}}),getURI:r.getUrl,heightPx:r.height,widthPx:r.width}))),e.place_id!==void 0&&(t.id=e.place_id),e.plus_code!==void 0&&(t.plusCode={compoundCode:e.plus_code.compound_code??null,globalCode:e.plus_code.global_code}),e.price_level!==void 0&&(t.priceLevel=Y0(e.price_level)),e.rating!==void 0&&(t.rating=e.rating),e.reviews!==void 0&&(t.reviews=e.reviews.map(r=>({authorAttribution:{displayName:r.author_name,photoURI:r.profile_photo_url,uri:r.author_url||""},publishTime:new Date(r.time),rating:r.rating??null,relativePublishTimeDescription:r.relative_time_description,text:r.text,textLanguageCode:r.language}))),e.types!==void 0&&(t.types=e.types),e.url!==void 0&&(t.googleMapsURI=e.url),e.user_ratings_total!==void 0&&(t.userRatingCount=e.user_ratings_total),e.utc_offset_minutes!==void 0&&(t.utcOffsetMinutes=e.utc_offset_minutes),e.website!==void 0&&(t.websiteURI=e.website),t}function Cd({day:e,hours:t,minutes:n}){return{day:e,hour:t,minute:n}}const K0={addressComponents:"address_components",adrFormatAddress:"adr_address",businessStatus:"business_status",formattedAddress:"formatted_address",nationalPhoneNumber:"formatted_phone_number",location:"geometry",viewport:"geometry",iconBackgroundColor:"icon_background_color",svgIconMaskURI:"icon_mask_base_uri",internationalPhoneNumber:"international_phone_number",displayName:"name",regularOpeningHours:"opening_hours",photos:"photos",plusCode:"plus_code",priceLevel:"price_level",rating:"rating",reviews:"reviews",types:"types",googleMapsURI:"url",userRatingCount:"user_ratings_total",utcOffsetMinutes:"utc_offset_minutes",websiteURI:"website",id:"place_id"};function Gh(e){const t=[];for(const n of e){const r=K0[n];r&&t.push(r)}return t}function ts(e,t){return e instanceof Error?e.message.startsWith(`Place.prototype.${t} is not available`)||e.message.startsWith(`google.maps.places.Place.${t} is not available`):!1}async function q0(e,t,n){const r=new e.PlacesService(document.createElement("div"));return new Promise((i,o)=>{r.getDetails({placeId:t,fields:n},(s,l)=>{s&&l==="OK"?i(s):o(l)})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Tu=class extends Event{constructor(t,n,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=n,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ld=class{constructor(t,n,r,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,s)),this.unsubscribe=s},this.host=t,n.context!==void 0){const o=n;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=n,this.callback=r,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Tu(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Q0{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,n=!1){const r=n||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[n,{disposer:r}]of this.subscriptions)n(this.o,r)},t!==void 0&&(this.value=t)}addCallback(t,n,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:n});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let X0=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class Ca extends Q0{constructor(t,n,r){var i,o;super(n.context!==void 0?n.initialValue:r),this.onContextRequest=s=>{const l=s.composedPath()[0];s.context===this.context&&l!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,l,s.subscribe))},this.onProviderRequest=s=>{const l=s.composedPath()[0];if(s.context!==this.context||l===this.host)return;const a=new Set;for(const[u,{consumerHost:d}]of this.subscriptions)a.has(u)||(a.add(u),d.dispatchEvent(new Tu(this.context,u,!0)));s.stopPropagation()},this.host=t,n.context!==void 0?this.context=n.context:this.context=n,this.attachListeners(),(o=(i=this.host).addController)==null||o.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new X0(this.context))}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z0{constructor(){this.pendingContextRequests=new Map,this.onContextProvider=t=>{const n=this.pendingContextRequests.get(t.context);if(n===void 0)return;this.pendingContextRequests.delete(t.context);const{requests:r}=n;for(const{elementRef:i,callbackRef:o}of r){const s=i.deref(),l=o.deref();s===void 0||l===void 0||s.dispatchEvent(new Tu(t.context,l,!0))}},this.onContextRequest=t=>{if(t.subscribe!==!0)return;const n=t.composedPath()[0],r=t.callback;let i=this.pendingContextRequests.get(t.context);i===void 0&&this.pendingContextRequests.set(t.context,i={callbacks:new WeakMap,requests:[]});let o=i.callbacks.get(n);o===void 0&&i.callbacks.set(n,o=new WeakSet),o.has(r)||(o.add(r),i.requests.push({elementRef:new WeakRef(n),callbackRef:new WeakRef(r)}))}}attach(t){t.addEventListener("context-request",this.onContextRequest),t.addEventListener("context-provider",this.onContextProvider)}detach(t){t.removeEventListener("context-request",this.onContextRequest),t.removeEventListener("context-provider",this.onContextProvider)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yh({context:e}){return(t,n)=>{const r=new WeakMap;if(typeof n=="object")return n.addInitializer(function(){r.set(this,new Ca(this,{context:e}))}),{get(){return t.get.call(this)},set(i){var o;return(o=r.get(this))==null||o.setValue(i),t.set.call(this,i)},init(i){var o;return(o=r.get(this))==null||o.setValue(i),i}};{t.constructor.addInitializer(s=>{r.set(s,new Ca(s,{context:e}))});const i=Object.getOwnPropertyDescriptor(t,n);let o;if(i===void 0){const s=new WeakMap;o={get(){return s.get(this)},set(l){r.get(this).setValue(l),s.set(this,l)},configurable:!0,enumerable:!0}}else{const s=i.set;o={...i,set(l){r.get(this).setValue(l),s==null||s.call(this,l)}}}return void Object.defineProperty(t,n,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bs({context:e,subscribe:t}){return(n,r)=>{typeof r=="object"?r.addInitializer(function(){new Ld(this,{context:e,callback:i=>{n.set.call(this,i)},subscribe:t})}):n.constructor.addInitializer(i=>{new Ld(i,{context:e,callback:o=>{i[r]=o},subscribe:t})})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Pd=!1;function J0(){if(Pd)return;new Z0().attach(document.body),Pd=!0}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */J0();const Mu=Symbol("place"),Kh=Symbol("place-consumer-registration");class Ce extends Ne{constructor(){super(...arguments),this.noData=!0}get place(){return this.placeInternal}set place(t){this.placeInternal=t,this.updatePlaceV2(t)}willUpdate(t){var r;t.has("contextPlace")&&!this.placeV2&&this.placeChangedCallback(this.contextPlace,t.get("contextPlace"));const n=this.getPlace();this.noData=!(n&&this.placeHasData(n)),t.has("contextRegistration")&&((r=this.contextRegistration)==null||r.registerPlaceConsumer(this))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.contextRegistration)==null||t.unregisterPlaceConsumer(this)}placeChangedCallback(t,n){}placeHasData(t){return!0}getPlace(){return this.placeV2??this.contextPlace}async updatePlaceV2(t){const n=this.getPlace();!t||!Bh(t)?this.placeV2=t:this.placeV2=await Li(t,this),this.placeChangedCallback(this.placeV2,n)}}y([bs({context:Kh,subscribe:!0}),k({attribute:!1}),E("design:type",Object)],Ce.prototype,"contextRegistration",void 0);y([bs({context:Mu,subscribe:!0}),k({attribute:!1}),E("design:type",Object)],Ce.prototype,"contextPlace",void 0);y([k({type:Boolean,attribute:"no-data",reflect:!0}),E("design:type",Object)],Ce.prototype,"noData",void 0);y([he(),E("design:type",Object)],Ce.prototype,"placeV2",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let An=class extends Ce{render(){const t=this.getPlace();if(!(t&&this.placeHasData(t)))return S``;const n=t.attributions||[];return S`${xa(jn(n,this.makeAttributionHTML),S`<span class="sep">, </span>`)}`}getRequiredFields(){return["attributions"]}placeHasData(t){return!!(t.attributions&&t.attributions.length>0)}makeAttributionHTML(t){return Vh(t.provider,t.providerURI)}};An.styles=F`
    a {
      color: inherit;
      text-decoration: inherit;
    }

    a:hover {
      text-decoration: underline;
    }
  `;An=y([Q("gmpx-place-attribution")],An);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Du=(e,t,n)=>{for(const r of t)if(r[0]===e)return(0,r[1])();return n==null?void 0:n()};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ts extends Event{constructor(t){super("gmpx-requesterror",{bubbles:!1,composed:!1}),this.error=t}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zi={fromAttribute(e){if(e===null)return;const[t,n]=e.split(",").map(r=>Number(r.trim()));return{lat:t||0,lng:n||0}},toAttribute(e){return e?`${e.lat},${e.lng}`:null}},qh={fromAttribute(e){return(e==null?void 0:e.split(/\s+/).filter(t=>t!==""))??void 0},toAttribute(e){return(e==null?void 0:e.join(" "))??null}};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Qh{constructor(t){this.capacity=t,this.map=new Map}has(t){return this.reinsertIfPresent(t),this.map.has(t)}get(t){return this.reinsertIfPresent(t),this.map.get(t)}set(t,n){if(this.delete(t),this.map.set(t,n),this.map.size>this.capacity){const[r]=this.map.keys();this.map.delete(r)}}delete(t){this.map.has(t)&&this.map.delete(t)}reinsertIfPresent(t){if(this.map.has(t)){const n=this.map.get(t);this.map.delete(t),this.map.set(t,n)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function e1(e,t){const{Place:n}=await K.importLibrary("places",t);return new n({id:e})}class t1{constructor(t,n){this.consumer=n,this.cache=new Qh(t)}getPlace(t){const n=this.cache.get(t);if(n)return n;const r=e1(t,this.consumer);return this.cache.set(t,r),r}updatePlace(t){this.cache.set(t.id,Promise.resolve(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Gn,rt;(function(e){e.EMPTY="EMPTY",e.LOADING="LOADING",e.LOADED="LOADED",e.ERROR="ERROR"})(rt||(rt={}));const n1=100;let xt=Gn=class extends Ne{constructor(){super(...arguments),this.autoFetchDisabled=!1,this.contextRegistration={registerPlaceConsumer:t=>void this.registerPlaceConsumer(t),unregisterPlaceConsumer:t=>void this.unregisterPlaceConsumer(t)},this.loadingState=rt.EMPTY,this.slotValidator=new Rs(this,this.logger,["","initial-loading","error"]),this.placeConsumers=new Set,this.placeAttributions=new Set,this.placeContextProvider=new Ca(this,{context:Mu})}get contextPlace(){return this.placeContextProvider.value}set contextPlace(t){this.placeContextProvider.setValue(t,!0)}render(){return Du(this.loadingState,[[rt.EMPTY,()=>S``],[rt.LOADING,()=>S`<slot name="initial-loading"></slot>`],[rt.LOADED,()=>S`<slot></slot>`],[rt.ERROR,()=>S`<slot name="error"></slot>`]])}async updated(t){if(t.has("place"))try{await this.updatePlace()}catch(n){this.handleError(n)}}async updatePlace(){var t;if(this.loadingState=rt.LOADING,this.place)typeof this.place=="string"?this.contextPlace=await Gn.placeLookup.getPlace(this.place):Bh(this.place)?(this.contextPlace=await Li(this.place,this),Gn.placeLookup.updatePlace(this.contextPlace)):(this.contextPlace=this.place,Gn.placeLookup.updatePlace(this.contextPlace));else{this.contextPlace=void 0,this.loadingState=rt.EMPTY;return}if(typeof this.place=="string"||!this.autoFetchDisabled){let n;(t=this.fields)!=null&&t.length?n=this.fields:(await 0,n=this.getConsumerFields());try{await this.contextPlace.fetchFields({fields:n})}catch(r){if(ts(r,"fetchFields()"))this.contextPlace=await Li({place_id:this.contextPlace.id}),Gn.placeLookup.updatePlace(this.contextPlace),await this.contextPlace.fetchFields({fields:n});else throw r}for(const r of this.placeConsumers)r.requestUpdate("contextPlace",r.contextPlace,{hasChanged:()=>!0})}this.appendAttributionIfAbsent(),this.loadingState=rt.LOADED}registerPlaceConsumer(t){this.placeConsumers.add(t),t instanceof An&&this.placeAttributions.add(t)}unregisterPlaceConsumer(t){this.placeConsumers.delete(t),t instanceof An&&this.placeAttributions.delete(t)}getConsumerFields(){const t=new Set;for(const n of this.placeConsumers)for(const r of n.getRequiredFields())t.add(r);return Array.from(t.values())}appendAttributionIfAbsent(){this.placeAttributions.size===0&&this.appendChild(new An)}handleError(t){this.loadingState=rt.ERROR;const n=new Ts(t);this.dispatchEvent(n)}};xt.placeLookup=new t1(n1);y([k({type:Boolean,attribute:"auto-fetch-disabled",reflect:!0}),E("design:type",Object)],xt.prototype,"autoFetchDisabled",void 0);y([k({converter:qh,reflect:!0}),E("design:type",Array)],xt.prototype,"fields",void 0);y([k({type:String,hasChanged:()=>!0}),E("design:type",Object)],xt.prototype,"place",void 0);y([Yh({context:Kh}),k({attribute:!1}),E("design:type",Object)],xt.prototype,"contextRegistration",void 0);y([he(),E("design:type",Object)],xt.prototype,"loadingState",void 0);xt=Gn=y([Q("gmpx-place-data-provider")],xt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function r1(e,t){let n="https://www.google.com/maps/dir/?api=1";return e&&(n=kd(n,"origin",e)),t&&(n=kd(n,"destination",t)),n}function kd(e,t,n){return n.placeId&&(e+=`&${t}_place_id=${n.placeId}`),n.query?e+=`&${t}=${encodeURIComponent(n.query)}`:n.location?e+=`&${t}=${n.location.lat},${n.location.lng}`:n.placeId&&(e+=`&${t}=${encodeURIComponent("Selected Place")}`),e}let jt=class extends Ce{constructor(){super(...arguments),this.ariaLabel=null,this.condensed=!1,this.reversed=!1,this.variant="outlined"}render(){return S`
      <gmpx-icon-button
        .ariaLabel=${this.ariaLabel}
        .condensed=${this.condensed}
        .href=${this.getHref()}
        icon="directions"
        .variant=${this.variant}
      >
        <slot></slot>
      </gmpx-icon-button>
    `}updated(){this.role=this.ariaLabel!=null?"none":null}getRequiredFields(){return["displayName","formattedAddress","location"]}placeHasData(t){return!0}getHref(){const t=this.getPlace(),n=this.reversed?t:this.origin,r=this.reversed?this.origin:t;return r1(n?Sa(n):void 0,r?Sa(r):void 0)}};jt.shadowRootOptions={...Ce.shadowRootOptions,delegatesFocus:!0};y([k({attribute:"aria-label",reflect:!0,type:String}),E("design:type",Object)],jt.prototype,"ariaLabel",void 0);y([k({reflect:!0,type:Boolean}),E("design:type",Object)],jt.prototype,"condensed",void 0);y([k({attribute:!1}),E("design:type",Object)],jt.prototype,"origin",void 0);y([k({reflect:!0,type:Boolean}),E("design:type",Object)],jt.prototype,"reversed",void 0);y([k({reflect:!0,type:String}),E("design:type",String)],jt.prototype,"variant",void 0);jt=y([Q("gmpx-place-directions-button")],jt);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xh{start(t,n){this.stop(),this.updateTimeout(t,n)}stop(){this.timeoutId!=null&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}updateTimeout(t,n){this.timeoutId=setTimeout(()=>{t(),this.updateTimeout(t,n)},n)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const i1={"isOpen()":60*1e3};function oo(e){return e==="opening_hours.isOpen()"?"isOpen()":e}async function o1(e){if(e&&Wh(e))return await e.isOpen()}function Zh(e,t){var n;switch(t){case"hasCurbsidePickup":return e.hasCurbsidePickup;case"hasDelivery":return e.hasDelivery;case"hasDineIn":return e.hasDineIn;case"hasTakeout":return e.hasTakeout;case"hasWheelchairAccessibleEntrance":return(n=e.accessibilityOptions)==null?void 0:n.hasWheelchairAccessibleEntrance;case"isReservable":return e.isReservable;case"servesBeer":return e.servesBeer;case"servesBreakfast":return e.servesBreakfast;case"servesBrunch":return e.servesBrunch;case"servesDinner":return e.servesDinner;case"servesLunch":return e.servesLunch;case"servesVegetarianFood":return e.servesVegetarianFood;case"servesWine":return e.servesWine;default:return}}function s1(e){return e==="isOpen()"}async function l1(e,t){return t==="isOpen()"?o1(e):null}function a1(e,t){return Zh(e,t)??null}let Pi=class extends Ce{constructor(){super(...arguments),this.poll=new Xh}render(){return S`${Du(this.valueToRender,[[!0,()=>S`<slot name="true"></slot>`],[!1,()=>S`<slot name="false"></slot>`]],()=>S``)}`}getRequiredFields(){if(!this.field)return[];const t=oo(this.field);switch(t){case"isOpen()":return["businessStatus","regularOpeningHours","utcOffsetMinutes"];case"hasWheelchairAccessibleEntrance":return["accessibilityOptions"];default:return[t]}}placeHasData(t){if(!this.field)return!1;const n=oo(this.field);return n==="isOpen()"?Wh(t):Zh(t,n)!=null}async getUpdateComplete(){const t=await super.getUpdateComplete();return this.asyncRenderComplete&&await this.asyncRenderComplete.promise,t}willUpdate(t){if(super.willUpdate(t),this.updateValueToRender(),t.has("field")&&(this.poll.stop(),this.field)){const n=i1[oo(this.field)];n&&this.poll.start(()=>void this.requestUpdate(),n)}}disconnectedCallback(){super.disconnectedCallback(),this.poll.stop(),this.resetAsyncRenderPromise()}updateValueToRender(){const t=this.getPlace();if(this.resetAsyncRenderPromise(),!t||!this.field){this.valueToRender=void 0;return}const n=oo(this.field);s1(n)?(this.asyncRenderComplete=new an,l1(t,n).then(r=>{var i;this.valueToRender=r,(i=this.asyncRenderComplete)==null||i.resolve()})):this.valueToRender=a1(t,n)}resetAsyncRenderPromise(){var t;(t=this.asyncRenderComplete)==null||t.resolve(),this.asyncRenderComplete=void 0}};y([k({type:String,reflect:!0}),E("design:type",String)],Pi.prototype,"field",void 0);y([he(),E("design:type",Object)],Pi.prototype,"valueToRender",void 0);Pi=y([Q("gmpx-place-field-boolean")],Pi);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function La(e){switch(e){case"url":return"googleMapsURI";case"website":return"websiteURI";default:return e}}function Od(e,t){switch(La(t)){case"googleMapsURI":return e.googleMapsURI;case"websiteURI":return e.websiteURI;default:return}}function u1(e){const t=e.match(/^(https?:\/\/)?(www\.)?([^\/\?]+)/);return t&&t.length>3?t[3]:e}let xr=class extends Ce{constructor(){super(...arguments),this.hrefField="websiteURI",this.ariaLabel=null}render(){const t=this.getHref();return S`${me(t,()=>S`
      <a target="_blank" rel="noopener noreferrer" href=${t}
          aria-label=${this.ariaLabel??j}>
        ${me(this.hasContentForSlot(),()=>S`<slot></slot>`,()=>S`${this.getDefaultLinkText(t)}`)}
      </a>
    `)}`}updated(){this.role=this.ariaLabel!=null?"none":null}getRequiredFields(){return[La(this.hrefField)]}placeHasData(t){return Od(t,this.hrefField)!=null}getHref(){const t=this.getPlace();return t?Od(t,this.hrefField)??null:null}hasContentForSlot(){var t;return!!((t=this.textContent)!=null&&t.trim()||this.children.length>0)}getDefaultLinkText(t){switch(La(this.hrefField)){case"googleMapsURI":return"View on Google Maps";case"websiteURI":default:return u1(t)}}};xr.styles=F`
    :host(:hover) {
      text-decoration: underline;
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }
  `;y([k({type:String,reflect:!0,attribute:"href-field"}),E("design:type",String)],xr.prototype,"hrefField",void 0);y([k({attribute:"aria-label",reflect:!0,type:String}),E("design:type",Object)],xr.prototype,"ariaLabel",void 0);xr=y([Q("gmpx-place-field-link")],xr);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const c1=Object.freeze({LOCATOR_BACK_BUTTON_CTA:"Back",LOCATOR_LIST_HEADER:"Find a location near you",LOCATOR_LIST_SUBHEADING:"All locations",LOCATOR_LIST_SUBHEADING_WITH_SEARCH:"Nearest locations",LOCATOR_SEARCH_LOCATION_MARKER_TITLE:"My location",LOCATOR_SEARCH_PROMPT:"Enter your address or zip code",LOCATOR_VIEW_DETAILS_CTA:"View details",PLACE_CLEAR_ARIA_LABEL:"Clear",PLACE_CLOSED:"Closed",PLACE_CLOSED_PERMANENTLY:"Permanently closed",PLACE_CLOSED_TEMPORARILY:"Temporarily closed",PLACE_CLOSES:e=>`Closes ${e}`,PLACE_HAS_DELIVERY:"Delivery",PLACE_HAS_DINE_IN:"Dine-in",PLACE_HAS_TAKEOUT:"Takeout",PLACE_NO_DELIVERY:"No Delivery",PLACE_NO_DINE_IN:"No Dine-in",PLACE_NO_TAKEOUT:"No Takeout",PLACE_OPEN_ALWAYS:"Open 24 hours",PLACE_OPEN_NOW:"Open now",PLACE_OPENING_HOURS_DEFAULT_SUMMARY:"See opening hours",PLACE_OPENING_HOURS_ARIA_LABEL:"Weekly opening hours",PLACE_OPENS:e=>`Opens ${e}`,PLACE_OPERATIONAL:"Operational",PLACE_PHOTO_ALT:e=>`Photo of ${e||"place"}`,PLACE_PHOTO_ATTRIBUTION_PREFIX:"Photo by",PLACE_PHOTO_BACK_ARIA_LABEL:"Back",PLACE_PHOTO_NEXT_ARIA_LABEL:"Next",PLACE_PHOTO_PREV_ARIA_LABEL:"Previous",PLACE_PHOTO_TILE_ARIA_LABEL:e=>`Open photo ${e}`,PLACE_RATING_ARIA_LABEL:e=>e===1?"1 star":`${e} stars`,PLACE_REVIEWS_AUTHOR_PHOTO_ALT:e=>`Photo of ${e||"reviewer"}`,PLACE_REVIEWS_MORE:"More reviews",PLACE_REVIEWS_SECTION_CAPTION:"Most relevant",PLACE_REVIEWS_SECTION_HEADING:"Reviews by Google users",PLACE_SEARCH_ARIA_LABEL:"Search",PLACE_TYPE:e=>e===""?"":(e[0].toUpperCase()+e.slice(1)).replace(/_/g," ")});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class le{constructor(t){this.host=t,t.addController(this)}hostConnected(){le.connectedComponents.add(this.host)}hostDisconnected(){le.connectedComponents.delete(this.host)}getStringLiteral(t,...n){const r=le.translatedStringLiterals[t]??c1[t];return typeof r=="string"?r:r(...n)}static setStringLiterals(t){for(const n of Object.keys(t))le.translatedStringLiterals[n]=t[n];for(const n of le.connectedComponents)n.requestUpdate()}static buildLocalizer(t){const n=new le(t);return n.getStringLiteral.bind(n)}static reset(){le.connectedComponents.clear(),le.translatedStringLiterals={}}}le.connectedComponents=new Set;le.translatedStringLiterals={};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const d1=new Set(["accounting","airport","amusement_park","aquarium","art_gallery","atm","bakery","bank","bar","beauty_salon","bicycle_store","book_store","bowling_alley","bus_station","cafe","campground","car_dealer","car_rental","car_repair","car_wash","casino","cemetery","church","city_hall","clothing_store","convenience_store","courthouse","dentist","department_store","doctor","drugstore","electrician","electronics_store","embassy","fire_station","florist","funeral_home","furniture_store","gas_station","gym","hair_care","hardware_store","hindu_temple","home_goods_store","hospital","insurance_agency","jewelry_store","laundry","lawyer","library","light_rail_station","liquor_store","local_government_office","locksmith","lodging","meal_delivery","meal_takeaway","mosque","movie_rental","movie_theater","moving_company","museum","night_club","painter","park","parking","pet_store","pharmacy","physiotherapist","plumber","police","post_office","primary_school","real_estate_agency","restaurant","roofing_contractor","rv_park","school","secondary_school","shoe_store","shopping_mall","spa","stadium","storage","store","subway_station","supermarket","synagogue","taxi_stand","tourist_attraction","train_station","transit_station","travel_agency","university","veterinary_care","zoo"]);function Jh(e){switch(e){case"business_status":return"businessStatus";case"name":return"displayName";case"formatted_address":return"formattedAddress";case"place_id":return"id";case"international_phone_number":return"internationalPhoneNumber";case"geometry.location":return"location";case"geometry.location.lat":return"location.lat";case"geometry.location.lng":return"location.lng";case"formatted_phone_number":return"nationalPhoneNumber";case"plus_code.compound_code":return"plusCode.compoundCode";case"plus_code.global_code":return"plusCode.globalCode";case"rating":return"rating";case"user_ratings_total":return"userRatingCount";default:return e}}function p1(e){return Jh(e).split(".")[0]}let ns=class extends Ce{constructor(){super(...arguments),this.getMsg=le.buildLocalizer(this)}render(){return S`<span>${this.getDisplayText()}</span>`}getRequiredFields(){return this.field?[p1(this.field)]:[]}placeHasData(t){return!!(this.field&&this.getFieldValue(t,this.field)!=null)}getDisplayText(){const t=this.getPlace();return!t||!this.field?"":this.getFieldValue(t,this.field)??""}getFieldValue(t,n){var r,i,o,s,l,a,u;switch(Jh(n)){case"businessStatus":return this.renderBusinessStatus(t.businessStatus);case"displayName":return t.displayName;case"formattedAddress":return t.formattedAddress;case"id":return t.id;case"internationalPhoneNumber":return t.internationalPhoneNumber;case"location":return(r=t.location)==null?void 0:r.toString();case"location.lat":return(i=t.location)==null?void 0:i.lat().toString();case"location.lng":return(o=t.location)==null?void 0:o.lng().toString();case"nationalPhoneNumber":return t.nationalPhoneNumber;case"plusCode.compoundCode":return(s=t.plusCode)==null?void 0:s.compoundCode;case"plusCode.globalCode":return(l=t.plusCode)==null?void 0:l.globalCode;case"rating":return(a=t.rating)==null?void 0:a.toString();case"types":return t.types&&this.getDisplayType(t.types);case"userRatingCount":return(u=t.userRatingCount)==null?void 0:u.toString();default:return}}renderBusinessStatus(t){if(!t)return t;switch(t){case"CLOSED_PERMANENTLY":return this.getMsg("PLACE_CLOSED_PERMANENTLY");case"CLOSED_TEMPORARILY":return this.getMsg("PLACE_CLOSED_TEMPORARILY");case"OPERATIONAL":return this.getMsg("PLACE_OPERATIONAL");default:return}}getDisplayType(t){for(const n of t)if(d1.has(n))return this.getMsg("PLACE_TYPE",n);return null}};y([k({type:String,reflect:!0}),E("design:type",String)],ns.prototype,"field",void 0);ns=y([Q("gmpx-place-field-text")],ns);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const f1=60*1e3;let Sr=class extends Ce{constructor(){super(...arguments),this.summaryOnly=!1,this.expanded=!1,this.poll=new Xh,this.fontLoader=new fn(this,[we.MATERIAL_SYMBOLS_OUTLINED]),this.getMsg=le.buildLocalizer(this)}disconnectedCallback(){super.disconnectedCallback(),this.poll.stop()}willUpdate(t){super.willUpdate(t),this.poll.stop(),this.getPlace()&&this.poll.start(()=>void this.requestUpdate(),f1)}render(){const t=this.getPlace();if(!t)return j;if(!t.regularOpeningHours)return t.businessStatus==="OPERATIONAL"?j:S`
        <div class="closed">
          <gmpx-place-field-text field="businessStatus" .place=${t}>
          </gmpx-place-field-text>
        </div>
      `;const{weekdayDescriptions:n}=t.regularOpeningHours;let r;return t.utcOffsetMinutes==null?r=this.summaryOnly?S``:S`${this.getMsg("PLACE_OPENING_HOURS_DEFAULT_SUMMARY")}`:r=S`
        <gmpx-place-field-boolean field="isOpen()" .place=${t}>
          <div slot="true">${this.getOpenSummaryContent(t)}</div>
          <div slot="false">${this.getClosedSummaryContent(t)}</div>
        </gmpx-place-field-boolean>
      `,this.summaryOnly?r:S`
      <button
        aria-controls="details"
        aria-expanded=${this.expanded}
        @click=${()=>this.expanded=!this.expanded}
        type="button"
      >
        ${r}
        <span aria-hidden="true" class="icon material-symbols-outlined">
          ${this.expanded?"expand_less":"expand_more"}
        </span>
      </button>
      <div
        aria-label=${this.getMsg("PLACE_OPENING_HOURS_ARIA_LABEL")}
        .hidden=${!this.expanded}
        id="details"
        role="region"
      >
        <ul>
          ${jn(n,i=>S`
            <li>${i}</li>
          `)}
        </ul>
      </div>
    `}getRequiredFields(){return["businessStatus","regularOpeningHours","utcOffsetMinutes"]}placeHasData(t){return t.businessStatus==="OPERATIONAL"&&!t.regularOpeningHours?!1:!!(t.businessStatus||t.regularOpeningHours)}getOpenSummaryContent(t){const{status:n,closePoint:r,closeDate:i}=U0(t),o=S`<span class="open">${this.getMsg("PLACE_OPEN_NOW")}</span>`;return n===yt.ALWAYS_OPEN?S`<span class="open">${this.getMsg("PLACE_OPEN_ALWAYS")}</span>`:n===yt.WILL_CLOSE&&jh(i)?S`
        ${o}
        ·
        <span>${this.getMsg("PLACE_CLOSES",xd(r,i))}</span>
      `:(yt.NOT_OPEN_NOW,o)}getClosedSummaryContent(t){const{status:n,openPoint:r,openDate:i}=F0(t);let o=S``;return n===st.WILL_OPEN?o=S` · <span>${this.getMsg("PLACE_OPENS",xd(r,i))}</span>`:st.ALREADY_OPEN,S`
      <span class="closed">${this.getMsg("PLACE_CLOSED")}</span>
      ${o}
    `}};Sr.styles=F`
    button {
      align-items: center;
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      display: flex;
      font: inherit;
      padding: 0;
    }

    span {
      display: inline-block;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    .closed {
      color: var(--gmpx-hours-color-closed, #d50000);
    }

    .open {
      color: var(--gmpx-hours-color-open, #188038);
    }

    .icon {
      direction: inherit;
      font-size: inherit;
      margin-inline-start: 1rem;
    }
  `;y([k({attribute:"summary-only",reflect:!0,type:Boolean}),E("design:type",Object)],Sr.prototype,"summaryOnly",void 0);y([he(),E("design:type",Object)],Sr.prototype,"expanded",void 0);Sr=y([Q("gmpx-place-opening-hours")],Sr);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ad=class extends Ne{connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(()=>{this.hidden=!!this.querySelector("[no-data]")}),this.observer.observe(this,{subtree:!0,attributeFilter:["no-data"]})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.observer)==null||t.disconnect()}render(){return S`<slot></slot>`}};Ad=y([Q("gmpx-optional-data-container-internal")],Ad);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class eg{constructor(t,n){this.shouldRetry=n,this.requestCacheMap=new Qh(t)}get(t){return this.requestCacheMap.get(this.serialize(t))??null}set(t,n){const r=this.serialize(t);this.requestCacheMap.set(r,n),n.catch(i=>{this.shouldRetry(i)&&this.requestCacheMap.delete(r)})}serialize(t){return JSON.stringify(t,(r,i)=>{if(i instanceof Object&&!(i instanceof Array)){const o=i,s={};for(const l of Object.keys(o).sort())s[l]=o[l];return s}else return i})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const h1=100;function tg(){return new eg(h1,e=>e.code==="OVER_QUERY_LIMIT"||e.code==="UNKNOWN_ERROR")}class lt{constructor(t){this.host=t,this.host.addController(this)}hostUpdate(){}async route(t){let n=lt.cache.get(t);n===null&&(n=this.getService().then(r=>r.route(t)),lt.cache.set(t,n));try{return await n}catch(r){const i=new Ts(r);return this.host.dispatchEvent(i),null}}async getService(){if(!lt.service){const{DirectionsService:t}=await K.importLibrary("routes",this.host);lt.service=new t}return lt.service}static reset(){lt.cache=tg(),lt.service=void 0}}lt.cache=tg();/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function g1(e){switch(e){case"bicycling":return"directions_bike";case"transit":return"directions_subway";case"walking":return"directions_walk";default:return"directions_car"}}function $d(e){if(!e)return null;const{placeId:t,location:n,query:r}=Sa(e);return t?{placeId:t}:n?{location:n}:r?{query:r}:null}let Cr=class extends Ce{constructor(){super(...arguments),this.fontLoader=new fn(this,[we.MATERIAL_SYMBOLS_OUTLINED]),this.directionsController=new lt(this),this.isFetchingDirectionsData=!1}willUpdate(t){super.willUpdate(t),(t.has("origin")||t.has("travelMode"))&&this.updateDirectionsData()}placeChangedCallback(t,n){(t==null?void 0:t.id)!==(n==null?void 0:n.id)&&this.updateDirectionsData()}render(){const{distance:t,duration:n}=this.directionsData??{};return this.isFetchingDirectionsData||!t?S``:this.travelMode&&n?S`
      <span class="icon material-symbols-outlined">
        ${g1(this.travelMode)}
      </span>
      <span>${n.text}</span>
    `:S`<span>${t.text}</span>`}getRequiredFields(){return[]}placeHasData(){return this.directionsData!=null}async updateDirectionsData(){var i,o;if(this.isFetchingDirectionsData)return;const t=this.getPlace(),n=$d(this.origin),r=$d(t);if(n&&r){this.isFetchingDirectionsData=!0;const s=await this.directionsController.route({origin:n,destination:r,travelMode:((i=this.travelMode)==null?void 0:i.toUpperCase())??"DRIVING"});this.directionsData=(o=s==null?void 0:s.routes[0])==null?void 0:o.legs[0],this.requestUpdate()}else this.directionsData=void 0;this.isFetchingDirectionsData=!1}};Cr.styles=F`
    .icon {
      font-size: inherit;
      line-height: inherit;
      vertical-align: bottom;
    }
  `;y([k({attribute:"travel-mode",reflect:!0,type:String}),E("design:type",String)],Cr.prototype,"travelMode",void 0);y([k({attribute:!1}),E("design:type",Object)],Cr.prototype,"origin",void 0);y([he(),E("design:type",Object)],Cr.prototype,"directionsData",void 0);Cr=y([Q("gmpx-place-distance-label-internal")],Cr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m1=e=>e??j;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ng{get isKeyboardNavigating(){return this.isKeyboardNavigatingInternal??!1}constructor(t,n){this.host=t,this.changeCallback=n,this.mousedownEventListener=()=>{this.isKeyboardNavigatingInternal!==!1&&(this.isKeyboardNavigatingInternal=!1,this.changeCallback&&this.changeCallback(!1))},this.keydownEventListener=({key:r})=>{r!=="Tab"&&r!=="Enter"||this.isKeyboardNavigatingInternal!==!0&&(this.isKeyboardNavigatingInternal=!0,this.changeCallback&&this.changeCallback(!0))},this.host.addController(this)}hostConnected(){document.addEventListener("keydown",this.keydownEventListener),document.addEventListener("mousedown",this.mousedownEventListener)}hostDisconnected(){document.removeEventListener("keydown",this.keydownEventListener),document.removeEventListener("mousedown",this.mousedownEventListener)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Nd=4800,rs=1200,wl=F`calc(${Pe} * 0.5)`;function so(e,t){const n=Math.ceil(e*window.devicePixelRatio);return Math.min(n,t)}function v1(e,t){const n=e.widthPx/e.heightPx,r=window.innerWidth/window.innerHeight,i=t.widthPx/t.heightPx,o=n>r?{maxHeight:so(window.innerHeight,Nd)}:{maxWidth:so(window.innerWidth,Nd)},s=n>i?{maxHeight:so(t.heightPx,rs)}:{maxWidth:so(t.widthPx,rs)};return{uri:e.getURI(o),tileUri:e.getURI(s),attributions:e.authorAttributions}}function y1(e){e.key==="Escape"&&e.stopPropagation()}let St=class extends Ce{constructor(){super(...arguments),this.selectedIndex=0,this.focusController=new ng(this,t=>{var n,r;t?(n=this.containerElement)==null||n.classList.remove("hide-focus-ring"):(r=this.containerElement)==null||r.classList.add("hide-focus-ring")}),this.fontLoader=new fn(this,[we.GOOGLE_SANS_TEXT,we.MATERIAL_SYMBOLS_OUTLINED]),this.keydownEventListener=({key:t})=>{var n;if((n=this.lightboxElement)!=null&&n.open)switch(t){case"ArrowLeft":this.isRTL()?this.navigateToNext():this.navigateToPrevious();break;case"ArrowRight":this.isRTL()?this.navigateToPrevious():this.navigateToNext();break}},this.getMsg=le.buildLocalizer(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.keydownEventListener)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.keydownEventListener)}render(){var l;const t=this.getFormattedPhotos(),n=t[this.selectedIndex],r=(l=this.getPlace())==null?void 0:l.displayName,i=S`
      <div class="info-card">
        <button
          aria-label=${this.getMsg("PLACE_PHOTO_BACK_ARIA_LABEL")}
          autofocus
          @click=${this.closeLightbox}
        >
          <span aria-hidden="true" class="icon material-symbols-outlined">
            ${this.isRTL()?"arrow_forward":"arrow_back"}
          </span>
        </button>
        <div class="text-container">
          ${me(r,()=>S`<div class="title">${r}</div>`)}
          ${me(n==null?void 0:n.attributions.length,()=>S`
            <div class="caption">
              <span>${this.getMsg("PLACE_PHOTO_ATTRIBUTION_PREFIX")}</span>
              ${jn(n.attributions,({displayName:a,uri:u})=>S`${Vh(a,u??null)} `)}
            </div>
          `)}
        </div>
      </div>
    `,o=S`
      <div class="nav-controls">
        <button
          aria-label=${this.getMsg("PLACE_PHOTO_PREV_ARIA_LABEL")}
          @click=${this.navigateToPrevious}
          .disabled=${this.selectedIndex===0}
        >
          <span aria-hidden="true" class="icon material-symbols-outlined">
            ${this.isRTL()?"chevron_right":"chevron_left"}
          </span>
        </button>
        <button
          aria-label=${this.getMsg("PLACE_PHOTO_NEXT_ARIA_LABEL")}
          @click=${this.navigateToNext}
          .disabled=${this.selectedIndex===t.length-1}
        >
          <span aria-hidden="true" class="icon material-symbols-outlined">
            ${this.isRTL()?"chevron_left":"chevron_right"}
          </span>
        </button>
      </div>
    `,s=(a,u)=>S`
      <button
        aria-label=${this.getMsg("PLACE_PHOTO_TILE_ARIA_LABEL",u+1)}
        @click=${()=>void this.openLightbox(u)}
        .disabled=${!a}
        part="tile"
        style=${Ea({"background-image":a&&`url(${a.tileUri})`})}
      ></button>
    `;return S`
      <div class="container">
        <div>${jn(t.slice(0,this.maxTiles),s)}</div>
        <dialog class="lightbox" @keydown=${y1}>
          <div class="backdrop" @click=${this.closeLightbox}></div>
          <img
            alt=${this.getMsg("PLACE_PHOTO_ALT",r??"")}
            class="photo"
            src=${m1(n==null?void 0:n.uri)}
          />
          ${i}
          ${o}
        </dialog>
      </div>
    `}updated(){!this.tileSize&&this.firstTileElement&&(this.tileSize={widthPx:this.firstTileElement.clientWidth||rs,heightPx:this.firstTileElement.clientHeight||rs})}getRequiredFields(){return["displayName","photos"]}placeHasData(t){return!!(t.photos&&t.photos.length>0)}getFormattedPhotos(){const t=this.getPlace();return t===void 0||!this.tileSize?new Array(10).fill(null):t!=null&&t.photos?t.photos.map(n=>v1(n,this.tileSize)):[]}isRTL(){return getComputedStyle(this).direction.toLowerCase()==="rtl"}async openLightbox(t){var n;this.selectedIndex=t,await this.updateComplete,(n=this.lightboxElement)==null||n.showModal()}closeLightbox(){var t;(t=this.lightboxElement)==null||t.close()}navigateToPrevious(){this.selectedIndex>0&&this.selectedIndex--}navigateToNext(){var n,r;const t=(r=(n=this.getPlace())==null?void 0:n.photos)==null?void 0:r.length;t&&this.selectedIndex<t-1&&this.selectedIndex++}};St.styles=F`
    :host(:not([hidden])) {
      display: block;
    }

    .container.hide-focus-ring button:focus {
      outline: none;
    }

    a {
      color: inherit;
    }

    button {
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: 0;
    }

    button[disabled] {
      cursor: default;
    }

    [part="tile"] {
      background-color: #f5f5f5;
      background-position: center;
      background-size: cover;
      border-radius: 8px;
      display: inline-block;
      height: 134px;
      width: 142px;
    }

    /* The dialog element has a default border-width: initial (3px),
       padding: 1em, and max-height/width: calc((100% - 6px) - 2em). We remove
       the border and take the corresponding 6px out of the height/width
       calculation so it still fills the screen. */
    .lightbox {
      border-width: 0;
      color: white;
      height: 100%;
      max-height: calc(100% - 2em);
      max-width: calc(100% - 2em);
      width: 100%;
    }

    .backdrop {
      background: black;
      inset: 0;
      position: absolute;
    }

    .photo {
      inset: 0;
      margin: auto;
      max-height: 100%;
      max-width: 100%;
      position: absolute;
    }

    .icon {
      font-size: calc(${Pe} * 2);
      vertical-align: middle;
    }

    .info-card {
      background: rgba(32, 33, 36, 0.7);
      border-radius: 8px;
      display: flex;
      padding: ${Pe};
      position: absolute;
    }

    .info-card .text-container {
      flex-direction: column;
      padding: 0 ${wl};
    }

    .info-card .title {
      font: ${Er};
    }

    .info-card .caption {
      font : ${Is};
    }

    .nav-controls {
      bottom: ${Pe};
      left: 0;
      margin: 0 auto;
      position: absolute;
      right: 0;
      width: fit-content;
    }

    .nav-controls button {
      background-color: rgba(32, 33, 36, 0.7);
      border-radius: calc(${Pe} * 2);
      padding: ${wl};
      margin: ${wl};
    }

    .nav-controls button[disabled] {
      opacity: 0.5;
    }
  `;y([k({attribute:"max-tiles",reflect:!0,type:Number}),E("design:type",Number)],St.prototype,"maxTiles",void 0);y([he(),E("design:type",Object)],St.prototype,"selectedIndex",void 0);y([he(),E("design:type",Object)],St.prototype,"tileSize",void 0);y([pt(".container"),E("design:type",HTMLDivElement)],St.prototype,"containerElement",void 0);y([pt(".lightbox"),E("design:type",HTMLDialogElement)],St.prototype,"lightboxElement",void 0);y([pt('[part="tile"]'),E("design:type",HTMLButtonElement)],St.prototype,"firstTileElement",void 0);St=y([Q("gmpx-place-photo-gallery")],St);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function w1(e,t){return e==null||e<0||t.length===0?"":Array.from(t)[0].repeat(e)}let is=class extends Ce{constructor(){super(...arguments),this.symbol="$"}render(){return S`<span>${this.getDisplayPriceLevel()}</span>`}getRequiredFields(){return["priceLevel"]}placeHasData(t){return t.priceLevel!=null}getDisplayPriceLevel(){const t=this.getPlace();return(t==null?void 0:t.priceLevel)==null?"":w1(G0(t.priceLevel),this.symbol)}};y([k({type:String,reflect:!0}),E("design:type",Object)],is.prototype,"symbol",void 0);is=y([Q("gmpx-place-price-level")],is);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const _1=1,rg=5;var fr;(function(e){e.FULL="full",e.HALF="half",e.EMPTY="empty"})(fr||(fr={}));function E1(e){let t=Math.round(e*2);const n=[];for(;t>1;)n.push(fr.FULL),t-=2;for(t>0&&n.push(fr.HALF);n.length<rg;)n.push(fr.EMPTY);return n}let ki=class extends Ce{constructor(){super(...arguments),this.condensed=!1,this.getMsg=le.buildLocalizer(this)}render(){const t=this.getRating();return me(t!==null,()=>{const n=this.condensed?[fr.FULL]:E1(t);return S`
        <span role="img" aria-label=${this.getMsg("PLACE_RATING_ARIA_LABEL",t.toFixed(1))}>
          <span aria-hidden="true">
            <span>${t.toFixed(1)}</span>
            ${jn(n,r=>S`<span class="star-icon ${r}">&#x2605;</span>`)}
          </span>
        </span>
      `})}getRequiredFields(){return["rating"]}placeHasData(t){return t.rating!=null}getRating(){var n;const t=(n=this.getPlace())==null?void 0:n.rating;return!t||t<_1||t>rg?null:t}};ki.styles=F`
    .star-icon.full {
      color: ${wa};
    }
    .star-icon.empty {
      color: ${_a};
    }
    .star-icon.half {
      color: ${_a};
      position: relative;
    }
    .star-icon.half::before {
      color: ${wa};
      content: '\\2605';
      overflow: hidden;
      position: absolute;
      width: 50%;
    }
  `;y([k({type:Boolean,reflect:!0}),E("design:type",Object)],ki.prototype,"condensed",void 0);ki=y([Q("gmpx-place-rating")],ki);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const x1=5;var os;(function(e){e.FULL="full",e.EMPTY="empty"})(os||(os={}));function S1(e){return Array.from({length:x1}).fill(os.FULL,0,e).fill(os.EMPTY,e)}let Oi=class extends Ce{constructor(){super(...arguments),this.fontLoader=new fn(this,[we.GOOGLE_SANS_TEXT]),this.getMsg=le.buildLocalizer(this)}render(){const t=this.getReviews();return me(t&&t.length,()=>S`
      <div class="container">
        ${jn(t,this.renderOneReview.bind(this))}
      </div>
    `)}getRequiredFields(){return["reviews"]}placeHasData(t){return!!(t.reviews&&t.reviews.length>0)}renderOneReview(t){const n=t.authorAttribution,r=S`
      <div class="header">
        ${me(n==null?void 0:n.photoURI,()=>S`
          <a target="_blank" href="${(n==null?void 0:n.uri)??""}">
            <img class="author-photo"
                alt=${this.getMsg("PLACE_REVIEWS_AUTHOR_PHOTO_ALT",(n==null?void 0:n.displayName)??"")}
                src=${n.photoURI}>
          </a>
        `)}
        <a class="author-name"
          target="_blank"
          href="${(n==null?void 0:n.uri)??""}">
          ${(n==null?void 0:n.displayName)??""}
        </a>
      </div>
    `,i=S`
      <div class="subheader">
        ${me(t.rating,()=>S`
          <span role="img" aria-label=${this.getMsg("PLACE_RATING_ARIA_LABEL",t.rating)}>
            <span aria-hidden="true">
              ${jn(S1(t.rating),o=>S`<span class="star-icon ${o}">&#x2605;</span>`)}
            </span>
          </span>
        `)}
        <span class="relative-time">
          ${t.relativePublishTimeDescription??""}
        </span>
      </div>
    `;return S`
      <div class="review">
        ${r}
        ${i}
        ${me(t.text,()=>S`
          <div class="body">
            ${t.text}
          </div>
        `)}
      </div>
    `}getReviews(){var n;const t=(n=this.getPlace())==null?void 0:n.reviews;return t?this.maxReviews===void 0?t:this.maxReviews<1?null:t.slice(0,Math.floor(this.maxReviews)):null}};Oi.styles=F`
    .container {
      color: ${$t};
      font: ${Ns};
    }
    .review {
      padding: ${M(20)};
      padding-bottom: ${M(16)};
    }
    .review:not(:last-child) {
      border-bottom: ${Ci};
    }
    .header, .subheader {
      align-items: center;
      display: flex;
    }
    .subheader {
      margin-top: ${M(16)};
    }
    .body {
      margin-top: ${M(8)};
    }
    .author-photo {
      display: block;
      height: ${M(32)};
    }
    .author-name {
      color: inherit;
      font: ${Er};
      margin-inline-start: ${M(8)};
      text-decoration: none;
    }
    .author-name:hover {
      text-decoration: underline;
    }
    .star-icon.full {
      color: ${wa};
    }
    .star-icon.empty {
      color: ${_a};
    }
    .relative-time {
      color: ${Zo};
      font: ${Is};
      margin-inline-start: ${M(12)};
    }
  `;y([k({type:Number,reflect:!0,attribute:"max-reviews"}),E("design:type",Number)],Oi.prototype,"maxReviews",void 0);Oi=y([Q("gmpx-place-reviews")],Oi);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Id=Object.freeze(["x-small","small","medium","large","x-large"]),C1=S`
  <svg width="56" height="20" fill="none" viewBox="0 0 56 20" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.76 14.26c-3.62 0-6.66-2.94-6.66-6.56 0-3.62 3.04-6.56 6.66-6.56 2 0 3.43 0.78 4.5 1.81l-1.27 1.25c-0.77-0.72-1.81-1.28-3.23-1.28-2.64 0-4.71 2.13-4.71 4.77 0 2.64 2.07 4.77 4.71 4.77 1.71 0 2.69-0.69 3.31-1.31 0.51-0.51 0.85-1.25 0.98-2.26h-4.05v-1.79h5.79c0.06 0.32 0.1 0.7 0.1 1.12 0 1.34-0.37 3.01-1.55 4.19-1.16 1.21-2.63 1.85-4.58 1.85z" fill="#4285F4"/>
    <path d="m22.24 10.03c0 2.43-1.91 4.23-4.24 4.23s-4.24-1.79-4.24-4.23c0-2.45 1.9-4.23 4.24-4.23s4.24 1.78 4.24 4.23zm-1.86 0c0-1.52-1.1-2.56-2.38-2.56s-2.38 1.04-2.38 2.56c0 1.5 1.1 2.56 2.38 2.56s2.38-1.05 2.38-2.56z" fill="#EA4335"/>
    <path d="m31.74 10.03c0 2.43-1.91 4.23-4.24 4.23s-4.24-1.79-4.24-4.23c0-2.45 1.9-4.23 4.24-4.23s4.24 1.78 4.24 4.23zm-1.86 0c0-1.52-1.1-2.56-2.38-2.56s-2.38 1.04-2.38 2.56c0 1.5 1.1 2.56 2.38 2.56s2.38-1.05 2.38-2.56z" fill="#FBBC05"/>
    <path d="m40.82 6.0601v7.59c0 3.12-1.84 4.4-4.02 4.4-2.05 0-3.28-1.38-3.75-2.5l1.62-0.67c0.29 0.69 0.99 1.5 2.13 1.5 1.39 0 2.26-0.86 2.26-2.48v-0.6h-0.06c-0.42 0.51-1.22 0.96-2.22 0.96-2.11 0-4.05-1.84-4.05-4.21 0-2.38 1.94-4.24 4.05-4.24 1.01 0 1.81 0.45 2.22 0.94h0.06v-0.69h1.76zm-1.63 3.99c0-1.49-0.99-2.58-2.26-2.58-1.28 0-2.35 1.09-2.35 2.58 0 1.47 1.07 2.54 2.35 2.54 1.27 0 2.26-1.07 2.26-2.54z" fill="#4285F4"/>
    <path d="M44.4 2V14H42.54V2H44.4Z" fill="#34A853"/>
    <path d="m52.1 11.42 1.44 0.96c-0.46 0.69-1.58 1.87-3.52 1.87-2.4 0-4.19-1.86-4.19-4.23 0-2.51 1.81-4.23 3.99-4.23 2.19 0 3.26 1.74 3.62 2.69l0.19 0.48-5.65 2.34c0.43 0.85 1.1 1.28 2.05 1.28s1.59-0.45 2.07-1.16zm-4.44-1.52 3.78-1.57c-0.21-0.53-0.83-0.9-1.57-0.9-0.94 0.01-2.25 0.84-2.21 2.47z" fill="#EA4335"/>
  </svg>
`;let et=class extends Ne{constructor(){super(...arguments),this.autoFetchDisabled=!1,this.googleLogoAlreadyDisplayed=!1,this.size="x-large",this.travelMode="driving",this.fontLoader=new fn(this,[we.GOOGLE_SANS_TEXT,we.MATERIAL_SYMBOLS_OUTLINED]),this.slotValidator=new Rs(this,this.logger,["action"]),this.getMsg=le.buildLocalizer(this),this.renderHeaderSuffixContent=()=>Du(this.size,[["small",()=>S`<slot name="action"></slot>`],["medium",()=>S`
      <gmpx-place-photo-gallery class="gallery" max-tiles="1">
      </gmpx-place-photo-gallery>
    `]]),this.renderCondensedSummary=()=>S`
    <div class="summary body">
      <div class="line">
        <gmpx-place-rating condensed></gmpx-place-rating>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-field-text field="types"></gmpx-place-field-text>
        </gmpx-optional-data-container-internal>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-distance-label-internal
            .origin=${this.travelOrigin}
            @gmpx-requesterror=${this.forwardRequestError}
          ></gmpx-place-distance-label-internal>
        </gmpx-optional-data-container-internal>
      </div>
    </div>
  `,this.renderSummary=()=>S`
    <div class="summary body">
      <div class="line">
        <gmpx-place-rating></gmpx-place-rating>
        <gmpx-optional-data-container-internal>
          (<gmpx-place-field-text field="userRatingCount">
          </gmpx-place-field-text>)
        </gmpx-optional-data-container-internal>
      </div>
      <div class="line">
        <gmpx-place-field-text field="types"></gmpx-place-field-text>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-price-level></gmpx-place-price-level>
        </gmpx-optional-data-container-internal>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-distance-label-internal
            .origin=${this.travelOrigin}
            .travelMode=${this.travelMode}
            @gmpx-requesterror=${this.forwardRequestError}
          ></gmpx-place-distance-label-internal>
        </gmpx-optional-data-container-internal>
      </div>
      <div class="line">
        <gmpx-place-opening-hours summary-only></gmpx-place-opening-hours>
      </div>
      <div class="line">
        <gmpx-optional-data-container-internal>
          <gmpx-place-field-boolean field="hasDineIn">
            <span slot="true">${this.getMsg("PLACE_HAS_DINE_IN")}</span>
            <span slot="false">${this.getMsg("PLACE_NO_DINE_IN")}</span>
          </gmpx-place-field-boolean>
        </gmpx-optional-data-container-internal>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-field-boolean field="hasTakeout">
            <span slot="true">${this.getMsg("PLACE_HAS_TAKEOUT")}</span>
            <span slot="false">${this.getMsg("PLACE_NO_TAKEOUT")}</span>
          </gmpx-place-field-boolean>
        </gmpx-optional-data-container-internal>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-field-boolean field="hasDelivery">
            <span slot="true">${this.getMsg("PLACE_HAS_DELIVERY")}</span>
            <span slot="false">${this.getMsg("PLACE_NO_DELIVERY")}</span>
          </gmpx-place-field-boolean>
        </gmpx-optional-data-container-internal>
      </div>
    </div>
  `,this.renderContacts=()=>S`
    <div class="section body">
      <gmpx-optional-data-container-internal>
        <div class="block row">
          <span aria-hidden="true" class="icon material-symbols-outlined">
            location_on
          </span>
          <gmpx-place-field-text field="formattedAddress">
          </gmpx-place-field-text>
        </div>
      </gmpx-optional-data-container-internal>
      <gmpx-optional-data-container-internal>
        <div class="block row">
          <span aria-hidden="true" class="icon material-symbols-outlined">
            public
          </span>
          <gmpx-place-field-link href-field="websiteURI">
          </gmpx-place-field-link>
        </div>
      </gmpx-optional-data-container-internal>
      <gmpx-optional-data-container-internal>
        <div class="block row">
          <span aria-hidden="true" class="icon material-symbols-outlined">
            call
          </span>
          <gmpx-place-field-text field="nationalPhoneNumber">
          </gmpx-place-field-text>
        </div>
      </gmpx-optional-data-container-internal>
      <gmpx-optional-data-container-internal>
        <div class="block row">
          <span aria-hidden="true" class="icon material-symbols-outlined">
            schedule
          </span>
          <gmpx-place-opening-hours></gmpx-place-opening-hours>
        </div>
      </gmpx-optional-data-container-internal>
    </div>
  `,this.renderReviews=()=>S`
    <gmpx-optional-data-container-internal>
      <div class="section">
        <div class="block">
          <span class="title-large">
            ${this.getMsg("PLACE_REVIEWS_SECTION_HEADING")}
          </span><br>
          <span class="caption">
            ${this.getMsg("PLACE_REVIEWS_SECTION_CAPTION")}
          </span><br>
        </div>
        <gmpx-place-reviews></gmpx-place-reviews>
        <gmpx-place-field-link class="button" href-field="googleMapsURI">
          <div class="label">
            <span>${this.getMsg("PLACE_REVIEWS_MORE")}</span>
            <span aria-hidden="true" class="icon material-symbols-outlined">
              open_in_new
            </span>
          </div>
        </gmpx-place-field-link>
      </div>
    </gmpx-optional-data-container-internal>
  `}willUpdate(t){t.has("size")&&!Id.includes(this.size)&&(this.logger.error(`Value "${this.size}" for attribute "size" is invalid. Acceptable choices are ${Id.map(n=>`"${n}"`).join(", ")}.`),this.size="x-large")}render(){return S`
      <gmpx-place-data-provider
        .autoFetchDisabled=${this.autoFetchDisabled}
        .place=${this.place??this.contextPlace}
        @gmpx-requesterror=${this.forwardRequestError}
      >
        <div class="container">
          <div class="section block first">
            <div class="header">
              <div>
                <div class=${this.getDisplayNameClass()}>
                  <gmpx-place-field-text field="displayName">
                  </gmpx-place-field-text>
                </div>
                ${this.size==="x-small"?this.renderCondensedSummary():this.renderSummary()}
              </div>
              <div>${this.renderHeaderSuffixContent()}</div>
            </div>

            ${me(this.size!=="small"&&this.size!=="x-small",()=>S`
              <div><slot name="action"></slot></div>
            `)}

            ${me(this.size==="large"||this.size==="x-large",()=>S`
              <gmpx-place-photo-gallery class="carousel gallery">
              </gmpx-place-photo-gallery>
            `)}
          </div>

          ${me(this.size==="x-large",()=>S`
            ${this.renderContacts()}
            ${this.renderReviews()}
          `)}

          <gmpx-place-attribution class="section caption attribution">
          </gmpx-place-attribution>

          ${me(!this.googleLogoAlreadyDisplayed,()=>S`
            <div class=${this.size==="x-large"?"section":""}>
              <div class="logo">${C1}</div>
            </div>
          `)}
        </div>
        <div slot="error">
          <div class="title-large">Oops! Something went wrong.</div>
          <div class="caption">
            Failed to load data about the specified Place.
            See the JavaScript console for technical details.
          </div>
        </div>
      </gmpx-place-data-provider>
    `}getDisplayNameClass(){return this.size==="x-small"?"title-medium":this.size==="small"?"title-large":"headline"}forwardRequestError(t){t.target&&t.target===this.dataProviderElement&&console.error(t.error);const n=new Ts(t.error);this.dispatchEvent(n)}};et.styles=F`
    .headline {
      color: ${$t};
      font: ${R0};
    }

    .title-large {
      color: ${$t};
      font: ${xo};
    }

    .title-medium {
      color: ${$t};
      font: ${Er};
    }

    .body {
      color: ${$t};
      font: ${Ns};
    }

    .caption {
      color: ${Zo};
      font: ${Is};
    }

    [no-data] {
      display: none;
    }

    .container {
      background-color: ${_n};
      overflow: auto;
    }

    .section:not(.first) {
      border-top: ${Ci};
    }

    .section.first > * {
      margin-bottom: ${M(12)};
    }

    .block {
      margin: ${M(18)} ${M(20)};
    }

    .header {
      display: flex;
    }

    .header > :first-child {
      flex-grow: 1;
      margin-inline-end: ${M(20)};
    }

    .header .gallery::part(tile) {
      height: ${M(80)};
      width: ${M(80)};
    }

    .summary {
      color: ${Zo};
      display: flex;
      flex-direction: column;
      margin-top: ${M(4)};
    }

    .delimiter {
      display: none;
    }

    .line > * > :not(.delimiter),
    .line > :not([hidden]):not([no-data]) ~ * > .delimiter {
      display: inline-block;
    }

    slot[name="action"] {
      display: flex;
      flex-wrap: wrap;
      gap: ${M(8)};
    }

    .carousel {
      display: flex;
      line-height: normal;
      margin-inline: ${M(-20)};
      overflow-x: auto;
      padding-inline: ${M(20)};
      white-space: nowrap;
    }

    .carousel[no-data] {
      margin-bottom: ${M(-12)};
    }

    .carousel::-webkit-scrollbar {
      background-color: ${_n};
      width: 16px;
    }
    .carousel::-webkit-scrollbar-corner {
      background-color: ${_n};
    }
    .carousel::-webkit-scrollbar-track {
      background-color: ${_n};
    }
    .carousel::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
      border-radius: 16px;
      border: 4px solid ${_n};
    }
    .carousel::-webkit-scrollbar-button {
      display: none;
    }
    .carousel::-webkit-scrollbar-thumb:hover {
      background-color: #7d7d7d;
    }

    .carousel.gallery::part(tile) {
      height: ${M(134)};
      width: ${M(142)};
    }

    .row {
      display: flex;
    }

    .row > .icon {
      color: ${It};
      direction: inherit;
      font-size: ${M(20)};
      margin-inline-end: ${M(20)};
    }

    .button {
      display: flex;
      justify-content: center;
      text-decoration: none;
    }

    .label {
      align-items: center;
      color: ${It};
      display: flex;
      font: ${Er};
      margin: ${M(14)} 0;
    }

    .label > .icon {
      direction: inherit;
      font-size: ${M(20)};
      margin-inline-start: ${M(4)};
    }

    .attribution:not([no-data]) {
      display: block;
      padding: ${M(12)} ${M(20)};
    }

    .logo {
      margin: 15px ${M(20)} 10px;
    }

    [slot="error"] {
      text-align: center;
      width: 100%;
    }
  `;y([k({attribute:"auto-fetch-disabled",reflect:!0,type:Boolean}),E("design:type",Object)],et.prototype,"autoFetchDisabled",void 0);y([bs({context:Mu,subscribe:!0}),k({attribute:!1}),E("design:type",Object)],et.prototype,"contextPlace",void 0);y([k({attribute:"google-logo-already-displayed",reflect:!0,type:Boolean}),E("design:type",Object)],et.prototype,"googleLogoAlreadyDisplayed",void 0);y([k({type:String,hasChanged:()=>!0}),E("design:type",Object)],et.prototype,"place",void 0);y([k({reflect:!0,type:String}),E("design:type",String)],et.prototype,"size",void 0);y([k({attribute:"travel-mode",reflect:!0,type:String}),E("design:type",Object)],et.prototype,"travelMode",void 0);y([k({attribute:!1}),E("design:type",Object)],et.prototype,"travelOrigin",void 0);y([pt("gmpx-place-data-provider"),E("design:type",xt)],et.prototype,"dataProviderElement",void 0);et=y([Q("gmpx-place-overview")],et);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const L1=Object.freeze(["addressComponents","adrFormatAddress","businessStatus","displayName","formattedAddress","googleMapsURI","iconBackgroundColor","location","photos","id","plusCode","svgIconMaskURI","types","utcOffsetMinutes","viewport"]),P1=Object.freeze(["address_component","adr_address","business_status","formatted_address","geometry","icon","icon_mask_base_uri","icon_background_color","name","photos","place_id","plus_code","type","url","utc_offset_minutes"]),_l=.75;let fe=class extends Ne{constructor(){super(...arguments),this.strictBounds=!1,this.disableSearch=!0,this.hideClearButton=!0,this.focusController=new ng(this),this.fontLoader=new fn(this,[we.GOOGLE_SANS_TEXT,we.MATERIAL_SYMBOLS_OUTLINED]),this.autocomplete=new an,this.getMsg=le.buildLocalizer(this)}get value(){return this.valueInternal}willUpdate(t){var n,r;t.has("disableSearch")&&this.disableSearch&&this.focusController.isKeyboardNavigating&&Jo()===this.searchButtonElement&&((n=this.clearButtonElement)==null||n.focus()),t.has("hideClearButton")&&this.hideClearButton&&this.focusController.isKeyboardNavigating&&Jo()===this.clearButtonElement&&((r=this.inputElement)==null||r.focus())}render(){return S`
      <div class="container">
        <input
          @input=${this.handleInput}
          .placeholder=${this.placeholder??""}
        />
        <div class="overlay">
          <button
            aria-label=${this.getMsg("PLACE_SEARCH_ARIA_LABEL")}
            class="search-button"
            @click=${this.handleSearch}
            .disabled=${this.disableSearch}
            type="button"
          >
            <span aria-hidden="true" class="icon material-symbols-outlined">
              search
            </span>
          </button>
          <button
            aria-label=${this.getMsg("PLACE_CLEAR_ARIA_LABEL")}
            class="clear-button"
            @click=${this.handleClear}
            .hidden=${this.hideClearButton}
            type="button"
          >
            <span aria-hidden="true" class="icon material-symbols-outlined">
              cancel
            </span>
          </button>
        </div>
      </div>
    `}firstUpdated(){this.initializeAutocomplete(this.inputElement)}async updated(t){if(this.autocomplete.value&&this.shouldUpdateAutocompleteOptions(t)){const n=await this.makeAutocompleteOptions();this.autocomplete.value.setOptions(n)}if(t.has("forMap")&&this.forMap){const n=await this.getMapById(this.forMap);n&&this.bindTo(n)}t.has("valueInternal")&&this.dispatchEvent(new Event("gmpx-placechange"))}async bindTo(t){(await this.autocomplete.promise).bindTo("bounds",t)}async getMapById(t){const r=this.getRootNode().getElementById(t);return(r==null?void 0:r.tagName)==="GMP-MAP"?(await customElements.whenDefined("gmp-map"),r.innerMap):null}shouldUpdateAutocompleteOptions(t){return t.has("country")||t.has("locationBias")||t.has("radius")||t.has("strictBounds")||t.has("type")}async makeAutocompleteOptions(){const{country:t,locationBias:n,radius:r,strictBounds:i}=this;let o;if(n&&r){const{Circle:s}=await K.importLibrary("maps",this);o=new s({center:n,radius:r}).getBounds()??void 0}return{bounds:o,componentRestrictions:t?{country:t}:void 0,fields:[...P1],strictBounds:i,types:this.type?[this.type]:[]}}async initializeAutocomplete(t){const{Autocomplete:n}=await K.importLibrary("places",this),r=new n(t,await this.makeAutocompleteOptions());r.addListener("place_changed",async()=>{const i=r.getPlace();i!=null&&i.place_id?(this.disableSearch=!0,this.valueInternal=await Li(i,this)):await this.handleSearch()}),this.autocomplete.resolve(r)}async search(t){var o,s;const{Place:n}=await K.importLibrary("places",this),r={textQuery:t,fields:["id"],locationBias:(o=this.autocomplete.value)==null?void 0:o.getBounds()};let i;try{({places:i}=await n.searchByText(r))}catch(l){if(ts(l,"searchByText()")){const a={query:t,fields:["id"],locationBias:(s=this.autocomplete.value)==null?void 0:s.getBounds()},u=await this.searchWithFindPlaceFromQuery(a);i=[];for(const d of u){i.push(await Li(d,this));break}}else throw l}return i.length?(await i[0].fetchFields({fields:[...L1]}),i[0]):null}async searchWithFindPlaceFromQuery(t){const{PlacesService:n}=await K.importLibrary("places",this),r=new n(document.createElement("div"));return new Promise((i,o)=>{r.findPlaceFromQuery({...t,fields:Gh(t.fields)},(s,l)=>{s&&l==="OK"?i(s):o(l)})})}handleClear(){this.inputElement.value="",this.valueInternal=void 0,this.disableSearch=!0,this.hideClearButton=!0}handleInput(t){t.target.value?(this.disableSearch=!1,this.hideClearButton=!1):this.handleClear()}async handleSearch(){var t;if(!(this.disableSearch||!((t=this.inputElement)!=null&&t.value))){this.disableSearch=!0;try{this.valueInternal=await this.search(this.inputElement.value),this.valueInternal&&this.updateInputTextFromPlace(this.valueInternal)}catch(n){const r=new Ts(n);this.dispatchEvent(r)}}}updateInputTextFromPlace(t){let n;t.formattedAddress&&t.displayName?t.formattedAddress.startsWith(t.displayName)?n=t.formattedAddress:n=`${t.displayName}, ${t.formattedAddress}`:n=t.displayName??t.formattedAddress??"",n&&(this.inputElement.value=n)}};fe.styles=F`
    :host(:not([hidden])) {
      /* Match the default display style of <input> element. */
      display: inline-block;
    }

    .container {
      color: ${$t};
      font: ${Ns};
      position: relative;
    }

    .overlay {
      display: flex;
      inset: 0;
      justify-content: space-between;
      pointer-events: none;
      position: absolute;
    }

    .icon {
      font-size: inherit;
    }

    input {
      background-color: ${_n};
      border: 1px solid #80868b;
      border-radius: 4px;
      color: ${$t};
      box-sizing: border-box;
      font-family: inherit;
      font-size: inherit;
      padding: calc(${Pe} * ${_l})
               calc(${Pe} * ${_l*2+1});
      width: 100%;
    }

    input:focus {
      outline: 2px solid ${It};
    }

    input::placeholder {
      color: ${$t};
      opacity: 0.5;
    }

    button:not([hidden]) {
      align-items: center;
      background: none;
      border: none;
      color: inherit;
      display: flex;
      font: inherit;
      padding: calc(${Pe} * ${_l});
      pointer-events: auto;
    }

    button:enabled {
      cursor: pointer;
    }
  `;fe.shadowRootOptions={...Ne.shadowRootOptions,delegatesFocus:!0};y([k({converter:qh,reflect:!0}),E("design:type",Array)],fe.prototype,"country",void 0);y([k({attribute:"for-map",reflect:!0,type:String}),E("design:type",String)],fe.prototype,"forMap",void 0);y([k({attribute:"location-bias",converter:zi,reflect:!0}),E("design:type",Object)],fe.prototype,"locationBias",void 0);y([k({reflect:!0,type:String}),E("design:type",String)],fe.prototype,"placeholder",void 0);y([k({reflect:!0,type:Number}),E("design:type",Number)],fe.prototype,"radius",void 0);y([k({attribute:"strict-bounds",reflect:!0,type:Boolean}),E("design:type",Object)],fe.prototype,"strictBounds",void 0);y([k({reflect:!0,type:String}),E("design:type",String)],fe.prototype,"type",void 0);y([he(),E("design:type",Object)],fe.prototype,"valueInternal",void 0);y([he(),E("design:type",Object)],fe.prototype,"disableSearch",void 0);y([he(),E("design:type",Object)],fe.prototype,"hideClearButton",void 0);y([pt("input"),E("design:type",HTMLInputElement)],fe.prototype,"inputElement",void 0);y([pt(".clear-button"),E("design:type",HTMLButtonElement)],fe.prototype,"clearButtonElement",void 0);y([pt(".search-button"),E("design:type",HTMLButtonElement)],fe.prototype,"searchButtonElement",void 0);fe=y([Q("gmpx-place-picker")],fe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ig=Symbol("route");class Ms extends Ne{getRoute(){return this.route??this.contextRoute}}y([bs({context:ig,subscribe:!0}),k({attribute:!1}),E("design:type",Object)],Ms.prototype,"contextRoute",void 0);y([k({attribute:!1}),E("design:type",Object)],Ms.prototype,"route",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let tt=class extends Ne{constructor(){super(...arguments),this.travelMode="driving",this.directionsController=new lt(this)}updated(){this.updateContextRoute()}async updateContextRoute(){if(this.route){this.contextRoute=this.route;return}const t=Rd(this.originAddress,this.originPlaceId,this.originLatLng),n=Rd(this.destinationAddress,this.destinationPlaceId,this.destinationLatLng);t===1&&n===1?this.contextRoute=await this.fetchRoute():(t>1&&n!==0&&this.logger.error("Too many origins. Only one of origin-lat-lng, origin-place-id, or origin-address may be specified."),n>1&&t!==0&&this.logger.error("Too many destinations. Only one of destination-lat-lng, destination-place-id, or destination-address may be specified."),this.contextRoute=void 0)}async fetchRoute(){var n;const t=await this.directionsController.route({origin:this.getOriginRequestObject(),destination:this.getDestinationRequestObject(),travelMode:(n=this.travelMode)==null?void 0:n.toUpperCase()});return t!=null&&t.routes?t.routes[0]:void 0}getOriginRequestObject(){return this.originLatLng?{location:this.originLatLng}:this.originPlaceId?{placeId:this.originPlaceId}:{query:this.originAddress}}getDestinationRequestObject(){return this.destinationLatLng?{location:this.destinationLatLng}:this.destinationPlaceId?{placeId:this.destinationPlaceId}:{query:this.destinationAddress}}};y([Yh({context:ig}),k({attribute:!1,hasChanged:()=>!1}),E("design:type",Object)],tt.prototype,"contextRoute",void 0);y([k({converter:zi,attribute:"destination-lat-lng",reflect:!0}),E("design:type",Object)],tt.prototype,"destinationLatLng",void 0);y([k({type:String,attribute:"destination-place-id",reflect:!0}),E("design:type",String)],tt.prototype,"destinationPlaceId",void 0);y([k({type:String,attribute:"destination-address",reflect:!0}),E("design:type",String)],tt.prototype,"destinationAddress",void 0);y([k({converter:zi,attribute:"origin-lat-lng",reflect:!0}),E("design:type",Object)],tt.prototype,"originLatLng",void 0);y([k({type:String,attribute:"origin-place-id",reflect:!0}),E("design:type",String)],tt.prototype,"originPlaceId",void 0);y([k({type:String,attribute:"origin-address",reflect:!0}),E("design:type",String)],tt.prototype,"originAddress",void 0);y([k({attribute:!1}),E("design:type",Object)],tt.prototype,"route",void 0);y([k({type:String,attribute:"travel-mode",reflect:!0}),E("design:type",Object)],tt.prototype,"travelMode",void 0);tt=y([Q("gmpx-route-data-provider")],tt);function Rd(...e){return e.filter(t=>t).length}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Pn{constructor(t){this.map=t,this.managedComponents=new Set}static getInstanceForMap(t){return Pn.instances.has(t)||Pn.instances.set(t,new Pn(t)),Pn.instances.get(t)}async register(t){this.managedComponents.has(t)||(this.managedComponents.add(t),await this.updateViewport())}async unregister(t){this.managedComponents.has(t)&&(this.managedComponents.delete(t),await this.updateViewport())}async updateViewport(){const t=await this.getBoundsUnion();t&&this.map.innerMap.fitBounds(t)}async getBoundsUnion(){let t=null;for(const n of this.managedComponents){const r=n.getBounds();if(r){if(!t){const{LatLngBounds:i}=await K.importLibrary("core");t=new i}t.union(r)}}return t}}Pn.instances=new Map;/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class og{get map(){return this.deferredMap.value}get mapPromise(){return this.deferredMap.promise}constructor(t){this.host=t,this.deferredMap=new an,t.addController(this)}async hostConnected(){const t=this.getContainingGmpMap();if(t){customElements.get("gmp-map")||await customElements.whenDefined("gmp-map");const n=t;this.host.isConnected&&(this.deferredMap.resolve(n.innerMap),this.viewportManager=Pn.getInstanceForMap(n))}}hostDisconnected(){this.deferredMap=new an}getContainingGmpMap(){for(const t of Dh(this.host))if(t instanceof Element&&t.localName==="gmp-map")return t;return null}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Lr=class extends Ms{get innerMarker(){return this.innerMarkerDeferred.value}get innerMarkerPromise(){return this.innerMarkerDeferred.promise}constructor(){super(),this.waypoint="origin",this.title="",this.innerMarkerDeferred=new an,this.mapController=new og(this),this.initMarker()}async initMarker(){const{AdvancedMarkerElement:t}=await K.importLibrary("marker",this),n=new t;this.innerMarkerDeferred.resolve(n)}async connectedCallback(){super.connectedCallback();const t=await this.mapController.mapPromise,n=await this.innerMarkerPromise;this.isConnected&&(n.map=t)}disconnectedCallback(){super.disconnectedCallback(),this.innerMarker&&(this.innerMarker.map=null)}render(){return S`<slot @slotchange=${this.onSlotChange}></slot>`}updated(t){(t.has("waypoint")||t.has("route")||t.has("contextRoute"))&&this.updatePosition(),t.has("title")&&this.updateTitle(),t.has("zIndex")&&this.updateZIndex()}async updatePosition(){var o;const t=await this.innerMarkerPromise,n=this.getRoute();if(!((o=n==null?void 0:n.legs)!=null&&o.length)){t.position=null;return}const r=n.legs[0],i=n.legs[n.legs.length-1];!this.waypoint||this.waypoint==="origin"?t.position=r.start_location:this.waypoint==="destination"?t.position=i.end_location:this.logger.error(`Unsupported waypoint "${this.waypoint}". Waypoint must be "origin" or "destination".`)}async updateTitle(){const t=await this.innerMarkerPromise;t.title=this.title}async updateZIndex(){const t=await this.innerMarkerPromise;t.zIndex=this.zIndex}async onSlotChange(t){const r=t.target.assignedElements()[0];if(r){const i=await this.innerMarkerPromise;i.content=r}}};y([k({type:String,reflect:!0}),E("design:type",String)],Lr.prototype,"waypoint",void 0);y([k({type:String,reflect:!0}),E("design:type",Object)],Lr.prototype,"title",void 0);y([k({type:Number,attribute:!1}),E("design:type",Number)],Lr.prototype,"zIndex",void 0);Lr=y([Q("gmpx-route-marker"),E("design:paramtypes",[])],Lr);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const k1=["strokeColor","strokeWeight","strokeOpacity","zIndex","invisible"];let Ut=class extends Ms{get innerPolyline(){return this.innerPolylineDeferred.value}get innerPolylinePromise(){return this.innerPolylineDeferred.promise}constructor(){super(),this.fitInViewport=!1,this.invisible=!1,this.innerPolylineDeferred=new an,this.mapController=new og(this),this.initPolyline()}async initPolyline(){const{Polyline:t}=await K.importLibrary("maps",this),n=new t;this.innerPolylineDeferred.resolve(n)}async connectedCallback(){super.connectedCallback();const t=await this.innerPolylinePromise,n=await this.mapController.mapPromise;this.isConnected&&(t.setMap(n),await this.mapController.viewportManager.register(this))}disconnectedCallback(){var t,n;super.disconnectedCallback(),(t=this.mapController.viewportManager)==null||t.unregister(this),(n=this.innerPolyline)==null||n.setMap(null)}updated(t){var n;k1.some(r=>t.has(r))&&this.setInnerPolylineOptions(),(t.has("route")||t.has("contextRoute"))&&this.updatePath(),(t.has("fitInViewport")||this.fitInViewport&&(t.has("route")||t.has("contextRoute")))&&((n=this.mapController.viewportManager)==null||n.updateViewport())}getBounds(){var t;return this.fitInViewport?((t=this.getRoute())==null?void 0:t.bounds)??null:null}async setInnerPolylineOptions(){const t={strokeColor:this.strokeColor,strokeWeight:this.strokeWeight,zIndex:this.zIndex,strokeOpacity:this.strokeOpacity,visible:!this.invisible};(await this.innerPolylinePromise).setOptions(t)}async updatePath(){let t=[];const n=this.getRoute();if(n)for(const i of n.legs)for(const o of i.steps)t=t.concat(o.path);(await this.innerPolylinePromise).setPath(t)}};y([k({attribute:"fit-in-viewport",type:Boolean,reflect:!0}),E("design:type",Object)],Ut.prototype,"fitInViewport",void 0);y([k({attribute:"invisible",type:Boolean,reflect:!0}),E("design:type",Object)],Ut.prototype,"invisible",void 0);y([k({attribute:"stroke-color",type:String,reflect:!0}),E("design:type",String)],Ut.prototype,"strokeColor",void 0);y([k({attribute:"stroke-opacity",type:Number,reflect:!0}),E("design:type",Number)],Ut.prototype,"strokeOpacity",void 0);y([k({attribute:"stroke-weight",type:Number,reflect:!0}),E("design:type",Number)],Ut.prototype,"strokeWeight",void 0);y([k({attribute:"z-index",type:Number,reflect:!0}),E("design:type",Number)],Ut.prototype,"zIndex",void 0);Ut=y([Q("gmpx-route-polyline"),E("design:paramtypes",[])],Ut);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Pa;const O1="#1faefb",A1="#2565cd";let We=Pa=class extends Ne{constructor(){super(),this.travelMode="driving",this.noPin=!1,this.zIndex=10*Pa.numConstructed++}render(){return S`
      <gmpx-route-data-provider
          .destinationLatLng=${this.destinationLatLng}
          .destinationPlaceId=${this.destinationPlaceId}
          .destinationAddress=${this.destinationAddress}
          .originLatLng=${this.originLatLng}
          .originPlaceId=${this.originPlaceId}
          .originAddress=${this.originAddress}
          .route=${this.route}
          .travelMode=${this.travelMode}>
        <gmpx-route-polyline
            fit-in-viewport
            stroke-color="${A1}"
            stroke-weight="9"
            .zIndex=${this.zIndex}>
        </gmpx-route-polyline>
        <gmpx-route-polyline
            stroke-color="${O1}"
            stroke-weight="5"
            .zIndex=${this.zIndex+1}>
        </gmpx-route-polyline>
        <gmpx-route-marker
            waypoint="origin"
            .title=${this.originAddress??""}
            .zIndex=${this.zIndex}>
          <svg width="20" height="20" style="position: relative; top: 13px;">
            <circle cx="10" cy="10" r="6" stroke="black" stroke-width="3" 
                fill="white"/>
          </svg>
        </gmpx-route-marker>
        <gmpx-route-marker
            waypoint="destination"
            .title=${this.destinationAddress??""}
            .zIndex=${this.zIndex+1}>
          <svg width="20" height="20" style="position: relative; top: 13px;">
            <circle cx="10" cy="10" r="7" stroke="black" stroke-width="3" 
                fill="white"/>
            <circle cx="10" cy="10" r="1.8" stroke="black" stroke-width="3" 
                fill="black"/>
          </svg>
        </gmpx-route-marker>
        ${me(!this.noPin,()=>S`
          <gmpx-route-marker
              waypoint="destination"
              .title=${this.destinationAddress??""}
              .zIndex=${this.zIndex+2}>
          </gmpx-route-marker>`)}
      </gmpx-route-data-provider>
    `}};We.numConstructed=0;y([k({converter:zi,attribute:"destination-lat-lng",reflect:!0}),E("design:type",Object)],We.prototype,"destinationLatLng",void 0);y([k({type:String,attribute:"destination-place-id",reflect:!0}),E("design:type",String)],We.prototype,"destinationPlaceId",void 0);y([k({type:String,attribute:"destination-address",reflect:!0}),E("design:type",String)],We.prototype,"destinationAddress",void 0);y([k({converter:zi,attribute:"origin-lat-lng",reflect:!0}),E("design:type",Object)],We.prototype,"originLatLng",void 0);y([k({type:String,attribute:"origin-place-id",reflect:!0}),E("design:type",String)],We.prototype,"originPlaceId",void 0);y([k({type:String,attribute:"origin-address",reflect:!0}),E("design:type",String)],We.prototype,"originAddress",void 0);y([k({attribute:!1}),E("design:type",Object)],We.prototype,"route",void 0);y([k({type:String,attribute:"travel-mode",reflect:!0}),E("design:type",Object)],We.prototype,"travelMode",void 0);y([k({type:Boolean,attribute:"no-pin",reflect:!0}),E("design:type",Object)],We.prototype,"noPin",void 0);We=Pa=y([Q("gmpx-route-overview"),E("design:paramtypes",[])],We);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:$1}=x0,bd=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,N1=e=>{var t;return((t=e==null?void 0:e._$litType$)==null?void 0:t.h)!=null},I1=e=>e.strings===void 0,Td=()=>document.createComment(""),En=(e,t,n)=>{var o;const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const s=r.insertBefore(Td(),i),l=r.insertBefore(Td(),i);n=new $1(s,l,e,e.options)}else{const s=n._$AB.nextSibling,l=n._$AM,a=l!==e;if(a){let u;(o=n._$AQ)==null||o.call(n,e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==l._$AU&&n._$AP(u)}if(s!==i||a){let u=n._$AA;for(;u!==s;){const d=u.nextSibling;r.insertBefore(u,i),u=d}}}return n},vn=(e,t,n=e)=>(e._$AI(t,n),e),R1={},ka=(e,t=R1)=>e._$AH=t,Oa=e=>e._$AH,El=e=>{var r;(r=e._$AP)==null||r.call(e,!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const i=t.nextSibling;t.remove(),t=i}},b1=e=>{e._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Md=e=>N1(e)?e._$litType$.h:e.strings,T1=Mi(class extends Di{constructor(e){super(e),this.et=new WeakMap}render(e){return[e]}update(e,[t]){const n=bd(this.it)?Md(this.it):null,r=bd(t)?Md(t):null;if(n!==null&&(r===null||n!==r)){const i=Oa(e).pop();let o=this.et.get(n);if(o===void 0){const s=document.createDocumentFragment();o=Rh(j,s),o.setConnected(!1),this.et.set(n,o)}ka(o,[i]),En(o,void 0,i)}if(r!==null){if(n===null||n!==r){const i=this.et.get(r);if(i!==void 0){const o=Oa(i).pop();b1(e),En(e,void 0,o),ka(e,[o])}}this.it=t}else this.it=void 0;return this.render(t)}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let un=class extends Ne{constructor(){super(...arguments),this.columnReverse=!1,this.rowLayoutMinWidth=640,this.rowReverse=!1,this.hasRowLayout=!0,this.slotValidator=new Rs(this,this.logger,["main","fixed"])}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>void this.updateLayout()),this.resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.disconnect()}willUpdate(){this.updateLayout()}render(){const t=S`
      <div class="fixed-container">
        <slot name="fixed"></slot>
      </div>
    `,n=S`
      <div class="main-container">
        <slot name="main"></slot>
      </div>
    `;return S`
    <div class="layout ${Xo({column:!this.hasRowLayout,row:this.hasRowLayout})}">
      ${T1(this.hasRowLayout&&this.rowReverse||!this.hasRowLayout&&!this.columnReverse?S`${n}${t}`:S`${t}${n}`)}
    </div>
    `}updateLayout(){this.hasRowLayout=this.clientWidth>=this.rowLayoutMinWidth}};un.styles=F`
    :host(:not([hidden])) {
      display: block;
      height: 100%;
    }

    .layout {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .layout.column {
      flex-direction: column;
    }

    .layout.column .fixed-container {
      height: var(--gmpx-fixed-panel-height-column-layout, 50%);
    }

    .layout.row {
      flex-direction: row;
    }

    .layout.row .fixed-container {
      width: var(--gmpx-fixed-panel-width-row-layout, 320px);
    }

    .fixed-container {
      overflow: auto;
      z-index: 1;
    }

    .main-container {
      flex: 1;
      overflow: auto;
    }
  `;y([k({attribute:"column-reverse",reflect:!0,type:Boolean}),E("design:type",Object)],un.prototype,"columnReverse",void 0);y([k({attribute:"row-layout-min-width",reflect:!0,type:Number}),E("design:type",Object)],un.prototype,"rowLayoutMinWidth",void 0);y([k({attribute:"row-reverse",reflect:!0,type:Boolean}),E("design:type",Object)],un.prototype,"rowReverse",void 0);y([he(),E("design:type",Object)],un.prototype,"hasRowLayout",void 0);un=y([Q("gmpx-split-layout")],un);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ti=(e,t)=>{var r;const n=e._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,t,!1),ti(i,t);return!0},ss=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},sg=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),z1(t)}};function M1(e){this._$AN!==void 0?(ss(this),this._$AM=e,sg(this)):this._$AM=e}function D1(e,t=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let o=n;o<r.length;o++)ti(r[o],!1),ss(r[o]);else r!=null&&(ti(r,!1),ss(r));else ti(this,e)}const z1=e=>{e.type==$s.CHILD&&(e._$AP??(e._$AP=D1),e._$AQ??(e._$AQ=M1))};class j1 extends Di{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),sg(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(ti(this,t),ss(this))}setValue(t){if(I1(this.t))this.t._$AI(t,this);else{const n=[...this.t._$AH];n[this.i]=t,this.t._$AI(n,this,0)}}disconnected(){}reconnected(){}}const xl=new WeakMap,U1=Mi(class extends j1{render(e){return j}update(e,[t]){var r;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),j}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let n=xl.get(t);n===void 0&&(n=new WeakMap,xl.set(t,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=xl.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dd=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},zd=Mi(class extends Di{constructor(e){if(super(e),e.type!==$s.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let s=0;for(const l of e)i[s]=r?r(l,s):s,o[s]=n(l,s),s++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=Oa(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,o;const l=this.ut??(this.ut=[]),a=[];let u,d,c=0,f=i.length-1,m=0,v=o.length-1;for(;c<=f&&m<=v;)if(i[c]===null)c++;else if(i[f]===null)f--;else if(l[c]===s[m])a[m]=vn(i[c],o[m]),c++,m++;else if(l[f]===s[v])a[v]=vn(i[f],o[v]),f--,v--;else if(l[c]===s[v])a[v]=vn(i[c],o[v]),En(e,a[v+1],i[c]),c++,v--;else if(l[f]===s[m])a[m]=vn(i[f],o[m]),En(e,i[c],i[f]),f--,m++;else if(u===void 0&&(u=Dd(s,m,v),d=Dd(l,c,f)),u.has(l[c]))if(u.has(l[f])){const w=d.get(s[m]),P=w!==void 0?i[w]:null;if(P===null){const h=En(e,i[c]);vn(h,o[m]),a[m]=h}else a[m]=vn(P,o[m]),En(e,i[c],P),i[w]=null;m++}else El(i[f]),f--;else El(i[c]),c++;for(;m<=v;){const w=En(e,a[v+1]);vn(w,o[m]),a[m++]=w}for(;c<=f;){const w=i[c++];w!==null&&El(w)}return this.ut=s,ka(e,a),Dt}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const F1=10,jd=25;function lg(){return new eg(F1,e=>e.code==="OVER_QUERY_LIMIT"||e.code==="UNKNOWN_ERROR")}var $n;(function(e){e[e.GEOMETRIC=0]="GEOMETRIC",e[e.DISTANCE_MATRIX=1]="DISTANCE_MATRIX"})($n||($n={}));class gt{constructor(t){this.elementForLogging=t}async computeDistances(t,n,r){const i=new Map;for(const u of n)i.set(u,{});let o=[...n];if(n.length>jd){const{spherical:u}=await K.importLibrary("geometry",this.elementForLogging);for(const[c,f]of i.entries())f.source=$n.GEOMETRIC,f.value=u.computeDistanceBetween(t,c);const d=c=>{var f;return((f=i.get(c))==null?void 0:f.value)??1/0};o.sort((c,f)=>d(c)-d(f)),o=o.slice(0,jd)}const s={origins:[t],destinations:o,travelMode:"DRIVING",unitSystem:r};let l=gt.cache.get(s);l==null&&(l=this.getService().then(u=>u.getDistanceMatrix(s)),gt.cache.set(s,l));const a=await l;for(let u=0;u<a.rows[0].elements.length;u++){const d=i.get(o[u]),c=a.rows[0].elements[u];c.status==="OK"&&(d.value=c.distance.value,d.text=c.distance.text,d.source=$n.DISTANCE_MATRIX)}return n.map(u=>i.get(u))}async getService(){if(!gt.service){const{DistanceMatrixService:t}=await K.importLibrary("routes",this.elementForLogging);gt.service=new t}return gt.service}static reset(){gt.cache=lg(),gt.service=void 0}}gt.cache=lg();/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const mt={ADVANCED:"advanced",INTERMEDIATE:"intermediate",BASIC:"basic"};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function B1(e){function t(r){return{label:r.label??"",defaultUri:r.defaultUrl}}const n=r=>({title:r.title??"",addressLines:[r.address1??"",r.address2??""].filter(Boolean),position:r.coords??{lat:0,lng:0},placeId:r.placeId,actions:(r.actions??[]).map(t)});return(e.locations??[]).map(n)}function H1(e){var t,n;return(t=e.capabilities)!=null&&t.directions?mt.ADVANCED:(n=e.capabilities)!=null&&n.input?mt.INTERMEDIATE:mt.BASIC}function V1(e){const t={...e.mapOptions??{}};return t.mapId||delete t.mapId,t}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const W1=F`
  :not(:defined) {
    visibility: hidden;
  }

  :host {
    /* Override the default split layout sizes */
    --_gmpx-fixed-panel-width-row-layout: var(--gmpx-fixed-panel-width-row-layout, 28.5em);
    --_gmpx-fixed-panel-height-column-layout: var(--gmpx-fixed-panel-height-column-layout, 65%);
  }

  :host(:not([hidden])) {
    display: block;
    height: 100%;
  }

  gmpx-split-layout {
    --gmpx-fixed-panel-width-row-layout: var(--_gmpx-fixed-panel-width-row-layout);
    --gmpx-fixed-panel-height-column-layout: var(--_gmpx-fixed-panel-height-column-layout);
    background: ${_n};
    color: ${$t};
    font: ${Ns};
  }

  a {
    color: ${It};
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    font-size: inherit;
    padding: 0;
  }

  #locations-panel {
    box-sizing: border-box;
    overflow-y: auto;
    padding: 0.5em;
  }

  #locations-panel-list > header {
    padding: 1.4em 1.4em 0 1.4em;
  }

  #locations-panel-list h1.search-title {
    align-items: center;
    display: flex;
    font: ${xo};
    margin: 0;
  }

  #locations-panel-list h1.search-title .icon {
    font-size: 150%;
    margin-right: 0.2em;
  }

  #locations-panel-list gmpx-place-picker {
    margin-top: 0.8em;
    position: relative;
    width: 100%;
  }

  #locations-panel-list .section-name {
    font: ${Er};
    margin: 1.8em 0 1em 1.5em;
  }

  #location-results-list .result-item {
    border-bottom: ${Ci};
    cursor: pointer;
    padding: 0.8em 3.5em 0.8em 1.4em;
    position: relative;
  }

  #location-results-list .result-item:first-of-type {
    border-top: ${Ci};
  }

  #location-results-list .result-item:last-of-type {
    border-bottom: none;
  }

  #location-results-list .selected .result-item {
    outline: 2px solid ${It};
    outline-offset: -2px;
  }

  #location-results-list h2 {
    font: ${xo};
    margin: 0 0 0.6em 0;
  }

  #location-results-list .address {
    color: ${Zo};
    margin-bottom: 0.5em;
  }

  #location-results-list gmpx-place-directions-button {
    position: absolute;
    right: 1.2em;
    top: 2.6em;
  }

  #location-results-list .distance {
    position: absolute;
    right: 0;
    text-align: center;
    top: 0.9em;
    width: 5em;
  }

  #location-results-list .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3em;
    padding-top: 0.3em;
  }

  #location-results-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  #details-panel .back-button {
    align-items: center;
    color: ${It};
    display: flex;
    font: ${xo};
    margin: 1em 0 0 1em;
  }

  #details-panel .back-button .icon {
    font-size: 140%;
    margin-right: 0.2em;
  }

  .search-pin {
    width: 25px;
    height: 25px;
    position: relative;
    top: 15px;
  }

  .search-pin > circle {
    fill: #3367D6;
    fill-opacity: 50%;
  }
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const G1={mapTypeControl:!1,maxZoom:17,streetViewControl:!1};let Oe=class extends Ne{constructor(){super(),this.featureSet=mt.ADVANCED,this.mapOptions=G1,this.internalListings=[],this.initialized=!1,this.getMsg=le.buildLocalizer(this),this.fontLoader=new fn(this,[we.GOOGLE_SANS_TEXT,we.MATERIAL_SYMBOLS_OUTLINED]),this.distanceMeasurer=new gt(this),this.listingDistances=new Map,this.initialize()}shouldUpdate(t){return this.initialized}willUpdate(t){(t.has("listings")||t.has("initialized"))&&(this.internalListings=(this.listings??[]).map(n=>this.createInternalListing(n)),this.listingDistances.clear())}updated(t){var n,r;(t.has("listings")||t.has("initialized"))&&this.updateBounds(),(t.has("mapOptions")||t.has("initialized"))&&this.mapOptions&&((r=(n=this.mapElement)==null?void 0:n.innerMap)==null||r.setOptions(this.mapOptions))}render(){return this.initialized?S`
      <gmpx-split-layout>
        <gmpx-overlay-layout slot="fixed">
          ${this.renderSidePanelMain()}
          ${this.renderSidePanelOverlay()}
        </gmpx-overlay-layout>
        ${this.renderMapPanel()}
      </gmpx-split-layout>
    `:j}configureFromQuickBuilder(t){this.listings=B1(t),this.featureSet=H1(t),this.mapOptions=V1(t)}async initialize(){this.mapsCoreLibrary=await K.importLibrary("core",this),this.initialized=!0}createInternalListing(t){var r;const n={place_id:t.placeId,name:t.title,formatted_address:(r=t.addressLines)==null?void 0:r.join(" "),geometry:{location:new this.mapsCoreLibrary.LatLng(t.position)}};return{...t,placeResult:n,uniqueKey:`${t.placeId}:${t.title}`}}isIntermediateOrBetter(){return this.featureSet===mt.INTERMEDIATE||this.featureSet===mt.ADVANCED}async updateDistances(t){if(!this.isIntermediateOrBetter()||!t||!this.internalListings.length)this.listingDistances.clear();else{const n=this.userCountry==="US"?this.mapsCoreLibrary.UnitSystem.IMPERIAL:this.mapsCoreLibrary.UnitSystem.METRIC,r=await this.distanceMeasurer.computeDistances(t,this.internalListings.map(i=>i.position),n);for(let i=0;i<r.length;i++)this.listingDistances.set(this.internalListings[i],r[i])}this.requestUpdate()}updateSearchLocation(t){const n=t.target.value;if(this.searchLocation=n??void 0,n!=null&&n.addressComponents){for(const r of n.addressComponents)if(r.types.indexOf("country")>=0){this.userCountry=r.shortText??void 0;break}}this.updateBounds(),this.updateDistances(n==null?void 0:n.location)}selectLocation(t){return this.selectedListing===t?!1:(this.selectedListing=t,!0)}async updateBounds(){var n,r,i;if(!this.internalListings.length)return;const t=new this.mapsCoreLibrary.LatLngBounds;(n=this.searchLocation)!=null&&n.location&&t.extend(this.searchLocation.location);for(const o of this.internalListings)t.extend(o.position);(i=(r=this.mapElement)==null?void 0:r.innerMap)==null||i.fitBounds(t)}renderSidePanelOverlay(){return this.featureSet===mt.ADVANCED?S`
          <div slot="overlay" id="details-panel">
            <button class="back-button"
                @click=${()=>{var t;return(t=this.overlayLayout)==null?void 0:t.hideOverlay()}}>
              <span class="icon material-symbols-outlined">arrow_back</span>
              ${this.getMsg("LOCATOR_BACK_BUTTON_CTA")}
            </button>
            <gmpx-place-overview .place=${this.detailsPlaceId} google-logo-already-displayed>
            </gmpx-place-overview>
          </div>`:j}renderListItem(t){var u;const n=this.listingDistances.get(t),i=(n==null?void 0:n.text)&&n.source===$n.DISTANCE_MATRIX?n.text:j,o=[];if(this.featureSet===mt.ADVANCED){const d=()=>{var c;t.placeId&&(this.detailsPlaceId=t.placeId,(c=this.overlayLayout)==null||c.showOverlay())};o.push(S`
          <gmpx-icon-button class="view-details" @click=${d}>
            ${this.getMsg("LOCATOR_VIEW_DETAILS_CTA")}
          </gmpx-icon-button>`)}for(const d of t.actions??[])o.push(S`
          <gmpx-icon-button icon="open_in_new" .href=${d.defaultUri??j}>
            ${d.label}
          </gmpx-icon-button>`);const s=()=>{var c,f;this.selectLocation(t)&&this.selectedListing&&!this.searchLocation&&((f=(c=this.mapElement)==null?void 0:c.innerMap)==null||f.panTo(this.selectedListing.position))},l=s,a=d=>{s(),d.stopPropagation()};return S`
      <li @click=${l}
          class=${Xo({selected:t===this.selectedListing})}
          ${U1(d=>{t.listingElement=d})}>
        <gmpx-place-data-provider auto-fetch-disabled
            .place=${t.placeResult}>
          <div class="result-item">
            <button class="select-location" @click=${a}>
              <h2 class="name">
                <gmpx-place-field-text field="displayName"></gmpx-place-field-text>
              </h2>
            </button>
            <div class="address">
              ${xa(t.addressLines??[],S`<br>`)}
            </div>
            <div class="actions">
              ${xa(o,S``)}
            </div>
            <div class="distance">${i}</div>
            <gmpx-place-directions-button condensed
                .origin=${((u=this.searchLocation)==null?void 0:u.location)??void 0}>
            </gmpx-place-directions-button>
          </div>
        </gmpx-place-data-provider>
      </li>`}renderSidePanelMain(){let t=this.internalListings,n=this.getMsg("LOCATOR_LIST_SUBHEADING");if(this.listingDistances.size>0){n=this.getMsg("LOCATOR_LIST_SUBHEADING_WITH_SEARCH");const i=this.internalListings.filter(a=>{var u;return((u=this.listingDistances.get(a))==null?void 0:u.source)===$n.DISTANCE_MATRIX}),o=this.internalListings.filter(a=>{var u;return((u=this.listingDistances.get(a))==null?void 0:u.source)!==$n.DISTANCE_MATRIX}),s=a=>{var u;return((u=this.listingDistances.get(a))==null?void 0:u.value)??1/0},l=(a,u)=>s(a)-s(u);t=[...i.sort(l),...o.sort(l)]}const r=this.featureSet===mt.BASIC?j:S`
        <header>
          <h1 class="search-title">
            <span class="icon material-symbols-outlined">distance</span>
            ${this.getMsg("LOCATOR_LIST_HEADER")}
          </h1>
          <gmpx-place-picker for-map="main-map" type="geocode"
              .placeholder=${this.getMsg("LOCATOR_SEARCH_PROMPT")}
              @gmpx-placechange=${this.updateSearchLocation}>
          </gmpx-place-picker>
        </header>
    `;return S`
        <div slot="main" id="locations-panel">
          <div id="locations-panel-list">
            ${r}
            <div class="section-name">
              ${n} (${t.length})
            </div>
            <div class="results">
              <ul id="location-results-list">
                ${zd(t,i=>i.uniqueKey,i=>this.renderListItem(i))}
              </ul>
            </div>
          </div>
        </div>`}renderSearchMarker(){var t;return this.isIntermediateOrBetter()&&((t=this.searchLocation)!=null&&t.location)?S`
          <gmp-advanced-marker
              .position=${this.searchLocation.location}
              title="${this.getMsg("LOCATOR_SEARCH_LOCATION_MARKER_TITLE")}">
            <svg viewbox="0 0 100 100" class="search-pin">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
          </gmp-advanced-marker>`:j}renderMapMarker(t){const r=()=>{this.selectLocation(t);const i=t.listingElement;i&&i.scrollIntoView({behavior:"smooth",block:"nearest"})};return S`
        <gmp-advanced-marker
            .position=${t.position}
            .title=${t.title}
            .zIndex=${100}
            gmp-clickable @gmp-click=${r}></gmp-advanced-marker>`}renderMapDirections(){var r,i;const t=(r=this.searchLocation)==null?void 0:r.location,n=(i=this.selectedListing)==null?void 0:i.position;return this.featureSet===mt.ADVANCED&&t&&n?S`
      <gmpx-route-overview no-pin
          .originLatLng=${t}
          .destinationLatLng=${n}>
      </gmpx-route-overview>`:j}renderMapPanel(){return S`
        <gmp-map slot="main" id="main-map" .mapId=${this.mapId??j}>
          ${this.renderMapDirections()}
          ${zd(this.internalListings,t=>t.uniqueKey,t=>this.renderMapMarker(t))}
          ${this.renderSearchMarker()}
        </gmp-map>`}};Oe.styles=W1;y([k({attribute:"feature-set",reflect:!0}),E("design:type",String)],Oe.prototype,"featureSet",void 0);y([k({attribute:"map-id",reflect:!0}),E("design:type",String)],Oe.prototype,"mapId",void 0);y([k({attribute:!1}),E("design:type",Array)],Oe.prototype,"listings",void 0);y([k({attribute:!1}),E("design:type",Object)],Oe.prototype,"mapOptions",void 0);y([he(),E("design:type",Array)],Oe.prototype,"internalListings",void 0);y([he(),E("design:type",Object)],Oe.prototype,"selectedListing",void 0);y([he(),E("design:type",Object)],Oe.prototype,"searchLocation",void 0);y([he(),E("design:type",String)],Oe.prototype,"detailsPlaceId",void 0);y([he(),E("design:type",Object)],Oe.prototype,"initialized",void 0);y([pt("gmpx-overlay-layout"),E("design:type",Function)],Oe.prototype,"overlayLayout",void 0);y([pt("gmp-map"),E("design:type",Object)],Oe.prototype,"mapElement",void 0);Oe=y([Q("gmpx-store-locator"),E("design:paramtypes",[])],Oe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Y1=ne({tagName:"gmpx-api-loader",elementClass:K,react:ee});Y1.importLibrary=K.importLibrary;ne({tagName:"gmpx-icon-button",elementClass:Ve,react:ee});ne({tagName:"gmpx-overlay-layout",elementClass:zt,react:ee});ne({tagName:"gmpx-place-attribution",elementClass:An,react:ee});ne({tagName:"gmpx-place-data-provider",elementClass:xt,react:ee,events:{onRequestError:"gmpx-requesterror"}});ne({tagName:"gmpx-place-directions-button",elementClass:jt,react:ee});ne({tagName:"gmpx-place-field-boolean",elementClass:Pi,react:ee});ne({tagName:"gmpx-place-field-link",elementClass:xr,react:ee});ne({tagName:"gmpx-place-field-text",elementClass:ns,react:ee});ne({tagName:"gmpx-place-opening-hours",elementClass:Sr,react:ee});ne({tagName:"gmpx-place-overview",elementClass:et,react:ee,events:{onRequestError:"gmpx-requesterror"}});ne({tagName:"gmpx-place-photo-gallery",elementClass:St,react:ee});ne({tagName:"gmpx-place-picker",elementClass:fe,react:ee,events:{onPlaceChange:"gmpx-placechange",onRequestError:"gmpx-requesterror"}});ne({tagName:"gmpx-place-price-level",elementClass:is,react:ee});ne({tagName:"gmpx-place-rating",elementClass:ki,react:ee});ne({tagName:"gmpx-place-reviews",elementClass:Oi,react:ee});ne({tagName:"gmpx-route-data-provider",elementClass:tt,react:ee,events:{onRequestError:"gmpx-requesterror"}});ne({tagName:"gmpx-route-marker",elementClass:Lr,react:ee});ne({tagName:"gmpx-route-overview",elementClass:We,react:ee,events:{onRequestError:"gmpx-requesterror"}});ne({tagName:"gmpx-route-polyline",elementClass:Ut,react:ee});const K1=ne({tagName:"gmpx-split-layout",elementClass:un,react:ee});ne({tagName:"gmpx-store-locator",elementClass:Oe,react:ee});var ag={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ud=W.createContext&&W.createContext(ag),q1=["attr","size","title"];function Q1(e,t){if(e==null)return{};var n=X1(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function X1(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}function Fd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function as(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fd(Object(n),!0).forEach(function(r){Z1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Z1(e,t,n){return t=J1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J1(e){var t=ew(e,"string");return typeof t=="symbol"?t:t+""}function ew(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ug(e){return e&&e.map((t,n)=>W.createElement(t.tag,as({key:n},t.attr),ug(t.child)))}function zu(e){return t=>W.createElement(tw,ls({attr:as({},e.attr)},t),ug(e.child))}function tw(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=Q1(e,q1),l=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),W.createElement("svg",ls({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:a,style:as(as({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&W.createElement("title",null,o),e.children)};return Ud!==void 0?W.createElement(Ud.Consumer,null,n=>t(n)):t(ag)}function nw(e){return zu({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"},child:[]}]})(e)}function rw(e){return zu({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"},child:[]}]})(e)}function iw(e){return zu({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 0 0-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 0 0-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 0 0-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 1 0 128 0 64 64 0 1 0-128 0z"},child:[]}]})(e)}const ow=e=>I.jsx("div",{className:"mt-2 pr-2",onClick:()=>e.setActiveMarker(e.place),children:I.jsxs("div",{className:"overflow-auto lock max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[I.jsx("h5",{className:"mb-2 text-xl font-bold tracking-tight text-gray-700",children:e.place.displayName}),I.jsx("div",{className:"flex flex-col items-center",children:e.place.photos?I.jsxs("div",{children:[I.jsx("img",{className:"rounded-lg",src:e.place.photos[0].Fg[0].Fg,alt:""}),I.jsx("br",{})]}):I.jsx("div",{children:"No image"})}),I.jsxs("div",{className:"flex flex-row",children:[e.place.nationalPhoneNumber?I.jsxs("div",{className:"flex items-center",children:[I.jsx(rw,{}),I.jsx("a",{href:"tel:"+e.place.nationalPhoneNumber,className:"font-normal text-gray-500",children:e.place.nationalPhoneNumber}),",  "]}):I.jsx("div",{className:"text-sm tracking-tight text-gray-700",children:"Cannot find phone number,  "}),e.place.hasWiFi?I.jsxs("div",{className:"flex items-center",children:[I.jsx(iw,{}),",  "]}):I.jsx("div",{className:"text-sm tracking-tight text-gray-700"}),e.place.rating?I.jsxs("div",{className:"flex items-center",children:[I.jsx(nw,{}),I.jsx("p",{className:"text-sm tracking-tight text-gray-700",children:e.place.rating})]}):I.jsx("div",{className:"text-sm tracking-tight text-gray-700",children:"There is no Rating yet"})]}),I.jsx("p",{className:"text-gray-700 text-base",children:e.place.editorialSummary})]})}),sw=({places:e,title:t,ActiveMarker:n})=>I.jsxs("div",{className:"ml-2",children:[I.jsxs("h1",{className:"text-lg font-bold leading-none tracking-tight text-gray-900",children:[t," (",e.length,")"]}),e.map(r=>I.jsx(ow,{setActiveMarker:n,place:r},r.id))]}),lw={width:"100%",height:"100%"};function aw(){const e={lat:-41.2865,lng:174.7762,accuracy:100},[t,n]=x.useState(e),[r,i]=x.useState(null);x.useState(!1);const[o,s]=n0();x.useRef(null);const l=Os("gmap"),a=Cu("routes"),[u,d]=x.useState(null),[c,f]=x.useState(null);x.useEffect(()=>{!a||!l||(v().then(()=>{w()}),d(new a.DirectionsService),f(new a.DirectionsRenderer({map:l})))},[a,l]);class m extends W.Component{constructor(){super(...arguments);ju(this,"state",{latitude:null,longitude:null})}componentDidMount(){window.navigator.geolocation.getCurrentPosition(L=>this.setState({latitude:L.coords.latitude,longitude:L.coords.longitude}))}render(){return I.jsxs("div",{children:[this.state.latitude,", ",this.state.longitude]})}}async function v(){if(navigator.geolocation)return new Promise((g,_)=>{navigator.geolocation.getCurrentPosition(L=>{const{latitude:A,longitude:O}=L.coords;console.log(L.coords),n({lat:A,lng:O}),g()},L=>{console.error("Error getting user location:",L),_(L)})});console.error("Geolocation is not supported by this browser.")}async function w(){const{Place:g,SearchNearbyRankPreference:_}=await google.maps.importLibrary("places"),{AdvancedMarkerElement:L}=await google.maps.importLibrary("marker");let A=new google.maps.LatLng(t.lat,t.lng);const O={fields:["id","photos","rating","displayName","editorialSummary","location","businessStatus","allowsDogs","nationalPhoneNumber","hasWiFi"],locationRestriction:{center:A,radius:500},includedPrimaryTypes:["american_restaurant","bakery","bar","barbecue_restaurant","brazilian_restaurant","breakfast_restaurant","brunch_restaurant","cafe","chinese_restaurant","coffee_shop","fast_food_restaurant","french_restaurant","greek_restaurant","hamburger_restaurant","ice_cream_shop","indian_restaurant","indonesian_restaurant","italian_restaurant","japanese_restaurant","korean_restaurant","lebanese_restaurant","meal_delivery","meal_takeaway","mediterranean_restaurant","mexican_restaurant","middle_eastern_restaurant","pizza_restaurant","ramen_restaurant","restaurant","sandwich_shop","seafood_restaurant","spanish_restaurant","steak_house","sushi_restaurant","thai_restaurant","turkish_restaurant","vegan_restaurant","vegetarian_restaurant","vietnamese_restaurant"],maxResultCount:10,rankPreference:_.POPULARITY,language:"en-US",region:"nz"},{places:$}=await g.searchNearby(O);if($.length){const{LatLngBounds:H}=await google.maps.importLibrary("core"),b=new H,Ie=$.filter(je=>je.allowsDogs);i(Ie),Ie.forEach(je=>{je.photos.forEach(function(ji){}),console.log(je),new L({map:l,gmpClickable:!0,position:je.location,title:je.displayName}).addListener("click",({domEvent:ji,latLng:Ds})=>{P(Ds)}),b.extend(je.location)}),b.extend({lat:t.lat,lng:t.lng}),l.fitBounds(b)}else console.log("No results")}function P(g){!u||!c||u.route({origin:t,destination:g,travelMode:google.maps.TravelMode.WALKING,provideRouteAlternatives:!0}).then(_=>{c.setDirections(_)}).catch(_=>{console.error("Error in route calculation:",_)})}const h=g=>{console.log("try to close all windows")},p=g=>{const _=g;l.setCenter(_.location),console.log(_.location),P(_.location)};return I.jsxs(K1,{rowReverse:!0,rowLayoutMinWidth:"700",children:[I.jsxs("div",{className:"SplitLayoutContainer max-h-56",slot:"fixed",children:[I.jsx("br",{}),(r==null?void 0:r.length)&&I.jsx(sw,{ActiveMarker:p,places:r,title:"Nearest Places"}),I.jsx("button",{onClick:v,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"})]}),I.jsx("div",{className:"SplitLayoutContainer",slot:"main",children:I.jsxs(wh,{mapId:"cbefae1f2de85910",onClick:h,id:"gmap",style:lw,defaultCenter:t,defaultZoom:15,gestureHandling:"greedy",children:[I.jsx(t0,{ref:o,position:t,title:"My position",children:I.jsx(l0,{background:"#22ccff",borderColor:"#1e89a1",glyphColor:"#0f677a"})}),I.jsx(i0,{anchor:s,maxWidth:200,children:"I'm here"})]})})]})}function uw(){return I.jsxs("div",{className:"flex flex-col h-screen",children:[I.jsx("div",{className:"flex",children:I.jsx(a0,{})}),I.jsx("div",{className:"grow",children:I.jsx("div",{className:"MapComponent",children:I.jsx(aw,{})})}),I.jsx("div",{className:"flex",children:I.jsx(u0,{})})]})}function cw(){return I.jsx(I.Fragment,{children:I.jsx(wy,{children:I.jsx(ph,{exact:!0,path:"/petsfriendlycafes",element:I.jsx(uw,{})})})})}rh(document.getElementById("root")).render(I.jsx(xy,{children:I.jsx(Ry,{apiKey:"AIzaSyAxhj-KG3sJCclJ6pgp8XZNTpKJ-vuqsvU",libraries:["marker"],children:I.jsx(cw,{})})}));
