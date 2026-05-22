import './CardComponents.css'
function CardVideogames({v, excluir}) {

        const{id, imagem, nome, raridade, preco} = v
    
    return (
        <div className="cont-videogames">
            <p className='imagem-videogames'></p>
            <p>{imagem}</p>
            <p>Nome: {nome}</p>
            <p>Raridade: {raridade}</p>
            <p>Preço: R${preco.toFixed(2).replace('.',',')}</p>
            <button onClick={() => excluir(id)}>excluir</button>
        </div>
    )
}

export default CardVideogames