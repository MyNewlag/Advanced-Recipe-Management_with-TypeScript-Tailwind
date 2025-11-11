import { ErrorMessage, FastField } from 'formik';
import FormikError from './FormikError';

type FileType={ 
    name:string 
    label?:string 
    placeholder?:string
 }

 
 
 const File = ({name, label , placeholder }:FileType) => {
    return (
        <FastField>
            {({form}:any) => {
                return (
                    <div>
                        <div className="">
                              <span className="text-gray-800 dark:text-gray-100 font-bold">
                                {label} :
                            </span>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300
                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 "
                                type='file'
                                name={name}
                                placeholder={placeholder}
                                onChange={(e)=> form.setFieldValue(name , e.target.files?.[0])} />
                        </div>
                        <ErrorMessage name={name}
                            render={(msg) => <FormikError>{msg}</FormikError>}/>
                    </div>
                );
            }}
        </FastField>

    );
}

export default File;