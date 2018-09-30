const path = require('path');
const fs = require('fs');

const products = () => {
    const dbPath = path.join(__dirname, '../../data/products/all-products.json');
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
};

module.exports = products;