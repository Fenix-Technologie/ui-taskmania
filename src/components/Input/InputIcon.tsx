import { InputHTMLAttributes } from "react"

interface InputIconProps extends InputHTMLAttributes<HTMLInputElement> {
    Label: string
    Placeholder: string
}

export const InputIcon = ({ Label, Placeholder, ...rest }: InputIconProps) => {
    return (
        <div className="w-full flex flex-row items-center justify-center">
            <div className="w-full items-center justify-center">
                <label className="text-gray-120 leading-5 font-medium text-base" htmlFor="">{Label}</label>
            </div>
            <div className="w-full items-center justify-center">
                <input type="text" className="bg-gray-20 w-[362px] h-[34px] rounded-md placeholder:text-gray-98 placeholder:text-sm placeholder:leading-5 px-[10px]" placeholder={Placeholder}{...rest} />
            </div>
        </div>
    )
}