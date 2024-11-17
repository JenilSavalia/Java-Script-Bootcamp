// What is a Promise ?


// A Promise is an assurance or gurantee that something will happen in the future.
//  A person can promise another person a specific outcome or 
//  result. 
• A Promise is an object that holds the future value of an async operation.

// Example : Request some data from a server, the promise , promises 
// to get that data which can use in future. 



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



// Promise Chaining in Other method

const PromiseOne = new Promise((resolve, reject) => {
    resolve("Promise One Resolved");
});

const PromiseTwo = new Promise((resolve, reject) => {
    resolve("Promise Two Resolved");
});

const PromiseThree = new Promise((resolve, reject) => {
    reject("Promise Three Rejected");
});


PromiseOne
    .then((value) => {
        console.log(value);
        return PromiseTwo;
    })
    .then((value) => {
        console.log(value);
        return PromiseThree;
    })
    .catch((error) => {
        console.log(error);
    })



//  Promise.all() Method-----------------------------------

const promiseOne = new Promise((res, req) => {
    setTimeout(() => {
        console.log("Promise One Resolved")
    }, 2000)
});

const promiseTwo = new Promise((res, req) => {
    setTimeout(() => {
        console.log("Promise Two Rejected")
    }, 1000)
});

Promise.all([promiseOne, promiseTwo])
    .then((data) => {
        console.log(data[0], dataa[1]);
    })
    .catch((error) => { 
        console.log(error)
    })

// -----------------------------


