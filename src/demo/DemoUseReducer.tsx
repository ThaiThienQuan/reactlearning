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
        employees:state.employees.filter((_,index)=>index !== action.index)};
    case 'updateInput':
      
      return {...state,
        inputValues:{...state.inputValues,[action.field]:[action.style]=='checkbox'?checked:[action.value]}
      };
  
    default:
      break;
  }
}
export default function DemoUseReducer() {
const [state, dispatch]=useReducer(reducer,initialState)
}
  const handleAddEmployee=()=>{
    
  }
  const handleInputchange=()=>{

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
            value={state.inputValue.id}
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
            value={state.inputValue.firstName}
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
            value={state.inputValue.lastName}
            onChange={handleInputchange}
            placeholder="lastName"
          />
        </div>
        <div className={`form-group`}>
          <label htmlFor="checked">Remember ? </label>
          <input
            type="checkbox"
            name="checked"
            id="checked"
            className={`form-control`}
            checked={state.inputValue.checked}
            onChange={handleInputchange}
          />
        </div>
      </form>
      <ul>
        
        <li>

        </li>
      </ul>
    </>
  );
}
