import { useCallback, useReducer } from "react";

const initialData = {
  datas: [],
  inputValue: {
    id: "",
    name: "",
    age: 0,
    checked: false,
  },
  editIndex: null,
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

    case "EditData":
      const currentData = state.datas[action.index];
      return {
        ...state,
        inputValue: { ...currentData },
        editIndex: action.index,
      };

    case "updateData":
      const updatedData = [...state.datas];
      updatedData[state.editIndex] = state.inputValue;
      return {
        ...state,
        datas: updatedData,
        inputValue: { id: "", name: "", age: 0, checked: false },
        editIndex: null,
      };

    case "updateInput":
      return {
        ...state,
        inputValue: {
          ...state.inputValue,
          [action.field]:
            action.sctype === "checkbox" ? action.checked : action.value,
        },
      };

    default:
      return state;
  }
}

export default function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialData);
  useEffect(() => {
    fetch("person.json")
      .then((response) => response.json())
      .then((person) =>initialData.datas[person]);
  }, []);
  const handleChange = useCallback((e) => {
    
    dispatch({
      type: "updateInput",
      field: e.target.name,
      value: e.target.value,
      checked: e.target.checked,
      sctype: e.target.type,
    });
  }, []);

  const AddData = (e) => {
    e.preventDefault();
    if (state.inputValue.id && state.inputValue.name && state.inputValue.age) {
      dispatch({ type: "addData", payload: state.inputValue });
    }
  };

  const UpdateData = () => {
    dispatch({ type: "updateData" });
  };

  const handleEdit = (index) => {
    dispatch({ type: "EditData", index });
  };

  return (
    <>
      <h2>Demo useReducer</h2>
      <div className="container col-md-12 mx-auto my-3">
        <form>
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              name="id"
              className="form-control"
              onChange={handleChange}
              value={state.inputValue.id}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              onChange={handleChange}
              value={state.inputValue.name}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              name="age"
              type="number"
              className="form-control"
              onChange={handleChange}
              value={state.inputValue.age}
            />
          </div>
          <div className="form-group">
            <input
              name="checked"
              type="checkbox"
              onChange={handleChange}
              checked={state.inputValue.checked}
            />
            <label>Remember?</label>
          </div>

          {state.editIndex === null ? (
            <button
              type="button"
              onClick={AddData}
              className="btn btn-primary mx-2"
            >
              Add
            </button>
          ) : (
            <button
              type="button"
              onClick={UpdateData}
              className="btn btn-warning mx-2"
            >
              Update
            </button>
          )}
        </form>

        <h3>Table of Data</h3>
        <table>
          <tbody>
            {state.datas.map((data, index) => (
              <tr key={index}>
                <td>
                  {data.id} - {data.name} -{" "}
                  {1 <= data.age <= 9 ? "0" + data.age : data.age} -{" "}
                  {data.checked ? "Remembered" : "Not remember"}
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm mx-2"
                    onClick={() =>
                      dispatch({ type: "deleteData", index: index })
                    }
                  >
                    Del
                  </button>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
