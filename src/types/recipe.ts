
    export interface  InitialType {
         title:string,
        ingredients:string,
        descriptions:string,
         image: File | null;
    }

    export interface  DataType extends  InitialType{
          id:string
    }