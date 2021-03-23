let arr1 = [1, 2, 3, 4, 99];
function customReduce(fn, arr, startAcc) {
  if (startAcc !== undefined) {
    for (let element of arr) {
      startAcc = fn(startAcc, element);
    }

    return startAcc;
  } else {
    let startAcc = arr[0];
    for (let startAccIndex = 1; startAccIndex < arr.length; startAccIndex++) {
      startAcc = fn(startAcc, arr[startAccIndex]);
    }
    return startAcc;
  }
}
let result = customReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  arr1,
  100
);
console.log(result);
