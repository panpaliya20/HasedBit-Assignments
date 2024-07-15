// // 1. Write code to display from 1 to 100 but just even numbers.
// for(let i=2;i<=100;i+=2){
//     console.log(i);
// }



// // // 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
// function calculate(num1,operater,num2){
//     switch(operater){
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;

//         case '*':
//             return num1 * num2;

//         case '/':
//             if(num2 !=0){
//                 return num1/num2;
//             }else{
//                 return "can not divide by 2";
//             }
//         default : 
//                 return 'invalid input';
//     }
// }
// console.log(calculate(4,'+',5));  //output:- 9





// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

// function calculateTax(salary) {
//     let taxAmount;
//     switch (true) {
//         case (salary <= 500000):
//             // Case 1: 0% tax on the entire salary
//             taxAmount = 0;
//             break;
//         case (salary <= 1000000):
//             // Case 2: 10% tax on the entire salary
//             taxAmount = salary * 0.1;
//             break;
//         case (salary <= 1500000):
//             // Case 3: 20% tax on the entire salary
//             taxAmount = salary * 0.2;
//             break;
//         default:
//             // Case 4: 30% tax on the entire salary
//             taxAmount = salary * 0.3;
//     }
//     return taxAmount;
// }


// console.log(calculateTax(1500000));  //output :- 300000

// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
// // ==>
    // function sumOfProductOfNums(n1, n2) {
    //     let sum = 0;
    //     let num1, num2;
    //     while (n1 > 0 || n2 > 0) {
    //         num1 = n1 % 10;
    //         num2 = n2 % 10;
    //         sum += num1 * num2;
    //         n1 = Math.floor(n1 / 10);
    //         n2 = Math.floor(n2 / 10);
    //     }
    //     return sum;
    // }
    
    // console.log(sumOfProductOfNums(2, 22)); //output will be 4