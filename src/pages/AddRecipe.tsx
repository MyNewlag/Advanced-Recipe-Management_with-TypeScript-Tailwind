import { Form, Formik, type FormikHelpers } from "formik";
import FormControl from "../components/form/FormControl";
import SubmitBotton from "../components/form/SubmitBotton";
import { initialValues, onSubmit, validationSchema } from "./core";
import type { InitialType } from "../types/recipe";
import { useContext } from "react";
import { DataContext } from "../context/RecipeContext";

const AddRecipe = () => {
  const { setData } = useContext(DataContext);

  return (
    <div className="w-full min-h-[90vh] bg-linear-to-b from-green-300 to-green-100 dark:from-gray-800 dark:to-gray-900 
                    mt-6 px-4 sm:px-8 py-6 rounded-2xl shadow-inner transition-colors duration-500">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-green-700 dark:text-amber-400 text-center mb-6">
        🍽️ افزودن دستور پخت جدید
      </h2>

      <Formik
        initialValues={initialValues}
        onSubmit={(values: InitialType, actions: FormikHelpers<InitialType>) =>
          onSubmit(values, actions, setData)
        }
        validationSchema={validationSchema}
      >
        <Form className="max-w-2xl mx-auto bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
          <FormControl
            control="input"
            type="text"
            name="title"
            label="🍛 عنوان غذا"
            placeholder="مثلاً قیمه بادمجان"
          />

          <FormControl
            control="input"
            type="text"
            name="ingredients"
            label="🧂 مواد اولیه"
            placeholder="مثلاً گوشت، بادمجان، لپه، روغن..."
          />

          <FormControl
            control="textarea"
            name="descriptions"
            label="👨‍🍳 دستور پخت"
            placeholder="مراحل تهیه غذا را اینجا بنویسید..."
          />

          <FormControl
            control="file"
            name="image"
            label="📸 تصویر غذا"
            placeholder="عکس غذا را انتخاب کنید"
          />

            <SubmitBotton />

        </Form>
      </Formik>
    </div>
  );
};

export default AddRecipe;
