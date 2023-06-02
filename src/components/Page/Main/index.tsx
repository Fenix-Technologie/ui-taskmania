import { List } from "../Board/List/List";
import { NewList } from "../Board/New/NewList";

export default function Main() {
    // bbg-gradient-to-bl from-blue-10 to-blue-800 gradient
    return (
        <section className='w-full h-[calc(100vh-7rem-4rem)] flex flex-col bg-blue-400 '>
            <div className=' flex flex-row gap-x-6 p-6'>
                <List />
                <NewList />
            </div>
        </section>
    )
}