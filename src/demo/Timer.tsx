import {useEffect, useState} from "react";

export default function Timer() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)

        console.log(`Component did mount`)
        return () => {
            console.log(`Component will unmount`)
        }
    }, [])
    return (<>
        <p> Timer : {count}</p>
    </>)
}