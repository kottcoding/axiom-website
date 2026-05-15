import Image from "next/image";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-axiom-cyan/30 bg-white/5">
            <Image src="/brand/axiom-icon.png" alt="Axiom icon" fill className="object-cover" />
          </div>
          <div>
            <div className="font-bold tracking-[0.25em] text-white">AXIOM</div>
            <p className="mt-1 text-sm text-slate-500">Trust mathematics, not power.</p>
          </div>
        </div>
        <div className="text-sm text-slate-500">Phase 0 concept website. Not financial advice. No token sale.</div>
      </div>
    </footer>
  );
}
