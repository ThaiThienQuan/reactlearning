import { useState } from "react";
export default function Form() {
  const [formData, setformData] = useState({
    username: "",
    isSubcribed: false,
    gender: "male",
    favorcolor: "red",
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setformData((prevdata) => ({
      ...prevdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with the following data:
    Username: ${formData.username}
    Subscribed: ${formData.isSubcribed}
    Gender: ${formData.gender}
    Favorite Color: ${formData.favorcolor}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <p>{formData.username}</p>
        <br />
        <label>
          Subcribe:
          <input
            type="checkbox"
            name="isSubcribed"
            checked={formData.isSubcribed}
            onChange={handleChange}
          />
        </label>
        <p>{formData.isSubcribed ? true: false}</p>
        <br />
        <label>
          Gender:
          <input
            type="radio"
            name="gender"
            value={"male"}
            checked={formData.gender == "male"}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value={"female"}
            checked={formData.gender == "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <p>{formData.gender}</p>
        <br />
        <label>
          Favorite color:
          <select
            name="favorcolor"
            value={formData.favorcolor}
            onChange={handleChange}
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </label>
        <p>{formData.favorcolor}</p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
