/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { loginInfo } from "@/schemas/login.shema";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../common/InputField";

export default function LoginForm() {
  // const [id, setId] = useState(0);
  const { loginSchema, loginSchemaInitialValue, loginSchemaValidation } =
    loginInfo();
  return (
    <Formik
      initialValues={loginSchemaInitialValue}
      validationSchema={Yup.object(loginSchemaValidation)}
      onSubmit={(values) => {
        console.log("Form Values:", values);
      }}
    >
      {(formik) => (
        <Form className="grid grid-cols-12 gap-y-4 gap-x-6 w-full">
          {loginSchema.map((inputItem) => (
            <Field name={inputItem.name} key={inputItem.key}>
              {() => (
                <div
                  className={`flex w-full flex-col col-span-12 justify-center  ${inputItem?.className}`}
                >
                  <div
                    className={`font-medium text-sm  ${
                      inputItem?.key ? "text-slate-900" : "text-secondary"
                    }`}
                  >
                    {inputItem.label}{" "}
                    <span>{inputItem?.required ? "*" : ""}</span>
                  </div>
                  {inputItem?.key ? (
                    <div className="relative">
                      <InputField
                        fullWidth
                        // id={id}
                        key={inputItem?.key}
                        name={inputItem?.name}
                        type={inputItem?.type}
                        value={formik?.values[inputItem?.name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <p className="absolute -bottom-5 text-red-500 text-sm">
                        {Boolean(
                          formik?.touched[inputItem?.name] &&
                            formik?.errors[inputItem?.name]
                        )}
                        {formik?.touched[inputItem?.name] &&
                          formik?.errors[inputItem?.name]}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </Field>
          ))}
          <div className="col-span-12 flex justify-center items-center">
            <button
              type="submit"
              className="!bg-tertiary text-white p-2 text-sm rounded-md w-full h-fit whitespace-nowrap font-semibold"
            >
              SUBMIT
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
