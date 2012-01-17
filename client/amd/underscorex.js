define("underscorex",function(require,exports,module){(function(){if(typeof require=="function")var _=exports=module.exports=("at",require("underscore"));var ap=Array.prototype,slice=ap.slice,each=_.each,hasOwnProperty=Object.prototype.hasOwnProperty,isTest=typeof __UNDERSCOREX_TEST!="undefined";Object.keys||(Object.keys=_.keys);if(!Date.prototype.toISOString||(new Date(-621987552e5)).toISOString().indexOf("-000001")===-1)Date.prototype.toISOString=function(){var b,c,d,e;if(!isFinite(this))throw new RangeError;b=[this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],e=this.getUTCFullYear(),e=(e<0?"-":e>9999?"+":"")+("00000"+Math.abs(e)).slice(0<=e&&e<=9999?-4:-6),c=b.length;while(c--)d=b[c],d<10&&(b[c]="0"+d);return e+"-"+b.slice(0,2).join("-")+"T"+b.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};Date.prototype.toJSON||(Date.prototype.toJSON=function(b){if(typeof this.toISOString!="function")throw new TypeError;return this.toISOString()}),Date.now||(Date.now=function(){return+(new Date)}),Array.isArray||(Array.isArray=_.isArray);var JSON;JSON||(JSON={}),function(){function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g;return e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g;return e}}function quote(a){escapable.lastIndex=0;return escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}"use strict";var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(b&&typeof b!="function"&&(typeof b!="object"||typeof b.length!="number"))throw new Error("JSON.stringify");return str("",{"":a})}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver=="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")})}();if(isTest||!Function.prototype.bind){var bind=_.bind;Function.prototype.bind=function(){var a=slice.call(arguments);a.unshift(this);return bind.apply(_,a)}}var ws="\t\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||ws.trim()){ws="["+ws+"]";var trimBeginRegexp=new RegExp("^"+ws+ws+"*"),trimEndRegexp=new RegExp(ws+ws+"*$");String.prototype.trim=function(){return String(this).replace(trimBeginRegexp,"").replace(trimEndRegexp,"")}}Array.prototype.indexOf||(Array.prototype.indexOf=function(a){"use strict";if(this==null)throw new TypeError;var b=Object(this),c=b.length>>>0;if(c===0)return-1;var d=0;arguments.length>0&&(d=Number(arguments[1]),d!=d?d=0:d!=0&&d!=Infinity&&d!=-Infinity&&(d=(d>0||-1)*Math.floor(Math.abs(d))));if(d>=c)return-1;var e=d>=0?d:Math.max(c-Math.abs(d),0);for(;e<c;e++)if(e in b&&b[e]===a)return e;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a){"use strict";if(this==null)throw new TypeError;var b=Object(this),c=b.length>>>0;if(c===0)return-1;var d=c;arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:d!=0&&d!=1/0&&d!=-Infinity&&(d=(d>0||-1)*Math.floor(Math.abs(d))));var e=d>=0?Math.min(d,c-1):c-Math.abs(d);for(;e>=0;e--)if(e in b&&b[e]===a)return e;return-1});if(isTest||!ap.every){var every=_.every;ap.every=function(a,b){return every(this,a,b)}}if(isTest||!ap.some){var some=_.some;ap.some=function(a,b){return some(this,a,b)}}if(isTest||!ap.forEach){var forEach=_.forEach;ap.forEach=function(a,b){return forEach(this,a,b)}}if(isTest||!ap.map){var map=_.map;ap.map=function(a,b){return map(this,a,b)}}if(isTest||!ap.filter){var filter=_.filter;ap.filter=function(a,b){return filter(this,a,b)}}if(isTest||!ap.reduce){var reduce=_.reduce;ap.reduce=function(a,b){return reduce(this,a,b)}}if(isTest||!ap.reduceRight){var reduceRight=_.reduceRight;ap.reduceRight=function(a,b){return reduceRight(this,a,b)}}_.mixin({log:function(){typeof console!="undefined"&&console.log&&console.log.apply(console,arguments)},isRecursable:function(b){return b instanceof Object&&!(b instanceof Array)&&!(b instanceof Date)&&!(b instanceof Function)&&!(b instanceof RegExp)},extend:function(a){each(slice.call(arguments,1),function(b){for(var c in b)hasOwnProperty.call(b,c)&&(a[c]=b[c])});return a},extendDeep:function f(b){var c=arguments.length,d=slice.call(arguments,1),e=d[d.length-1]instanceof Object?!1:!!d[d.length-1];each(d,e?function(c){for(var d in c){if(!hasOwnProperty.call(c,d))continue;d in b?isRecursable(b[d])&&isRecursable(c[d])&&(b[d]=f(b[d],c[d],!0)):b[d]=c[d]}}:function(c){for(var d in c){if(!hasOwnProperty.call(c,d))continue;isRecursable(c[d])?(isRecursable(b[d])||(b[d]={}),b[d]=f(b[d],c[d])):b[d]=c[d]}});return b},objectToArray:function(a){var b=[];for(var c in a){if(!hasOwnProperty.call(a,c))continue;b.push([c,a[c]])}return b},arrayToObject:function(a){var b={};for(var c=a.length,d=0,e;d<c;d++)e=a[d],b[e[0]]=e[1];return b},escapeXml:function(a,b){var c=a.replace(/&/g,"&amp;").replace(/'/g,"&#039;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");b&&(c=c.replace(/\n/g,"<br/>"));return c},simple:function(a,b){var c=a.replace(/\s+/g," ").trim();return b?c:c.toLowerCase()},escapeForRegExp:function(a,b){return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(a){if(b&&b.indexOf(a)!=-1)return a;return"\\"+a})},locale:function(a,b){if(!(a instanceof Object))return a;b=""+b||"en";if(a[b]!==undefined)return a[b];parts=b.split("_");while(parts.pop()){b=parts.join("_");if(b in a)return a[b]}return a.en}}),_.MIN_INT=-9007199254740992,_.MAX_INT=-_.MIN_INT;var isRecursable=_.isRecursable}).call(window)}),define("underscore",function(a,b,c){(function(){(function(){function C(a,b,c){if(a===b)return a!==0||1/a==1/b;if(a==null||b==null)return a===b;a._chain&&(a=a._wrapped),b._chain&&(b=b._wrapped);if(a.isEqual&&y.isFunction(a.isEqual))return a.isEqual(b);if(b.isEqual&&y.isFunction(b.isEqual))return b.isEqual(a);var d=k.call(a);if(d!=k.call(b))return!1;switch(d){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:a==0?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if(typeof a!="object"||typeof b!="object")return!1;var e=c.length;while(e--)if(c[e]==a)return!0;c.push(a);var f=0,g=!0;if(d=="[object Array]"){f=a.length,g=f==b.length;if(g)while(f--)if(!(g=f in a==f in b&&C(a[f],b[f],c)))break}else{if("constructor"in a!="constructor"in b||a.constructor!=b.constructor)return!1;for(var h in a)if(l.call(a,h)){f++;if(!(g=l.call(b,h)&&C(a[h],b[h],c)))break}if(g){for(h in b)if(l.call(b,h)&&!(f--))break;g=!f}}c.pop();return g}var a=this,d=a._,e={},f=Array.prototype,g=Object.prototype,h=Function.prototype,i=f.slice,j=f.unshift,k=g.toString,l=g.hasOwnProperty,m=f.forEach,n=f.map,o=f.reduce,p=f.reduceRight,q=f.filter,r=f.every,s=f.some,t=f.indexOf,u=f.lastIndexOf,v=Array.isArray,w=Object.keys,x=h.bind,y=function(a){return new F(a)};typeof b!="undefined"?(typeof c!="undefined"&&c.exports&&(b=c.exports=y),b._=y):a._=y,y.VERSION="1.3.0";var z=y.each=y.forEach=function(a,b,c){if(a!=null)if(m&&a.forEach===m)a.forEach(b,c);else if(a.length===+a.length){for(var d=0,f=a.length;d<f;d++)if(d in a&&b.call(c,a[d],d,a)===e)return}else for(var g in a)if(l.call(a,g)&&b.call(c,a[g],g,a)===e)return};y.map=function(a,b,c){var d=[];if(a==null)return d;if(n&&a.map===n)return a.map(b,c);z(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),a.length===+a.length&&(d.length=a.length);return d},y.reduce=y.foldl=y.inject=function(a,b,c,d){var e=arguments.length>2;a==null&&(a=[]);if(o&&a.reduce===o){d&&(b=y.bind(b,d));return e?a.reduce(b,c):a.reduce(b)}z(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)});if(!e)throw new TypeError("Reduce of empty array with no initial value");return c},y.reduceRight=y.foldr=function(a,b,c,d){var e=arguments.length>2;a==null&&(a=[]);if(p&&a.reduceRight===p){d&&(b=y.bind(b,d));return e?a.reduceRight(b,c):a.reduceRight(b)}var f=y.toArray(a).reverse();d&&!e&&(b=y.bind(b,d));return e?y.reduce(f,b,c,d):y.reduce(f,b)},y.find=y.detect=function(a,b,c){var d;A(a,function(a,e,f){if(b.call(c,a,e,f)){d=a;return!0}});return d},y.filter=y.select=function(a,b,c){var d=[];if(a==null)return d;if(q&&a.filter===q)return a.filter(b,c);z(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)});return d},y.reject=function(a,b,c){var d=[];if(a==null)return d;z(a,function(a,e,f){b.call(c,a,e,f)||(d[d.length]=a)});return d},y.every=y.all=function(a,b,c){var d=!0;if(a==null)return d;if(r&&a.every===r)return a.every(b,c);z(a,function(a,f,g){if(!(d=d&&b.call(c,a,f,g)))return e});return d};var A=y.some=y.any=function(a,b,c){b||(b=y.identity);var d=!1;if(a==null)return d;if(s&&a.some===s)return a.some(b,c);z(a,function(a,f,g){if(d||(d=b.call(c,a,f,g)))return e});return!!d};y.include=y.contains=function(a,b){var c=!1;if(a==null)return c;if(t&&a.indexOf===t)return a.indexOf(b)!=-1;c=A(a,function(a){return a===b});return c},y.invoke=function(a,b){var c=i.call(arguments,2);return y.map(a,function(a){return(y.isFunction(b)?b||a:a[b]).apply(a,c)})},y.pluck=function(a,b){return y.map(a,function(a){return a[b]})},y.max=function(a,b,c){if(!b&&y.isArray(a))return Math.max.apply(Math,a);if(!b&&y.isEmpty(a))return-Infinity;var d={computed:-Infinity};z(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})});return d.value},y.min=function(a,b,c){if(!b&&y.isArray(a))return Math.min.apply(Math,a);if(!b&&y.isEmpty(a))return Infinity;var d={computed:Infinity};z(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<d.computed&&(d={value:a,computed:g})});return d.value},y.shuffle=function(a){var b=[],c;z(a,function(a,d,e){d==0?b[0]=a:(c=Math.floor(Math.random()*(d+1)),b[d]=b[c],b[c]=a)});return b},y.sortBy=function(a,b,c){return y.pluck(y.map(a,function(a,d,e){return{value:a,criteria:b.call(c,a,d,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")},y.groupBy=function(a,b){var c={},d=y.isFunction(b)?b:function(a){return a[b]};z(a,function(a,b){var e=d(a,b);(c[e]||(c[e]=[])).push(a)});return c},y.sortedIndex=function(a,b,c){c||(c=y.identity);var d=0,e=a.length;while(d<e){var f=d+e>>1;c(a[f])<c(b)?d=f+1:e=f}return d},y.toArray=function(a){if(!a)return[];if(a.toArray)return a.toArray();if(y.isArray(a))return i.call(a);if(y.isArguments(a))return i.call(a);return y.values(a)},y.size=function(a){return y.toArray(a).length},y.first=y.head=function(a,b,c){return b!=null&&!c?i.call(a,0,b):a[0]},y.initial=function(a,b,c){return i.call(a,0,a.length-(b==null||c?1:b))},y.last=function(a,b,c){return b!=null&&!c?i.call(a,Math.max(a.length-b,0)):a[a.length-1]},y.rest=y.tail=function(a,b,c){return i.call(a,b==null||c?1:b)},y.compact=function(a){return y.filter(a,function(a){return!!a})},y.flatten=function(a,b){return y.reduce(a,function(a,c){if(y.isArray(c))return a.concat(b?c:y.flatten(c));a[a.length]=c;return a},[])},y.without=function(a){return y.difference(a,i.call(arguments,1))},y.uniq=y.unique=function(a,b,c){var d=c?y.map(a,c):a,e=[];y.reduce(d,function(c,d,f){if(0==f||(b===!0?y.last(c)!=d:!y.include(c,d)))c[c.length]=d,e[e.length]=a[f];return c},[]);return e},y.union=function(){return y.uniq(y.flatten(arguments,!0))},y.intersection=y.intersect=function(a){var b=i.call(arguments,1);return y.filter(y.uniq(a),function(a){return y.every(b,function(b){return y.indexOf(b,a)>=0})})},y.difference=function(a){var b=y.flatten(i.call(arguments,1));return y.filter(a,function(a){return!y.include(b,a)})},y.zip=function(){var a=i.call(arguments),b=y.max(y.pluck(a,"length")),c=Array(b);for(var d=0;d<b;d++)c[d]=y.pluck(a,""+d);return c},y.indexOf=function(a,b,c){if(a==null)return-1;var d,e;if(c){d=y.sortedIndex(a,b);return a[d]===b?d:-1}if(t&&a.indexOf===t)return a.indexOf(b);for(d=0,e=a.length;d<e;d++)if(d in a&&a[d]===b)return d;return-1},y.lastIndexOf=function(a,b){if(a==null)return-1;if(u&&a.lastIndexOf===u)return a.lastIndexOf(b);var c=a.length;while(c--)if(c in a&&a[c]===b)return c;return-1},y.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=Array(d);while(e<d)f[e++]=a,a+=c;return f};var B=function(){};y.bind=function(b,c){var d,e;if(b.bind===x&&x)return x.apply(b,i.call(arguments,1));if(!y.isFunction(b))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return b.apply(c,e.concat(i.call(arguments)));B.prototype=b.prototype;var a=new B,f=b.apply(a,e.concat(i.call(arguments)));if(Object(f)===f)return f;return a}},y.bindAll=function(a){var b=i.call(arguments,1);b.length==0&&(b=y.functions(a)),z(b,function(b){a[b]=y.bind(a[b],a)});return a},y.memoize=function(a,b){var c={};b||(b=y.identity);return function(){var d=b.apply(this,arguments);return l.call(c,d)?c[d]:c[d]=a.apply(this,arguments)}},y.delay=function(a,b){var c=i.call(arguments,2);return setTimeout(function(){return a.apply(a,c)},b)},y.defer=function(a){return y.delay.apply(y,[a,1].concat(i.call(arguments,1)))},y.throttle=function(a,b){var c,d,e,f,g,h=y.debounce(function(){g=f=!1},b);return function(){c=this,d=arguments;var i=function(){e=null,g&&a.apply(c,d),h()};e||(e=setTimeout(i,b)),f?g=!0:a.apply(c,d),h(),f=!0}},y.debounce=function(a,b){var c;return function(){var d=this,e=arguments,f=function(){c=null,a.apply(d,e)};clearTimeout(c),c=setTimeout(f,b)}},y.once=function(a){var b=!1,c;return function(){if(b)return c;b=!0;return c=a.apply(this,arguments)}},y.wrap=function(a,b){return function(){var c=[a].concat(i.call(arguments,0));return b.apply(this,c)}},y.compose=function(){var a=arguments;return function(){var b=arguments;for(var c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},y.after=function(a,b){if(a<=0)return b();return function(){if(--a<1)return b.apply(this,arguments)}},y.keys=w||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)l.call(a,c)&&(b[b.length]=c);return b},y.values=function(a){return y.map(a,y.identity)},y.functions=y.methods=function(a){var b=[];for(var c in a)y.isFunction(a[c])&&b.push(c);return b.sort()},y.extend=function(a){z(i.call(arguments,1),function(b){for(var c in b)b[c]!==void 0&&(a[c]=b[c])});return a},y.defaults=function(a){z(i.call(arguments,1),function(b){for(var c in b)a[c]==null&&(a[c]=b[c])});return a},y.clone=function(a){if(!y.isObject(a))return a;return y.isArray(a)?a.slice():y.extend({},a)},y.tap=function(a,b){b(a);return a},y.isEqual=function(a,b){return C(a,b,[])},y.isEmpty=function(a){if(y.isArray(a)||y.isString(a))return a.length===0;for(var b in a)if(l.call(a,b))return!1;return!0},y.isElement=function(a){return!!a&&a.nodeType==1},y.isArray=v||function(a){return k.call(a)=="[object Array]"},y.isObject=function(a){return a===Object(a)},y.isArguments=function(a){return k.call(a)=="[object Arguments]"},y.isArguments(arguments)||(y.isArguments=function(a){return!!a&&!!l.call(a,"callee")}),y.isFunction=function(a){return k.call(a)=="[object Function]"},y.isString=function(a){return k.call(a)=="[object String]"},y.isNumber=function(a){return k.call(a)=="[object Number]"},y.isNaN=function(a){return a!==a},y.isBoolean=function(a){return a===!0||a===!1||k.call(a)=="[object Boolean]"},y.isDate=function(a){return k.call(a)=="[object Date]"},y.isRegExp=function(a){return k.call(a)=="[object RegExp]"},y.isNull=function(a){return a===null},y.isUndefined=function(a){return a===void 0},y.noConflict=function(){a._=d;return this},y.identity=function(a){return a},y.times=function(a,b,c){for(var d=0;d<a;d++)b.call(c,d)},y.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},y.mixin=function(a){z(y.functions(a),function(b){H(b,y[b]=a[b])})};var D=0;y.uniqueId=function(a){var b=D++;return a?a+b:b},y.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var E=/.^/;y.template=function(a,b){var c=y.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(c.escape||E,function(a,b){return"',_.escape("+b.replace(/\\'/g,"'")+"),'"}).replace(c.interpolate||E,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(c.evaluate||E,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ").replace(/\\\\/g,"\\")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);if(b)return e(b,y);return function(a){return e.call(this,a,y)}},y.chain=function(a){return y(a).chain()};var F=function(a){this._wrapped=a};y.prototype=F.prototype;var G=function(a,b){return b?y(a).chain():a},H=function(a,b){F.prototype[a]=function(){var a=i.call(arguments);j.call(a,this._wrapped);return G(b.apply(y,a),this._chain)}};y.mixin(y),z(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=f[a];F.prototype[a]=function(){var c=this._wrapped;b.apply(c,arguments);var d=c.length;(a=="shift"||a=="splice")&&d===0&&delete c[0];return G(c,this._chain)}}),z(["concat","join","slice"],function(a){var b=f[a];F.prototype[a]=function(){return G(b.apply(this._wrapped,arguments),this._chain)}}),F.prototype.chain=function(){this._chain=!0;return this},F.prototype.value=function(){return this._wrapped}}).call(this)}).call(window)})