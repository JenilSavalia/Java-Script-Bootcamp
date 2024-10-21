Armstrong Number Ques

---------------------------------------------------

Method_1 ___ string>Array>iterating over array

const number = '153';
const digits = Array.from(number)

let len = digits.length
let sum = 0;

 function arm(len){
     for(i=0;i<len;i++){
         sum = sum + digits[i]**len
     }
    
     if(sum==number){
         console.log('IT IS ARM')
         
     }
     else{console.log('IT IS not ARM')}
 }
 
 arm(len)


----------------------------------------------------
Method_1.1  number>Array>iterating over array

function splitNumberIntoDigits(number) {
    return number
        .toString()
        .split("")
        .map(Number);
}

// Example usage
const number = 1634;
const digits = splitNumberIntoDigits(number);
let len = digits.length
let sum = 0;

 function arm(len){
     for(i=0;i<len;i++){
         sum = sum + digits[i]**len
     }
    
     if(sum==number){
         console.log('IT IS ARM')
         
     }
     else{console.log('IT IS not ARM')}
 }
 
 arm(len)

---------------------------------------------------------------

// METHOD_2       num>Array(through mathematical operations)>iterating over array


function numtoarray(num){
    let array =[];
    while(num>0){
        array.unshift(num%10)
        num = Math.floor(num/10)
    }
    return array
}




let num = 407;
let myarray = numtoarray(num)
let len = myarray.length;

let sum = 0;

function armstrong(myarray,len){
for(i=0;i<len;i++){
    sum = sum + myarray[i]**len
}
// console.log(sum)
if(sum==num){
    console.log('it is ARM')
}
else{
    console.log('it is not ARM')
}


}

armstrong(myarray,len)

---------------------------------------------------------

// Print All Armstrong Numbers from 0 to 1000



function numtoarray(num){
    let array =[];
    while(num>0){
        array.unshift(num%10)
        num = Math.floor(num/10)
    }
    return array
}


for(j=0;j<=1000;j++){
    
let num = j;
let myarray = numtoarray(num)
let len = myarray.length;

let sum = 0;
armstrong(myarray,len)
function armstrong(myarray,len){
for(i=0;i<len;i++){
    sum = sum + myarray[i]**len
}

if(sum==num){
    console.log(num)
}

}
    
}

------------------------------------------

Add digits of given num-----------

/////////////////////////////////// With out using Math.floor()

let num = 123;
let sum = 0;
while(num>0){
  let x = num%10;
  num = (num-(num%10))/10;
  sum = sum + x;
}
console.log(sum)


//////////////////////// Using Math.floor



let num = 123;
let sum = 0;
while(num>0){
  let x = num%10
  num = Math.floor(num/10)
  sum = sum + x
}
console.log(sum)









