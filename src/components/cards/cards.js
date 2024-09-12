import Card from "../card/card";

const cardsTitle = [ 'Título card 1', 'Título card 2', 'Título card 3']

const Cards = () => {
    return (
        <div>
            <h2>Meus Cards</h2>

            <div>
                {
                    cardsTitle.map((cardsTitle, index) => (
                        <Card key={index}>
                            <h3>{cardsTitle}</h3>
                            <p>Esse é um texto do card 1</p>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards