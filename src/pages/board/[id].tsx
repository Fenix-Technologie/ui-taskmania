import BoardAside from "@/components/Page/Board/BoardAside";
import Main from "@/components/Page/Board/Main";
import { BoardProvider } from "@/context/BoardContext";
export default function Board() {
    return (
        <main className="w-full h-[calc(100vh-7rem-4rem)] flex flex-row">
            <BoardAside />
            <BoardProvider>
                <Main />
            </BoardProvider>
        </main>
    )
}  