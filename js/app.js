let userName= prompt('Whats your name?')

document.write ('welcome to my page ' + userName);


let userAnswer= prompt ('Do you think My age is 26?')


if (userAnswer.toUpperCase()=== 'YES' || userAnswer.toUpperCase()=== 'Y'){
alert ('Your answer is correct!')
console.log(userAnswer);
}
else if (userAnswer.toUpperCase()=== 'NO' || userAnswer.toUpperCase()=== 'N'){
    alert ('Your answer is not correct!')
    console.log(userAnswer);
}else{
    alert('invalid answer please enter yes or no');
}

let userInput= prompt ('Do you think I graduated?')
if (userInput.toUpperCase()=== 'YES' || userInput.toUpperCase()=== 'Y'){
    alert ('Your answer is correct!')
    console.log(userInput);
    }
    else if (userInput.toUpperCase()=== 'NO' || userInput.toUpperCase()=== 'N'){
        alert ('Your answer is not correct!')
        console.log(userInput);

    }else{
        alert('invalid answer please enter yes or no');
    }

let userGuess= prompt ('Do you think I am A pharmacist?')
    if (userGuess.toUpperCase()=== 'YES' || userGuess.toUpperCase()=== 'Y'){
        alert ('Your answer is correct!')
        console.log(userGuess);
        }
        else if (userGuess.toUpperCase()=== 'NO' || userGuess.toUpperCase()=== 'N'){
            alert ('Your answer is not correct!')
            console.log(userGuess);
        }else{
            alert('invalid answer please enter yes or no');
        }

let userOutput= prompt ('Do you think I live in Jordan?')            
if (userOutput.toUpperCase()=== 'YES' || userOutput.toUpperCase()=== 'Y'){
    alert ('Your answer is correct!')
    console.log(userOutput);
    }
    else if (userOutput.toUpperCase()=== 'NO' || userOutput.toUpperCase()=== 'N'){
        alert ('Your answer is not correct!')
        console.log(userOutput);
    }else{
        alert('invalid answer please enter yes or no');
    }

let userResult= prompt ('Do you think I am single?')
if (userResult.toUpperCase()=== 'YES' || userResult.toUpperCase()=== 'Y'){
    alert ('Your answer is correct!')
    console.log(userResult);
    }
    else if (userResult.toUpperCase()=== 'NO' || userResult.toUpperCase()=== 'N'){
        alert ('Your answer is not correct!')
        console.log(userResult);
    }else{
        alert('invalid answer please enter yes or no');
    }