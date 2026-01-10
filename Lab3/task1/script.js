var arr = [];
for (var i = 0; i < 5; i++) {
    var num = Number(prompt("Enter number " + (i + 1) + ":"));
    arr.push(num);
}

document.write("array :  " + arr.join(", "));
document.write("<br><br>");

var descArr = [...arr];
descArr.sort(function (a, b) {
    return b - a;
});


document.write("descending ");
document.write(descArr.join(", "));
document.write("<br><br>");


var ascArr = [...arr];
ascArr.sort(function (a, b) {
    return a - b;
});

document.write("ascending ");
document.write(ascArr.join(", "));