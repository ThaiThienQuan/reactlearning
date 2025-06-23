import { useId, useRef, useState , useEffect } from "react";

export default function DemoUseId_useRef() {
  const firstName = useRef(null);
  const id = useId();
  const firstNameId = `${id}-firstName`;
  const [data, setdata] = useState({
    firstName: "",
  });
  useEffect(() => {
    firstName.current.focus();
    console.log(firstName.current);
    
  }, []);

  return (
    <>
      <div className="mb-3">
        <label htmlFor={firstNameId} className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          ref={firstName}
          className="form-control"
          placeholder=""
        />
        <p>{data.firstName}</p>
      </div>
    </>
  );
}
