import { Clock, Pencil } from "@/assets/icon";
import { CheckBox } from "@/components/CheckBox";
import { format } from "date-fns";

interface CardProps {
    title: string,
    deadline: string
    color: string
}

export function Card({ title, deadline, color }: CardProps) {
    //stop propagation
    return (
        <main style={{ backgroundColor: color }} className="w-full h-[60px] rounded-lg flex flex-row items-center justify-center">
            <div className="w-full flex flex-row items-center justify-between p-2">
                <section className='flex w-fit flex-col gap-y-2'>
                    <h1 className='text-regular'>{title}</h1>
                    <div className="flex flex-row items-center gap-x-1">
                        <Clock />
                        <p className="text-regular text-sm">{deadline}</p>
                    </div>
                </section>
                <section className='flex flex-col items-center gap-y-4'>
                    <Pencil />
                </section>
            </div>
        </main>
    )
}