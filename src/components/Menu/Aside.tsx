import { PremiumIcon, WorkSpaceIcon } from "@/assets/icon";
import { Menu } from ".";
import * as Separator from "@radix-ui/react-separator";
import { Button } from "../Button";

export function Aside() {
    return (
        <aside className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-bl from-orange-100 to-orange-300 rounded-[10px] px-6 py-5 gap-y-3">
            <header className='w-full flex flex-row items-center justify-start gap-1'>
                <WorkSpaceIcon color="white" />
                <h1 className="text-menuTitle text-xl leading-6">Workspace</h1>
            </header>
            <main className="w-full flex flex-col items-start justify-start">
                <div>
                    <Menu />
                </div>
                <Separator.Root className="bg-white data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
                <section>
                    <header className="w-full flex flex-col items-center justify-start gap-y-4">
                        <div className='w-full flex flex-row items-center justify-start gap-x-2'>
                            <PremiumIcon color="#042C71" />
                            <h1 className="text-menuTitle">Test Premium Now</h1>
                        </div>

                        <p className="text-regular text-sm">
                            Try the premium version, create unlimited boards, gain additional features and exclusive support!
                        </p>

                        <Button
                            text="Try Now"
                            icon={<PremiumIcon color="#ffff" />}
                        />
                    </header>
                </section>
            </main>
        </aside>
    )
}