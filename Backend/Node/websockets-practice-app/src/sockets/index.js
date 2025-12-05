const { Server } = require("socket.io");

const setupWebSocket = (server) => {
    const io = new Server(server);

    io.on("connection", (socket) => {
        console.log("A user connected:", socket.id);

        socket.on("joinGroup", (groupId) => {
            socket.join(groupId);
            console.log(`User ${socket.id} joined group ${groupId}`);
        });

        socket.on("sendMessage", (data) => {
            const { groupId, message } = data;
            io.to(groupId).emit("receiveMessage", message);
            console.log(`Message sent to group ${groupId}:`, message);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
};

module.exports = setupWebSocket;