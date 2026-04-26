const Students=[
    {name:'robi', age:22, Student:true, Department:'CST'},
     {name:'raju', age:19, Student:true, Department:'CT'},
      {name:'niyaz', age:20, Student:true, Department:'TX'},
       {name:'roni', age:21, Student:true, Department:'CST'},
        {name:'arman', age:22, Student:true, Department:'MT'},
         {name:'nasir', age:21, Student:true, Department:'CST'},
 ]

// 1. Map 
const Departments=Students.map(students=>students.Department)
console.log(Departments)

// 2. ForEach 
Students.forEach(student=>{
    console.log(student.name)
})

// 3. Filter
const CSTen = Students.filter(students=>students.Department === "CST")
console.log(CSTen)

// 4. Find
const Cst_1_Student= Students.find(students=>students.Department === "CST")
console.log(Cst_1_Student)