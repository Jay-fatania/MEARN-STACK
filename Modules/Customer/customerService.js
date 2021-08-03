const Customer = require('../../models/customer')
const msg = require('./customerConstant')
const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken')
const constant = require('../../utils/constant')

//show customer details list
const showcustomer = (req, res, next) => {
    Customer.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:  msg.customerlist
        })
    })
}

//show single Customer detail
const showone = (req, res, next) =>{
    let CustomerID  = req.params.id
    Customer.findById(CustomerID)
    .then(response => {
        res.json({
            response
        }) 
    })
    .catch(error => {
        res.json({
            message: msg.onecustomer
        })
    })
}

//store new customer
const addCustomer = (req, res, next) => {
    bcrypt.hash(req.body.usr_password, 10, (err, hashpass) => {
        if(err){
            res.json({
                error: err
            })
        }
    let customer = new Customer({
        usr_name: req.body.usr_name,
        usr_email: req.body.usr_email,
        usr_password: hashpass,
    })
    customer.save()
    .then(response => {
        res.json({
            message: msg.customeradded
        })
    })
    .catch(error => {
        res.json({
            message: msg.addcustomerError
        })
    })
    }
)}

//update customer 
const updateCustomer = (req, res, next) => {
    bcrypt.hash(req.body.usr_password, 10, (err, hashpass) => {
        if(err){
            res.json({
                error: err
            })
        }
    let CustomerID = req.body.customerID

    let updateData = {
        usr_name: req.body.usr_name,
        usr_email: req.body.usr_email,
        usr_password: hashpass,     
    }

    Customer.findOneAndUpdate(CustomerID, {$set: updateData})
    .then(() => {
        res.json({
            message: msg.updateData
        })
    })
    .catch(error => {
        res.json({
            message: msg.updateDataError
        })
    })
}
)}
//delete customer
const deleteCustomer = (req, res, next) =>{
    let CustomerID = req.params.id

        Customer.findByIdAndRemove(CustomerID)
        .then(() => {
            res.json({
                message: msg.deletecustomer
            })
        })
        .catch(error => {
            res.json({
                message:  msg.deletecustomerError
            })
        })    
    }

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    //console.log(password , username)
    Customer.findOne({$or: [{usr_email:username}, {usr_mobile:username}]})
    .then(customer => {
        if(customer){
            bcrypt.compare(password, customer.usr_password, function(err, result){
                //console.log(password)
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: customer.usr_firstname}, 'ScreTEs', {expiresIn:'1h'})
                    res.json({
                        message: msg.login,
                        token: token
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
module.exports ={
    showcustomer, showone, addCustomer, updateCustomer, deleteCustomer, login 
}