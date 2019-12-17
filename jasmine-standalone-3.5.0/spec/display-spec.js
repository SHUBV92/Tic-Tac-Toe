describe("Display", function(){
    var display
    var bank 

    beforeEach(function() {
        display = new Display()
        account = new Account()
    });


    describe("Allow Account Facilities", function(){

        it("adds all the bank info to the account array", function(){
            expect(account.transactions).toContain([])
        });

    });

  describe("Display the Bank Statement", function(){

    it("The Terminal should show the following format", function() {
        account.add(100)
        expect(account.show()).toEqual("||0||100||100");
    });

    it("Shows the transactions for each day", function() {
      
      expect(display.transactions()).toEqaul() 
    })

    it("Changes the date once taking in credit, debit & balance", function(){
      
      expect(display.date).toEqual(2)
    })
   
  });

descirbe("Displays the transaction for each day ")


});