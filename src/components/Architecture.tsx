import { architectureLayers } from "@/data/site";
export default function Architecture() {
  return (
    <section id="architecture" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-axiom-green">Architecture</p>
            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">Security-first, speed where it belongs.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">Layer 1 protects the monetary system. Pulse Layer 2 handles fast and low-cost payments. Agent permissions keep AI usage bounded.</p>
          </div>
          <div className="space-y-4">
            {architectureLayers.map((item, index) => (
              <div key={item.name} className="relative rounded-3xl border border-white/10 bg-axiom-card p-6">
                <div className="absolute -left-3 top-6 grid h-8 w-8 place-items-center rounded-full border border-axiom-cyan/40 bg-axiom-bg text-xs font-bold text-axiom-cyan">{index + 1}</div>
                <div className="text-sm text-slate-500">{item.layer}</div>
                <h3 className="mt-1 text-2xl font-bold text-white">{item.name}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
