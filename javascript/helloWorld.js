console.log("Hello World"); 


var firstNumber = 3; 

var secondNumber = 6;

function clickButton() {
    if (firstNumber < 2) {
        document.getElementById("someMath").innerHTML = firstNumber;
    }
    else {
var newNumber =  document.getElementById("someMath").innerHTML = firstNumber * secondNumber;
    }
    document.getElementById("someMath").innerHTML = newNumber; 
    console.log(newNumber); 
   
    
}

console.log(clickButton())


