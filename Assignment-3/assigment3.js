// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

// let indianStates = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

// let vowels = ["a", "e", "i", "o", "u"];

// let filteredStates = indianStates.filter(function (state) {
//     let firstLetter = state[0].toLowerCase();
//     return !vowels.includes(firstLetter);
// });

// console.log(filteredStates);




// Q2) let str = 'I love my India'
// // output expected = 'India my love I'
// // Write code for this.


// let str = 'I love my India';
// let arr = str.split(' ');
// let reversedArr = arr.reverse();
// let reversedStr = reversedArr.join(' ');
// console.log(reversedStr);




// Q3) let string = 'INDIA'
// // output = 'INDONESIA'
// // Use array.splice


// let string = 'INDIA';
// string = string.split('');
// string.splice(2, 0, 'O', 'N', 'E', 'S', 'I', 'A');
// string = string.join('');
// console.log(string);  


// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.


// let string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quidem cumque  , omnis tenetur odit .";
// let vowelCount = 0;
// let consonantCount = 0;
// string = string.toLowerCase();

// for (let i = 0; i < string.length; i++) {
//     if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
//         vowelCount++;
//     } else {
//         consonantCount++;
//     }
// }

// console.log(`Vowels: ${vowelCount}`); //Vowels: 35
// console.log(`Consonants: ${consonantCount}`); //Consonants: 65


// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.


// function correctFn(sentence, wrong, correct) {
//     return sentence.replace(wrong, correct);
// }

// console.log(correctFn('May name is', 'May', 'my')); //output :- my name is




// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

// let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

// let answer = inputArr.filter((num) => {
//     return num > 5;
// });

// console.log(answer);  //output:- 9,10,7



// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce


// const students = [
//     { name: "Ram", scores: [80, 70, 60] },
//     { name: "Mohan", scores: [80, 70, 90] },
//     { name: "Sai", scores: [60, 70, 80] },
//     { name: "Hemang", scores: [90, 90, 80, 80] },
// ];

// let output = students.map((student) => {
//     let average = student.scores.reduce((a, b) => (a + b)) / student.scores.length;
//     return { name: student.name, average: average };
// });
// console.log(output);



// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// // Example - 456 - 4+5+6 = 15 - 1+5 = 6.

// let number = 895;

// let sum = 0;

// while (number > 9) {
//     while (number > 0) {
//         let digit = number % 10;
//         sum += digit;
//         number = Math.floor(number / 10);
//     }
//     console.log(sum);
//     number = sum;
//     sum = 0;
// }
// //output :- 22, 4


// // Q9) Write a function to count the number of words in a paragraph.

// function countWords(paragraph) {
//     return paragraph.split(/\s+/).length;
// }

// console.log(countWords('Lorem ipsum dolor sit amet, consectetur adipiscing elit dow'));  //output :- 9



// // Q10) Write a function to reverse a string.
// // Input - Hello
// // Outpur - olleH

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('Hello')); // Output: olleH


// // Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.




// const students = [
//     { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
//     { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
//     { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
// ];

// const output = students.map(student => {
//     const scores = Object.values(student)[0];
//     const sum = Object.values(scores).reduce((acc, score) => acc + score, 0);
//     const average = sum / Object.keys(scores).length;
//     return { average: average };
// });

// console.log(output);  //output:_-  [ { average: 64.2 }, { average: 64.2 }, { average: 64.2 } ]

