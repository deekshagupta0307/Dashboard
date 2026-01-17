import { useState } from "react";
import { useEmployees } from "../../context/EmployeeContext";
import EmployeeForm from "../employee/EmployeeForm";

const EmployeeTable = ({ employees }) => {
  const { deleteEmployee } = useEmployees();
  const [editingEmployee, setEditingEmployee] = useState(null);

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Profile</th>
            <th className="py-2 px-4 border">Full Name</th>
            <th className="py-2 px-4 border">Gender</th>
            <th className="py-2 px-4 border">DOB</th>
            <th className="py-2 px-4 border">State</th>
            <th className="py-2 px-4 border">Active</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="text-center">
              <td className="py-2 px-4 border">{emp.id}</td>
              <td className="py-2 px-4 border">
                {emp.image ? (
                  <img
                    src={emp.image}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td className="py-2 px-4 border">{emp.fullName}</td>
              <td className="py-2 px-4 border">{emp.gender}</td>
              <td className="py-2 px-4 border">{emp.dob}</td>
              <td className="py-2 px-4 border">{emp.state}</td>
              <td className="py-2 px-4 border">
                {emp.active ? "Active" : "Inactive"}
              </td>
              <td className="py-2 px-4 border space-x-2">
                <button
                  onClick={() => setEditingEmployee(emp)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        `Are you sure you want to delete ${emp.fullName}?`
                      )
                    )
                      deleteEmployee(emp.id);
                  }}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingEmployee && (
        <EmployeeForm
          employee={editingEmployee}
          onClose={() => setEditingEmployee(null)}
        />
      )}
    </div>
  );
};

export default EmployeeTable;
