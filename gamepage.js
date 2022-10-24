// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
var x = document.getElementById("guessField").value;
// made for correct Guess
if(x == y)
{
    alert("CONGRATULATIONS!!!" +playername+" YOU GUESSED IT RIGHT IN "
        + guess + " GUESS ");
    guess= 1;
}
// function for number guessed by user     
 else if(x > y)

 {
    gues++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
 }
 else
 {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
 }

 function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
 }