import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-axiom-cyan/30 bg-axiom-cyan/10 px-4 py-2 text-sm text-axiom-cyan">Phase 0 · Specification-first monetary protocol</div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">Money Beyond <span className="bg-gradient-to-r from-axiom-cyan via-axiom-blue to-axiom-green bg-clip-text text-transparent">Control</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">Axiom is a decentralized constitutional monetary network designed for humans, applications, and AI agents — built around fixed supply, low-energy security, micropayments, and rules no founder can override.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#documents" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-slate-200">Read Whitepaper <ArrowRight size={18} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:border-axiom-cyan/60 hover:bg-white/5"><Github size={18} /> GitHub</a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
            <Stat label="Max Supply" value="100M AXM" />
            <Stat label="Smallest Unit" value="100M AXI" />
            <Stat label="Founder Control" value="None" />
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-glow">
          <div className="rounded-[1.5rem] border border-axiom-cyan/20 bg-axiom-card p-6">
            <div className="mb-6 text-sm uppercase tracking-[0.3em] text-slate-500">Constitutional Stack</div>
            <div className="space-y-4">
              {[ ["Axiom Core", "Immutable settlement and monetary rules"], ["Pulse Network", "Micropayments for humans and AI"], ["Agent Layer", "Permissioned AI wallets and limits"], ["Guardian Network", "Layered validation and participation"] ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><div className="font-semibold text-white">{title}</div><div className="mt-1 text-sm text-slate-400">{body}</div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Stat({ label, value }: { label: string; value: string }) {
  return (<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><div className="text-xs text-slate-500">{label}</div><div className="mt-2 text-sm font-bold text-white md:text-base">{value}</div></div>);
}
