
function Game() {
  this.array = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  this.turn = "player"
}

Game.prototype.playerX = function(pos) {
  if(this.array[pos] != " ") throw ("The space is already taken");
    this.array[pos] = 'X'
    this.turn = "Player O's Turn"
}

Game.prototype.playerO = function(pos) {
  if(this.array[pos] != " ") throw ("The space is already taken");
    this.array[pos] = 'O'
    this.turn = "Player X's Turn"
}

Game.prototype.show =function(){
  return this.array
}
