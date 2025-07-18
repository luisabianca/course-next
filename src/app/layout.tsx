import type { Metadata } from "next";
import { type_second } from "@/functions/fonts";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede Social para cachorros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={type_second.variable} lang="pt-BR">
      <body>
        <div className="App">
          <Header />
          <main className="AppBody">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
