  var nameInput = document.getElementById("nameInput");
        var ageInput = document.getElementById("ageInput");
        var emailInput = document.getElementById("emailInput");
        var nameMsg = document.getElementById("nameMsg");
        var ageMsg = document.getElementById("ageMsg");
        var emailMsg = document.getElementById("emailMsg");
        
        nameInput.onkeyup = function() {
            var value = nameInput.value;
            if (value === "") {
                nameMsg.innerHTML = "Name is required!";
                nameMsg.style.color = "red";
            } else {
                var hasNumber = false;
                for (var i = 0; i < value.length; i++) {
                    if (value[i] >= "0" && value[i] <= "9") {
                        hasNumber = true;
                        break;
                    }
                }
                if (hasNumber) {
                    nameMsg.innerHTML = "Name must contain letters only!";
                    nameMsg.style.color = "red";
                } 
            }
        };
        ageInput.onkeyup = function() {
            if (ageInput.value === "") {
                ageMsg.innerHTML = "Age is required!";
                ageMsg.style.color = "red";
            } else if (isNaN(ageInput.value) || ageInput.value <= 0) {
                ageMsg.innerHTML = "Age must be a valid number!";
                ageMsg.style.color = "red";
            } 
        };
        
        emailInput.onkeyup = function() {
            if (emailInput.value === "") {
                emailMsg.innerHTML = "Email is required!";
                emailMsg.style.color = "red";
            } else if (emailInput.value.indexOf("@") === -1 || emailInput.value.indexOf(".") === -1) {
                emailMsg.innerHTML = "Email must contain @ and .";
                emailMsg.style.color = "red";
            } 
        };
        function addUser() {
            var name = nameInput.value;
            var age = ageInput.value;
            var email = emailInput.value;
            
            if (name === "" || age === "" || email === "") {
                alert("All fields are required!");
                return;
            }
            
            var hasNumber = false;
            for (var i = 0; i < name.length; i++) {
                if (name[i] >= "0" && name[i] <= "9") {
                    hasNumber = true;
                    break;
                }
            }
            if (hasNumber) {
                alert("Name must contain letters only!");
                return;
            }
            
            if (isNaN(age) || age <= 0) {
                alert("Age must be a valid number!");
                return;
            }
            
            if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
                alert("Email must be valid!");
                return;
            }
            
            document.getElementById("tableContainer").style.display = "block";
            
            var table = document.getElementById("userTable");
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
            cell1.innerHTML = name;
            cell2.innerHTML = age;
            cell3.innerHTML = email;
            
            resetForm();
        }
        
        function resetForm() {
            nameInput.value = "";
            ageInput.value = "";
            emailInput.value = "";
            nameMsg.innerHTML = "";
            ageMsg.innerHTML = "";
            emailMsg.innerHTML = "";
        }