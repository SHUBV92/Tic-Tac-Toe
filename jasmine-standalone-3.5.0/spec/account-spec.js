describe("Account", function(){
    var account
    var bank 

    beforeEach(function() {
        account = new Account()
        bank = new Bank()
    });
});

    describe("Allow Account Facilities", function(){

        it("adds all the bank info to the account array", function(){
            expect(account.transactions).toEqual([])
        });

    });
