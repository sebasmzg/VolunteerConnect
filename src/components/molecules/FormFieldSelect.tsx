import React from "react";
import Select from "../atoms/Select";
import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
// import SelectForm from '../atoms/Select';

interface FormFieldSelectProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  options: { value: string; label: string }[];
  control: Control<T>;
  error?: FieldError;
  id?: string;
}

const FormFieldSelect = <T extends FieldValues>({
  label,
  name,
  options,
  control,
  error,
  id,
}: FormFieldSelectProps<T>) => {
  return (
    <div className="form-field-select">
      <label htmlFor={id || label.toLocaleLowerCase()} className={`text-sm font-medium mb-2`}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            id={id || label.toLowerCase()}
            options={options}
            error={error?.message}
            {...field}
          />
        )}
        />
    </div>
  );
};

export default FormFieldSelect;
