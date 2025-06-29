import { useReducer } from "react";
export default function DemoUseReducer() {
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
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className={`form-control`}
            value={state.inputValue.email}
            onChange={handleInputchange}
            placeholder="email"
          />
        </div>
      </form>
    </>
  );
}
