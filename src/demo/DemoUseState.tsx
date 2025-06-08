import {useState} from "react";

export default function DemoUseState() {
    const [employees, setEmployees] = useState([])
    const [inputvalue, setInputvalue] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: ''
    })
    const AddEmployee = (e) => {
        e.preventDefault();
    }
    const handleDeleteEmployee=(e)=>{}
    return (<>
        <form onSubmit={AddEmployee}>
            <input type="text" className={`form-control`} value={inputvalue.id}
                   onChange={(e) => setInputvalue({
                       ...inputvalue,
                       id: e.target.value
                   })} placeholder={`ID`}/>
            <input type="text" className={`form-control`}
                   value={inputvalue.firstName}
                   onChange={(e) => setInputvalue({
                       ...inputvalue,
                       firstName: e.target.value
                   })} placeholder={`First Name`}/>
            <input type="text" className={`form-control`}
                   value={inputvalue.lastName}
                   onChange={(e) => setInputvalue({
                       ...inputvalue,
                       lastName: e.target.value
                   })} placeholder={`Last name`}/>
            <input type="text" className={`form-control`}
                   value={inputvalue.email}
                   onChange={(e) => setInputvalue({
                       ...inputvalue,
                       email: e.target.value
                   })} placeholder={`Email`}/>
            <button type="submit" className={`btn btn-primary`}>Add Employee
            </button>
        </form>
        <table className=" mt-3">
            <tr className="list-group mt-3">
                {employees.map((employee, index) => (
                    <td key={index}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        {employee.id} - {employee.firstName} {employee.lastName} ({employee.email})
                        <button className="btn btn-danger btn-sm"
                                onClick={() => handleDeleteEmployee(index)}>Delete</button>
                        <td>
                            ))}
                        </tr>
                    </table>

                    </>)
                }