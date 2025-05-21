/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import MyContext from "../assets/MyContext";

export default function demoUseContext() {
  const {value, setvalue} = useContext(MyContext);
  // const valueContext=useContext(MyContext);
const updateContext=()=>{
  setvalue('Updated value from Functional Component');
}
    return (
    <>
      <div>
        <h1>Functional Component</h1>
        <p>Value from context : {value}</p>
        <button onClick={updateContext}>Update Context</button>
      </div>
    </>
  );
}