import readlineSync from "readline-sync";

const characterRoster = {
  Ryu: {
    hp: 100,
    moves: {
      punch:   { damage: 5 },
      kick:    { damage: 7 },
      hadouken:{ damage: 12 },
      shoryuken:{ damage: 15 },
      special: { damage: 25 }
    }
  },
  Ken: {
    hp: 100,
    moves: {
      punch:   { damage: 6 },
      kick:    { damage: 8 },
      hadouken:{ damage: 10 },
      shoryuken:{ damage: 18 },
      special: { damage: 20 }
    }
  },
  ChunLi: {
    hp: 90,
    moves: {
      punch:   { damage: 4 },
      kick:    { damage: 10 },
      lightningKick: { damage: 14 },
      spinningBird:   { damage: 20 },
      special: { damage: 18 }
    }
  },
  Guile: {
    hp: 110,
    moves: {
        punch:  { damage: 5 },
        kick:   { damage: 6 },
        sonicBoom: { damage: 12 },
        flashKick: { damage: 15 },
        special: { damage: 22 }
    }
  }
};

function createFighter(template) {
    return {
        name: template,
        hp: template.hp,
        moves: template.moves,
        parryInit: false,
        counterInit: false,
    };
}

function selectCharacter(playerName) {
    const names = Object.keys(characterRoster);
    console.log(`${playerName}, choose your character: ${names.join("")}`);
    const choice = readlineSync.question("> ");
    if (!characterRoster[choice]) {
      console.log("This character doesn't exist, try again.");
      return chooseCharacter(playerName);
    }
    return createFighter
}