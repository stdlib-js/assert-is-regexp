"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var i=t(function(h,s){
var p=RegExp.prototype.exec;s.exports=p
});var c=t(function(j,u){
var x=i();function f(e){try{return x.call(e),!0}catch(r){return!1}}u.exports=f
});var a=t(function(l,n){
var g=require('@stdlib/assert-has-tostringtag-support/dist'),q=require('@stdlib/utils-native-class/dist'),v=c(),E=g();function R(e){return typeof e=="object"?e instanceof RegExp?!0:E?v(e):q(e)==="[object RegExp]":!1}n.exports=R
});var y=a();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
