function anyNumFactorial(){
var inputValue = parseInt(prompt("Please Enter a Number"));

var factorial =inputValue;

for(var i=inputValue; i>1;i--){

// factorial *= (i * (i-1));
factorial *= (i-1);


}

alert(factorial)
}

anyNumFactorial();