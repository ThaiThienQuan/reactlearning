import { useEffect, useState } from "react";

export default function DemoUseState() {
  //create employees variable and its function
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  //add id , fisrtname, lastname,email variable for input employees
  const [inputvalue, setInputvalue] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      });
  }, []);
  const AddEmployee = (e) => {
    e.preventDefault();
    if (
      inputvalue.id &&
      inputvalue.firstName &&
      inputvalue.lastName &&
      inputvalue.email
    ) {
      setEmployees([...employees, inputvalue]);
      setInputvalue({ id: "", firstName: "", lastName: "", email: "" });
    } else {
      alert(`you miss some field`);
    }
  };
  const handleDeleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i != index));
  };
  const UpdateEmployee=(e)=>{
    e.preventDefault();
    setEmployees(employees.map((emp)=>emp.id===inputvalue.id?{...inputvalue}:emp))
    setIsEditing(false);
    setInputvalue({ id: "", firstName: "", lastName: "", email: "" });
  }
  const handleEditEmployee = (id) => {
    const employ = employees.find((emp) => emp.id === id);
    if (employ) {
      setInputvalue({
        // option1
        id: employ.id,
        firstName: employ.firstName || "",
        lastName: employ.lastName || "",
        email: employ.email || "",
        //option2
        // ...employ 
      }
    );
      setIsEditing(true);
    }
  };
  return (
    <>
    
      <form className={`container  mb-1`}>
        <h2>useState</h2>
        <input
          type="text"
          className={`form-control  p-1 mr-1 mb-1 border rounded-1 border-success`}
          value={inputvalue.id}
          onChange={(e) =>
            setInputvalue({
              ...inputvalue,
              id: e.target.value,
            })
          }
          placeholder={`ID`}
        />
        <input
          type="text"
          className={`form-control  p-1 mr-1 mb-1 border rounded-1 border-success`}
          value={inputvalue.firstName}
          onChange={(e) =>
            setInputvalue({
              ...inputvalue,
              firstName: e.target.value,
            })
          }
          placeholder={`First Name`}
        />
        <input
          type="text"
          className={`form-control  p-1 mr-1 mb-1 border rounded-1 border-success`}
          value={inputvalue.lastName}
          onChange={(e) =>
            setInputvalue({
              ...inputvalue,
              lastName: e.target.value,
            })
          }
          placeholder={`Last name`}
        />
        <input
          type="text"
          className={`form-control  p-1 mr-1 mb-1 border rounded-1 border-success`}
          value={inputvalue.email}
          onChange={(e) =>
            setInputvalue({
              ...inputvalue,
              email: e.target.value,
            })
          }
          placeholder={`Email`}
        />
        <button
          style={{ cursor: "pointer" }}
            className={`btn btn-primary px-15 py-10 mt-2 mx-2 rounded-1 text-light`}
          onClick={AddEmployee}
          disabled={isEditing}
        >
          Add Employee
        </button>
        <button
          onClick={UpdateEmployee}
          disabled={!isEditing}
          style={{ cursor: "pointer" }}
          className={`btn btn-warning px-15 py-10  mt-2 rounded-1 text-light`}
        >
          Update Employee
        </button>
      </form>
      <h2>Employees List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="border mt-3">
          <h3 style={{}}>Table of Employees</h3>
          <tr className="list-group mt-3 p-0 ">
            {employees.map((employee, index) => (
              <td
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center p-1 mb-1 border rounded-1"
              >
                {employee.id} - {employee.firstName} {employee.lastName} (
                {employee.email})
                <button
                  disabled={isEditing}
                  className="btn btn-danger btn-sm bg-danger "
                  onClick={() => handleDeleteEmployee(index)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning btn-sm bg-warning "
                  onClick={() => handleEditEmployee(employee.id)}
                >
                  Edit
                </button>
              </td>
            ))}
            <th>Next page</th>
          </tr>
        </table>
      )}
    </>
  );
}
