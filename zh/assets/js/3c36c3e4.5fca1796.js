"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7393],{66314:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(61839);const s={title:"E2E Test Guide",description:"The steps to write E2E tests for plugins.\n"},r="\u5982\u4f55\u4e3a\u63d2\u4ef6\u7f16\u5199E2E\u6d4b\u8bd5",l={unversionedId:"DeveloperManuals/E2E-Test-Guide",id:"version-v0.13/DeveloperManuals/E2E-Test-Guide",title:"E2E Test Guide",description:"The steps to write E2E tests for plugins.\n",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.13/DeveloperManuals/E2E-Test-Guide.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/E2E-Test-Guide",permalink:"/zh/docs/v0.13/DeveloperManuals/E2E-Test-Guide",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/DeveloperManuals/E2E-Test-Guide.md",tags:[],version:"v0.13",frontMatter:{title:"E2E Test Guide",description:"The steps to write E2E tests for plugins.\n"},sidebar:"docsSidebar",previous:{title:"Tag Naming Conventions",permalink:"/zh/docs/v0.13/DeveloperManuals/TagNamingConventions"},next:{title:"Devlake release guide",permalink:"/zh/docs/v0.13/DeveloperManuals/Release-SOP"}},o={},p=[{value:"\u4e3a\u4ec0\u4e48\u8981\u5199 E2E \u6d4b\u8bd5",id:"\u4e3a\u4ec0\u4e48\u8981\u5199-e2e-\u6d4b\u8bd5",level:2},{value:"\u51c6\u5907\u6570\u636e",id:"\u51c6\u5907\u6570\u636e",level:2},{value:"DevLake Code Generator \u5bfc\u51fa",id:"devlake-code-generator-\u5bfc\u51fa",level:3},{value:"GoLand Database \u5bfc\u51fa",id:"goland-database-\u5bfc\u51fa",level:3},{value:"MySQL Select Into Outfile",id:"mysql-select-into-outfile",level:3},{value:"Vscode Database",id:"vscode-database",level:3},{value:"MySQL workerbench",id:"mysql-workerbench",level:3},{value:"Postgres Copy with csv header;",id:"postgres-copy-with-csv-header",level:3},{value:"\u7f16\u5199E2E\u6d4b\u8bd5",id:"\u7f16\u5199e2e\u6d4b\u8bd5",level:2},{value:"\u9a8c\u8bc1\u8fd0\u884c\u7ed3\u679c\u662f\u5426\u6b63\u786e",id:"\u9a8c\u8bc1\u8fd0\u884c\u7ed3\u679c\u662f\u5426\u6b63\u786e",level:2},{value:"\u50cf CI \u4e00\u6837\u8fd0\u884c\u6240\u6709\u63d2\u4ef6\u7684 E2E \u6d4b\u8bd5",id:"\u50cf-ci-\u4e00\u6837\u8fd0\u884c\u6240\u6709\u63d2\u4ef6\u7684-e2e-\u6d4b\u8bd5",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5982\u4f55\u4e3a\u63d2\u4ef6\u7f16\u5199e2e\u6d4b\u8bd5"},"\u5982\u4f55\u4e3a\u63d2\u4ef6\u7f16\u5199E2E\u6d4b\u8bd5"),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u5199-e2e-\u6d4b\u8bd5"},"\u4e3a\u4ec0\u4e48\u8981\u5199 E2E \u6d4b\u8bd5"),(0,i.kt)("p",null,"E2E \u6d4b\u8bd5\uff0c\u4f5c\u4e3a\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u4e00\u73af\uff0c\u4e00\u822c\u662f\u6307\u6587\u4ef6\u4e0e\u6a21\u5757\u7ea7\u522b\u7684\u9ed1\u76d2\u6d4b\u8bd5\uff0c\u6216\u8005\u5141\u8bb8\u4f7f\u7528\u4e00\u4e9b\u6570\u636e\u5e93\u7b49\u5916\u90e8\u670d\u52a1\u7684\u5355\u5143\u6d4b\u8bd5\u3002\u4e66\u5199E2E\u6d4b\u8bd5\u7684\u76ee\u7684\u662f\u5c4f\u853d\u4e00\u4e9b\u5185\u90e8\u5b9e\u73b0\u903b\u8f91\uff0c\u4ec5\u4ece\u6570\u636e\u6b63\u786e\u6027\u7684\u89d2\u5ea6\u6765\u770b\u540c\u6837\u7684\u5916\u90e8\u8f93\u5165\uff0c\u662f\u5426\u53ef\u4ee5\u5f97\u5230\u540c\u6837\u7684\u8f93\u51fa\u3002\u53e6\u5916\uff0c\u76f8\u8f83\u4e8e\u9ed1\u76d2\u7684\u96c6\u6210\u6d4b\u8bd5\u6765\u8bf4\uff0c\u53ef\u4ee5\u907f\u514d\u4e00\u4e9b\u7f51\u7edc\u7b49\u56e0\u7d20\u5e26\u6765\u7684\u5076\u7136\u95ee\u9898\u3002\u66f4\u591a\u5173\u4e8e\u63d2\u4ef6\u7684\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\uff1a \u4e3a\u4ec0\u4e48\u8981\u7f16\u5199 E2E \u6d4b\u8bd5\uff08\u672a\u5b8c\u6210\uff09\n\u5728 DevLake \u4e2d\uff0cE2E \u6d4b\u8bd5\u5305\u542b\u63a5\u53e3\u6d4b\u8bd5\u548c\u63d2\u4ef6 Extract/Convert \u5b50\u4efb\u52a1\u7684\u8f93\u5165\u8f93\u51fa\u7ed3\u679c\u9a8c\u8bc1\uff0c\u672c\u7bc7\u4ec5\u4ecb\u7ecd\u540e\u8005\u7684\u7f16\u5199\u6d41\u7a0b\u3002"),(0,i.kt)("h2",{id:"\u51c6\u5907\u6570\u636e"},"\u51c6\u5907\u6570\u636e"),(0,i.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u4ee5\u4e00\u4e2a\u7b80\u5355\u7684\u63d2\u4ef6\u2014\u2014\u98de\u4e66\u4f1a\u8bae\u65f6\u957f\u6536\u96c6\u4e3e\u4f8b\uff0c\u4ed6\u7684\u76ee\u5f55\u7ed3\u6784\u76ee\u524d\u662f\u8fd9\u6837\u7684\u3002\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175061114-53404aac-16ca-45d1-a0ab-3f61d84922ca.png",alt:"image"}),"\n\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u8fdb\u884c\u6b21\u63d2\u4ef6\u7684 E2E \u6d4b\u8bd5\u7684\u7f16\u5199\u3002"),(0,i.kt)("p",null,"\u7f16\u5199\u6d4b\u8bd5\u7684\u7b2c\u4e00\u6b65\uff0c\u5c31\u662f\u8fd0\u884c\u4e00\u4e0b\u5bf9\u5e94\u63d2\u4ef6\u7684 Collect \u4efb\u52a1\uff0c\u5b8c\u6210\u6570\u636e\u7684\u6536\u96c6\uff0c\u4e5f\u5c31\u662f\u8ba9\u6570\u636e\u5e93\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"_raw_feishu_"),"\u5f00\u5934\u7684\u8868\u4e2d\uff0c\u4fdd\u5b58\u6709\u5bf9\u5e94\u7684\u6570\u636e\u3002\n\u4ee5\u4e0b\u662f\u91c7\u7528 DirectRun (cmd) \u8fd0\u884c\u65b9\u5f0f\u7684\u8fd0\u884c\u65e5\u5fd7\u548c\u6570\u636e\u5e93\u7ed3\u679c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ go run plugins/feishu/main.go --numOfDaysToCollect 2 --connectionId 1 \uff08\u6ce8\u610f\uff1a\u968f\u7740\u7248\u672c\u7684\u5347\u7ea7\uff0c\u547d\u4ee4\u53ef\u80fd\u4ea7\u751f\u53d8\u5316\uff09\n[2022-06-22 23:03:29]  INFO failed to create dir logs: mkdir logs: file exists\npress `c` to send cancel signal\n[2022-06-22 23:03:29]  INFO  [feishu] start plugin\n[2022-06-22 23:03:33]  INFO  [feishu] scheduler for api https://open.feishu.cn/open-apis/vc/v1 worker: 13, request: 10000, duration: 1h0m0s\n[2022-06-22 23:03:33]  INFO  [feishu] total step: 2\n[2022-06-22 23:03:33]  INFO  [feishu] executing subtask collectMeetingTopUserItem\n[2022-06-22 23:03:33]  INFO  [feishu] [collectMeetingTopUserItem] start api collection\n[2022-06-22 23:03:34]  INFO  [feishu] [collectMeetingTopUserItem] finished records: 1\n[2022-06-22 23:03:34]  INFO  [feishu] [collectMeetingTopUserItem] end api collection error: %!w(<nil>)\n[2022-06-22 23:03:34]  INFO  [feishu] finished step: 1 / 2\n[2022-06-22 23:03:34]  INFO  [feishu] executing subtask extractMeetingTopUserItem\n[2022-06-22 23:03:34]  INFO  [feishu] [extractMeetingTopUserItem] get data from _raw_feishu_meeting_top_user_item where params={"connectionId":1} and got 148\n[2022-06-22 23:03:34]  INFO  [feishu] [extractMeetingTopUserItem] finished records: 1\n[2022-06-22 23:03:34]  INFO  [feishu] finished step: 2 / 2\n')),(0,i.kt)("img",{width:"993",alt:"image",src:"https://user-images.githubusercontent.com/3294100/175064505-bc2f98d6-3f2e-4ccf-be68-a1cab1e46401.png"}),"\u597d\u7684\uff0c\u76ee\u524d\u6570\u636e\u5df2\u7ecf\u88ab\u4fdd\u5b58\u5230\u4e86`_raw_feishu_*`\u8868\u4e2d\uff0c`data`\u5217\u5c31\u662f\u63d2\u4ef6\u8fd0\u884c\u7684\u8fd4\u56de\u4fe1\u606f\u3002\u8fd9\u91cc\u6211\u4eec\u53ea\u6536\u96c6\u4e86\u6700\u8fd12\u5929\u7684\u6570\u636e\uff0c\u6570\u636e\u4fe1\u606f\u5e76\u4e0d\u591a\uff0c\u4f46\u4e5f\u8986\u76d6\u4e86\u5404\u79cd\u60c5\u51b5\uff0c\u5373\u540c\u4e00\u4e2a\u4eba\u4e0d\u540c\u5929\u90fd\u6709\u6570\u636e\u3002",(0,i.kt)("p",null,"\u53e6\u5916\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u63d2\u4ef6\u8dd1\u4e86\u4e24\u4e2a\u4efb\u52a1\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"collectMeetingTopUserItem"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"extractMeetingTopUserItem"),"\uff0c\u524d\u8005\u662f\u6536\u96c6\u6570\u636e\u7684\u4efb\u52a1\uff0c\u662f\u672c\u6b21\u9700\u8981\u8dd1\u7684\uff0c\u540e\u8005\u662f\u89e3\u6790\u6570\u636e\u7684\u4efb\u52a1\uff0c\u662f\u672c\u6b21\u9700\u8981\u6d4b\u8bd5\u7684\u3002\u5728\u51c6\u5907\u6570\u636e\u73af\u8282\u662f\u5426\u8fd0\u884c\u65e0\u5173\u7d27\u8981\u3002"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u5c06\u6570\u636e\u5bfc\u51fa\u4e3a.csv\u683c\u5f0f\uff0c\u8fd9\u4e00\u6b65\u5f88\u591a\u79cd\u65b9\u6848\uff0c\u5927\u5bb6\u53ef\u4ee5\u516b\u4ed9\u8fc7\u6d77\u5404\u663e\u795e\u901a\uff0c\u6211\u8fd9\u91cc\u4ec5\u4ec5\u4ecb\u7ecd\u51e0\u79cd\u5e38\u89c1\u7684\u65b9\u6848\u3002"),(0,i.kt)("h3",{id:"devlake-code-generator-\u5bfc\u51fa"},"DevLake Code Generator \u5bfc\u51fa"),(0,i.kt)("p",null,"\u76f4\u63a5\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"go run generator/main.go create-e2e-raw"),"\uff0c\u6839\u636e\u6307\u5f15\u6765\u5b8c\u6210\u5bfc\u51fa\u3002\u6b64\u65b9\u6848\u6700\u7b80\u5355\uff0c\u4f46\u4e5f\u6709\u4e00\u5b9a\u7684\u5c40\u9650\u6027\uff0c\u6bd4\u5982\u5bfc\u51fa\u7684\u5b57\u6bb5\u662f\u56fa\u5b9a\u7684\uff0c\u5982\u679c\u9700\u8981\u66f4\u591a\u7684\u81ea\u5b9a\u4e49\u9009\u9879\uff0c\u53ef\u4ee5\u53c2\u8003\u63a5\u4e0b\u6765\u7684\u65b9\u6848\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175849225-12af5251-6181-4cd9-ba72-26087b05ee73.gif",alt:"usage"})),(0,i.kt)("h3",{id:"goland-database-\u5bfc\u51fa"},"GoLand Database \u5bfc\u51fa"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175067303-7e5e1c4d-2430-4eb5-ad00-e38d86bbd108.png",alt:"image"})),(0,i.kt)("p",null,"\u8fd9\u79cd\u65b9\u6848\u5f88\u7b80\u5355\uff0c\u65e0\u8bba\u4f7f\u7528Postgres\u6216\u8005MySQL\uff0c\u90fd\u4e0d\u4f1a\u51fa\u73b0\u4ec0\u4e48\u95ee\u9898\u3002\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175068178-f1c1c290-e043-4672-b43e-54c4b954c685.png",alt:"image"}),"\ncsv\u5bfc\u51fa\u7684\u6210\u529f\u6807\u51c6\u5c31\u662fgo\u7a0b\u5e8f\u53ef\u4ee5\u65e0\u8bef\u7684\u8bfb\u53d6\uff0c\u56e0\u6b64\u6709\u4ee5\u4e0b\u51e0\u70b9\u503c\u5f97\u6ce8\u610f\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"csv\u6587\u4ef6\u4e2d\u7684\u503c\uff0c\u53ef\u4ee5\u7528\u53cc\u5f15\u53f7\u5305\u88f9\uff0c\u907f\u514d\u503c\u4e2d\u7684\u9017\u53f7\u7b49\u7279\u6b8a\u7b26\u53f7\u7834\u574f\u4e86csv\u683c\u5f0f"),(0,i.kt)("li",{parentName:"ol"},"csv\u6587\u4ef6\u4e2d\u53cc\u5f15\u53f7\u8f6c\u4e49\uff0c\u4e00\u822c\u662f",(0,i.kt)("inlineCode",{parentName:"li"},'""'),"\u4ee3\u8868\u4e00\u4e2a\u53cc\u5f15\u53f7"),(0,i.kt)("li",{parentName:"ol"},"\u6ce8\u610f\u89c2\u5bdfdata\u662f\u5426\u662f\u771f\u5b9e\u503c\uff0c\u800c\u4e0d\u662fbase64\u540e\u7684\u503c")),(0,i.kt)("p",null,"\u5bfc\u51fa\u540e\uff0c\u5c06.csv\u6587\u4ef6\u653e\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/feishu/e2e/raw_tables/_raw_feishu_meeting_top_user_item.csv"),"\u3002"),(0,i.kt)("h3",{id:"mysql-select-into-outfile"},"MySQL Select Into Outfile"),(0,i.kt)("p",null,"\u8fd9\u662f MySQL \u5c06\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u4e3a\u6587\u4ef6\u7684\u65b9\u6848\u3002\u76ee\u524ddocker-compose.yml\u4e2d\u542f\u52a8\u7684MySQL\uff0c\u662f\u5e26\u6709--security\u53c2\u6570\u7684\uff0c\u56e0\u6b64\u4e0d\u5141\u8bb8",(0,i.kt)("inlineCode",{parentName:"p"},"select ... into outfile"),"\uff0c\u9996\u5148\u9700\u8981\u5173\u95ed\u5b89\u5168\u53c2\u6570\uff0c\u5173\u95ed\u65b9\u6cd5\u5927\u81f4\u5982\u4e0b\u56fe\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175070770-9b7d5b75-574b-49ed-9bca-e9f611f60795.jpg",alt:"origin_img_v2_c809c901-01bc-4ec9-b52a-ab4df24c376g"}),"\n\u5173\u95ed\u540e\uff0c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"select ... into outfile"),"\u5bfc\u51facsv\u6587\u4ef6\uff0c\u5bfc\u51fa\u7ed3\u679c\u5927\u81f4\u5982\u4e0b\u56fe\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175070866-2204ae13-c058-4a16-bc20-93ab7c95f832.jpg",alt:"origin_img_v2_ccfdb260-668f-42b4-b249-6c2dd45816ag"}),"\n\u53ef\u4ee5\u6ce8\u610f\u5230\uff0cdata\u5b57\u6bb5\u591a\u4e86hexsha\u5b57\u6bb5\uff0c\u9700\u8981\u4eba\u5de5\u5c06\u5176\u8f6c\u5316\u4e3a\u5b57\u9762\u91cf\u3002"),(0,i.kt)("h3",{id:"vscode-database"},"Vscode Database"),(0,i.kt)("p",null,"\u8fd9\u662f Vscode \u5c06\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u4e3a\u6587\u4ef6\u7684\u65b9\u6848\uff0c\u4f46\u4f7f\u7528\u8d77\u6765\u5e76\u4e0d\u5bb9\u6613\u3002\u4ee5\u4e0b\u662f\u4e0d\u4fee\u6539\u4efb\u4f55\u914d\u7f6e\u7684\u5bfc\u51fa\u7ed3\u679c\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175071987-760c2537-240c-4314-bbd6-1a0cd85ddc0f.jpg",alt:"origin_img_v2_c9eaadaa-afbc-4c06-85bc-e78235f7eb3g"}),"\n\u4f46\u53ef\u4ee5\u660e\u663e\u53d1\u73b0\uff0c\u8f6c\u4e49\u7b26\u53f7\u5e76\u4e0d\u7b26\u5408csv\u89c4\u8303\uff0c\u5e76\u4e14data\u5e76\u6ca1\u6709\u6210\u529f\u5bfc\u51fa\uff0c\u8c03\u6574\u914d\u7f6e\u4e14\u624b\u5de5\u66ff\u6362",(0,i.kt)("inlineCode",{parentName:"p"},'\\"'),"\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},'""'),"\u540e\uff0c\u5f97\u5230\u5982\u4e0b\u7ed3\u679c\u3002\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175072314-954c6794-3ebd-45bb-98e7-60ddbb5a7da9.png",alt:"image"}),"\n\u6b64\u6587\u4ef6data\u5b57\u6bb5\u88abbase64\u7f16\u7801\uff0c\u56e0\u6b64\u9700\u8981\u4eba\u5de5\u5c06\u5176\u89e3\u7801\u4e3a\u5b57\u9762\u91cf\u3002\u89e3\u7801\u6210\u529f\u540e\u5373\u53ef\u4f7f\u7528"),(0,i.kt)("h3",{id:"mysql-workerbench"},"MySQL workerbench"),(0,i.kt)("p",null,"\u6b64\u5de5\u5177\u5fc5\u987b\u8981\u81ea\u5df1\u4e66\u5199SQL\u5b8c\u6210\u6570\u636e\u7684\u5bfc\u51fa\uff0c\u53ef\u4ee5\u6a21\u4eff\u4ee5\u4e0bSQL\u6539\u5199\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id, params, CAST(`data` as char) as data, url, input,created_at FROM _raw_feishu_meeting_top_user_item;\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175080866-1631a601-cbe6-40c0-9d3a-d23ca3322a50.png",alt:"image"}),"\n\u4fdd\u5b58\u683c\u5f0f\u9009\u62e9csv\uff0c\u5bfc\u51fa\u540e\u5373\u53ef\u76f4\u63a5\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"postgres-copy-with-csv-header"},"Postgres Copy with csv header;"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Copy(SQL\u8bed\u53e5) to '/var/lib/postgresql/data/raw.csv' with csv header;"),"\u662fPG\u5e38\u7528\u7684\u5bfc\u51facsv\u65b9\u6cd5\uff0c\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"COPY (\nSELECT id, params, convert_from(data, 'utf-8') as data, url, input,created_at FROM _raw_feishu_meeting_top_user_item\n) to '/var/lib/postgresql/data/raw.csv' with csv header;\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0a\u8bed\u53e5\uff0c\u5b8c\u6210\u6587\u4ef6\u7684\u5bfc\u51fa\u3002\u5982\u679c\u4f60\u7684pg\u8fd0\u884c\u5728docker\u4e2d\uff0c\u90a3\u4e48\u8fd8\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker cp"),"\u547d\u4ee4\u5c06\u6587\u4ef6\u5bfc\u51fa\u5230\u5bbf\u4e3b\u673a\u4e0a\u4ee5\u4fbf\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u7f16\u5199e2e\u6d4b\u8bd5"},"\u7f16\u5199E2E\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u9996\u5148\u9700\u8981\u521b\u5efa\u6d4b\u8bd5\u73af\u5883\uff0c\u6bd4\u5982\u8fd9\u91cc\u521b\u5efa\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"meeting_test.go"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175091380-424974b9-15f3-457b-af5c-03d3b5d17e73.png",alt:"image"}),"\n\u63a5\u7740\u5728\u5176\u4e2d\u8f93\u5165\u6d4b\u8bd5\u51c6\u5907\u4ee3\u7801\uff0c\u5982\u4e0b\u3002\u5176\u5927\u610f\u4e3a\u521b\u5efa\u4e86\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"feishu"),"\u63d2\u4ef6\u7684\u5b9e\u4f8b\uff0c\u7136\u540e\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"ImportCsvIntoRawTable"),"\u5c06csv\u6587\u4ef6\u7684\u6570\u636e\u5bfc\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"_raw_feishu_meeting_top_user_item"),"\u8868\u4e2d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func TestMeetingDataFlow(t *testing.T) {\n    var plugin impl.Feishu\n    dataflowTester := e2ehelper.NewDataFlowTester(t, "feishu", plugin)\n\n    // import raw data table\n    dataflowTester.ImportCsvIntoRawTable("./raw_tables/_raw_feishu_meeting_top_user_item.csv", "_raw_feishu_meeting_top_user_item")\n}\n')),(0,i.kt)("p",null,"\u5bfc\u5165\u51fd\u6570\u7684\u7b7e\u540d\u5982\u4e0b\uff1a\n",(0,i.kt)("inlineCode",{parentName:"p"},"func (t *DataFlowTester) ImportCsvIntoRawTable(csvRelPath string, rawTableName string)"),"\n\u4ed6\u6709\u4e00\u4e2a\u5b6a\u751f\u5144\u5f1f\uff0c\u4ec5\u4ec5\u662f\u53c2\u6570\u7565\u6709\u533a\u522b\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"func (t *DataFlowTester) ImportCsvIntoTabler(csvRelPath string, dst schema.Tabler)"),"\n\u524d\u8005\u7528\u4e8e\u5bfc\u5165raw layer\u5c42\u7684\u8868\uff0c\u540e\u8005\u7528\u4e8e\u5bfc\u5165\u4efb\u610f\u8868\u3002\n",(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u53e6\u5916\u8fd9\u4e24\u4e2a\u51fd\u6570\u4f1a\u5728\u5bfc\u5165\u6570\u636e\u524d\uff0c\u5148\u5220\u9664\u6570\u636e\u8868\u5e76\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"gorm.AutoMigrate"),"\u91cd\u65b0\u8868\u4ee5\u8fbe\u5230\u6e05\u9664\u8868\u6570\u636e\u7684\u76ee\u7684\u3002"),(0,i.kt)("p",null,"\u5bfc\u5165\u6570\u636e\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u8fd0\u884c\uff0c\u76ee\u524d\u6ca1\u6709\u4efb\u4f55\u6d4b\u8bd5\u903b\u8f91\uff0c\u56e0\u6b64\u4e00\u5b9a\u662fPASS\u7684\u3002\u63a5\u7740\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"TestMeetingDataFlow"),"\u7ee7\u7eed\u7f16\u5199\u8c03\u7528\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"extract"),"\u4efb\u52a1\u7684\u903b\u8f91\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func TestMeetingDataFlow(t *testing.T) {\n    var plugin impl.Feishu\n    dataflowTester := e2ehelper.NewDataFlowTester(t, "feishu", plugin)\n\n    taskData := &tasks.FeishuTaskData{\n        Options: &tasks.FeishuOptions{\n            ConnectionId: 1,\n        },\n    }\n\n    // import raw data table\n    dataflowTester.ImportCsvIntoRawTable("./raw_tables/_raw_feishu_meeting_top_user_item.csv", "_raw_feishu_meeting_top_user_item")\n\n    // verify extraction\n    dataflowTester.FlushTabler(&models.FeishuMeetingTopUserItem{})\n    dataflowTester.Subtask(tasks.ExtractMeetingTopUserItemMeta, taskData)\n\n}\n')),(0,i.kt)("p",null,"\u65b0\u589e\u7684\u4ee3\u7801\u5305\u62ec\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"dataflowTester.FlushTabler"),"\u6e05\u7a7a",(0,i.kt)("inlineCode",{parentName:"p"},"FeishuMeetingTopUserItem"),"\u5bf9\u5e94\u7684\u8868\uff0c\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"dataflowTester.Subtask"),"\u6a21\u62df\u5b50\u4efb\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"ExtractMeetingTopUserItemMeta"),"\u7684\u8fd0\u884c\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u5728\u8fd0\u884c\u8bd5\u8bd5\u5427\uff0c\u770b\u770b\u5b50\u4efb\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"ExtractMeetingTopUserItemMeta"),"\u662f\u5426\u80fd\u6ca1\u6709\u9519\u8bef\u7684\u5b8c\u6210\u8fd0\u884c\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"extract"),"\u8fd0\u884c\u7684\u6570\u636e\u7ed3\u679c\u4e00\u822c\u6765\u81earaw\u8868\uff0c\u56e0\u6b64\uff0c\u63d2\u4ef6\u5b50\u4efb\u52a1\u7f16\u5199\u5982\u679c\u6ca1\u6709\u5dee\u9519\u7684\u8bdd\uff0c\u4f1a\u6b63\u786e\u8fd0\u884c\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728 toolLayer \u5c42\u7684\u6570\u636e\u8868\u4e2d\u89c2\u5bdf\u5230\u6570\u636e\u6210\u529f\u89e3\u6790\uff0c\u5728\u672c\u6848\u4f8b\u4e2d\uff0c\u5373",(0,i.kt)("inlineCode",{parentName:"p"},"_tool_feishu_meeting_top_user_items"),"\u8868\u4e2d\u6709\u6b63\u786e\u7684\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8fd0\u884c\u4e0d\u6b63\u786e\uff0c\u90a3\u4e48\u9700\u8981\u5148\u6392\u67e5\u63d2\u4ef6\u672c\u8eab\u7f16\u5199\u7684\u95ee\u9898\uff0c\u7136\u540e\u624d\u80fd\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002"),(0,i.kt)("h2",{id:"\u9a8c\u8bc1\u8fd0\u884c\u7ed3\u679c\u662f\u5426\u6b63\u786e"},"\u9a8c\u8bc1\u8fd0\u884c\u7ed3\u679c\u662f\u5426\u6b63\u786e"),(0,i.kt)("p",null,"\u6211\u4eec\u7ee7\u7eed\u7f16\u5199\u6d4b\u8bd5\uff0c\u5728\u6d4b\u8bd5\u51fd\u6570\u7684\u6700\u540e\uff0c\u7ee7\u7eed\u52a0\u4e0a\u5982\u4e0b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'\nfunc TestMeetingDataFlow(t *testing.T) {\n    \u2026\u2026\n    \n    dataflowTester.VerifyTable(\n      models.FeishuMeetingTopUserItem{},\n      "./snapshot_tables/_tool_feishu_meeting_top_user_items.csv",\n      []string{"connection_id", "start_time", "name"},\n      []string{\n        "meeting_count",\n        "meeting_duration",\n        "user_type",\n        "_raw_data_params",\n        "_raw_data_table",\n        "_raw_data_id",\n        "_raw_data_remark",\n      },\n    )\n}\n')),(0,i.kt)("p",null,"\u5b83\u7684\u529f\u80fd\u662f\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"dataflowTester.VerifyTable"),"\u5b8c\u6210\u6570\u636e\u7ed3\u679c\u7684\u9a8c\u8bc1\u3002\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u8868\u7684\u4e3b\u952e\uff0c\u7b2c\u56db\u4e2a\u53c2\u6570\u662f\u8868\u6240\u6709\u9700\u8981\u9a8c\u8bc1\u7684\u5b57\u6bb5\u3002\u7528\u4e8e\u9a8c\u8bc1\u7684\u6570\u636e\u5b58\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"./snapshot_tables/_tool_feishu_meeting_top_user_items.csv"),"\u4e2d\uff0c\u5f53\u7136\uff0c\u76ee\u524d\u6b64\u6587\u4ef6\u8fd8\u4e0d\u5b58\u5728\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u751f\u6210\u524d\u8ff0\u6587\u4ef6\uff0cDevLake\u91c7\u53d6\u4e86\u4e00\u79cd\u79f0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Snapshot"),"\u7684\u6d4b\u8bd5\u6280\u672f\uff0c\u5728\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyTable"),"\u6587\u4ef6\u4e14csv\u4e0d\u5b58\u5728\u65f6\uff0c\u5c06\u4f1a\u6839\u636e\u8fd0\u884c\u7ed3\u679c\u81ea\u52a8\u751f\u6210\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u4f46\u6ce8\u610f\uff01\u81ea\u52a8\u751f\u6210\u540e\u5e76\u4e0d\u662f\u9ad8\u6795\u65e0\u5fe7\uff0c\u8fd8\u9700\u8981\u505a\u4e24\u4ef6\u4e8b\uff1a1. \u68c0\u67e5\u6587\u4ef6\u751f\u6210\u662f\u5426\u6b63\u786e 2. \u518d\u6b21\u8fd0\u884c\uff0c\u4ee5\u4fbf\u4e8e\u786e\u5b9a\u751f\u6210\u7ed3\u679c\u548c\u518d\u6b21\u8fd0\u884c\u7684\u7ed3\u679c\u6ca1\u6709\u5dee\u9519\u3002\n\u8fd9\u4e24\u9879\u64cd\u4f5c\u975e\u5e38\u91cd\u8981\uff0c\u76f4\u63a5\u5173\u7cfb\u5230\u6d4b\u8bd5\u7f16\u5199\u7684\u8d28\u91cf\uff0c\u6211\u4eec\u5e94\u8be5\u50cf\u5bf9\u5f85\u4ee3\u7801\u6587\u4ef6\u4e00\u6837\u5bf9\u5f85",(0,i.kt)("inlineCode",{parentName:"p"},".csv"),"\u683c\u5f0f\u7684 snapshot \u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8fd9\u4e00\u6b65\u51fa\u73b0\u4e86\u95ee\u9898\uff0c\u4e00\u822c\u4f1a\u67092\u79cd\u53ef\u80fd\uff0c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u7684\u5b57\u6bb5\u4e2d\u542b\u6709\u7c7b\u4f3ccreate_at\u8fd0\u884c\u65f6\u95f4\u6216\u8005\u81ea\u589eid\u7684\u5b57\u6bb5\uff0c\u8fd9\u4e9b\u65e0\u6cd5\u91cd\u590d\u9a8c\u8bc1\u7684\u5b57\u6bb5\u5e94\u8be5\u6392\u9664\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u7684\u7ed3\u679c\u4e2d\u5b58\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"\\n"),"\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"\\r\\n"),"\u7b49\u8f6c\u4e49\u4e0d\u5339\u914d\u7684\u5b57\u6bb5\uff0c\u4e00\u822c\u662f\u89e3\u6790",(0,i.kt)("inlineCode",{parentName:"li"},"httpResponse"),"\u65f6\u51fa\u73b0\u7684\u9519\u8bef\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u65b9\u6848\u89e3\u51b3\uff1a",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u4fee\u6539api\u6a21\u578b\u4e2d\uff0c\u5185\u5bb9\u7684\u5b57\u6bb5\u7c7b\u578b\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"json.RawMessage")),(0,i.kt)("li",{parentName:"ol"},"\u5728\u89e3\u6790\u65f6\u518d\u5c06\u5176\u8f6c\u5316\u4e3astring"),(0,i.kt)("li",{parentName:"ol"},"\u7ecf\u8fc7\u4ee5\u4e0a\u64cd\u4f5c\uff0c\u5373\u53ef\u539f\u5c01\u4e0d\u52a8\u7684\u4fdd\u5b58",(0,i.kt)("inlineCode",{parentName:"li"},"\\n"),"\u7b26\u53f7\uff0c\u907f\u514d\u6570\u636e\u5e93\u6216\u64cd\u4f5c\u7cfb\u7edf\u5bf9\u6362\u884c\u7b26\u7684\u89e3\u6790")))),(0,i.kt)("p",null,"\u6bd4\u5982\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"github"),"\u63d2\u4ef6\u4e2d\uff0c\u662f\u8fd9\u4e48\u5904\u7406\u7684\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175098219-c04b810a-deaf-4958-9295-d5ad4ec152e6.png",alt:"image"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175098273-e4a18f9a-51c8-4637-a80c-3901a3c2934e.png",alt:"image"})),(0,i.kt)("p",null,"\u597d\u4e86\uff0c\u5230\u8fd9\u4e00\u6b65\uff0cE2E\u7684\u7f16\u5199\u5c31\u5b8c\u6210\u4e86\u3002\u6211\u4eec\u672c\u6b21\u4fee\u6539\u4e00\u5171\u65b0\u589e\u4e863\u4e2a\u6587\u4ef6\uff0c\u5c31\u5b8c\u6210\u4e86\u5bf9\u4f1a\u8bae\u65f6\u957f\u6536\u96c6\u4efb\u52a1\u7684\u6d4b\u8bd5\uff0c\u662f\u4e0d\u662f\u8fd8\u633a\u7b80\u5355\u7684~\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/175098574-ae6c7fb7-7123-4d80-aa85-790b492290ca.png",alt:"image"})),(0,i.kt)("h2",{id:"\u50cf-ci-\u4e00\u6837\u8fd0\u884c\u6240\u6709\u63d2\u4ef6\u7684-e2e-\u6d4b\u8bd5"},"\u50cf CI \u4e00\u6837\u8fd0\u884c\u6240\u6709\u63d2\u4ef6\u7684 E2E \u6d4b\u8bd5"),(0,i.kt)("p",null,"\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"make e2e-plugins"),"\uff0c\u56e0\u4e3aDevLake\u5df2\u7ecf\u5c06\u5176\u56fa\u5316\u4e3a\u4e00\u4e2a\u811a\u672c\u4e86~"))}u.isMDXComponent=!0}}]);