import { TactivityBoard } from "@/@types/boards";
import { NotificationCard } from "../Notifications/card";

interface WorkspaceCardprops {
    backgroundURL: string;
    boardName: string;
    boardDescription: string;
    notifications: TactivityBoard[]
}

export function WorkspaceCard({ backgroundURL,boardName, boardDescription }: WorkspaceCardprops) {
    return (
        <article className="w-full h-full grid grid-cols-2 items-center justify-center rounded-lg px-8 py-6">
            <section className='w-[306px] h-[184px] flex flex-col items-center justify-center rounded-lg border-gray-95 border-[1px]'>
                <div className="w-full h-full flex flex-col rounded-t-lg" style={{
                    backgroundColor: backgroundURL
                }}/>
                <div className="w-full flex flex-col items-center justify-center">
                    <header className='gap-y-1 py-3 flex flex-col items-center justify-center'>
                        <h1 className='text-title text-base leading-5'>{boardName}</h1>
                        <h2 className='text-regular text-xs leading-4'>{boardDescription}</h2>
                    </header>
                </div>
            </section>

            <section className="overflow-auto w-full flex flex-col items-center justify-center">
                <NotificationCard />
            </section>
        </article>
    )
}