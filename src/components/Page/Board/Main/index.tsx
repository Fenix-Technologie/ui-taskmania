import { useCallback, useContext, useEffect, useState } from "react";
import { List } from "../List/List";
import { NewList } from "../New/NewList";
import { GetBoardById } from "@/services/requests/boards/getBoardById";
import { useRouter } from "next/router";
import { Iboard } from "@/@types/boards";
import { BoardContext } from "@/context/BoardContext";
import { Avatar } from "@/components/Avatar";
import { ModalNewMember } from "../Member/Modal";
import { RenameBoard } from "@/services/requests/boards/RenameBoard";
import { useDebounce } from 'ahooks';

export default function Main() {
    // bbg-gradient-to-bl from-blue-10 to-blue-800 gradient
    const { query: { id } } = useRouter()
    const { board, setBoardData } = useContext(BoardContext)
    const [isLoading, setIsLoading] = useState(false)


    const [title, setTitle] = useState(board.title)
    const [titleError, setTitleError] = useState(false)

    const RenameBoardTitle = useCallback(async () => {
        if (title === board.title) {
            setTitleError(false)
            return
        }
        else if (title === '') {
            setTitleError(true)
            return
        } else {
            setTitleError(false)
            await RenameBoard({
                title,
                boardId: board._id
            })
        }
    }, [title])

    useDebounce(RenameBoardTitle, { wait: 1500 });

    useEffect(() => {
        async function get() {
            setIsLoading(true)
            // @ts-ignore
            const response = await GetBoardById(id || '')
            setBoardData(response)
            setTitle(response.title);
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
                className='w-screen h-[calc(100vh-7rem-4rem)] flex flex-col px-6'>
                <div className="flex flex-row items-center justify-start py-7 gap-x-4">
                    <div className="w-fit flex flex-col">
                        <input onChange={e => setTitle(e.target.value)} type="text" value={title} className='bg-transparent text-title-about placeholder:text-white text-white leading-7 text-2xl' />
                        {titleError && <span className="text-notification-warning text-about">Titulo é obrigatorio*</span>}
                    </div>
                    <div className="flex flex-row items-center justify-start gap-x-1">
                        {board?.members?.map(member =>
                            <Avatar name={member.name || ""} size='30px' />
                        )}

                    </div>
                    <button>
                        {board?.members?.map(member =>
                            <ModalNewMember key={member.user._id} OwnerEmail={member.user.email} OwnerName={member.name} owner={member.name} />
                        )}
                    </button>
                </div>
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