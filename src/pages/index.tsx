import { PremiumIcon, WorkSpaceIcon } from "@/assets/icon";
import { Menu } from "@/components/Menu";
import { WorkspaceCard } from "@/components/WorkspaceCard";
import * as Separator from "@radix-ui/react-separator";
import { Button } from "@/components/Button";
import { Aside } from "@/components/Menu/Aside";

export default function Home() {

    return (
        <main className='w-full h-[calc(100vh-7rem-4rem)] flex flex-col items-center justify-center'>
            <div className="w-full h-full flex flex-row items-center justify-center bg-slate-300 gap-x-14">
                <section className="w-[266px] h-[calc(100vh-7rem-4rem-42px-60px)] flex flex-col items-center justify-center">
                    <Aside />
                </section>
                <section className='h-[calc(100vh-7rem-4rem-42px-60px)] flex flex-col items-start justify-center gap-y-3'>
                    <header>
                        <h1 className="text-title">Your boards</h1>
                    </header>
                    <main className='bg-white w-[668px] h-full flex flex-col items-center justify-center rounded-[10px] overflow-auto gap-y-9'>
                        <WorkspaceCard />
                    </main>
                </section>
            </div>
        </main >
    )
}