import { useState } from "react";
import UserProfile from "./demo/UserProfile.tsx";
import HandlingEvent from "./demo/Handling-event.tsx";
import ConditionRD from "./demo/ConditionRD.tsx";
import Listrendering from "./demo/Listrendering.tsx";
import PlayerList from "./demo/PlayerList.tsx";
import TodoList from "./demo/TodoList.tsx";
import styles from "./demo/ModuleCSS.module.css";
import Lifecycle from "./demo/Lifecycle.tsx";
import Form from "./demo/Form.tsx";
import InputValidate from "./demo/InputValidate.tsx";
import CompletedValidate from "./demo/CompletedValidate.tsx";
import FragmentTotur from "./demo/FragmentTotur.tsx";
import {MyProvider} from "./assets/MyContext.tsx";
import DemoUseContext from "./demo/demoUseContext.tsx";
import DemoReactRouter from "./demo/DemoReactRouter.tsx";
import DemoUsecontext_NestCom from "./demo/DemoUsecontext_NestCom.tsx";

function App() {
  const [count, usecount] = useState(0);

  return (
    <>
      <DemoReactRouter/>

    <FragmentTotur/>
      <div className={styles.container}>
        <button onClick={()=>usecount(count+1)}>Increase count now is {count}</button>
        <button onClick={()=>usecount(count-1)}>Decrease count now is {count}</button>
      </div>
        {/* <UserProfile email={"thaithienquan@gmail.com"} name={"Quan"} gender={true}></UserProfile>
        <HandlingEvent/>
        <ConditionRD/>
        <Listrendering/>
        <PlayerList/>
        <TodoList/>
        <Lifecycle/> */}
        <Form/>
        {/*<InputValidate/>*/}
        <CompletedValidate/>
      <MyProvider>
        <DemoUseContext/>
        {/*<DemoUsecontext_NestCom/>*/}
        </MyProvider>
    </>
  );
}

export default App;
