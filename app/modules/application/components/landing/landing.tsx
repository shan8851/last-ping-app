"use client";

import Image from "next/image";
import Link from "next/link";

export const Landing: React.FC = () => {
  return (
    <div className="bg-background text-text font-sans">
      {/* ───── Hero Section ───── */}
      <section className="max-w-6xl mx-auto px-4 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            If you vanish,
            <br className="hidden sm:block" /> they’ll know what to do.
          </h1>
          <p className="text-textSecondary text-lg max-w-xl mx-auto lg:mx-0 mb-6">
            LastPing is a simple fallback for your ETH. Register a beneficiary, deposit ETH, and stay alive by pinging.
            If you don’t, they can claim it.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-text px-6 py-3 rounded-xl hover:bg-primary/80 transition font-medium"
          >
            🔐 Connect Wallet
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/pingavatar.png"
            alt="LastPing Avatar"
            width={480}
            height={480}
            className="w-full max-w-sm mx-auto drop-shadow-xl rounded-xl"
            priority
          />
        </div>
      </section>

      {/* ───── How It Works ───── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-10 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-medium mb-2">🧾 Step 1: Register</h3>
            <p className="text-sm text-textSecondary">
              Set a beneficiary wallet and a ping interval. This defines when your vault becomes claimable.
            </p>
          </div>
          <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-medium mb-2">💰 Step 2: Deposit ETH</h3>
            <p className="text-sm text-textSecondary">
              Add ETH to your vault. You can withdraw it at any time — unless it’s already been claimed.
            </p>
          </div>
          <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-medium mb-2">⏳ Step 3: Ping</h3>
            <p className="text-sm text-textSecondary">
              Stay active by pinging regularly. If you don’t, your ETH can be claimed after the interval.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Ethos Section ───── */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-semibold mb-4 text-text">🧠 Dead simple. 💀 Dead serious.</h2>
        <p className="text-textSecondary text-base leading-relaxed">
          In crypto, life happens. Hardware fails. People disappear.
          <br />
          LastPing is your silent fallback — no tokens, no lockups, no noise.
        </p>
        <p className="mt-4 text-muted text-sm">Deployed on Sepolia · 100% open-source</p>
      </section>
    </div>
  );
};
