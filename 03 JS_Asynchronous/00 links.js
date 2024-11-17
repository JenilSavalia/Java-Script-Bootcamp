// Articles

https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/

https://dev.to/pranav016/advanced-javascript-series-part-1-execution-context-and-call-stack-l1o

https://github.com/Hopding/how-js-works-blog-post/blob/master/how-js-works-blog-post.md

https://medium.com/@omkarbhavare2406/understanding-the-execution-context-and-call-stack-in-javascript-e044c2c34cc5#:~:text=%F0%9F%91%89%20In%20synchronous%20code%2C%20JavaScript,event%20loop%20and%20callback%20queue




https://www.youtube.com/watch?v=6kE8lrqfwHo&list=WL&index=1&ab_channel=SheryiansCodingSchool


// Async ka matlab he do kaam aek sath hona

// jo bhi main stack par hota he wo output karta he and jo bhi side stack par hota he  wo behind the scenes processing kar sakta hai aur 
// jab uski processiong complete ho use main stack mein laa kar chalaya jaa sakta he

//main stack => Execution

//=> So ,Java Script is Single threaded

// Event loop 
 
• Callbacks
// callback hamesa aek function hota he, ye sirf tab chalta hai jab async code ka completion hojaata hai
• Promise
// promise will be in any of three state 
// 1. Pending
// 2. Resolved   --> agar resolve he to .then() use karo
// 3. Rejected   --> agar reject he to .catch() use karo

var ans = new Promise((resolve, reject) => {
    if (true) {
        return resolve();
    }
    else {
        return reject();
    }
});

ans
    .then(function () {
        console.log("Resolved!!")
    })
    .catch(function () {
        console.log("Rejected!!")
    })

// QUESTION
//  User will ask for a number between 0 se 9 and if the number is below 5 resolve if not reject

var user = new Promise((resolve, reject) => {
    // generating random num
    let n = Math.floor(Math.random() * 10);
    if (num < 5) {
        return resolve();
    } else {
        return reject();
    }
})

user
    .then(function () {
        console.log("Resolve > below 5");
    })
    .catch(function () {
        console.log("Reject > above 5");
    })


// QUESTION
//  Do below task with async but in order
//  => 1.sabse pahle ghar par aao
// 2. gate kholo aur gate lagao
// 3. khana pakao phir khana khao
// 4. incognato mide chalao
// 5. Phir tum soo jaoo

let pro = new Promise(function (resolve, reject) {
    return resolve("sabse pahle ghar par aao");
})

var p1 = pro.then(function (data) {
    console.log(data);
    return new Promise(function (resolve, reject) {
        return resolve("gate kholo aur gate lagao");
    })
})

var p2 = p1.then(function (data) {
    console.log(data);
    return new Promise(function (resolve, reject) {
        return resolve("khana pakao phir khana khao");
    })
})

var p3 = p2.then(function (data) {
    console.log(data);
    return new Promise(function (resolve, reject) {
        return resolve("incognato mide chalao");
    })
})

var p4 = p3.then(function (data) {
    console.log(data);
    return new Promise((resolve, reject) => {
        return resolve("Phir tum soo jaoo");
    })
})

p4.then((data) => {
    console.log(data);
})






async await----------------------------------------------------

    // koi bhi asa function jisme app async code likhenge, kyoki async code hai 
    // to app promises ka istemaal kar sakte hi, jab uska answer aapko 
    // then lagana padega , uss then se bachne ke liya , app async await
    //  ka istemaal kar sakte hai.

    example without async and await

function abcd() {
    fetch(`https://randomuser.me/api/`)
        .then(function (raw) {
            return raw.json()
        })
        .then(function (data) {
            console.log(data)
        });
}

With async and await

async function abcd() {
    let raw = await fetch(`https://randomuser.me/api/`);
    // aek (1) await se aek (1) .then haat ta he

    let ans = await raw.json();
}






// ye upar wale sab request bhej te he and jab complete ho jaye
//  to uska answer kaha milta he? 

Callbacks
then catch
async await



How do we know that written code is Sync or Async ?

setTimeout
setInterval
Promise
fetch
axios
XMLHttpRequest

