function Player() {
    this.position = 0 
    this.player1 = "Choice"
    this.player2 = "Choice"
}

Player.prototype.playerO = function() {

}

Player.prototype.playerX = function() {

}


Player.prototype.choice1 = function(input) {
    this.player1 = input 
}

Player.prototype.choice2 = function(input) {
    this.player2 = input 
}
