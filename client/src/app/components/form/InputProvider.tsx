import {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface InputProviderProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  validate: object;
  placeholder?: string;
  inputClasses?: string;
  errors: FieldErrors<FieldValues>;
  inputType?: string;
  errorClasses?: string;
}

export default function InputProvider({
  name,
  register,
  validate,
  placeholder = "",
  inputClasses,
  errors,
  errorClasses = "",
  inputType = "text",
}: InputProviderProps) {
  return (
    <>
      <input
        type={inputType}
        {...register(name, validate)}
        placeholder={placeholder}
        className={inputClasses}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className={`text-sm text-red-600 ${errorClasses}`}>{message}</p>
        )}
      />
    </>
  );
}
