import {useContext} from "react";
import ThemeContext from "./ThemeContext.tsx";

export default function ThemeComponent(){
     const {theme,ChangeTheme} = useContext(ThemeContext)
     return(<>
     <div className={`container mt-5 ${theme == 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
         <button onClick={ChangeTheme}>Change Theme</button>

     </div>
     </>)
 }