import { use } from "react"

export default function Users({message}){
    const users=use(message)
    console.log(users)

    return(
        <div>
            <h6>Users Details : {users.length} </h6>
            <ol>
                {
                    users.map(user=><li>{user.name}</li>)
                }
            </ol>
        </div>
    )
}