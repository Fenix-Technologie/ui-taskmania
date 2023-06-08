import { SigninIcon, Tag } from "@/assets/icon";
import { MenuButton } from "../Menu/Button";
import { ClockCard } from "@/assets/icon";

export function SideBarCard() {

    const buttons = [{
        text: 'Members',
        icon: <SigninIcon />,
        buttonFunction: () => console.log('Apertei')
    },
    {
        text: 'Tags',
        icon: <Tag />,
        buttonFunction: () => console.log('Apertei')
    },
    {
        text: 'Date',
        icon: <ClockCard />,
        buttonFunction: () => console.log('Apertei')
    }]

    return (
        <aside className="bg-gray-30 w-[154px] items-center justify-center h-[630px] rounded-[10px]">
            <header className="bg-gray-95 w-full h-[34px] flex items-center justify-center rounded-t-[10px]">
                <h1 className="text-title-about">Edit or Add</h1>
            </header>
            <main>
                <section className="flex flex-col gap-y-2 p-5">
                    {buttons.map(button => {
                        return (
                            <MenuButton
                                text={button.text}
                                icon={button.icon}
                                buttonFunction={button.buttonFunction}
                            />
                        )
                    })}

                </section>
            </main>
        </aside>
    )
}