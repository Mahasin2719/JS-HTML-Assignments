var courses = [];
for (var i=0;i<5;i++){
    courses[i] = prompt("Please enter the name of course "+ (i+1));

}



alert(courses);

for (var i=0;i<5;i++){
    courses[i] = prompt("Please enter the name of course "+ (i+1) + " again...");

}

alert(courses);