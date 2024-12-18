'use client';

import { useEffect, useState } from "react";
export default function Efeitos(){
    //const [cont, setCont] = useState(0);
    //const [cont2, setCont2] = useState(0);
    const [ufs, setUfs] = useState([]);
    

    const getUfs = async ()=> {
        try{
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
            if(!response.ok){
                throw new Error('Erro ao buscar dados: '+ response.statusText);
            }
            const data = await response.json();
            console.log(data);
        }catch(error){
            console.log('Ocorreu algum erro: ' + error)
        }
    }

    useEffect(() => {
        getUfs();
    }, [])

    //useEffect(()=> {
        //console.log('Renderizou')
    //},[cont])
    return (
        //<div>
            //<h1>Efeitos Colaterais / Use useEffect</h1>
            //<button onClick={() => (setCont(cont + 1))}>Adicionar</button>
            //<p>Renderizações cont1: {cont}</p>
            //<button onClick={() => (setCont(cont + 1))}>Adicionar</button>
            //<p>Renderizações cont2: {cont2}</p>
        //</div>
        <div>
            {
                <ul>
                    {ufs.map(uf => (
                        <li key={nome}>{uf.nome}</li>
                    ))}
                </ul>
            }
        </div>
    )
}