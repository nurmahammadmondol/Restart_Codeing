// 1. Veriable Declare:
const Name = 'Robi';
const FatherName = 'Ruhul';
let Age= 22;
Age= 25;
console.log(Age)

// 2. Basic Conditions : < , > , === , !== , <= , >= 
//    Multiple Conditions : && , || 
if (FatherName === 'ruhul' && Name === 'robi'){
    console.log(true)
}
else if(FatherName === 'Ruhul' || Name === 'robi'){
    console.log(true)
}
else{
    console.log(false)
}

// 3.  Array Declare : 
//     Indexof, length , push , pop
let Marks= [40,83,47,80,52]
Marks [0]= 66;
console.log(Marks)

//4. For Loops :
for(i=0; i<Marks.length; i++){
    const number=Marks[i]
    console.log(number)
}

//5. Function Declare :
function multiple(num1, num2){
    const result= num1* num2;
    return result;
}

const output= multiple(10,5)
console.log(' output'+ output)

// 6. Object Declare :
const Student= {
    Name : 'Robiul',
    Age: 22,
    Department: 'CST',
    Hoby: ['PlayFootball', 'VideoGames']
}

console.log(Student)