

// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. 


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






