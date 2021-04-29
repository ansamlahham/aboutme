'use strict';
let score = 0
let userName= prompt('Whats your name?')




let userAnswer= prompt ('Do you think My age is 26?');

function user1Answer(){
    if (userAnswer.toUpperCase()=== 'YES' || userAnswer.toUpperCase()=== 'Y'){
  

    }(userAnswer) ;
}


if (userAnswer.toUpperCase()=== 'YES' || userAnswer.toUpperCase()=== 'Y'){
alert ('Your answer is correct!')
score ++ ;
}
else if (userAnswer.toUpperCase()=== 'NO' || userAnswer.toUpperCase()=== 'N'){
    alert ('Your answer is not correct!')
    
}else{
    alert('invalid answer please enter yes or no');
}

let userInput= prompt ('Do you think I graduated?')
if (userInput.toUpperCase()=== 'YES' || userInput.toUpperCase()=== 'Y'){
    alert ('Your answer is correct!')
    
    score ++ ;

    }
    else if (userInput.toUpperCase()=== 'NO' || userInput.toUpperCase()=== 'N'){
        alert ('Your answer is not correct!')
       

    }else{
        alert('invalid answer please enter yes or no');
    }

let userGuess= prompt ('Do you think I am A pharmacist?')
    if (userGuess.toUpperCase()=== 'YES' || userGuess.toUpperCase()=== 'Y'){
        alert ('Your answer is correct!')
       
        score ++ ;
        }
        else if (userGuess.toUpperCase()=== 'NO' || userGuess.toUpperCase()=== 'N'){
            alert ('Your answer is not correct!')
          
        }else{
            alert('invalid answer please enter yes or no');
        }

let userOutput= prompt ('Do you think I live in Jordan?')            
if (userOutput.toUpperCase()=== 'YES' || userOutput.toUpperCase()=== 'Y'){
    alert ('Your answer is correct!')
   
    score ++ ;
    }
    else if (userOutput.toUpperCase()=== 'NO' || userOutput.toUpperCase()=== 'N'){
        alert ('Your answer is not correct!')
       
    }else{
        alert('invalid answer please enter yes or no');
    }

let userResult= prompt ('Do you think I am single?')
if (userResult.toUpperCase()=== 'YES' || userResult.toUpperCase()=== 'Y'){
    alert ('Your answer is correct!')
   
    score ++ ;
    }
    else if (userResult.toUpperCase()=== 'NO' || userResult.toUpperCase()=== 'N'){
        alert ('Your answer is not correct!')
        
    }else{
        alert('invalid answer please enter yes or no');
    }

    
    for (let i =0; i<4 ; i++) {
    let favNumber = prompt ('What do you think my fav number is from 1 to 10?');
   
    
    switch (favNumber){
        case '1' :
        case '2' :
        case '3' :   
        case '4' : 
        case '5' : 
        case '6' : 
        alert('too low');
        break ;

        
        case '8':
        case '9':
        case '10':
        alert('too high');
        break ;

       
        case '7':
        alert('YAHOO You are correct');
        score ++ ;
        i = 4
        break ;

        default :
        alert('Not correct try again!!');
    }
    if ( i == 3){
        alert('OPPS! the answer was 7');
    }
    }

    let favFruites = ['Apple', 'orange' , 'banana'];
    let fruite = false 
    for (let i =0; i<6 ; i++) {
        let userAttempt = prompt ('What do you think my fav fruite is?');
        for (let g=0 ; g<favFruites.length ;g++){
            if (userAttempt == favFruites[g]) {
            fruite = true 
            break ;

        }

        }
        if (fruite == true){
            alert('You guessed');
            score ++ ;
            break ;
        }
    }  
    alert('Actually my faviourite fruites are Apple , orange and banana');
  
    document.write ( ' Welcome to my page ' + userName + ' You score is  ' + score + '/7' );
    
