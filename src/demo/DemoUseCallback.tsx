import { useCallback, useMemo, useState } from "react";

const innitial = [
  { id: "01`", name: "Vinh", gender: true, checked: true },
  { id: "02", name: "Quân", gender: true, checked: false },
  { id: "03", name: "Tiên", gender: false, checked: true },
];
export default function DemoUseCallback() {
  const [employees, setemployees] = useState(innitial)
  const [SearchTerm, setSearchTerm] = useState('');

  const handleChange=useCallback((e)=>{
    setSearchTerm(e.target.value);
  },[]);
 
  const filterEmployee = useMemo(() => {
    console.log('Filtering employees');
    return employees.filter((employee) =>
      `${employee.firstName} ${employee.lastName} ${employee.email}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [employees, searchTerm]);
  return (
    <>
      <div className="container mt-5">
        <input
          type="text"
          value={SearchTerm}
          onChange={handleChange}
          placeholder="Search whaterver in list below"
        />
        <ul className="list-group">
          {filterEmployee.map((employee) => (
            <li key={employee.id}>
              {employee.id} - {employee.name} {employee.gender?'Male':'Female'}{" "}
              {employee.checked?'remembered in 10s':'not remembered'}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
