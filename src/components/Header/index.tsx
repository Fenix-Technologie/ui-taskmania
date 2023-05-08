import { Logo } from "../../../public/Logo";

export function Header() {
    return (
        <div className="w-screen h-28 flex flex-row items-center justify-center bg-white">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <Logo />
                {/* O logo é em SVG */}
            </div>
            <div className='w-full h-full flex flex-row items-center justify-center gap-x-8'>
                {/* Só pela estrutura mesmo, depois trocamos pelos links */}
                <span className='text-regular'>Home</span>
                <span className='text-regular'>About</span>
                <span className='text-regular'>Sing In</span>
            </div>
        </div>
    )
}