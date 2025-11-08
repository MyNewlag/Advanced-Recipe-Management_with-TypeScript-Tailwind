import type { ReactNode } from "react";


export default function FormikError({children}:{children: ReactNode}) {
  return (
    <small className='block text-red-600'>{children}</small>
  )
}
