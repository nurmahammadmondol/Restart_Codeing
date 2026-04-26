// 1. JSON => stringify, parse
const sir={
    name:'Joy',
    age:26,
    student: false,
    Work: 'Teacher',
}

const STR=JSON.stringify(sir);
console.log(STR)

const PAR=JSON.parse(STR);
console.log(PAR);


// 2. Fetch
fetch('url')
    .then(res=>res.json())
    .then(data=>console.log(data));


// 3. Keys, values
const Obj_Keys=Object.keys(sir);
const Obj_Velues=Object.values(sir)

console.log(Obj_Keys, Obj_Velues)