let form = document.getElementById("regForm");


let timer = setTimeout(function () {
  form.remove();
  alert("Timeout: No data entered");
}, 30000);


form.addEventListener("input", function () {
  clearTimeout(timer);
});


// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let name = document.getElementById("name").value;
//   let title = document.getElementById("title").value;
//   let email = document.getElementById("email").value;
//   let mobile = document.getElementById("mobile").value;
//   let address = document.getElementById("address").value;


//   location.href =
//     "welcome.html?name=" + name +
//     "&title=" + title +
//     "&email=" + email +
//     "&mobile=" + mobile +
//     "&address=" + address;
// });
