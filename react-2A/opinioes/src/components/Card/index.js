import styles from './Card.module.css'
export default function Card({raca, nome, peso, cor}){
    return (
        <div>
            <h2>{nome}</h2>
            <p>{raca}</p>
            <p>{peso}</p>
            <p>{cor}</p>
        </div>
    )
}