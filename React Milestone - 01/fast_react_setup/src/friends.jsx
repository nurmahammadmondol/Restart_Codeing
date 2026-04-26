import { use } from "react"


export default function Friends({message}) {

    const Friends=use(message)

     const BoxDisign={
        border: '4px, solid, gold',
        margin: '10px',
    }


  return (
    <div style={BoxDisign}>Friends : {Friends.length}</div>
  )
}
