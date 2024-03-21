import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componentes/navbar/Navbar";
import Footer from "@/componentes/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'SIGAS',
    template: '%s | SIGAS'
  },
  description: "Sistema Inteligente para Gerenciamento de Ativos Sustentáveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar />
        <main className='main'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
