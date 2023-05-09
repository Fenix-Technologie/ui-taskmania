import { ReactNode } from "react"

interface MenuButtonProps {
    text: string
    icon: ReactNode
    buttonFunction: () => void
}

export function MenuButton({ buttonFunction, icon, text, ...rest }: MenuButtonProps) {
    return (
        <button onClick={buttonFunction} className="bg-transparent gap-x-1 flex flex-row items-center text-regular text-sm" {...rest}>{icon}{text}</button>
    )
}