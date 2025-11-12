import { Link } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHook';
import { toggleTheme } from '../../redux/ui-managment/uiManagmants';
import { MdOutlineDarkMode } from "react-icons/md";
import { RiSunLine } from "react-icons/ri";

const Header = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.uiManagerReducer);

  return (
    <header
      className={`transition-colors duration-500 w-full rounded-2xl shadow-md p-4 ${
        theme === 'dark'
          ? 'bg-linear-to-r from-gray-800 to-gray-900'
          : 'bg-linear-to-r from-green-100 to-green-300'
      }`}
    >
      {/* بالا */}
      <div className="flex items-center justify-between">
        <h5
          className={`text-2xl font-extrabold ${
            theme === 'dark' ? 'text-amber-400' : 'text-green-700'
          }`}
        >
          🍳 به آشپزخونه خوش‌ آمدی !
        </h5>

        <label className="inline-flex items-center cursor-pointer">
           <div className='flex items-center gap-x-2'>
                 <input type="checkbox" value="" className="sr-only peer" onChange={()=>dispatch(toggleTheme())}/>
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none
                    peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
                    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                    rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-0.5 after:start-0.5
                      after:bg-white after:border-gray-300 after:border after:rounded-full 
                      after:h-5 after:w-5 after:transition-all dark:border-gray-600
                      peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600">
                   </div>
          
              <span className=" text-gray-800 dark:text-gray-100 w-8 h-8">
                {theme === 'dark' ? 
                <span ><MdOutlineDarkMode className='size-7'/></span> :
                <span>
                  <RiSunLine className='size-7'/>
                </span>
                }
              </span>
          </div>
        </label>
      </div>

      {/* پایین */}
      <div className="flex justify-between items-end mt-6">
        <nav className="flex gap-3 sm:gap-6">
          <Link to="/">
            <button
              className={`px-3 sm:px-5 py-2 rounded-xl font-bold text-sm sm:text-lg transition
              shadow-sm hover:shadow-md ${
                theme === 'dark'
                  ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
                  : 'bg-white text-gray-700 hover:bg-green-100'
              }`}
            >
              صفحه اصلی
            </button>
          </Link>

          <Link to="/add">
            <button
              className={`px-3 sm:px-5 py-2 rounded-xl font-bold text-sm sm:text-lg transition
              shadow-sm hover:shadow-md ${
                theme === 'dark'
                  ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
                  : 'bg-white text-gray-700 hover:bg-green-100'
              }`}
            >
              افزودن دستور پخت
            </button>
          </Link>
        </nav>

        <div className="w-24 sm:w-32">
          <img
            src="/src/public/images/headrFood.png"
            alt="chef"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
