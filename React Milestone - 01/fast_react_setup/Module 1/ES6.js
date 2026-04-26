// 1. Template String 
const name= 'Robiul';
const age=22;

const string= `Hello my name is ${name} i am ${age} years old`;
console.log(string)

// 2. Arrow Function 
const Avarag= (num1, num2)=>{
    const sum= num1+num2;
    return sum;
}

console.log(Avarag(4,6))

// 3. Spread Oparator
const Number=[10,20,30,40,50]
const newNum=[...Number, 60, 70,80,90,100]
console.log(newNum)