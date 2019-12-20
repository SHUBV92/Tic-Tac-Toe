describe("Player", function(){
var player 

    beforeEach(function(){
    
        player = new Player();
    
    });


    describe("Player X", function(){
    
        it("Player X can change position", function(){
            expect(player.position).toEqual("PlayerO's position")
        });

    });




});