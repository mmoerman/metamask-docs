"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7385],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,c(c({ref:t},l),{},{components:r})):n.createElement(k,c({ref:t},l))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16420:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Integrate your JavaScript dapp with MetaMask.",sidebar_position:1},c="JavaScript quickstart",i={unversionedId:"quickstart/javascript",id:"quickstart/javascript",title:"JavaScript quickstart",description:"Integrate your JavaScript dapp with MetaMask.",source:"@site/wallet/quickstart/javascript.md",sourceDirName:"quickstart",slug:"/quickstart/javascript",permalink:"/1196-deprioritize-sdk/wallet/quickstart/javascript",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/quickstart/javascript.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Integrate your JavaScript dapp with MetaMask.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Quickstart",permalink:"/1196-deprioritize-sdk/wallet/quickstart"},next:{title:"React quickstart",permalink:"/1196-deprioritize-sdk/wallet/quickstart/react"}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript-quickstart"},"JavaScript quickstart"),(0,a.kt)("p",null,"This page provides a code sample to quickly connect to your users' MetaMask accounts from a\nJavaScript dapp."),(0,a.kt)("p",null,"Connect to the MetaMask browser extension directly using the ",(0,a.kt)("a",{parentName:"p",href:"/1196-deprioritize-sdk/wallet/concepts/wallet-api"},"Wallet API"),".\nYou must ",(0,a.kt)("a",{parentName:"p",href:"/wallet/how-to/detect-wallet"},"detect MetaMask")," in the user's browser, then\n",(0,a.kt)("a",{parentName:"p",href:"/1196-deprioritize-sdk/wallet/how-to/access-accounts"},"access the user's accounts")," by prompting them to connect to MetaMask."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/detect-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," module in\nyour project directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/detect-provider\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following code to your project file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"// Detect the MetaMask Ethereum provider\n\nimport detectEthereumProvider from '@metamask/detect-provider';\n\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n  startApp(provider);\n} else {\n  console.log('Please install MetaMask!');\n}\n\nfunction startApp(provider) {\n  if (provider !== window.ethereum) {\n    console.error('Do you have multiple wallets installed?');\n  }\n}\n\n// Prompt users to connect to MetaMask\n\nconst ethereumButton = document.querySelector('.enableEthereumButton');\nconst showAccount = document.querySelector('.showAccount');\n\nethereumButton.addEventListener('click', () => {\n  getAccount();\n});\n\nasync function getAccount() {\n  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })\n    .catch((err) => {\n      if (err.code === 4001) {\n        console.log('Please connect to MetaMask.');\n      } else {\n        console.error(err);\n      }\n    });\n  const account = accounts[0];\n  showAccount.innerHTML = account;\n}\n")))))}d.isMDXComponent=!0}}]);