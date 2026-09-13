const crypto = require("crypto");

function rollDice() {
    return crypto.randomInt(1, 7);
}

console.log("Rolling 5 dice...");

for (let i = 1; i <= 5; i++) {
    console.log(`Dice Roll ${i}: ${rollDice()}`);
}
