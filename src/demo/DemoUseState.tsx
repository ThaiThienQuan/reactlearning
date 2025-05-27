import { useState } from "react"

export default function demoUseState(){
    const [count, setCount] = useState(0)
    const Handleclick=()=>{
        setCount(count+1);
    }
    return(<>
        <div className="container mt-5">
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <button className="btn btn-primary"
                    onClick={Handleclick}>
                Increment
            </button>
        </div>
    </>)
}