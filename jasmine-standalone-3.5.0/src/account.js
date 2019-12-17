function Account() {
  this.balance      = 0 
  this.credit       = 0
  this.debit        = 0
  this.transactions = 0
  this.dates        = 0
  this.transaction  = []
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
    // return new Date()
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); 
    var year = currentDate.getFullYear();
    var dateString = date + "-" +(month + 1) + "-" + year;
    return  this.dates += dateString

  }


