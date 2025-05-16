"use client";

import Image from "next/image";
import { Popover } from "radix-ui";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import { ConnectDialog } from "../connectDialog/connectDialog";
import { shortenAddress } from "../utils/shortenAddress";

export const Account: React.FC = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ens } = useEnsName({ address, chainId: 1 });
  const { data: avatar } = useEnsAvatar({ name: ens ?? undefined, chainId: 1 });

  if (!address) return <ConnectDialog />;

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-surface rounded-full hover:bg-surface/40 transition border border-border shadow-sm">
          {avatar ? (
            <Image src={avatar} alt="ENS Avatar" height={100} width={100} className="size-7 rounded-full" />
          ) : (
            <div className="size-7 rounded-full bg-accent/40" />
          )}
          <span className="text-sm font-mono text-textSecondary">{ens ?? shortenAddress(address)}</span>
        </button>
      </Popover.Trigger>
      <Popover.Content
        sideOffset={8}
        className="bg-surface border border-border p-2 rounded-xl w-40 shadow-outline z-50"
      >
        <button
          className="w-full text-center text-sm text-error hover:text-error/80 font-medium transition"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      </Popover.Content>
    </Popover.Root>
  );
};
