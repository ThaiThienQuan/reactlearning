import { useState } from "react";

export default function CompletedValidate() {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    checked: false,
  });
  const [errors, seterrors] = useState({
    usernameError: "",
    emailError: "",
  });
  const handleChange = (e) => {
    const{name,type,value,checked}=e.target;
    setformData((e)=>({...e,
        [name]: type==='checbox'?checked:value,
    }));
  };
  const validate = () => {
    const error='';
    return !error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert(`username: ${formData.username} email:${formData.email} checked:${formData.checked?true:false}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="checked"
          checked={formData.checked}
          onChange={handleChange}
        />

        <button type="submit"></button>
      </form>
    </>
  );
}
