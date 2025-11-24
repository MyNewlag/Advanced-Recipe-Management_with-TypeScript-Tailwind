import { type ReactNode } from 'react';
import { useAppSelector } from '../../redux/reduxHook';

const AppContainer = ({children}:{children : ReactNode}) => {
      const {theme} = useAppSelector(state=>state.uiManagerReducer)  // theme را با اینجا انتقال داده ایم تا با تغیر آن کل پروژه زندر مجدد نشه

    return (
       <div className={`${theme=='dark' ? 'bg-gray-600' :'bg-gray-100'} 
       min-h-screen`}>
         <main className={theme}>
            {children}
        </main>
       </div>
    );
}

export default AppContainer;
