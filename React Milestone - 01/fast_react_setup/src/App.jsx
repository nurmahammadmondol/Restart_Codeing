import { Suspense } from 'react'
import State from './state'
import Users from './users'
import Friends from './friends'


const loadUsers=fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())

const loadFriends=async()=>{
  const Friends=await fetch('https://jsonplaceholder.typicode.com/posts')
  return Friends.json()
}

function App() {

  const FriendsData=loadFriends()

  return (
    <>
       <h1>Get started in my restart Mission</h1>

       <Suspense fallback={<h5>Wait and see........Data is loading..</h5>}>
        <Friends message={FriendsData}></Friends>
       </Suspense>

      <Suspense fallback={<h3>Loading.......</h3>}>
        <Users message={loadUsers}></Users>
      </Suspense>



     
       <State></State>
        {/* <Person name='robi' age='22' work='student'></Person>
        <Person  name='nasir' age='21' work='marn'></Person>
        <Person name='saymon' age='20' work='student'></Person> */}
    </>
  )
}


// function Person(props){

//   const Disign={
//     border:'2px, solid, red',
   
   
//   }

//   return(
//     <div style={Disign}>
//       <h5>Name : {props.name}</h5>
//       <p>Age :  {props.age}</p>
//       <p>Work : {props.work}</p>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, accusantium?</p>
//     </div>
//   )
// }




export default App
