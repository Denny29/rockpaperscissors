// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$(document).ready(function() {
    

    $("button").click(function(){
        let input = $("#input").val();
        $("#userChoice").html(input);
        let choice = Math.random();
        if(choice <1/3){
            $("#computerChoice").html("paper");
        }
        else if(choice > 1/3 && choice < 2/3){
                $("#computerChoice").html("scissors");
        
        }

        else if(choice > 2/3){
            $("#computerChoice").html("rock");
        }
    });

});
