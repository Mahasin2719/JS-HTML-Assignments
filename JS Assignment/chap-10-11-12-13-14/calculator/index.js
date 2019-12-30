var firstValue = parseInt(prompt("Please enter the first value" , "2"));
var secondValue = parseInt(prompt("Please enter the second value" , "4"));
var operator = prompt("Please enter the operator (+,-,*,/)" , "+");

var result  ;

if(operator === "+"){

    result = firstValue + secondValue;
    alert(firstValue + " + " + secondValue + " = " + result );

}
else if(operator === "-"){

    result = firstValue - secondValue;
    alert(firstValue + " - " + secondValue + " = " + result );

}
else if(operator === "*"){

    result = firstValue * secondValue;
    alert(firstValue + " * " + secondValue + " = " + result );

}
else if(operator === "/"){

    result = firstValue / secondValue;
    alert(firstValue + " / " + secondValue + " = " + result );

}
else if(operator === "%"){

    result = firstValue % secondValue;
    alert(firstValue + " % " + secondValue + " = " + result );

}
else {

    alert("You have enter wrong values ... !!!");
}