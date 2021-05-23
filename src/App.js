import { Client } from 'boardgame.io/react';
import { Dilemma } from './Game';
import { DilemmaBoard } from './Board';
// import { SocketIO } from 'boardgame.io/multiplayer'

const DilemmaClient = Client({ numPlayers: 1, game: Dilemma , board: DilemmaBoard});//, multiplayer: SocketIO({server: true ? 'https://pandemic-legacy0.herokuapp.com' : 'localhost:53954'})});

const App = () => (
  <div>
    <DilemmaClient playerID="0" />
  </div>
);

export default App;