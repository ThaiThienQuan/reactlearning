import CompletedValidate from "./demo/CompletedValidate.tsx";
import DemoUseEffect from "./demo/DemoUseEffect.tsx";
import ThemeComponent from "./assets/ThemeComponent.tsx";
import {ThemeProvider} from "./assets/ThemeContext.tsx";
import LocalStorageComponent from "./assets/LocalStorageComponent.tsx";

function App() {

    return (
        <>
            <CompletedValidate/>
            <DemoUseEffect/>
            <ThemeProvider>
                <ThemeComponent/>
            </ThemeProvider>
            <LocalStorageComponent/>
        </>
    );
}

export default App;
