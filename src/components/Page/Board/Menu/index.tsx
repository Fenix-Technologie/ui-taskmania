import { MenuButton } from "./Button";
import { ConfigurationsIcon, HeartIcon, NewBoardIcon, NotificationsIcon, ShareIcon } from "@/assets/icon";
import Modal from "./Modal";

export function Menu() {
    const currentMenuOptions = [
        {
            text: 'Shared boards',
            icon: <ShareIcon />,
            function: () => console.log('oi')
        },
        {
            text: 'Favorites',
            icon: <HeartIcon />,
            function: () => console.log('oi')
        },         {
            text: 'Notifications',
            icon: <NotificationsIcon />,
            function: () => console.log('oi')
        },         {
            text: 'Configurations',
            icon: <ConfigurationsIcon />,
            function: () => console.log('oi')
        }]
        
    return (
        <nav className="w-full flex flex-col items-start justify-start gap-y-2">
            <Modal
                children={<MenuButton
                    text="New board"
                    icon={<NewBoardIcon />}
                />}
            />
            {currentMenuOptions.map(e =>
                <MenuButton
                    text={e.text}
                    icon={e.icon}
                    buttonFunction={e.function}
                />
            )}
        </nav>
    )
}