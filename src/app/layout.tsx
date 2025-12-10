import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RNV | Desenvolvimento Web Profissional",
  description: "Transformamos ideias em experiências digitais memoráveis. Sites profissionais, landing pages e soluções web completas.",
  keywords: ["desenvolvimento web", "sites profissionais", "landing pages", "web design", "RNV"],
  authors: [{ name: "RNV" }],
  openGraph: {
    title: "RNV | Desenvolvimento Web Profissional",
    description: "Transformamos ideias em experiências digitais memoráveis.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-[#0f0f1a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
