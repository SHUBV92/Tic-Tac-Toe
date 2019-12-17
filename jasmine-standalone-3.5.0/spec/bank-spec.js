describe("Bank", function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

describe("Allow Account Facilities", function(){

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

  it("Should show the transactions of the day", function() {
    expect(bank.date()).toEqual(new Date())
  });

});
  
  describe("Show the Bank Statement", function(){

    it("The Terminal should show the following format", function() {
        bank.add(100)
        expect(bank.show()).toEqual("100||100||0");
    });

   
  });
  it("Shows the number of transactions", function(){
    bank.add(10)  
    expect(bank.transactions).toEqual(1)
  });
  console.log(bank.balance)

 
  //   describe("Raise Error if attempt has been made to withdraw if balance is 0 ", function(){

  //     it("Raises Error if you try to take out money & balance is 0", fucntion() {
 
  //       expect(function() { bank.add() }).toThrow("Balance is 0, Cannot Withdraw")
  //     });
       
  // });

it("Shows a new transaction  on a new line ", function(){
  
  expect().toEqual()
})


});

























