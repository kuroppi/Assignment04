// IMPORT THE MODULE
import { add, subtract, multiply, divide } from "./modules/calculator.js";

let num1, num2, operator;

do {
    // COLLECT FIRST NUMBER FROM USER
    num1 = Number(prompt("Enter the first number: "));
    
    // COLLECT SECOND NUMBER FROM USER
    num2 = Number(prompt("Enter the second number: "));

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operator = prompt("Enter the operation you want to perform (add, subtract, multiply, divide):");

    // CHECK TO SEE WHAT OPERATION THEY'RE USING
    // CALL THE APPROPRIATE FUNCTION

    switch (operator) {
    case "add":
      alert(add(num1, num2));
      break;
    case "subtract":
      alert(subtract(num1, num2));
      break;
    case "multiply":
      alert(multiply(num1, num2));
      break;
    case "divide":
      alert(divide(num1, num2));
      break;
    default:
      alert("Invalid operation entered!");
  }
} while (!["add", "subtract", "multiply", "divide"].includes(operator));
