import { Form, Formik, type FormikHelpers } from "formik";
import FormControl from "../components/form/FormControl";
import SubmitBotton from "../components/form/SubmitBotton";
import { initialValues, onSubmit, validationSchema } from "./core";
import type { InitialType } from "../types/recipe";
import { useContext } from "react";
import { DataContext } from "../context/RecipeContext";


const AddRecipe = () => {

const { setData}=useContext(DataContext)

                
    return (
        <div className="w-full h-full bg-gray-200 mt-5 px-3 py-4">
         <Formik
                  initialValues={initialValues}
                  onSubmit={(values: InitialType, actions: FormikHelpers<InitialType>)=>
                    onSubmit(values,actions,setData)}
                  validationSchema={validationSchema}
                  >

                <Form>
                    <FormControl
                    control="input"
                    type="text"
                    name="title"
                    label="عنوان غذا "
                    placeholder="فقط از حروف استفاده کنید"
                    />

                    <FormControl
                    control="input"
                    type="text"
                    name="ingredients"
                    label="مواد اولیه "
                    placeholder="فقط از حروف و - و ، استفاده کنید"
                    />

                    <FormControl
                    control="textarea"
                    name="descriptions"
                    label="دستور پخت"
                    placeholder="فقط از حروف و - و ، استفاده کنید"
                    />

                    <FormControl
                    control="file"
                    name="image"
                    label="تصویر "
                    placeholder="تصویر را وارد کن"
                    />

                    <SubmitBotton/>

                </Form>
     
         </Formik>
        </div>
    );
}

export default AddRecipe;
