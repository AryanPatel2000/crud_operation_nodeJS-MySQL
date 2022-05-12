const express = require('express')
const bodyParser = require('body-parser')

const app = express();

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

//parse request of content-type - application/json
app.use(bodyParser.json())

//define a root route
app.get('/', (req,res) => {
    res.send('Server Started')
})

//require user routes
const userRoutes = require('./routes/user.routes')

//using as middleware
app.use('/api/crud/users', userRoutes)

//listen for request
const server = app.listen(2500, () => {
    var host = server.address()
    var port = server.address().port

    console.log('Server running on port: ', port)
})