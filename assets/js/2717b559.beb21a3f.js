"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4183],{64119:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(87462),n=(t(67294),t(3905));t(61839);const o={title:"Local Setup",description:"The steps to install DevLake locally\n",sidebar_position:1},l=void 0,r={unversionedId:"QuickStart/LocalSetup",id:"version-v0.11/QuickStart/LocalSetup",title:"Local Setup",description:"The steps to install DevLake locally\n",source:"@site/versioned_docs/version-v0.11/QuickStart/LocalSetup.md",sourceDirName:"QuickStart",slug:"/QuickStart/LocalSetup",permalink:"/docs/v0.11/QuickStart/LocalSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/QuickStart/LocalSetup.md",tags:[],version:"v0.11",sidebarPosition:1,frontMatter:{title:"Local Setup",description:"The steps to install DevLake locally\n",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Roadmap",permalink:"/docs/v0.11/Overview/Roadmap"},next:{title:"Kubernetes Setup",permalink:"/docs/v0.11/QuickStart/KubernetesSetup"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Launch DevLake",id:"launch-devlake",level:2},{value:"Configure data connections and collect data",id:"configure-data-connections-and-collect-data",level:2},{value:"Upgrade to a newer version",id:"upgrade-to-a-newer-version",level:2}],p={toc:d};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker v19.03.10+")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose v2.2.3+"))),(0,n.kt)("h2",{id:"launch-devlake"},"Launch DevLake"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Commands written ",(0,n.kt)("inlineCode",{parentName:"li"},"like this")," are to be run in your terminal.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"env.example")," from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/releases/latest"},"latest release page")," into a folder."),(0,n.kt)("li",{parentName:"ol"},"Rename ",(0,n.kt)("inlineCode",{parentName:"li"},"env.example")," to ",(0,n.kt)("inlineCode",{parentName:"li"},".env"),". For Mac/Linux users, please run ",(0,n.kt)("inlineCode",{parentName:"li"},"mv env.example .env")," in the terminal."),(0,n.kt)("li",{parentName:"ol"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to launch DevLake.")),(0,n.kt)("h2",{id:"configure-data-connections-and-collect-data"},"Configure data connections and collect data"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Visit ",(0,n.kt)("inlineCode",{parentName:"li"},"config-ui")," at ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:4000")," in your browser to configure data connections.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Navigate to desired plugins on the Integrations page"),(0,n.kt)("li",{parentName:"ul"},"Please reference the following for more details on how to configure each one:",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v0.11/Plugins/jira"},"Jira")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v0.11/Plugins/github"},"GitHub"),": For users who'd like to collect GitHub data, we recommend reading our ",(0,n.kt)("a",{parentName:"li",href:"/docs/v0.11/UserManuals/GitHubUserGuide"},"GitHub data collection guide")," which covers the following steps in detail."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v0.11/Plugins/gitlab"},"GitLab")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v0.11/Plugins/jenkins"},"Jenkins")))),(0,n.kt)("li",{parentName:"ul"},"Submit the form to update the values by clicking on the ",(0,n.kt)("strong",{parentName:"li"},"Save Connection")," button on each form page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"devlake")," takes a while to fully boot up. if ",(0,n.kt)("inlineCode",{parentName:"li"},"config-ui")," complaining about api being unreachable, please wait a few seconds and try refreshing the page."))),(0,n.kt)("li",{parentName:"ol"},"Create pipelines to trigger data collection in ",(0,n.kt)("inlineCode",{parentName:"li"},"config-ui")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("em",{parentName:"li"},"View Dashboards")," button in the top left when done, or visit ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3002")," (username: ",(0,n.kt)("inlineCode",{parentName:"li"},"admin"),", password: ",(0,n.kt)("inlineCode",{parentName:"li"},"admin"),").",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We use ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," as a visualization tool to build charts for the ",(0,n.kt)("a",{parentName:"li",href:"/docs/v0.11/DataModels/DataSupport"},"data")," stored in our database."),(0,n.kt)("li",{parentName:"ul"},"Using SQL queries, we can add panels to build, save, and edit customized dashboards."),(0,n.kt)("li",{parentName:"ul"},"All the details on provisioning and customizing a dashboard can be found in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/v0.11/UserManuals/GrafanaUserGuide"},"Grafana Doc"),"."))),(0,n.kt)("li",{parentName:"ol"},"To synchronize data periodically, users can set up recurring pipelines with DevLake's ",(0,n.kt)("a",{parentName:"li",href:"/docs/v0.11/UserManuals/RecurringPipelines"},"pipeline blueprint")," for details.")),(0,n.kt)("h2",{id:"upgrade-to-a-newer-version"},"Upgrade to a newer version"),(0,n.kt)("p",null,"Support for database schema migration was introduced to DevLake in v0.10.0. From v0.10.0 onwards, users can upgrade their instance smoothly to a newer version. However, versions prior to v0.10.0 do not support upgrading to a newer version with a different database schema. We recommend users to deploy a new instance if needed."),(0,n.kt)("br",null))}u.isMDXComponent=!0}}]);