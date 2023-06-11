import { CloseModalIcon, NewMemberIcon } from "@/assets/icon";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { BoardContext } from "@/context/BoardContext";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Members } from "./Members";

interface ModalProps {
    owner: string
    OwnerName: string
    OwnerEmail?: string
}

const schema = z.object({
    email: z.string().email('Para convidar, precisa digitar um email valido')
})

type FormData = z.infer<typeof schema>

export function ModalNewMember({ owner, OwnerName, OwnerEmail }: ModalProps) {
    const { query: { id } } = useRouter()
    const { handleSendInvitation } = useContext(BoardContext)

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        handleSendInvitation(data.email, String(id))
    }

    const onlyYou = <h1 className="text-xl text-red-600">Only You</h1>



    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="bg-transparent">
                    <NewMemberIcon />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[360px] h-[390px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-transparent bg-gradient-to-r from-[#FF5E01] to-[#FFBC95] w-full h-9 flex items-center justify-end p-2 text-mauve12 m-0 text-[17px] font-medium rounded-t-xl">
                        Oi
                    </Dialog.Title>
                    <section className="w-full h-full px-4 py-4 flex flex-col ">
                        <header>
                            <h1 className="text-title-about text-gray-120 text-xl">People on this board</h1>
                        </header>
                        <section className="flex items-center gap-2">
                            <h2 className="text-about">Owner</h2>
                            <div className="flex flex-row w-full">
                                <div className="border-gray-105 border-[1px] w-full border-dashed border-spacing-14" />
                            </div>
                        </section>
                        <section className="w-full flex flex-row gap-x-2">
                            <div>
                                <Avatar name={owner || ""} size='30px' />
                            </div>
                            <div>
                                <h1 className="text-title-about text-gray-120">{OwnerName}</h1>
                                <h2 className="text-about text-sm">{OwnerEmail}</h2>
                            </div>
                        </section>
                        <section className="pt-4 flex items-center">
                            <h2 className="text-about">Members</h2>
                            <div className="flex flex-row w-full">
                                <div className="border-gray-105 border-[1px] w-full border-dashed border-spacing-14" />
                            </div>
                        </section>
                        <div className="w-full flex flex-row items-end justify-end pr-2 gap-x-2">
                            <h2 className="text-menuTitle text-gray-105">Edit</h2>
                            <h2 className="text-menuTitle text-gray-105">Remove</h2>
                        </div>
                        <section className="w-full h-full flex flex-col items-center justify-center overflow-auto scrollbar scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-w-[6px] scrollbar-thumb-gray-50 scrollbar-track-gray-100">

                            <div className="w-full h-full ">
                                <Members />
                                <Members />
                                <Members />
                                <Members />
                            </div>
                        </section>
                        <section className=" border-gray-105 border-t-[1px] w-full border-dashed border-spacing-14 h-full flex flex-row items-center justify-center gap-x-3">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row items-center justify-center gap-x-3 pb-4">
                                <input
                                    className="w-[232px] h-8 rounded-md bg-white border-solid border-gray-90 border-[1px] drop-shadow-md placeholder:text-sm p-4"
                                    placeholder="Add a new member"
                                    type="text"
                                    {...register('email')}
                                />
                                {errors.email && <span className="text-about text-notification-warning">{errors.email.message}</span>}
                                <Button
                                    className='rounded-lg flex flex-row gap-x-2 items-center px-2 text-white text-sm font-lexend bg-gradient-to-r from-[#3060B2] via-[#042C71] to-[#3060B2] border-white border-[1px] hover:bg-gradient-to-r hover:brightness-125'
                                    text="Send Invite"
                                    type="submit"
                                />
                            </form>
                        </section>
                    </section>
                    <Dialog.Close asChild className="flex flex-col items-center justify-center">
                        <button
                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[7px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            <CloseModalIcon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}