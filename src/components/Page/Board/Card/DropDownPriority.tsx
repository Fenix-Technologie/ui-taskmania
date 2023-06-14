import * as  DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

interface DropDownProps {
    children: ReactNode
    setPriority: Function
}

export function DropDownPriority({ children, setPriority }: DropDownProps) {

    const prioritys = [{
        color: "#FF8F89",
        text: "Very high"
    },
    {
        color: "#FFC978",
        text: "High"
    },
    {
        color: "#FFF6A1",
        text: "Medium"
    },
    {
        color: "#FFFDC9",
        text: "Low"
    },
    {
        color: "#8DC9FF",
        text: "Very low"
    },
    {
        color: "#80D465",
        text: "Complete"
    }]

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className="bg-transparent"
                >
                    {children}
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="w-32 bg-[#0C0C0C] rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                >
                    {prioritys.map(element =>
                        <DropdownMenu.Item>
                            <button onClick={() => setPriority(element.color, element.text)} className="text-white flex gap-x-2 items-center justify-center">
                                <div className="w-7 h-7 border-solid border-black border-[1px]" style={{ backgroundColor: element.color }} />
                                <h2>{element.text}</h2>
                            </button>
                        </DropdownMenu.Item>
                    )}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}