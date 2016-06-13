/*Bank

There is only one bank. This bank has an array of accounts.
The bank needs a method that will return the total sum of money in the accounts.
It also needs an addAccount method that will enroll a new account at the bank and
 add it to the array of accounts. There is no need to create additional functions
 of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of
common functionality.

Accounts

Accounts have a current balance and owner's name.
You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return
values -- you may also have your functions console.log() values to help you
see your code working.

You should write a basic story through a series of JavaScript commands that
shows that the methods do indeed work as expected: add some accounts,
show the total balance, make some deposits and withdrawals, show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.

Bonus

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.*/

  var acc1= {owner: 'Jim',
    balance: 1000,
   };

  var acc2 = {owner: 'Kat',
    balance:  2000,
   };

  var acc3 = {owner: 'Jake',
    balance: 300,
   };

 var bank = [ acc1, acc2, acc3];

 var updatedBank = [];
 var currentbalance;



var sum = function (){ //return the total sum of money in the accounts.
	var currentbalance = 0;
    for ( var i = 0; i < bank.length; i++){
    currentbalance += bank [i].balance;
  }
   return currentbalance;
};

sum ()



var addAccount = function (name, amount ){ //add new account to the current array of accounts, update balance
    newAccount = {
        owner: 'name',
        balance: amount
    };

    bank.push(newAccount);
    console.log ( 'New account for ' + name + ' has been added to bank ');
    console.log ( bank);


   for (var i = 0; i < bank.length; i++) {
      currentbalance += bank[i].balance;
    }
    return currentbalance;
}

addAccount('Lucy',3000);


var deposits =function ( AccName, amoount){
    var mark = 0; // check if new account is present
    for ( var i=0; i<bank.length; i++){
      bank [i].balance +=amount;
      mark = 1;
      return //break the function;
    }

}

if ( mark ===1) {
    console.log ( 'credited to AccName + 'Amount ' + amount');
    return mark;
}else {
  console.log ( ' no account with '+ AccName + ' found');
  return mark;
}
}










}
