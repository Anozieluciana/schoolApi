
require('dotenv').config();
const mongoose = require ('mongoose')

const url = process.env.LOCAL_DB

mongoose.connect(url).then(()=>{
    console.log('connecteted successfully')
}).catch((error)=>{
    console.log('failed to connect')
})

// module.exports = mongoose