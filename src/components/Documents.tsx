import { documents } from "@/data/site";
import { FileText } from "lucide-react";
export default function Documents() {
  return (
    <section id="documents" className="px-5 py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-axiom-blue">Documents</p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">Phase 0 specification pack.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">Download the core documents for community review, developer discussion, and early protocol design.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <a key={doc.title} href={doc.href} className="group rounded-3xl border border-white/10 bg-axiom-bg/60 p-6 transition hover:border-axiom-cyan/50 hover:bg-axiom-bg">
              <FileText className="text-axiom-cyan" />
              <h3 className="mt-5 text-xl font-bold text-white">{doc.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{doc.description}</p>
              <div className="mt-5 text-sm font-semibold text-axiom-cyan group-hover:text-white">Download PDF →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
