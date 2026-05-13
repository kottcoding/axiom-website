import { features } from "@/data/site";
export default function Features() {
  return (
    <section id="philosophy" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl"><p className="text-sm uppercase tracking-[0.3em] text-axiom-cyan">Philosophy</p><h2 className="mt-4 text-4xl font-black text-white md:text-5xl">A protocol, not a product.</h2><p className="mt-5 text-lg leading-8 text-slate-400">Axiom is designed as public financial infrastructure: ownerless after launch, verifiable by the community, and useful for both people and autonomous AI systems.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (<div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-axiom-cyan/40 hover:bg-white/[0.05]"><h3 className="text-xl font-bold text-white">{feature.title}</h3><p className="mt-4 leading-7 text-slate-400">{feature.description}</p></div>))}
        </div>
      </div>
    </section>
  );
}
