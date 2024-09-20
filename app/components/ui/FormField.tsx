import React from "react";
import { FormFieldProps } from "@/app/types/formTypes";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  disabled
}) => {

  
  return (
    <>
      <input
        className="w-full input-focus placeholder:text-sm text-sm pl-3 border outline-neutral-300 focus:outline-2 focus:outline-indigo-500 h-10 rounded-md"
        autoComplete="off"
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
      {error && <span className="text-red-400 text-sm px-3 pt-1">* {error.message}</span>}
    </>
  );
};

export default FormField;
