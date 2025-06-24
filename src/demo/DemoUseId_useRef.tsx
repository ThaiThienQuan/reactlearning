import { useId, useRef, useState, useEffect } from "react";

export default function DemoUseId_useRef() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const firstNameId = useId();
  const emailId = useId();
  const lastNameId = useId();
  const firstNameId = `${id}-firstName`;
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
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thông tin đã gửi:\nTên đệm: ${data.firstName}\n Tên :${data.lastName}\nEmail: ${data.email}`
    );
  };

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
