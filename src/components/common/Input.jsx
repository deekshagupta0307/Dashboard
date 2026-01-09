const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm text-gray-600">{label}</label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default Input;
