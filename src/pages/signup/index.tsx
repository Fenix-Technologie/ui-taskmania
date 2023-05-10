import Link from "next/link";
import { Input } from "@/components/Input";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/Button";


const schema = z.object({
    name: z.string().min(2, 'Seu nome é inválido!') ,
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'Sua senha deve conter no mínimo 6 caracteres' ),
    confirmpassword: z.string()
}).refine((data)=> data.password === data.confirmpassword, {
    message: 'As senhas não correspondem', 
    path: ['confirmpassword']
})
type FormData = z.infer<typeof schema>;

export default function SignUp() {
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }


    return (
        <main className='w-full h-[calc(100vh-7rem-4rem)] flex flex-col items-center justify-center bg-slate-300'>
            <section className="w-full h-full flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className='w-[448px] h-[473px] flex flex-col items-center justify-center rounded-[10px] bg-gradient-to-bl from-orange-100 to-orange-300'>
                    <img src="./task-white 2.png" alt="" width={230} height={27} />
                    <Input
                        {...register('name')}
                        Label="Name"
                        Type="text"
                        Placeholder="John Doe"
                        errorMessage={errors.name?.message}
                    />
                    <Input
                        {...register('email')}
                        Label="E-mail"
                        Type="email"
                        Placeholder="name@example.com"
                        errorMessage={errors.email?.message}
                    />                    

                    <Input
                        {...register('password')}
                        Type="password"
                        Label="Password"
                        Placeholder="••••••"
                        errorMessage={errors.password?.message}
                    />
                    <Input
                        {...register('confirmpassword')}
                        Type="password"
                        Label="Confirm Password"
                        Placeholder="••••••"
                        errorMessage={errors.confirmpassword?.message}
                    />
                    <Button
                        text="Sing Up"
                        type="submit"                    
                    />
                </form>
            </section>
        </main>
    );
}
