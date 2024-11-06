//import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: 'Site de opiniões de jogos',
  description: 'Site de Nathan, sobre opinião dele sobre jogos de interesse dele.',
  charset: 'UTF-8',
  author: 'Nathan Teixeira Lopes',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};
export default function Home() {
  const autor = 'Nathan Teixeira Lopes'
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Parágrafo da página inicial</p>
      <p>Autor: {autor}</p>
    </div>
  );
}
