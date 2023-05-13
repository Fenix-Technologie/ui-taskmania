import { Iboard } from "@/@types/boards";
import { PremiumIcon, WorkSpaceIcon } from "@/assets/icon";
import { Button } from "@/components/Button";
import { Menu } from "@/components/Menu";
import { WorkspaceCard } from "@/components/WorkspaceCard";
import { getYourBoards } from "@/services/requests/boards/getYourBoards";
import * as Separator from "@radix-ui/react-separator";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState<Iboard[] | undefined>()

    useEffect(() => {
        async function getData() {
            const response = await getYourBoards()
            setData(response)
        }
        getData()
    }, [])

    return (
        <main className='w-full h-[calc(100vh-7rem-4rem)] flex flex-col items-center justify-center'>
            <div className="w-full h-full flex flex-row items-center justify-center bg-slate-300 gap-x-14">
                <section className="w-[266px] h-[calc(100vh-7rem-4rem-42px-60px)] flex flex-col items-center justify-center">
                    <aside className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-bl from-orange-100 to-orange-300 rounded-[10px] px-6 py-5 gap-y-3">
                        <header className='w-full flex flex-row items-center justify-start gap-1'>
                            <WorkSpaceIcon color="white" />
                            <h1 className="text-menuTitle text-xl leading-6">Workspace</h1>
                        </header>
                        <main className="w-full flex flex-col items-start justify-start">
                            <div>
                                <Menu />
                            </div>
                            <Separator.Root className="bg-white data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
                            <section>
                                <header className="w-full flex flex-col items-center justify-start gap-y-4">
                                    <div className='w-full flex flex-row items-center justify-start gap-x-2'>
                                        <PremiumIcon color="#042C71" />
                                        <h1 className="text-menuTitle">Test Premium Now</h1>
                                    </div>

                                    <p className="text-regular text-sm">
                                        Try the premium version, create unlimited boards, gain additional features and exclusive support!
                                    </p>

                                    <Button
                                        text="Try Now"
                                        icon={<PremiumIcon color="#ffff" />}
                                    />
                                </header>
                            </section>
                        </main>
                    </aside>
                </section>
                <section className='h-[calc(100vh-7rem-4rem-42px-60px)] flex flex-col items-start justify-center gap-y-3'>
                    <header>
                        <h1 className="text-title">Your boards</h1>
                    </header>
                    <main className='bg-white w-[668px] h-[calc(100vh-7rem-4rem-42px-60px-30px)] px-8 py-6 grid grid-cols-1 items-center justify-center rounded-[10px] overflow-auto scrollbar scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-w-[6px] scrollbar-thumb-gray-50 scrollbar-track-gray-100 '>
                        {data?.map((el: Iboard, index) => (
                            <>
                                <WorkspaceCard backgroundURL={el.backgroundURL} boardName={el.title} boardDescription={el.description} notifications={el.activity} id={el._id} />
                                {data.length > index + 1 && <Separator.Root className="bg-gray-40 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />}
                            </>
                        ))
                        }
                    </main>
                </section>
            </div>
        </main >
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['taskmania:token']: token } = parseCookies(ctx)

    if (!token) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}