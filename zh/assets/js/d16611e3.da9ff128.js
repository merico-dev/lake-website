"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3909],{20958:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>o,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var l=t(87462),i=(t(67294),t(3905));t(61839);const n={slug:"apache-devlake-codebase-walkthrough",title:"Apache DevLake\u4ee3\u7801\u5e93\u5bfc\u89c8",authors:"abeizn",tags:["devlake","codebase"]},r="Apache DevLake \u4ee3\u7801\u5e93\u5bfc\u89c8",s={permalink:"/zh/blog/apache-devlake-codebase-walkthrough",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-06-06-Apache-Devlake\u4ee3\u7801\u5e93\u5bfc\u89c8/index.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022-06-06-Apache-Devlake\u4ee3\u7801\u5e93\u5bfc\u89c8/index.md",title:"Apache DevLake\u4ee3\u7801\u5e93\u5bfc\u89c8",description:"Apache DevLake\u662f\u4ec0\u4e48\uff1f",date:"2022-06-06T00:00:00.000Z",formattedDate:"2022\u5e746\u67086\u65e5",tags:[{label:"devlake",permalink:"/zh/blog/tags/devlake"},{label:"codebase",permalink:"/zh/blog/tags/codebase"}],readingTime:8.346666666666666,hasTruncateMarker:!1,authors:[{name:"\u5b89\u81ea\u5bbd",title:"Apache DevLake Committer",url:"https://github.com/abeizn",imageURL:"https://github.com/abeizn.png",key:"abeizn"}],frontMatter:{slug:"apache-devlake-codebase-walkthrough",title:"Apache DevLake\u4ee3\u7801\u5e93\u5bfc\u89c8",authors:"abeizn",tags:["devlake","codebase"]},prevItem:{title:"How DevLake is Up and Running",permalink:"/zh/blog/how-DevLake-is-up-and-running"},nextItem:{title:"\u5982\u4f55\u8d21\u732eissue",permalink:"/zh/blog/2022/05/20/\u5982\u4f55\u8d21\u732eissues"}},p={authorsImageUrls:[void 0]},m=[{value:"Apache DevLake\u662f\u4ec0\u4e48\uff1f",id:"apache-devlake\u662f\u4ec0\u4e48",level:3},{value:"Apache DevLake\u67b6\u6784\u6982\u8ff0",id:"apache-devlake\u67b6\u6784\u6982\u8ff0",level:3},{value:"\u76ee\u5f55\u7ed3\u6784Tree",id:"\u76ee\u5f55\u7ed3\u6784tree",level:3},{value:"\u76ee\u5f55\u5bfc\u89c8",id:"\u76ee\u5f55\u5bfc\u89c8",level:3},{value:"\u5982\u4f55\u8054\u7cfb\u6211\u4eec",id:"\u5982\u4f55\u8054\u7cfb\u6211\u4eec",level:3}],k={toc:m};function o(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"apache-devlake\u662f\u4ec0\u4e48"},"Apache DevLake\u662f\u4ec0\u4e48\uff1f"),(0,i.kt)("p",null,"\u7814\u53d1\u6570\u636e\u6563\u843d\u5728\u8f6f\u4ef6\u7814\u53d1\u751f\u547d\u5468\u671f\u7684\u4e0d\u540c\u9636\u6bb5\u3001\u4e0d\u540c\u5de5\u4f5c\u6d41\u3001\u4e0d\u540cDevOps\u5de5\u5177\u4e2d\uff0c\u4e14\u6807\u51c6\u5316\u7a0b\u5ea6\u4f4e\uff0c\u5bfc\u81f4\u6548\u80fd\u6570\u636e\u96be\u4ee5\u7559\u5b58\u3001\u6c47\u96c6\u5e76\u8f6c\u5316\u4e3a\u6709\u6548\u6d1e\u89c1\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e00\u75db\u70b9\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake"},"Apache DevLake")," \u5e94\u8fd0\u800c\u751f\u3002Apache DevLake\u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u7814\u53d1\u6570\u636e\u5e73\u53f0\uff0c\u5b83\u901a\u8fc7\u63d0\u4f9b\u81ea\u52a8\u5316\u3001\u4e00\u7ad9\u5f0f\u7684\u6570\u636e\u6536\u96c6\u3001\u5206\u6790\u4ee5\u53ca\u53ef\u89c6\u5316\u80fd\u529b\uff0c\u5e2e\u52a9\u7814\u53d1\u56e2\u961f\u66f4\u597d\u5730\u7406\u89e3\u5f00\u53d1\u8fc7\u7a0b\uff0c\u6316\u6398\u5173\u952e\u74f6\u9888\u4e0e\u63d0\u6548\u673a\u4f1a\u3002"),(0,i.kt)("h3",{id:"apache-devlake\u67b6\u6784\u6982\u8ff0"},"Apache DevLake\u67b6\u6784\u6982\u8ff0"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:t(91561).Z,width:"1262",height:"641"})),(0,i.kt)("center",null,"Apache DevLake \u67b6\u6784\u56fe"),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Config UI: \u4eba\u5982\u5176\u540d\uff0c\u914d\u7f6e\u7684\u53ef\u89c6\u5316\uff0c\u5176\u4e3b\u8981\u627f\u8f7dApache DevLake\u7684\u914d\u7f6e\u5de5\u4f5c\u3002\u901a\u8fc7Config UI\uff0c\u7528\u6237\u53ef\u4ee5\u5efa\u7acb\u6570\u636e\u6e90\u8fde\u63a5\uff0c\u5e76\u5b9e\u73b0\u6570\u636e\u7684\u6536\u96c6\u8303\u56f4\uff0c\u90e8\u5206\u6570\u636e\u7684\u8f6c\u6362\u89c4\u5219\uff0c\u4ee5\u53ca\u6536\u96c6\u9891\u7387\u7b49\u4efb\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},"Api Sever\uff1aApache DevLake\u7684Api\u63a5\u53e3\uff0c\u662f\u524d\u7aef\u8c03\u7528\u540e\u7aef\u6570\u636e\u7684\u901a\u9053\u3002"),(0,i.kt)("li",{parentName:"ul"},"Runner\uff1aApache DevLake\u8fd0\u884c\u7684\u5e95\u5c42\u652f\u6491\u673a\u5236\u3002"),(0,i.kt)("li",{parentName:"ul"},"Plugins\uff1a\u5177\u4f53\u6267\u884c\u7684\u63d2\u4ef6\u4e1a\u52a1\uff0c\u4e3b\u8981\u627f\u8f7dApache DevLake\u7684\u540e\u7aef\u6570\u636e\u6536\u96c6\u3001\u6269\u5c55\u548c\u8f6c\u6362\u7684\u5de5\u4f5c\u3002\u9664dbt\u63d2\u4ef6\u5916\u7684\u63d2\u4ef6\u4ea7\u51faApache DevLake\u7684\u9884\u7f6e\u6570\u636e\uff0c\u9884\u7f6e\u6570\u636e\u4e3b\u8981\u5305\u62ec\u4e09\u5c42\uff1b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"raw layer\uff1a\u8d1f\u8d23\u50a8\u5b58\u6700\u539f\u59cb\u7684api response json\u3002"),(0,i.kt)("li",{parentName:"ul"},"tool layer\uff1a\u6839\u636eraw layer\u63d0\u53d6\u51fa\u6b64\u63d2\u4ef6\u6240\u9700\u7684\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"domain layer\uff1a\u6839\u636etool layer\u5c42\u62bd\u8c61\u51fa\u5171\u6027\u7684\u6570\u636e\uff0c\u8fd9\u4e9b\u6570\u636e\u4f1a\u88ab\u4f7f\u7528\u5728Grafana\u56fe\u8868\u4e2d\uff0c\u7528\u4e8e\u591a\u79cd\u7814\u53d1\u6307\u6807\u7684\u5c55\u793a\u3002"))),(0,i.kt)("li",{parentName:"ul"},"RDBS: \u5173\u7cfb\u578b\u6570\u636e\u5e93\u3002\u76ee\u524dApache DavLake\u652f\u6301MySQL\u548cPostgreSQL\uff0c\u540e\u671f\u8fd8\u4f1a\u7ee7\u7eed\u652f\u6301\u66f4\u591a\u7684\u6570\u636e\u5e93\u3002"),(0,i.kt)("li",{parentName:"ul"},"Grafana Dashboards: \u5176\u4e3b\u8981\u627f\u8f7dApache DevLake\u7684\u524d\u7aef\u5c55\u793a\u5de5\u4f5c\u3002\u6839\u636eApache DevLake\u6536\u96c6\u7684\u6570\u636e\uff0c\u901a\u8fc7sql\u8bed\u53e5\u6765\u751f\u6210\u56e2\u961f\u9700\u8981\u7684\u4ea4\u4ed8\u6548\u7387\u3001\u8d28\u91cf\u3001\u6210\u672c\u3001\u80fd\u529b\u7b49\u5404\u79cd\u7814\u53d1\u6548\u80fd\u6307\u6807\u3002")),(0,i.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784tree"},"\u76ee\u5f55\u7ed3\u6784Tree"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u251c\u2500\u2500 blueprints\n\u2502\xa0\xa0 \u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u251c\u2500\u2500 domainlayer\n\u2502\xa0\xa0 \u251c\u2500\u2500 ping\n\u2502\xa0\xa0 \u251c\u2500\u2500 pipelines\n\u2502\xa0\xa0 \u251c\u2500\u2500 push\n\u2502\xa0\xa0 \u251c\u2500\u2500 shared\n\u2502\xa0\xa0 \u251c\u2500\u2500 task\n\u2502\xa0\xa0 \u2514\u2500\u2500 version\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 config-ui\n\u251c\u2500\u2500 devops\n\u2502\xa0\xa0 \u2514\u2500\u2500 lake-builder\n\u251c\u2500\u2500 e2e\n\u251c\u2500\u2500 errors\n\u251c\u2500\u2500 grafana\n\u2502\xa0\xa0 \u251c\u2500\u2500 _archive\n\u2502\xa0\xa0 \u251c\u2500\u2500 dashboards\n\u2502\xa0\xa0 \u251c\u2500\u2500 img\n\u2502\xa0\xa0 \u2514\u2500\u2500 provisioning\n\u2502\xa0\xa0     \u251c\u2500\u2500 dashboards\n\u2502\xa0\xa0     \u2514\u2500\u2500 datasources\n\u251c\u2500\u2500 img\n\u251c\u2500\u2500 logger\n\u251c\u2500\u2500 logs\n\u251c\u2500\u2500 migration\n\u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u251c\u2500\u2500 common\n\u2502\xa0\xa0 \u251c\u2500\u2500 domainlayer\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 code\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 crossdomain\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 devops\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 didgen\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ticket\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user\n\u2502\xa0\xa0 \u2514\u2500\u2500 migrationscripts\n\u2502\xa0\xa0     \u2514\u2500\u2500 archived\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 ae\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 migrationscripts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 archived\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tasks\n\u2502\xa0\xa0 \u251c\u2500\u2500 core\n\u2502\xa0\xa0 \u251c\u2500\u2500 dbt\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tasks\n\u2502\xa0\xa0 \u251c\u2500\u2500 feishu\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 apimodels\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 migrationscripts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 archived\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tasks\n\u2502\xa0\xa0 \u251c\u2500\u2500 gitextractor\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 parser\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 store\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tasks\n\u2502\xa0\xa0 \u251c\u2500\u2500 github\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 migrationscripts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 archived\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 tasks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 utils\n\u2502\xa0\xa0 \u251c\u2500\u2500 gitlab\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 e2e\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tables\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 impl\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 migrationscripts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 archived\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tasks\n\u2502\xa0\xa0 \u251c\u2500\u2500 helper\n\u2502\xa0\xa0 \u251c\u2500\u2500 jenkins\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 migrationscripts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 archived\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tasks\n\u2502\xa0\xa0 \u251c\u2500\u2500 jira\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 migrationscripts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 archived\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tasks\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 apiv2models\n\u2502\xa0\xa0 \u251c\u2500\u2500 refdiff\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 tasks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 utils\n\u2502\xa0\xa0 \u2514\u2500\u2500 tapd\n\u2502\xa0\xa0     \u251c\u2500\u2500 api\n\u2502\xa0\xa0     \u251c\u2500\u2500 models\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 migrationscripts\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 archived\n\u2502\xa0\xa0     \u2514\u2500\u2500 tasks\n\u251c\u2500\u2500 releases\n\u2502\xa0\xa0 \u251c\u2500\u2500 lake-v0.10.0\n\u2502\xa0\xa0 \u251c\u2500\u2500 lake-v0.10.0-beta1\n\u2502\xa0\xa0 \u251c\u2500\u2500 lake-v0.10.1\n\u2502\xa0\xa0 \u251c\u2500\u2500 lake-v0.7.0\n\u2502\xa0\xa0 \u251c\u2500\u2500 lake-v0.8.0\n\u2502\xa0\xa0 \u2514\u2500\u2500 lake-v0.9.0\n\u251c\u2500\u2500 runner\n\u251c\u2500\u2500 scripts\n\u251c\u2500\u2500 services\n\u251c\u2500\u2500 test\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 task\n\u2502\xa0\xa0 \u2514\u2500\u2500 example\n\u251c\u2500\u2500 testhelper\n\u251c\u2500\u2500 utils\n\u251c\u2500\u2500 version\n\u251c\u2500\u2500 worker\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 docker-compose.yml\n\u251c\u2500\u2500 docker-compose-temporal.yml\n\u251c\u2500\u2500 k8s-deploy.yaml\n\u251c\u2500\u2500 Makefile\n\u2514\u2500\u2500 .env.exemple\n   \n\n")),(0,i.kt)("h3",{id:"\u76ee\u5f55\u5bfc\u89c8"},"\u76ee\u5f55\u5bfc\u89c8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u540e\u7aef\u90e8\u5206\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"config\uff1a\u5bf9.env\u914d\u7f6e\u6587\u4ef6\u7684\u8bfb\u3001\u5199\u4ee5\u53ca\u4fee\u6539\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},"logger\uff1alog\u65e5\u5fd7\u7684level\u3001format\u7b49\u8bbe\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},"errors\uff1aError\u7684\u5b9a\u4e49\u3002"),(0,i.kt)("li",{parentName:"ul"},"utils\uff1a\u5de5\u5177\u5305\uff0c\u5b83\u5305\u542b\u4e00\u4e9b\u57fa\u7840\u901a\u7528\u7684\u51fd\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"runner\uff1a\u63d0\u4f9b\u57fa\u7840\u6267\u884c\u670d\u52a1\uff0c\u5305\u62ec\u6570\u636e\u5e93\uff0ccmd\uff0cpipelines\uff0ctasks\u4ee5\u53ca\u52a0\u8f7d\u7f16\u8bd1\u540e\u7684\u63d2\u4ef6\u7b49\u57fa\u7840\u670d\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},"models\uff1a\u5b9a\u4e49\u6846\u67b6\u7ea7\u522b\u7684\u5b9e\u4f53\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"common\uff1a\u57fa\u7840struct\u5b9a\u4e49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema"},"domainlayer"),"\uff1a\u9886\u57df\u5c42\u662f\u6765\u81ea\u4e0d\u540c\u5de5\u5177\u6570\u636e\u7684\u901a\u7528\u62bd\u8c61\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ticket\uff1aIssue Tracking\uff0c\u5373\u95ee\u9898\u8ddf\u8e2a\u9886\u57df\u3002"),(0,i.kt)("li",{parentName:"ul"},"code\uff1a\u5305\u62ecSource Code\u6e90\u4ee3\u7801\u5173\u8054\u9886\u57df\u3002\u4ee5\u53caCode Review\u4ee3\u7801\u5ba1\u67e5\u9886\u57df\u3002"),(0,i.kt)("li",{parentName:"ul"},"devops\uff1aCI/CD\uff0c\u5373\u6301\u7eed\u96c6\u6210\u3001\u6301\u7eed\u4ea4\u4ed8\u548c\u6301\u7eed\u90e8\u7f72\u9886\u57df\u3002"),(0,i.kt)("li",{parentName:"ul"},"crossdomain\uff1a\u8de8\u57df\u5b9e\u4f53\uff0c\u8fd9\u4e9b\u5b9e\u4f53\u7528\u4e8e\u5173\u8054\u4e0d\u540c\u9886\u57df\u4e4b\u95f4\u7684\u5b9e\u4f53\uff0c\u8fd9\u662f\u5efa\u7acb\u5168\u65b9\u9762\u5206\u6790\u7684\u57fa\u7840\u3002"),(0,i.kt)("li",{parentName:"ul"},"user\uff1a\u5bf9\u7528\u6237\u7684\u62bd\u8c61\u9886\u57df\uff0cuser\u4e5f\u5c5e\u4e8ecrossdomain\u8303\u7574\u3002"))),(0,i.kt)("li",{parentName:"ul"},"migrationscripts\uff1a\u521d\u59cb\u5316\u5e76\u66f4\u65b0\u6570\u636e\u5e93\u3002"))),(0,i.kt)("li",{parentName:"ul"},"plugins\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"core\uff1a\u63d2\u4ef6\u901a\u7528\u63a5\u53e3\u7684\u5b9a\u4e49\u4ee5\u53ca\u7ba1\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},"helper\uff1a\u63d2\u4ef6\u901a\u7528\u5de5\u5177\u7684\u96c6\u5408\uff0c\u63d0\u4f9b\u63d2\u4ef6\u6240\u9700\u8981\u7684\u8f85\u52a9\u7c7b\uff0c\u5982api\u6536\u96c6\uff0c\u6570\u636eETL\uff0c\u65f6\u95f4\u5904\u7406\u7b49\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8bf7\u6c42Api Client\u5de5\u5177\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6536\u96c6\u6570\u636eCollector\u8f85\u52a9\u7c7b\uff0c\u6211\u4eec\u57fa\u4e8eapi\u76f8\u540c\u7684\u5904\u7406\u6a21\u5f0f\uff0c\u7edf\u4e00\u4e86\u5e76\u53d1\uff0c\u9650\u901f\u4ee5\u53ca\u91cd\u8bd5\u7b49\u529f\u80fd\uff0c\u6700\u7ec8\u5b9e\u73b0\u4e86\u4e00\u5957\u901a\u7528\u7684\u6846\u67b6\uff0c\u6781\u5927\u5730\u51cf\u5c11\u4e86\u5f00\u53d1\u548c\u7ef4\u62a4\u6210\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u53d6\u6570\u636eExtractor\u8f85\u52a9\u7c7b\uff0c\u540c\u65f6\u4e5f\u5185\u5efa\u4e86\u6279\u91cf\u5904\u7406\u673a\u5236\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u6570\u636eConvertor\u8f85\u52a9\u7c7b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5904\u7406\u5de5\u5177\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u5904\u7406\u5de5\u5177\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u51fd\u6570\u5de5\u5177\u3002"))),(0,i.kt)("li",{parentName:"ul"},"ae\uff1a\u5206\u6790\u5f15\u64ce\uff0c\u7528\u4e8e\u5bfc\u5165merico ae\u5206\u6790\u5f15\u64ce\u7684\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"feishu\uff1a\u6536\u96c6\u98de\u4e66\u6570\u636e\uff0c\u76ee\u524d\u4e3b\u8981\u662f\u83b7\u53d6\u4e00\u6bb5\u65f6\u95f4\u5185\u7ec4\u7ec7\u5185\u4f1a\u8bae\u4f7f\u7528\u7684top\u7528\u6237\u5217\u8868\u7684\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"github\uff1a\u6536\u96c6Github\u6570\u636e\u5e76\u8ba1\u7b97\u76f8\u5173\u6307\u6807\u3002\uff08\u5176\u4ed6\u7684\u5927\u90e8\u5206\u63d2\u4ef6\u7684\u76ee\u5f55\u7ed3\u6784\u548c\u5b9e\u73b0\u529f\u80fd\u548cgithub\u5927\u540c\u5c0f\u5f02\uff0c\u8fd9\u91cc\u4ee5github\u4e3a\u4f8b\u6765\u4ecb\u7ecd\uff09\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"github.go\uff1agithub\u542f\u52a8\u5165\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},"tasks\uff1a\u5177\u4f53\u6267\u884c\u76844\u7c7b\u4efb\u52a1\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"*_collector.go\uff1a\u6536\u96c6\u6570\u636e\u5230raw layer\u5c42\u3002"),(0,i.kt)("li",{parentName:"ul"},"*_extractor.go\uff1a\u63d0\u53d6\u6240\u9700\u7684\u6570\u636e\u5230tool layer\u5c42\u3002"),(0,i.kt)("li",{parentName:"ul"},"*_convertor.go\uff1a\u8f6c\u6362\u6240\u9700\u7684\u6570\u636e\u5230domain layer\u5c42\u3002"),(0,i.kt)("li",{parentName:"ul"},"*_enricher.go\uff1adomain layer\u5c42\u66f4\u8fdb\u4e00\u6b65\u7684\u6570\u636e\u8ba1\u7b97\u8f6c\u6362\u3002"))),(0,i.kt)("li",{parentName:"ul"},"models\uff1a\u5b9a\u4e49github\u5bf9\u5e94\u5b9e\u4f53entity\u3002"),(0,i.kt)("li",{parentName:"ul"},"api\uff1aapi\u63a5\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},"utils\uff1agithub\u63d0\u53d6\u7684\u4e00\u4e9b\u57fa\u672c\u901a\u7528\u51fd\u6570\u3002"))),(0,i.kt)("li",{parentName:"ul"},"gitextractor\uff1agit\u6570\u636e\u63d0\u53d6\u5de5\u5177\uff0c\u8be5\u63d2\u4ef6\u53ef\u4ee5\u4ece\u8fdc\u7aef\u6216\u672c\u5730git\u4ed3\u5e93\u63d0\u53d6commit\u548creference\u4fe1\u606f\uff0c\u5e76\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u6216csv\u6587\u4ef6\u3002\u7528\u6765\u4ee3\u66ffgithub\u63d2\u4ef6\u6536\u96c6commit\u4fe1\u606f\u4ee5\u51cf\u5c11api\u8bf7\u6c42\u7684\u6570\u91cf\uff0c\u63d0\u9ad8\u6536\u96c6\u901f\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ul"},"refdiff\uff1a\u5728\u5206\u6790\u5f00\u53d1\u5de5\u4f5c\u4ea7\u751f\u4ee3\u7801\u91cf\u65f6\uff0c\u7ecf\u5e38\u9700\u8981\u77e5\u9053\u4e24\u4e2a\u7248\u672c\u4e4b\u95f4\u7684diff\u3002\u672c\u63d2\u4ef6\u57fa\u4e8e\u6570\u636e\u5e93\u4e2d\u5b58\u50a8\u7684commits\u7236\u5b50\u5173\u7cfb\u4fe1\u606f\uff0c\u63d0\u4f9b\u4e86\u8ba1\u7b97ref(branch/tag)\u4e4b\u95f4\u76f8\u5deecommits\u5217\u8868\u7684\u80fd\u529b\u3002"),(0,i.kt)("li",{parentName:"ul"},"gitlab\uff1a\u6536\u96c6Gitlab\u6570\u636e\u5e76\u8ba1\u7b97\u76f8\u5173\u6307\u6807\u3002"),(0,i.kt)("li",{parentName:"ul"},"jenkins\uff1a\u6536\u96c6jenkins\u7684build\u548cjob\u76f8\u5173\u6307\u6807\u3002"),(0,i.kt)("li",{parentName:"ul"},"jira\uff1a\u6536\u96c6jira\u6570\u636e\u5e76\u8ba1\u7b97\u76f8\u5173\u6307\u6807\u3002"),(0,i.kt)("li",{parentName:"ul"},"tapd\uff1a\u6536\u96c6tapd\u6570\u636e\u5e76\u8ba1\u7b97\u76f8\u5173\u6307\u6807\u3002"),(0,i.kt)("li",{parentName:"ul"},"dbt\uff1a(data build tool)\u662f\u4e00\u6b3e\u6d41\u884c\u7684\u5f00\u6e90\u6570\u636e\u8f6c\u6362\u5de5\u5177\uff0c\u80fd\u591f\u901a\u8fc7SQL\u5b9e\u73b0\u6570\u636e\u8f6c\u5316\uff0c\u5c06\u547d\u4ee4\u8f6c\u5316\u4e3a\u8868\u6216\u8005\u89c6\u56fe\uff0c\u63d0\u5347\u6570\u636e\u5206\u6790\u5e08\u7684\u5de5\u4f5c\u6548\u7387\u3002Apache DevLake\u589e\u52a0\u4e86dbt\u63d2\u4ef6\uff0c\u7528\u4e8e\u6570\u636e\u5b9a\u5236\u7684\u9700\u8981\u3002"))),(0,i.kt)("li",{parentName:"ul"},"services\uff1a\u521b\u5efa\u3001\u7ba1\u7406Apache DevLake\u5404\u79cd\u670d\u52a1\uff0c\u5305\u542bnotifications\u3001blueprints\u3001pipelines\u3001tasks\u3001plugins\u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},"api\uff1a\u4f7f\u7528Gin\u6846\u67b6\u642d\u5efa\u7684\u4e00\u4e2a\u901a\u7528Apache DevLake API\u670d\u52a1\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u524d\u7aef\u90e8\u5206\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"congfig-ui\uff1a\u4e3b\u8981\u662fApache DevLake\u7684\u63d2\u4ef6\u914d\u7f6e\u4fe1\u606f\u7684\u53ef\u89c6\u5316\u3002",(0,i.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/Glossary"},"\u4e00\u4e9b\u672f\u8bed\u7684\u89e3\u91ca"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5e38\u89c4\u6a21\u5f0f ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"blueprints\u7684\u914d\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},"data connections\u7684\u914d\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},"transformation rules\u7684\u914d\u7f6e\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u9ad8\u7ea7\u6a21\u5f0f\uff1a\u4e3b\u8981\u662f\u901a\u8fc7json\u7684\u65b9\u5f0f\u6765\u8bf7\u6c42api\uff0c\u53ef\u9009\u62e9\u5bf9\u5e94\u7684\u63d2\u4ef6\uff0c\u5bf9\u5e94\u7684subtasks\uff0c\u4ee5\u53ca\u63d2\u4ef6\u6240\u9700\u8981\u7684\u5176\u4ed6\u4fe1\u606f\u3002"))),(0,i.kt)("li",{parentName:"ul"},"Grafana\uff1a\u5176\u4e3b\u8981\u627f\u8f7dApache DevLake\u7684\u524d\u7aef\u5c55\u793a\u5de5\u4f5c\u3002\u6839\u636e\u6536\u96c6\u7684\u6570\u636e\uff0c\u901a\u8fc7sql\u8bed\u53e5\u6765\u751f\u6210\u56e2\u961f\u9700\u8981\u7684\u5404\u79cd\u6570\u636e\u3002\u76ee\u524dsql\u4e3b\u8981\u7528domain layer\u5c42\u7684\u8868\u6765\u5b9e\u73b0\u901a\u7528\u6570\u636e\u5c55\u793a\u9700\u6c42\u3002"))),(0,i.kt)("li",{parentName:"ul"},"migration\uff1a\u6570\u636e\u5e93\u8fc1\u79fb\u5de5\u5177\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"migration\uff1a\u6570\u636e\u5e93\u8fc1\u79fb\u5de5\u5177migration\u7684\u5177\u4f53\u5b9e\u73b0\u3002"),(0,i.kt)("li",{parentName:"ul"},"models/migrationscripts\uff1adomian layer\u5c42\u7684\u6570\u636e\u5e93\u8fc1\u79fb\u811a\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},"plugins/xxx/models/migrationscripts\uff1a\u63d2\u4ef6\u7684\u6570\u636e\u5e93\u8fc1\u79fb\u811a\u672c\u3002\u4e3b\u8981\u662f",(0,i.kt)("em",{parentName:"li"},"raw"),"\u548c",(0,i.kt)("em",{parentName:"li"},"tool"),"\u5f00\u5934\u7684\u6570\u636e\u5e93\u7684\u8fc1\u79fb\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u90e8\u5206\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"testhelper\u548cplugins\u4e0b\u7684*_test.go\u6587\u4ef6\uff1a\u5373\u5355\u5143\u6d4b\u8bd5\uff0c\u5c5e\u4e8e\u767d\u76d2\u6d4b\u8bd5\u8303\u7574\u3002\u9488\u5bf9\u76ee\u6807\u5bf9\u8c61\u81ea\u8eab\u7684\u903b\u8f91\uff0c\u6267\u884c\u8def\u5f84\u7684\u6b63\u786e\u6027\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u6709\u4f9d\u8d56\u5176\u5b83\u8d44\u6e90\u6216\u5bf9\u591f\u7528\uff0c\u91c7\u7528\u6ce8\u5165\u6216\u8005 mock \u7b49\u65b9\u5f0f\u8fdb\u884c\u6a21\u62df\uff0c\u53ef\u4ee5\u6bd4\u8f83\u65b9\u4fbf\u5730\u5236\u9020\u4e00\u4e9b\u96be\u4ee5\u590d\u73b0\u7684\u6781\u7aef\u60c5\u51b5\u3002"),(0,i.kt)("li",{parentName:"ul"},"test\uff1a\u96c6\u6210\u6d4b\u8bd5\uff0c\u7070\u76d2\u6d4b\u8bd5\u8303\u7574\u3002\u5728\u5355\u5143\u6d4b\u8bd5\u7684\u57fa\u7840\u4e0a\uff0c\u5c06\u6240\u6709\u6a21\u5757\u6309\u7167\u8bbe\u8ba1\u8981\u6c42\uff08\u5982\u6839\u636e\u7ed3\u6784\u56fe\uff09\u7ec4\u88c5\u6210\u4e3a\u5b50\u7cfb\u7edf\u6216\u7cfb\u7edf\uff0c\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5\u3002"),(0,i.kt)("li",{parentName:"ul"},"e2e\uff1a \u7aef\u5230\u7aef\u6d4b\u8bd5\uff0c\u5c5e\u4e8e\u9ed1\u76d2\u6d4b\u8bd5\u8303\u7574\u3002\u76f8\u5bf9\u4e8e\u5355\u5143\u6d4b\u8bd5\u66f4\u6ce8\u91cd\u4e8e\u76ee\u6807\u81ea\u8eab\uff0ce2e\u66f4\u91cd\u89c6\u76ee\u6807\u4e0e\u7cfb\u7edf\u5176\u5b83\u90e8\u5206\u4e92\u52a8\u7684\u6574\u4f53\u6b63\u786e\u6027\uff0c\u76f8\u5bf9\u4e8e\u5355\u5143\u6d4b\u8bd5\u7740\u91cd\u903b\u8f91\u6d4b\u8bd5\uff0ce2e\u4fa7\u91cd\u4e8e\u8f93\u51fa\u7ed3\u679c\u7684\u6b63\u786e\u6027\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\uff0c\u53d1\u5e03\u90e8\u5206\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"devops/lake-builder\uff1a mericodev/lake-builder\u7684docker\u6784\u5efa\u3002"),(0,i.kt)("li",{parentName:"ul"},"Dockerfile\uff1a\u4e3b\u8981\u7528\u4e8e\u6784\u5efadevlake\u955c\u50cf\u3002"),(0,i.kt)("li",{parentName:"ul"},"docker-compose.yml\uff1a\u662f\u7528\u4e8e\u5b9a\u4e49\u548c\u8fd0\u884c\u591a\u5bb9\u5668Docker\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u5177\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528YML\u6587\u4ef6\u6765\u914d\u7f6eApache DevLake\u6240\u9700\u8981\u7684\u670d\u52a1\u7ec4\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"docker-compose-temporal.yml\uff1aTemporal\u662f\u4e00\u4e2a\u5fae\u670d\u52a1\u7f16\u6392\u5e73\u53f0\uff0c\u4ee5\u5206\u5e03\u5f0f\u7684\u6a21\u5f0f\u6765\u90e8\u7f72Apache DevLake\uff0c\u76ee\u524d\u5904\u4e8e\u8bd5\u9a8c\u9636\u6bb5\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002"),(0,i.kt)("li",{parentName:"ul"},"worker\uff1aTemporal\u5206\u5e03\u5f0f\u90e8\u7f72\u5f62\u5f0f\u4e2d\u7684worker\u5b9e\u73b0\uff0c\u76ee\u524d\u5904\u4e8e\u8bd5\u9a8c\u9636\u6bb5\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002"),(0,i.kt)("li",{parentName:"ul"},"k8s-deploy.yaml\uff1aKubernetes\u662f\u4e00\u4e2a\u53ef\u79fb\u690d\u3001\u53ef\u6269\u5c55\u7684\u5f00\u6e90\u5e73\u53f0\uff0c\u7528\u4e8e\u7ba1\u7406\u5bb9\u5668\u5316\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u670d\u52a1\uff0c\u53ef\u4fc3\u8fdb\u58f0\u660e\u5f0f\u914d\u7f6e\u548c\u81ea\u52a8\u5316\u3002\u76ee\u524dApache DevLake\u5df2\u652f\u6301\u5728k8s\u96c6\u7fa4\u4e0a\u90e8\u7f72\u3002"),(0,i.kt)("li",{parentName:"ul"},"Makefile\uff1a\u662f\u4e00\u4e2a\u5de5\u7a0b\u6587\u4ef6\u7684\u7f16\u8bd1\u89c4\u5219\uff0c\u63cf\u8ff0\u4e86\u6574\u4e2a\u5de5\u7a0b\u7684\u7f16\u8bd1\u548c\u94fe\u63a5\u7b49\u89c4\u5219\u3002"),(0,i.kt)("li",{parentName:"ul"},"releases\uff1aApache DevLake\u5386\u53f2release\u7248\u672c\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5305\u62ecdocker-compose.yml\u548cenv.example\u3002"),(0,i.kt)("li",{parentName:"ul"},"scripts\uff1ashell\u811a\u672c\uff0c\u5305\u62ec\u7f16\u8bd1plugins\u811a\u672c\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"img\uff1alogo\u3001\u793e\u533a\u5fae\u4fe1\u4e8c\u7ef4\u7801\u7b49\u56fe\u50cf\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},"version\uff1a\u5b9e\u73b0\u7248\u672c\u663e\u793a\u7684\u652f\u6301\uff0c\u5728\u6b63\u5f0f\u7684\u955c\u50cf\u4e2d\u4f1a\u663e\u793a\u5bf9\u5e94release\u7684\u7248\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},".env.exemple\uff1a\u914d\u7f6e\u6587\u4ef6\u5b9e\u4f8b\uff0c\u5305\u62ecDB URL, LOG\u4ee5\u53ca\u5404\u63d2\u4ef6\u7684\u914d\u7f6e\u793a\u4f8b\u4fe1\u606f\u3002")))),(0,i.kt)("h3",{id:"\u5982\u4f55\u8054\u7cfb\u6211\u4eec"},"\u5982\u4f55\u8054\u7cfb\u6211\u4eec"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Github\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake"},"https://github.com/apache/incubator-devlake")),(0,i.kt)("li",{parentName:"ul"},"\u5b98\u7f51\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://devlake.apache.org/"},"https://devlake.apache.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://join.slack.com/t/devlake-io/shared_invite/zt-18uayb6ut-cHOjiYcBwERQ8VVPZ9cQQw",target:"_blank"},"Slack"),": \u901a\u8fc7Slack\u8054\u7cfb"),(0,i.kt)("li",{parentName:"ul"},"\u5fae\u4fe1\u8054\u7cfb:",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"img",src:t(43777).Z,width:"300",height:"300"}))))}o.isMDXComponent=!0},91561:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/Architecture_Diagram-f52640e8c40d052f526ed8283e2833e5.png"},43777:(e,a,t)=>{t.d(a,{Z:()=>l});const l="data:image/png;base64,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"}}]);