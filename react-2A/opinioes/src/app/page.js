//import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";
export const metadata = {
  title: 'Site de opiniões de jogos',
  description: 'Site de Nathan, sobre opinião dele sobre jogos de interesse dele.',
  charset: 'UTF-8',
  author: 'Nathan Teixeira Lopes',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};
export default function Home() {
  var autor = 'Nathan Teixeira Lopes'
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Parágrafo da página inicial</p>
      <p>Autor: {autor}</p>
      <Image className={styles.imagem} src="/images/mario.jpg" alt="" width={600} height={600}></Image>
    </div>
  );
}
