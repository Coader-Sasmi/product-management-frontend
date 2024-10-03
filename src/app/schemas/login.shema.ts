/* eslint-disable @typescript-eslint/no-explicit-any */

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
      name: "hobbies",
      label: "Hobbies and Interests",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Interests is required").trim(),
      initialValue: "",
      className: "col-span-full",
    },
    {
      key: "2",
      name: "expectations",
      label: "Expectations",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Expectations is required"),
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
