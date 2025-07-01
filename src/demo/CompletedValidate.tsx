import {useState} from "react";

export default function CompletedValidate() {
    const [formData, setformData] = useState({
        username: "",
        email: "",
        checked: false,
    });
    const [errors, setErrors] = useState({
        usernameError: "",
        emailError: "",
    });
    // bắt dữ lieeuj theo từng chữ đã nhập
    const handleChange = (e) => {

        const {name, type, value, checked} = e.target;
        const updatedata = {
            ...formData, [name]: type === "checkbox" ? checked : value
        }
        // set data trực tiếp nếu truyền vào validate() => chạy được do validate không biết e là gì;
        // setformData((e) => ({
        //   ...e,
        //   [name]: type === "checkbox" ? checked : value,
        // }));
        setformData(updatedata);
        validate(updatedata);
    };

    const validate = (form=formData) => {
        let usernameError = "";
        let emailError = "";
        if (!form.username) {
            usernameError = "Username is required";
        }
        if (!form.email.includes("@")) {
            emailError = "Email is include @";
        }if (!form.email) {
            emailError = "Email is required";
        }
        setErrors({usernameError, emailError});
        return !usernameError && !emailError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate())
            alert(
                `username: ${formData.username} email:${formData.email} checked:${
                    formData.checked ? true : false
                }`
            );
    };
    return (
        <>
            <form className="center bg-success col-md-12 sticky-top mt-5  m-auto" onSubmit={handleSubmit}>
                <label >
                    username
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                {<p style={{color: 'red'}}>{errors.usernameError}</p>}
                <br/>
                <label >
                    email
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {<p style={{color: 'red'}}>{errors.emailError}</p>}
                </label>
                <br/>
                <label >
                    Remember ?
                    <input
                        type="checkbox"
                        name="checked"
                        checked={formData.checked}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>

        </>
    );
}
