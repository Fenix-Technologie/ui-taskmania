import { ReactNode } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AccountCircleIcon, OptionsIcon, SignOutIcon } from '@/assets/icon';
import { useAuth } from '@/context/useAuth';
import { initialsLetter } from '@/utils/initialsLetter';
import { Avatar } from '../Avatar';

interface DropDownUserProps {
  children: ReactNode
}

export const DropDownUser = ({ children }: DropDownUserProps) => {
  const { handleSignOut } = useAuth()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {
          children
        }
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="w-36 flex flex-col items-center gap-2 bg-gray-995 rounded-md px-3 py-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="w-full h-5 flex flex-row items-center justify-start gap-1">
            <AccountCircleIcon />
            <span className='text-regular text-sm text-white'>
              Your Profile
            </span>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="w-full h-5 flex flex-row items-center justify-start gap-1">
            <OptionsIcon />
            <span className='text-regular text-sm text-white'>
              Options
            </span>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="w-full h-5 flex flex-row items-center justify-start gap-1 ml-[6px]">
            <SignOutIcon />
            <button onClick={handleSignOut} className='text-regular text-sm text-white'>
              Sign Out
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-gray-995" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}