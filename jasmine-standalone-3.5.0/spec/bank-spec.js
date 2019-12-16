describe("Bank", function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("Should show the balance of the user", function() {
    // bank.add(100);
    expect(bank.balance).toEqual(0);
  });
  
  it("Should add to the balance", function() {
    bank.add(100)
    expect(bank.balance).toEqual(100);
  });

  it("Should withdraw from the balance", function() {
    bank.add(100)
    bank.withdraw(10)
    expect(bank.balance).toEqual(90);
  });

  describe("Show the Format", function(){

    it("The Terminal should show the following format", function() {
  
    expect (bank.show).toEqual("date || credit || debit || balance");

    });

  });




});   
























  //   describe("when song has been paused", function() {
  //     beforeEach(function() {
  //       player.play(song);
  //       player.pause();
  //     });

  //     it("should indicate that the song is currently paused", function() {
  //       expect(player.isPlaying).toBeFalsy();

  //       // demonstrates use of 'not' with a custom matcher
  //       expect(player).not.toBePlaying(song);
  //     });

  //     it("should be possible to resume", function() {
  //       player.resume();
  //       expect(player.isPlaying).toBeTruthy();
  //       expect(player.currentlyPlayingSong).toEqual(song);
  //     });
  //   });

  //   // demonstrates use of spies to intercept and test method calls
  //   it("tells the current song if the user has made it a favorite", function() {
  //     spyOn(song, 'persistFavoriteStatus');

  //     player.play(song);
  //     player.makeFavorite();

  //     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  //   });

  //   //demonstrates use of expected exceptions
  //   describe("#resume", function() {
  //     it("should throw an exception if song is already playing", function() {
  //       player.play(song);

  //       expect(function() {
  //         player.resume();
  //       }).toThrowError("song is already playing");
  //     });
  //   });
  // })
