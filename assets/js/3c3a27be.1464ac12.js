"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[74937],{29790:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));t(61839);const a={title:"Installation Troubleshooting",sidebar_position:1,description:"Installation Troubleshooting\n"},r=void 0,s={unversionedId:"Troubleshooting/Installation",id:"version-v0.19/Troubleshooting/Installation",title:"Installation Troubleshooting",description:"Installation Troubleshooting\n",source:"@site/versioned_docs/version-v0.19/Troubleshooting/Installation.md",sourceDirName:"Troubleshooting",slug:"/Troubleshooting/Installation",permalink:"/docs/v0.19/Troubleshooting/Installation",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.19/Troubleshooting/Installation.md",tags:[],version:"v0.19",sidebarPosition:1,frontMatter:{title:"Installation Troubleshooting",sidebar_position:1,description:"Installation Troubleshooting\n"},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/v0.19/Troubleshooting"},next:{title:"Configuration and Blueprint Troubleshooting",permalink:"/docs/v0.19/Troubleshooting/Configuration"}},l={},d=[{value:"<code>panic: invalid encKey</code> error",id:"panic-invalid-enckey-error",level:3},{value:"Go Panic in OpenShift Kubernetes",id:"go-panic-in-openshift-kubernetes",level:3},{value:"None of them solve your problem?",id:"none-of-them-solve-your-problem",level:2}],h={toc:d};function c(e){let{components:o,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"panic-invalid-enckey-error"},(0,i.kt)("inlineCode",{parentName:"h3"},"panic: invalid encKey")," error"),(0,i.kt)("p",null,"The cause is the ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," container trying to decrypt data in the database with the wrong key.\nPlease check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.19/GettingStarted/Upgrade"},"GettingStarted/Upgrade")," doc for more detail."),(0,i.kt)("h3",{id:"go-panic-in-openshift-kubernetes"},"Go Panic in OpenShift Kubernetes"),(0,i.kt)("p",null,"One of the known root causes of the phonomenon is the Dynatrace agent being injected into the container.\nExcluding the namespace from the Dynatrace deployments should fix the problem.\nCheck ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues/5612"},"#5612")," if you needed more detail."),(0,i.kt)("h2",{id:"none-of-them-solve-your-problem"},"None of them solve your problem?"),(0,i.kt)("p",null,"Sorry for the inconvenience, please help us improve by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"creating an issue")))}c.isMDXComponent=!0}}]);