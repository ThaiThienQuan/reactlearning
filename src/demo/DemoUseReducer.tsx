import { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};
export default function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
    </>
  );
}
