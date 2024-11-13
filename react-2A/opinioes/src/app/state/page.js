'use client'
import { useState } from "react";
export default function State(){
    const [conteudo, setConteudo] = useState('Bom dia!')
    const [name, setName] = useState('')
    const [showdiv, setShowDiv] = useState(true)
    const controlarParagrafo = () => {
        setConteudo('boa tarde!')
        console.log('conteudo: '+conteudo)
    }


    const controlarInput = (evento) => {
        console.log(evento.target.value)
        setName(evento.target.value)
    }
    return (
        <div>
            <p>{conteudo}</p>
            <button onClick={controlarParagrafo}>mudar</button>
            <button onClick={()=> {setShowDiv(!showdiv)}}>{showdiv?'Esconder':'Mostrar'}</button>
            {showdiv &&(
            <div>
                <p>Nome: {name}</p>
                <input type="text" onChange={controlarInput}/>
            </div>                
            )
            }

        </div>
    )
}