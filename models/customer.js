const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerschema = new Schema({
    usr_name :{
        type: String
    },
    usr_email:{
        type: String
    },
    usr_password:{
        type: String
    },
    usr_is_deleted:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})

const User = mongoose.model('User', customerschema)
module.exports = User