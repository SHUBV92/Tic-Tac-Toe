describe("Player", function(){
var player 

    beforeEach(function(){
    
        player = new Player();
    
    });


    describe("Player X", function(){
    
        it("Player X can change position", function(){
            expect(player.position).toEqual("PlayerO's position")
        });

        it("Player can pick what they want character they want to be", function(){
            player.choice("X")
            expect(player.player).toEqual("X")
        })
    
    
    });


});