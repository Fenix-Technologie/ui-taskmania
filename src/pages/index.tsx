import Link from "next/link";
import { LogoWhite } from "../../public/LogoWhite";

export default function Home() {
    return (
        <main className="w-full h-[calc(100vh-7rem)] flex flex-col items-center justify-center bg-slate-300">
            <section className="w-full h-full flex flex-col items-center justify-center">
                <div className='w-80 h-96 flex flex-col items-center justify-center rounded-xl bg-gradient-to-l from-orange-100 to-orange-300 gap-y-5'>
                    <LogoWhite />
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className='w-full flex flex-col items-start justify-start ml-28'>
                            <label htmlFor="" className="text-fontBlueColor font-semibold font-lexend text-base">E-mail</label>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center">
                            <input type="text" className='rounded-lg p-2 border-[#B0B0B0] border-[1px] drop-shadow-md' />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="w-full flex flex-col items-start justify-start ml-28">
                            <label htmlFor="" className="text-fontBlueColor font-semibold font-lexend text-base">Password</label>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center">
                            <input type="text" className='rounded-lg p-2 border-[#B0B0B0] border-[1px] drop-shadow-md' />
                        </div>
                    </div>
                    <button className='rounded-lg py-2 px-10 text-white font-bold font-lexend bg-gradient-to-r from-[#3060B2] via-[#042C71] to-[#3060B2]'>Sing in</button>
                    <span className='text-white font-lexed' >Don’t have an account?
                        {' '}
                        <Link href="#" className="text-regular text-white hover:underline">
                            Sign up now!
                        </Link>
                    </span>
                </div>
            </section>
        </main>
    );
}
