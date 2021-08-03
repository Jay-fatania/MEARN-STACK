const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productschema = new Schema({
    name :{
        type: String
    },
    company_name:{
        type: String
    },
    type:{
        type: String
    },
    size:{
        type: String
    },
    price:{
        type: Number
    },
}, {timestamps:true})

const Product = mongoose.model('Product', productschema)
module.exports = Product