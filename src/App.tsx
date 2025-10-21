import ThemeComponent from "./assets/ThemeComponent.tsx";
import LocalStorageComponent from "./assets/LocalStorageComponent.tsx";
import DemoUseState from "./demo/DemoUseState.tsx";
import Timer from "./demo/Timer.tsx";
import { ThemeProvider } from "./assets/ThemeContext.tsx";
import DemoUseRef from "./demo/DemoUseRef.tsx";
import DemoUseId_useRef from "./demo/DemoUseId_useRef.tsx";
import DemoUseReducer from "./demo/DemoUseReducer.tsx";
import DemoUseCallback from "./demo/DemoUseCallback.tsx";
import DemoUseMemo from "./demo/DemoUseMemo.tsx";
import TodoList from "./demo/TodoList.tsx";
import DemoUseEffect from "./demo/DemoUseEffect.tsx";

function App() {
  return (
    <>
    <DemoUseEffect/>
      <DemoUseState />
      <TodoList />
      <DemoUseCallback />
      {/*<CompletedValidate/>*/}
      <DemoUseRef />
      <Timer />
      <LocalStorageComponent />
      <ThemeProvider>
        <ThemeComponent />
      </ThemeProvider>
      <DemoUseId_useRef />
      <DemoUseReducer />
      <DemoUseCallback />
      <DemoUseMemo />
    </>
  );
}

export default App;
