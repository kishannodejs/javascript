const numbers = [175, 50, 25];

console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
    console.log("total===",total);
    console.log("num===",num);
  return total - num;
}

const numbers2 = [15.5, 2.3, 1.1, 4.7];

//console.log(array.reduce(function(total, currentValue, currentIndex, arr), initialValue));

console.log(numbers2.reduce(getSum, 10));

function getSum(total, num) {
    console.log("total===",total);
    console.log("num===",num);
  return total + Math.round(num);
}