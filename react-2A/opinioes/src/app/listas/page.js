
export default function listas() {
    const racas = ['Vira-Lata', 'Husk Siberiano', 'Pitbull', 'Caramelo', 'Dachshund', 'Pastor Alemão']

    const racasObj = [
        {
            id:0,
            raca:'Vira-Lata',
        },
        {
            id:1,
            raca:'Husk Siberiano',
        },
        {
            id:2,
            raca:'Pitbull',
        },
        {
            id:3,
            raca:'Caramelo',
        },
        {
            id:4,
            raca:'Dachshund',
        },
        {
            id:5,
            raca:'Pastor Alemão',
        },
    ]
    return (
    <div>
        <h1>listas</h1>
        <h2>Lista comum</h2>
        <ul>
            {racas.map((raca, i) => (
                <li key={i}>{i+1} - {raca}</li>
                ))}
        </ul>
        <h2>Lista de Objetos</h2>
        {racasObj.map((racaObj) => (
            <div key={racasObj.id}>
                <h3>{racaObj.id}</h3>
                <p>{racasObj.raca}</p>
            </div>
        ))}
    </div>
    )
}