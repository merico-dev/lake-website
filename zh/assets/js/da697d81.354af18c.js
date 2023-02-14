"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3882],{14124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));n(61839);const l={title:"BitBucket(Beta)",description:"BitBucket Plugin\n"},r=void 0,o={unversionedId:"Plugins/bitbucket",id:"version-v0.15/Plugins/bitbucket",title:"BitBucket(Beta)",description:"BitBucket Plugin\n",source:"@site/versioned_docs/version-v0.15/Plugins/bitbucket.md",sourceDirName:"Plugins",slug:"/Plugins/bitbucket",permalink:"/zh/docs/Plugins/bitbucket",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/Plugins/bitbucket.md",tags:[],version:"v0.15",frontMatter:{title:"BitBucket(Beta)",description:"BitBucket Plugin\n"},sidebar:"docsSidebar",previous:{title:"Plugins",permalink:"/zh/docs/Plugins"},next:{title:"Customize",permalink:"/zh/docs/Plugins/customize"}},s={},u=[{value:"Summary",id:"summary",level:2},{value:"Entities",id:"entities",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects various entities from Bitbucket, including pull requests, issues, comments, pipelines, git commits, and etc."),(0,a.kt)("p",null,"As of v0.14.2, ",(0,a.kt)("inlineCode",{parentName:"p"},"bitbucket")," plugin can only be invoked through DevLake API. Its support in Config-UI is WIP."),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"BitBucket entities")," collected by this plugin."),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Metrics that can be calculated based on the data collected from bitbucket:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/CommitCount"},"Commit Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/CommitAuthorCount"},"Commit Author Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/AddedLinesOfCode"},"Added Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/DeletedLinesOfCode"},"Deleted Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRCount"},"PR Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRTimeToMerge"},"PR Time To Merge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRMergeRate"},"PR Merge Rate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRReviewDepth"},"PR Review Depth")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/PRSize"},"PR Size")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/BuildCount"},"Build Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/BuildDuration"},"Build Duration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/Metrics/BuildSuccessRate"},"Build Success Rate"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuring Bitbucket via ",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/UserManuals/ConfigUI/BitBucket"},"Config UI"))),(0,a.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Please replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),' in the sample requests with your actual DevLake API endpoint. For how to view DevLake API\'s swagger documentation, please refer to the "Using DevLake API" section of ',(0,a.kt)("a",{parentName:"p",href:"/zh/docs/DeveloperManuals/DeveloperSetup"},"Developer Setup"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a Bitbucket data connection: ",(0,a.kt)("inlineCode",{parentName:"li"},"POST /plugins/bitbucket/connections"),". Please see a sample request below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/plugins/bitbucket/connections\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "endpoint": "https://api.bitbucket.org/2.0/",\n    "username": "<your username>",\n    "password": "<your app password>",\n    "name": "Bitbucket Cloud"\n}\'\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a blueprint to collect data from Bitbucket: ",(0,a.kt)("inlineCode",{parentName:"li"},"POST /blueprints"),". Please see a sample request below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/blueprints\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "enable": true,\n    "mode": "NORMAL",\n    "name": "My Bitbucket Blueprint",\n    "cronConfig": "<cron string of your choice>",\n    "isManual": false,\n    "plan": [[]],\n    "settings": {\n        "connections": [\n            {\n                "plugin": "bitbucket",\n                "connectionId": 1,\n                "scope": [\n                    {\n                        "entities": [\n                            "CODE",\n                            "TICKET",\n                            "CODEREVIEW",\n                            "CROSS"\n                        ],\n                        "options": {\n                            "owner": "<owner of your repo>",\n                            "repo": "<your repo name>"\n                        }\n                    }\n                ]\n            }\n        ],\n        "version": "1.0.0"\n    }\n}\'\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"[Optional]"," Trigger the blueprint manually: ",(0,a.kt)("inlineCode",{parentName:"li"},"POST /blueprints/{blueprintId}/trigger"),". Run this step if you want to trigger the newly created blueprint right away. See an example request below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/blueprints/<blueprintId>/trigger' \\\n--header 'Content-Type: application/json'\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/DeveloperManuals/DeveloperSetup#references"},"references"))))}p.isMDXComponent=!0}}]);