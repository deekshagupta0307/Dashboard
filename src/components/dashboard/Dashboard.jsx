import { useState } from "react";
import { useEmployees } from "../../context/EmployeeContext";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "../employee/EmployeeForm";
import EmployeeFilters from "../employee/EmployeeFilters";
import SummaryCards from "./SummaryCards";

const Dashboard = () => {
  const { employees } = useEmployees();
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const filteredEmployees = employees
    .filter((e) =>
      e.fullName.toLowerCase().includes(search.toLowerCase())
    )
    .filter((e) => (gender ? e.gender === gender : true))
    .filter((e) =>
      status !== "" ? e.active === (status === "true") : true
    );

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <SummaryCards employees={employees} />

      <div className="flex justify-between mb-4">
        <EmployeeFilters
          search={search}
          setSearch={setSearch}
          gender={gender}
          setGender={setGender}
          status={status}
          setStatus={setStatus}
        />

        <div className="space-x-2">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Employee
          </button>
          <button
            onClick={() => window.print()}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Print
          </button>
        </div>
      </div>

      <EmployeeTable employees={filteredEmployees} />

      {showForm && <EmployeeForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Dashboard;
