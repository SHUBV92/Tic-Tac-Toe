
function Game() {
  this.array = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
}

Game.prototype.playerX = function(pos) {
    this.array[pos] = 'X'
}

Game.prototype.playerO = function(pos) {
    this.array[pos] = 'O'
}
