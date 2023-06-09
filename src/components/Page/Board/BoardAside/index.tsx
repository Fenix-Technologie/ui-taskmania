import Link from "next/link";
import { Input } from "@/components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/Button";
import { Menu } from "../Menu";
export default function BoardAside () {
    return (
        <aside className='w-[220px] h-[calc(100vh-7rem-4rem)] flex flex-col items-center  justify-center p-[24px] bg-gradient-to-bl from-gray-49 to-gray-99 text-sm'>
            {/* <div className='w-[122px] h-[20px] flex font-lexend font-medium'>
                <h1 className="text-title text-sm">What’s new?</h1>
            </div> */}
            {/* <div className='w-[178px] h-[118px] rounded-lg'> 

            </div> */}
            <div>
                <div className='flex flex-col h-fit w-full pr-[52px]'>
                    <Menu />
                </div>
            </div>
        </aside>
    )
}