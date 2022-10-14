"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3568],{99561:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=t(87462),l=(t(67294),t(3905));t(61839);const r={slug:"how-apache-devlake-runs",title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",authors:"warren",tags:["devlake","apache"]},i=void 0,s={permalink:"/zh/blog/how-apache-devlake-runs",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-05-18-how-apache-devlake-runs/index.md",source:"@site/blog/2022-05-18-how-apache-devlake-runs/index.md",title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",description:"Apache DevLake \u662f\u4e00\u4e2aDevOps\u6570\u636e\u6536\u96c6\u548c\u6574\u5408\u5de5\u5177\uff0c\u901a\u8fc7 Grafana \u4e3a\u5f00\u53d1\u56e2\u961f\u5448\u73b0\u51fa\u4e0d\u540c\u9636\u6bb5\u7684\u6570\u636e\uff0c\u8ba9\u56e2\u961f\u80fd\u591f\u4ee5\u6570\u636e\u4e3a\u9a71\u52a8\u6539\u8fdb\u5f00\u53d1\u6d41\u7a0b\u3002",date:"2022-05-18T00:00:00.000Z",formattedDate:"2022\u5e745\u670818\u65e5",tags:[{label:"devlake",permalink:"/zh/blog/tags/devlake"},{label:"apache",permalink:"/zh/blog/tags/apache"}],readingTime:4.8,hasTruncateMarker:!0,authors:[{name:"\u9648\u6620\u521d",title:"Apache DevLake PPMC",url:"https://github.com/warren830",imageURL:"https://github.com/warren830.png",key:"warren"}],frontMatter:{slug:"how-apache-devlake-runs",title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",authors:"warren",tags:["devlake","apache"]},prevItem:{title:"DevLake \u52a0\u5165 Apache \u5b75\u5316\u5668\uff0c\u6765\u548c\u6211\u4eec\u4e00\u8d77\u73a9\u5f00\u6e90\uff01",permalink:"/zh/blog/apache-welcomes-devlake"},nextItem:{title:"\u4f7f\u7528ants\u5f15\u53d1\u7684\u6b7b\u9501",permalink:"/zh/blog/deadlock-caused-by-using-ants"}},o={authorsImageUrls:[void 0]},p=[{value:"Apache DevLake \u67b6\u6784\u6982\u8ff0",id:"apache-devlake-\u67b6\u6784\u6982\u8ff0",level:3},{value:"\u7cfb\u7edf\u542f\u52a8",id:"\u7cfb\u7edf\u542f\u52a8",level:3},{value:"DevLake\u7684\u4efb\u52a1\u6267\u884c\u539f\u7406",id:"devlake\u7684\u4efb\u52a1\u6267\u884c\u539f\u7406",level:3},{value:"DevLake\u4e2d\u7684\u91cd\u8981\u63a5\u53e3",id:"devlake\u4e2d\u7684\u91cd\u8981\u63a5\u53e3",level:3},{value:"\u540e\u7eed",id:"\u540e\u7eed",level:3}],k={toc:p};function c(e){let{components:a,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake"},"Apache DevLake")," \u662f\u4e00\u4e2aDevOps\u6570\u636e\u6536\u96c6\u548c\u6574\u5408\u5de5\u5177\uff0c\u901a\u8fc7 Grafana \u4e3a\u5f00\u53d1\u56e2\u961f\u5448\u73b0\u51fa\u4e0d\u540c\u9636\u6bb5\u7684\u6570\u636e\uff0c\u8ba9\u56e2\u961f\u80fd\u591f\u4ee5\u6570\u636e\u4e3a\u9a71\u52a8\u6539\u8fdb\u5f00\u53d1\u6d41\u7a0b\u3002"),(0,l.kt)("h3",{id:"apache-devlake-\u67b6\u6784\u6982\u8ff0"},"Apache DevLake \u67b6\u6784\u6982\u8ff0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5de6\u8fb9\u662f",(0,l.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/DataModels/DataSupport"},"\u53ef\u96c6\u6210\u7684DevOps\u6570\u636e\u63d2\u4ef6"),"\uff0c\u76ee\u524d\u5df2\u6709\u7684\u63d2\u4ef6\u5305\u62ec Github\uff0cGitlab\uff0cJIRA\uff0cJenkins\uff0cTapd\uff0cFeishu \u4ee5\u53ca\u601d\u7801\u9038\u4e3b\u6253\u7684\u4ee3\u7801\u5206\u6790\u5f15\u64ce"),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u662f\u4e3b\u4f53\u6846\u67b6\uff0c\u901a\u8fc7\u4e3b\u4f53\u6846\u67b6\u8fd0\u884c\u63d2\u4ef6\u4e2d\u7684\u5b50\u4efb\u52a1\uff0c\u5b8c\u6210\u6570\u636e\u7684\u6536\u96c6\uff0c\u6269\u5c55\uff0c\u5e76\u8f6c\u6362\u5230\u9886\u57df\u5c42\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 config-ui \u6216\u8005 api \u8c03\u7528\u7684\u5f62\u5f0f\u6765\u89e6\u53d1\u4efb\u52a1"),(0,l.kt)("li",{parentName:"ul"},"RMDBS \u76ee\u524d\u652f\u6301 Mysql \u548c PostgreSQL\uff0c\u540e\u671f\u8fd8\u4f1a\u7ee7\u7eed\u652f\u6301\u66f4\u591a\u7684\u6570\u636e\u5e93"),(0,l.kt)("li",{parentName:"ul"},"Grafana \u53ef\u4ee5\u901a\u8fc7sql\u8bed\u53e5\u751f\u6210\u56e2\u961f\u9700\u8981\u7684\u5404\u79cd\u6570\u636e")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Generated",src:t(2324).Z,width:"567",height:"310"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u8be6\u7ec6\u804a\u4e00\u804a\u7cfb\u7edf\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684\u3002")),(0,l.kt)("h3",{id:"\u7cfb\u7edf\u542f\u52a8"},"\u7cfb\u7edf\u542f\u52a8"),(0,l.kt)("p",null,"\u5728\u6211\u4eec\u7684 golang \u7a0b\u5e8f\u542f\u52a8\u4e4b\u524d\uff0c\u9996\u5148\u4f1a\u81ea\u52a8\u8c03\u7528\u5404\u4e2a package \u7684 init() \u65b9\u6cd5\uff0c\u6211\u4eec\u4e3b\u8981\u770b\u770bservices \u5305\u7684\u8f7d\u5165\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u6709\u8be6\u7ec6\u6ce8\u91ca\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func init() {\nvar err error\n// \u83b7\u53d6\u914d\u7f6e\u4fe1\u606f\ncfg = config.GetConfig()\n// \u83b7\u53d6\u5230\u6570\u636e\u5e93\ndb, err = runner.NewGormDb(cfg, logger.Global.Nested("db"))\n// \u914d\u7f6e\u65f6\u533a\nlocation := cron.WithLocation(time.UTC)\n// \u521b\u5efa\u5b9a\u65f6\u4efb\u52a1\u7ba1\u7406\u5668\ncronManager = cron.New(location)\nif err != nil {\npanic(err)\n}\n// \u521d\u59cb\u5316\u6570\u636e\u8fc1\u79fb\nmigration.Init(db)\n// \u6ce8\u518c\u6846\u67b6\u7684\u6570\u636e\u8fc1\u79fb\u811a\u672c\nmigrationscripts.RegisterAll()\n// \u8f7d\u5165\u63d2\u4ef6\uff0c\u4ececfg.GetString("PLUGIN_DIR")\u83b7\u53d6\u5230\u7684\u6587\u4ef6\u5939\u4e2d\u8f7d\u5165\u6240\u6709.so\u6587\u4ef6\uff0c\u5728LoadPlugins\u65b9\u6cd5\u4e2d\uff0c\u5177\u4f53\u6765\u8bb2\uff0c\u901a\u8fc7\u8c03\u7528runner.LoadPlugins\u5c06pluginName:PluginMeta\u952e\u503c\u5bf9\u5b58\u5165\u5230core.plugins\u4e2d\nerr = runner.LoadPlugins(\ncfg.GetString("PLUGIN_DIR"),\ncfg,\nlogger.Global.Nested("plugin"),\ndb,\n)\nif err != nil {\npanic(err)\n}\n// \u6267\u884c\u6570\u636e\u8fc1\u79fb\u811a\u672c\uff0c\u5b8c\u6210\u6570\u636e\u5e93\u6846\u67b6\u5c42\u5404\u4e2a\u8868\u7684\u521d\u59cb\u5316\nerr = migration.Execute(context.Background())\nif err != nil {\npanic(err)\n}\n\n// call service init\npipelineServiceInit()\n}\n\n')),(0,l.kt)("h3",{id:"devlake\u7684\u4efb\u52a1\u6267\u884c\u539f\u7406"},"DevLake\u7684\u4efb\u52a1\u6267\u884c\u539f\u7406"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pipeline\u7684\u8fd0\u884c\u6d41\u7a0b")),(0,l.kt)("p",null,"\u5728\u8bb2\u89e3Pipeline\u6d41\u7a0b\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5148\u89e3\u91ca\u4e00\u4e0b",(0,l.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Glossary#blueprints"},"Blueprint"),"\u3002"),(0,l.kt)("p",null,"Blueprint\u662f\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\uff0c\u5305\u542b\u4e86\u9700\u8981\u6267\u884c\u7684\u5b50\u4efb\u52a1\u4ee5\u53ca\u6267\u884c\u8ba1\u5212\u3002Blueprint \u7684\u6bcf\u4e00\u6b21\u6267\u884c\u8bb0\u5f55\u662f\u4e00\u6761Historical Run\uff08\u4e5f\u79f0\u4e3a Pipeline\uff09\uff0c\u4ee3\u8868 DevLake \u4e00\u6b21\u89e6\u53d1\uff0c\u901a\u8fc7\u4e00\u4e2a\u6216\u591a\u4e2a\u63d2\u4ef6\uff0c\u5b8c\u6210\u4e86\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u636e\u6536\u96c6\u8f6c\u6362\u7684\u4efb\u52a1\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Generated",src:t(6818).Z,width:"567",height:"263"})),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f Pipeline \u8fd0\u884c\u6d41\u7a0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Generated",src:t(10920).Z,width:"344",height:"515"})),(0,l.kt)("p",null,"\u4e00\u4e2apipeline\u5305\u542b\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4tasks\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u4fdd\u8bc1\u4e00\u7cfb\u5217\u4efb\u52a1\u6309\u9884\u8bbe\u987a\u5e8f\u6267\u884c\u3002\u5982\u679c\u4e0b\u56fe\u4e2d\u7684 Stage3 \u7684\u63d2\u4ef6\u9700\u8981\u4f9d\u8d56\u5176\u4ed6\u63d2\u4ef6\u51c6\u5907\u6570\u636e\uff08\u4f8b\u5982 refdiff \u7684\u8fd0\u884c\u9700\u8981\u4f9d\u8d56 gitextractor \u548c github\uff0c\u6570\u636e\u6e90\u4e0e\u63d2\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\u8bf7\u770b",(0,l.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DataSupport"},"\u6587\u6863"),"\uff09\uff0c\u90a3\u4e48 Stage 3 \u5f00\u59cb\u6267\u884c\u65f6\uff0c\u9700\u8981\u4fdd\u8bc1\u5176\u4f9d\u8d56\u9879\u5df2\u5728 Stage1 \u548c Stage2 \u6267\u884c\u5b8c\u6210\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Generated",src:t(53747).Z,width:"567",height:"238"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Task\u7684\u8fd0\u884c\u6d41\u7a0b")),(0,l.kt)("p",null,"\u5728stage1\uff0cstage2\uff0cstage3\u4e2d\u7684\u5404\u63d2\u4ef6\u4efb\u52a1\u90fd\u662f\u5e76\u884c\u6267\u884c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Generated",src:t(27952).Z,width:"304",height:"501"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u4e0b\u6765\u5c31\u662f\u987a\u5e8f\u6267\u884c\u63d2\u4ef6\u4e2d\u7684\u5b50\u4efb\u52a1")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Generated",src:t(45824).Z,width:"331",height:"617"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"RunTask \u4e4b\u524d\u7684\u5de5\u4f5c\u90fd\u662f\u5728\u51c6\u5907 RunTask \u65b9\u6cd5\u9700\u8981\u7684\u53c2\u6570\uff0c\u6bd4\u5982 logger\uff0cdb\uff0ccontext \u7b49\u7b49\u3002"),(0,l.kt)("li",{parentName:"ol"},"RunTask \u65b9\u6cd5\u4e2d\u4e3b\u8981\u662f\u5bf9\u6570\u636e\u5e93\u4e2d\u7684tasks\u8fdb\u884c\u72b6\u6001\u66f4\u65b0\uff0c\u540c\u65f6\uff0c\u51c6\u5907\u8fd0\u884c\u63d2\u4ef6\u4efb\u52a1\u7684 options\uff08\u628a\u4ece config-ui \u4f20\u8fc7\u6765\u7684 json \u8f6c\u6210 map \u4f20\u5230 RunPluginTask \u4e2d\uff09"),(0,l.kt)("li",{parentName:"ol"},"RunPluginTask \u9996\u5148\u901a\u8fc7 core.GetPlugin(pluginName) \u83b7\u53d6\u5230\u5bf9\u5e94 ",(0,l.kt)("a",{parentName:"li",href:"#pm"},"PluginMeta"),"\uff0c\u7136\u540e\u901a\u8fc7 PluginMeta \u83b7\u53d6\u5230 ",(0,l.kt)("a",{parentName:"li",href:"#pt"},"PluginTask"),"\uff0c\u518d\u6267\u884c RunPluginSubTasks")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6bcf\u4e00\u4e2a\u63d2\u4ef6\u5b50\u4efb\u52a1\u7684\u8fd0\u884c\u6d41\u7a0b\uff08\u6d89\u53ca\u5230\u7684 interface \u53ca func \u4f1a\u5728",(0,l.kt)("a",{parentName:"strong",href:"#DevLake%E4%B8%AD%E7%9A%84%E9%87%8D%E8%A6%81%E6%8E%A5%E5%8F%A3"},"\u4e0b\u4e00\u8282"),"\u8be6\u7ec6\u9610\u8ff0\uff09")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Generated",src:t(92782).Z,width:"567",height:"214"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u8c03\u7528SubTaskMetas()\u83b7\u53d6\u5230\u6240\u6709\u63d2\u4ef6\u6240\u6709\u7684\u53ef\u7528\u5b50\u4efb\u52a1",(0,l.kt)("a",{parentName:"li",href:"#stm"},"subtaskMeta")),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},'options["tasks"]'),"\u4ee5\u53casubtaskMeta\u7ec4\u5efa\u9700\u8981\u6267\u884c\u7684\u5b50\u4efb\u52a1\u96c6\u5408subtaskMetas"),(0,l.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u603b\u5171\u591a\u5c11\u4e2a\u5b50\u4efb\u52a1"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"helper.NewDefaultTaskContext"),"\u6784\u5efa",(0,l.kt)("a",{parentName:"li",href:"#tc"},"taskCtx")),(0,l.kt)("li",{parentName:"ol"},"\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"pluginTask.PrepareTaskData"),"\u6784\u5efa",(0,l.kt)("a",{parentName:"li",href:"#td"},"taskData"),"\uff0c"),(0,l.kt)("li",{parentName:"ol"},"\u63a5\u4e0b\u6765\u8fed\u4ee3subtaskMetas\u91cc\u9762\u7684\u6240\u6709\u5b50\u4efb\u52a1",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"taskCtx.SubTaskContext(subtaskMeta.Name)"),"\u83b7\u53d6\u5230\u5b50\u4efb\u52a1\u7684",(0,l.kt)("a",{parentName:"li",href:"#sc"},"subtaskCtx")),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c",(0,l.kt)("a",{parentName:"li",href:"#step"},(0,l.kt)("inlineCode",{parentName:"a"},"subtaskMeta.EntryPoint(subtaskCtx)")))))),(0,l.kt)("h3",{id:"devlake\u4e2d\u7684\u91cd\u8981\u63a5\u53e3"},"DevLake\u4e2d\u7684\u91cd\u8981\u63a5\u53e3"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{id:"pm"},"PluginMeta"),": \u5305\u542b\u4e86\u63d2\u4ef6\u6700\u57fa\u672c\u7684\u4e24\u4e2a\u65b9\u6cd5\uff0c\u6240\u6709\u63d2\u4ef6\u90fd\u9700\u8981\u5b9e\u73b0\uff0c\u7cfb\u7edf\u542f\u52a8\u7684\u65f6\u5019\u5b58\u5728core.plugins\u4e2d\uff0c\u5728\u6267\u884c\u63d2\u4ef6\u4efb\u52a1\u7684\u65f6\u5019\u901a\u8fc7core.GetPlugin\u83b7\u53d6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type PluginMeta interface {\n   Description() string\n   //PkgPath information will be lost when compiled as plugin(.so), this func will return that info\n   RootPkgPath() string\n}\n\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{id:"pt"},"PluginTask"),": \u901a\u8fc7PluginMeta\u83b7\u53d6\uff0c\u63d2\u4ef6\u5b9e\u73b0\u8fd9\u4e2a\u65b9\u6cd5\u4e4b\u540e\uff0cFramework\u5c31\u80fd\u76f4\u63a5\u8fd0\u884c\u5b50\u4efb\u52a1\uff0c\u800c\u4e0d\u662f\u6254\u7ed9\u63d2\u4ef6\u81ea\u5df1\u53bb\u6267\u884c\uff0c\u6700\u5927\u7684\u597d\u5904\u5c31\u662f\u63d2\u4ef6\u7684\u5b50\u4efb\u52a1\u5b9e\u73b0\u66f4\u52a0\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u8fd0\u884c\u5f53\u4e2d\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u66f4\u5bb9\u6613\u7684\u53bb\u5e72\u6d89\uff08\u6bd4\u5982\u589e\u52a0\u65e5\u5fd7\u7b49\u7b49\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type PluginTask interface {\n   // return all available subtasks, framework will run them for you in order\n   SubTaskMetas() []SubTaskMeta\n   // based on task context and user input options, return data that shared among all subtasks\n   PrepareTaskData(taskCtx TaskContext, options map[string]interface{}) (interface{}, error)\n}\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u63d2\u4ef6\u8fd8\u6709\u4e00\u4e2a",(0,l.kt)("a",{id:"td"},"taskData"),"\uff0c\u91cc\u9762\u5305\u542b\u4e86\u914d\u7f6e\u9009\u9879\uff0capiClient\u4ee5\u53ca\u4e00\u4e9b\u63d2\u4ef6\u5176\u5b83\u5c5e\u6027\uff08\u6bd4\u5982github\u6709Repo\u4fe1\u606f\uff09"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{id:"stm"},"SubTaskMeta"),": \u4e00\u4e2a\u5b50\u4efb\u52a1\u7684\u5143\u6570\u636e\uff0c\u6bcf\u4e2a\u5b50\u4efb\u52a1\u90fd\u4f1a\u5b9a\u4e49\u4e00\u4e2aSubTaskMeta")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'var CollectMeetingTopUserItemMeta = core.SubTaskMeta{\n   Name: "collectMeetingTopUserItem",\n   EntryPoint: CollectMeetingTopUserItem,\n   EnabledByDefault: true,\n   Description: "Collect top user meeting data from Feishu api",\n}\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{id:"ec"},"ExecContext"),": \u5b9a\u4e49\u4e86\u6267\u884c(\u5b50)\u4efb\u52a1\u9700\u8981\u7684\u6240\u6709\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{id:"stc"},"SubTaskContext"),": \u5b9a\u4e49\u4e86\u6267\u884c\u5b50\u4efb\u52a1\u6240\u9700\u8981\u7684\u8d44\u6e90\uff08\u5305\u542b\u4e86ExecContext\uff09"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{id:"tc"},"TaskContext"),": \u5b9a\u4e49\u4e86\u6267\u884c\u63d2\u4ef6\u4efb\u52a1\u6240\u9700\u8981\u7684\u8d44\u6e90\uff08\u5305\u542b\u4e86ExecContext\uff09\u3002\u4e0eSubTaskContext\u7684\u533a\u522b\u5728\u4e8eSubTaskContext\u4e2d\u7684TaskContext()\u65b9\u6cd5\u53ef\u4ee5\u8fd4\u56deTaskContext\uff0c\u800cTaskContext\u4e2d\u7684\u65b9\u6cd5SubTaskContext(subtask string)\u65b9\u6cd5\u53ef\u4ee5\u8fd4\u56deSubTaskContext\uff0c\u5b50\u4efb\u52a1\u96b6\u5c5e\u4e8e\u63d2\u4ef6\u4efb\u52a1\uff0c\u6240\u4ee5\u628a\u8fd9\u4e24\u4e2aContext\u8fdb\u884c\u4e86\u533a\u5206"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{id:"step"},"SubTaskEntryPoint"),": \u6240\u6709\u7684\u63d2\u4ef6\u5b50\u4efb\u52a1\u90fd\u9700\u8981\u5b9e\u73b0\u8fd9\u4e2a\u51fd\u6570\uff0c\u8fd9\u6837\u624d\u80fd\u7531\u6846\u67b6\u5c42\u7edf\u4e00\u534f\u8c03\u5b89\u6392")),(0,l.kt)("h3",{id:"\u540e\u7eed"},"\u540e\u7eed"),(0,l.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86 DevLake \u7684\u67b6\u6784\u4ee5\u53ca\u8fd0\u884c\u6d41\u7a0b\uff0c\u8fd8\u6709\u4e09\u4e2a\u6838\u5fc3 api","_","collector\u3001api","_","extractor \u548c data","_","convertor \u5c06\u4f1a\u5728\u4e0b\u4e00\u7bc7\u6587\u7ae0\u8fdb\u884c\u5256\u6790\u3002"))}c.isMDXComponent=!0},2324:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.001-9fe996eee294ce1843bc3f126a1a7b89.png"},6818:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.002-40065677c2b00df89eeaac1d9512f286.png"},10920:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.003-d07631a740cb5b056d15a35627afef80.png"},53747:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.004-a6a550c4f00b232abc7b28e30738be09.png"},27952:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.005-4d14031484d1272b4be8d7ff2f08d2a2.png"},45824:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.006-83ed245c2c8d805aca908814f0f0f5f9.png"},92782:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.007-09a5f7c401dfb5a557b10c3870d103fe.png"}}]);