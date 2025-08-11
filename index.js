const http = require('http');

const server = http.createServer();

server.on('request' , (request ,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify([{message : "Hello world!"} , {name : "AZ"}]))
});

server.listen(3000 , () => {
    console.log("Server is runing on port 3000!");
})