function rollDice() {
  let goldCoins = 0;
  for (i = 0; i < 10; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    alert("You rolled a " + roll + "!");
    if (roll === 1) {
      alert("Game over, no more rolls!");
      break;
    }
    if (roll < 5) {
      continue;
    }
    if (roll === 5) {
      alert("You win 5 gold coins!");
    } else if (roll === 6) {
      alert("You win 6 gold coins!");
    }
    goldCoins += roll;
  }
  alert("You won a total of " + goldCoins + " coins!");
}
