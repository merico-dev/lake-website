"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8291],{20921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(61839);const l={title:"Webhook",description:"Webhook Plugin\n"},o=void 0,i={unversionedId:"Plugins/webhook",id:"Plugins/webhook",title:"Webhook",description:"Webhook Plugin\n",source:"@site/docs/Plugins/webhook.md",sourceDirName:"Plugins",slug:"/Plugins/webhook",permalink:"/docs/Plugins/webhook",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/webhook.md",tags:[],version:"current",frontMatter:{title:"Webhook",description:"Webhook Plugin\n"},sidebar:"docsSidebar",previous:{title:"Tapd",permalink:"/docs/Plugins/tapd"},next:{title:"Live Demo",permalink:"/docs/LiveDemo"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Creating webhooks in DevLake",id:"creating-webhooks-in-devlake",level:2},{value:"Add a new webhook",id:"add-a-new-webhook",level:3},{value:"Register a deployment",id:"register-a-deployment",level:2},{value:"Deployment - Sample API Calls",id:"deployment---sample-api-calls",level:3},{value:"Deployment - A real-world example in CircleCI",id:"deployment---a-real-world-example-in-circleci",level:4},{value:"Incident / Issue",id:"incident--issue",level:2},{value:"Update or Create Issues",id:"update-or-create-issues",level:4},{value:"Close Issues (Optional)",id:"close-issues-optional",level:4},{value:"Issues Sample API Calls",id:"issues-sample-api-calls",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"An Incoming Webhook allows users to actively push data to DevLake. It's particularly useful when DevLake is missing the plugin that pulls data from your DevOps tool."),(0,r.kt)("p",null,"When you create an Incoming Webhook within DevLake, DevLake generates a unique URL. You can post JSON payloads to this URL to push data to DevLake."),(0,r.kt)("p",null,"As of v0.14.0, users can push incidents and deployments required by DORA metrics to DevLake via Incoming Webhooks."),(0,r.kt)("h2",{id:"creating-webhooks-in-devlake"},"Creating webhooks in DevLake"),(0,r.kt)("h3",{id:"add-a-new-webhook"},"Add a new webhook"),(0,r.kt)("p",null,'To add a new webhook, go to the "Data Connections" page in config-ui and select "Issue/Deployment Incoming/Webhook".\n',(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/jq6lzg1.png",alt:null})),(0,r.kt)("p",null,"We recommend that you give your webhook connection a unique name so that you can identify and manage where you have used it later."),(0,r.kt)("p",null,'After clicking on the "Generate POST URL" button, you will find four webhook URLs. Copy the ones that suit your usage into your CI or issue tracking systems. You can always come back to the webhook page to copy the URLs later on.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/jBMQnjt.png",alt:null})),(0,r.kt)("h2",{id:"register-a-deployment"},"Register a deployment"),(0,r.kt)("p",null,"You can copy the generated deployment curl commands to your CI/CD script to post deployments to Apache DevLake. Below is the detailed payload schema:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"commit_sha"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the sha of the deployment commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"repo_url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the repo URL of the deployment commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"environment"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"the environment this deployment happens. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"PRODUCTION")," ",(0,r.kt)("inlineCode",{parentName:"td"},"STAGING")," ",(0,r.kt)("inlineCode",{parentName:"td"},"TESTING")," ",(0,r.kt)("inlineCode",{parentName:"td"},"DEVELOPMENT"),". ",(0,r.kt)("br",null),"The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"PRODUCTION"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"start_time"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Time. Eg. 2020-01-01T12:00:00+00:00",(0,r.kt)("br",null)," No default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"end_time"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"Time. Eg. 2020-01-01T12:00:00+00:00",(0,r.kt)("br",null),"The default value is the time when DevLake receives the POST request.")))),(0,r.kt)("h3",{id:"deployment---sample-api-calls"},"Deployment - Sample API Calls"),(0,r.kt)("p",null,"Sample CURL to post deployments to DevLake. The URL ",(0,r.kt)("inlineCode",{parentName:"p"},"https://sample-url.com/api/plugins/webhook/1/deployments")," should be replaced with the actual URL copied from your Config UI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl https://sample-url.com/api/plugins/webhook/1/deployments -X \'POST\' -d \'{\n    "commit_sha":"015e3d3b480e417aede5a1293bd61de9b0fd051d",\n    "repo_url":"https://github.com/apache/incubator-devlake/",\n    "environment":"PRODUCTION",\n    "start_time":"2020-01-01T12:00:00+00:00",\n    "end_time":"2020-01-02T12:00:00+00:00"\n  }\'\n')),(0,r.kt)("p",null,"If you have set a username/password for Config UI, you need to add the username and password to the following curl to register a ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl https://sample-url.com/api/plugins/webhook/1/deployments -X \'POST\' -u \'username:password\' -d \'{\n    "commit_sha":"015e3d3b480e417aede5a1293bd61de9b0fd051d",\n    "repo_url":"https://github.com/apache/incubator-devlake/",\n    "environment":"PRODUCTION",\n    "start_time":"2020-01-01T12:00:00+00:00",\n    "end_time":"2020-01-02T12:00:00+00:00"\n  }\'\n')),(0,r.kt)("p",null,"Read more in ",(0,r.kt)("a",{parentName:"p",href:"https://sample-url.com/api/swagger/index.html#/plugins%2Fwebhook/post_plugins_webhook__connectionId_deployments"},"Swagger"),". "),(0,r.kt)("h4",{id:"deployment---a-real-world-example-in-circleci"},"Deployment - A real-world example in CircleCI"),(0,r.kt)("p",null,"The following demo shows how to post \"deployments\" to DevLake from CircleCI. In this example, the CircleCI job 'deploy' is used to do deployments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'version: 2.1\n\njobs:\n  build:\n    docker:\n      - image: cimg/base:stable\n    steps:\n      - checkout\n      - run:\n          name: "build"\n          command: |\n            echo Hello, World!\n\n  deploy:\n    docker:\n      - image: cimg/base:stable\n    steps:\n      - checkout\n      - run:\n          name: "deploy"\n          command: |\n            # The time a deploy started\n            start_time=`date \'+%Y-%m-%dT%H:%M:%S%z\'`\n\n            # Some deployment tasks here ...\n            echo Hello, World!\n\n            # Send the request to DevLake after deploy\n            # The values start with a \'$CIRCLE_\' are CircleCI\'s built-in variables\n            curl https://sample-url.com/api/plugins/webhook/1/deployments -X \'POST\' -d "{\n              \\"commit_sha\\":\\"$CIRCLE_SHA1\\",\n              \\"repo_url\\":\\"$CIRCLE_REPOSITORY_URL\\",\n              \\"start_time\\":\\"$start_time\\"\n            }"\n\nworkflows:\n  build_and_deploy_workflow:\n    jobs:\n      - build\n      - deploy\n')),(0,r.kt)("h2",{id:"incident--issue"},"Incident / Issue"),(0,r.kt)("p",null,"If you want to collect issue or incident data from your system, you can use the two webhooks for issues. "),(0,r.kt)("h4",{id:"update-or-create-issues"},"Update or Create Issues"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://sample-url.com/api/plugins/webhook/1/issues")),(0,r.kt)("p",null,"needs to be called when an issue or incident is created. The body  should be a JSON and include columns as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Keyname"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"board_key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"issue belongs to which board/project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"issue's URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"issue_key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"issue's key, needs to be unique in a connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"title"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"description"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"epic_key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"in which epic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"type, such as bug/incident/epic/...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"status"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"issue's status. Must be one of ",(0,r.kt)("inlineCode",{parentName:"td"},"TODO")," ",(0,r.kt)("inlineCode",{parentName:"td"},"DONE")," ",(0,r.kt)("inlineCode",{parentName:"td"},"IN_PROGRESS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"original_status"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"status in your system, such as created/open/closed/...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"story_point"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"resolution_date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"date, Format should be 2020-01-01T12:00:00+00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"created_date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"date, Format should be 2020-01-01T12:00:00+00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"updated_date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"date, Format should be 2020-01-01T12:00:00+00:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"lead_time_minutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"how long from this issue accepted to develop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"parent_issue_key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"priority"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"original_estimate_minutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"time_spent_minutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"time_remaining_minutes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"creator_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"the user id of the creator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"creator_name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"the user name of the creator, it will just be used to display")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"assignee_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"assignee_name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"severity"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"component"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f No"),(0,r.kt)("td",{parentName:"tr",align:null},"which component is this issue in.")))),(0,r.kt)("p",null,"More information about these columns at ",(0,r.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema#domain-1---issue-tracking"},"DomainLayerIssueTracking"),"."),(0,r.kt)("h4",{id:"close-issues-optional"},"Close Issues (Optional)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://sample-url.com/api/plugins/webhook/1/issue/:boardKey/:issueId/close")),(0,r.kt)("p",null,"needs to be called when an issue or incident is closed. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},":boardKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},":issueId")," with specific strings and keep the body empty."),(0,r.kt)("h3",{id:"issues-sample-api-calls"},"Issues Sample API Calls"),(0,r.kt)("p",null,"Sample CURL for Issue Creating :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl https://sample-url.com/api/plugins/webhook/1/issues -X \'POST\' -d \'{"board_key":"DLK","url":"","issue_key":"DLK-1234","title":"a feature from DLK","description":"","epic_key":"","type":"BUG","status":"TODO","original_status":"created","story_point":0,"resolution_date":null,"created_date":"2020-01-01T12:00:00+00:00","updated_date":null,"lead_time_minutes":0,"parent_issue_key":"DLK-1200","priority":"","original_estimate_minutes":0,"time_spent_minutes":0,"time_remaining_minutes":0,"creator_id":"user1131","creator_name":"Nick name 1","assignee_id":"user1132","assignee_name":"Nick name 2","severity":"","component":""}\'\n')),(0,r.kt)("p",null,"Sample CURL for Issue Closing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl http://127.0.0.1:4000/api/plugins/webhook/1/issue/DLK/DLK-1234/close -X 'POST'\n")),(0,r.kt)("p",null,"Read more in Swagger: ",(0,r.kt)("a",{parentName:"p",href:"https://sample-url.com/api/swagger/index.html#/plugins%2Fwebhook/post_plugins_webhook__connectionId_issues"},"https://sample-url.com/api/swagger/index.html#/plugins%2Fwebhook/post_plugins_webhook__connectionId_issues"),"."))}m.isMDXComponent=!0}}]);