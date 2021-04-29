'use strict';
let score = 0
let userName= prompt('Whats your name?')



<<<<<<< HEAD

let userAnswer= prompt ('Do you think My age is 26?');

function user1Answer(){
    if (userAnswer.toUpperCase()=== 'YES' || userAnswer.toUpperCase()=== 'Y'){
  

    }(userAnswer) ;
}
=======
//Q1
function Question1(){
let userAnswer= prompt ('Do you think My age is 26?')
>>>>>>> 1f8da1909188f6de5fe7344a81cc3b0ea78e9040


if (userAnswer.toUpperCase()=== 'YES' || userAnswer.toUpperCase()=== 'Y'){
alert ('Your answer is correct!')
score ++ ;
}
else if (userAnswer.toUpperCase()=== 'NO' || userAnswer.toUpperCase()=== 'N'){
    alert ('Your answer is not correct!')
    
}else{
    alert('invalid answer please enter yes or no');
}
}
Question1 ();

//Q2
function Question2(){
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
}
Question2();
    //Q3
    function Question3(){
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
    }
    Question3();
//Q4
function Question4(){
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
}
Question4();
//Q5
function Question5(){
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
}
Question5();

    //Q6
    function Question6(){
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
}
Question6 ();
//Q7
function Question7(){
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
}
Question7();