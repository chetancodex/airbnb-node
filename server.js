const http  = require('http');
const app = require('./app');
const port = process.env.PORT || 6969;
const server = http.createServer(app);
console.log(`app is running in port ${port}`)
server.listen(port)