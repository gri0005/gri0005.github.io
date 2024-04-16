function calcResult(x, y, z) {
  let sumGrade = x + y + z;
  console.log("sum of grades is", sumGrade);

  let divGrade = sumGrade / 3;
  console.log("average grade is", divGrade);
  return divGrade;
}

let result = calcResult(37, 80, 73);

if (result < 40) {
  console.log("Failing grade");
} else if (result >= 40 && result < 60) {
  console.log("Passing grade");
} else if (result >= 60 && result < 70) {
  console.log("Credit");
} else if (result >= 70 && result < 90) {
  console.log("Distinction");
} else {
  console.log("High Distinction");
}
