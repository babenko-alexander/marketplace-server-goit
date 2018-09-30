const products = require('../../helpers/productsDB');

const getProducts = (request, response) => {

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(products()));
    response.end();

};


module.exports = getProducts;
