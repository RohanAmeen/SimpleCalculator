function simpleCalculator() {
    // Ask the user for the first number
    const firstNumber = parseFloat(prompt("Enter the first number:"));
  
    // Check if the input is a valid number
    if (isNaN(firstNumber)) {
      alert("Invalid input. Please enter a valid number.");
      return;
    }
  
    // Ask the user for the operator (+, -, *, /)
    const operator = prompt("Enter an operator (+, -, *, /):");
  
    // Check if the operator is valid
    if (!/[-+*/]/.test(operator)) {
      alert("Invalid operator. Please enter a valid operator.");
      return;
    }
  
    // Ask the user for the second number
    const secondNumber = parseFloat(prompt("Enter the second number:"));
  
    // Check if the input is a valid number
    if (isNaN(secondNumber)) {
      alert("Invalid input. Please enter a valid number.");
      return;
    }
  
    // Perform the calculation based on the operator
    let result;
    switch (operator) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        if (secondNumber === 0) {
          alert("Division by zero is not allowed.");
          return;
        }
        result = firstNumber / secondNumber;
        break;
    }
  
    alert(`Result: ${firstNumber} ${operator} ${secondNumber} = ${result}`);
  }
  
  // Call the function to start the calculator
  simpleCalculator();
  