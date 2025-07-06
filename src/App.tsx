import ThemeComponent from "./assets/ThemeComponent.tsx";
import LocalStorageComponent from "./assets/LocalStorageComponent.tsx";
import DemoUseState from "./demo/DemoUseState.tsx";
import Timer from "./demo/Timer.tsx";
import {ThemeProvider} from "./assets/ThemeContext.tsx";
import DemoUseRef from "./demo/DemoUseRef.tsx";
import DemoUseId from "./demo/DemoUseId.tsx";
import DemoUseId_useRef from "./demo/DemoUseId_useRef.tsx";
import DemoUseReducer from "./demo/DemoUseReducer.tsx";
import DemoUseCallback from "./demo/DemoUseCallback.tsx";

function App() {

    return (
        <>
            {/*<CompletedValidate/>*/}
            <DemoUseRef/>
            <Timer/>
            <DemoUseState/>
            <LocalStorageComponent/>
           <ThemeProvider>
               <ThemeComponent/>
           </ThemeProvider>
           <DemoUseId_useRef/>
           <DemoUseReducer/>
           <DemoUseCallback/>
        </>
    );
}

export default App;
