// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$(document).ready(function() {
    

    $("button").click(function(){
        let userChoice = $("#input").val();
        userChoice.toLowerCase();
        $("#userChoice").html(userChoice);
        let computerChoice = Math.random();
        
        if(computerChoice <1/3){
            $("#computerChoice").html("rock");
            if(userChoice="rock"){
                $("#result").html("Draw!");
            }
            else if(userChoice="paper"){
                $("#result").html("You win!");
            }
            else if(userChoice="scissors"){
                $("#result").html("You lose!");
            }
        }
        
        else if(computerChoice > 1/3 && computerChoice < 2/3){
            $("#computerChoice").html("paper");
            if(userChoice="rock"){
                $("#result").html("You lose");
            }
            else if(userChoice="paper"){
                $("#result").html("Draw!");
            }
            else if(userChoice="scissors"){
                $("#result").html("You win!");
            }
        }
        
        else if(computerChoice > 2/3){
        $("#computerChoice").html("scissors");
        if(userChoice="rock"){
                $("#result").html("You win");
            }
            else if(userChoice="paper"){
                $("#result").html("You lose!");
            }
            else if(userChoice="scissors"){
                $("#result").html("Draw!");
            }
        }
    });

});
