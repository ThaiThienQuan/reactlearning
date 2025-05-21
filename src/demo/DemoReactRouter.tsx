import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../RouterConnect/Home.tsx";
import About from "../RouterConnect/About.tsx";

export default function DemoReactRouter() {
    return (<>
        <Router>
            <Routes>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/home"||"/tu"} element={<Home/>}/>
            </Routes>
        </Router>
    </>)
}