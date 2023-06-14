import { ICard } from "@/@types/cards";
import { Clock, Pencil, SaveIcon } from "@/assets/icon";
import * as Dialog from "@radix-ui/react-dialog";
import { format } from 'date-fns';
import { useRouter } from "next/router";
import { InputHTMLAttributes, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { SideBarCard } from "./SideBar";
import { useDebounce } from "ahooks";
import { ChangeCardProperties } from "@/services/requests/cards/ChangeCardProperties";
import { BoardContext } from "@/context/BoardContext";

interface CardModalProps {
  card: ICard;
  children: ReactNode
  listId: string
}

export function CardModal({ card, children, listId }: CardModalProps) {
  const { query: { id } } = useRouter()

  const { board, setBoardData } = useContext(BoardContext)

  const [cardTitle, setCardTitle] = useState(card.title)
  const [cardDescription, setCardDescription] = useState(card.description)
  const [deadline, setDeadline] = useState(card.deadline)

  const [cardPriority, setCardPriority] = useState({
    background: card.background,
    priority: card.priority
  })

  const ChangedCard = useCallback(async () => {
    if (cardTitle === '') {
      //setTitleError(true)
      return
    } else {
      //setTitleError(false)
      await ChangeCardProperties({
        title: cardTitle,
        boardId: String(id),
        cardId: card._id,
        description: cardDescription,
        deadline: new Date(deadline),
        priority: cardPriority.priority,
        background: cardPriority.background
      })

      const boardChanged = {
        ...board,
        lists: board.lists.map(list => {
          if (list._id === listId) {
            return {
              ...list,
              cards: list?.cards?.map(element => {
                if (element._id === card._id) {
                  return {
                    ...element,
                    title: cardTitle,
                    description: cardDescription,
                    deadline,
                    priority: cardPriority.priority,
                    background: cardPriority.background
                  }
                }
                return element
              })
            }
          }
          return list
        })
      }

      setBoardData(boardChanged)

    }
  }, [
    cardTitle,
    cardDescription,
    deadline,
    cardPriority
  ])

  const handleCardPriority = useCallback((color: string, priority: string) => {
    setCardPriority({
      background: color,
      priority
    })

    console.log(cardPriority.background)
  }, [])


  useDebounce(ChangedCard, { wait: 500 })

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-transparent w-full">
          {children}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[730px] flex flex-col items-start justify-start pb-4 w-[702px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title style={{
            backgroundColor: cardPriority.background
          }} className="w-full h-32 flex items-center justify-end p-2 text-mauve12 m-0 text-[17px] font-medium rounded-t-[6px]">
            <Pencil />
            <button onClick={ChangedCard}>
              <SaveIcon />
            </button>
          </Dialog.Title>

          <main className="w-full flex flex-row items-center justify-center p-4 gap-x-6">
            <div className="h-full py-8">
              <header className="w-full items-start">
                <div>
                  Membros
                </div>
                <input
                  className="text-title-about text-gray-120 text-xl w-full"
                  value={cardTitle}
                  onChange={(e) => setCardTitle(e.target.value)}
                />
              </header>
              <div className="w-full items-start">
                <p className="flex flex-row items-center justify-start space-x-2">
                  <Clock />
                  <h2 className="text-regular text-gray-120">Deadline:</h2>
                  <input type="text" onChange={(event) => setDeadline(event.target.value)} value={deadline} />
                </p>
              </div>
              <div className="py-5">
                <div className="border-gray-105 border-[1px] w-full border-dashed border-spacing-14" />
              </div>
              <section className="w-full items-start flex flex-col gap-y-5 ">
                <Dialog.Description className="text-title-about text-gray-120 text-xl">
                  Description
                </Dialog.Description>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <textarea
                    name=""
                    id=""
                    cols={50}
                    rows={5}
                    placeholder="Write Here!"
                    className="resize-none"
                    onChange={(e) => setCardDescription(e.target.value)}

                  >
                    {cardDescription}
                  </textarea>
                </fieldset>
              </section>
              <div className="py-5">
                <div className="border-gray-105 border-[1px] w-full border-dashed border-spacing-14" />
              </div>

              <Dialog.Description className="text-title-about text-gray-120 text-xl">
                Activity
              </Dialog.Description>
              <div className="mt-[25px] flex flex-col justify-end">
                <div>
                  <input
                    type="text"
                    className="bg-gray-20 w-full  h-9 rounded-md p-4"
                    placeholder="New comment or activity"
                  />
                </div>
              </div>
            </div>
            <div>
              <SideBarCard setPriority={handleCardPriority} />
            </div>
          </main>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
