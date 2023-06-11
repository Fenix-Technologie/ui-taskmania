import * as Dialog from "@radix-ui/react-dialog";
import { Card } from "./Card";
import { Clock, Pencil } from "@/assets/icon";
import { SideBarCard } from "./SideBar";
import { ICard } from "@/@types/cards";
import { format } from 'date-fns'

interface CardModalProps {
  card: ICard;
}

export function CardModal({ card }: CardModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-transparent w-full">
          <Card title={card.title} deadline={card.deadline} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[730px] flex flex-col items-start justify-start pb-4 w-[702px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className=" bg-blue-400 w-full h-32 flex items-center justify-end p-2 text-mauve12 m-0 text-[17px] font-medium rounded-t-[6px]">
            <Pencil />
          </Dialog.Title>

          <main className="w-full flex flex-row items-center justify-center p-4 gap-x-6">
            <div className="h-full py-8">
              <header className="w-full items-start">
                <div>
                  Membros 
                </div>
                <h1 className="text-title-about text-gray-120 text-xl">
                  {card.title}
                </h1>
              </header>
              <div className="w-full items-start">
                <p className="flex flex-row items-center justify-start space-x-2">
                  <Clock />
                  <h2 className="text-regular text-gray-120">Deadline:</h2>
                  <h2>{format(new Date(card.deadline), "dd'/'MM'/'yyyy '-' kk':'mm")}</h2>
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
                  >{card.description}</textarea>
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
              <SideBarCard />
            </div>
          </main>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
