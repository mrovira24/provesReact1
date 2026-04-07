// client/src/pages/Chat.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../socket";

function Chat() {
  const { roomId } = useParams(); // ve de /chat/:roomId
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Carregar usuari des de localStorage
  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) setUsername(user);
  }, []);

  // Unir-se a la sala
  useEffect(() => {
    if (!username) return;
    socket.emit("joinRoom", { username, room: roomId });
  }, [username, roomId]);

  // Rebre missatges
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off("message");
  }, []);

  // Enviar missatge
  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    socket.emit("sendMessage", {
      username,
      room: roomId,
      text: message,
    });

    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sala: {roomId}</h2>

      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          overflowY: "scroll",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map((m, i) => (
          <div key={i}>
            <strong>{m.user}:</strong> {m.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escriu un missatge..."
          style={{ width: "70%", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 12px" }}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Chat;