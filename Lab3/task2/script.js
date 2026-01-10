var numOfUsers;

do {
  numOfUsers = Number(prompt("Enter the number of persons"));
} while (isNaN(numOfUsers) || numOfUsers <= 0);

var users = [];
for (var i = 0; i < numOfUsers; i++) {

  var name;
  do {
    name = prompt("Enter user name");
  } while (name.length <= 3 || name.length >= 10);


  var age;
  do {
    age = Number(prompt("Enter user age"));
  } while (isNaN(age) || age <= 10 || age >= 60);

 
  users.push({
    name: name,
    age: age
  });
}

var table = "<table border='1' cellpadding='5'>" +
            "<tr><th>Name</th><th>Age</th></tr>";

for (var i = 0; i < users.length; i++) {
  table += "<tr>" +
           "<td>" + users[i].name + "</td>" +
           "<td>" + users[i].age + "</td>" +
           "</tr>";
}

table += "</table>";

document.getElementById("table").innerHTML = table;