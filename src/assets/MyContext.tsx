import {createContext, useState} from "react";

const MyContext = createContext();
export const MyProvider = ({children}) => {
    const [value, setValue] = useState('Initial Context value')
    return (
        <MyContext.Provider value={{value, setValue}}>
            {children}
        </MyContext.Provider>)
}
export default MyContext;