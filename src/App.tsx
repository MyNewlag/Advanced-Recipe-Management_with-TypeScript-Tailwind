import { Link, Route, Routes } from "react-router"
import Home from "./pages/Home"
import AddRecipe from "./pages/AddRecipe"
import RecipeDetail from "./pages/RecipeDetail"


function App() {


  return (
    <div className="relative z-50 top-9 right-2 left-2 sm:max-w-[85%] m-auto">
    
            
            <header className="  w-full h-60 bg-red-200 p-2 rounded-2xl">
                   <div className="flex items-center justify-between py-4">
                     <h5 className="text-gray-700">
                    با آشپزخونه خوش‌آمدید
                    </h5>
                    
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer"/>
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">Toggle me</span>
                    </label>
                   </div>
              <div className="flex justify-between">
                 
                      <div className="flex gap-2 mt-9 pb-5 pr-3 ">
                          <Link to={'/'}>
                            <button className="bg-white text-gray-700">
                              صفحه اصلی
                              </button>
                          </Link>
                          <Link to={'/add'}>
                            <button className="bg-white text-gray-700">
                              افزودن دستور پخت
                            </button>
                          </Link>
                      </div>

                  <div className="w-42">
                        <img
                          src="/src/public/images/headrFood.png"
                          alt="chef"
                          className="w-full h-full object-contain"
                        />
                    </div>

              </div>
            </header>
       

            <main>
             <Routes>
                  <Route path='/' element={<Home/>}/>   
                  <Route path='/add' element={<AddRecipe/>}/>   
                  <Route path='/recipe/:id' element={<RecipeDetail/>}/>   
            </Routes> 
            </main>
    </div>
  )
}

export default App
