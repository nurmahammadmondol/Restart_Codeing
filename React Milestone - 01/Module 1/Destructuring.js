// 1. Array Destructuring
const [A, B]=[5,6];

const Number=[10,20,30,40,50];
const [num1, num2,num3,num4,num5]=Number;

console.log(num4, B);

// 2. Object Destructuring
const Students={
    name:'robi',
    age:22,
    student: true,
    department: 'cst'
}

const {name, age, student, department}= Students;
console.log(age,department)