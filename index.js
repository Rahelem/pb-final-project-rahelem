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
  },
};

function createFighter(templateName) {
  const template = characterRoster[templateName];
    return {
        name: templateName,
        hp: template.hp,
        moves: template.moves,
        parryInit: false,
        counterInit: false,
    };
}

function chooseCharacter(playerName) {
    const names = Object.keys(characterRoster);
    console.log(`${playerName}, choose your character: ${names.join("")}`);
    const choice = readlineSync.question("> ");
    if (!characterRoster[choice]) {
      console.log("This character doesn't exist, try again.");
      return chooseCharacter(playerName);
    }
    return createFighter(choice);
}

function parrySuccess() {
  return Math.random() < 0.5;
}

function counterSuccess() {
  return Math.random() < .25;
}

function attack(attacker, defender, moveKey) {
  console.log(`/n${attacker.naem} tries ${moveKey}!`);

  if (moveKey === "parry") {
    attacker.parryInit = true;
    console.log(`${attacker.name} is ready to parry.`); 
    return;
  }

  if (moveKey === "counter") {
    attacker.counterInit = true; 
    console.log(`${attacker.name} is ready to counter.`);
    return
  }

  const move = attacker.moves[moveKey];
  if (!move) {
    console.log("That move doesn't exist  - you lose your turn.");
    return;
  }

  let dmg = move.damage;

if (defender.parryInit && parrySuccess()) {
  console.log(`${defender.name} parried and countre-hits for ${dmg} damage!`);
  attacker.hp -= dmg;
  defender.parrySuccess = false;
  return;
}

if (defender.counterInit && counterSuccess()) {
    console.log(`${defender.name} counters! ${attacker.name} takes ${dmg*2} damage!`);
    attacker.hp -= dmg * 2;
    defender.counterSucces = false;
    return;
  }


console.log(`${attacker.name} hits ${defender.name} for ${dmg} damage.`);
defender.hp -= dmg;

defender.parryInit = false;
defender.counterInit = false;
}




function startGame() {
  console.log("STREET TERMINAL FIGHTER");
  const p1 = chooseCharacter("Player 1");
  const p2 = chooseCharacter("Player 2");
  let round = 1;

  while (p1.hp > 0 && p2.hp > 0) {
    console.log(`\n--- Round ${round} ---`);
    console.log(`${p1.name}: ${p1.hp} HP   |   ${p2.name}: ${p2.hp} HP`);

    const m1 = readlineSync.question(`${p1.name}, pick a move (${Object.keys(p1.moves).concat(["parry","counter"]).join(", ")}): `);
    attack(p1, p2, m1);
    if (p2.hp <= 0) break;

    const m2 = readlineSync.question(`${p2.name}, pick a move (${Object.keys(p2.moves).concat(["parry","counter"]).join(", ")}): `);
    attack(p2, p1, m2);

    round++;
  }

  const winner = p1.hp > 0 ? p1.name : p2.name;
  console.log(`\n ${winner} wins!`);
}

startGame();