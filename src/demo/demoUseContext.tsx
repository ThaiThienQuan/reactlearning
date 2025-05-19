/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import MyContext from "../assets/MyContext";

export default function demoUseContext() {
  const valueContext = useContext(MyContext);
    return (
    <>
      <div>
        <h1>Functional Component</h1>
        <p>Value from context : {valueContext}</p>
      </div>
    </>
  );
}