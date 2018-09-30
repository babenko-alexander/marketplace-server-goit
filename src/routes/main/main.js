const mainRoute = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Добро пожаловать! Это default-страница первой домашки!</h1>");
    response.end();
};

module.exports = mainRoute;
