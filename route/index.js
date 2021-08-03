const customerRoute = require('../modules/Customer/customerRoute')
const productRoute = require('../modules/Product/productRoute')
const adminRoute = require('../modules/admin/adminRoute')
module.exports = (app) => {

    // employee route 
    app.use('/shop', [customerRoute])
    app.use('/shop', [productRoute])
    app.use('/', adminRoute)
}