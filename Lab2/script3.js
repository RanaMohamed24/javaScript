var arr = [];

  for (var i = 0; i < 3; i++) {
    var num;
    do {
      num = Number(prompt(`Enter number ${i + 1}`));
    } while (isNaN(num));

    arr.push(num);
  }


  var sum = arr[0] + arr[1] + arr[2];
  var multiply = arr[0] * arr[1] * arr[2];

  document.write(
    `<p>sum of the 3 values ${arr.join(" + ")} = ${sum}</p>`
  );

  document.write(
    `<p>multiplication of the 3 values ${arr.join(" * ")} = ${multiply}</p>`
  );

 
  if (arr[1] === 0 || arr[2] === 0) {
    document.write(
      `<p>division of the 3 values ${arr.join(" / ")} = Cannot divide by zero</p>`
    );
  } else {
    var divide = arr[0] / arr[1] / arr[2];
    document.write(
      `<p>division of the 3 values ${arr.join(" / ")} = ${divide}</p>`
    );
  }