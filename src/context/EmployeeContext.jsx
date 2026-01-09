// src/context/EmployeeContext.jsx
import { createContext, useContext, useState } from "react";

// Create context
const EmployeeContext = createContext();

// Provider component
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

  // Add employee
  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: Date.now() }]);
  };

  // Edit employee
  const editEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  // Delete employee
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

// Custom hook
export const useEmployees = () => useContext(EmployeeContext);
