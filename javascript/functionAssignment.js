//Q.1 Write a function that takes two parameters and returns their sum.

// function add(a, b){
//   let sum = a + b;
//   return sum;
// }
// let sum = add(2, 3);
// console.log(sum)

//Q.2 Create a function that calculates the average of an array of numbers.

// function array(arrays){
//   let i;
//   let add = 0;
//   let average = 0;
//   for( i = 0; i < arrays.length; i++)
//    {
//   add+= arrays[i]
//    }
//    average = add / arrays.length;
//    return average;
  
// }
// let averageArrays = array([1, 2, 3, 4, 5,1])
// console.log(averageArrays)

//Q.3 Write a function that checks if a given number is even or odd.

// function evenodd(num){
//   let evenOdd;
//   if(num % 2 === 0){
//     evenOdd = `${num} is even num`;
//     return evenOdd;
//   }
//   else {
//     evenOdd = `${num} is odd num`;
//     return evenOdd;
//   }
// }
// let evenOdd = evenodd(5)
// console.log(evenOdd)

// Anonymos function
// let add = function(a, b){
//   return a + b;
// }
// let addition = add(3, 2)
// console.log(addition)

//Arrow function

// let add = (a, b) => a + b;
// let addition = add(2, 3)
// console.log(addition)

// callBack function
// let add = function(a, b, multiply)
// {
//   console.log(multiply)
//   return a + b;

// }
// let multiply = function(a, b){
//   return `the sum is ${a * b}`
// }
// let addition = add(1, 2, multiply(2, 5));

let string = "123";
let stringToNum = Number(string);
console.log(stringToNum)
console.log(typeof(stringToNum))