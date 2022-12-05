//import express package
const express = require('express')

//import the database connection
const db = require('../database')

//import util.js
const utils = require('../utils')

//get the express router
const router = express.Router()

//get all category
router.get('/', (request, response) => {

    //get the connection
    const connection = db.openConnection()

    //query statement
    const statement = `select id, title from category`

    //execute the query statement
    connection.query(statement, (error, blog) => {
        const result = utils.createResult(error, blog)
        response.send(result)

        connection.end()
    })
})

//add a new category
router.post('/', (request, response) => {

    //get the data from request.body
    const {title} = request.body

    //get the connection
    const connection = db.openConnection()

    //query statement
    const statement = `insert into category (title) values ('${title}')`

    //execute the query statement
    connection.query(statement, (error, blog) => {
        const result = utils.createResult(error, blog)
        response.send(result)

        connection.end()
    })
})

//update a category
router.put('/:id', (request, response) => {

    //get the data from request.body
    const {id} = request.params
    const {title} = request.body

    //get the connection
    const connection = db.openConnection()

    //query statement
    const statement = `update category set title = '${title}' where id = '${id}'`

    //execute the query statement
    connection.query(statement, (error, blog) => {
        const result = utils.createResult(error, blog)
        response.send(result)

        connection.end()
    })
})

//delete category
router.delete('/:id', (request, response) => {

    //get the id
    const {id} = request.params

    //get the connection
    const connection = db.openConnection()

    //query statement
    const statement = `delete from category where id = '${id}'`

    //execute the query statement
    connection.query(statement, (error, blog) => {
        const result = utils.createResult(error, blog)
        response.send(result)

        connection.end()
    })
})

module.exports = router