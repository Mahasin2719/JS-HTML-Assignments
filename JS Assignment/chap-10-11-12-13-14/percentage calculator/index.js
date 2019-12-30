var course1 = parseInt(prompt("Please enter the Marks of 1st Course" , "75"));
var course2 = parseInt(prompt("Please enter the Marks of 2nd Course" , "75"));
var course3 = parseInt(prompt("Please enter the Marks of 3rd Course" , "75"));
var course4 = parseInt(prompt("Please enter the Marks of 4th Course" , "75"));
var course5 = parseInt(prompt("Please enter the Marks of 5th Course" , "75"));

var result = (course1 + course2 + course3 + course4 + course5) *100/500 ;

alert("Total Percentage = " + result);