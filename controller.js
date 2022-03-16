const console = require('console')
const path = require ('path')
// const express = require ('express')
const cloudinary = require('./cloudinary')
const schoolModel = require ('./model')

const createSchools = async(req, res) =>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        const newSchool = await schoolModel.create({
            name:req.body.name,
            location:req.body.location,
            year:req.body.year,
            image:req.file.path,
            cloud_url:result.secure_url,
            cloud_id:result.public_id

        })
            console.log(result)

        res.status(201).json({
            status: 'success',
            data: newSchool
        })
    }
    catch(error){
        res.status(404).json({
            status: 'failure',
            message: error.message
        })
    }
    }

    //getAll school info
        // const getAll = async (req, res)=>{
        //     try{
        //         const getAllSchool = await schoolModel.find()
        //         res.status(200).json({
        //             status:'success',
        //             data:{
        //                 getAllSchool
        //             }
        //         })
        //     }
        //     catch(error){
        //             console.log(error.message)
        //     }
        // }


//     //to getById school info
// const getAllId = async(req, res) =>{
//     try{
//         const getId = await schoolModel.findId(req.params.id)

//         res.status(201).json({
//             status:'success',
//             data:{
//                 getId
//             }
//         })
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }



    module.exports ={
        createSchools,
        // getAll
    }