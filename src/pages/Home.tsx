import { useContext, useEffect } from "react";
import Modal from "../components/Modal";
import { DataContext } from "../context/RecipeContext";
import Button from "../components/Button";
import { Alert, Confirm } from "../utils/Alert";
import { deleteFoodService, getAllFoodService } from "../service/servises";

const Home = () => {
  const { data, setData } = useContext(DataContext);

  const handleGetData = async () => {
    const res = await getAllFoodService();
    setData(res.data);
  };

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    const confirm = await Confirm("حذف غذا", "آیا از حذف این غذا مطمئن هستید؟");
    if (confirm.isConfirmed) {
      const res = await deleteFoodService(id);
      if (res.status === 200) {
        setData((old) => old.filter((d) => d.id != id));
        Alert("موفقیت", "غذا با موفقیت حذف شد", "success");
      }
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="w-full rounded-xl mt-5 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div
        className="gap-y-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3
             lg:grid-cols-4 p-2"
      >
        {data.length > 0 ? (
          data.map((d) => (
            <Modal
              key={d.id}
              content={
                <div className="p-5">
                  <div className="flex items-center gap-5">
                    <div className="bg-emerald-500 w-1/4 max-w-60 rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full pt-1 object-cover"
                        src="/src/public/images/headrFood.png"
                        alt=""
                      />
                    </div>
                    <div className="w-3/4">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                        {d.title}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {d.ingredients}
                    </p>
                  </div>
                  <div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {d.descriptions}
                    </p>
                  </div>
                </div>
              }
            >
              <div
                className="relative bg-white dark:bg-slate-600 w-50 sm:w-55 h-75 rounded-xl 
                hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
              >
                <div className="w-[95%] m-auto mt-1 rounded-md overflow-hidden">
                  <img
                    className="w-full h-35 pt-1 object-cover"
                    src="/src/public/images/headrFood.png"
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
                  onClick={(e) => handleDelete(e, d.id)}
                />
              </div>
            </Modal>
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
