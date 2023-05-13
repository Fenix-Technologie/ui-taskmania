import React, { ReactNode, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Placeholder?: string
  Type: string
  Label: string
  errorMessage?: string

}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ Placeholder, Type, Label, errorMessage, ...rest }, ref) => {

  return (

    <div className="w-full flex flex-col items-center justify-center">
      <div className='w-[348px] flex flex-col items-start justify-start'>
        <div className="w-full flex flex-col items-start justify-start">
          <label htmlFor="" className="text-regular font-semibold font-lexend text-base justify-self-start">{Label}</label>
        </div>
        <div className="w-full flex flex-col items-center justify-center min-h-[calc(56px-16px)]  relative">
          <input placeholder={Placeholder} type={Type}
            className={`rounded-lg w-full h-10 border-gray-90 border-[1px] drop-shadow-md placeholder:text-gray-50 px-4 ${Type == 'password' ? 'placeholder:tracking-[0.5rem]' : 'placeholder:tracking-normal'
              }`} ref={ref} {...rest} />
          <span className='text-gray-400 text-xs absolute -bottom-4 left-1'>{errorMessage}</span>
        </div>
      </div>
    </div>
  )
})
