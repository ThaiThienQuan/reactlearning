import { useReducer } from "react";

const initialData = {
  data: [],
  inputValue: {
    id: "",
    Name: "",
    cash: Number,
    checked: false,
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "addMember":
      return { ...state };
    case "deleteMember":
      return { ...state };
    case "updateMember":
      return { ...state };
    case "updateInput":
      return { ...state };

    default:
      return state;
  }
}
export default function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialData);
  return <></>;
}
