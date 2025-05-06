
// @ts-ignore
import react, {useState} from "react";

export default function HandlingEvent() {
    const [inputvalue, setinputvalue] = useState("")
    const handlingclick = (event) => {
        setinputvalue(event.target.value)
    }
    return (
        <>
            <div>
                <input type="text"
                       value={inputvalue}
                       onChange={handlingclick}></input>
                <p>Current Value: {inputvalue}</p></div>
        </>)
}