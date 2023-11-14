import Link from 'next/link';
import { useRouter } from "next/router";
import { Logo } from "../../../public/Logo";
import { useAuth } from '../../context/useAuth';
import { Avatar } from '../Avatar';
import { DropDownUser } from './DropDownUser';
import { SigninIcon } from '@/assets/icon';


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
                {user && <Link href='/' className='text-regular'>Home</Link>}
                <Link href='/about' className='text-regular'>About</Link>

                {!!user ? (
                    <DropDownUser>
                        <button className='flex flex-row gap-2 items-center  text-regular '>
                            My account
                            <Avatar name={user?.name || ""} />
                        </button>
                    </DropDownUser>
                ) : (asPath !== '/signin' ?
                    <Link href='/signin' className='flex flex-row gap-3 items-center'>
                        <span className='text-regular'>
                            Sign In
                        </span>
                        <SigninIcon />
                    </Link>
                    :
                    <Link href='/signup' className="text-regular">
                        Sign Up
                    </Link>)
                }
            </div>
        </div>
    )
}