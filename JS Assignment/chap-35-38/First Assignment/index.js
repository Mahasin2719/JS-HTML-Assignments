function capFunction (inputValue) {

alert(inputValue);


    
var inputArray = inputValue.split(" ");

// alert(inputArray);

for (var i=0;i<inputArray.length;i++){

var firstChar= inputArray[i].slice(0,1);
var otherChars = inputArray[i].slice(1);

firstChar= firstChar.toUpperCase();
otherChars= otherChars.toLowerCase();

inputArray[i] = firstChar + otherChars;

}

inputValue= "";

for(var j=0;j<inputArray.length;j++ ){

inputValue+= (inputArray[j] + " ");


}

return inputValue ;

}

var cappedOutput = capFunction(prompt("Please any enter some text. \n(You can use both upper and lower cases.)", "cloUd naTive computinG"))

console.log(cappedOutput);
alert(cappedOutput);