
import Swal from 'sweetalert2'

export const Alert = (title:string, text:string, icon:'success' | 'error' | 'warning' | 'info' | 'question') => {
 return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "متوجه شدم!!",
  });
};

export const Confirm = (title:string, text:string) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "بله ، حذف شود!",
    cancelButtonText: "خیر ، از حذف منصرف شدم",
    reverseButtons: true
  });
};
