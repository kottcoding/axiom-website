import { Github, MessageCircle, Send, Twitter } from "lucide-react";
const links = [
  { label: "GitHub", href: "https://github.com/", icon: Github, description: "Open-source code, specifications, and development updates." },
  { label: "Discord", href: "#", icon: MessageCircle, description: "Developer discussion, community review, and testnet planning." },
  { label: "Telegram", href: "#", icon: Send, description: "Community announcements and regional groups." },
  { label: "X / Twitter", href: "#", icon: Twitter, description: "Public updates, threads, and educational content." }
];
export default function Community() {
  return (
    <section id="community" className="px-5 py-24">
      <div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div><p className="text-sm uppercase tracking-[0.3em] text-axiom-cyan">Community</p><h2 className="mt-4 text-4xl font-black text-white md:text-5xl">Build the movement before the mainnet.</h2><p className="mt-5 text-lg leading-8 text-slate-400">Axiom should grow through trust, public review, open-source development, testnet participation, and security research — not speculation.</p><div className="mt-8 rounded-3xl border border-axiom-green/20 bg-axiom-green/10 p-6 text-slate-300"><div className="font-bold text-axiom-green">Testnet Waitlist</div><p className="mt-2 text-sm leading-6">Replace this block with your form provider later, such as Google Forms, Tally, Typeform, or a custom waitlist.</p></div></div>
        <div className="grid gap-5 md:grid-cols-2">{links.map((link) => { const Icon = link.icon; return (<a key={link.label} href={link.href} target={link.href === "#" ? undefined : "_blank"} rel={link.href === "#" ? undefined : "noreferrer"} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-axiom-cyan/50 hover:bg-white/[0.05]"><Icon className="text-axiom-cyan" /><h3 className="mt-5 text-xl font-bold text-white">{link.label}</h3><p className="mt-3 leading-7 text-slate-400">{link.description}</p></a>); })}</div>
      </div></div>
    </section>
  );
}
