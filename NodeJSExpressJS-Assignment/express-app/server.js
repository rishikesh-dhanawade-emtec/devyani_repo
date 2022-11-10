//import express package
const express = require('express')

//create an express application
const app = express()

//to read the contents from request.body
app.use(express.json())

//add the routes in the application
const routerBlog = require('./routes/blog')
const routerUser = require('./routes/auth')
const routerCategory = require('./routes/category')

app.use('/blog', routerBlog)
app.use('/user', routerUser)
app.use('/category', routerCategory)

//start an express application
app.listen(3000, '0.0.0.0', () => {
    console.log(`Server started listening on port 3000`);
})