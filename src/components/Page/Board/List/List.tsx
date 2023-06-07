import { MenuList, NewBoardIcon } from "@/assets/icon";
import { Card } from "../Card/Card";
import { MenuButton } from "@/components/Menu/Button";

export function List() {
    return (
        <main className="w-[270px] h-[540px] flex flex-col items-center px-3 justify-center rounded-[10px] bg-white border-[1px] border-solid border-gray-85">
            <section className="items-center gap-x-40 py-6 flex flex-row">
                <h1 className='text-menuTitle text-blue-900'>List Title</h1>
                <MenuList />
            </section>
            <section className="w-full h-full flex flex-col gap-y-[10px] py-2 items-center overflow-auto">
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