import BoardAside from "@/components/Page/Board/BoardAside";
import Main from "@/components/Page/Main";
export default function Board() {
    return (
        <main className="w-full h-[calc(100vh-7rem-4rem)] flex flex-row">
            <BoardAside />
            <Main />
        </main>
    )
}  