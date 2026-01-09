const SummaryCards = ({ employees = [] }) => {
  const active = employees.filter((e) => e.active).length;
  const inactive = employees.length - active;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white shadow rounded p-4 text-center">
        <p className="text-gray-500 text-sm">Total Employees</p>
        <p className="text-2xl font-bold text-blue-600">
          {employees.length}
        </p>
      </div>

      <div className="bg-white shadow rounded p-4 text-center">
        <p className="text-gray-500 text-sm">Active Employees</p>
        <p className="text-2xl font-bold text-green-600">
          {active}
        </p>
      </div>

      <div className="bg-white shadow rounded p-4 text-center">
        <p className="text-gray-500 text-sm">Inactive Employees</p>
        <p className="text-2xl font-bold text-red-500">
          {inactive}
        </p>
      </div>
    </div>
  );
};

export default SummaryCards;
