"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[84550],{20415:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(87462),s=(i(67294),i(3905));i(61839);const a={title:"Build Success Rate",description:"Build Success Rate\n",sidebar_position:25},l=void 0,o={unversionedId:"Metrics/BuildSuccessRate",id:"version-v0.20/Metrics/BuildSuccessRate",title:"Build Success Rate",description:"Build Success Rate\n",source:"@site/versioned_docs/version-v0.20/Metrics/BuildSuccessRate.md",sourceDirName:"Metrics",slug:"/Metrics/BuildSuccessRate",permalink:"/zh/docs/v0.20/Metrics/BuildSuccessRate",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/Metrics/BuildSuccessRate.md",tags:[],version:"v0.20",sidebarPosition:25,frontMatter:{title:"Build Success Rate",description:"Build Success Rate\n",sidebar_position:25},sidebar:"docsSidebar",previous:{title:"Build Duration",permalink:"/zh/docs/v0.20/Metrics/BuildDuration"},next:{title:"DORA - Deployment Frequency",permalink:"/zh/docs/v0.20/Metrics/DeploymentFrequency"}},r={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,s.kt)("p",null,"The ratio of successful builds to all builds."),(0,s.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"As a process indicator, it reflects the value flow efficiency of upstream production and research links"),(0,s.kt)("li",{parentName:"ol"},"Identify excellent/to-be-improved practices that impact the build, and drive the team to precipitate reusable tools and mechanisms to build infrastructure for fast and high-frequency delivery")),(0,s.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://grafana-lake.demo.devlake.io/grafana/d/W8AiDFQnk/jenkins?orgId=1"},"Jenkins"))),(0,s.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,s.kt)("p",null,"The number of successful builds divided by the total number of builds in the given data range."),(0,s.kt)("b",null,"Data Sources Required"),(0,s.kt)("p",null,"This metric relies on Jenkins builds, GitLab pipelines or GitHub workflow runs."),(0,s.kt)("b",null,"Data Transformation Required"),(0,s.kt)("p",null,"N/A"),(0,s.kt)("b",null,"SQL Queries"),(0,s.kt)("p",null,"The following SQL shows how to find the success rate of CI builds ",(0,s.kt)("strong",{parentName:"p"},"finished")," in the given time range."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SELECT\n  1.0 * sum(case when result = 'SUCCESS' then 1 else 0 end)/ count(*) as \"Build Success Rate\"\nFROM \n  cicd_pipelines\nWHERE\n  $__timeFilter(finished_date)\nORDER BY 1\n")),(0,s.kt)("p",null,"If you want to measure the distribution of CI build result like the donut chart below, please run the following SQL in Grafana."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(36786).Z,width:"1057",height:"358"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'SELECT\n  result,\n  count(*) as build_count\nFROM \n  cicd_pipelines\nWHERE\n  $__timeFilter(finished_date)\n  and id like "%jenkins%"\n  and name in ($job_id)\n  -- the following condition will remove the month with incomplete data\n  and finished_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\nGROUP BY 1\nORDER BY 2 DESC\n')),(0,s.kt)("p",null,"If you want to measure the ",(0,s.kt)("inlineCode",{parentName:"p"},"mean build success rate per month")," in the screenshot below, please run the following SQL in Grafana."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(14533).Z,width:"1934",height:"373"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"WITH _build_success_rate as(\n  SELECT\n    DATE_ADD(date(finished_date), INTERVAL -DAYOFMONTH(date(finished_date))+1 DAY) as time,\n    result\n  FROM\n    cicd_pipelines\n  WHERE\n    $__timeFilter(finished_date)\n    -- the following condition will remove the month with incomplete data\n    and finished_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n)\n\nSELECT \n  date_format(time,'%M %Y') as month,\n  1.0 * sum(case when result = 'SUCCESS' then 1 else 0 end)/ count(*) as \"Build Success Rate\"\nFROM _build_success_rate\nGROUP BY 1\nORDER BY 1\n")),(0,s.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"From the project dimension, compare the number of builds and success rate by combining the project phase and the complexity of tasks."),(0,s.kt)("li",{parentName:"ol"},"From the time dimension, analyze the trend of the number of builds and success rate to see if it has improved over time.")))}u.isMDXComponent=!0},36786:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/build-result-distribution-940f7704a76fe24331ff5ed0d08582dc.png"},14533:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/build-success-rate-monthly-83f229c1d5118c159253a66dea930f95.png"}}]);