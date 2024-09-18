// 5. Factorial of a Number


let num;
function Factorial(num){
    
    let fact =1;
for(i=1;i<=num;i++){

    fact = fact*i
}
console.log(fact);
}
Factorial(5)


// 6. Reverse a Number

// extracting num > push to array > join funct to convert to number

// function revNUMBER(num){
// arr = []
// while(num>0){
//     arr.push(num%10)
//     num = Math.floor(num/10)
// }
// rev = arr.join("")  // to join the array
// console.log(rev)
// }revNUMBER(9642)



// extracting num > adding mathematically 

// function revNUMBER(num){

//     let rev = 0;
//     while(num>0){
//     rev = rev*10 + num%10
//     num = Math.floor(num/10)
// }

// console.log(rev)
// }revNUMBER(9642)


// num > sring > reverse the string > string to number

// function revNUMBER(num){
// str = num.toString()
// let rev = "";
// for(i=str.length-1;i>=0;i--){
//     rev = rev + str[i]
// }

// console.log(Number(rev))  // using Number() for Convert a String to Number in JavaScript
// }revNUMBER(9642)

// Convert a String to Number in JavaScript
// https://www.geeksforgeeks.org/convert-a-string-to-number-in-javascript/


// 7. Palindrome Check for Number

// function Palindrome(num){
// arr = []
// let temp = num;
// while(num>0){
//     arr.push(num%10)
//     num = Math.floor(num/10)
// }
// rev = arr.join("")  // to join the array

// if(rev==temp){
//     console.log(rev,true)
// }
// else{console.log(false)}

// }Palindrome(121)


// 8. Sum of Digits

// function sumdigits(num){
// let count = 0;
// while(num>0){
//     count = count + num%10;
//     num = Math.floor(num/10);
// }
// console.log(count)
// }sumdigits(9642)


// 10. Fibonacci Sequence (Write a program to print the Fibonacci sequence up to a given number of terms.)

// function Fibonacci(step){
// let fibb = [0,1]

// for(i=2;i<step;i++){

// fibb[i] = fibb[i-1] + fibb[i-2];

// }
// console.log(fibb)
// }Fibonacci(3)


//Check if num is Included in Fibonacci Series

// function Fibonacci_check(num){

// if(num<0){
//     console.log(num,false)
// }

//   // Start with the first two Fibonacci numbers
//   let a = 0, b = 1;
// let check = false;
// while (a <= num) {
//     if (a === num) {
//         check = true; // The number is part of the Fibonacci series
//     }
//     let next = a + b; // Generate the next Fibonacci number
//     a = b;            // Move the sequence forward
//     b = next;
// }

// if(check){
//     console.log(num,true)
// }else{console.log(num,false)}
// }

// Fibonacci_check(21)


// 20. LCM of Two Numbers



// LCM (a,b) = a*b / GCD(a,b)

// Note Enter Largest Num = num1 
// function LCM(num1, num2){


//     function GCD(num1, num2) {
//         let arr1 = [];
//         let arr2 = [];
//         for (i = 1; i <= num1; i++) {
//             if (num1 % i == 0) {
//                 arr1.push(i)
//             }
//         }
//         for (i = 1; i <= num2; i++) {
//             if (num2 % i == 0) {
//                 arr2.push(i)
//             }
//         }

//         let final = []
//         for (i = 0; i < arr1.length; i++) {

//             if (arr1.includes(arr2[i])) {
//                 final.push(arr2[i])
//             }

//         }
//         final.sort((a, b) => b - a)
//         return final[0]
//     }

//     let lcm = num1 * num2 / GCD(num1, num2)
//     console.log(lcm)
// }LCM(35,7)


// 19. GCD of Two Numbers

// note : num1 should be largest 
// function gcd(num1, num2) {
//     let arr1 = [];
//     let arr2 = [];
//     for (i = 0; i <= num1; i++) {

//         if (num1 % i == 0) {
//             arr1.push(i)
//         }
//     }

//     for (i = 0; i <= num2; i++) {
//         if (num2 % i == 0) {
//             arr2.push(i)
//         }
//     }


//     let final_array = [];
//     for (i = 0; i < arr1.length; i++) {

//         if (arr1.includes(arr2[i])) {
//             final_array.push(arr2[i])
//         }

//     }
//     console.log(final_array[final_array.length - 1])

// }
// gcd(30,50)



// 21. ASCII Value of a Character

// take input from the user
// const string = "j"

// // convert into ASCII value
// const result = string.charCodeAt();

// console.log(`The ASCII value is: ${result}`);


// 30. Calculate the Power of a Number

function Power(base,exponent){
let result = 1;
for(i=0;i<exponent;i++){

    result = result*base
}
console.log(result)
}Power(2,3)


// 32. Check Armstrong Number

function check_armstring(num){
let temp = num;
let arm = 0;
let str = num.toString()
let len = str.length;1
while(num>0){
arm = arm + (num%10)**len;
num = Math.floor(num/10)
}

if(arm==temp){
    console.log(true);
}
else{
    console.log(false);

}
}check_armstring(999)


// 35. Check If a Number is a Perfect Square

//using in built function

// function Perfect(num){
// let sqrt = Math.sqrt(num)
// console.log(sqrt)
// if(sqrt == Math.floor(sqrt)){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// }Perfect(9)

// using while loop

// function Perfect(num){
// let check = false
// let i = 1
// while(i*i <= num){
// if(i*i == num){
//     check = true
// }
// i++
// }
// if(check){
//     console.log(true,num)
// }
// else{
//     console.log(false,num)

// }
// }Perfect(19)


// 34. Find the Second Largest Number in an Array
