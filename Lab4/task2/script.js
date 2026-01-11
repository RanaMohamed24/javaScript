
var inp = document.querySelector("#Answer");


inp.addEventListener('keydown', function(e) {
    e.preventDefault();
});

inp.addEventListener('keypress', function(e) {
    e.preventDefault();
});

inp.addEventListener('input', function(e) {
    e.preventDefault();
});


function EnterNumber(num) {
    inp.value += num;
}


function EnterOperator(operator) {
    var lastChar = inp.value[inp.value.length - 1];
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        inp.value = inp.value.slice(0, -1) + operator;
    } else {
        inp.value += operator; 
    }
}


function EnterEqual() {
    try {
        if (inp.value !== '') {
            var result = calculate(inp.value);
            inp.value = result;
        }
    } catch (error) {
        inp.value = "Error";
        setTimeout(function() {
            inp.value = "";
        }, 1500);
    }
}


function calculate(expression) {

    expression = expression.replace(/\s+/g, '');
    

    var numbers = expression.split(/[\+\-\*\/]/);
    var operators = expression.replace(/[0-9\.]/g, '').split('');
    
 
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]);
    }
    
  
    for (var i = 0; i < operators.length; i++) {
        if (operators[i] === '*') {
            numbers[i] = numbers[i] * numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        } else if (operators[i] === '/') {
            if (numbers[i + 1] === 0) {
                throw new Error("Cannot divide by zero");
            }
            numbers[i] = numbers[i] / numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
    }
    
   
    for (var i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            numbers[i] = numbers[i] + numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        } else if (operators[i] === '-') {
            numbers[i] = numbers[i] - numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
    }
    
    return numbers[0];
}


function EnterClear() {
    inp.value = "";
}
