

// TASK-1 

// function sum(n) {
//   if (n === 0) {
//     return 0;
//   } 
//     return n + sum(n - 1);
  
// }
// console.log(sum(5)); 
// console.log(sum(1)); 
// console.log(sum(12));

// Task -2 



// function factorial(n){

//     if (n === 0){
//         return 1;
//     }

//     return n * factorial(n -1)

// }
// console.log(factorial (5));
// console.log(factorial (4));
// console.log(factorial (2));


// task -3 
// Преподаватель дал своему ученику задание вычислить сумму
// цифр положительного целого числа с помощью рекурсии.Студент
// придумал решение, но оно не кажется правильным. Помогите ей
// исправить ошибку.


// function sumDigit(n) {
//  if (n < 10) {
//     return n;
//   } 
//   return n % 10 + sumDigit(Math.floor(n / 10));
  
// }
// console.log(sumDigit(111));
// console.log(sumDigit(222));
// console.log(sumDigit(333));



// Task - 4

// function doubleFactorial(num){

//     if (num <= 0 ){
//          return 1;
//              }
        
//     return num * doubleFactorial(num -2)
// }
// console.log(doubleFactorial(0))
// console.log(doubleFactorial(2))
// console.log(doubleFactorial(9))


// TASK- 5

// function fibonacci(n){
//     if(n == 0){
//         return 0;
//     }
//     if(n == 1){
//         return 1;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(5));
// console.log(fibonacci(4));
// console.log(fibonacci(2));



// #Task 6.Closure

//  function makePlusFunction(n){

//  }