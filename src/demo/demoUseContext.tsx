/* eslint-disable react-hooks/rules-of-hooks */
import {useContext, useState} from "react";
import MyContext from "../assets/MyContext";

export default function demoUseContext() {
    const {value, setValue} = useContext(MyContext);

const updateContext=()=>{
  setValue('Updated value from Functional Component');
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