const Product = require("../models/product");
const uploadFile = require("../configures/cloud");

const createProduct = async (req, res) => {
    const response = await uploadFile(req.file, res);
    try{
        const newProduct = await Product.create({
            image: response.secure_url,
        name: req.body.name,
            description: req.body.description,
            price:req.body.price
        });
        res.status(200).json({ status: 'success', message: 'your product was created successfully', newProduct})
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

const updateProduct = async (req, res) => {
    try{
        const Product = await Product.findById({ _id: req.params.id})
        if(!user){
            res.status(404).json({
                status: 'failed',
                message: 'Product not found'
            });
        }
        const newProduct = await Product.findByIdAndUpdate( req.params.id, {
            image: response.secure_url,
            name: req.body.name,
                description: req.body.description,
                price:req.body.price
        });
        res.status(200).json({
            message:'Product updated successfully',
            user
        })
    } catch(err){
        res.status(400).json({
            status: 'failed',
            message: err.message
        })
    }
}

const getProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products)
    } catch(err){
        res.status(400).json({message: err.message})
    }
}

const deleteProduct = async (req, res) => {
    try{
        const Product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            message: 'Product deleted successfully'
        })
    } catch(err){
        res.status(400).json({
            status: 'failed',
            message: err.message
        })
    }
}


module.exports = { createProduct,updateProduct,deleteProduct, getProducts}