import AlertIcon from "@/assets/icon"
export function NotificationCard() {
    return (
        <div className={`w-[236px] h-[54px] flex flex-row items-center gap-x-2 justify-center p-3 bg-red-500 rounded-lg`}>
            <section className={'w-[24px] h-[24px] flex flex-row ml-0'}>
                <AlertIcon />
            </section>
            <section>
                <p className="font-medium font-lexend text-xs text-white" >Task #17 is about to expire!</p>
            </section>
        </div>
    )
}