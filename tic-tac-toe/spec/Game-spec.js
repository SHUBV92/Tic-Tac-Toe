describe("Logic", function() {
    var logic;
  
    beforeEach(function() {
      logic = new Logic();
      game = new Game();

    });
  
    describe("Vertical Logic", function(){
  
        it("it shows the logic", function() {
            expect(game.logic(["X", "X", "X", " ", " ", " ", " ", " ", " "])).toEqual("You have won");
        });

        it("it shows the logic", function() {
            expect(game.logic([" ", " ", " ", "X", "X", "X", " ", " ", " "])).toEqual("You have won");
        });

        it("it shows the logic", function() {
            expect(game.logic([" ", " ", " ", " ", " ", " ", "X", "X", "X"])).toEqual("You have won");
        });
    });

        describe("Horizontal Logic", function(){

            it("it shows the logic", function() {
            expect(game.logic(["X", " ", " ", "X", " ", " ", "X", " ", " "])).toEqual("You have won");
            });

            it("it shows the logic", function() {
                expect(game.logic([" ", " ", " ", "X", "X", "X", "", " ", " "])).toEqual("You have won");
            });
        });

        describe("Horizontal Logic", function(){
        
            it("Players takes turns untill game is over", function(){
                game.playerX(0)
                game.playerO(5)
                game.playerX(1)
                game.playerO(8)
                game.playerX(2)
                game.playerO(3)
                expect(logic.logic).toEqual("Game Over")
            })
        
        });
});