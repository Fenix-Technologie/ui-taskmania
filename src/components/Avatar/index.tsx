import { initialsLetter } from "@/utils/initialsLetter";
import { Avatar as RadixAvatar } from "@radix-ui/themes";

interface avatarProps {
  name: string;
}

export const Avatar = ({ name }: avatarProps) => {
  return <RadixAvatar variant="solid" radius="full" size="2" src="" fallback={initialsLetter(name)} color="orange" highContrast  />;
};
