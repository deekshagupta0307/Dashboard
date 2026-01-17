import { createContext, useContext, useState } from "react";
const EmployeeContext = createContext();
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Alice Smith",
      gender: "Female",
      dob: "1995-05-10",
      state: "California",
      active: true,
      image: null,
    },
    {
      id: 2,
      fullName: "Bob Johnson",
      gender: "Male",
      dob: "1990-09-22",
      state: "Texas",
      active: false,
      image: null,
    },
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: Date.now() }]);
  };

  const editEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, editEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);
