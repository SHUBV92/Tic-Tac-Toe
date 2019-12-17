function Display () {
    this.transaction = []   
}
    Display.prototype.hash = function() {
    }

    Display.prototype.show = function() {
        var header = "date || credit || debit || balance\n"
        var statement =  + ( account.dates + "||" +  account.debit + "||" + account.credit  + "||" + account.balance)
        this.transaction.push(statement)
        var string = header + statement
        return string
    }

// Account.prototype.show = function(date)   {
//     // return "date || credit || debit || balance"
//      var a =  {date: this.date, balance: this.balance, credit: this.credit, debit: this.debit}
//       return a
//      //  this.transactions[:a]
//     }


// "date || credit || debit || balance\n"
// '||' + this.credit + '||' + this.debit 