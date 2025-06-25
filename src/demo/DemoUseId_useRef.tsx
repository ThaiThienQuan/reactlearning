import { useId, useRef, useState, useEffect } from "react";

export default function DemoUseId_useRef() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    firstName.current.focus();
    console.log(firstName.current);
  }, []);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const Submit = (e) => {
    firstName.current.focus();
    console.log();

    e.preventDefault();
    console.log(
      `Thông tin đã gửi:\nTên đệm: ${data.firstName}, firstnameId: ${firstNameId} 
      \n Tên :${data.lastName} , lastnameId: ${lastNameId}
      \nEmail: ${data.email}, emailId: ${emailId}
      `
    );
  };

  return (
    <>
      <form action="" onSubmit={Submit}>
        <div className="mb-3">
          <label htmlFor={firstNameId} className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            ref={firstName}
            id={firstNameId}
            className="form-control"
            placeholder=""
            onChange={handlechange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor={lastNameId} className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            ref={lastName}
            id={lastNameId}
            className="form-control"
            placeholder=""
            onChange={handlechange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor={emailId} className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={data.email}
            ref={email}
            id={emailId}
            className="form-control"
            placeholder=""
            onChange={handlechange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
