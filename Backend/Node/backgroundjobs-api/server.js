const app = require("./index.js");
const setupChatSocket = require("./sockets/chat.js");
const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log("App is listening in port: " + port);
});

setupChatSocket(server);
