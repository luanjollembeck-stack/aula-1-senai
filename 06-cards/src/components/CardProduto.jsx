import './CardProduto.css'
function CardProduto(prop) {
    return (
        <div className="cont-card">
        {console.log(prop.p.nome)}
            <p className = 'imagem-produto'>{prop.p.imagem}</p>
            <h2>Modelo: {prop.p.modelo}</h2>
            <p>Preço: R${prop.p.preco.toFixed(2).replace('.',',')}</p>
        </div>
    )
}

export default CardProduto
