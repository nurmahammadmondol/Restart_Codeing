import { useState } from "react"

function State(){

    const BoxDisign={
        border: '4px, solid, Blue',
    }

    const [count, setCount]=useState(0)

    const handleSingle=()=>{
        const updateRun=count+1;
        setCount(updateRun)
    }

    const handleFourRun=()=>{
        const updateFourRun=count+4;
        setCount(updateFourRun)
    }

    const handleSixRun=()=>{
        const updateSixRun=count+6;
        setCount(updateSixRun)

    }

    return(
        <div style={BoxDisign}>
            <h5>Cricet Run Count : {count}</h5>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFourRun}>Four</button>
            <button onClick={handleSixRun}>Six</button>

        </div>
    )
}

export default State