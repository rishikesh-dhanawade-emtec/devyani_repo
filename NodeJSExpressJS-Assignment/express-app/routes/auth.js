//import express package
const express = require('express')

//import the database connection
const db = require('../database')

//import util.js
const utils = require('../utils')

//get the express router
const router = express.Router()

//import cryto-js package for password encryption
const crytoJS = require('crypto-js')

//register
router.post('/signup', (request, response) => {

    //get the data from request.body
    const {firstName, lastName, email, password} = request.body

    //get the connection
    const connection = db.openConnection()

    //encryption of password
    const encryptedPassword = crytoJS.SHA256(password)

    //query statement
    const statement = `insert into user (firstName, lastName, email, password) values ('${firstName}', '${lastName}', '${email}', '${encryptedPassword}')`

    //execute the query statement
    connection.query(statement, (error, user) => {
        const result = utils.createResult(error, user)
        response.send(result)

        //end the connection
        connection.end()
    })

})

//login
router.post('/signin', (request, response) => {

    //get the data from request.body
    const {email, password} = request.body

    //get the connection
    const connection = db.openConnection()

    //encryption of password
    const encryptedPassword = crytoJS.SHA256(password)

    //query statement
    const statement = `select firstName, lastName, email, password from user where email = '${email}' and password = '${encryptedPassword}'`

    //execute the query statement
    connection.query(statement, (error, user) => {
        const result = utils.createResult(error, user)
        response.send(result)

        //end the connection
        connection.end()
    })
})

module.exports = router