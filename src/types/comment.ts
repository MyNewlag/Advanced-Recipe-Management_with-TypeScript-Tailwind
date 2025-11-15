

    export interface  CommentType {
        userName:string,
        message:string
    }

    export interface AllCommentType extends CommentType {
          id:string
          foodId:string
    }