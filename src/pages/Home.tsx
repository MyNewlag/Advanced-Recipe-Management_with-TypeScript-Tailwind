import { useContext, useEffect } from "react";
import Modal from "../components/Modal";
import { DataContext } from "../context/RecipeContext";
import { deleteFoodService, getAllFoodService } from "./servises";
import Button from "../components/Button";
import { Confirm } from "../utils/Alert";



const Home = () => {

    const {data,setData}=useContext(DataContext)

    const handleGetData=async ()=>{
        const res=await getAllFoodService()
        setData(res.data)
    }

    const handleDelete=async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ,
         id:string)=>{
        e.stopPropagation()
       const confirm=await Confirm("حذف !!!","آیا از حذف غذا اطمینان دارید؟")
       if (confirm.isConfirmed) {
           const res=await deleteFoodService(id)
           if (res.status==200) {
                setData(old=>old.filter(d=>d.id!=id))
           }
       }
        
    }
        console.log(data);

    
    useEffect(()=>{
        handleGetData()
    },[data])

    return (
        <div className="bg-gray-50 w-full rounded-xl mt-5 ">
            <div className="gap-y-2 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3
             lg:grid-cols-4 p-2">

                {data.length>0 ?
                data.map ((d)=>
                <Modal 
                content={
                    <div className="p-5">
                         <div className="flex items-center gap-5">
                            <div className="bg-green-500 w-1/4 max-w-60">
                                <img className="w-full h-full pt-1" src="/src/public/images/headrFood.png" alt="" />
                            </div>
                            <div className="w-3/4">
                                <h3 className="font-bold text-lg">{d.title}</h3>
                            </div>
                          </div>
                        <div>
                            <p className="mt-2">
                                {d.ingredients}
                            </p>
                        </div>
                        <div>
                            <p className="mt-2">
                                {d.descriptions}
                            </p>
                        </div>
                    </div>
                }>
                  
                    <div className="relative bg-amber-400 w-55 h-70 rounded-xl hover:scale-105
                        transition-transform duration-300 ">
                        <div className="w-[95%] m-auto mt-1">
                            <img className="w-full h-30 pt-1" src="/src/public/images/headrFood.png" alt="" />
                        </div>
                        <div className="p-2">
                            <h4 className="text-xl text-white text-right"> {d.title}</h4>
                            <p className="text-white text-right line-clamp-2 mt-2">{d.descriptions}</p>
                        </div>
                   
    
                          <Button title='حذف' 
                          className='absolute bottom-2 left-3 bg-fuchsia-800'
                          onClick={(e)=>handleDelete(e,d.id)}
                          />

                    </div>
                </Modal>

                ):(
                    <h2 className="text-red-600">اطلاعاتی جهت نمایش وجود ندارد</h2>
                )}
            
            </div>
        </div>
    );
}

export default Home;
