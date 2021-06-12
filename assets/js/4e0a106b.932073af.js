(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||h[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(122)),i={title:"onboarding"},c={unversionedId:"flashbots-core/miners/quick-start",id:"flashbots-core/miners/quick-start",isDocsHomePage:!1,title:"onboarding",description:"Over 80% of the Ethereum hashrate accepts Flashbots bundles which leads to fairer access to MEV and 0.3 ETH on average on top of every block reward for miners.",source:"@site/docs/flashbots-core/miners/quick-start.md",slug:"/flashbots-core/miners/quick-start",permalink:"/flashbots-core/miners/quick-start",version:"current",sidebar:"docs",previous:{title:"other resources",permalink:"/flashbots-core/other-resources"},next:{title:"how it works?",permalink:"/flashbots-core/miners/how-it-works"}},s=[{value:"Running MEV-Geth",id:"running-mev-geth",children:[{value:"Build and launch MEV-Geth",id:"build-and-launch-mev-geth",children:[]},{value:"Implement specification",id:"implement-specification",children:[]},{value:"Install the MEV-Geth Go Plugin (coming soon)",id:"install-the-mev-geth-go-plugin-coming-soon",children:[]}]},{value:"Feature requests and bug reports",id:"feature-requests-and-bug-reports",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Join Flashbots")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Over 80% of the Ethereum hashrate accepts Flashbots bundles which leads to fairer access to MEV and ",Object(a.b)("a",{parentName:"p",href:"https://dashboard.flashbots.net/"},"0.3 ETH")," on average on top of every block reward for miners."))),Object(a.b)("p",null,"For new mining pools who would like to receive Flashbots bundles, please complete the ",Object(a.b)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSdz29fKXJXJFWXkEu8hZNG-NJUeAbOz0Jvw9mnNLskJHlMUDA/viewform"},"Miner Indication of Interest Form"),"."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"running-mev-geth"},"Running MEV-Geth"),Object(a.b)("p",null,"You can choose one of the following approaches to start using MEV-Geth"),Object(a.b)("h3",{id:"build-and-launch-mev-geth"},"Build and launch MEV-Geth"),Object(a.b)("p",null,"You can find the MEV-Geth repository ",Object(a.b)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth"},"here"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"git clone https://github.com/flashbots/mev-geth\ncd mev-geth\nmake geth\n")),Object(a.b)("h3",{id:"implement-specification"},"Implement specification"),Object(a.b)("p",null,"If the Geth version that you are using contains a lot of custom code, you may want to implement required MEV-Geth changes yourself.\nYou can find the latest specification ",Object(a.b)("a",{parentName:"p",href:"/flashbots-core/miners/mev-geth-spec/v02"},"here")," and the example implementation ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/compare/master...flashbots:master"},"here")),Object(a.b)("h3",{id:"install-the-mev-geth-go-plugin-coming-soon"},"Install the MEV-Geth Go Plugin (coming soon)"),Object(a.b)("p",null,"We are planning to deliver future versions of MEV-Geth in the form of Go plugins for Geth. Get in touch with ",Object(a.b)("a",{parentName:"p",href:"https://discord.com/invite/7hvTycdNcK"},"Flashbots")," if you want to contribute!"),Object(a.b)("h2",{id:"feature-requests-and-bug-reports"},"Feature requests and bug reports"),Object(a.b)("p",null,"If you are a user of MEV-Geth and have suggestions on how to make integration with your current setup easier, or would like to submit a bug report, we encourage you to open an issue in the mev-geth repository with the ",Object(a.b)("inlineCode",{parentName:"p"},"enhancement")," or ",Object(a.b)("inlineCode",{parentName:"p"},"bug")," labels respectively. If you need help getting started, please ask in the dedicated ",Object(a.b)("a",{parentName:"p",href:"https://discord.gg/rcgADN9qFX"},"#\u26cf\ufe0fminers")," channel in our Discord."))}u.isMDXComponent=!0}}]);