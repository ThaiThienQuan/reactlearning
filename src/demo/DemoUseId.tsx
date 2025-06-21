import { useId, useState } from "react";

export default function DemoUseId() {
  const id = useId();
  const firstNameId = `${id}-firstName`;
  const lastNameId = `${id}-lastName`;
  const emailId = `${id}-email`;
  const [employees, setemployees] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setemployees((prev) => ({ ...prev, [name]: value }));
  };
  const submit = (e) => {
    e.preventDefault();
    console.log("Employee data submitted:", employees);
  };
  return (
    <>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor={firstNameId}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={employees.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor={lastNameId}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employees.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor={emailId}>Email</label>
          <input
            type="text"
            name="email"
            value={employees.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
