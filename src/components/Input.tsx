

// type InputType = {
//   type?: string;
//   name: string;
//   className?: string;
//   placeholder?: string;
// };

type InputType = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  className?: string;
};

export default function Input({
  type = "text",
  name,
  className = "",
  placeholder,
  ...props
}: InputType) {

    return (
        <div className={` ${className}`}>
          <div className="flex flex-col">
            <input
            {...props}
              type={type}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={placeholder}
              id={name}
            />
      
          </div>
        </div>
    );
}
