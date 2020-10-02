const express = require('express');
const server = express();

const actionRouter = require('./routers/actionRouter');
const projectRouter = require('./routers/projectRouter');

server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h2>Hello<h2>');
});

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

module.exports = server;
