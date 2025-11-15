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
  className={`max-w-5xl mx-auto transition-all duration-500 w-full rounded-2xl shadow-lg p-4 sm:p-6 
    backdrop-blur-md 
    ${theme === 'dark'
      ? 'bg-linear-to-r from-gray-800/90 to-gray-900/90'
      : 'bg-linear-to-r from-green-100 to-green-300'
    }`}
>
  <div className="flex items-center justify-between">
    <h5
      className={`font-extrabold text-lg sm:text-2xl tracking-wide flex items-center gap-x-2
        ${theme === 'dark' ? 'text-amber-400' : 'text-green-700'}
      `}
    >
      🍳 <span>به آشپزخونه خوش‌ آمدی!</span>
    </h5>

    <label className="inline-flex items-center cursor-pointer">
        <div className='flex items-center gap-x-2'> 
          <input type="checkbox" value="" 
          className="sr-only peer"
            onChange={()=>dispatch(toggleTheme())}/> 

            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
              peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer
                dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5
                  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
                  after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600">
            </div> 

            <span className=" text-gray-800 dark:text-gray-100 w-8 h-8"> 
                {theme === 'dark' ?
                  <span ><MdOutlineDarkMode className='size-7'/></span> :
                <span> <RiSunLine className='size-7'/> </span> }
            </span> 
            </div> 
    </label>
  </div>

  {/* بخش پایین */}
  <div className="flex justify-between items-end mt-8">

    {/* منو */}
    <nav className="flex gap-3 sm:gap-5">
      <Link to="/">
        <button
          className={`px-4 py-2 rounded-xl font-semibold text-sm sm:text-lg transition-all
            shadow-md hover:shadow-lg
            ${theme === 'dark'
              ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              : 'bg-white text-gray-700 hover:bg-green-200'
            }`}
        >
          صفحه اصلی
        </button>
      </Link>

      <Link to="/add">
        <button
          className={`px-4 py-2 rounded-xl font-semibold text-sm sm:text-lg transition-all
            shadow-md hover:shadow-lg
            ${theme === 'dark'
              ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              : 'bg-white text-gray-700 hover:bg-green-200'
            }`}
        >
          افزودن دستور پخت
        </button>
      </Link>
    </nav>

    {/* عکس آشپز */}
    <div className="hidden sm:block w-28 sm:w-32 drop-shadow-md">
      <img
        src="/src/public/images/sarashpaz.png"
        alt="chef"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</header>

  );
};

export default Header;
