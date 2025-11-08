

import { FastField } from 'formik';

export default function SubmitBotton() {
  
   return (
        <FastField>
        {({ form }:any) => {
          return (
            <div className=" flex items-center justify-center">

            <button type="submit" className=" w-2/3 bg-green-500 text-white mt-2"
             disabled={form.isSubmitting}>
              {form.isSubmitting ? "لطفا صبر کنید..." : "ذخیره"}
            </button>
            </div>
          );
        }}
      </FastField>
    );
}