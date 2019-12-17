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
              account.add(100)
              account.withdraw(10)
              account.date()
              display.show() 
              expect(display.transactions).toContain("017-12-2019||100||10||90") 
            })

            it("Changes the date once taking in credit, debit & balance", function(){
              
              expect(display.date).toEqual(2)
            })

            it("Has a list of transactions", function(){
              account.date(100)
              account.withdraw(10)
              account.show()

              expect(display.transactions).toEqual()
            })
          
          });

descirbe("Displays the transaction for each day ")


});