
const issues=require("./data.js");

const issuesWithUpdatedApiUrl=[]
let mapIssues=issues.map(issue=>{
if (issue.includes("api.github.com"){
  issue.replace("api.github.com",'api-v2.github.com')
  
}
})




















