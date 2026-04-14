import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[linear-gradient(180deg,_#f8f5ef_0%,_#efe4d0_100%)] px-4 py-8 md:px-8 md:py-10">
        <section className="mx-auto w-full max-w-5xl rounded-3xl border border-[#1a1a2e]/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(26,26,46,0.08)] backdrop-blur-sm md:p-8">
          {children}
        </section>
      </main>
    </>
  );
}
