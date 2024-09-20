import { FieldError, UseFormRegister } from "react-hook-form";

import { z, ZodType } from "zod"; // Add new import

export type FormData = {
  username: string;
  email: string;
  password: string;
};

export type SignInFormData = {
  username: string;
  password: string;
};

const capitalLetterRegex = /[A-Z]/;
const numberRegex = /\d/;
const specialCharacterRegex = /[!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',./]/;



export const signInSchema: ZodType<SignInFormData> = z.object({
  username: z
    .string()
    .trim()
    .min(1, { message: "Username must have at least 1 character" })
    .min(5, { message: "Username cannot be less than 5 characters" })
    .max(16, { message: "Username cannot be more than 16 characters" }),
  password: z
    .string()
    .trim()
    .min(1, { message: "Password must have at least 1 character" })
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});


export const employeeSchema: ZodType<FormData> = z.object({
  username: z
    .string()
    .trim()
    .min(1, { message: "Username must have at least 1 character" })
    .min(5, { message: "Username cannot be less than 5 character" })
    .max(16, { message: "Username cannot be more than 16 character" }),
  email: z.string().trim().email({ message: "Invalid email address" }),

  password: z
    .string()
    .trim()
    .min(1, { message: "Password must have at least 1 character" })
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
  /* .regex(capitalLetterRegex, {
      message: "Password must contain at least 1 capital letter",
    })
    .regex(numberRegex, { message: "Password must contain at least 1 number" })
    .regex(specialCharacterRegex, {
      message: "Password must contain at least 1 special character",
    }), */
});

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<SignInFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  disabled?: boolean;
};

export type ValidFieldNames = "username" | "password"
