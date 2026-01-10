//Question 1
/*
var y;
console.log(y); // Output: undefined

console.log(y);
*///Uncaught ReferenceError: y is not defined 
/*
var x=10;
var y =20;
console.log(y*x-1); // Output: 199
*/


/*
var y ;
console.log(typeof(y));
*/ // Output: undefined


/*
var x = "1";
var y = 2;
console.log(x + y); // Output: "12"
*/



/*
var x = 1 ;
var y = true;
console.log(x + y); // Output: 2
*/


//Question 2
/*

var message ;
do{
  message  = prompt("Enter your message:");
}
while (!message || message.trim() ==="") {

    for (var i = 1; i <= 6; i++) {
        document.write("<h" + i + ">" + message +" "+i+"</h" + i + ">" );

    }
} 
    */



//Question 3
/*
var sum = 0;

while (true) {
    var value = prompt("Enter a number");
    if (value === null) {
        break;
    }
    value = Number(value);
    if (isNaN(value)) {
        alert("Invalid number, please try again.");
        continue;
    }
    if (value === 0) {
        break;
    }
    sum += value;

    if (sum > 100) {
        break;
    }
}
alert("The total sum is: " + sum);

*/
//Question 4


var name ;
var birthYear;
var age;
do{
    name = prompt("Enter your name:");

}while (!name || !isNaN(name));

do{
    birthYear = prompt("Enter your birth year:");
    birthYear = Number(birthYear);
}while (isNaN(birthYear) || birthYear >=2010);

age = 2026 - birthYear ;

document.write ("<p><b><u>Name :</u></b>" + name + "</p>");
document.write ("<p><b><u>BirthYear :</u></b>"+ birthYear + "</p>");
document.write ("<p><b><u>Age :</u></b>" + age + "</p>");












