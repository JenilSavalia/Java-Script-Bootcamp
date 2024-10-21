
// WAP to print Fibonacci series

let fab = [0,1];
function fabb(n){
for(i=2;i<n;i++){
    fab[i] = fab[i-1] + fab[i-2]
}
console.log(fab) 
}

fabb(3)




// WAP to print Fibonacci series (method 2)


function printFibonacciSeries(terms) {
    let a = 0, b = 1;
    console.log(a); // Print the first Fibonacci number (0)
    if (terms > 1) {
      console.log(b); // Print the second Fibonacci number (1)
    }
    
    for (let i = 3; i <= terms; i++) { // Start from the third term
      let next = a + b;  // Generate the next Fibonacci number
      console.log(next); // Print the next Fibonacci number
      a = b;             // Move the sequence forward
      b = next;
    }
  }
  
  printFibonacciSeries(10);
  



// WAP to print Sum of first N  Fibonacci Numbers


let fabb = [0,1]

function fibb(fabb,steps){
    let temp = 0;
   
    for(i=2;i<steps;i++){
        fabb[i] = fabb[i-1] + fabb[i-2]
    }
        for(i=0;i<fabb.length;i++){
        temp = temp + fabb[i]
    }


console.log(temp)
}fibb(fabb,3)






//Check if num is Included in Fibonacci Series

function Fibonacci_check(num){

    if(num<0){
        console.log(num,false)
    }
    
      // Start with the first two Fibonacci numbers
      let a = 0, b = 1;
    let check = false;
    while (a <= num) {
        if (a === num) {
            check = true; // The number is part of the Fibonacci series
        }
        let next = a + b; // Generate the next Fibonacci number
        a = b;            // Move the sequence forward
        b = next;
    }
    
    if(check){
        console.log(num,true)
    }else{console.log(num,false)}
    }
    
    Fibonacci_check(21)
    