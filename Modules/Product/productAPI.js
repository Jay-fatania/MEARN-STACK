const Product = require("../../models/product")
const msg = require('../../utils/constant')
const productConst = require('./productConstant')

//show product details list
const showProduct = (req, res, next) => {
    Product.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: productConst.ShowProductError
        })
    })
}

//show single product detail
const showoneProduct = (req, res, next) =>{ 
    let ProductID  = req.params.id
    Product.findById(ProductID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: productConst.ShowOneProductError
        })
    })
}

//add new product
const addProduct = (req, res, next) => {
    let product = new Product({
        name: req.body.name,
        company_name: req.body.cmp_name,
        type: req.body.type,
        size: req.body.size,
        price: req.body.price
    })
    product.save()
    .then(response => {
        res.json({
            message: productConst.AddProductSuccess
        })
    })
    .catch(error => {
        res.json({
            message: productConst.AddProductError
        })
    })
    }

    //update new product
const updateProduct = (req, res, next) => {
    let ProductID  = req.params.id
    let updateproduct = {
        name: req.body.name,
        company_name: req.body.cmp_name,
        type: req.body.type,
        size: req.body.size,
        price: req.body.prize
    }
    if(req.file){
        product.image = req.file.path
    }
    Product.findByIdAndUpdate(ProductID, {$set: updateproduct})
    .then(() => {
        res.json({
            message: productConst.updateProduct
        })
    })
    .catch(error => {
        res.json({
            message: productConst.updateDataError
        })
    })
    }

    //delete product
const deleteProduct = (req, res, next) =>{
    let ProductID  = req.params.id

    Product.findByIdAndRemove(ProductID)
    .then(() => {
        res.json({
            message: productConst.deleteProductSuccess
        })
    })
    .catch(error => {
        res.json({
            message:  productConst.deleteProductError
        })
    })
}

module.exports ={
    showProduct, showoneProduct, addProduct, updateProduct, deleteProduct 
}