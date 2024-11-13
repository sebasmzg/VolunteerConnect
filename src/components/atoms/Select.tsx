import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  error?: string;
}

const SelectForm = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, error, ...props }, ref) => {
    return (
      <div className="flex items-center">
        <select
          ref={ref}
          className={`w-full p-2 border ${error ? "border-red-500" : "border-gray-300"} rounded`}
          {...props}
        >
          <option value="">Seleccionar rol</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default SelectForm;