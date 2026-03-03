function FotoCopiadora() {
    function calculoPreco() {
        let preco = 0.33
        let resultado = ''
        for (let i = 1; i <= 500; i++) {
            resultado = preco * i + "\n"
        }
        alert(resultado)
    }
}
return (
    <div>
        <h2>FotoCopiadora</h2>
        <button onClick={calculoPreco}></button>
    </div>
)


export default FotoCopiadora