const mongoose = require('mongoose')

var mongoURL = 'mongodb://localhost:27017'

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',()=>{
    console.log('Mongo Database Connected successfully')
})

db.on('error',()=>{
    console.log('Mongo Database not connected')
})

module.exports = mongoose