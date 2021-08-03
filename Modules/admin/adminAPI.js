const Admin = require('../../models/admin')
const msg = require('../Customer/customerConstant')
const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken')


//register Customer
const register =  (req, res, next) => {
    bcrypt.hash("Admin@123", 10, (err, hashpass) => {
        if(err){
            res.json({
                error: err
            })
        }
        let admin =  new Admin({
            adm_firstname: "Admin",
            adm_lastname: "Admin",
            adm_email: "admin@gmail.com",
            adm_password: hashpass,
            adm_country: "India",
            adm_city : "ADI",
            adm_mobile: "987654321"
        })
        admin.save()
        .then(response => {
            res.json({
                message: msg.customerreg
            })
        })
        .catch(error => {
            res.json({
                message: msg.regcustomerError
            })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    //console.log(password , username)
    Admin.findOne({$or: [{adm_email:username}, {adm_mobile:username}]})
    .then(admin => {
        if(admin){
            bcrypt.compare(password, admin.adm_password, function(err, result){
              //console.log(password)
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: admin.adm_firstname}, 'ScreTEs', {expiresIn:'1h'})
                    res.json({
                        message: msg.login,
                        token: token,
                        "Name":admin.adm_firstname,
                        "Password":admin.adm_password
                    })
                }else{
                    res.json({
                        message: msg.loginError
                    })
                }
            })
        }
        else{
            res.json({
                message: msg.customernotFound
            })
        }
    })
}
module.exports = {
     register, login 
}