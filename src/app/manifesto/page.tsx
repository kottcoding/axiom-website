import Header from "@/components/Header";
import Footer from "@/components/Footer";

const principles = [
  ["Monetary Integrity", "No authority, founder, institution, or government should be able to expand supply outside the constitutional monetary rules."],
  ["Network Sovereignty", "The network belongs to its participants. The creator may write the first rules, but must not rule the system after launch."],
  ["Permissionless Access", "Any person, application, or AI agent should be able to participate under transparent protocol rules without depending on a central gatekeeper."],
  ["Security Before Speed", "A monetary network must prefer correctness, verifiability, decentralization, and safety over short-term performance claims."],
  ["Human + AI Readiness", "Future economies will include autonomous agents. Axiom must allow AI to transact safely through bounded permissions, session keys, limits, and auditability."],
  ["Immutable Launch", "After mainnet launch, no individual or organization should hold admin keys, freeze powers, emergency mint rights, or unilateral upgrade authority."]
];

const problems = [
  ["Inflation", "Fiat money can be expanded by policy, politics, debt cycles, or crisis response. Over time this can weaken purchasing power and quietly transfer cost to ordinary holders."],
  ["Centralization", "Modern financial infrastructure depends on concentrated institutions: central banks, payment processors, settlement networks, custodians, and platform monopolies."],
  ["Bank Dependency", "Many people do not fully control access to their money. Accounts can be restricted, delayed, censored, or made dependent on intermediaries and jurisdictions."],
  ["The AI Economy", "Autonomous agents will need to pay for data, APIs, compute, storage, content, and services in tiny amounts at high frequency. Legacy payment rails were not built for this."]
];

export default function ManifestoPage() {
  return (
    <main>
      <Header />
      <section className="px-5 pt-36 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 inline-flex rounded-full border border-axiom-cyan/30 bg-axiom-cyan/10 px-4 py-2 text-sm text-axiom-cyan">Axiom Manifesto</div>
          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">Trust mathematics,<span className="block bg-gradient-to-r from-axiom-cyan via-axiom-blue to-axiom-green bg-clip-text text-transparent">not power.</span></h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">Money should not belong to governments, corporations, banks, or founders. Money should belong to the network itself — transparent, verifiable, neutral, and resistant to unilateral control.</p>
        </div>
      </section>
      <section className="px-5 py-16"><div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-10"><p className="text-sm uppercase tracking-[0.3em] text-axiom-cyan">Why Axiom Exists</p><h2 className="mt-4 text-3xl font-black text-white md:text-5xl">The financial system is changing. The foundation must change too.</h2><p className="mt-6 text-lg leading-8 text-slate-400">Axiom is not a speculative slogan. It is a response to structural problems in modern money and to a future where both humans and AI agents require open, programmable, low-friction, and censorship-resistant financial rails.</p></div></section>
      <section className="px-5 py-16"><div className="mx-auto max-w-6xl"><p className="text-sm uppercase tracking-[0.3em] text-axiom-green">The Problem</p><div className="mt-8 grid gap-5 md:grid-cols-2">{problems.map(([title, body]) => (<div key={title} className="rounded-3xl border border-white/10 bg-axiom-card p-6"><h3 className="text-2xl font-bold text-white">{title}</h3><p className="mt-4 leading-7 text-slate-400">{body}</p></div>))}</div></div></section>
      <section className="px-5 py-16"><div className="mx-auto max-w-5xl"><p className="text-sm uppercase tracking-[0.3em] text-axiom-blue">Why Decentralized Money Matters</p><h2 className="mt-4 text-4xl font-black text-white md:text-5xl">Decentralization is not about hype. It is about removing dependency.</h2><div className="mt-8 space-y-6 text-lg leading-9 text-slate-400"><p>Decentralized money matters because rules should be verifiable by everyone, not granted by institutions. It matters because access to value should not depend on permission from a small number of gatekeepers.</p><p>A constitutional monetary network should be scarce, neutral, auditable, permissionless, and resistant to capture. Its rules must be harder to change than the incentives of any one group.</p><p>Axiom is designed as a network where the monetary layer is protected by immutable rules, while the operational layer can improve through transparent public review and community adoption.</p></div></div></section>
      <section className="px-5 py-16"><div className="mx-auto max-w-6xl"><p className="text-sm uppercase tracking-[0.3em] text-axiom-cyan">Constitutional Principles</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{principles.map(([title, body]) => (<div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-axiom-cyan/40"><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-4 leading-7 text-slate-400">{body}</p></div>))}</div></div></section>
      <section className="px-5 py-20"><div className="mx-auto max-w-5xl rounded-[2rem] border border-axiom-cyan/20 bg-axiom-cyan/10 p-8 md:p-12"><p className="text-sm uppercase tracking-[0.3em] text-axiom-cyan">Call to Builders</p><h2 className="mt-4 text-4xl font-black text-white md:text-5xl">Axiom must be reviewed, challenged, tested, and strengthened in public.</h2><p className="mt-6 text-lg leading-9 text-slate-300">Developers, cryptographers, economists, security researchers, validators, designers, educators, and users are invited to examine the assumptions, improve the design, and help build a monetary network that no single power can own.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href="/#documents" className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black transition hover:bg-slate-200">Read the Documents</a><a href="/#community" className="rounded-2xl border border-white/15 px-6 py-4 text-center font-semibold text-white transition hover:border-axiom-cyan/50 hover:bg-white/5">Join the Community</a></div></div></section>
      <section className="px-5 pb-24"><div className="mx-auto max-w-5xl text-center"><p className="text-3xl font-black text-white md:text-5xl">The future of money must belong to no one.</p><p className="mt-5 text-xl text-slate-400">It must belong to the network.</p></div></section>
      <Footer />
    </main>
  );
}
