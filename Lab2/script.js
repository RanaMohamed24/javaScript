

var name;
while (true) {
    name = prompt("Enter your name:");
    if (name && isNaN(name)) {
        break;
    }
    alert("Name should contain characters only!");
}

var phone;
while (true) {
    phone = prompt("Enter your phone number (8 digits):");
    if (!isNaN(phone) && phone.length === 8) {
        break;
    }
    alert("Phone number must be 8 digits!");
}


var mobile;
var mobileRegex = /^(010|011|012)\d{8}$/;

while (true) {
    mobile = prompt("Enter your mobile number:");
    if (mobileRegex.test(mobile)) {
        break;
    }
    alert("Mobile must be 11 digits and start with 010, 011, or 012!");
}


var email;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

while (true) {
    email = prompt("Enter your email:");
    if (emailRegex.test(email)) {
        break;
    }
    alert("Please enter a valid email!");
}


document.write(`
        <h2>Welcome ${name} </h2>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
    `);

