/* eslint-disable react-hooks/rules-of-hooks */
import {useContext} from "react";
import MyContext from "../assets/MyContext";
import NestContext from "../assets/NestContext.tsx";

export default function DemoUsecontext_NestCom() {
    const value = useContext(MyContext);
    return (
        <div>
            <h1>Functional Component</h1>
            <p>Value from context : {value}</p>
            <NestContext/>
        </div>
    );
}