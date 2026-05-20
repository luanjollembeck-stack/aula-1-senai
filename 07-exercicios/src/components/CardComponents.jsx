import './CardComponents.css'
function CardVideogames(prop) {
    return (
        <div className="cont-videogames">
            <p className='imagem-videogames'></p>
            <p>{prop.p.imagem}</p>
            <p>Nome: {prop.p.nome}</p>
            <p>Raridade: {prop.p.raridade}</p>
            <p>Preço: R${prop.p.preco.toFixed(2).replace('.',',')}</p>
        </div>
    )
}

export default CardVideogames