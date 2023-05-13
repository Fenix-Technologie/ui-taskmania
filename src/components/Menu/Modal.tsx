import { PaintBrushIcon } from '@/assets/icon';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Router, useRouter } from 'next/router';

interface ModalProps {
    children: JSX.Element
}

const schema = z.object({
    name: z.string({ required_error: 'O board precisa de um nome*' }),
    description: z.string().optional()
})

type FormData = z.infer<typeof schema>

const Modal = ({ children }: ModalProps) => {

    const router = useRouter()

    const [color, setColor] = useState('#FF5E00')

    const { register, handleSubmit, formState: { errors }, reset} = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        reset()
        router.push('/signup')
        
        //console.log('close')
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black opacity-60 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] pb-4 w-full max-w-[460px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#FBFBFB] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title style={{ backgroundColor: color }} className={`text-mauve12 m-0 text-[17px] flex flex-row items-center justify-center font-medium w-full h-[118px] rounded-t-md gap-x-1`}>
                        <label htmlFor="color-input" className="flex items-center justify-center bg-transparent cursor-pointer text-regular text-white leading-4 text-sm text-shadow gap-x-1">
                            <PaintBrushIcon />
                            Update cover color
                        </label>
                        <input id="color-input" value={color} className="opacity-0 absolute -left-9999" type="color" onChange={(e) => setColor(e.target.value)}  />
                    </Dialog.Title>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <fieldset className="mb-[15px] flex flex-col items-center justify-center pt-3 gap-5">
                            <Input
                                Label='Board name:'
                                Type='text'
                                errorMessage={errors.name?.message}
                                {...register("name")}

                            />

                            <Input
                                Label='Description:'
                                Type='text'
                                {...register('description')}
                            />
                        </fieldset>
                        <div className="mt-[25px] flex justify-center">
                            <Button
                                text='Create'
                                type='submit'
                            />
                        </div>
                    </form>
                    <Dialog.Close asChild>
                        <button
                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default Modal;