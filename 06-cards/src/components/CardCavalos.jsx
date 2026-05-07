import './CardCavalos.css'

function CardCavalos(prop) {
    return (
        <div className="cont-cavalos">
            <p className='imagem-cavalos'></p>
            <p>{prop.p.imagem}</p>
            <p>Nome: {prop.p.nome}</p>
            <p>Raça: {prop.p.raca}</p>
            <p>Idade: {prop.p.idade}</p>
            <p>Pelagem: {prop.p.pelagem}</p>
        </div>
    )
}

export default CardCavalos
