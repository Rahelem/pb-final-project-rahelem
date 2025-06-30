# pb-final-project-rahelem

Street Terminal Fighter

A simple terminal-based fighting game written in Node.js, where two players choose iconic fighters and battle turn-based with special moves, parries, and counters.

Features

    4 Playable Characters: Ryu, Ken, ChunLi, Guile — each with unique HP and moves.

    Move Types:

        Basic moves like punch, kick

        Special moves like hadouken, shoryuken

        Defensive moves: parry, counter

    Randomized success chances for parries and counters.

    Turn-based combat in your terminal.

How to Run
Prerequisites:

    Node.js installed (version 14+ recommended)

    The readline-sync npm package installed (used for terminal input)

Installation:

npm install

(This uses your existing package.json and package-lock.json for installing dependencies like readline-sync.)
Running the Game:

node index.js

(Assuming your game code is saved as index.js in your project folder.)
Gameplay Instructions:

    Both players choose a fighter from the list.

    Each round, both players select a move:

        Either attack (like kick, hadouken, etc.)

        Or defend (parry / counter)

    The game continues until one player's HP drops to 0.

The first player with HP left wins!

Project Structure:

.
├── index.js          # Your main game code
├── package.json      # Node project file
├── package-lock.json # NPM lockfile
├── node_modules/     # Installed npm packages
└── .gitignore        # Ignoring node_modules etc.

Dependencies:

    readline-sync

Notes:

    The game runs in the terminal only.

    Defensive moves like parry and counter involve randomness for success.

    Easily extendable: Add new characters or moves by editing the characterRoster object.
