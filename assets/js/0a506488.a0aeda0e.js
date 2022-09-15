"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[6515],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return f}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),f=n,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||s;return o?r.createElement(b,a(a({ref:t},p),{},{components:o})):r.createElement(b,a({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<s;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2143:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=o(7462),n=o(3366),s=(o(7294),o(3905)),a=["components"],l={},i=void 0,c={unversionedId:"flashbots-mev-boost/block proposers",id:"flashbots-mev-boost/block proposers",isDocsHomePage:!1,title:"block proposers",description:"Block Proposers",source:"@site/docs/flashbots-mev-boost/block proposers.md",sourceDirName:"flashbots-mev-boost",slug:"/flashbots-mev-boost/block proposers",permalink:"/flashbots-mev-boost/block proposers",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"block builders",permalink:"/flashbots-mev-boost/block builders"},next:{title:"relays",permalink:"/flashbots-mev-boost/relays"}},p=[{value:"Block Proposers",id:"block-proposers",children:[{value:"Block Proposer Fundamentals",id:"block-proposer-fundamentals",children:[]}]}],u={toc:p};function d(e){var t=e.components,o=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"block-proposers"},"Block Proposers"),(0,s.kt)("h3",{id:"block-proposer-fundamentals"},"Block Proposer Fundamentals"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"What is a Block Proposer?")),(0,s.kt)("p",null,"A block proposer is a validator that has been pseudorandomly selected to build a block for a given slot in an epoch (there are 32 slots per epoch). Proposers are selected from the validator set using the standard RANDAO mechanism. "),(0,s.kt)("p",null,"Validators not pseudo-randomly assigned to propose blocks are assigned to attest, or vote on block proposals. These assignments are known 2 epochs in advance for attesters and 1 for proposers. The block in each slot will have a single validator serving as the proposer and many validators serving as the attesters to all information in that block. Attesters get rewarded for accurately voting on current values of 3 aspects of the beacon chain: the head of the chain (LMD Ghost), the justified checkpoint and the finalized checkpoint (Casper FFG). "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The Role of Block Proposers")),(0,s.kt)("p",null,"Without MEV-Boost, the original role of block proposers consisted of two jobs: "),(0,s.kt)("p",null,"(1)\xa0",(0,s.kt)("strong",{parentName:"p"},"building")," the best block from all available transactions, and "),(0,s.kt)("p",null,"(2)\xa0",(0,s.kt)("strong",{parentName:"p"},"proposing")," this block to the PoS network."),(0,s.kt)("p",null,"With MEV-Boost, the role of validator is simplified to ",(0,s.kt)("strong",{parentName:"p"},"proposal")," duties only, and consists of the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Receive a block from their local execution client, i.e. their local block builder, and sign / \u2018propose\u2019 it, or"),(0,s.kt)("li",{parentName:"ul"},"Receive an execution payload header from one or more relays and blindly sign a block without seeing the underlying execution payload (i.e. the blinded TXs escrowed by the relay).")),(0,s.kt)("p",null,"The Ethereum ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs"},"consensus-specs")," have well defined expectations of honest validators, the most recent standard is the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/bellatrix/validator.md#bellatrix----honest-validator"},"Bellatrix -- Honest Validator")," specification."))}d.isMDXComponent=!0}}]);