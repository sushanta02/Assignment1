document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    calculate(); // Call calculate function when form is submitted
  });
  
  function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
  
    let result;
  
    // Evaluate the expression using eval
    try {
      result = eval(`${num1} ${operation} ${num2}`);
      // Display result
      document.getElementById('result').innerHTML = `Result: ${result}`;
    } catch (error) {
      // Display error message if evaluation fails
      document.getElementById('result').innerHTML = 'Error: Invalid expression';
    }
  }
  