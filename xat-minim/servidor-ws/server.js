const { WebSocketServer } = require('ws');

// Creem el servidor al port 8080
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Nou client connectat!');

  // Quan rebem un missatge d'un client
  ws.on('message', (data) => {
    const message = data.toString();
    console.log(`Rebut: ${message}`);

    // Reenviem el missatge a TOTS els clients connectats
    wss.clients.forEach((client) => {
      if (client.readyState === 1) { // 1 significa que la connexió està oberta
        client.send(message);
      }
    });
  });

  ws.on('close', () => console.log('Client desconnectat'));
});

console.log('Servidor WebSocket funcionant a ws://localhost:8080');
