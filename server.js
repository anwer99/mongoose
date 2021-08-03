const express = require('express')
const createAndSaveUser=require("./config/connect")
const search=require("./config/connect")

const app = express()
app.use(express.json())


//Create and save User function
//search.createAndSaveUser()

//Find User ByName, Food, ID function

search.findUser(['Citron', 'Ananas'], 'ALBERTO')

//Update User

search.findUserAndUpdate('ALBERTO')

//Delete User

search.findUserAndDelete('60e0509b2277323960b6b4f0')

//Delete All User

search.findUserAndRemove('ALBERTO')

//Get Specific user

search.chainQuery()





const port = process.env.PORT || 5000
app.listen(port, err => {
    err
        ? console.log(err)
        : console.log(`the server is running on http://localhost:${port}`)
})