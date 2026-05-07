import './CardCarros.css'
function CardCarros(prop) {
    return (
        <div className="cont-carros">
        {/* {console.log(prop.p.nome)} */}
            <h2 className = 'imagem-marca'>{prop.p.marca}</h2>
            <p>modelo: {prop.p.modelo}</p>
            <p>Ano: {prop.p.ano}</p>
            <p>Cor: {prop.p.cor}</p>
            <p>Quilometragem: {prop.p.quilometragem} Km</p>
        </div>
    )
}

export default CardCarros
