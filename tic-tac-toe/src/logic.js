function Logic() {

}

Logic.prototype.logic = function(num) {
    
    if (game.array === ["X", "X", "X", " ", " ", " ", " ", " ", " "] ) {
        return "You have won"
    };

    if (game.array === [" ", " ", " ", "X", "X", "X", " ", " ", " "] ) {
        return "You have won"
    };

    if (game.array === [" ", " ", " ", " ", " ", " ", "X", "X", "X"]) {
        return "You have won"
    };

};
