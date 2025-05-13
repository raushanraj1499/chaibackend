require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("raushan1499")
})

app.get('/login',(req,res) => {
    res.send('<h1>Please login at this website')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Welcome to my channel on youtube.')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}`)
})
