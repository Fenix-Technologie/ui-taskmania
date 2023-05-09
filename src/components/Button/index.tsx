import { FC, ReactNode } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    icon?: ReactNode
}

export const Button: FC<ButtonProps> = ({ text, icon, ...rest }) => {
    return (
        <button className='rounded-lg flex flex-row gap-x-2 items-center py-2 px-10 text-white font-bold font-lexend bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 border-white border-[1px] hover:bg-gradient-to-r hover:brightness-125' {...rest}>{icon}{text}</button>
    )
}