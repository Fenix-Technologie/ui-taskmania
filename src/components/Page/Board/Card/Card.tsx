import { Clock, Pencil } from "@/assets/icon";
import { CheckBox } from "@/components/CheckBox";


export function Card() {
    return (
        <main className="w-full h-[60px] rounded-lg bg-blue-300 flex flex-row items-center justify-center">
            <div className="flex flex-row items-center gap-x-28">
                <section className='flex flex-col items-center gap-y-2'>
                    <h1 className='text-regular'>TitleTaks</h1>
                    <div className="flex flex-row items-center justify-center gap-x-1">
                        <Clock />
                        <p className="text-regular text-sm">Day, Hour</p>
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