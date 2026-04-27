import { useState } from 'react'
import './Countrie.css'

export default function Countrie({Data}) {

    const [visited, SetVisited]=useState(false)

    const handleVisited=()=>{
        SetVisited(!visited)
    }
    

  return (
    <div className={`Countrie_Box ${visited && 'Visited_Countrie'}`}>
        <img className='Img_Size Flag_Box' src={Data?.flags?.flags?.png} alt={Data.flags.flags.alt} />
        <h3>Name : {Data.name.common}</h3>
        <p>Area : {Data?.area?.area}</p>
        <p>Population : {Data?.population?.population}</p>

        <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
    </div>
  )
}
