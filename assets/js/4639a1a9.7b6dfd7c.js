"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3299],{49799:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));t(61839);const i={title:"Configuring Webhook",sidebar_position:7,description:"Config UI instruction for Webhook"},s=void 0,r={unversionedId:"UserManuals/ConfigUI/webhook",id:"UserManuals/ConfigUI/webhook",title:"Configuring Webhook",description:"Config UI instruction for Webhook",source:"@site/docs/UserManuals/ConfigUI/webhook.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/webhook",permalink:"/docs/UserManuals/ConfigUI/webhook",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/ConfigUI/webhook.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Configuring Webhook",sidebar_position:7,description:"Config UI instruction for Webhook"},sidebar:"docsSidebar",previous:{title:"Using Advanced Mode",permalink:"/docs/UserManuals/ConfigUI/AdvancedMode"},next:{title:"Grafana User Guide",permalink:"/docs/UserManuals/Dashboards/GrafanaUserGuide"}},l={},c=[{value:"Add a new webhook",id:"add-a-new-webhook",level:3},{value:"Webhook name",id:"webhook-name",level:4},{value:"Use Webhooks",id:"use-webhooks",level:3},{value:"Webhook Accessibility",id:"webhook-accessibility",level:3}],h={toc:c};function u(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit config-ui via the Domain Name or IP Address and Port, "),(0,a.kt)("h3",{id:"add-a-new-webhook"},"Add a new webhook"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/191309840-460fbc9c-15a1-4b12-a510-9ed5ccd8f2b0.png",alt:"image"})),(0,a.kt)("h4",{id:"webhook-name"},"Webhook name"),(0,a.kt)("p",null,"We recommand that you give your webhook connection a unique name so that you can identify and manage where you have used it later."),(0,a.kt)("h3",{id:"use-webhooks"},"Use Webhooks"),(0,a.kt)("p",null,'After clicking on "Generate POST URL", you will find four webhook URLs. Copy the ones that suits your usage into your CI or issue tracking systems. You can always come back to the webhook page to copy the URLs later on.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/191400110-327c153f-b236-47e3-88cc-85bf8fcae310.png",alt:"image"})),(0,a.kt)("p",null,"For more usage: ",(0,a.kt)("a",{parentName:"p",href:"/docs/Plugins/webhook"},"plugins/webhook"),"."),(0,a.kt)("h3",{id:"webhook-accessibility"},"Webhook Accessibility"),(0,a.kt)("p",null,"In real-world scenarios, most likely, you would like to call the webhook API from another machine inside some CI/CD scripts. The CI/CD Machine may be located in the same Internal Network or provided by a Cloud Service. "),(0,a.kt)("p",null,"In any case, the only rule is to make sure the CI/CD Machine could reach the config-ui instance."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access the config-ui via IP Address or Domain Name that is accessible from the CI/CD Machine, since the Webhook FQDN is generated based on the Browser URL. In other words, ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," might not work."),(0,a.kt)("li",{parentName:"ul"},"If you set up Apache DevLake as ",(0,a.kt)("a",{parentName:"li",href:"../Authentication#internal-deployment-recommended"},"Internal Deployment")," and the CI/CD Machine belongs to a Cloud Service Provider, you may have to switch to ",(0,a.kt)("inlineCode",{parentName:"li"},"Internet Deployment")," or employ reverse-proxy software like ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/fatedier/frp"},"fatedier/frp"),".")))}u.isMDXComponent=!0}}]);