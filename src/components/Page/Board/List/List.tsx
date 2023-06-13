import { MenuList, NewBoardIcon } from "@/assets/icon";
import { Card } from "../Card/Card";
import { MenuButton } from "@/components/Menu/Button";
import { CardModal } from "../Card/Modal";
import { useCallback, useContext, useEffect, useState } from "react";
import { IList } from "@/@types/list";
import { BoardContext } from "@/context/BoardContext";
import { useDebounce } from "ahooks";
import { useRouter } from "next/router";
import { DragDropContext, Droppable, Draggable, DroppableProps } from "react-beautiful-dnd";

interface ListProps {
  list: IList;
}

export function List({ list }: ListProps) {
  const [inputTitle, setInputTitle] = useState(list.title);
  const { handleListTitle, handleCreateNewTask } = useContext(BoardContext);

  const {
    query: { id },
  } = useRouter();

  const listTitleChanged = useCallback(() => {
    if (inputTitle !== list.title && inputTitle !== "") {
      handleListTitle(inputTitle, list._id, String(id));
    }
  }, [inputTitle]);


  const cards: any = []

  useDebounce(listTitleChanged, { wait: 1500 });

  return (


    <main className="min-w-[330px] h-[540px] flex flex-col items-center px-3 justify-center rounded-[10px] bg-white border-[1px] border-solid border-gray-85">
      <section className="w-full items-center p-6 flex flex-row justify-between">
        <input
          className="text-menuTitle text-blue-900"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <MenuList />
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
                <CardModal key={card._id} card={card}>
                  <Draggable key={card._id} draggableId={card._id} index={index}>
                    {(provided1) => (
                      <div
                        ref={provided1.innerRef}
                        {...provided1.draggableProps}
                        {...provided1.dragHandleProps}
                        className="w-full"
                      >
                        <Card title={card.title} deadline={card.deadline} key={card._id} />
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
