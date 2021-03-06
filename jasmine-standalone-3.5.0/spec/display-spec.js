describe("Display", function(){
    var display
    var account

    beforeEach(function() {
        display = new Display()
        account = new Account()
    });

        describe("Display the Bank Statement", function(){

            it("The Terminal should show the following format", function() {
                account.add(100)
                expect(display.show()).toEqual("date || credit || debit || balance 0||100||0||100");
            });

            it("Shows the transactions for each day", function() {
              account.add(100)
              account.withdraw(10)
              account.date()
              display.show() 
              expect(display.transaction).toContain("017-12-2019||100||10||90") 
            })

            xit("Changes the date once taking in credit, debit & balance", function(){
              
              expect(display.date).toEqual(2)
            })

            it("Has a list of transactions", function(){
              account.date(100)
              account.withdraw(10)
              display.show()

              expect(display.transaction).toEqual()
            });

            it("Shows the number of transactions", function(){
              account.add(100)  
              display.show()
              expect(display.transaction.length).toEqual(1)
            });
          
          });

// descirbe("Displays the transaction for each day ")


});