//install mysql package
const mysql = require('mysql')

//create the database connection
function openConnection() {

    //create the connection
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        database: 'blog_db',
        user: 'root',
        password: 'root',
    })

    //open the connection
    connection.connect()

    return connection
}

module.exports = {
    openConnection
}