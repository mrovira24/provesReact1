const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

// Configuració de Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // React
    methods: ["GET", "POST"],
  },
});

// (Opcional) guardar usuaris per sala
const rooms = {}; 
// Exemple: { "general": ["Anna", "Joan"] }

io.on("connection", (socket) => {
  console.log("Usuari connectat:", socket.id);

  // 🔹 Unir-se a una sala
  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);

    // Guardar usuari
    if (!rooms[room]) rooms[room] = [];
    rooms[room].push(username);

    // Notificar a la sala
    io.to(room).emit("message", {
      user: "Sistema",
      text: `${username} ha entrat a la sala`,
    });

    // Enviar llista d'usuaris (extra)
    io.to(room).emit("roomUsers", rooms[room]);

    console.log(`${username} s'ha unit a ${room}`);
  });

  // 🔹 Rebre missatge
  socket.on("sendMessage", ({ username, room, text }) => {
    io.to(room).emit("message", {
      user: username,
      text,
    });
  });

  // 🔹 Desconnexió
  socket.on("disconnect", () => {
    console.log("Usuari desconnectat:", socket.id);
    // (Simplificat: no traiem usuari de rooms)
  });
});

// Ruta bàsica per provar servidor
app.get("/", (req, res) => {
  res.send("Servidor WebSocket funcionant 🚀");
});

// Iniciar servidor
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Servidor escoltant a http://localhost:${PORT}`);
});