const http = require("http")
const hp = require("./hp.json");
const { stringify } = require("querystring");

// import data from "./hp.json" assert {type: 'json'}  

const server = http.createServer((request, response) => {
    if(request.url === "/"){
        // response.writeHead(200, {"Content-Type": "text/plain"})
        response.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Aplicaciones Hibridas</title></head><body>')
        response.write("<h1>Home Page</h1>");
        response.write("<p>End</p></body> </html>");
        response.end();
    }else if(request.url === "/api"){
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify(hp))
    }
});

server.listen(3000, () => {
    console.log("server running on port 3000")
})