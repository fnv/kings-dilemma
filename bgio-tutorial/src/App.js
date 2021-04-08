import { Client } from 'boardgame.io/react';
import { Pandemic } from './Game';
import { PandemicBoard } from './Board';
import { SocketIO } from 'boardgame.io/multiplayer'

const PandemicClient = Client({ numPlayers: 1, game: Pandemic , board: PandemicBoard, multiplayer: SocketIO({server: 'localhost:8000'})});

const App = () => (
  <div>
    <PandemicClient playerID="0" />
  </div>
);

export default App;