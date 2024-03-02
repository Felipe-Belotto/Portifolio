import Link from "next/link";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";

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
      </body>
    </html>
  );
}
