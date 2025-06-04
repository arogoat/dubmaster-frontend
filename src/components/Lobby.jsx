import { useState } from 'react';

export default function Lobby({ socket, onJoin }) {
  const [username, setUsername] = useState('');
  const [lobbyId, setLobbyId] = useState('');

  const handleJoin = () => {
    if (!username || !lobbyId) return alert('Podaj nazwę i ID lobby');
    socket.emit('join_lobby', { username, lobbyId });
    onJoin(username, lobbyId);
  };

  const handleCreate = () => {
    if (!username || !lobbyId) return alert('Podaj nazwę i ID lobby');
    socket.emit('create_lobby', { username, lobbyId });
    onJoin(username, lobbyId);
  };

  return (
    <div className="lobby">
      <h2>Lobby</h2>
      <input
        type="text"
        placeholder="Nazwa użytkownika"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="ID Lobby"
        value={lobbyId}
        onChange={(e) => setLobbyId(e.target.value)}
      />
      <button onClick={handleCreate}>Stwórz Lobby</button>
      <button onClick={handleJoin}>Dołącz do Lobby</button>
    </div>
  );
}
