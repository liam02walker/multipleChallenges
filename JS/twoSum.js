const valueInput = document.getElementById("valueHere");
const targetInput = prompt("Pick a number!");
const targetInputNum = +targetInput;

console.log(typeof targetInputNum);

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

function stretchValue(arr, target) {
  if (typeof arr === "object") {
    for (i = 0; i < arr.length; i++) {
      let remainder = target - arrNum[i];
      // 25 = 44 - 19
      if (arrNum.includes(remainder)) {
        if (arrNum[i] + remainder === target) {
          valueInput.innerText = `${arrNum[i]} + ${remainder} = ${target}`;
          return;
        }
      }
    }
  }
}
stretchValue(arrNum, targetInputNum);

// function valueNum(arr, target) {
//   if (typeof arr === "object") {
//     if (targetInputNum) {
//       for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//           if (arrNum[i] + arrNum[j] === target) {
//             valueInput.innerText = `${arrNum[i]} + ${arrNum[j]} = ${target}`;
//             return;
//           } else {
//             valueInput.innerText = "No Correct Answer";
//           }
//         }
//       }
//     } else {
//       return;
//     }
//   }
// }
// valueNum(arrNum, targetInputNum);
