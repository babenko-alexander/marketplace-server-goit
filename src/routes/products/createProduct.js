const fs = require('fs');
const path = require('path');
const products = require('../../helpers/productsDB');


const productsFolder = path.resolve(__dirname, '../../../', 'data/products');

const saveNewProduct = (fileName, data, cb) => {
    const src = path.resolve(productsFolder, fileName);
    fs.writeFile(src, JSON.stringify(data), cb);

    debugger
};

const createProduct = (req, res) => {
    let body = [];

    const handleDataLoad = () => {
        const data = Buffer.concat(body).toString();
        // const data = JSON.stringify(Buffer.concat(body));
        // const productData = Object.assign({...products()},  Object.assign({...JSON.parse(data)}, { id: Date.now() }));
        const newProduct = Object.assign({}, { id: Date.now() }, JSON.parse(data));
        const productData = [...products()].concat([newProduct]);

        // const fileName = productData.name.toLowerCase() + productData.id;
        const fileName = 'all-products.json';


        saveNewProduct(fileName, productData, () => {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify(newProduct));
            res.end();
        });
    };

    req
        .on('data', (chunk) => {
            body.push(chunk);
        })
        .on('end', handleDataLoad);
};


module.exports = createProduct;
