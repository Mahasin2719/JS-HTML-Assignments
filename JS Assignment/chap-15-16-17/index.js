var courses = [];
var course1 = prompt("Please enter the name of 1st course");
var course2 = prompt("Please enter the name of 2nd course");
var course3 = prompt("Please enter the name of 3rd course");
var course4 = prompt("Please enter the name of 4th course");
var course5 = prompt("Please enter the name of 5th course");

courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);

alert(courses);

course1 = prompt("Please enter the name of 1st course again", course1);
course2 = prompt("Please enter the name of 2nd course again", course2);
course3 = prompt("Please enter the name of 3rd course again", course3);
course4 = prompt("Please enter the name of 4th course again", course4);
course5 = prompt("Please enter the name of 5th course again", course5);

courses.splice(0,1,course1);
courses.splice(1,2,course2);
courses.splice(2,3,course3);
courses.splice(3,4,course4);
courses.splice(4,5,course5);

alert(courses);