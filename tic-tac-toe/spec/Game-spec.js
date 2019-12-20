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
      
});