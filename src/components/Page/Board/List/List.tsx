import { MenuList, NewBoardIcon } from "@/assets/icon";
import { Card } from "../Card/Card";
import { MenuButton } from "@/components/Menu/Button";
import { CardModal } from "../Card/Modal";

export function List() {
    return (
        <main className="w-[330px] h-[540px] flex flex-col items-center px-3 justify-center rounded-[10px] bg-white border-[1px] border-solid border-gray-85">
            <section className="w-full items-center p-6 flex flex-row justify-between">
                <h1 className='text-menuTitle text-blue-900'>List Title</h1>
                <MenuList />
            </section>
            <section className="w-full h-full flex flex-col gap-y-[10px] p-2 items-center overflow-auto scrollbar scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-w-[6px] scrollbar-thumb-gray-50 scrollbar-track-gray-100">
                <CardModal />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

                <Card />
                <Card />
                <Card />
                <Card />

                <Card />

                <Card />

            </section>
            <section className="py-4">
                <MenuButton
                    icon={<NewBoardIcon />}
                    buttonFunction={() => console.log('oi')}
                    key={'oi'}
                    text="Add new task or card"
                />
            </section>
        </main>
    )
}