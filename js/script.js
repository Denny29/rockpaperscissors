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
        let comChoice = "";
        if(computerChoice <1/3){
            comChoice = ("paper");
            $("#computerChoice").html(comChoice);
            console.log(comChoice);
        }
        else if(computerChoice > 1/3 && computerChoice < 2/3){
            comChoice = ("scissors");
            $("#computerChoice").html(comChoice);
            console.log(comChoice);
        }
        else if(computerChoice > 2/3){
            comChoice = ("rock");
            $("#computerChoice").html(comChoice);
            console.log(comChoice);
        }
        else if(userChoice == comChoice){
            $("#result").html("Draw");
        }
    });

});
