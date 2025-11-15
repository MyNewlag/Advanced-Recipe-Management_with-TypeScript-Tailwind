import * as yup from 'yup';
import type { AllCommentType, CommentType } from '../../types/comment';
import { createCommentService } from '../../service/servises';
import { Alert } from '../../utils/Alert';
import { nanoid } from 'nanoid';



    export const onSubmit=async (
        values:CommentType ,
         action:any,
        setComments:React.Dispatch<React.SetStateAction<AllCommentType[] | undefined>>,
        foodId:string
    )=>{

        const newComment : AllCommentType ={
            id:nanoid(),
            foodId:foodId,
            ...values
        }

        const res =await createCommentService(newComment)
        if (res.status==201) {
             setComments(old => [...(old || []), newComment]);
               Alert("موفقیت","غذا اضافه شد","success")
             action.resetForm()
        }
    }

export const initialValues: AllCommentType = {
  id: "",
  foodId: "",
  userName: "",
  message: ""
}


    export const validationSchema =yup.object({
    userName:yup.string().required("لطفا این قست را پر کنید").matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
        "فقط از حروف و اعداد استفاده کنید"),
    message:yup.string().required("لطفا این قست را پر کنید").matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&-]+$/,
        "فقط از حروف و اعداد استفاده کنید"),
    });



      