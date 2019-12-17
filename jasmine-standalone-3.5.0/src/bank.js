function Bank() {
  this.balance = 0 
  this.credit = 0
  this.debit = 0
  this.transactions = 0
  this.date = 0
  this.transaction =[]
}

Bank.prototype.add = function(value) {
  this.balance += value
  this.credit += value  
}

Bank.prototype.withdraw = function(value) {
  this.balance -= value
  this.debit += value  
}

Bank.prototype.show = function(date)   {
  // return "date || credit || debit || balance"
   var a =  {date: this.date, balance: this.balance, credit: this.credit, debit: this.debit}
    return a
   //  this.transactions[:a]
  }

Bank.prototype.date = function() {
   return  this.date += new Date()
}


// "date || credit || debit || balance\n"
// '||' + this.credit + '||' + this.debit 