"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[7424],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||r;return n?o.createElement(d,i(i({ref:e},u),{},{components:n})):o.createElement(d,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2987:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"quick start"},l=void 0,c={unversionedId:"flashbots-protect/rpc/quick-start",id:"flashbots-protect/rpc/quick-start",isDocsHomePage:!1,title:"quick start",description:"Please note that the Flashbots Protect RPC is currently in public beta. Your transactions may occasionally time out and not be mined!",source:"@site/docs/flashbots-protect/rpc/quick-start.md",sourceDirName:"flashbots-protect/rpc",slug:"/flashbots-protect/rpc/quick-start",permalink:"/flashbots-protect/rpc/quick-start",tags:[],version:"current",frontMatter:{title:"quick start"},sidebar:"docs",previous:{title:"uncle bandit risk",permalink:"/flashbots-protect/api/uncle-bandits"},next:{title:"community tools",permalink:"/community-tools"}},u=[{value:"Key considerations",id:"key-considerations",children:[]},{value:"Fixing stuck transactions",id:"fixing-stuck-transactions",children:[]},{value:"How to use the Flashbots Protect RPC Endpoint in MetaMask",id:"how-to-use-the-flashbots-protect-rpc-endpoint-in-metamask",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],p={toc:u};function h(t){var e=t.components,s=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note that the Flashbots Protect RPC is currently in public beta. Your transactions may occasionally time out and not be mined!")),(0,r.kt)("p",null,"The Flashbots Protect RPC allows regular users to easily submit their transactions to the Flashbots Auction by using a custom RPC endpoint in their wallet. Everything should be the same for users, except transactions are sent to Flashbots, and then directly to miners, instead of the public mempool."),(0,r.kt)("p",null,"There are a few key benefits to using the Flashbots RPC endpoint:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Frontrunning protection:")," your transaction will not be seen by hungry sandwich bots in the public mempool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No failed transactions:")," your transaction will only be mined if it doesn't include any reverts, so you don't pay for failed transactions. Note: your transaction could be uncled, emitted to the mempool, and then included on-chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Priority in blocks:")," transactions sent via Flashbots are mined at the top of blocks, giving them priority.")),(0,r.kt)("h2",{id:"key-considerations"},"Key considerations"),(0,r.kt)("p",null,"Before you get started here are a few things to be mindful of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use a high gas price!")," Getting included in a block through Flashbots is harder than getting included in a block normally because you\u2019re competing with MEV bots for priority blockspace in an auction. To maximize your chance of getting included use a high gas price."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Your transactions will not display on Etherscan unless and until they are mined.")," This is because Etherscan will not be able to see your transaction in the public mempool, and as such doesn't know that it exists. We are working on ways for users to query the status of their transactions."),(0,r.kt)("li",{parentName:"ul"},"We will try to resubmit your transaction for 25 blocks after which point it is considered \u201cexpired\u201d and will be dropped."),(0,r.kt)("li",{parentName:"ul"},"Transactions under 42,000 gas, such as simple ether transfers, are rejected by the Flashbots relay. As a result, we will forward these to the public mempool instead."),(0,r.kt)("li",{parentName:"ul"},"Transactions that perform simple actions - such as token approvals or transfers - will be sent to the public mempool as these do not need frontrunning protection."),(0,r.kt)("li",{parentName:"ul"},"There is a risk that your transactions are included in uncled blocks and then emitted to the public mempool. Please read ",(0,r.kt)("a",{parentName:"li",href:"/flashbots-protect/api/uncle-bandits"},"here")," to learn more about uncle bandits and how to mitigate this risk."),(0,r.kt)("li",{parentName:"ul"},"Your transactions can be emitted to the public mempool if you switch RPC endpoints from the Flashbots Protect RPC to another RPC while your transactions are pending.")),(0,r.kt)("h2",{id:"fixing-stuck-transactions"},"Fixing stuck transactions"),(0,r.kt)("p",null,'Follow the steps below to remove MetaMask transactions that are stuck in a "pending" state. Transactions may be stuck if they are in a "pending" state for more than 20 minutes.'),(0,r.kt)("p",null,"To resolve this, you need to reset your Metamask account, which will cause it to update the nonce and transaction history from the network. Don't worry, your funds and keys are safe during this process."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the account icon on the top-right corner of MetaMask."),(0,r.kt)("li",{parentName:"ol"},'Click "Settings".'),(0,r.kt)("li",{parentName:"ol"},'Click "Advanced".'),(0,r.kt)("li",{parentName:"ol"},"Scroll down and click Reset Account.")),(0,r.kt)("h2",{id:"how-to-use-the-flashbots-protect-rpc-endpoint-in-metamask"},"How to use the Flashbots Protect RPC Endpoint in MetaMask"),(0,r.kt)("p",null,"To add the Flashbots endpoint follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter your MetaMask and click on your RPC endpoint at the top of your MetaMask. By default it says \u201cEthereum mainnet.\u201d"),(0,r.kt)("li",{parentName:"ol"},"Click \u201cCustom RPC\u201d"),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"https://rpc.flashbots.net")," with a chainID of ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," and currency of ",(0,r.kt)("inlineCode",{parentName:"li"},"ETH"),"."),(0,r.kt)("li",{parentName:"ol"},"Scroll to the bottom and click \u201cSave\u201d")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"first metamask onboarding image",src:n(337).Z}),"\n",(0,r.kt)("img",{alt:"second metamask onboarding image",src:n(828).Z})),(0,r.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.kt)("p",null,"Thank you to the ",(0,r.kt)("a",{parentName:"p",href:"https://mistx.io/"},"mistX"),", ",(0,r.kt)("a",{parentName:"p",href:"https://nethermind.io/"},"Nethermind"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://miningdao.io/"},"MiningDAO")," teams for their contributions to Flashbots Protect RPC."))}h.isMDXComponent=!0},337:function(t,e,n){e.Z=n.p+"assets/images/flashbotsRPC-metamask1-1cb712d49738f87c6a161b54ce7b63e9.png"},828:function(t,e,n){e.Z=n.p+"assets/images/flashbotsRPC-metamask2-8ffcd75cb0c2e27ab693739d0861b919.png"}}]);