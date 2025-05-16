"use client";

import { useConnect } from "wagmi";

export const WalletOptions: React.FC = () => {
  const { connectors, connect } = useConnect();

  return (
    <div className="flex flex-col gap-y-3">
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          className="bg-primary text-text px-4 py-2 rounded-xl shadow-sm hover:bg-primary/80 transition font-medium tracking-wide"
        >
          {connector.name}
        </button>
      ))}
    </div>
  );
};
