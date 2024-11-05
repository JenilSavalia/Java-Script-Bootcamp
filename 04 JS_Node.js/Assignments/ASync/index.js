
var count = 6;
let fun = setInterval(() => {
    console.log(count);
    count++;
}, 1000);

setInterval(() => {
    clearInterval(fun)

}, 5000)

