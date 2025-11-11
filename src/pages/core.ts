
import * as yup from 'yup';
import type { InitialType } from '../types/recipe';
import { Alert } from '../utils/Alert';
import { createNewFoodService } from '../service/servises';


    export const onSubmit=async (
        values:InitialType,
        action:any,
        setData:React.Dispatch<React.SetStateAction<InitialType[]>>
    )=>{

     const res = await createNewFoodService(values)
      if(res.status==201){
        setData(old=>[...old , values])
        Alert("موفقیت","غذا اضافه شد","success")
        action.resetForm()
      }
        
    }

    export const initialValues:InitialType ={
        title:"",
        ingredients:"",
        descriptions:"",
        image:null
    }

     export const validationSchema =yup.object({
        title:yup.string().required("لطفا این قست را پر کنید").matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
            "فقط از حروف و اعداد استفاده کنید"),
        ingredients:yup.string().required("لطفا این قست را پر کنید").matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&-]+$/,
            "فقط از حروف و اعداد استفاده کنید"),
        descriptions:yup.string().required("لطفا این قست را پر کنید").matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&-]+$/,
            "فقط از حروف و اعداد استفاده کنید"),
        image: yup.mixed() .nullable().
        required("لطفا این قسمت را پر کنید").test("filesize", "حجم فایل نمی‌تواند بیشتر از 500 کیلوبایت باشد",
            (value) => !value || (value as File).size <= 500 * 1024
            )
            .test( "format", "فرمت فایل باید jpg باشد",
            (value) => !value || (value as File).type === "image/jpeg"
            ),
        });