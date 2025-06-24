require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const gitdata={
  "login": "raushanraj1499",
  "id": 145265932,
  "node_id": "U_kgDOCKiVDA",
  "avatar_url": "https://avatars.githubusercontent.com/u/145265932?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/raushanraj1499",
  "html_url": "https://github.com/raushanraj1499",
  "followers_url": "https://api.github.com/users/raushanraj1499/followers",
  "following_url": "https://api.github.com/users/raushanraj1499/following{/other_user}",
  "gists_url": "https://api.github.com/users/raushanraj1499/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/raushanraj1499/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/raushanraj1499/subscriptions",
  "organizations_url": "https://api.github.com/users/raushanraj1499/orgs",
  "repos_url": "https://api.github.com/users/raushanraj1499/repos",
  "events_url": "https://api.github.com/users/raushanraj1499/events{/privacy}",
  "received_events_url": "https://api.github.com/users/raushanraj1499/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Raushan",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-09-17T12:06:27Z",
  "updated_at": "2025-05-13T06:39:46Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('raushandotraj')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login at Chai aur Code</h1>')
})

app.get('/github', (req, res) => {
    res.json(gitdata);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
