import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../RouterConnect/Home.tsx";

export default function DemoReactRouter() {
    return (<>
        <Router>
            <Routes>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/*"} element={<NotFound/>}/>
            </Routes>
        </Router>
    </>)
}