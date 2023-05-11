import Link from "next/link";
import { Input } from "@/components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/Button";
export default function BoardAside () {
    return (
        <aside className='w-full h-full flex flex-col items-center justify-center px-[20px] py-[24px] bg-gradient-to-bl from-gray-49 to-gray-99'>
            <div className='w-[122px] h-[20px] flex font-lexend font-medium'>
                <h1 className="text-title">What’s new?</h1>
            </div>
            <div className='w-[178px] h-[118px] rounded-lg'>

            </div>
        </aside>
    )
}