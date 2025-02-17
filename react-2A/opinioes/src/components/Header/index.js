'use client';
import Link from "next/link";
import { useEffect, useState} from "react"
import Header from "@/components/Header"
export default function Header (){
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header>
            <button onClick={()=>setShowMenu(!showMenu)}>Clique</button>
            {
                showMenu &&
                <nav>
                    <ul>
                        <li><Link href="/Sobre">Sobre</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                        <li><Link href="/listas">Listas</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
}