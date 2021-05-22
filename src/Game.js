import { INVALID_MOVE } from 'boardgame.io/core'

const HOUSE = {
  DUALAK: 1,
  CRANN: 2,
  SOLAD: 3,
  OLWYN: 4,
  BLODYN: 5,
}

const VOTE_TYPE = {
  AYE: 1,
  NAY: 2,
  PASS_POWER: 3,
  PASS_MODERATOR: 4,
}

const PHASE = {
  VOTE: 1,
  BOARD: 2,
}

const turnOrder = [HOUSE.OLWYN, HOUSE.DUALAK, HOUSE.CRANN, HOUSE.SOLAD, HOUSE.BLODYN ];

function chooseNextPlayer (G, house, pass) {
  const currentIndex = G.turnOrder.indexOf(G.houses[house].id);
  const nextIndex = (currentIndex + 1) % G.turnOrder.length;
  G.currentPlayer = G.turnOrder[nextIndex];
  if (pass) {
    G.turnOrder.splice(currentIndex, 1);
  }
  if (G.currentPlayer === G.leader || G.turnOrder.length < 1) {
    G.currentPhase = PHASE.BOARD;
    G.currentPlayer = null;
    // resolve the vote!
  }
  return;
}

export const Dilemma = {
  setup: () => (
    { 
      currentDilemma: 'https://i.ibb.co/NLJhqKq/Screen-Shot-2021-04-11-at-6-54-35-PM.png',
      currentPhase: PHASE.VOTE,
      turnOrder: turnOrder,
      currentPlayer: HOUSE.OLWYN,
      leader: HOUSE.OLWYN,
      moderator: HOUSE.BLODYN,
      moderatorAvailable: true,
      powerPool: 3,
      houses: {
        olwyn: {
          name: "Olwyn",
          id: HOUSE.OLWYN,
          coins: 10,
          power: 9, // + welfare (AGENDA)
          current_bid: null,
          current_vote_type: null,
          top: '470px',
          left: '95px',
          prestige: 12,
          crave: 0,
          color: 'red',
          agendas: 'This game, gain points for welfare highest',
          achievement1: 'Score 2+ points from agendas (0/3)',
          achievement2: 'Influence is highest (1/3)',
          achievement3: 'End with 18+ coins (1/4)',
          story: 'Assert the Dominion of Knowledge Over Spirit',
        },
        dualak: {
          name: "Dualak",
          id: HOUSE.DUALAK,
          coins: 10,
          power: 9, // + money (AGENDA)
          current_bid: null,
          current_vote_type: null,
          top: '470px',
          left: '95px',
          prestige: 6,
          crave: 3,
          color: 'purple',
          agendas: 'This game, gain points if wealth highest',
          achievement1: 'Stability is in lower half (1/4)',
          achievement2: 'Influence is lowest (0/3)',
          achievement3: 'Wealth is lowest (1/3)',
          story: 'Curse the Royal Family',
        },
        crann: {
          name: "Crann",
          id: HOUSE.CRANN,
          coins: 10,
          power: 8, // + money, - money (AGENDA)
          current_bid: null,
          current_vote_type: null,
          top: '470px',
          left: '95px',
          prestige: 5,
          crave: 4,
          color: 'green',
          agendas: 'This game, lose points if wealth lowest',
          achievement1: 'Morale is lowest (2/3)',
          achievement2: 'Influence is highest (1/3)',
          achievement3: 'Stability is in lower half (1/4)',
          story: 'Conquer Another Kingdom',
        },
        solad: {
          name: "Solad",
          id: HOUSE.SOLAD,
          coins: 10,
          power: 7, // - influence (AGENDA), - influence, - morale (AGENDA), - welfare (AGENDA), + knowledge (AGENDA), + knowledge, + knowledge
          current_bid: null,
          current_vote_type: null,
          top: '470px',
          left: '95px',
          prestige: 3,
          crave: 7,
          color: 'blue',
          agendas: 'This game, gain points if knowledge highest, lose points if influence or morale or welfare lowest',
          achievement1: 'Morale is lowest (2/3)',
          achievement2: 'Knowledge is highest (2/3)',
          achievement3: 'Score 2+ points from agendas (0/3)',
          story: 'Find a New Perspective on Reality',
        },
        blodyn: {
          name: "Blodyn",
          id: HOUSE.BLODYN,
          coins: 10,
          power: 9, // + influence (AGENDA)
          current_bid: null,
          current_vote_type: null,
          top: '470px',
          left: '95px',
          prestige: 2,
          crave: 1,
          color: 'gold',
          agendas: 'This game, gain points if influence highest',
          achievement1: 'Balance is between 5 and 13, inclusive (1/5)',
          achievement2: 'Morale is highest (0/3)',
          achievement3: 'Knowledge is highest (1/3)',
          story: 'Find Harmony Between Knowledge and Spirit',
        },
      }
    }
  ),

  turn: {
      moveLimit: 1,
  },

  /*
  moves:
  - voteAye
  - increaseAye
  - holdAye
  - voteNay
  - increaseNay
  - holdNay
  - votePassPower
  - votePassModerator
  - undo
  */
  moves: {
    assignLeader: (G, ctx, house) => {
      if(!G.houses[house]){
        return INVALID_MOVE;
      }
      G.leader = G.houses[house].id;
    },
    assignModerator: (G, ctx, house) => {
      if(!G.houses[house]){
        return INVALID_MOVE;
      }
      G.moderator = G.houses[house].id;
    },
    addPower: (G, ctx, house) => {
      if(!G.houses[house]){
        return INVALID_MOVE;
      }
      // TODO add max/min
      G.houses[house].power = G.houses[house].power + 1;
    },
    removePower: (G, ctx, house) => {
      if(!G.houses[house]){
        return INVALID_MOVE;
      }
      G.houses[house].power = G.houses[house].power - 1;
    },
    addCoin: (G, ctx, house) => {
      if(!G.houses[house]){
        return INVALID_MOVE;
      }
      G.houses[house].coins = G.houses[house].coins + 1;
    },
    removeCoin: (G, ctx, house) => {
      if(!G.houses[house]){
        return INVALID_MOVE;
      }
      G.houses[house].coins = G.houses[house].coins - 1;
    },
    voteAye: (G, ctx, house, bid) => {
      if(!G.houses[house]){
        return INVALID_MOVE;
      }
      if(!(G.currentPlayer === G.houses[house].id)) {
        return INVALID_MOVE;
      }
      if(isNaN(bid) || bid < 0) {
        return INVALID_MOVE;
      }
      if(G.houses[house].current_bid + bid > G.houses[house].power) {
        return INVALID_MOVE;
      }
      // condition for "passing" after a bid
      G.houses[house].current_vote_type = VOTE_TYPE.AYE;
      G.houses[house].current_bid = G.houses[house].current_bid + bid;
      let leader = G.houses[Object.keys(G.houses).find((key) => (G.houses[key].id === G.leader))];
      if (G.houses[house].current_bid > leader.current_bid) {
        G.leader = G.houses[house].id;
      }
      chooseNextPlayer(G, house);
    },
    voteNay: (G, ctx, house, bid) => {
      if(!G.houses[house]){
        return INVALID_MOVE;
      }
      if(!(G.currentPlayer === G.houses[house].id)) {
        return INVALID_MOVE;
      }
      if(isNaN(bid) || bid < 0) {
        return INVALID_MOVE;
      }
      if(G.houses[house].current_bid + bid > G.houses[house].power) {
        return INVALID_MOVE;
      }
      G.houses[house].current_vote_type = VOTE_TYPE.NAY;
      G.houses[house].current_bid = G.houses[house].current_bid + bid;
      let leader = G.houses[Object.keys(G.houses).find((key) => (G.houses[key].id === G.leader))];
      if (G.houses[house].current_bid > leader.current_bid) {
        G.leader = G.houses[house].id;
      }
      chooseNextPlayer(G, house);
      
    },
    passPower: (G, ctx, house) => {
      if(!G.houses[house]){
        return INVALID_MOVE;
      }
      if(!(G.currentPlayer === G.houses[house].id)) {
        return INVALID_MOVE;
      }
      G.houses[house].current_vote_type = VOTE_TYPE.PASS_POWER;
      chooseNextPlayer(G, house, true);
    },
    passModerator: (G, ctx, house) => {
      if(!G.houses[house]){
        return INVALID_MOVE;
      }
      if(!(G.currentPlayer === G.houses[house].id)) {
        return INVALID_MOVE;
      }
      if(!G.moderatorAvailable) {
        return INVALID_MOVE;
      }
      G.houses[house].current_vote_type = VOTE_TYPE.PASS_MODERATOR;
      G.moderator = G.houses[house].id;
      G.moderatorAvailable = false;
      chooseNextPlayer(G, house, true);
    },
    newVote: (G, ctx) => {
      G.currentPhase = PHASE.VOTE;
      G.currentPlayer = G.leader;
      let keys = Object.keys(G.houses);
      for(let i = 0; i < keys.length; i++) {
        G.houses[keys[i]].current_vote_type = null;
        G.houses[keys[i]].current_bid = null;
      }
      G.moderatorAvailable = true;
      G.turnOrder = turnOrder;
    },
    resolveAye: (G, ctx) => {
      let keys = Object.keys(G.houses);
      var numPassers = 0;
      for(let i = 0; i < keys.length; i++) {
        if (G.houses[keys[i]].current_vote_type === VOTE_TYPE.PASS_POWER) {
          numPassers = numPassers + 1;
        }
      }
      const remainder = G.powerPool % numPassers;
      if (remainder < G.powerPool) {
        let share = (G.powerPool - remainder) / numPassers;
        for(let i = 0; i < keys.length; i++) {
          if (G.houses[keys[i]].current_vote_type === VOTE_TYPE.PASS_POWER) {
            G.houses[keys[i]].power = G.houses[keys[i]].power + share;
          }
        }
        G.powerPool = remainder;
      }
      for(let i = 0; i < keys.length; i++) {
        if (G.houses[keys[i]].current_vote_type === VOTE_TYPE.AYE) {
          G.powerPool = G.powerPool + G.houses[keys[i]].current_bid;
          G.houses[keys[i]].power = G.houses[keys[i]].power - G.houses[keys[i]].current_bid;
        }
      }
      for(let i = 0; i < keys.length; i++) {
        if (G.houses[keys[i]].current_vote_type === VOTE_TYPE.PASS_MODERATOR || G.houses[keys[i]].current_vote_type === VOTE_TYPE.PASS_POWER ) {
          G.houses[keys[i]].coins = G.houses[keys[i]].coins + 1;
        }
      }
      // leader reassignment if leader is a nay -- do this manually?
    },
    resolveNay: (G, ctx) => {
      let keys = Object.keys(G.houses);
      var numPassers = 0;
      for(let i = 0; i < keys.length; i++) {
        if (G.houses[keys[i]].current_vote_type === VOTE_TYPE.PASS_POWER) {
          numPassers = numPassers + 1;
        }
      }
      const remainder = G.powerPool % numPassers;
      if (remainder < G.powerPool) {
        let share = (G.powerPool - remainder) / numPassers;
        for(let i = 0; i < keys.length; i++) {
          if (G.houses[keys[i]].current_vote_type === VOTE_TYPE.PASS_POWER) {
            G.houses[keys[i]].power = G.houses[keys[i]].power + share;
          }
        }
        G.powerPool = remainder;
      }
      for(let i = 0; i < keys.length; i++) {
        if (G.houses[keys[i]].current_vote_type === VOTE_TYPE.NAY) {
          G.powerPool = G.powerPool + G.houses[keys[i]].current_bid;
          G.houses[keys[i]].power = G.houses[keys[i]].power - G.houses[keys[i]].current_bid;
        }
      }
      for(let i = 0; i < keys.length; i++) {
        if (G.houses[keys[i]].current_vote_type === VOTE_TYPE.PASS_MODERATOR || G.houses[keys[i]].current_vote_type === VOTE_TYPE.PASS_POWER ) {
          G.houses[keys[i]].coins = G.houses[keys[i]].coins + 1;
        }
      }
    },
    changeURL: (G, ctx, url) => {
      G.currentDilemma = url;
    }
  },

  endIf: (G, ctx) => {
    // no victory condition, we can just stop running the simulator
    // if (IsVictory(G.cells)) {
    //   return { winner: ctx.currentPlayer };
    // }
    // if (IsDraw(G.cells)) {
    //   return { draw: true };
    // }
    // total agents, total incidents!!!
  },
};