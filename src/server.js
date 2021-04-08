// src/server.js
const { Server } = require('boardgame.io/server');
const { Pandemic } = require('./Game');

const server = Server({ games: [Pandemic] });

server.run(process.env.PORT);