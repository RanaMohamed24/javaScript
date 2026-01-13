
let params = new URLSearchParams(location.search);

let name = params.get("name");
let title = params.get("title");
let email = params.get("email");
let mobile = params.get("mobile");
let address = params.get("address");

document.getElementById("welcomeMsg").innerText =
  "Welcome " + title + " " + name;

document.getElementById("info").innerHTML =
  "Email: " + email + "<br>" +
  "Mobile: " + mobile + "<br>" +
  "Address: " + address;
