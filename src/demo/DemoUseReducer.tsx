import { useReducer } from "react";

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
  const handleChange = () => {};
  const AddData = () => {};
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
              className="form-control"
              onChange={handleChange}
              value={state.inputValue.id}
              placeholder="ID"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={state.inputValue.name}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              onChange={handleChange}
              value={state.inputValue.age}
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              className="form-control"
              onChange={handleChange}
              checked={state.inputValue.checked}
            />
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
          <tr className="mt-3 p-0">
            {state.data.map((data, index) => (
              <td
                key={index}
                className="d-flex justify-content-between align-items-center p-1 mb-1 border rounded-1"
              >
                {data.id}-{data.name}-{data.age}-
                {data.checked ? "Remembered" : "Not remember"}
                <button className="btn btn-danger btn-sm bg-danger">Del</button>
              </td>
            ))}
          </tr>
        </table>
        frnjlnlg
      </div>
    </>
  );
}
