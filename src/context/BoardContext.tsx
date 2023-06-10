import { Iboard } from "@/@types/boards";
import { Toast } from "@/components/Notifications/Toast";
import { createList } from "@/services/requests/Lists/create";
import { editTitleList } from "@/services/requests/Lists/editTitle";
import { ReactNode, createContext, useCallback, useContext, useState } from "react";


interface BoardProviderProps {
  children: ReactNode;
}
interface IContext {
  board: Iboard;
  setBoardData: (data: Iboard) => void
  handleCreateList: () => void
  handleListTitle: (newTitle: string, id: string, boardId: string) => void
}

export const BoardContext = createContext({} as IContext)

export function BoardProvider({ children }: BoardProviderProps) {
  const [board, setBoard] = useState<Iboard>({} as Iboard)

  const setBoardData = useCallback((data: Iboard) => {
    setBoard(data)
  }, [])

  const handleCreateList =
    async () => {

      const addNewList = {
        title: "Enter a List name",
        boardId: board._id
      }
      const response = await createList(addNewList)

      setBoard((prev) => {
        return {
          ...prev,
          lists: [...prev.lists, response]
        }
      })
    }

    const handleListTitle = useCallback( async (newTitle: string, id: string, boardId: string) => {
      const response = await editTitleList({newTitle, listId: id, boardId})

      if (response.status === 200) {
        setBoard((prev) => {
          return {
          ...prev,
            lists: prev.lists.map((list) => {
              if (list._id === id) {
                return {
                ...list,
                  title: newTitle
                }
              } else {
                return list
              }
            })
          }
        })
      } else {
        <Toast error={true} message="Operação inválida" />
      }
    }, [])


  return (
    <BoardContext.Provider
      value={{
        board,
        setBoardData,
        handleCreateList,
        handleListTitle
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}
