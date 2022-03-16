const mongoose = require ('mongoose')

const schoolSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    createAt:{
        type: Date,
        default: new Date()
    },
    image:{
        type:String
    },
    cloud_id:{
        type:String
    },
    cloud_url:{
        type:String
    }

})

module.exports = mongoose.model('schoolcollection', schoolSchema)