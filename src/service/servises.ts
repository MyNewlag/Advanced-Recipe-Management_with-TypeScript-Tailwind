import httpService from "../service/httpService";
import type { AllCommentType, CommentType } from "../types/comment";
import type { InitialType } from "../types/recipe";



// export const createNewFoodService=(data: InitialType | FormData)=>{
//         if (data instanceof FormData === false && data.image) {
//         let formdata = new FormData()
//         formdata.append('title', data.title)
//         formdata.append('ingredients', data.ingredients)
//         formdata.append('descriptions', data.descriptions)
//         formdata.append('image', data.image)
//         data = formdata
//     }
//       return httpService('/recipes', 'post', data);
// }

  export const getAllFoodService=()=>{
    return httpService('/recipes', 'get');
  }


  export const createNewFoodService = (data: InitialType) => {
    return httpService("/recipes", "post", data);
  };


  export const getSingleFood = (id: string) => {
    return httpService(`/recipes/${id}`, "get");
  };


  export const deleteFoodService = (id: string) => {
    return httpService(`/recipes/${id}`, "delete");
  };


  
export const getCommentService = (foodId: string) => {
    return httpService(`/comments?foodId=${foodId}`, "get");
};


  
  export const createCommentService = (data:AllCommentType) => {
    return httpService(`/comments`, "post" , data);
  };


