import { useRef } from "react";

export default function DemoUseRef() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const Submit = (e) => {
    e.preventDefault();
    
  };
  const focusFirstname = () => {
    firstName.current.focus();

  };
  return (
    <div className={`container`}>
      <form onClick={Submit}>
        <div className={`form-group`}>
          <label htmlFor={"firstName"}></label>
          <input
            ref={firstName}
            id={"firstName"}
            type="text"
            className={`form-control`}
          />
        </div>
        <div className={`form-group`}>
          <label htmlFor={"lastName"}></label>
          <input
            ref={lastName}
            id={"lastName"}
            type="text"
            className={`form-control`}
          />
        </div>
        <div className={`form-group`}>
          <label htmlFor={"email"}></label>
          <input
            ref={email}
            id={"email"}
            type="text"
            className={`form-control`}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={focusFirstname}
        >
          Focus First Name
        </button>
      </form>
    </div>
  );
}
