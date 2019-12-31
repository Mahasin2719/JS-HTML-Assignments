var marksArray=[];
var marks;

for (var i=0;i<5;i++){

    marksArray.push(marks=parseInt(prompt("Please Enter the marks for Course "+(i+1)+":")));
}

alert(marksArray);

marks=0;
for(var j=0;j<5;j++){

marks += marksArray[j];

}

alert("Total Marks Obtained = "+ marks);
var percent = (marks/500*100);
alert("Percentage = "+ percent);

switch(true) {
    case percent>=90:
        alert("Grade A+");
        break;

    case (percent>=75 && percent<90):
        alert("Grade A");
        break;


    case (percent>=60 && percent<75):
        alert("Grade B");
        break;

    case (percent>=45 && percent<60):
        alert("Grade C");
        break;

    case (percent>=30 && percent<45):
        alert("Grade D");
        break;

    default :
        alert("Grade F");
        break;
}

