import { Clock, Pencil } from "@/assets/icon";
import { CheckBox } from "@/components/CheckBox";


export function Card() {
    return (
        <main className="w-full h-[60px] rounded-lg bg-blue-300 flex flex-row items-center justify-center">
            <div className="w-full flex flex-row items-center justify-between p-2">
                <section className='flex w-fit flex-col items-center gap-y-2'>
                    <h1 className='text-regular'>TitleTaks #1</h1>
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