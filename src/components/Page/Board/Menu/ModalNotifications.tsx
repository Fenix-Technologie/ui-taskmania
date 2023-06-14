import { TactivityBoard } from "@/@types/boards";
import { CloseModalIcon, NotificationsIcon } from "@/assets/icon";
import { NotificationCard } from "@/components/Notifications/card";
import { GetActivites } from "@/services/requests/boards/getActivities";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ModalNotificatiosProps {
    children: ReactNode
}

export function ModalNotifications({ children }: ModalNotificatiosProps) {

    const { query: { id } } = useRouter()

    const messagesEndRef = useRef(null)

    const [notifications, setNotifications] = useState<TactivityBoard[]>([])

    const [click, setClick] = useState(false)

    const scrollToBottom = () => {
        //@ts-ignore
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }


    useEffect(() => {
        async function GetNotifications() {
            const response = await GetActivites({ boardId: String(id) })
            setNotifications(response.data)
        }

        GetNotifications()
    }, [click])


    useEffect(() => {
        scrollToBottom()
    }, [notifications]);
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="bg-transparent w-full" onClick={() => setClick(prev => !prev)}>
                    {children}
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black opacity-60 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[52.4%] left-[23.7%] h-[75%] flex flex-col items-start justify-start pb-4 w-72 translate-x-[-50%] translate-y-[-50%] bg-[#101010] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Close className="w-full flex items-end justify-end p-2">
                        <Dialog.Title className="text-transparent bg-[#101010] w-full h-9 flex items-center justify-end p-2 text-mauve12 m-0 text-[17px] font-medium">
                            <div className="w-full flex flex-row items-center justify-start gap-x-2">
                                <NotificationsIcon fill="#ffffff" />
                                <h1 className="text-white">Notifications</h1>
                            </div>
                            <CloseModalIcon />
                        </Dialog.Title>
                    </Dialog.Close>

                    <main className="w-full mt-10 max-h-[70%] flex flex-row items-center justify-center gap-x-6">
                        <section className="w-full h-full grid items-center justify-center gap-1 overflow-auto scrollbar scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-w-[6px] scrollbar-thumb-gray-50 scrollbar-track-gray-100">
                            {notifications.map(notification =>
                                <NotificationCard
                                    text={notification.text}
                                />
                            )}
                        </section>
                    </main>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}