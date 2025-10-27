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
      return{...state,};
    case "deleteMember":
      return{...state,};
    case "updateMember":
      return{...state,};
    case "updateInput":
      return{...state,};

    default:
      break;
  }
}
export default function DemoUseReducer() {
  return <></>;
}
