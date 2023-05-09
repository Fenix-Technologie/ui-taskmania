import Link from "next/link";
<<<<<<< HEAD
import { LogoWhite } from "../../public/LogoWhite";
=======
import { Input } from "@/components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/Button";


const schema = z.object({
    email: z.string().email('E-mail ou senha incorretos'),
    password: z.string()
})
type FormData = z.infer<typeof schema>;
>>>>>>> b7ff1d0695e8d8ed40925c36240b2bb611307539

export default function Home() {
    const { register, handleSubmit } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }


    return (
        <main className='w-full h-[calc(100vh-7rem)] flex flex-col items-center justify-center bg-slate-300'>
            <section className="w-full h-full flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className='w-[448px] h-[473px] flex flex-col items-center justify-center rounded-[10px] bg-gradient-to-bl from-orange-100 to-orange-300 gap-y-5'>
                    <img src="./task-white 2.png" alt="" width={230} height={27} />
                    <Input
                        {...register('email')}
                        Label="E-mail"
                        Type="email"
                        Placeholder="name@example.com"
                    />

                    <Input
                        {...register('password')}
                        Type="password"
                        Label="Password"
                        Placeholder="••••••"
                    />
                    <Button
                        text="Sing In"
                        type="submit"
                    />
                    <span className='text-white font-lexed' >Don’t have an account?
                        {' '}
                        <Link href="#" className="text-regular text-white hover:underline">
                            Sign up now!
                        </Link>
                    </span>
                </form>
            </section>
        </main>
    );
}
