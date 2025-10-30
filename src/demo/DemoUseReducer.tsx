import { useReducer } from "react";
import InputValidate from "./InputValidate";
import { data } from "react-router-dom";

const initialData = {
  data: [],
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
        data:[...state,action.payload],
        inputValue: { id: "", name: "", age: 0, checked: false },
      };
    case "deleteData":
      return { ...state ,
        data: state.data.filter((_,index)=>index!==action.index),
      };
    case "updateData":
      return { ...state };
    case "updateInput":
      return { ...state ,
        inputValue:{...state.inputValue, [action.field]:[action.checked]?'checked':action.value}
      };

    default:
      return state;
  }
}
export default function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialData);
  const handleChange = () => {};
  const AddData = (e) => {
    e.preventDefault();
    if (
      state.inputValue.id &&
      state.inputValue.name &&
      state.inputValue.age &&
    ) {
       dispatch({type :'add'})
    }
  };
  const UpdateData = () => {};
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
              type="number"
              className="form-control  p-1 mr-1 mb-1 border rounded-1 border-success"
              onChange={handleChange}
              value={state.inputValue.age}
            />
          </div>
          <div className="form-group">
            <input
              id="checked"
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
            onClick={UpdateData}
            className={`btn btn-warning px-15 py-10 mt-2 mx-2 rounded-1 text-light`}
          >
            UPdate
          </button>
        </form>
        <table>
          <h3 style={{}}>Table of Data</h3>
          <tr className="mt-3 p-0">
            {state.data.map((data, index) => (
              <td
                key={index}
                className="d-flex justify-content-between align-items-center p-1 mb-1 border rounded-1"
              >
                {data.id}-{data.name}-{data.age}-
                {data.checked ? "Remembered" : "Not remember"}
                <button className="btn btn-danger btn-sm bg-danger">Del</button>
                <button className="btn btn-danger btn-sm bg-warning">
                  Edit
                </button>
              </td>
            ))}
          </tr>
        </table>
      </div>
    </>
  );
}
