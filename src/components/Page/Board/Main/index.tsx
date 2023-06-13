import { Avatar } from "@/components/Avatar";
import { BoardContext } from "@/context/BoardContext";
import { RenameBoard } from "@/services/requests/boards/RenameBoard";
import { GetBoardById } from "@/services/requests/boards/getBoardById";
import { useDebounce } from 'ahooks';
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { List } from "../List/List";
import { ModalNewMember } from "../Member/Modal";
import { NewList } from "../New/NewList";
import { DragDropContext } from "react-beautiful-dnd";

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

    const onDragEnd = (result: any) => {
        const { destination, source, draggableId } = result
        console.log(result)

        if (!destination) {
            return
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        const columm = board.lists[source.draggableId] //setBoard arr = []
        console.log("COl:", columm)
        const newTaskId = Array.from(columm.cards)

        newTaskId.splice(source.index, 1)
        newTaskId.splice(destination.index, 0, draggableId)

        console.log("New task: ", newTaskId)

    }


    return (
        <main
            style={{
                background: `linear-gradient(225deg, #fff 0%, ${board ? board.backgroundURL : '#60a5fa'} 100%)`
            }}
            className='w-screen h-[calc(100vh-7rem-4rem)] flex flex-col overflow-x-auto scrollbar scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-w-[6px] scrollbar-thumb-gray-50 scrollbar-track-gray-100'>
            <section
                className='w-screen h-[calc(100vh-7rem-4rem)] flex flex-col px-6'>
                <div className="flex flex-row items-center justify-start py-7 gap-x-4">
                    <div className="min-w-[530px] flex flex-col">
                        <input
                            className='w-full bg-transparent text-title-about placeholder:text-white text-white leading-7 text-2xl'
                            type="text"
                            title={title}
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                        />
                        {titleError && <span className="text-notification-warning text-about">Titulo é obrigatorio*</span>}
                    </div>
                    <div className="w-full flex flex-row items-center justify-start gap-x-4">
                        <div className="flex flex-row items-center justify-start gap-x-1">
                            {board?.members?.map(member =>
                                <Avatar name={member.name || ""} size='30px' />
                            )}
                        </div>
                        <button className="pt-1">
                            <ModalNewMember />
                        </button>
                    </div>
                </div>
                <div className='flex flex-row gap-x-6'>
                    <DragDropContext onDragEnd={onDragEnd}>

                        {!isLoading && (
                            <>
                                {board.lists?.map((list) => <List list={list} key={list._id} />)}
                            </>
                        )}
                    </DragDropContext>
                    <NewList />
                </div>
            </section>
        </main>
    )
}