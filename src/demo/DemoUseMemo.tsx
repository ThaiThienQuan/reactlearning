import { useCallback, useMemo, useState } from "react";

const innitial = [
  { id: "01`", name: "Vinh", gender: true, checked: true },
  { id: "02", name: "Quân", gender: true, checked: false },
  { id: "03", name: "Tiên", gender: false, checked: true },
];
export default function DemoUseMemo() {
  const [employees, setemployees] = useState(innitial);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = useCallback((e) => {
    setSearchTerm(e.target.value);
    console.log(`have useCallback here with value:` + e.target.value);
  }, []);
  const filterEmployee = useMemo(() => {
    console.log("Filtering employees");
    console.log("useMemo here before return");
    return employees.filter((emp) =>
      `
  ${emp.id}
  ${emp.name}
  ${emp.gender ? "Male" : "Female"}
  ${emp.checked ? "Remembered in 10m" : " not remember"}
  `
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    
    console.log(`useMemo here after return`);
  }, [employees, searchTerm]);
  return (
    <>
      <div className="container mt-5">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search whaterver in list below"
        />
        <ul className="list-group">
          {filterEmployee.map((employee) => (
            <li key={employee.id}>
              {employee.id} - {employee.name}{" "}
              {employee.gender ? "Male" : "Female"}{" "}
              {employee.checked ? "remembered in 10s" : "not remembered"}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
