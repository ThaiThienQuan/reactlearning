import CompletedValidate from "./demo/CompletedValidate.tsx";
import DemoUseEffect from "./demo/DemoUseEffect.tsx";
import ThemeComponent from "./assets/ThemeComponent.tsx";
import {ThemeProvider} from "./assets/ThemeContext.tsx";
import LocalStorageComponent from "./assets/LocalStorageComponent.tsx";
import DemoUseState from "./demo/DemoUseState.tsx";

function App() {

    return (
        <>
            <DemoUseState/>
            <LocalStorageComponent/>
        </>
    );
}

export default App;
