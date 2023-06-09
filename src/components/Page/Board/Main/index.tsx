import { useContext, useEffect, useState } from "react";
import { List } from "../List/List";
import { NewList } from "../New/NewList";
import { GetBoardById } from "@/services/requests/boards/getBoardById";
import { useRouter } from "next/router";
import { Iboard } from "@/@types/boards";
import { BoardContext } from "@/context/BoardContext";

export default function Main() {
    // bbg-gradient-to-bl from-blue-10 to-blue-800 gradient
    const { query: { id } } = useRouter()
    const { board, setBoardData, handleCreateList } = useContext(BoardContext)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function get() {
            setIsLoading(true)
            // @ts-ignore
            const response = await GetBoardById(id || '')
            setBoardData(response)
            setIsLoading(false)
        }
        get()
    }, [id])

    return (
        <main
            style={{
                background: `linear-gradient(225deg, #fff 0%, ${'#60a5fa'} 100%)`
            }}
            className='w-screen h-[calc(100vh-7rem-4rem)] flex flex-col overflow-x-auto scrollbar scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-w-[6px] scrollbar-thumb-gray-50 scrollbar-track-gray-100'>
            <section
                className='w-screen h-[calc(100vh-7rem-4rem)] flex flex-col px-6 py-8'>
                <div className='flex flex-row gap-x-6'>
                    {!isLoading && (
                        <>
                            {board.lists?.map((list) => <List key={list._id} />)}
                        </>
                    )}
                    <NewList />
                </div>
            </section>
        </main>
    )
}