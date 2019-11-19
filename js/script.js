// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$(document).ready(function() {
    

    $("button").click(function(){
        let userChoice = $("#input").val();
        $("#userChoice").html(userChoice);
        let computerChoice = Math.random();
        let comChoice = ("");
        if(computerChoice <1/3){
            $("#computerChoice").html("paper");
            comChoice = ("paper");
        }
        else if(computerChoice > 1/3 && computerChoice < 2/3){
                $("#computerChoice").html("scissors");
                comChoice = ("scissors");
        }
        else if(computerChoice > 2/3){
            $("#computerChoice").html("rock");
            comChoice = ("rock");
            
        }
        else if(userChoice = comChoice){
            $("#result").html("Draw");
        }
    });

});
