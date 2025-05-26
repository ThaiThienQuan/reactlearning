import {useEffect, useState} from "react";
export default function Lifecycle() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect: Component did mount')
        return () => {
            console.log('useEffect: Component will unmount');

        };
    }, []);
    useEffect(() => {
        console.log('useEffect: Component did update');

    }, [count]);

    const handleClick = () => {
        setCount(count+1);
    }

    return (
        <>
            <div>
                <h1>Lifecycle Hook demo </h1>
                <p>Count: {count}</p>
                <button onClick={handleClick}>Increment</button>
            </div>
        </>
    )
}