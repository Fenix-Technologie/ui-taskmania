import Link from "next/link";
import { Input } from "@/components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/Button";
export default function Main() {
    return (
        <div className='w-full h-[calc(100vh-7rem-4rem)] flex flex-col bbg-gradient-to-bl from-blue-10 to-blue-800 '>
            <div className='py-[34px] pl-[36px] flex flex-col'>
                <h1 className='text-regular '></h1>
            </div>
        </div>
    )
}