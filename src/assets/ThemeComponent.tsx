import {useContext} from "react";
import ThemeContext from "./ThemeContext.tsx";

export default function ThemeComponent() {
    const {theme, setTheme} = useContext(ThemeContext)
    const updateTheme = () => {
        setTheme(theme == 'dark' ? 'light' : 'dark')
    }
    return (<>
        <div
            className={`container mt-5 ${theme == 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
            <p>Current Theme: {theme}</p>
            <button onClick={updateTheme}>Update Context</button>
        </div>
    </>)
}