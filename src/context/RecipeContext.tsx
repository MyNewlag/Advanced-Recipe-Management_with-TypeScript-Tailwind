import { createContext, useState, type ReactNode } from "react";
import type { DataType } from "../types/recipe";


type RecipeContextType = {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
};


export const DataContext=createContext<RecipeContextType>({
    data:[],
    setData:()=>{}
})



export const RecipeContainer = ({children}:{children:ReactNode}) =>{
    const [data , setData]=useState <DataType[]>([])

      return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}