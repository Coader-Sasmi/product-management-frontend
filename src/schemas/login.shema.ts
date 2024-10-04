/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as Yup from "yup";

type InitialValues = {
  [key: string]: string | number | boolean | null;
};

type ValidationSchemas = {
  [key: string]: Yup.Schema<any>;
};

const loginInfo = () => {
  const loginSchema = [
    {
      key: "1",
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Name is required").trim(),
      initialValue: "",
      className: "col-span-full",
    },
    {
      key: "2",
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      validationSchema: Yup.string().required("Email is required"),
      initialValue: "",
      className: "col-span-full",
    },
    {
      key: "3",
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      validationSchema: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      initialValue: "",
      className: "col-span-full",
    },
  ];

  const loginSchemaInitialValue = loginSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as InitialValues
  );

  const loginSchemaValidation = loginSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as ValidationSchemas
  );
  return {
    loginSchema,
    loginSchemaInitialValue,
    loginSchemaValidation,
  };
};

type loginInfoType =
  | loginType
  | {
      [key: string]: string;
    };

export { loginInfo };
export type { loginInfoType };
