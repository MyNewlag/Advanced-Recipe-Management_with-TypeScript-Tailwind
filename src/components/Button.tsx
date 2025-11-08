
import React, { type ComponentProps } from 'react';



const Button = ({title,className , ...res}: ComponentProps<"button"> & 
    {title:string , className:string}) => {
    return (
        <div>
        <button className={`${className} flex items-center 
                justify-center text-white px-3 py-1 rounded`} {...res}>
                    {title}
         </button>
        </div>
    );
}

export default Button;
