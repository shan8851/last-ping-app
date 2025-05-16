import { Dialog } from "radix-ui";
import { WalletOptions } from "./walletOptions";

export const ConnectDialog: React.FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-primary text-text px-4 py-2 rounded-xl hover:bg-primary/80 transition font-medium font-sans">
        Connect
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-surface border border-border shadow-outline rounded-2xl p-6"
        >
          <Dialog.Title className="text-lg font-semibold text-text mb-4">Connect Wallet</Dialog.Title>
          <WalletOptions />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
