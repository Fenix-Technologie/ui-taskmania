import { NewListIcon } from "@/assets/icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function NewList({ ...rest }: ButtonProps) {
    return (
        <button {...rest} className="w-[270px] h-14 text-menuTitle gap-x-40 text-gray-100 flex flex-row items-center justify-center bg-white/30 rounded-[10px] border-[1px] border-solid border-gray-90">
            New List <NewListIcon />
        </button>
    )
}