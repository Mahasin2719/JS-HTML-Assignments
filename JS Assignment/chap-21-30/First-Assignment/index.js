var a = parseFloat(prompt("Please Enter a Floating-Point Number"));
var reverseText = "";

a= Math.ceil(a);

var text = "Lets start the game";

var slicedText = text.slice(0,a);

alert(slicedText);

for(var j=0; j< slicedText.length; j++){

alert(slicedText[slicedText.length-(j+1)]);

reverseText +=slicedText[slicedText.length-(j+1)];


}

alert(reverseText);