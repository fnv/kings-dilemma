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
        },
        toronto: {
          name: "Toronto",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        newYork: {
          name: "New York",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        losAngeles: {
          name: "Los Angeles",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        atlanta: {
          name: "Atlanta",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        washington: {
          name: "Washington",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: true,
          agents: 0,
          target: null,
        },
        mexicoCity: {
          name: "Mexico City",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        havana: {
          name: "Havana",
          region: REGION.NORTH_AMERICA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
        },
        bogota: {
          name: "Bogota",
          region: REGION.SOUTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        lima: {
          name: "Lima",
          region: REGION.SOUTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        saoPaolo: {
          name: "Sao Paolo",
          region: REGION.SOUTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        santiago: {
          name: "Santiago",
          region: REGION.SOUTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        buenosAires: {
          name: "Buenos Aires",
          region: REGION.SOUTH_AMERICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        madrid: {
          name: "Madrid",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        london: {
          name: "London",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        rome: {
          name: "Rome",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        istanbul: {
          name: "Istanbul",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        paris: {
          name: "Paris",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
        },
        eastBerlin: {
          name: "East Berlin",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
        },
        prague: {
          name: "Prague",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        kiev: {
          name: "Kiev",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
        },
        warsaw: {
          name: "Warsaw",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
        },
        leningrad: {
          name: "Leningrad",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 2,
          safehouse: false,
          agents: 0,
          target: null,
        },
        moscow: {
          name: "East Berlin",
          region: REGION.EUROPE,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 3,
          safehouse: false,
          agents: 0,
          target: null,
        },
        cairo: {
          name: "Cairo",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
        },
        algiers: {
          name: "Algiers",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        johannesburg: {
          name: "Johannesburg",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        leopoldville: {
          name: "Leopoldville",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        lagos: {
          name: "Lagos",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        khartoum: {
          name: "Khartoum",
          region: REGION.AFRICA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        riyadh: {
          name: "Riyadh",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        karachi: {
          name: "Karachi",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        delhi: {
          name: "Delhi",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        calcutta: {
          name: "Calcutta",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        bombay: {
          name: "Bombay",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        bangkok: {
          name: "Bangkok",
          region: REGION.ASIA,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        baghdad: {
          name: "Baghdad",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        novosibirsk: {
          name: "Novosibirsk",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        peking: {
          name: "Peking",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
        },
        pyongyang: {
          name: "Pyongyang",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        shanghai: {
          name: "Shanghai",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 1,
          safehouse: false,
          agents: 0,
          target: null,
        },
        handi: {
          name: "Handi",
          region: REGION.ASIA,
          affiliation: AFFILIATION.SOVIET,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        saigon: {
          name: "Saigon",
          region: REGION.ASIA,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        sydney: {
          name: "Sydney",
          region: REGION.PACIFIC_RIM,
          affiliation: AFFILIATION.ALLIED,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        jakarta: {
          name: "Jakarta",
          region: REGION.PACIFIC_RIM,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        manila: {
          name: "Manila",
          region: REGION.PACIFIC_RIM,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        osaka: {
          name: "Osaka",
          region: REGION.PACIFIC_RIM,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
        },
        tokyo: {
          name: "Tokyo",
          region: REGION.PACIFIC_RIM,
          affiliation: AFFILIATION.NEUTRAL,
          surveillance: 0,
          safehouse: false,
          agents: 0,
          target: null,
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
    addAgent: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.cities[cityId].agents = G.cities[cityId].agents + 1;
    },
    removeAgent: (G, ctx, cityId) => {
      if (!G.cities[cityId]) {
        return INVALID_MOVE;
      }
      G.cities[cityId].agents = G.cities[cityId].agents - 1;
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
  },
};