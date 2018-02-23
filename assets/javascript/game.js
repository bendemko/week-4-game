  // jQuery selects a random number between 19 and 120 to be shown at the start of the game
  $( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)

  // Then jQuery appends the chosen random number to the randomNumber id in the html doc
  $("#randomNumber").text(Random);

  // This sets up a random number between 1 and 12 for each jewel
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

  //  Declares variables for user score, wins and losses
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

//This uses jQuery to the number of wins and losses to the html
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

//This resets the game
function reset(){
  Random=Math.floor(Math.random()*101+19);
  console.log(Random)
  $("#randomNumber").text(Random);
  num1= Math.floor(Math.random()*11+1);
  num2= Math.floor(Math.random()*11+1);
  num3= Math.floor(Math.random()*11+1);
  num4= Math.floor(Math.random()*11+1);
  userTotal= 0;
  $("#finalTotal").text(userTotal);
} 

//This adds the wins to the userTotal
function winner(){
  alert("You won!");
  wins++; 
  $("#numberWins").text(wins);
  reset();
}

//This adds the losses to the userTotal
function loser(){
  alert ("You lose!");
  losses++;
  $("#numberLosses").text(losses);
  reset()
}

//This sets up click for jewels
$("#one").on ("click", function(){
  userTotal = userTotal + num1;
  console.log("New userTotal= " + userTotal);
  $("#finalTotal").text(userTotal); 
          //sets win/lose conditions
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
        })  
$("#two").on ("click", function(){
  userTotal = userTotal + num2;
  console.log("New userTotal= " + userTotal);
  $("#finalTotal").text(userTotal); 
  if (userTotal == Random){
    winner();
  }
  else if ( userTotal > Random){
    loser();
  } 
})  
$("#three").on ("click", function(){
  userTotal = userTotal + num3;
  console.log("New userTotal= " + userTotal);
  $("#finalTotal").text(userTotal);

//This sets up the win/loss conditions
if (userTotal == Random){
  winner();
}
else if ( userTotal > Random){
  loser();
} 
})  
$("#four").on ("click", function(){
  userTotal = userTotal + num4;
  console.log("New userTotal= " + userTotal);
  $("#finalTotal").text(userTotal); 

  if (userTotal == Random){
    winner();
  }
  else if ( userTotal > Random){
    loser();
  }
});   
}); 