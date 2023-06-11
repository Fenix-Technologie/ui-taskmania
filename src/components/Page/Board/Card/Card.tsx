import { Clock, Pencil } from "@/assets/icon";
import { CheckBox } from "@/components/CheckBox";
import { format } from "date-fns";

interface CardProps {
    title: string,
    deadline: Date
}

export function Card({ title, deadline }: CardProps) {
    //stop propagation
    return (
        <main className="w-full h-[60px] rounded-lg bg-blue-300 flex flex-row items-center justify-center">
            <div className="w-full flex flex-row items-center justify-between p-2">
                <section className='flex w-fit flex-col gap-y-2'>
                    <h1 className='text-regular'>{title}</h1>
                    <div className="flex flex-row items-center gap-x-1">
                        <Clock />
                        <p className="text-regular text-sm">{format(new Date(deadline), "dd'/'MM'/'yyyy '-' kk':'mm")}</p>
                    </div>
                </section>
                <section className='flex flex-col items-center gap-y-4'>
                    <Pencil />
                    <CheckBox />
                </section>
            </div>
        </main>
    )
}