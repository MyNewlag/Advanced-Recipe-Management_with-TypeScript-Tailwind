import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/RecipeContext";
import Button from "../components/Button";
import { Alert, Confirm } from "../utils/Alert";
import { deleteFoodService, getAllFoodService } from "../service/servises";
import Input from "../components/Input";
import type { DataType } from "../types/recipe";
import { Link } from "react-router";

const Home = () => {

   
  const { data, setData } = useContext(DataContext);

  const [dataInfo , setDataInfo]=useState<DataType[]>([])
  const [textSearch , setTextSearch]=useState("")

  const handleGetData = async () => {
    const res = await getAllFoodService();
    setData(res.data);
    setDataInfo(res.data);
  };

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    e.preventDefault();  
    const confirm = await Confirm("حذف غذا", "آیا از حذف این غذا مطمئن هستید؟");
    if (confirm.isConfirmed) {
      const res = await deleteFoodService(id);
      if (res.status === 200) {
        setData((old) => old.filter((d) => d.id != id));
        Alert("موفقیت", "غذا با موفقیت حذف شد", "success");
      }
    }
  };

  useEffect(()=>{
    setDataInfo(data.filter(d=>d.title.includes(textSearch)))
  }, [data, textSearch]);

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto w-full rounded-xl mt-5 bg-slate-50 dark:bg-slate-800 
    transition-colors duration-300">
      <div className="w-[95%] mx-auto py-5 px-3">
        <Input name="search" className="mr-1" 
        onChange={(e)=>setTextSearch(e.target.value)}
        placeholder="اسم غذا را سرچ بزن..."/>
      </div>
      <div
        className="gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
             lg:grid-cols-4 p-2 justify-items-center">

        {dataInfo.length > 0 ? (
          dataInfo.map((d) => (
        
            <Link to={`/recipe/${d.id}`}>
              <div
                className=" relative bg-white dark:bg-slate-600 w-65 sm:w-55 h-75 rounded-xl mb-15
                hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
              >
                <div className="w-[95%] m-auto mt-1 rounded-md overflow-hidden">
                  <img
                    className="w-full h-35 pt-1 object-cover"
                    src="/src/public/images/food1.jpg"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-xl text-gray-900 dark:text-gray-100 text-right">
                    {d.title}
                  </h4>
                    <p
                        className="text-gray-700 dark:text-gray-400 text-right mt-2 
                        overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"
                        >
                        {d.descriptions}
                     </p>

                </div>

                <Button
                  title="حذف"
                  className="absolute bottom-2 left-3 bg-rose-600 hover:bg-rose-700 
                  text-white px-3 py-1 rounded-md shadow-md"
                  onClick={(e) => handleDelete(e, d.id!)}
                />
              </div>
            </Link>
        
          ))
        ) : (
          <h2 className="text-red-600 dark:text-red-400">
            اطلاعاتی جهت نمایش وجود ندارد
          </h2>
        )}
      </div>


    </div>
  );
};

export default Home;
