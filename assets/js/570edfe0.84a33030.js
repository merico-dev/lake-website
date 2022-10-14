"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7812],{86228:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(87462),r=(t(67294),t(3905));t(61839);const i={title:"Grafana User Guide",sidebar_position:1,description:"Grafana User Guide\n"},l="Grafana",o={unversionedId:"UserManuals/GrafanaUserGuide",id:"version-v0.11/UserManuals/GrafanaUserGuide",title:"Grafana User Guide",description:"Grafana User Guide\n",source:"@site/versioned_docs/version-v0.11/UserManuals/GrafanaUserGuide.md",sourceDirName:"UserManuals",slug:"/UserManuals/GrafanaUserGuide",permalink:"/docs/v0.11/UserManuals/GrafanaUserGuide",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/UserManuals/GrafanaUserGuide.md",tags:[],version:"v0.11",sidebarPosition:1,frontMatter:{title:"Grafana User Guide",sidebar_position:1,description:"Grafana User Guide\n"},sidebar:"docsSidebar",previous:{title:"Kubernetes Setup",permalink:"/docs/v0.11/QuickStart/KubernetesSetup"},next:{title:"Advanced Mode",permalink:"/docs/v0.11/UserManuals/AdvancedMode"}},s={},d=[{value:"Contents",id:"contents",level:2},{value:'Logging In<a id="logging-in"></a>',id:"logging-in",level:2},{value:'Viewing All Dashboards<a id="viewing-all-dashboards"></a>',id:"viewing-all-dashboards",level:2},{value:'Customizing a Dashboard<a id="customizing-a-dashboard"></a>',id:"customizing-a-dashboard",level:2},{value:"1. Preview Area",id:"1-preview-area",level:3},{value:"2. Query Builder",id:"2-query-builder",level:3},{value:"3. Main Panel Toolbar",id:"3-main-panel-toolbar",level:3},{value:"4. Grafana Parameter Sidebar",id:"4-grafana-parameter-sidebar",level:3},{value:'Dashboard Settings<a id="dashboard-settings"></a>',id:"dashboard-settings",level:2},{value:'Provisioning a Dashboard<a id="provisioning-a-dashboard"></a>',id:"provisioning-a-dashboard",level:2},{value:'Troubleshooting DB Connection<a id="troubleshooting-db-connection"></a>',id:"troubleshooting-db-connection",level:2}],p={toc:d};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grafana"},"Grafana"),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/3789273/128533901-3107e9bf-c3e3-4320-ba47-879fe2b0ea4d.png",width:"450px"}),(0,r.kt)("p",null,"When first visiting Grafana, you will be provided with a sample dashboard with some basic charts setup from the database."),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Section"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Logging In"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#logging-in"},"View Section"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Viewing All Dashboards"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#viewing-all-dashboards"},"View Section"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Customizing a Dashboard"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#customizing-a-dashboard"},"View Section"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Dashboard Settings"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#dashboard-settings"},"View Section"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Provisioning a Dashboard"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#provisioning-a-dashboard"},"View Section"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Troubleshooting DB Connection"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#troubleshooting-db-connection"},"View Section"))))),(0,r.kt)("h2",{id:"logging-in"},"Logging In",(0,r.kt)("a",{id:"logging-in"})),(0,r.kt)("p",null,"Once the app is up and running, visit ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3002")," to view the Grafana dashboard."),(0,r.kt)("p",null,"Default login credentials are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Username: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"))),(0,r.kt)("h2",{id:"viewing-all-dashboards"},"Viewing All Dashboards",(0,r.kt)("a",{id:"viewing-all-dashboards"})),(0,r.kt)("p",null,"To see all dashboards created in Grafana visit ",(0,r.kt)("inlineCode",{parentName:"p"},"/dashboards")),(0,r.kt)("p",null,"Or, use the sidebar and click on ",(0,r.kt)("strong",{parentName:"p"},"Manage"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128534617-1992c080-9385-49d5-b30f-be5c96d5142a.png",alt:"Screen Shot 2021-08-06 at 11 27 08 AM"})),(0,r.kt)("h2",{id:"customizing-a-dashboard"},"Customizing a Dashboard",(0,r.kt)("a",{id:"customizing-a-dashboard"})),(0,r.kt)("p",null,"When viewing a dashboard, click the top bar of a panel, and go to ",(0,r.kt)("strong",{parentName:"p"},"edit")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128535505-a56162e0-72ad-46ac-8a94-70f1c7a910ed.png",alt:"Screen Shot 2021-08-06 at 11 35 36 AM"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Edit Dashboard Panel Page:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128540136-ba36ee2f-a544-4558-8282-84a7cb9df27a.png",alt:"grafana-sections"})),(0,r.kt)("h3",{id:"1-preview-area"},"1. Preview Area"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Top Left")," is the variable select area (custom dashboard variables, used for switching projects, or grouping data)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Top Right")," we have a toolbar with some buttons related to the display of the data:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"View data results in a table"),(0,r.kt)("li",{parentName:"ul"},"Time range selector"),(0,r.kt)("li",{parentName:"ul"},"Refresh data button"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The Main Area")," will display the chart and should update in real time")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Data should refresh automatically, but may require a refresh using the button in some cases")),(0,r.kt)("h3",{id:"2-query-builder"},"2. Query Builder"),(0,r.kt)("p",null,"Here we form the SQL query to pull data into our chart, from our database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ensure the ",(0,r.kt)("strong",{parentName:"p"},"Data Source")," is the correct database"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128545278-be4846e0-852d-4bc8-8994-e99b79831d8c.png",alt:"Screen Shot 2021-08-06 at 10 14 22 AM"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Format as Table"),", and ",(0,r.kt)("strong",{parentName:"p"},"Edit SQL")," buttons to write/edit queries as SQL"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128545197-a9ff9cb3-f12d-4331-bf6a-39035043667a.png",alt:"Screen Shot 2021-08-06 at 10 17 52 AM"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Main Area")," is where the queries are written, and in the top right is the ",(0,r.kt)("strong",{parentName:"p"},"Query Inspector")," button (to inspect returned data)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128545557-ead5312a-e835-4c59-b9ca-dd5c08f2a38b.png",alt:"Screen Shot 2021-08-06 at 10 18 23 AM"})))),(0,r.kt)("h3",{id:"3-main-panel-toolbar"},"3. Main Panel Toolbar"),(0,r.kt)("p",null,"In the top right of the window are buttons for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dashboard settings (regarding entire dashboard)"),(0,r.kt)("li",{parentName:"ul"},"Save/apply changes (to specific panel)")),(0,r.kt)("h3",{id:"4-grafana-parameter-sidebar"},"4. Grafana Parameter Sidebar"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change chart style (bar/line/pie chart etc)"),(0,r.kt)("li",{parentName:"ul"},"Edit legends, chart parameters"),(0,r.kt)("li",{parentName:"ul"},"Modify chart styling"),(0,r.kt)("li",{parentName:"ul"},"Other Grafana specific settings")),(0,r.kt)("h2",{id:"dashboard-settings"},"Dashboard Settings",(0,r.kt)("a",{id:"dashboard-settings"})),(0,r.kt)("p",null,"When viewing a dashboard click on the settings icon to view dashboard settings. Here are 2 important sections to use:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128555763-4d0370c2-bd4d-4462-ae7e-4b140c4e8c34.png",alt:"Screen Shot 2021-08-06 at 1 51 14 PM"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Variables"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create variables to use throughout the dashboard panels, that are also built on SQL queries")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128553157-a8e33042-faba-4db4-97db-02a29036e27c.png",alt:"Screen Shot 2021-08-06 at 2 02 40 PM"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON Model"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"json")," code here and save it to a new file in ",(0,r.kt)("inlineCode",{parentName:"li"},"/grafana/dashboards/")," with a unique name in the ",(0,r.kt)("inlineCode",{parentName:"li"},"lake")," repo. This will allow us to persist dashboards when we load the app")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3789273/128553176-65a5ae43-742f-4abf-9c60-04722033339e.png",alt:"Screen Shot 2021-08-06 at 2 02 52 PM"})))),(0,r.kt)("h2",{id:"provisioning-a-dashboard"},"Provisioning a Dashboard",(0,r.kt)("a",{id:"provisioning-a-dashboard"})),(0,r.kt)("p",null,"To save a dashboard in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lake")," repo and load it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a dashboard in browser (visit ",(0,r.kt)("inlineCode",{parentName:"li"},"/dashboard/new"),", or use sidebar)"),(0,r.kt)("li",{parentName:"ol"},"Save dashboard (in top right of screen)"),(0,r.kt)("li",{parentName:"ol"},"Go to dashboard settings (in top right of screen)"),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("em",{parentName:"li"},"JSON Model")," in sidebar"),(0,r.kt)("li",{parentName:"ol"},"Copy code into a new ",(0,r.kt)("inlineCode",{parentName:"li"},".json")," file in ",(0,r.kt)("inlineCode",{parentName:"li"},"/grafana/dashboards"))),(0,r.kt)("h2",{id:"troubleshooting-db-connection"},"Troubleshooting DB Connection",(0,r.kt)("a",{id:"troubleshooting-db-connection"})),(0,r.kt)("p",null,"To ensure we have properly connected our database to the data source in Grafana, check database settings in ",(0,r.kt)("inlineCode",{parentName:"p"},"./grafana/datasources/datasource.yml"),", specifically:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secureJsonData/password"))))}u.isMDXComponent=!0}}]);