import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { LogoWhite } from "../../public/LogoWhite";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="w-scren h-screen flex flex-col items-center justify-center bg-slate-300">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className='w-80 h-96 flex flex-col items-center justify-center rounded-xl bg-gradient-to-l from-[#FFBC95] to-[#FF5E00] gap-y-5'>
                    <LogoWhite/>
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
                    <span className='text-white font-lexed'>Don’t have an account? Sign up now!</span>
                </div>
            </div>
        </main>
    );
}
