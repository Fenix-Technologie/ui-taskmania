import Link from 'next/link';
import { useRouter } from "next/router";
import { Logo } from "../../../public/Logo";
import { useLocalStorage } from '@/context/useLocalstorage';

export function Header() {
    const { asPath } = useRouter()
    const { user } = useLocalStorage()

    return (
        <div className="w-full h-28 flex flex-row items-center justify-center bg-white">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <Logo />
                {/* O logo é em SVG */}
            </div>
            <div className='w-full h-full flex flex-row items-center justify-center gap-x-8'>
                {/* Só pela estrutura mesmo, depois trocamos pelos links */}
                <Link href='/' className='text-regular'>Home</Link>
                {asPath !== '/signin' ? <Link href='/signin' className='text-regular'>Sign In</Link>
                    : (!user ? <Link href='/signup' className="text-regular">Sign Up</Link> : <span className="text-regular">my account</span>)}
            </div>
        </div>
    )
}