const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminschema = new Schema({
    adm_firstname :{
        type: String
    },
    adm_lastname:{
        type: String
    },
    adm_email:{
        type: String
    }, 
    adm_password:{
        type: String
    },
    adm_country:{
        type: String
    },
    adm_city:{
        type: String
    },
    adm_mobile:{
        type: String
    },
}, {timestamps:true})

const Admin = mongoose.model('admin', adminschema)
module.exports = Admin