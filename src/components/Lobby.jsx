// src/components/Lobby.jsx
import { useState } from 'react';

export default function Lobby({ onCreate, onJoin }) {
  const [name, setName] = useState('');
  const [lobby, setLobby] = useState('');

  return (
    <div className="lobby-form">
      <h2>Welcome to the DubMaster frontend.</h2>
      <input
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Lobby ID"
        value={lobby}
        onChange={(e) => setLobby(e.target.value)}
      />
      <button onClick={() => onCreate(name, lobby)}>Create</button>
      <button onClick={() => onJoin(name, lobby)}>Join</button>
    </div>
  );
}
