// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=function(){return t&&"symbol"==typeof Symbol.toStringTag},o=Object.prototype.toString,n=o,r=function(t){return n.call(t)},l=Object.prototype.hasOwnProperty,c=function(t,e){return null!=t&&l.call(t,e)},f="function"==typeof Symbol?Symbol.toStringTag:"",u=c,i=f,p=o,y=r,a=function(t){var e,o,n;if(null==t)return p.call(t);o=t[i],e=u(t,i);try{t[i]=void 0}catch(e){return p.call(t)}return n=p.call(t),e?t[i]=o:delete t[i],n},b=e()?a:y,s=RegExp.prototype.exec,d=e();return function(t){return"object"==typeof t&&(t instanceof RegExp||(d?function(t){try{return s.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===b(t)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isRegExp=e();
//# sourceMappingURL=browser.js.map
