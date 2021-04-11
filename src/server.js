// src/server.js
const { Server } = require('boardgame.io/server');
const { Dilemma } = require('./Game');

const server = Server({ games: [Dilemma] });

server.run(process.env.PORT);