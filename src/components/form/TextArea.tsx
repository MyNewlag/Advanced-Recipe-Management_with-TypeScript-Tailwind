
import FormikError from './FormikError'
import { ErrorMessage, FastField } from 'formik'

type textAreaType={ 
    name:string 
    label?:string 
    placeholder?:string
 }
    
 export default function TextArea({name,label,placeholder}:textAreaType) 
 { return (
        <div className='py-3'>
            <div className="flex flex-col">
                <span className="text-gray-800 mb-2 dark:text-gray-100 font-bold"> {label} :</span>
                <FastField as="textarea" name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} />
            </div>
            <ErrorMessage name={name}
             render={(msg) => <FormikError>{msg}</FormikError>}/>
        </div>
    );
}
