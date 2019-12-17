function Display () {
    this.transaction = []   
}

    Display.prototype.show = function() {
        var header = "date || credit || debit || balance\n"
        var statement =   ( account.dates + "||" + account.credit + "||"  +  account.debit + "||" + account.balance)
        this.transaction.push(statement)
        var string = header + statement
        return string
    }

    Display.prototype.display = function() {
        var header = "date || credit || debit || balance\n"
        
        var list = this.transaction.forEach(element => {
            return element;
          });
        
        var result  =  header + list
    }