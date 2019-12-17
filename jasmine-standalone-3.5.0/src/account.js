function Account(user, bank) {
  this.balance = 0 
  this.credit = 0
  this.debit = 0
  this.transactions = 0
  this.dates = 0
  this.transaction =[]
}

Account.prototype.add = function(value) {
  this.balance += value
  this.credit += value  
  this.transactions += 1
}

Account.prototype.withdraw = function(value) {
  this.balance -= value
  this.debit += value  
}

Account.prototype.date = function() {
    return new Date()
  //  return  this.date += new Date()
}


// "date || credit || debit || balance\n"
// '||' + this.credit + '||' + this.debit 