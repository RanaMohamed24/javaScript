var radius = Number(prompt("Enter the radius of the circle:"));

while (isNaN(radius) || radius <= 0) {
    radius = Number(
        prompt("Please enter a  positive number ")
    );
}

var area = Math.PI * Math.pow(radius, 2);

alert("Total area of the circle is " + area);


// var num = prompt("Enter the value you want to square it :");
// while (isNaN(num) || num < 0) {
//     num = prompt("Please enter a non-negative number:");
// }
//     var result = Math.sqrt(num);

//     alert("Square root of " + num + " is " + result);