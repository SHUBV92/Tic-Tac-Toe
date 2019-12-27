describe("Game", function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Board", function() {
    it("it has an array", function() {
      expect(game.array).toEqual([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    });

    it("Player X can add position", function() {
      game.playerX(4);
      expect(game.array).toEqual([" ", " ", " ", " ", "X", " ", " ", " ", " "]);
    });

    it("Player O can add position", function() {
      game.playerX(4);
      game.playerO(5);
      expect(game.array).toEqual([" ", " ", " ", " ", "X", "O", " ", " ", " "]);
    });
  });

  describe("Erros", function() {
    it("Throws an error if a space has already been taken", function() {
      expect(function() {
        game.playerO();
      }).toThrow("The space is already taken");
    });

    it("Throws an error if a space has already been taken", function() {
      expect(function() {
        game.playerX();
      }).toThrow("The space is already taken");
    });

    it("A player can claim a field if it is not already taken", function() {
      game.playerO(2);
      expect(game.playerX(3)).toEqual([
        " ",
        " ",
        "O",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
      ]);
    });
  });

  describe("Player Moves", function() {
    it("Shows the player X taking the turn", function() {
      game.playerX();
      expect(this.turn).toEqual("Player O's Turn");
    });

    it("Shows the player O taking the turn", function() {
      game.playerO();
      expect(this.turn).toEqual("Player X's Turn");
    });
  });

  describe("Player Choices", function() {
    it("Player 1 Chooses Choice", function() {
      expect(player.choice1).toEqual("X");
    });
    it("Player 2 Chooses Choice", function() {
      expect(player.choice2).toEqual("O");
    });
  });

  // describe("Player Moves", function(){

  // });
});
