import Image from "next/image";
import { navItems } from "@/data/site";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-axiom-bg/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <a href="/" className="group flex items-center gap-5">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.4rem] border border-axiom-cyan/45 bg-white/5 shadow-[0_0_34px_rgba(84,214,255,0.26)] transition group-hover:border-axiom-cyan/80 group-hover:shadow-[0_0_42px_rgba(84,214,255,0.35)]">
            <Image
              src="/brand/axiom-icon.png"
              alt="Axiom icon"
              fill
              className="object-cover scale-110"
              priority
            />
          </div>

          <div className="hidden sm:block">
            <Image
              src="/brand/axiom-full-logo.png"
              alt="Axiom full logo"
              width={250}
              height={82}
              className="h-12 w-auto object-contain drop-shadow-[0_0_18px_rgba(84,214,255,0.20)] transition group-hover:drop-shadow-[0_0_24px_rgba(84,214,255,0.32)]"
              priority
            />
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-slate-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/#documents"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-axiom-cyan/60 hover:bg-axiom-cyan/10"
        >
          Read Docs
        </a>
      </div>
    </header>
  );
}
