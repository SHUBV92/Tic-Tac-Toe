function Logic(game) {
  this.game = game;
}

Logic.prototype.logic = function(n) {
  // if (game.array === ["X", "X", "X", " ", " ", " ", " ", " ", " "] ) {
  // };

  if (game.a[0][0] === "X") {
    return "You have won";
  }

  // return "Player X Won"

  // if (game.array === [" ", " ", " ", "X", "X", "X", " ", " ", " "] ) {
  //     return "Player X Won"
  // };
  // // return "Player X Won"

  // if (game.array === [" ", " ", " ", " ", " ", " ", "X", "X", "X"]) {
  //     // return "You have won"
  // };
  //     // return "Player X Won"
};

Logic.prototype.countX = function(n) {
  var count = 0;
  for (var i = 0; i < this.game.array.length; ++i) {
    if (this.game.array[i] == n) count++;
  }
  return count;
};

Logic.prototype.countO = function() {
  var count = 0;
  for (var i = 0; i < this.game.array.length; ++i) {
    if (this.game.array[i] == O) count++;
  }
  return count;
};
