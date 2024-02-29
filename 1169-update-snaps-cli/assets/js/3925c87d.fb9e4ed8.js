"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8756],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=t(87462),r=(t(67294),t(3905)),o=t(65488),i=t(85162);const s={description:"Learn about the Snap project files.",sidebar_position:2},l="Snaps files",u={unversionedId:"learn/about-snaps/files",id:"learn/about-snaps/files",title:"Snaps files",description:"Learn about the Snap project files.",source:"@site/snaps/learn/about-snaps/files.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/files",permalink:"/1169-update-snaps-cli/snaps/learn/about-snaps/files",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/files.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about the Snap project files.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Snaps APIs",permalink:"/1169-update-snaps-cli/snaps/learn/about-snaps/apis"},next:{title:"Snaps execution environment",permalink:"/1169-update-snaps-cli/snaps/learn/about-snaps/execution-environment"}},p={},c=[{value:"Manifest file",id:"manifest-file",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Bundle file",id:"bundle-file",level:2}],m={toc:c},d="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-files"},"Snaps files"),(0,r.kt)("p",null,"If you look at the directory structure of the Snaps monorepo project generated in the\n",(0,r.kt)("a",{parentName:"p",href:"/1169-update-snaps-cli/snaps/get-started/quickstart"},"Snaps quickstart"),", it looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"your-snap-name/\n\u251c\u2500 packages/\n\u2502  \u251c\u2500 site/\n|  |  |- src/\n|  |  |  |- App.tsx\n|  |  \u251c\u2500 package.json\n|  |  |- ...(react app content)\n|  |\n\u2502  \u251c\u2500 snap/\n|  |  \u251c\u2500 src/\n|  |  |  |- index.ts\n|  |  \u251c\u2500 snap.manifest.json\n|  |  \u251c\u2500 package.json\n|  |  |- ... (Snap content)\n\u251c\u2500 package.json\n\u251c\u2500 ... (other stuff)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"snap")," folder contains the Snap implementation, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"site")," folder contains the Snap\ncompanion dapp implementation."),(0,r.kt)("p",null,"This page examines the following Snap project files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#manifest-file"},"The manifest file")," tells MetaMask important information about the Snap."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuration-file"},"The configuration file")," specifies configuration options for the Snap."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#bundle-file"},"The bundle file")," is the output file of the published Snap.")),(0,r.kt)("h2",{id:"manifest-file"},"Manifest file"),(0,r.kt)("p",null,"To get MetaMask to execute your Snap, you must have a valid manifest file named ",(0,r.kt)("inlineCode",{parentName:"p"},"snap.manifest.json"),",\nlocated in your package root directory.\nThe manifest file of ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World")," would look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1.0.0",\n  "proposedName": "Hello World",\n  "description": "A Snap that says hello!",\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/Hello/hello-snap.git"\n  },\n  "source": {\n    "shasum": "w3FltkDjKQZiPwM+AThnmypt0OFF7hj4ycg/kxxv+nU=",\n    "location": {\n      "npm": {\n        "filePath": "dist/bundle.js",\n        "iconPath": "images/icon.svg",\n        "packageName": "hello-snap",\n        "registry": "https://registry.npmjs.org/"\n      }\n    }\n  },\n  "initialPermissions": {},\n  "manifestVersion": "0.1"\n}\n')),(0,r.kt)("p",null,"The manifest tells MetaMask important information about your Snap, such as where it's published\n(using ",(0,r.kt)("inlineCode",{parentName:"p"},"source.location"),"), how to verify the integrity of the Snap source code (by attempting to\nreproduce the ",(0,r.kt)("inlineCode",{parentName:"p"},"source.shasum")," value), and what\n",(0,r.kt)("a",{parentName:"p",href:"/1169-update-snaps-cli/snaps/how-to/request-permissions"},"permissions the Snap requests")," (using ",(0,r.kt)("inlineCode",{parentName:"p"},"initialPermissions"),")."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Currently, Snaps can only be\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry"},"published to the official npm registry"),",\nand the manifest must also match the corresponding fields of the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file.\nIn the future, developers will be able to distribute Snaps in different ways, and the manifest will\nexpand to support different publishing solutions."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/SIPs/blob/main/SIPS/sip-9.md"},"Snaps publishing specification"),"\ndetails the requirements of both ",(0,r.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," and its relationship to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,r.kt)("p",null,"You might need to modify some manifest fields manually.\nFor example, if you change the location of the icon SVG file, you must update\n",(0,r.kt)("inlineCode",{parentName:"p"},"source.location.npm.iconPath")," to match.\nYou can also use the ",(0,r.kt)("a",{parentName:"p",href:"/1169-update-snaps-cli/snaps/reference/cli/subcommands"},"Snaps CLI")," to update some fields for you.\nFor example, running ",(0,r.kt)("a",{parentName:"p",href:"/1169-update-snaps-cli/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn mm-snap build"))," or\n",(0,r.kt)("a",{parentName:"p",href:"/1169-update-snaps-cli/snaps/reference/cli/subcommands#m-manifest"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix"))," updates ",(0,r.kt)("inlineCode",{parentName:"p"},"source.shasum"),"."),(0,r.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,r.kt)("p",null,"The Snap configuration file, ",(0,r.kt)("inlineCode",{parentName:"p"},"snap.config.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"snap.config.ts"),", should be placed in the project\nroot directory.\nYou can override the default values of the\n",(0,r.kt)("a",{parentName:"p",href:"/1169-update-snaps-cli/snaps/reference/cli/options"},"Snaps configuration options")," by specifying them in the\nconfiguration file.\nFor example:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n    bundler: "webpack",\n    input: "src/index.js",\n    output: {\n        path: "dist",\n    },\n    server: {\n        port: 9000,\n    },\n};\n'))),(0,r.kt)(i.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { SnapConfig } from "@metamask/snaps-cli";\n\nconst config: SnapConfig = {\n    bundler: "webpack",\n    input: "src/index.js",\n    output: {\n        path: "dist",\n    },\n    server: {\n        port: 9000,\n    },\n};\n\nexport default config;\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You should not publish the configuration file to npm, since it's only used for development and\nbuilding.\nHowever, you can commit the file to GitHub to share the configuration with your team, since it\nshouldn't contain any secrets.")),(0,r.kt)("h2",{id:"bundle-file"},"Bundle file"),(0,r.kt)("p",null,"Because of the way Snaps are executed, they must be published as a single ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," file containing the\nentire source code and all dependencies.\nMoreover, the ",(0,r.kt)("a",{parentName:"p",href:"/1169-update-snaps-cli/snaps/learn/about-snaps/execution-environment"},"Snaps execution environment")," has no DOM, no Node.js\nAPIs, and no filesystem access, so anything that relies on the DOM doesn't work, and any Node\nbuilt-ins must be bundled along with the Snap."),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," bundles your Snap for you."),(0,r.kt)("p",null,"You can also run ",(0,r.kt)("a",{parentName:"p",href:"/1169-update-snaps-cli/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn mm-snap build"))," to bundle your\nSnap using ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",(0,r.kt)("a",{parentName:"p",href:"https://browserify.org"},"Browserify"),".\nThis command finds all dependencies using your specified main entry point and outputs a bundle\nfile to your specified output path."))}f.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),r=t(67294),o=t(86010),i=t(12466),s=t(70989),l=t(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=p[t].value;a!==s&&(m(n),l(a))},f=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:f,onClick:d},i,{className:(0,o.Z)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":s===n})}),t??n)})))}function c(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function m(e){const n=(0,s.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",u.tabList)},r.createElement(p,(0,a.Z)({},e,n)),r.createElement(c,(0,a.Z)({},e,n)))}function d(e){const n=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},70989:(e,n,t)=>{t.d(n,{Y:()=>m});var a=t(67294),r=t(16550),o=t(91980),i=t(67392),s=t(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??l(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function c(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=u(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[m,d]=c({queryString:t,groupId:r}),[f,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,s.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=m??f;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}}}]);