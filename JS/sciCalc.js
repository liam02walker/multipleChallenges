// Get all the buttons
const percentBut = document.getElementById("percentBut");
const clearAllBut = document.getElementById("clearAllBut");
const clearBut = document.getElementById("clearBut");
const deleteBut = document.getElementById("deleteBut");
const oneDivideBut = document.getElementById("oneDivideBut");
const squaredBut = document.getElementById("squaredBut");
const squareRootBut = document.getElementById("squareRootBut");
const divideBut = document.getElementById("divideBut");
const sevenButtons = document.getElementById("sevenButtons");
const eightButtons = document.getElementById("eightButtons");
const nineButtons = document.getElementById("nineButtons");
const multiplyBut = document.getElementById("multiplyBut");
const fourButtons = document.getElementById("fourButtons");
const fiveButtons = document.getElementById("fiveButtons");
const sixButtons = document.getElementById("sixButtons");
const subtractBut = document.getElementById("subtractBut");
const oneButtons = document.getElementById("oneButtons");
const twoButtons = document.getElementById("twoButtons");
const threeButtons = document.getElementById("threeButtons");
const addBut = document.getElementById("addBut");
const negateButtons = document.getElementById("negateButtons");
const zeroButtons = document.getElementById("zeroButtons");
const decimalButtons = document.getElementById("decimalButtons");
const equalButton = document.getElementById("equalButton");
const inputPlacement = document.getElementById("inputPlacement");

// Set the output types
let outPut = "";
let answer = "";

let equalButt = 0;
let clearAll;
let clearedButt;
let deleteButt = "";

let numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let mathArray = ["x", "÷", "-", "+", "%", "1/", "²", "√", "."];

// Clear & Delete Buttons
clearAllBut.addEventListener("click", () => calcFunction(clearAll));
clearBut.addEventListener("click", () => calcFunction(clearedButt));
deleteBut.addEventListener("click", () => calcFunction(deleteButt));

// Math Buttons
multiplyBut.addEventListener("click", () => calcFunction(mathArray[0]));
divideBut.addEventListener("click", () => calcFunction(mathArray[1]));
subtractBut.addEventListener("click", () => calcFunction(mathArray[2]));
addBut.addEventListener("click", () => calcFunction(mathArray[3]));
percentBut.addEventListener("click", () => calcFunction(mathArray[4]));
oneDivideBut.addEventListener("click", () => calcFunction(mathArray[5]));
squaredBut.addEventListener("click", () => calcFunction(mathArray[6]));
squareRootBut.addEventListener("click", () => calcFunction(mathArray[7]));
decimalButtons.addEventListener("click", () => calcFunction(mathArray[8]));

// Number Buttons
zeroButtons.addEventListener("click", () => calcFunction(numArray[0]));
oneButtons.addEventListener("click", () => calcFunction(numArray[1]));
twoButtons.addEventListener("click", () => calcFunction(numArray[2]));
threeButtons.addEventListener("click", () => calcFunction(numArray[3]));
fourButtons.addEventListener("click", () => calcFunction(numArray[4]));
fiveButtons.addEventListener("click", () => calcFunction(numArray[5]));
sixButtons.addEventListener("click", () => calcFunction(numArray[6]));
sevenButtons.addEventListener("click", () => calcFunction(numArray[7]));
eightButtons.addEventListener("click", () => calcFunction(numArray[8]));
nineButtons.addEventListener("click", () => calcFunction(numArray[9]));

// Equals Button
equalButton.addEventListener("click", () => calcFunction(equalButt));

function calcFunction(type) {
  if (type === clearAll || type === clearedButt) {
    outPut = "";
  } else if (type === deleteButt) {
    outPut = outPut.slice(0, -1);
  } else if (type === equalButt) {
    // Replacing to proper math operators
    const outputPattern = /x/gi;
    const replacement = "*";
    const outputPattern2 = /÷/gi;
    const replacement2 = "/";
    const outputPattern3 = /²/gi;
    const replacement3 = "**2";
    const outputPattern4 = /%/gi;
    const replacement4 = "/100";
    const outputPattern5 = /√/gi;
    const replacement5 = "** 0.5";
    const outputResult = outPut.replace(outputPattern, replacement);
    const outputResult2 = outputResult.replace(outputPattern2, replacement2);
    const outputResult3 = outputResult2.replace(outputPattern3, replacement3);
    const outputResult4 = outputResult3.replace(outputPattern4, replacement4);
    const outputResult5 = outputResult4.replace(outputPattern5, replacement5);
    answer = eval(outputResult5);
    // Setting the answer
    outPut = answer;
  } else {
    outPut += `${type}`;
  }
  inputPlacement.innerText = outPut;
}
