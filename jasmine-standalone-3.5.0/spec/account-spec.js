describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

    describe("Account Facilities", function(){

      it("Can show the balance of the user", function() {
        // bank.add(100);
        expect(account.balance).toEqual(0);
      });
      
      it("Can add credit to the balance", function() {
        account.add(100)
        expect(account.balance).toEqual(100);
      });

      it("Can debit/ withdraw from the balance", function() {
        account.add(100)
        account.withdraw(10)
        expect(account.balance).toEqual(90);
      });

      it("Can display date of the transactions", function() {
        account.date()
        expect(account.dates).toEqual("017-12-2019")
      });

      describe("Displays the Account information", function(){

          it("Adds the credit", function(){
            account.add(100)
            expect(account.credit).toEqual(100)
          });

          it("Adds the debit", function(){
            account.withdraw(10)
            expect(account.debit).toEqual(10)
          });

          
      });
    
    });  


    describe("Raise Error if attempt has been made to withdraw if balance is 0 ", function(){
      //     it("Raises Error if you try to take out money & balance is 0", fucntion() {
      //       expect(function() { bank.add() }).toThrow("Balance is 0, Cannot Withdraw")
      //     });
       it("Shows a new transaction  on a new line ", function(){
        display.show()
        display.display
        expect().toBe(\n)
       });
    });

});

























