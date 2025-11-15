import { useState, type ReactNode } from "react";

const Modal = ({ children, content }: { children: ReactNode; content: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex justify-center">
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        {children}
      </div>

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center 
                     bg-black/40 backdrop-blur-sm z-50">
          <div className="flex flex-col justify-between bg-amber-800 rounded-xl text-white 
                       shadow-2xl w-[90%] max-w-2xl max-h-[90vh]" >
            <div className="flex-1 overflow-y-auto  p-5">{content}</div>

            <div className="flex justify-end my-4">
              <button
                onClick={() => setOpen(false)}
                className="btn btn-sm bg-amber-600 text-white w-[90%] m-auto"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;



        //  {/* You can open the modal using document.getElementById('ID').showModal() method */}
        //     <button className="btn text-gray-800 bg-amber-950" 
        //      onClick={()=>(document.getElementById('my_modal_4')as HTMLDialogElement)?.showModal()}>
        //         {children}
        //      </button>

        //     <dialog id="my_modal_4" className="modal">
        //     <div className="modal-box max-w-5xl bg-amber-900">
        //         <h3 className="font-bold text-lg">Hello!</h3>
        //         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ipsa, ab quo maiores impedit aspernatur harum quidem ad labore doloremque placeat aliquid animi neque officiis iure porro inventore accusantium hic!</p>
        //         <div className="modal-action">
        //         <form method="dialog">
        //             {/* if there is a button, it will close the modal */}
        //             <button className="btn">Close</button>
        //         </form>
        //         </div>
        //     </div>
        //     </dialog>