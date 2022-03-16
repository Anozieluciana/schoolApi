const imageUploader= require ("./multer")
const express = require ('express')
const mongoose = require ('mongoose')

const route = express.Router()

const {createSchools, getAll} = require('./controller')

//to create
route.post('/post',imageUploader, createSchools)

//to getall
// route.get('/all', getAll)


//to get1


module.exports = route