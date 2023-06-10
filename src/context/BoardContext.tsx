import { Iboard } from "@/@types/boards";
import { createList } from "@/services/requests/Lists/create";
import { ReactNode, createContext, useCallback, useContext, useState } from "react";


interface BoardProviderProps {
  children: ReactNode;
}
interface IContext {
  board: Iboard;
  setBoardData: (data: Iboard) => void
  handleCreateList: () => void
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




  return (
    <BoardContext.Provider
      value={{
        board,
        setBoardData,
        handleCreateList
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}
