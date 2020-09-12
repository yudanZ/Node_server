const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.headers);
    console.log(request.method);
    console.log(request.url);
    const user = {
        name: 'John',
        hobby: 'Skating'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
    //console.log(' I hear you! Thanks for the request');
});

server.listen(3000);