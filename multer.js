const multer = require ('multer')
const path = require ('path')


const storage = multer.diskStorage({
    destination:(req,file, cb)=>{
        cb(null, './upload')
    },
    filename: (req, file, cb) =>{
        cb(null, 'originalname ')
    }
})

const fileFilter = (req, file, cb) =>{
    const ext = path.extname(file.originalname)
    if(ext ==="jpeg" || ext === "jpg" || ext ==='png'){
        cb(null, new Error ('unsorpoted image'), false)
    }else{
        cb(null, true)
    }
}
const imageUploader = multer({
    storage : storage,
    filefilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 *20
    }

}).single("image")

module.exports = imageUploader

