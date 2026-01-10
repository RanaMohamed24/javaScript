 var str = prompt("Enter a string:");

 
    var caseSensitive = confirm("Do you want to consider case sensitivity?");

    var str1 = str;
    var str2;

    if (!caseSensitive) {
        str1 = str1.toLowerCase();
    }

    str2 = str1.split("").reverse().join("");

    if (str1 === str2) {
        alert("The string is a Palindrome ");
    } else {
        alert("The string is NOT a Palindrome ");
    }