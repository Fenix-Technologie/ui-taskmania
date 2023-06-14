import { AlertIcon, BellIcon, InformationIcon } from "@/assets/icon"
import { ReactNode, useEffect, useState } from "react"

interface NotificationCardProps {
    text: string;
}

interface customIconAndColor {
    icon: ReactNode;
    color: string
    colorText: string
}

export function NotificationCard({ text }: NotificationCardProps) {
    const [customIconAndColor, setCustomIconAndColor] = useState<customIconAndColor>();

    useEffect(() => {
        switch (text.toLocaleLowerCase().split(':')[0]) {
            case 'notify' || 'Notify':
                setCustomIconAndColor({
                    icon: <BellIcon />,
                    color: '#F7C374',
                    colorText: '#777'
                })
                break;
            case 'warning' || 'Warning':
                setCustomIconAndColor({
                    icon: <AlertIcon />,
                    color: '#F06E67',
                    colorText: '#fff'
                })
                break;
            case 'information' || 'Information':
                setCustomIconAndColor({
                    icon: <InformationIcon />,
                    color: '#74BAFA',
                    colorText: '#fff'
                })
                break;

            default:
                break;
        }
    }, [text])



    return (
        <div className={`w-[236px] h-[54px] flex flex-row items-center gap-x-2 justify-center p-3  rounded-lg`}
            style={{
                backgroundColor: customIconAndColor?.color
            }}>
            <section className={'w-[24px] h-[24px] flex flex-row ml-0'}>
                {customIconAndColor?.icon}
            </section>
            <section>
                <p className="font-medium font-lexend text-xs" style={{
                    color: customIconAndColor?.colorText
                }}>{text.split(':')[1]}</p>
            </section>
        </div>
    )
}