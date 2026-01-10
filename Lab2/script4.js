function add(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Function accepts exactly 2 parameters only");
    }
    return a + b;
}
 console.log(add(5, 10));

//console.log(add(5));

// console.log(add(5, 10, 15)) ;


function reverse() {
    return Array.from(arguments).reverse();
}
console.log(reverse(1, 2, 3, 4));


function addNumbers() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            throw new Error("All parameters must be numbers");
        }
        sum += Number(arguments[i]);
    }

    return sum;
}

//addNumbers(1, 2, "a");
console.log(addNumbers(1, 2, 3));


function getDayName(dateString) {
    let date = new Date(dateString);


    if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}


console.log(getDayName("2026-01-04")); // Sunday



