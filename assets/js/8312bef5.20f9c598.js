(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{122:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,h=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(h,i(i({ref:t},l),{},{components:r})):o.a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(122)),s={title:"ethers.js provider"},i={unversionedId:"flashbots-auction/searchers/libraries/ethers-js-provider",id:"flashbots-auction/searchers/libraries/ethers-js-provider",isDocsHomePage:!1,title:"ethers.js provider",description:"ethers-provider-flashbots-bundle is a repository that contains the FlashbotsBundleProvider ethers.js provider to provide high-level access to the eth_sendBundle rpc endpoint on mev-relay.",source:"@site/docs/flashbots-auction/searchers/libraries/ethers-js-provider.md",slug:"/flashbots-auction/searchers/libraries/ethers-js-provider",permalink:"/flashbots-auction/searchers/libraries/ethers-js-provider",version:"current",sidebar:"docs",previous:{title:"searcher sponsored tx",permalink:"/flashbots-auction/searchers/example-searchers/searcher-sponsored-tx"},next:{title:"web3.py provider",permalink:"/flashbots-auction/searchers/libraries/web3py-provider"}},c=[],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ethers-provider-flashbots-bundle is a repository that contains the ",Object(a.b)("inlineCode",{parentName:"p"},"FlashbotsBundleProvider")," ethers.js provider to provide high-level access to the ",Object(a.b)("inlineCode",{parentName:"p"},"eth_sendBundle")," rpc endpoint on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/flashbots/mev-relay-js"},"mev-relay"),"."),Object(a.b)("p",null,"Flashbots-enabled relays and miners expose two new jsonrpc endpoint: ",Object(a.b)("inlineCode",{parentName:"p"},"eth_sendBundle")," and ",Object(a.b)("inlineCode",{parentName:"p"},"eth_callBundle"),". Since these are brand-new, non-standard endpoints, ethers.js and other libraries do not natively support these requests (like ",Object(a.b)("inlineCode",{parentName:"p"},"getTransactionCount"),"). In order to interact with these endpoints, you will also need access to another full-featured (non-Flashbots) endpoint for nonce-calculation, gas estimation, and transaction status."),Object(a.b)("p",null,"This library is not a fully functional ethers.js implementation, just a simple provider class, designed to interact with your existing ethers.js v5 module."),Object(a.b)("p",null,"Access the ethers-provider-flashbots-bundle repository ",Object(a.b)("a",{parentName:"p",href:"https://github.com/flashbots/ethers-provider-flashbots-bundle"},"here"),"."))}p.isMDXComponent=!0}}]);