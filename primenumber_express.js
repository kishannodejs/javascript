const express = require('express')

const app = express();

app.listen(3000, (req,res) => {
    console.log("Working on 3000 port");
})

app.get("/:id", (req,res)=>{

    console.log(req.query);
    console.log(req.params);
    // res.send({"name":"Kishan"})
    // console.log("This is working route")

    const number = parseInt(req.params.id);
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

})