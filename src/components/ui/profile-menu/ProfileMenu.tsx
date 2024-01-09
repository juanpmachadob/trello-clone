"use client";
import { signOut, useSession } from "next-auth/react";
import clsx from "clsx";
import { Popover, UserAvatar } from "@/components/ui";

interface Props {
  isDarkContent?: boolean;
}

export const ProfileMenu = ({ isDarkContent }: Props) => {
  const { data: session } = useSession();
  if (!session) return null;

  return (
    <Popover>
      <span
        className={clsx(
          "cursor-pointer rounded-full hover:outline hover:outline-4",
          {
            "hover:outline-white/15": !isDarkContent,
            "hover:outline-black/15": isDarkContent,
          }
        )}
      >
        <Popover.Opener>
          <UserAvatar height={24} width={24} />
        </Popover.Opener>
      </span>

      <Popover.Content title="Session" className="right-0 top-8">
        <Popover.Content.Section title="ACCOUNT">
          <div className="mx-4 flex cursor-auto gap-2">
            <UserAvatar height={40} width={40} />
            <div className="flex flex-col">
              <span className="text-sm text-text">
                {session.user?.name || "User"}
              </span>
              <span className="text-xs text-text-alternative">
                {session.user?.email}
              </span>
            </div>
          </div>
        </Popover.Content.Section>
        <Popover.Content.Section title="TRELLO">
          <Popover.Content.Section.Item onClick={() => signOut()}>
            Log out
          </Popover.Content.Section.Item>
        </Popover.Content.Section>
      </Popover.Content>
    </Popover>
  );
};
