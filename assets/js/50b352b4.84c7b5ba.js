"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[65626],{59263:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(61839);const l={slug:"DevLake-Playground-How-to-explore-your-data",title:"DevLake Playground: How to explore your data",authors:["Jochum","Lennart"],tags:["devlake","playground","python","process mining"]},s=void 0,o={permalink:"/blog/DevLake-Playground-How-to-explore-your-data",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/blog/2024-03-15-DevLake-Playground-How-to-explore-your-data/index.md",source:"@site/blog/2024-03-15-DevLake-Playground-How-to-explore-your-data/index.md",title:"DevLake Playground: How to explore your data",description:"DevLake is a compelling offering.",date:"2024-03-15T00:00:00.000Z",formattedDate:"March 15, 2024",tags:[{label:"devlake",permalink:"/blog/tags/devlake"},{label:"playground",permalink:"/blog/tags/playground"},{label:"python",permalink:"/blog/tags/python"},{label:"process mining",permalink:"/blog/tags/process-mining"}],readingTime:2.64,hasTruncateMarker:!0,authors:[{name:"Jochum B\xf6rger",title:"Apache DevLake Contributor",url:"https://github.com/jochumb",imageURL:"https://github.com/jochumb.png",key:"Jochum"},{name:"Lennart Tange",title:"Apache DevLake Contributor",url:"https://github.com/lenntt",imageURL:"https://github.com/lenntt.png",key:"Lennart"}],frontMatter:{slug:"DevLake-Playground-How-to-explore-your-data",title:"DevLake Playground: How to explore your data",authors:["Jochum","Lennart"],tags:["devlake","playground","python","process mining"]},nextItem:{title:"Compatibility of Apache DevLake with PostgreSQL",permalink:"/blog/compatibility-of-apache-devLake-with-postgreSQL"}},i={authorsImageUrls:[void 0,void 0]},d=[{value:"Use cases",id:"use-cases",level:2},{value:"Analyzing the development process through JIRA statuses",id:"analyzing-the-development-process-through-jira-statuses",level:3},{value:"Explore data across different domains",id:"explore-data-across-different-domains",level:3},{value:"Getting started",id:"getting-started",level:2}],u={toc:d};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"DevLake is a compelling offering.\nIt collects and normalizes data from many of our favorite development tools and visualizes it using Grafana dashboards.\nLike the sleuths we are, we feel the urge to look beyond the dashboard overviews and find the golden nuggets buried deep within the data.\nSo, we'd like to introduce the DevLake Playground, a place where you can unleash the power of Python on your data."),(0,r.kt)("p",null,"In the DevLake Playground, we can explore the data using Jupyter Notebooks.\nThere are some predefined notebooks and you can write your own.\nA Jupyter notebook combines Python code and documentation, which you can easily customize to your needs with some tweaks.\nThe benefits of these Jupyter notebooks as opposed to Grafana are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Grafana is limited to SQL queries for gathering and transforming data, and visualizations for data tables."),(0,r.kt)("li",{parentName:"ul"},"Python (code) offers more flexibility in transforming the data and can easily provide feedback on intermediate steps."),(0,r.kt)("li",{parentName:"ul"},"The playground also supports more visualization types; for example (see the first use case below,) when the data is structured as a graph, we can visualize it with Graphviz.")),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("h3",{id:"analyzing-the-development-process-through-jira-statuses"},"Analyzing the development process through JIRA statuses"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema#schema-diagram"},"DevLake Domain model")," exposes the changes of issues of our issue tracker, including status changes.\nIf we use that to visualize how issues really flow, we get a rudimentary (automated) value stream map.\nWe can use this to identify bottlenecks in our process or flaws in our process design.\nThis is inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://xebia.com/blog/insights-from-your-jira-data-to-help-improve-your-team/"},"this blog post"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"process graph",src:a(43677).Z,width:"1712",height:"1266"})),(0,r.kt)("p",null,'For example, in the chart above, we see that it takes on average 15 days for Stories to go from "Ready" to "In Progress".\nAnd, it happened 476x within the selected time frame.'),(0,r.kt)("p",null,"And now that we have this data in our playground, we can easily change how we represent it.\nIf we focus on the most common status transitions, we can visualize the distribution of durations in a box plot out of the same data:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"box plot",src:a(1041).Z,width:"1868",height:"842"})),(0,r.kt)("p",null,"This functionality is made available through a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake-playground/blob/main/notebooks/process_analysis.ipynb"},"predefined notebook"),", so you can easily run it with your own data."),(0,r.kt)("h3",{id:"explore-data-across-different-domains"},"Explore data across different domains"),(0,r.kt)("p",null,'Let\'s say we have a hypothesis: "Defect fixes are more quickly merged than new functionality."\nBefore building a dashboard, we want to determine whether the data quality is good enough and whether we can test this hypothesis.\nWith ',(0,r.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/"},"pandas"),", we can quickly join different tables from the ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema#schema-diagram"},"data model"),".\nWith the following code, we were able to get a preliminary view:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\nfrom playground.db_engine import create_db_engine\n\n# the default notebook\nDB_URL = \"mysql://merico:merico@127.0.0.1:3306/lake\"\nengine = create_db_engine(DB_URL)\n\n# read tables from database\ndf_pr_issues = pd.read_sql(\"select * from pull_request_issues\", engine)\ndf_prs = pd.read_sql(\"select * from pull_requests\", engine)\ndf_issues = pd.read_sql(\"select * from issues\", engine)\n\n# join pull requests and issues based on rows in pull_request_issues\ndf = pd.merge(df_pr_issues, df_prs, left_on=\"pull_request_id\", right_on=\"id\", suffixes=('_pr_issues', '_prs'))\ndf = pd.merge(df, df_issues, left_on=\"issue_id\", right_on=\"id\", suffixes=('_prs', '_issues'))\n\n# set data types correctly\ndf['created_date_issues'] = pd.to_datetime(df['created_date_issues'])\ndf['resolution_date'] = pd.to_datetime(df['resolution_date'])\ndf['created_date_prs'] = pd.to_datetime(df['created_date_prs'])\ndf['merged_date'] = pd.to_datetime(df['merged_date'])\n# calculate lead times\ndf['issue_lead_time'] = df['resolution_date'] - df['created_date_issues']\ndf['pr_lead_time'] = df['merged_date'] - df['created_date_prs']\n# drop unnecessary columns\ndf = df[['type_issues', 'title_issues', 'issue_lead_time', 'title_prs', 'pr_lead_time']]\n\n# group lead times by issue_type, add count\ndf_grouped = df.groupby('type_issues').agg({\n    'title_issues': 'count', \n    'issue_lead_time': ['mean', 'median', 'std'], \n    'pr_lead_time': ['mean', 'median', 'std']\n})\ndf.rename(columns={'title_issues': 'issue_count'}, inplace=True)\n\ndisplay(df_grouped)\n")),(0,r.kt)("p",null,"If we run this example on the Devlake GitHub issues and pull requests (up to March 2024), we get the following output:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"title_issues"),(0,r.kt)("th",{parentName:"tr",align:null},"issue_lead_time"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"pr_lead_time"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"mean"),(0,r.kt)("td",{parentName:"tr",align:null},"median"),(0,r.kt)("td",{parentName:"tr",align:null},"std"),(0,r.kt)("td",{parentName:"tr",align:null},"mean"),(0,r.kt)("td",{parentName:"tr",align:null},"median"),(0,r.kt)("td",{parentName:"tr",align:null},"std")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type_issues"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"66 days 14:53:28.709677419"),(0,r.kt)("td",{parentName:"tr",align:null},"42 days 05:59:04"),(0,r.kt)("td",{parentName:"tr",align:null},"67 days 14:35:49.143870568"),(0,r.kt)("td",{parentName:"tr",align:null},"3 days 11:42:34.857142857"),(0,r.kt)("td",{parentName:"tr",align:null},"0 days 12:54:43.500000"),(0,r.kt)("td",{parentName:"tr",align:null},"12 days 17:24:54.878541108")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BUG"),(0,r.kt)("td",{parentName:"tr",align:null},"141"),(0,r.kt)("td",{parentName:"tr",align:null},"10 days 07:27:20.572463768"),(0,r.kt)("td",{parentName:"tr",align:null},"1 days 22:42:39"),(0,r.kt)("td",{parentName:"tr",align:null},"20 days 14:51:35.075965706"),(0,r.kt)("td",{parentName:"tr",align:null},"1 days 16:51:51.529411764"),(0,r.kt)("td",{parentName:"tr",align:null},"0 days 01:04:54"),(0,r.kt)("td",{parentName:"tr",align:null},"10 days 10:20:54.566875184")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INCIDENT"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"0 days 00:50:49"),(0,r.kt)("td",{parentName:"tr",align:null},"0 days 00:50:49"),(0,r.kt)("td",{parentName:"tr",align:null},"0 days 00:59:50.688234865"),(0,r.kt)("td",{parentName:"tr",align:null},"0 days 00:06:39"),(0,r.kt)("td",{parentName:"tr",align:null},"0 days 00:06:39"),(0,r.kt)("td",{parentName:"tr",align:null},"0 days 00:00:42.426406871")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REQUIREMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"37 days 02:50:22.500000"),(0,r.kt)("td",{parentName:"tr",align:null},"16 days 03:56:45.500000"),(0,r.kt)("td",{parentName:"tr",align:null},"60 days 02:39:39.606995949"),(0,r.kt)("td",{parentName:"tr",align:null},"9 days 11:13:27.270270270"),(0,r.kt)("td",{parentName:"tr",align:null},"2 days 00:14:04"),(0,r.kt)("td",{parentName:"tr",align:null},"22 days 12:32:27.522638402")))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"We hope you are as excited as we are.\nWe look forward to you joining our community to get your feedback and contributions."),(0,r.kt)("p",null,"Want to get started?\nHave a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake-playground"},"playground repository"),"."))}p.isMDXComponent=!0},1041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxplot-31a06458d77f65b37e3cb409e7eb93c4.png"},43677:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/processgraph-8ae502c7bf854c719980896c811a6f5d.png"}}]);