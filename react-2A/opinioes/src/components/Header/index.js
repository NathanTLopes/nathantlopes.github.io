import Link from "next/link";

export default function Header() {
    return(
        <nav>
            <ul>
                <li><Link href="/Sobre">Sobre</Link></li>
                <li><Link href="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
}