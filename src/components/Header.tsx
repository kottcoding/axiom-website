import { navItems } from "@/data/site";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-axiom-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-axiom-cyan/40 bg-axiom-cyan/10 text-sm font-black text-axiom-cyan">A</div>
          <div><div className="text-sm font-semibold tracking-[0.32em] text-white">AXIOM</div><div className="text-xs text-slate-500">Protocol</div></div>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (<a key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">{item.label}</a>))}
        </nav>
        <a href="#documents" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-axiom-cyan/60 hover:bg-axiom-cyan/10">Read Docs</a>
      </div>
    </header>
  );
}
