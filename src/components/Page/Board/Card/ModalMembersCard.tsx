import { TmembersBoard } from "@/@types/boards";
import { CheckIcon, CloseModalIcon, TrashIcon } from "@/assets/icon";
import { BoardContext } from "@/context/BoardContext";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect, useState } from "react";
import { Members } from "../Member/Members";
import { Avatar } from "@/components/Avatar";
import { TMembers } from "@/@types/cards";

interface ModalProps {
    children: ReactNode
    cardId: string
    listId: string
}

export function ModalMembersCard({ children, cardId, listId }: ModalProps) {

    const { query: { id } } = useRouter()
    const { board, handleAddMemberCard } = useContext(BoardContext)

    const [members, setMembers] = useState<TMembers[]>([])

    useEffect(() => {
        setMembers(board.members.map(member => ({
            user: member.user._id,
            name: member.name
        })))
    }, [board])


    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="bg-transparent w-full">
                    {children}
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black opacity-60 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-96 flex flex-col items-start justify-start pb-4 w-96 translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Close className="w-full flex items-end justify-end">
                        <Dialog.Title className="text-transparent bg-gradient-to-r from-[#FF5E01] to-[#FFBC95] w-full h-9 flex items-center justify-end p-2 text-mauve12 m-0 text-[17px] font-medium rounded-t-xl">
                            <CloseModalIcon />
                        </Dialog.Title>
                    </Dialog.Close>

                    <main className="w-full mt-10 flex flex-row items-center justify-center p-4 gap-x-6">
                        <section className="w-full h-full flex flex-col items-center justify-center overflow-auto scrollbar scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-w-[6px] scrollbar-thumb-gray-50 scrollbar-track-gray-100">

                            <div className="w-full h-full ">
                                {members?.length > 0 ?
                                    members?.map(member => <main className="w-full flex flex-row items-center justify-center gap-x-4">
                                        <section className="flex flex-col items-start justify-center">
                                            <Avatar name={member.name} size='30px' />
                                        </section>
                                        <section className="w-full flex flex-col items-start justify-center">
                                            <h1 className="text-title-about text-gray-120">{member.name}</h1>
                                        </section>
                                        <section className="w-full flex flex-row items-end justify-end pr-5 gap-x-9">
                                            <button className="bg-transparent" onClick={() =>
                                                handleAddMemberCard(true, cardId, member.user, String(id), listId, member.name)
                                            }>
                                                <CheckIcon />
                                            </button>
                                            <button className="bg-transparent" onClick={() =>
                                                handleAddMemberCard(false, cardId, member.user, String(id), listId, member.name)}>
                                                <TrashIcon />
                                            </button>
                                        </section>
                                    </main>)
                                    :
                                    <h1 className="text-xl w-full text-center pt-8 text-red-600 self-auto">Only You</h1>
                                }

                            </div>
                        </section>
                    </main>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}