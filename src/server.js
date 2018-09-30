const http = require('http');
// const url = require('url');
const morgan = require('morgan');
const router = require('./routes/router');

const logger = morgan('combined');


const startServer = port => {

    const server = http.createServer((request, response) => {
        // const parsedUrl = url.parse(request.url);
        const routeData = request.url.split('/').slice(1);

        // const func = () => {
        // switch (routeData.length) {
        //     case 0:
        //         return router.default;
        //     case 1:
        //         return router[routeData[0]] || router.default;
        //     case 2:
        //         return router[routeData[0]] || router.default;
        //     default:
        //         return router.default;
        // }
        // }

        const func = (routeData[1] === 'create') ? router['/'+routeData[0]+'/'+routeData[1]] : router['/'+routeData[0]] || router.default;
        // const func = router['/'+routeData[0]] || router.default;

        logger(request, response, () => func(request, response));

    });

    server.listen(port);
};

module.exports = startServer;