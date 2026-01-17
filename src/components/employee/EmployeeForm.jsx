import { useState, useEffect } from "react";
import { useEmployees } from "../../context/EmployeeContext";

const EmployeeForm = ({ onClose, employee }) => {
  const { addEmployee, editEmployee } = useEmployees();

  const [fullName, setFullName] = useState(employee?.fullName || "");
  const [gender, setGender] = useState(employee?.gender || "");
  const [dob, setDob] = useState(employee?.dob || "");
  const [state, setState] = useState(employee?.state || "");
  const [active, setActive] = useState(employee?.active ?? true);
  const [image, setImage] = useState(employee?.image || null);
  const [preview, setPreview] = useState(employee?.image || null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !gender || !dob || !state) {
      setError("Please fill all required fields");
      return;
    }

    const employeeData = {
      id: employee?.id,
      fullName,
      gender,
      dob,
      state,
      active,
      image: preview, 
    };

    if (employee) {
      editEmployee(employeeData);
    } else {
      addEmployee(employeeData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <h2 className="text-xl font-bold mb-4">
          {employee ? "Edit Employee" : "Add Employee"}
        </h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">DOB</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">State</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
            <label>Active</label>
          </div>

          <div>
            <label className="block mb-1">Profile Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-20 h-20 mt-2 object-cover rounded"
              />
            )}
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {employee ? "Save Changes" : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
