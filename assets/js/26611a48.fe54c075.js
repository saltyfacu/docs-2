(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{122:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,d=u["".concat(c,".").concat(f)]||u[f]||b[f]||o;return r?a.a.createElement(d,l(l({ref:t},s),{},{components:r})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(122)),c={title:"mev-explore"},l={unversionedId:"flashbots-data/mev-explore",id:"flashbots-data/mev-explore",isDocsHomePage:!1,title:"mev-explore",description:"MEV-Explore v0 is a live dashboard of MEV activity on the Ethereum network and MEV transactions explorer.",source:"@site/docs/flashbots-data/mev-explore.md",slug:"/flashbots-data/mev-explore",permalink:"/flashbots-data/mev-explore",version:"current",sidebar:"docs",previous:{title:"mev-blocks API",permalink:"/flashbots-data/blockapi"},next:{title:"flashbots dashboard",permalink:"/flashbots-data/dashboard"}},i=[],s={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MEV-Explore v0 is a live dashboard of MEV activity on the Ethereum network and MEV transactions explorer."),Object(o.b)("p",null,"You can access the dashboard here: ",Object(o.b)("a",{parentName:"p",href:"https://explore.flashbots.net"},"https://explore.flashbots.net")," and documentation about the metrics we are displaying here: ",Object(o.b)("a",{parentName:"p",href:"https://explore.flashbots.net/data-metrics"},"https://explore.flashbots.net/data-metrics"),"."),Object(o.b)("p",null,"Extra resources:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Explore v0 launch blogpost: ",Object(o.b)("a",{parentName:"li",href:"https://medium.com/flashbots/quantifying-mev-introducing-mev-explore-v0-5ccbee0f6d02"},"Quantifying MEV: Introducing MEV-Explore v0"))))}p.isMDXComponent=!0}}]);