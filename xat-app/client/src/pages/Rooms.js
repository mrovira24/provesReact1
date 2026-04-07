// client/src/pages/Rooms.js
import { useNavigate } from "react-router-dom";

function Rooms() {
  const navigate = useNavigate();

  // Sales fixes (poden ser dinàmiques després)
  const rooms = ["general", "estudiants", "jocs"];

  const handleEnterRoom = (room) => {
    navigate(`/chat/${room}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tria una sala</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {rooms.map((room) => (
          <li key={room} style={{ margin: "10px 0" }}>
            <button
              onClick={() => handleEnterRoom(room)}
              style={{ padding: "10px 15px", cursor: "pointer" }}
            >
              {room.charAt(0).toUpperCase() + room.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;