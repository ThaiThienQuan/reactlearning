import {BrowserRouter as Route, Router, Routes} from "react-router-dom";
import Home from "../RouterConnect/Home.tsx";

export default  function DemoReactRouter(){
    return(<>
        <Router location={""} navigator={undefined}  >
            <Routes>
                <Route path={"/about"} element={<About/>} />
                <Route path={"/home"} element={<Home/>} />
            </Routes>s
        </Router>
    </>)
}