import { Iboard } from "@/@types/boards";
import { ICard } from "@/@types/cards";
import { Toast } from "@/components/Notifications/Toast";
import { createList } from "@/services/requests/lists/create";
import { editTitleList } from "@/services/requests/lists/editTitle";
import { createTask } from "@/services/requests/cards/createTask";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { addMember } from "@/services/requests/boards/AddMember";

interface BoardProviderProps {
  children: ReactNode;
}
interface IContext {
  board: Iboard;
  setBoardData: (data: Iboard) => void;
  handleCreateList: () => void;
  handleListTitle: (newTitle: string, id: string, boardId: string) => void;
  handleCreateNewTask: (title: string, listId: string, boardId: string) => void;
  handleSendInvitation: (email: string, id: string) => void;
}

export const BoardContext = createContext({} as IContext);

export function BoardProvider({ children }: BoardProviderProps) {
  const [board, setBoard] = useState<Iboard>({} as Iboard);

  const setBoardData = useCallback((data: Iboard) => {
    setBoard(data);
  }, []);

  const handleSendInvitation = async (email: string, id: string) => {
    console.log(email, id);
    
    try {
      if (!email) return
      const newMembers = await addMember({ boardId: String(id), email })
      setBoard(prev => ({
        ...prev,
        members: [...prev.members, newMembers]
      }))

    } catch (error) {
      alert('Algo deu errado')
    }
  }

  const handleCreateList = async () => {
    const addNewList = {
      title: "Enter a List name",
      boardId: board._id,
    };
    const response = await createList(addNewList);

    setBoard((prev) => {
      return {
        ...prev,
        lists: [...prev.lists, response],
      };
    });
  };

  const handleListTitle = useCallback(
    async (newTitle: string, id: string, boardId: string) => {
      const response = await editTitleList({ newTitle, listId: id, boardId });

      if (response.status === 200) {
        setBoard((prev) => {
          return {
            ...prev,
            lists: prev.lists.map((list) => {
              if (list._id === id) {
                return {
                  ...list,
                  title: newTitle,
                };
              } else {
                return list;
              }
            }),
          };
        });
      } else {
        <Toast error={true} message="Operação inválida" />;
      }
    },
    []
  );

  const handleCreateNewTask = async (
    title: string,
    listId: string,
    boardId: string
  ) => {
    const newTask = {
      title,
      listId,
      boardId,
    };

    const response = await createTask(newTask);

    if (response.status === 200) {
      setBoard((prev) => ({
        ...prev,
        lists: prev.lists.map((list) => {
          if (list._id === listId) {
            if (list?.cards && list.cards.length > 0) {
              return {
                ...list,
                cards: [...list.cards, response.data.card],
              };
            }
            return {
              ...list,
              cards: [response.data.card],
            };
          } else {
            return list;
          }
        }),
      }));
    } else {
      <Toast error={true} message="Operação inválida" />;
    }
  };

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoardData,
        handleCreateList,
        handleListTitle,
        handleCreateNewTask,
        handleSendInvitation
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
