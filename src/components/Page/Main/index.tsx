import { useEffect, useState } from "react";
import { List } from "../Board/List/List";
import { NewList } from "../Board/New/NewList";
import { GetBoardById } from "@/services/requests/boards/getBoardById";
import { useRouter } from "next/router";
import { Iboard } from "@/@types/boards";

export default function Main() {
    // bbg-gradient-to-bl from-blue-10 to-blue-800 gradient
    const { query: { id } } = useRouter()

    const [board, setBoard] = useState<Iboard>()

    console.log(board)
    useEffect(() => {
        async function get() {
            // @ts-ignore
            const response = await GetBoardById(id || '')
            setBoard(response)
        }
        get()
    }, [id])



    const backgroud = board?.backgroundURL
    let emptyBackground = '#60a5fa'

    return (
        <main className='w-full h-[calc(100vh-7rem-4rem)] flex flex-col'>
            {!backgroud ? <section style={{
                backgroundColor: emptyBackground
            }} className='w-full h-[calc(100vh-7rem-4rem)] flex flex-col'>
                <div className=' flex flex-row gap-x-6 p-6'>
                    <List />
                    <NewList />
                </div>
            </section>

                :

                <section style={{
                    backgroundColor: backgroud
                }} className='w-full h-[calc(100vh-7rem-4rem)] flex flex-col'>
                    <div className=' flex flex-row gap-x-6 p-6'>
                        <List />
                        <NewList />
                    </div>
                </section>
            }
        </main>

    )
}