const fs = require('fs');
const path = require('path');

const usersFolder = path.resolve(__dirname, '../../../', 'data/users');

const saveNewUser = (fileName, data, cb) => {
    const src = path.resolve(usersFolder, fileName + '.json');
    fs.writeFile(src, JSON.stringify(data), cb);
};

const createUser = (req, res) => {
    let body = [];

    const handleDataLoad = () => {
        const data = Buffer.concat(body).toString();
        // const data = JSON.stringify(Buffer.concat(body));
        const userData = Object.assign({}, JSON.parse(data), { id: Date.now() });

        const fileName = userData.name.toLowerCase() + userData.id;


        saveNewUser(fileName, userData, () => {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify(userData));
            res.end();
        });
    };

    req
        .on('data', (chunk) => {
            body.push(chunk);
        })
        .on('end', handleDataLoad);
};


module.exports = createUser;
