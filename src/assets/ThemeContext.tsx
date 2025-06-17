import React, {createContext, useState} from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(`light`)
    const ChangeTheme = () => {
        setTheme(prevState => (prevState == `light` ? `dark` : `light`));
    }
    return (
        <ThemeContext.Provider value={{theme, ChangeTheme}}>
            {children}
        </ThemeContext.Provider>);
}
export default ThemeContext;