import Link from "next/link";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";

export const metadata = {
  title: "Home - Portifolio",
  description: "Página inicial do portifólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
