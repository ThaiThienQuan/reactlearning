import { useReducer } from "react";
const initialState={
employees:[],
inputValues:{
  id:'',
  firstName:'',
  lastName:'',
  checked:false,
}
}
const reducer=(state,action)=>{
  switch (action.type) {
    case 'addEmployee':
      return { ...state,
        employees:[...state.employees,action.payload],
        inputValues:{id :'', 
        firstName:'',
        lastName:'',
        checked:false,
      }};
    case 'deleteEmployee':
     
      return { ...state, 
        employees:state.employees.filter((_,i)=>i !== action.index)};
    case 'updateInput':
      
      return {...state,
        inputValues:{...state.inputValues,[action.field]:[action.checked]=='checkbox'?checked:[action.value]}
      };
  
    default:
      return state;
  }
}
export default function DemoUseReducer() {
const [state, dispatch]=useReducer(reducer,initialState)
  const handleAddEmployee=(e)=>{
    e.preventDefault();
    if (
      state.inputValues.id&&
      state.inputValues.firstName&&
      state.inputValues.lastName) 
      {
      dispatch({type:'addEmployee', payload:state.inputValues});
    }
  }
  const handleInputchange=(e)=>{
    dispatch({
      type: 'updateInput',
      field: e.target.name,
      value: e.target.value,
      checked:e.target.type
    })

  }
  return (
    <>
      <form onSubmit={handleAddEmployee}>
        <div className={`form-group`}>
          <label htmlFor="id">Id</label>
          <input
            type="text"
            name="id"
            id="id"
            className={`form-control`}
            value={state.inputValues.id}
            onChange={handleInputchange}
            placeholder="id"
          />
        </div>
        <div className={`form-group`}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className={`form-control`}
            value={state.inputValues.firstName}
            onChange={handleInputchange}
            placeholder="firstName"
          />
        </div>
        <div className={`form-group`}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className={`form-control`}
            value={state.inputValues.lastName}
            onChange={handleInputchange}
            placeholder="lastName"
          />
        </div>
        <div>
          <label htmlFor="checked">Remember ? </label>
          <input
            type="checkbox"
            name="checked"
            id="checked"
            className={`form-control`}
            checked={state.inputValues.checked}
            onChange={handleInputchange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Employee</button>
      </form>
      <ul className="list-group mt-3">
        {state.employees.map((employee,index)=>(
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center" >
{employee.id}-
{employee.firstName + employee.lastName}-
{employee.checked?'checked':'not check'}
<button className="btn btn-danger" onClick={()=>dispatch({type:'deleteEmployee',index})}>Delete</button>
        </li>
        ))
        }
      </ul>
    </>
  );
}
