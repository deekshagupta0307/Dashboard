import React from "react";

const EmployeeFilters = ({ search, setSearch, gender, setGender, status, setStatus }) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)} className="border p-2 rounded">
        <option value="">All Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 rounded">
        <option value="">All Status</option>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
    </div>
  );
};

export default EmployeeFilters;
