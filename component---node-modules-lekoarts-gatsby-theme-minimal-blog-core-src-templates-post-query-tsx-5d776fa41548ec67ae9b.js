(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},A4YE:function(t,e,r){"use strict";var n=r("q1tI"),o=r.n(n),c=r("izhR"),a=r("Wbzz"),i=r("UwB6"),u=r("KcFz");e.a=function(t){var e=t.tags,r=Object(i.a)(),n=r.tagsPath,p=r.basePath;return o.a.createElement(o.a.Fragment,null,e.map((function(t,e){return o.a.createElement(o.a.Fragment,{key:t.slug},!!e&&", ",o.a.createElement(c.e,{as:a.Link,to:Object(u.a)("/"+p+"/"+n+"/"+t.slug)},t.name))})))}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),c=r("ZhPi"),a=r("Bnag");t.exports=function(t){return n(t)||o(t)||c(t)||a()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),a=r("8OQS");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=r("q1tI"),s=r("7ljp"),f=s.useMDXComponents,l=s.mdx,b=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,c=t.children,i=a(t,["scope","components","children"]),s=f(r),y=b(e),O=p.useMemo((function(){if(!c)return null;var t=u({React:p,mdx:l},y),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+c])).apply(void 0,[{}].concat(o(r)))}),[c,e]);return p.createElement(O,u({components:s},i))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function c(e,r,a){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,r){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return r&&n(c,r.prototype),c},c.apply(null,arguments)}t.exports=c},xdpm:function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return m}));var n=r("rePB"),o=r("q1tI"),c=r.n(o),a=r("2A+t"),i=r("izhR"),u=r("A2+M"),p=r("9Dj+"),s=r("A4YE"),f=r("H8eV"),l=["32px","16px","8px","4px"].map((function(t){return"rgba(0, 0, 0, 0.15) 0px "+t+" "+t+" 0px"})),b=function(t){var e=t.data.post;return Object(a.c)(p.a,null,Object(a.c)(f.a,{title:e.title,description:e.description?e.description:e.excerpt,image:e.banner?e.banner.childImageSharp.resize.src:void 0,pathname:e.slug}),Object(a.c)(i.d,{variant:"styles.h2"},e.title),Object(a.c)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},Object(a.c)("time",null,e.date),e.tags&&Object(a.c)(c.a.Fragment,null," — ",Object(a.c)(s.a,{tags:e.tags})),e.timeToRead&&" — ",e.timeToRead&&Object(a.c)("span",null,e.timeToRead," min read")),Object(a.c)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:l.join(", ")}}},Object(a.c)(u.MDXRenderer,null,e.body)))};function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(t){var e=t.data,r=e.post;return c.a.createElement(b,{data:O(O({},e),{},{post:r})})};var m="3431092636"}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-5d776fa41548ec67ae9b.js.map