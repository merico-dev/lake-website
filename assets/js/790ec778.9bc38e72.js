"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[30615],{30190:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=i(87462),s=(i(67294),i(3905));i(61839);const o={title:"Build Count",description:"Build Count\n",sidebar_position:23},a=void 0,l={unversionedId:"Metrics/BuildCount",id:"version-v0.20/Metrics/BuildCount",title:"Build Count",description:"Build Count\n",source:"@site/versioned_docs/version-v0.20/Metrics/BuildCount.md",sourceDirName:"Metrics",slug:"/Metrics/BuildCount",permalink:"/docs/v0.20/Metrics/BuildCount",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/Metrics/BuildCount.md",tags:[],version:"v0.20",sidebarPosition:23,frontMatter:{title:"Build Count",description:"Build Count\n",sidebar_position:23},sidebar:"docsSidebar",previous:{title:"PR Size",permalink:"/docs/v0.20/Metrics/PRSize"},next:{title:"Build Duration",permalink:"/docs/v0.20/Metrics/BuildDuration"}},r={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,s.kt)("p",null,"The number of successful builds."),(0,s.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"As a process indicator, it reflects the value flow efficiency of upstream production and research links"),(0,s.kt)("li",{parentName:"ol"},"Identify excellent/to-be-improved practices that impact the build, and drive the team to precipitate reusable tools and mechanisms to build infrastructure for fast and high-frequency delivery")),(0,s.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://grafana-lake.demo.devlake.io/grafana/d/W8AiDFQnk/jenkins?orgId=1"},"Jenkins"))),(0,s.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,s.kt)("p",null,"This metric is calculated by counting the number of successful cicd_pipelines, such as Jenkins builds, GitLab pipelines and GitHub workflow runs in the given data range."),(0,s.kt)("b",null,"Data Sources Required"),(0,s.kt)("p",null,"This metric relies on Jenkins builds, GitLab pipelines or GitHub workflow runs."),(0,s.kt)("b",null,"Data Transformation Required"),(0,s.kt)("p",null,"N/A"),(0,s.kt)("b",null,"SQL Queries"),(0,s.kt)("p",null,"The following SQL shows how to find the total number of successful CI builds ",(0,s.kt)("strong",{parentName:"p"},"finished")," in the given time range."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SELECT\n  count(*)\nFROM \n  cicd_pipelines\nWHERE\n  result = 'SUCCESS'\n  and $__timeFilter(finished_date)\nORDER BY 1\n")),(0,s.kt)("p",null,"If you want to measure the monthly trend of the ",(0,s.kt)("inlineCode",{parentName:"p"},"successful build count")," in the screenshot below, please run the following SQL in Grafana."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(37707).Z,width:"1933",height:"372"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'WITH _builds as(\n  SELECT\n    DATE_ADD(date(finished_date), INTERVAL -DAYOFMONTH(date(finished_date))+1 DAY) as time,\n    count(*) as build_count\n  FROM \n    cicd_pipelines\n  WHERE\n    result = "SUCCESS"\n    and $__timeFilter(finished_date)\n    -- the following condition will remove the month with incomplete data\n    and finished_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n  GROUP BY 1\n)\n\nSELECT \n  date_format(time,\'%M %Y\') as month,\n  build_count as "Build Count"\nFROM _builds\nORDER BY time\n')),(0,s.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"From the project dimension, compare the number of builds and success rate by combining the project phase and the complexity of tasks."),(0,s.kt)("li",{parentName:"ol"},"From the time dimension, analyze the trend of the number of builds and success rate to see if it has improved over time.")))}c.isMDXComponent=!0},37707:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/build-count-monthly-90f7a5a678e6931debdacd6c48eec72f.png"}}]);