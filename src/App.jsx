import React from 'react';
import './App.css';
import PromptGuessingMode from './components/PromptGuessingMode.jsx';
import VoiceBattleMode from './components/VoiceBattleMode.jsx';

function App() {
  return (
    <div className="app-container">
      <h1>DubMaster</h1>
      <p>Welcome to the DubMaster frontend.</p>
      <PromptGuessingMode />
      <VoiceBattleMode />
    </div>
  );
}

export default App;
