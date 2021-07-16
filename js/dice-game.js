function rollDice() {
  let goldCoins = 0;
  for (i = 0; i < 10; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    alert("You rolled a " + roll + "!");
  }
}
