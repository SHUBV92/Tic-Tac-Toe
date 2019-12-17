# Tech-Test

User Stories 


As a user,
* I want to add money to my account,
* So that I can have money secure for later use.

As a user,
* I want to take out money from my account,
* So that I can have access and use money for personal reasons. 

As a user,
* I want to print out a balance statement,
* So that I can asses how much money I have in my account. 


# Requirements 
* Interact in the Terminal or Console 
* Deposits withdrawal 
* Account statement (date, amount, balancing) printing 
* Data can be kept in memory(it doesn’t need to be stored to a database or anything) 

# Acceptance Criteria 
* Given a client makes a deposit of 1000 on 10-01-2012 
* AND a deposit of 2000 on 13-01-2012
* AND a withdrawal of 500 on 14-01-2012
* When she prints her bank statement
* Then she would see 

# Output
* date || credit || debit || balance
* 14/01/2012 || || 500.00 || 2500.00
* 13/01/2012 || 2000.00 || || 3000.00
* 10/01/2012 || 1000.00 || || 1000.00