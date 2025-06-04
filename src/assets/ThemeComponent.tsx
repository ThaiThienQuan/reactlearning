import {useContext} from "react";
import ThemeContext from "./ThemeContext.tsx";

export default function ThemeComponent() {
    const {theme, Themecontrol} = useContext(ThemeContext)

    return (<>
        <div
            className={`container mt-5 ${theme == 'dark' ? 'bg-dark' +
                ' text-light' : 'bg-light text-dark'}`}>
            <p>Current Theme: {theme}</p>
            <button onClick={Themecontrol}>Update Context</button>
        </div>
    </>)
}