const joi = require('joi')
const regExp = require('../utils/regexp')
const schema = {
    user: joi.object({
        usr_name : joi.string().min(2).max(100).required(),
        usr_email : joi.string().email().required().pattern(regExp.emailRegEx),
        usr_password : joi.string().pattern(regExp.passRegEx),
    }),
} 

module.exports = schema
