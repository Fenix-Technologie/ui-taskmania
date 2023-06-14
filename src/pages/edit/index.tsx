import { InputIcon } from "@/components/Input/InputIcon";
import { Aside } from "@/components/Menu/Aside";
import * as Separator from "@radix-ui/react-separator";
import { Logo } from "../../../public/Logo";
import { Button } from "@/components/Button";
import { useCallback, useRef } from "react";

export default function EditAcount() {

    return (
        <main className="w-full h-[calc(100vh-7rem-4rem)] flex flex-row items-center justify-center bg-slate-300 gap-x-14">
            <section className="w-[266px] h-[calc(100vh-7rem-4rem-48px-60px)] flex flex-col items-center justify-center">
                <Aside />
            </section>
            <section className='h-[calc(100vh-7rem-4rem-48px-60px)] flex flex-col items-start justify-start gap-y-3'>
                <header>
                    <h1 className="text-title">Your account</h1>
                </header>
                <main className='bg-white w-[668px] h-full flex flex-col items-start justify-start rounded-[10px] gap-y-9'>
                    <section className="w-full h-full flex flex-row items-center justify-center pt-7 gap-x-12">
                        <section className="w-32 h-20 flex flex-col items-center justify-center">
                            <button>Edit</button>
                        </section>
                        <div className="w-full flex flex-col items-center justify-center gap-y-[18px]">
                            <header className=" w-full flex items-start justify-start">
                                <h1 className="text-regular">Profile</h1>
                            </header>
                            <div className="gap-y-[14px] w-full pr-7 flex flex-col items-center justify-center">
                                <InputIcon Label="User" Placeholder="liviafaria@email.com.br" />
                                <InputIcon Label="Name" Placeholder="Livia Faria" />
                                <InputIcon Label="Phone" Placeholder="+55 (11) 91234-5678" />
                            </div>
                        </div>
                    </section>
                    <Separator.Root className="bg-[#E8E8E8] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
                    <section className="w-full flex flex-col items-center justify-center gap-y-10 pb-7  mr-2">
                        <div className="w-full flex flex-col pr-7 items-center justify-center gap-y-[18px] pl-36">
                            <header className="w-full flex items-start justify-start">
                                <h1 className="text-regular">Security</h1>
                            </header>
                            <div className="gap-y-[14px] w-full flex flex-col items-center justify-center">
                                <InputIcon Label="Password" Placeholder="liviafaria@email.com.br" />
                                <InputIcon Label="New Password" Placeholder="Livia Faria" />
                                <InputIcon Label="Confirm" Placeholder="+55 (11) 91234-5678" />
                            </div>

                        </div>
                        <Button text="Save Changes" />
                    </section>
                </main>
            </section >
        </main >
    )
}