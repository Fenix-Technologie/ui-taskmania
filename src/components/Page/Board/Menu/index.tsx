import { MenuButton } from "./Button";
import {
  ConfigurationsIcon,
  HeartIcon,
  NewBoardIcon,
  NotificationsIcon,
  ShareIcon,
} from "@/assets/icon";
import { ModalNotifications } from "./ModalNotifications";
import ModalOfBoardCreationBoard from "@/components/Menu/ModalOfCreationBoard";

export function Menu() {
  const currentMenuOptions = [
    {
      text: "Shared boards",
      icon: <ShareIcon />,
      function: () => console.log("oi"),
    },
    {
      text: "Favorites",
      icon: <HeartIcon />,
      function: () => console.log("oi"),
    },
    {
      text: "Configurations",
      icon: <ConfigurationsIcon />,
      function: () => console.log("oi"),
    },
  ];

  return (
    <nav className="w-full flex flex-col items-start justify-start gap-y-2">
      <ModalOfBoardCreationBoard
        children={<MenuButton text="New board" icon={<NewBoardIcon />} />}
      />

      <ModalNotifications>
        <MenuButton
          text="Notifications"
          icon={<NotificationsIcon fill="#042C71" />}
        />
      </ModalNotifications>

      {currentMenuOptions.map((e) => (
        <MenuButton text={e.text} icon={e.icon} buttonFunction={e.function} />
      ))}
    </nav>
  );
}
