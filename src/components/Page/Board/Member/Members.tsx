import { Pencil, TrashIcon } from "@/assets/icon";
import Image from "next/image";
import avatar from '../../../../../public/avatar1.png'

export function Members() {
    return (
        <main className="w-full flex flex-row items-center justify-center gap-x-4">
            <section className="flex flex-col items-start justify-center">
                <Image alt="Não encontrado" width={80} height={80} src={avatar} />
            </section>
            <section className="w-full flex flex-col items-start justify-center">
                <h1 className="text-title-about text-gray-120">Name</h1>
                <h2 className="text-about text-sm">email</h2>
            </section>
            <section className="w-full flex flex-row items-end justify-end pr-5 gap-x-9">
                <button className="bg-transparent">
                    <Pencil />
                </button>
                <button className="bg-transparent">
                    <TrashIcon />
                </button>
            </section>
        </main>
    )
}