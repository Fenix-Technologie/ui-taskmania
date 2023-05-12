import Link from 'next/link';
import { useRouter } from "next/router";
import { Logo } from "../../../public/Logo";
import { useAuth } from '../../context/useAuth';
import { Avatar } from '../Avatar';
import { DropDownUser } from './DropDownUser';


export function Header() {
    const { asPath } = useRouter()
    const { user } = useAuth()

    return (
        <div className="w-full h-28 flex flex-row items-center justify-center bg-white">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <Logo />
                {/* O logo é em SVG */}
            </div>
            <div className='w-full h-full flex flex-row items-center justify-center gap-x-8'>
                {/* Só pela estrutura mesmo, depois trocamos pelos links */}
                <Link href='/' className='text-regular'>Home</Link>

                {!!user ? (
                    <DropDownUser>
                        <button className='flex flex-row gap-2 items-center  text-regular '>
                            my account
                            <Avatar name={user?.name || ""} size='30px' />
                        </button>
                    </DropDownUser>
                ) : (asPath !== '/signin' ? <Link href='/signin' className='text-regular'>Sign In</Link>
                    : <Link href='/signup' className="text-regular">Sign Up</Link>)
                }
            </div>
        </div>
    )
}