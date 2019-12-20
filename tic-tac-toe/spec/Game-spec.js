describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

    describe("Board", function(){

      it("it has an array", function() {
        expect(game.array).toEqual([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
      });

      it("Player can add position", function() {
        game.playerX(4)
        expect(game.array).toEqual([" ", " ", " ", " ", "X", " ", " ", " ", " "]);
      });
     
    });

  });
     