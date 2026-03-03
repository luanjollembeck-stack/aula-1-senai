function FotoCopiadora() {
    function calculoPreco() {
        let preco = 0.33
        let quantia = Number(prompt("Digite quantas você gostaria: "))
        let resultado = ''
        let valorQuantia = ''
        valorQuantia += "Mano Juca quer " + quantia + " por " + preco + " e com isso curtará " + (quantia * preco).toFixed(2)
        for (let i = 1; i <= 500; i++) {
            resultado += i + 'x' + preco + '=' + (preco * i).toFixed(2) + "\n"
        }
        alert(resultado)
        alert(valorQuantia)
    }
    return (
        <div>
            <h2>FotoCopiadora</h2>
            <button onClick={calculoPreco}>Calcular valores</button>
        </div>
    )
}

export default FotoCopiadora