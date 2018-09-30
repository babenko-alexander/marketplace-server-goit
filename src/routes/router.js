const mainRoute = require('./main/main');
const getProducts = require('./products/getProducts');
const getProduct = require('./products/getProductByID');
const createProduct = require('./products/createProduct');

const createUser = require('./users/createUser');


const router = {
    '/products': getProducts,
    '/product': getProduct,
    '/product/create': createProduct,
    '/user/create': createUser,
    default: mainRoute
};

module.exports = router;