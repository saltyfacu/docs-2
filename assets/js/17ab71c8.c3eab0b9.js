(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||s[u]||l;return n?r.a.createElement(m,b(b({ref:t},o),{},{components:n})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(122)),i={title:"v0.1 RPC"},b={unversionedId:"flashbots-auction/miners/mev-geth-spec/v01-rpc",id:"flashbots-auction/miners/mev-geth-spec/v01-rpc",isDocsHomePage:!1,title:"v0.1 RPC",description:"eth_sendBundle",source:"@site/docs/flashbots-auction/miners/mev-geth-spec/v01-rpc.md",slug:"/flashbots-auction/miners/mev-geth-spec/v01-rpc",permalink:"/flashbots-auction/miners/mev-geth-spec/v01-rpc",version:"current",sidebar:"docs",previous:{title:"v0.1",permalink:"/flashbots-auction/miners/mev-geth-spec/v01"},next:{title:"alpha-v0.2",permalink:"/flashbots-auction/releases/alpha-v0.2"}},c=[{value:"eth_sendBundle",id:"eth_sendbundle",children:[{value:"Description",id:"description",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}]},{value:"eth_callBundle",id:"eth_callbundle",children:[{value:"Description",id:"description-1",children:[]},{value:"Returns",id:"returns-1",children:[]},{value:"Example",id:"example-1",children:[]},{value:"<code>Quantity</code>",id:"quantity",children:[]},{value:"<code>Data</code>",id:"data",children:[]},{value:"<code>Block Identifier</code>",id:"block-identifier",children:[]}]}],o={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"eth_sendbundle"},"eth_sendBundle"),Object(l.b)("h3",{id:"description"},"Description"),Object(l.b)("p",null,"Sends a bundle of transactions to the miner. The bundle has to be executed at the beginning of the block (before any other transactions), with bundle transactions executed exactly in the same order as provided in the bundle. During the Flashbots Alpha this is only called by the Flashbots relay."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"transactions"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Array<Data>")),Object(l.b)("td",{parentName:"tr",align:null},"Array of signed transactions (",Object(l.b)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," style, signed and RLP-encoded)"),Object(l.b)("td",{parentName:"tr",align:null},"a no-op in the light mode")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"blockNumber"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Quantity")),Object(l.b)("td",{parentName:"tr",align:null},"Exact block number at which the bundle can be included."),Object(l.b)("td",{parentName:"tr",align:null},"bundle is evicted after the block")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"minTimestamp"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Quantity")),Object(l.b)("td",{parentName:"tr",align:null},"Minimum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"maxTimestamp"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Quantity")),Object(l.b)("td",{parentName:"tr",align:null},"Maximum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable."),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h3",{id:"returns"},"Returns"),Object(l.b)("p",null,"{",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"} - ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if bundle has been accepted by the node, otherwise ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# Request\ncurl -X POST -H \'Content-Type: application/json\' --data \'{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "method": "eth_sendBundle",\n    "params": [\n        [\n            "f9014946843b9aca00830493e094a011e5f4ea471ee4341a135bb1a4af368155d7a280b8e40d5f2659000000000000000000000000fdd45a22dd1d606b3782f2119621e928e32743000000000000000000000000000000000000000000000000000000000077359400000000000000000000000000000000000000000000000",\n            "f86e8204d085012a05f200830c350094daf24c20717f428f00d8448d74d67a77f67ceb8287354a6ba7a18000802ea00e411bcb660dd8d47717df89078d2e8160c08e7f11cb7ad0ee935e7436eceb32a013ee00a21b7fa0a9f9c1224d11261648191875d4633aed6003543ea319f12b62"\n        ],\n        "0x12ab34",\n        "0x0",\n        "0x0"\n    ]\n}\' <url>\n\n# Response\n{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "result": "true"\n}\n')),Object(l.b)("h2",{id:"eth_callbundle"},"eth_callBundle"),Object(l.b)("h3",{id:"description-1"},"Description"),Object(l.b)("p",null,"Simulate a bundle of transactions at the top of a block."),Object(l.b)("p",null,"After retrieving the block specified in the ",Object(l.b)("inlineCode",{parentName:"p"},"blockNrOrHash")," it takes the same ",Object(l.b)("inlineCode",{parentName:"p"},"blockhash"),", ",Object(l.b)("inlineCode",{parentName:"p"},"gasLimit"),", ",Object(l.b)("inlineCode",{parentName:"p"},"difficulty"),", same ",Object(l.b)("inlineCode",{parentName:"p"},"timestamp")," unless the ",Object(l.b)("inlineCode",{parentName:"p"},"blockTimestamp")," property is specified, and increases the block number by ",Object(l.b)("inlineCode",{parentName:"p"},"1"),". ",Object(l.b)("inlineCode",{parentName:"p"},"eth_callBundle")," will timeout after ",Object(l.b)("inlineCode",{parentName:"p"},"5")," seconds."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"encodedTxs"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Array<Data>")),Object(l.b)("td",{parentName:"tr",align:null},"Array of signed transactions (",Object(l.b)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," style, signed and RLP-encoded)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"blockNrOrHash"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Quantity\\|string\\|Block Identifier")),Object(l.b)("td",{parentName:"tr",align:null},'Block number, or one of "latest", "earliest" or "pending", or a block identifier as described in {Block Identifier}')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"blockTimestamp"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Quantity")),Object(l.b)("td",{parentName:"tr",align:null},"Block timestamp to be used in replacement of the timestamp taken from the parent block.")))),Object(l.b)("h3",{id:"returns-1"},"Returns"),Object(l.b)("p",null,"Map<",Object(l.b)("inlineCode",{parentName:"p"},"Data"),', "error|value" : ',Object(l.b)("inlineCode",{parentName:"p"},"Data"),"> - a mapping from transaction hashes to execution results with error or output (value) for each of the transactions"),Object(l.b)("h3",{id:"example-1"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# Request\ncurl -X POST -H \'Content-Type: application/json\' --data \'{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "method": "eth_callBundle",\n    "params": [\n        [\n            "f9014946843b9aca00830493e094a011e5f4ea471ee4341a135bb1a4af368155d7a280b8e40d5f2659000000000000000000000000fdd45a22dd1d606b3782f2119621e928e32743000000000000000000000000000000000000000000000000000000000077359400000000000000000000000000000000000000000000000",\n            "f86e8204d085012a05f200830c350094daf24c20717f428f00d8448d74d67a77f67ceb8287354a6ba7a18000802ea00e411bcb660dd8d47717df89078d2e8160c08e7f11cb7ad0ee935e7436eceb32a013ee00a21b7fa0a9f9c1224d11261648191875d4633aed6003543ea319f12b62"\n        ],\n        "0x12ab34"\n    ]\n}\' <url>\n\n# Response\n{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "result":\n        {\n            "0x22b3806fbef9532db4105475222983404783aacd4d865ea5dab76a84aa1a07eb" : {\n                "value" : "0x0012"\n            },\n            "0x489e3b5493af31d55059f8e296351b267720bc4ba7dc170871c1d789e5541027" : {\n                "value" : "0xabcd"\n            }\n        }\n}\n')),Object(l.b)("hr",null),Object(l.b)("p",null,"Below type description can also be found in ",Object(l.b)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1474"},"EIP-1474")),Object(l.b)("h3",{id:"quantity"},Object(l.b)("inlineCode",{parentName:"h3"},"Quantity")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("inlineCode",{parentName:"li"},"Quantity")," value ",Object(l.b)("strong",{parentName:"li"},"MUST")," be hex-encoded."),Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("inlineCode",{parentName:"li"},"Quantity")," value ",Object(l.b)("strong",{parentName:"li"},"MUST"),' be "0x"-prefixed.'),Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("inlineCode",{parentName:"li"},"Quantity")," value ",Object(l.b)("strong",{parentName:"li"},"MUST")," be expressed using the fewest possible hex digits per byte."),Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("inlineCode",{parentName:"li"},"Quantity")," value ",Object(l.b)("strong",{parentName:"li"},"MUST"),' express zero as "0x0".')),Object(l.b)("h3",{id:"data"},Object(l.b)("inlineCode",{parentName:"h3"},"Data")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A\xa0",Object(l.b)("inlineCode",{parentName:"li"},"Data"),"\xa0value\xa0",Object(l.b)("strong",{parentName:"li"},"MUST"),"\xa0be hex-encoded."),Object(l.b)("li",{parentName:"ul"},"A\xa0",Object(l.b)("inlineCode",{parentName:"li"},"Data"),"\xa0value\xa0",Object(l.b)("strong",{parentName:"li"},"MUST"),"\xa0be \u201c0x\u201d-prefixed."),Object(l.b)("li",{parentName:"ul"},"A\xa0",Object(l.b)("inlineCode",{parentName:"li"},"Data"),"\xa0value\xa0",Object(l.b)("strong",{parentName:"li"},"MUST"),"\xa0be expressed using two hex digits per byte.")),Object(l.b)("h3",{id:"block-identifier"},Object(l.b)("inlineCode",{parentName:"h3"},"Block Identifier")),Object(l.b)("p",null,"Since there is no way to clearly distinguish between a\xa0",Object(l.b)("inlineCode",{parentName:"p"},"Data"),"\xa0parameter and a\xa0",Object(l.b)("inlineCode",{parentName:"p"},"Quantity"),"\xa0parameter,\xa0",Object(l.b)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1898"},"EIP-1898"),"\xa0provides a format to specify a block either using the block hash or block number. The block identifier is a JSON\xa0",Object(l.b)("inlineCode",{parentName:"p"},"object"),"\xa0with the following fields:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Position"),Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"0A"),Object(l.b)("td",{parentName:"tr",align:null},"blockNumber"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Quantity")),Object(l.b)("td",{parentName:"tr",align:null},"The block in the canonical chain with this number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"0B"),Object(l.b)("td",{parentName:"tr",align:null},"blockHash"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Data")),Object(l.b)("td",{parentName:"tr",align:null},"The block uniquely identified by this hash. The\xa0blockNumber\xa0and\xa0blockHash\xa0properties are mutually exclusive; exactly one of them must be set.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"1B"),Object(l.b)("td",{parentName:"tr",align:null},"requireCanonical"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",{parentName:"tr",align:null},"(optional) Whether or not to throw an error if the block is not in the canonical chain as described below. Only allowed in conjunction with the\xa0blockHash\xa0tag. Defaults to\xa0false.")))),Object(l.b)("p",null,"If the block is not found, the callee SHOULD raise a JSON-RPC error (the recommended error code is\xa0",Object(l.b)("inlineCode",{parentName:"p"},"-32001: Resource not found"),". If the tag is\xa0",Object(l.b)("inlineCode",{parentName:"p"},"blockHash"),"\xa0and\xa0",Object(l.b)("inlineCode",{parentName:"p"},"requireCanonical"),"\xa0is\xa0",Object(l.b)("inlineCode",{parentName:"p"},"true"),", the callee SHOULD additionally raise a JSON-RPC error if the block is not in the canonical chain (the recommended error code is\xa0",Object(l.b)("inlineCode",{parentName:"p"},"-32000: Invalid input"),"\xa0and in any case should be different than the error code for the block not found case so that the caller can distinguish the cases). The block-not-found check SHOULD take precedence over the block-is-canonical check, so that if the block is not found the callee raises block-not-found rather than block-not-canonical."))}d.isMDXComponent=!0}}]);