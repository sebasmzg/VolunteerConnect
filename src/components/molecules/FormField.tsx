"use client";

import {
  Control,
  FieldError,
  Path,
  FieldValues,
  Controller,
} from "react-hook-form";
import { Input } from "../atoms/input";

interface FormFieldProps<T extends FieldValues> {
  label: string;
  type: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  id?: string;
  placeholder?: string;
}

export const FormField = <T extends FieldValues>({
  label,
  type,
  name,
  control,
  error,
  id,
  placeholder,
}: FormFieldProps<T>) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <label
        htmlFor={id || label.toLocaleLowerCase()}
        className={`text-sm font-medium mb-2`}
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            id={id || label.toLowerCase()}
            type={type}
            placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
            error={error?.message}
            {...field}
          />
        )}
      />
    </div>
  );
};
