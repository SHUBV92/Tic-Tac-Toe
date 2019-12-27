function Game() {
  // this.array = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  this.turn = "player";

  this.a  = [[" "," "," "],[" "," "," "],[" "," "," "]]
}
  
Game.prototype.display = function() {
  // return this.a[0] + "\n" + this.a[1] + "\n" + this.a[2];
   return this.a.map(v=>v.join("|")).join("\n")
};

Game.prototype.playerX = function(pos, element) {
  if (this.a[pos][element] != " ") throw "The space is already taken";
  this.a[pos][element] = "X";
  this.turn = "Player O's Turn";
  console.log( this.display() )
};

Game.prototype.playerO = function(pos, element) {
  if (this.a[pos][element] != " ") throw "The space is already taken";
  this.a[pos][element] = "O";
  this.turn = "Player X's Turn";
  console.log( this.display() )
};

Game.prototype.show = function() {
  return this.array;
};
