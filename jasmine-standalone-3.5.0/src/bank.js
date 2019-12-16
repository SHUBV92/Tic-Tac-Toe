function Bank() {
  this.balance = 0 
  this.credit = 0
  this.debit = 0
}

Bank.prototype.add = function(value) {
  this.balance += value
  this.credit += value 
}

Bank.prototype.withdraw = function(value) {
  this.balance -= value
  this.debit += value  
}

Bank.prototype.show = function() {
  return
   return this.balance + '||' + this.credit + '||' + this.debit 
}