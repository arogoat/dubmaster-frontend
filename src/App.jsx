import { useState } from 'react';
import './App.css';
import Lobby from './components/Lobby';

export default function App() {
  const [username, setUsername] = useState('');
  const [lobbyId, setLobbyId] = useState('');
  const [inLobby, setInLobby] = useState(false);
  const [selectedMode, setSelectedMode] = useState('');

  const handleJoin = (name, id) => {
    setUsername(name);
    setLobbyId(id);
    setInLobby(true);
  };

  const selectMode = (mode) => {
    setSelectedMode(mode);
    // TODO: emit do serwera, jeśli trzeba
  };

  return (
    <div className="app-container">
      <h1>DubMaster 🎙️</h1>

      {!inLobby ? (
        <Lobby onJoin={handleJoin} />
      ) : (
        <div>
          <h2>Lobby: {lobbyId}</h2>
          <p>Gracz: {username}</p>
          <p>Wybierz tryb gry:</p>
          <button onClick={() => selectMode('prompt_guess')}>Prompt Guessing</button>
          <button onClick={() => selectMode('voice_battle')}>Voice Battle</button>
        </div>
      )}
    </div>
  );
}
