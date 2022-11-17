const Empty =(str) =>{
  if (str.length == 0) {
    return true;
  } else {
    return false;
  }
}
const Num =(str) =>{
    if (/^[0-9]+$/.test(str)) {
        return true;
    } else {
        return false;
    }
}

const invalidData =(str) =>{
    if (Empty(str) || !(Num(str))) {
        return true;
    } else {
        return false;
    }
}

const add =(num1,num2) =>{
  
    const Sum = {
        status: 'Success',
        message: 'The Addition of given two number',
        result: num1+num2
    }
    return Sum;
}

const sub =(num1,num2) =>{
 
    const Sub = {
        status: 'success',
        message: 'The Subtraction of given two number',
        result: num2-num1
    }
    return Sub;
}

const multiply =(num1,num2) =>{

    const Mul = {
        status: 'success',
        message: 'The MUltiply of given two number',
        result: num1*num2
    }
    return Mul;
}

const divide =(num1,num2) =>{
    if (num2 == 0) {
        return {
            status: 'error',
            message: 'cannot divide by 0'
        }
    } 
 
    
    const Div = {
        status: 'success',
        message: 'The divide of given two number',
        result: num1/num2
    }
    return Div;
}

module.exports= {
    add,
    sub,
    multiply,
    divide,
    invalidData
}