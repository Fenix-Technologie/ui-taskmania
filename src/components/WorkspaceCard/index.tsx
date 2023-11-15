import { TactivityBoard } from "@/@types/boards";
import { NotificationCard } from "../Notifications/card";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { queryClient } from "@/services/queryClient";
import { GetBoardById } from "@/services/requests/boards/getBoardById";

interface WorkspaceCardprops {
  id: string;
  backgroundURL: string;
  boardName: string;
  boardDescription: string;
  notifications: TactivityBoard[];
}

export function WorkspaceCard({
  id,
  backgroundURL,
  boardName,
  boardDescription,
  notifications,
}: WorkspaceCardprops) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    //@ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [notifications]);

  const handlePrefatchBoard = async (id: string) => {
    await queryClient.prefetchQuery(
      ["board", id],
      async () => {
        const response = await GetBoardById(id || "");
        return response;
      },
      {
        staleTime: 1000 * 60 * 3,
      }
    );
  };

  return (
    <article className="w-full h-full grid grid-cols-2 items-center justify-center rounded-lg">
      <Link href={`/board/${id}`} onMouseEnter={() => handlePrefatchBoard(id)}>
        <section className="w-full h-[184px] flex flex-col items-center justify-center rounded-lg border-gray-95 border-[1px]">
          <div
            className="w-full h-full flex flex-col rounded-t-lg"
            style={{
              backgroundColor: backgroundURL,
            }}
          />
          <div className="w-full flex flex-col items-center justify-center">
            <header className="gap-y-1 py-3 flex flex-col items-center justify-center">
              <h1 className="text-title text-base leading-5">{boardName}</h1>
              <h2 className="text-regular text-xs leading-4">
                {boardDescription}
              </h2>
            </header>
          </div>
        </section>
      </Link>

      <section className="w-full max-h-[184px] grid items-center justify-center gap-1 overflow-auto scrollbar scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-w-[6px] scrollbar-thumb-gray-50 scrollbar-track-gray-100 ">
        {notifications.map((notfication) => (
          <NotificationCard
            key={`${notfication.date}`}
            text={notfication.text}
          />
        ))}
        <div ref={messagesEndRef} />
      </section>
    </article>
  );
}
