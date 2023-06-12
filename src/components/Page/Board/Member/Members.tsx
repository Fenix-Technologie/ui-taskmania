import { Pencil, TrashIcon } from "@/assets/icon";
import Image from "next/image";
import avatar from '../../../../../public/avatar1.png'
import { Avatar } from "@/components/Avatar";
import { RemoveMember } from "@/services/requests/boards/removeMember";
import { useRouter } from "next/router";
import { useContext } from "react";
import { BoardContext } from "@/context/BoardContext";

interface MemberProps {
    Name: string
    email: string
    avatar: string
    _id: string
}

export function Members({ Name, avatar, email, _id }: MemberProps) {

    const { query: { id } } = useRouter()

    const { handleRemoveMember } = useContext(BoardContext)

    return (
        <main className="w-full flex flex-row items-center justify-center gap-x-4">
            <section className="flex flex-col items-start justify-center">
                <Avatar name={avatar} size='30px' />
            </section>
            <section className="w-full flex flex-col items-start justify-center">
                <h1 className="text-title-about text-gray-120">{Name}</h1>
                <h2 className="text-about text-sm">{email}</h2>
            </section>
            <section className="w-full flex flex-row items-end justify-end pr-5 gap-x-9">
                <button className="bg-transparent">
                    <Pencil />
                </button>
                <button className="bg-transparent" onClick={() => handleRemoveMember(String(id), _id)}>
                    <TrashIcon />
                </button>
            </section>
        </main>
    )
}