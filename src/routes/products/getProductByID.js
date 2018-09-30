const products = require('../../helpers/productsDB');

const getProduct = (request, response) => {

    const routeData = request.url.split('/').slice(1);
    const id = routeData[1];

    const product = products().find(el => el.id === +id);

    response.writeHead(200, {"Content-Type": "application/json"});

    if (product) {
        response.write(JSON.stringify(product));
    } else {
        response.write(JSON.stringify('There is no product with id: '+ id));
    }


    response.end();

};

module.exports = getProduct;
