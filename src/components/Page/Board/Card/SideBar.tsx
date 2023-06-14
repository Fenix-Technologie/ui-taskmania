import { PriorityIcon, SigninIcon, Tag } from "@/assets/icon";
import { MenuButton } from "../Menu/Button";
import { ClockCard } from "@/assets/icon";
import { DropDownPriority } from "./DropDownPriority";
import { ModalMembersCard } from "./ModalMembersCard";

interface SideBarProps {
    setPriority: Function
    cardId: string
    listId: string
}

export function SideBarCard({ setPriority, cardId, listId }: SideBarProps) {

    return (
        <aside className="bg-gray-30 w-[154px] items-center justify-center h-[630px] rounded-[10px]">
            <header className="bg-gray-95 w-full h-[34px] flex items-center justify-center rounded-t-[10px]">
                <h1 className="text-title-about">Edit or Add</h1>
            </header>
            <main>
                <section className="flex flex-col gap-y-2 p-5">
                    <ModalMembersCard cardId={cardId} listId={listId}>
                        <MenuButton
                            text="Members"
                            icon={<SigninIcon />}
                        />
                    </ModalMembersCard>

                    <DropDownPriority setPriority={setPriority}>
                        <MenuButton
                            text='Priority'
                            icon={<PriorityIcon />}
                        />
                    </DropDownPriority>

                </section>
            </main>
        </aside>
    )
}