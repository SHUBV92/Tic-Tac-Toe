function Logic() {
    a = game.array
}


Logic.prototype.logic = function(a) {
    
    if (a === ["X", "X", "X", " ", " ", " ", " ", " ", " "] ) {
        return "You have won"
    };
        // return "Player X Won"

    // if (game.array === [" ", " ", " ", "X", "X", "X", " ", " ", " "] ) {
    //     return "Player X Won"
    // };
    // // return "Player X Won"

    // if (game.array === [" ", " ", " ", " ", " ", " ", "X", "X", "X"]) {
    //     // return "You have won"
    // };
    //     // return "Player X Won"

    return logic
};
