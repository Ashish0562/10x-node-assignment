const readline = require('readline');

const name= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

name.question('Name ',ans =>{
    console.log(`Hello ${ans}`);
    name.close();
})