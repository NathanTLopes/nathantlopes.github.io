//import localFont from "next/font/local";
import "./globals.css";
import Header from  "@/components/Header"
export const metadata = {
  title: "Site de opiniões de jogos",
  description: "Site de Nathan, sobre opinião dele sobre jogos de interesse dele.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
