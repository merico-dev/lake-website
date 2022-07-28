"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8306],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,v=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Notifications",description:"Notifications\n",sidebar_position:4},u=void 0,l={unversionedId:"DeveloperManuals/Notifications",id:"version-v0.12/DeveloperManuals/Notifications",title:"Notifications",description:"Notifications\n",source:"@site/versioned_docs/version-v0.12/DeveloperManuals/Notifications.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/Notifications",permalink:"/zh/docs/v0.12/DeveloperManuals/Notifications",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.12/DeveloperManuals/Notifications.md",tags:[],version:"v0.12",sidebarPosition:4,frontMatter:{title:"Notifications",description:"Notifications\n",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"DB Migration",permalink:"/zh/docs/v0.12/DeveloperManuals/DBMigration"},next:{title:"Dal",permalink:"/zh/docs/v0.12/DeveloperManuals/Dal"}},s={},p=[{value:"Request",id:"request",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Signature",id:"signature",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("p",null,"Example request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'POST /lake/notify?nouce=3-FDXxIootApWxEVtz&sign=424c2f6159bd9e9828924a53f9911059433dc14328a031e91f9802f062b495d5\n\n{"TaskID":39,"PluginName":"jenkins","CreatedAt":"2021-09-30T15:28:00.389+08:00","UpdatedAt":"2021-09-30T15:28:00.785+08:00"}\n')),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"If you want to use the notification feature, you should add two configuration key to ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# .env\n# notification request url, e.g.: http://example.com/lake/notify\nNOTIFICATION_ENDPOINT=\n# secret is used to calculate signature\nNOTIFICATION_SECRET=\n")),(0,i.kt)("h2",{id:"signature"},"Signature"),(0,i.kt)("p",null,"You should check the signature before accepting the notification request. We use sha256 algorithm to calculate the checksum."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// calculate checksum\nsum := sha256.Sum256([]byte(requestBody + NOTIFICATION_SECRET + nouce))\nreturn hex.EncodeToString(sum[:])\n")))}d.isMDXComponent=!0}}]);