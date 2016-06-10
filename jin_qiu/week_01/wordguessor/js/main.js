/*
You'll create a simple word guessing game where the user gets infinite tries to
guess the word (like Hangman without the hangman, or like Wheel of Fortune
without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
and one to hold the current guessed letters (e.g. it would start with '', '', '_'
and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array
to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and
congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed,
and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various
letters to check that your program works.*/
// hint: 在英文中，12個字母出現次數最多的是（由多至少排列）：e-t-a-o-i-n-s-h-r-d-l-u。

var word = ['F','O','X'];
var guessPool=[];

var guessLetter = function (guess){

    for (var i=0; i<word.length; i++){
        if (guess === word[i]) {
            guessPool.push(guess);
            console.log ('the current guessed letters are '+ word[i]+' '+
            'congratulations on founding a new letter')
          };

          /*if (guessPool.length ===word.length){
          console.log ( 'well done! you have won the game')
        };*/
    }

  }
