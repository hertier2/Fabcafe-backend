const express = require('express');
const router = express.Router();
const {createProduct, getProducts,deleteProduct,updateProduct} = require('../controllers/productController');
const upload = require('../middlewares/multer');
//const Authorization = require('../middlewares/authorisation');

router.post('/', upload.single("image"),   createProduct )
router.get('/products', getProducts )
router.put('/products/:id', updateProduct )
router.delete('/products/:id', deleteProduct )

module.exports = router;

//upload.single("image"),