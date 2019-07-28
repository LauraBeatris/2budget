const express = require('express');
const http = require('http');
const path = require('path');

let app = express();
const port = process.env.PORT || '8080';

app.use(express.static(path.join(__dirname, 'build')));

app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));