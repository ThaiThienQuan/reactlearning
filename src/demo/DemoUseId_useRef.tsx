import { useId, useRef, useState } from "react";

export default function DemoUseId_useRef() {
  const firstName = useRef(null);
  const id = useId();
  const firstNameId = `${id}-firstName`;
  const [data, setdata] = useState({
    firstName: "",
  });
  return (
    <>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          ref={firstName}
          className="form-control"
          placeholder=""
          aria-describedby="helpId"
        />
        <small id="helpId" className="text-muted">
          Help text
        </small>
      </div>
    </>
  );
}
