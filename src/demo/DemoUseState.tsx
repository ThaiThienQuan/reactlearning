import {useEffect, useState} from "react";

export default function DemoUseState() {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true)
    const [inputvalue, setInputvalue] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: ''
    })
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {
                setEmployees(data);
                setLoading(false);
            })
    }, []);
    const AddEmployee = (e) => {
        e.preventDefault();
        if (inputvalue.id && inputvalue.firstName && inputvalue.lastName && inputvalue.email) {
            setEmployees([...employees, inputvalue]);
            setInputvalue({id: '', firstName: '', lastName: '', email: ''})
        } else {
            alert(`you miss some field`)
        }
    }
    const handleDeleteEmployee = (index) => {
        setEmployees(employees.filter((_, i) => i != index));
    }
    return (<>
    
        <form className={`mb-1`} onSubmit={AddEmployee}>
            <input type="text"
                   className={`form-control p-1 mr-1 mb-1 border rounded-1 border-success`}
                   value={inputvalue.id}
                   onChange={(e) => setInputvalue({
                       ...inputvalue,
                       id: e.target.value
                   })}
                   placeholder={`ID`}/>
            <input type="text"
                   className={`form-control  p-1 mr-1 mb-1 border rounded-1 border-success`}
                   value={inputvalue.firstName}
                   onChange={(e) => setInputvalue({
                       ...inputvalue,
                       firstName: e.target.value
                   })}
                   placeholder={`First Name`}/>
            <input type="text"
                   className={`form-control  p-1 mr-1 mb-1 border rounded-1 border-success`}
                   value={inputvalue.lastName}
                   onChange={(e) => setInputvalue({
                       ...inputvalue,
                       lastName: e.target.value
                   })}
                   placeholder={`Last name`}/>
            <input type="text"
                   className={`form-control  p-1 mr-1 mb-1 border rounded-1 border-success`}
                   value={inputvalue.email}
                   onChange={(e) => setInputvalue({
                       ...inputvalue,
                       email: e.target.value
                   })}
                   placeholder={`Email`}/>
            <button type="submit" style={{cursor: 'pointer'}}
                    className={`btn btn-primary px-20 py-10 rounded-1 text-light`}>
                Add Employee
            </button>
        </form>
        <h2>Employees List</h2>
    {loading?(<p>Loading...</p>):
        <table className="border mt-3"><h3 style={{}}>Table of Employees</h3>
            <tr className="list-group mt-3 p-0 ">
                {employees.map((employee, index) => (
                    <td key={index}
                        className="list-group-item d-flex justify-content-between align-items-center p-1 mb-1 border rounded-1">
                        {employee.id} - {employee.firstName} {employee.lastName} ({employee.email})
                        <button className="btn btn-danger btn-sm bg-danger "
                                onClick={() => handleDeleteEmployee(index)}>Delete</button>
                    </td>
                ))}
                <th>Next page</th>
            </tr>
        </table>}

    </>)
}