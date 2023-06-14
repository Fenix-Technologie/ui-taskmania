import { IList } from "@/@types/list";
import { MenuList, NewBoardIcon } from "@/assets/icon";
import { MenuButton } from "@/components/Menu/Button";
import { BoardContext } from "@/context/BoardContext";
import { useDebounce } from "ahooks";
import { useRouter } from "next/router";
import { useCallback, useContext, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Card } from "../Card/Card";
import { CardModal } from "../Card/Modal";

interface ListProps {
  list: IList;
}

export function List({ list }: ListProps) {
  const [inputTitle, setInputTitle] = useState(list.title);
  const { handleListTitle, handleCreateNewTask, handleRemoveList } = useContext(BoardContext);

  const {
    query: { id },
  } = useRouter();

  const listTitleChanged = useCallback(() => {
    if (inputTitle !== list.title && inputTitle !== "") {
      handleListTitle(inputTitle, list._id, String(id));
    }
  }, [inputTitle]);

  useDebounce(listTitleChanged, { wait: 1500 });

  return (


    <main className="min-w-[330px] h-[540px] flex flex-col items-center px-3 justify-center rounded-[10px] bg-white border-[1px] border-solid border-gray-85">
      <section className="w-full items-center p-6 flex flex-row justify-between">
        <input
          className="text-menuTitle text-blue-900"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button className="text-base text-[#042C71]"
          onClick={() => handleRemoveList(String(id), list._id)}
        >
          X
        </button>
        {/* <MenuList /> */}
      </section>
      <Droppable droppableId={list._id}>
        {(provided) => (
          <section className="w-full h-full flex flex-col gap-y-[10px] p-2 items-center overflow-auto scrollbar scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-w-[6px] scrollbar-thumb-gray-50 scrollbar-track-gray-100"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {
              list?.cards &&
              list.cards.map((card, index) => (
                <CardModal listId={list._id} key={card._id} card={card}>
                  <Draggable key={card._id} draggableId={card._id} index={index}>
                    {(provided1) => (
                      <div
                        ref={provided1.innerRef}
                        {...provided1.draggableProps}
                        {...provided1.dragHandleProps}
                        className="w-full"
                      >
                        <Card color={card.background} title={card.title} deadline={card.deadline} key={card._id} />
                      </div>
                    )}
                  </Draggable>
                </CardModal>
              ))}

            {provided.placeholder}
          </section>
        )}
      </Droppable>

      <section className="py-4">
        <MenuButton
          icon={<NewBoardIcon />}
          buttonFunction={() =>
            handleCreateNewTask("Digite o título da task", list._id, String(id))
          }
          text="Add new task"
        />
      </section>
    </main>
  );
}
