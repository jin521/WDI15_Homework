/*

What happens when the user wants to withdraw more money from the checking account
than is in the account? These accounts have overdraft protection,
so if a withdrawal can be covered by the balances in both accounts,
take the checking balance down to $0 and take the rest of the withdrawal from the savings account.
If the withdrawal amount is more than the combined account balance, ignore it.
Make sure there is overdraft protection going both ways.
Are there ways to refactor your code to make it DRYer?  */


$(document).ready(function() {

    var checkingBalance = 0; //Keep track of the checking and savings balances somewhere
    var savingBalance = 0;

    var depositSaving = function() { //Add functionality so that a user can deposit money to saving account.
        var amount = $('#savings-amount').val();
        amount = Number(amount); //amount is a string, turn it into a number with  amount = number(amount)
        savingBalance += amount;
        console.log(savingBalance);
        $('#savings-balance').text('$' + savingBalance); //Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
        if (savingBalance > 0) { //When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
            $('#savings-balance').css({
                "background-color": "#E3E3E3"
            })
        }
    }

    $('#savings-deposit').on('click', depositSaving)

    var withdrawSaving = function() { //Add functionality so that a user can withdraw money from saving account.
        var amount = $('#savings-amount').val();
        amount = Number(amount);

        if (amount > savingBalance + checkingBalance) { //withdraw money that is more than the total balance of saving and checking accounts
          alert("You can't withdraw this amout");
          return;
        } else if (amount <= savingBalance) { // withdraw money from saving account if withdraw amount is less than saving account balance
            savingBalance -= amount;
            $('#savings-balance').text('$' + savingBalance);

            if (savingBalance === 0) { //When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
                $('#savings-balance').css({
                    "background-color": "red"
                })
            } else {
                $('#savings-balance').css({
                    "background-color": "#E3E3E3"
                })
            }
        } else { //if withdraw amount is more than saving balance, make it display with withdraw from checking account.
          amount -= savingBalance;
          savingBalance = 0;
          checkingBalance -= amount;


          $('#savings-balance').text('$' + savingBalance);
          $('#checking-balance').text('$' + checkingBalance);
          $('#savings-balance').css({
              "background-color": "red"
          });
          if (checkingBalance === 0) {
            $('#checking-balance').css({
                "background-color": "red"
            });
          }

        }

    };

    $('#savings-withdraw').on('click', withdrawSaving)


    var depositChecking = function() { //Add functionality so that a user can deposit money to checking accounts.
        var amount = $('#checking-amount').val();
        amount = Number(amount); //amount is a string, turn it into a number with  amount = number(amount)
        checkingBalance += amount;
        console.log(checkingBalance);
        $('#checking-balance').text('$' + checkingBalance) //Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
        if (checkingBalance > 0) { //When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
            $('#checking-balance').css({
                "background-color": "#E3E3E3"
            })
        }
    }


    $('#checking-deposit').on('click', depositChecking)

    var withdrawChecking = function() {
        var amount = $('#checking-amount').val();
        amount = Number(amount);
        if (amount > checkingBalance + savingBalance) { // if withdraw amount is more than the total balance of saving and checkig accounts
          alert("You cannot withdraw all this");
          return;
        } else if (amount <= checkingBalance) { //withdraw from checking balance is withdraw amount is less than checking account balance
            checkingBalance -= amount;
            $('#checking-balance').text('$' + checkingBalance);

            if (checkingBalance === 0) { //When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
                $('#checking-balance').css({
                    "background-color": "red"
                })
            } else {
                $('#checking-balance').css({
                    "background-color": "#E3E3E3"
                })
            }
        } else {  // if withdraw amount is more than checking account balance, make display of checkig account balance zero, withdraw the remaining from saving account.
          amount -= checkingBalance;
          checkingBalance = 0;
          savingBalance -= amount;


          $('#savings-balance').text('$' + savingBalance);
          $('#checking-balance').text('$' + checkingBalance);
          $('#checking-balance').css({
              "background-color": "red"
          });
          if (savingsBalance === 0) {
            $('#savings-balance').css({
                "background-color": "red"
            });
          }
        }
    }

    $('#checking-withdraw').on('click', withdrawChecking)


});
