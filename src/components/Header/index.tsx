import { Logo } from "../../../public/Logo";
import Link from 'next/link'

export function Header() {
    return (
        <div className="w-full h-28 flex flex-row items-center justify-center bg-white">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <Logo />
                {/* O logo é em SVG */}
            </div>
            <div className='w-full h-full flex flex-row items-center justify-center gap-x-8'>
                {/* Só pela estrutura mesmo, depois trocamos pelos links */}
                <Link href='/' className='text-regular'>Home</Link>
                <span className='text-regular'>Sign In</span>
            </div>
        </div>
    )
}