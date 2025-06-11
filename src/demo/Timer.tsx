import {useEffect, useState} from "react";

export default function Timer() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)
        if (count==10)
        console.log(`Component did mount`)
        return () => {
            clearInterval(interval)
            console.log(`Component will unmount`)
        }
    }, [])
    return (<>
        <p> Timer : {count}</p>
    </>)
}