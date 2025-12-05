//  Eventos a implementar
// Connection
// chat:join
// chat:message
// chat:system
// chat:history

const { Server } = require("socket.io");

function setupChatSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  let messages = []; // Almacenar mensajes en memoria (puede ser reemplazado por una base de datos)

  io.on("connection", (socket) => {
    console.log("✅ New client connected:", socket.id);

    socket.emit("chat:history", messages);

    socket.on("chat:join", (username) => {
      console.log(`${username} joined the chat.`);
      socket.username = username;
      socket.emit("chat:system", `Welcome to the chat, ${username}!`);
      socket.broadcast.emit("chat:system", `${username} has joined the chat.`);
    });

    socket.on("chat:message", (msg) => {
      const messageData = {
        username: socket.username || "Anonymous",
        message: msg,
        timestamp: new Date(),
      };
      messages.push(messageData);
      io.emit("chat:message", messageData);
    });

    socket.on("chat:system", (sysMsg) => {
      const systemMessage = {
        username: "System",
        message: sysMsg,
        timestamp: new Date(),
      };
      messages.push(systemMessage);
      io.emit("chat:system", systemMessage);
    });

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
      if (socket.username) {
        socket.broadcast.emit(
          "chat:system",
          `${socket.username} has left the chat.`
        );
      }
    });
  });
}

module.exports = setupChatSocket;
