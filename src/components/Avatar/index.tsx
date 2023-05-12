import * as AvatarRADIX from '@radix-ui/react-avatar';
import { initialsLetter } from '@/utils/initialsLetter';
import { randomColorGenerator } from '@/utils/randomColorGenerator';
import { HtmlHTMLAttributes } from 'react';
import { useAuth } from '@/context/useAuth';

interface avatarProps {
  name: string;
  size: string
}

export const Avatar = ({ name, size }: avatarProps) => {
  const { avatarColor } = useAuth()
  return (
    <AvatarRADIX.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarRADIX.Fallback
        className={`w-5 h-5 leading-1 flex items-center justify-center text-shadow text-[15px] font-medium`}
        delayMs={600}
        style={{
          width: size,
          height: size,
          borderRadius: "50px",
          backgroundColor: avatarColor?.primary,
          color: avatarColor?.secondary
        }}
      >
        {initialsLetter(name)}
      </AvatarRADIX.Fallback>
    </AvatarRADIX.Root>
  )
}