const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = require('./app');
const config = require('./config');

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message);
    });
});

const PORT = config.port || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});