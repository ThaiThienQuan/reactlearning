import { useReducer } from "react";
const initialData = {
  datas: [],
  inputValue: {
    id: "",
    name: "",
    age: 0,
    checked: false,
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "addData":
      return {
        ...state,
        datas: [...state.datas, action.payload],
        inputValue: { id: "", name: "", age: 0, checked: false },
      };
    case "deleteData":
      return {
        ...state,
        datas: state.datas.filter((_, index) => index !== action.index),
      };
    case "updateData":
      return { ...state };
    case "updateInput":
      return {
        ...state,
        inputValue: {
          ...state.inputValue,
          [action.field]:
            action.sctype == "checkbox" ? action.checked : action.value,
        },
      };

    default:
      return state;
  }
}
export default function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialData);
  const handleChange = (e) => {
    dispatch({
      type: "updateInput",
      field: e.target.name,
      value: e.target.value,
      checked: e.target.checked,
      sctype: e.target.type,
    });
  };
  const AddData = (e) => {
    e.preventDefault();
    if (state.inputValue.id && state.inputValue.name && state.inputValue.age) {
      dispatch({ type: "addData", payload: state.inputValue });
    }
  };
  return (
    <>
      <h2>Demo useReducer</h2>
      <div className={`container col-md-12 mx-auto my-3`}>
        <form>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              id="id"
              type="text"
              name="id"
              className="form-control  p-1 mr-1 mb-1 border rounded-1 border-success"
              onChange={handleChange}
              value={state.inputValue.id}
              placeholder="ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control  p-1 mr-1 mb-1 border rounded-1 border-success"
              onChange={handleChange}
              value={state.inputValue.name}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              name="age"
              type="number"
              className="form-control  p-1 mr-1 mb-1 border rounded-1 border-success"
              onChange={handleChange}
              value={state.inputValue.age}
            />
          </div>
          <div className="form-group">
            <input
              id="checked"
              name="checked"
              type="checkbox"
              className=" p-1 mr-1 mb-1 border rounded-1 border-success"
              onChange={handleChange}
              checked={state.inputValue.checked}
            />
            <label htmlFor="checked">Remember?</label>
          </div>
          <button
            onClick={AddData}
            className={`btn btn-primary px-15 py-10 mt-2 mx-2 rounded-1 text-light`}
          >
            Add
          </button>

          <button
            className={`btn btn-warning px-15 py-10 mt-2 mx-2 rounded-1 text-light`}
          >
            UPdate
          </button>
        </form>
        <table>
          <h3 style={{}}>Table of Data</h3>
          <tr className="mt-3 p-0">
            {state.datas.map((data, index) => (
              <td
                key={index}
                className="d-flex justify-content-between align-items-center p-1 mb-1 border rounded-1"
              >
                {data.id}-{data.name}-{data.age}-
                {data.checked ? "Remembered" : "Not remember"}
                <button
                  className="btn btn-danger mx-2 btn-sm bg-danger"
                  onClick={() => dispatch({ type: "deleteData", index })}
                >
                  Del
                </button>
                <button className="btn btn-warning btn-sm bg-warning">
                  Edit
                </button>
              </td>
            ))}
            fsnjgb
          </tr>
        </table>
      </div>
    </>
  );
}
