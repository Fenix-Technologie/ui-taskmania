import { NewListIcon } from "@/assets/icon";
import { BoardContext } from "@/context/BoardContext";
import { useContext } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function NewList({ ...rest }: ButtonProps) {
    const { handleCreateList } = useContext(BoardContext)
    return (
        <button {...rest} onClick={handleCreateList} className="min-w-[270px] h-14 text-menuTitle gap-x-40 text-gray-100 flex flex-row items-center justify-center bg-white/30 rounded-[10px] border-[1px] border-solid border-gray-90">
            New List <NewListIcon />
        </button>
    )
}