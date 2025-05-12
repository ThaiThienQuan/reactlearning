import {useState} from "react";

export default function InputValidate() {
    const [user, setUser] = useState('')
    const [usererror, setUsererror] = useState('')
    const handleChange = (e) => {

        setUser(e.target.value);

    }
    const validate = () => {
        let error = '';
        if (!user){ error = 'Username is required';}
        setUsererror(error);
        return !error;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert(`Form submitted with username: ${user}`)
        }
    }
    return (<>
            <h1>Input Validation</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input type="text" value={user}
                           onChange={handleChange}/>
                </label>
                {user}
                {<p style={{color: 'red'}}>{usererror}</p>}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}