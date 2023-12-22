import { useSession } from "next-auth/react";
import Image from "next/image";

interface Props {
  height: number;
  width: number;
}

export const UserAvatar = ({ height = 32, width = 32 }: Props) => {
  const { data: session } = useSession();
  if (!session) return null;

  return (
    <span
      aria-label="User avatar"
      title={session?.user?.name || "User avatar"}
      className="flex select-none overflow-hidden rounded-full"
      style={{ height, width }}
    >
      {session?.user?.image && (
        <Image
          alt="Avatar"
          src={session?.user?.image}
          className="rounded-full"
          height={height}
          width={width}
        />
      )}
      {!session?.user?.image && (
        <span className="flex size-full items-center justify-center bg-primary text-xs uppercase text-white">
          {session?.user?.name?.slice(0, 2)}
        </span>
      )}
    </span>
  );
};
