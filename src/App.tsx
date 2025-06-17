import CompletedValidate from "./demo/CompletedValidate.tsx";
import DemoUseEffect from "./demo/DemoUseEffect.tsx";
import ThemeComponent from "./assets/ThemeComponent.tsx";
import LocalStorageComponent from "./assets/LocalStorageComponent.tsx";
import DemoUseState from "./demo/DemoUseState.tsx";
import Timer from "./demo/Timer.tsx";
import {ThemeProvider} from "./assets/ThemeContext.tsx";

function App() {

    return (
        <>
            {/*<CompletedValidate/>*/}
            <Timer/>
            <DemoUseState/>
            <LocalStorageComponent/>
           <ThemeProvider>
               <ThemeComponent/>
           </ThemeProvider>
        </>
    );
}

export default App;
