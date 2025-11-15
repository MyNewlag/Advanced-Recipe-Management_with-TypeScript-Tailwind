import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getCommentService, getSingleFood } from "../../service/servises";
import type { DataType } from "../../types/recipe";
import { Form, Formik, type FormikHelpers } from "formik";
import FormControl from "../../components/form/FormControl";
import SubmitBotton from "../../components/form/SubmitBotton";
import { initialValues, onSubmit, validationSchema } from "./core";
import type { AllCommentType } from "../../types/comment";
import Button from "../../components/Button";




const RecipeDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [data,setData]=useState<DataType>()
    const [comments,setComments]=useState<AllCommentType[]>()



    const handleSingleFood=async()=>{
        if (!id) return;
        const res=await getSingleFood(id)
        if (res.status==200) {
            setData(res.data)
        }
    }

    const handleComments= async()=>{
       if (!id) return;
      const res=await getCommentService(id)
      setComments(res.data)
    }


    useEffect(()=>{
        handleSingleFood()
        handleComments()
    },[])


    
    return (
       <div className="max-w-5xl mx-auto mt-6 pb-6 pt-3">

  {/* کارت اصلی */}
  <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl overflow-hidden">

    {/* تصویر غذا */}
    <div className="w-full h-56 sm:h-72 md:h-80 overflow-hidden">
      <img
        src="/src/public/images/food1.jpg"
        alt="Food"
        className="w-full h-full object-cover"
      />
    </div>

    {/* اطلاعات غذا */}
    <div className="p-5 space-y-6 text-gray-800 dark:text-gray-100">

      <div className="flex flex-col">
        <span className="text-sm opacity-70">عنوان غذا:</span>
        <strong className="text-xl sm:text-2xl mt-1">{data?.title}</strong>
      </div>

      <div>
        <strong className="text-lg">مواد اولیه:</strong>
        <p className="mt-1 leading-7 opacity-90">{data?.ingredients}</p>
      </div>

      <div>
        <strong className="text-lg">روش پخت:</strong>
        <p className="mt-1 leading-7 opacity-90">{data?.descriptions}</p>
      </div>

      <div className="h-px bg-gray-300 dark:bg-gray-600"></div>
    </div>
  </div>

  {/* فرم نظر */}
  <div className="mt-10 bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-5">
          <Formik
                initialValues={initialValues}
                onSubmit={(values: AllCommentType, 
                  action: FormikHelpers<AllCommentType>) =>
                        onSubmit(values, action,setComments,id!)}
                 validationSchema={validationSchema}
               >
      <Form className="space-y-6">
        <FormControl
          control="input"
          type="text"
          name="userName"
          label="نام کاربر"
          placeholder="نام خود را وارد کنید"
        />

        <FormControl
          control="textarea"
          name="message"
          label="متن نظر"
          placeholder="نظر خود را بنویسید..."
        />

        <SubmitBotton />
      </Form>
    </Formik>
  </div>

  {/* لیست نظرات */}
  <h2 className="text-xl sm:text-2xl text-gray-800 dark:text-gray-100 font-semibold mt-10 px-2">
    نظرات کاربران
  </h2>

  <div className="mt-4 space-y-4 mb-11">
    {comments?.map((comment, index) => (
      <div key={index} className="bg-white dark:bg-slate-800 shadow rounded-xl p-4 mx-1">

        <div className="mb-2">
          <strong className="text-gray-900 dark:text-gray-100">
            {comment.userName} گفته:
          </strong>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-7">
          {comment.message}
        </p>

      </div>
    ))}
  </div>

        <div>
        <Button className="fixed w-[91%] sm:hidden h-12 bottom-2 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl shadow-lg
              font-bold text-white bg-linear-to-r from-green-500 to-green-600 hover:from-green-600
               hover:to-green-700 transition-all duration-300 text-sm sm:text-lg" title="بازگشت"
               onClick={()=>navigate(-1)}
               />
      </div>

</div>

    );
}

export default RecipeDetail;

