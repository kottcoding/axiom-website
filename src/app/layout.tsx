import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axiom Protocol — Money Beyond Control",
  description: "A decentralized constitutional monetary network for humans and AI.",
  openGraph: {
    title: "Axiom Protocol",
    description: "Money Beyond Control — a decentralized constitutional monetary network for humans and AI.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="en"><body>{children}</body></html>);
}
