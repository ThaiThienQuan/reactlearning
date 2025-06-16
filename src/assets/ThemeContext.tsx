import {createContext, useState} from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    const Themecontrol=()=>{
        setTheme((prevTheme)=>(prevTheme=='light'?'dark':'light'));
    }
    return (<ThemeContext.Provider value={{theme, Themecontrol}}>
        {children}
    </ThemeContext.Provider>)
}
export default ThemeContext