import { ErrorMessage, FastField } from "formik";
import type { FieldInputProps, FormikProps } from "formik";

import FormikError from "./FormikError";

type InputType = {
  type?: string;
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
};

export default function Input({
  type = "text",
  name,
  label,
  className = "",
  placeholder,
}: InputType) {
  return (
    <FastField name={name}>
      {({
        field
      }: {
        field: FieldInputProps<string>;
      }) => (
        <div className={`mt-4 ${className}`}>
          <div className="flex flex-col">
            {label && (
              <span className="text-gray-800 mb-2">
                {label} :
              </span>
            )}
            <input
              {...field}
              type={type}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" required
              placeholder={placeholder}
              id={name}
            />
      
          </div>

          <ErrorMessage name={name} render={(msg) => <FormikError>{msg}</FormikError>}/>
        </div>
      )}
    </FastField>
  );
}
