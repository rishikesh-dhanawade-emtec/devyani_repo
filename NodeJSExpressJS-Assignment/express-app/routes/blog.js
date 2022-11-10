//import express package
const express = require('express')

//import the database connection
const db = require('../database')

//import util.js
const utils = require('../utils')

//get the express router
const router = express.Router()

//get all blogs
router.get('/', (request, response) => {

    //get the connection
    const connection = db.openConnection()

    //query statement
    const statement = `select id, title, contents, status, categoryId from blog`

    //execute the query statement
    connection.query(statement, (error, blog) => {
        const result = utils.createResult(error, blog)
        response.send(result)

        connection.end()
    })
})

//get blog details by id
router.get('/:id', (request, response) => {

    //get the id
    const {id} = request.params

    //get the connection
    const connection = db.openConnection()

    //query statement
    const statement = `select id, title, contents, status, categoryId from blog where id = '${id}'`

    //execute the query statement
    connection.query(statement, (error, blog) => {
        const result = utils.createResult(error, blog)
        response.send(result)

        connection.end()
    })
})

//insert blog details
router.post('/', (request, response) => {

    //get the data from request.body
    const { title, contents, categoryId } = request.body

    //get the connection
    const connection = db.openConnection()

    //query statement
    const statement = `insert into blog (title, contents, categoryId) values ('${title}', '${contents}', '${categoryId}')`

    //execute the query statement
    connection.query(statement, (error, blog) => {
        const result = utils.createResult(error, blog)
        response.send(result)

        //open the connection
        connection.end()
    })

})

router.delete('/:id', (request, response) => {
    //get the id
    const {id} = request.params

    //get the connection
    const connection = db.openConnection()

    //query statement
    const statement = `delete from blog where id = '${id}'`

    //execute the query statement
    connection.query(statement, (error, blog) => {
        const result = utils.createResult(error, blog)
        response.send(result)

        connection.end()
    })
})

//update the blog by id with status
router.patch('/:id/:status', (request, response) => {

    //get the id, status
    const {id, status} = request.params

    //get the connection
    const connection = db.openConnection()

    //query statement
    const statement = `update blog set status = '${status}' where id = '${id}'`

    //execute the query statement
    connection.query(statement, (error, blog) => {
        const result = utils.createResult(error, blog)
        response.send(result)

        connection.end()
    })
})

module.exports = router