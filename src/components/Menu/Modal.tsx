import React, { ReactNode, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { MenuButton } from './Button';
import { NewBoardIcon, PaintBrushIcon } from '@/assets/icon';
import { Input } from '../Input';
import { Button } from '../Button';

interface ModalProps {
    children: JSX.Element
}

const Modal = ({ children }: ModalProps) => {

    const [color, setColor] = useState('#FF5E00')

    console.log(color)

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blakca9 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] pb-4 w-full max-w-[460px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#FBFBFB] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title style={{ backgroundColor: color }} className={`text-mauve12 m-0 text-[17px] flex flex-row items-center justify-center font-medium w-full h-[118px] rounded-t-md gap-x-1`}>
                        <PaintBrushIcon />
                        <label htmlFor="color-input" className="flex items-center justify-center bg-transparent cursor-pointer text-regular text-white leading-4 text-sm">
                            Update color
                        </label>
                        <input id="color-input" value={color} className="opacity-0 absolute -left-9999" type="color" onChange={(e) => setColor(e.target.value)} />
                    </Dialog.Title>
                    <fieldset className="mb-[15px] flex flex-col items-center justify-center pt-3 gap-5">
                        <Input
                            Label='Board name:'
                            Type='text'
                        />

                        <Input
                            Label='Description:'
                            Type='text'
                        />
                    </fieldset>
                    <div className="mt-[25px] flex justify-center">
                        <Dialog.Close asChild>
                            <Button
                                text='Create'
                            />
                        </Dialog.Close>
                    </div>
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