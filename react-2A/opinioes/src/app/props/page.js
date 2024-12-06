import Card from '@/components/Card';

export default function Props(){

    const dogs = [
        {
            id: 1,
            nome: 'Max',
            raca:  'Vira-Lata',
            peso: 1.5,
            cor: 'branca'
        },
        {
            id: 2,
            nome: 'Rex',
            raca:  'Chihuahua',
            peso: 1.5,
            cor: 'Marrom'
        },
        {
            id: 3,
            nome: 'Zico',
            raca:  'Dachshund',
            peso: 1.5,
            cor: 'Amarelo'
        }
    ]

    return (
        <div>
            <h1>Props</h1>
            <div>
                {dogs.map((dog) => (
                    <Card
                        key={dog.id}
                        nome={dog.nome}
                        raca={dog.raca}
                        peso={dog.peso}
                        cor={dog.cor}
                    />
                ))}
            </div>
        </div>
    )
}