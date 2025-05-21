import React, {useState} from "react";
import MyContext from "./MyContext.tsx";

const Myreact = React.createContext();
export const MyProvider = ({children}) => {
    const [value, setValue] = useState('Initial Context value')
    return (
        <MyContext.Provider value={{value, setValue}}>
            {children}
        </MyContext.Provider>)
}
export default Myreact;