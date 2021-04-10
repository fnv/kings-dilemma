import { INVALID_MOVE } from 'boardgame.io/core'

const REGION = {
  NORTH_AMERICA: 1,
  SOUTH_AMERICA: 2,
  EUROPE: 3,
  AFRICA: 4,
  ASIA: 5,
  PACIFIC_RIM: 6
}

const AFFILIATION = {
  ALLIED: 1,
  NEUTRAL: 2,
  SOVIET: 3,
}

const TARGET = {
  CONFIRMED: 1,
  ELIMINATED: 2
}

export const Pandemic = {
  setup: () => (
    { 
      pawns: {
        blackPawn: "washington",
        bluePawn: "washington",
        pinkPawn: "washington",
        whitePawn: "washington",
      },
      teams: {
        alliedTeam1: null,
        alliedTeam2: null,
        alliedTeam3: null,
        neutralTeam1: null,
        neutralTeam2: null,
        neutralTeam3: null,
        sovietTeam1: null,
        sovietTeam2: null,
        sovietTeam3: null,
      },
      cities: {
        sanFrancisco: {
          name: "San Francisco",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '470px',
          left: '95px',
        },
        toronto: {
          name: "Toronto",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '456px',
          left: '311px',
        },
        newYork: {
          name: "New York",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '443px',
          left: '495px',
        },
        losAngeles: {
          name: "Los Angeles",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '581px',
          left: '81px',
        },
        atlanta: {
          name: "Atlanta",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '580px',
          left: '320px',
        },
        washington: {
          name: "Washington",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: true,
          agents: 0,
          target: null,
          incidents: 0,
          top: '534px',
          left: '485px',
        },
        mexicoCity: {
          name: "Mexico City",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '682px',
          left: '245px',
        },
        havana: {
          name: "Havana",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '675px',
          left: '427px',
        },
        bogota: {
          name: "Bogota",
          region: REGION.SOUTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '823px',
          left: '435px',
        },
        lima: {
          name: "Lima",
          region: REGION.SOUTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '982px',
          left: '420px',
        },
        saoPaolo: {
          name: "Sao Paolo",
          region: REGION.SOUTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '1029px',
          left: '592px',
        },
        santiago: {
          name: "Santiago",
          region: REGION.SOUTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '1155px',
          left: '396px',
        },
        buenosAires: {
          name: "Buenos Aires",
          region: REGION.SOUTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '1151px',
          left: '531px',
        },
        madrid: {
          name: "Madrid",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '533px',
          left: '788px',
        },
        london: {
          name: "London",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '395px',
          left: '837px',
        },
        rome: {
          name: "Rome",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '537px',
          left: '1044px',
        },
        istanbul: {
          name: "Istanbul",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '515px',
          left: '1160px',
        },
        paris: {
          name: "Paris",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '516px',
          left: '923px',
        },
        eastBerlin: {
          name: "East Berlin",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '410px',
          left: '1000px',
        },
        prague: {
          name: "Prague",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '412px',
          left: '1152px',
        },
        kiev: {
          name: "Kiev",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '381px',
          left: '1282px',
        },
        warsaw: {
          name: "Warsaw",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '285px',
          left: '1053px',
        },
        leningrad: {
          name: "Leningrad",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 2,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '246px',
          left: '1207px',
        },
        moscow: {
          name: "Moscow",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 3,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '305px',
          left: '1416px',
        },
        cairo: {
          name: "Cairo",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '677px',
          left: '1126px',
        },
        algiers: {
          name: "Algiers",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '674px',
          left: '957px',
        },
        johannesburg: {
          name: "Johannesburg",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '1044px',
          left: '1102px',
        },
        leopoldville: {
          name: "Leopoldville",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '890px',
          left: '1024px',
        },
        lagos: {
          name: "Lagos",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '792px',
          left: '875px',
        },
        khartoum: {
          name: "Khartoum",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '808px',
          left: '1188px',
        },
        riyadh: {
          name: "Riyadh",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '687px',
          left: '1305px',
        },
        karachi: {
          name: "Karachi",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '558px',
          left: '1411px',
        },
        delhi: {
          name: "Delhi",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '483px',
          left: '1522px',
        },
        calcutta: {
          name: "Calcutta",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '677px',
          left: '1521px',
        },
        bombay: {
          name: "Bombay",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '768px',
          left: '1415px',
        },
        bangkok: {
          name: "Bangkok",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '783px',
          left: '1610px',
        },
        baghdad: {
          name: "Baghdad",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '566px',
          left: '1297px',
        },
        novosibirsk: {
          name: "Novosibirsk",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '363px',
          left: '1535px',
        },
        peking: {
          name: "Peking",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '431px',
          left: '1677px',
        },
        pyongyang: {
          name: "Pyongyang",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '454px',
          left: '1822px',
        },
        shanghai: {
          name: "Shanghai",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '566px',
          left: '1753px',
        },
        handi: {
          name: "Handi",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '577px',
          left: '1613px',
        },
        saigon: {
          name: "Saigon",
          region: REGION.ASIA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '694px',
          left: '1752px',
        },
        sydney: {
          name: "Sydney",
          region: REGION.PACIFIC_RIM,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          left: '1945px',
          top: '1148px',
        },
        jakarta: {
          name: "Jakarta",
          region: REGION.PACIFIC_RIM,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          left: '1647px',
          top: '939px',
        },
        manila: {
          name: "Manila",
          region: REGION.PACIFIC_RIM,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          left: '1805px',
          top: '891px',
        },
        osaka: {
          name: "Osaka",
          region: REGION.PACIFIC_RIM,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          left: '1946px',
          top: '579px',
        },
        tokyo: {
          name: "Tokyo",
          region: REGION.PACIFIC_RIM,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
          incidents: 0,
          top: '490px',
          left: '1940px',
        },
      }
    }
  ),

  turn: {
      moveLimit: 1,
  },


  /*
  moves:
  - +/- agent here
  - toggle target status (confirmed, ruled out, N/A)
  - move team here
  */
  moves: {
    moveBluePawn: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.pawns.bluePawn = cityId;
    },
    moveBlackPawn: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.pawns.blackPawn = cityId;
    },
    movePinkPawn: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.pawns.pinkPawn = cityId;
    },
    moveWhitePawn: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.pawns.whitePawn = cityId;
    },
    toggleSafehouse: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.cities[cityId].safehouse = !G.cities[cityId].safehouse;
    },
    toggleTarget: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      if (G.cities[cityId].target === null) {
        G.cities[cityId].target = TARGET.CONFIRMED;
        return;
      } else if (G.cities[cityId].target === TARGET.CONFIRMED) {
        G.cities[cityId].target = TARGET.ELIMINATED;
        return;
      } else if (G.cities[cityId].target === TARGET.ELIMINATED) {
        G.cities[cityId].target = null;
        return;
      }
    },
    addAgent: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.cities[cityId].agents = Math.min(G.cities[cityId].agents + 1, 3);
    },
    removeAgent: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.cities[cityId].agents = Math.max(G.cities[cityId].agents - 1, 0);
    },
    addIncident: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.cities[cityId].incidents = G.cities[cityId].incidents + 1;
    },
    removeIncident: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.cities[cityId].incidents = Math.max(G.cities[cityId].incidents - 1, 0);
    },
    moveTeam: (G, ctx, cityId, teamId) => {
      if (cityId === null) {
        G.teams[teamId] = null;
        return;
      }
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.teams[teamId] = cityId;      
    },
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