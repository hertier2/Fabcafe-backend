const cloudinary = require ('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.Cloud_name,
    api_key: process.env.API_key,
    api_secret: process.env.CLOUDINARY_URL
});

const uploadFile = async(file, res) =>{
    try{
        const result = await cloudinary.uploader.upload(file.path);
        return result
    }catch(err){
        return res.status(500).send(err)
    }
}

module.exports =  uploadFile ;
