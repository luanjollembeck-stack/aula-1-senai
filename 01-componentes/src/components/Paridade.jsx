// sq2-4
function Paridade() {
    function parOuImpar() {
        let numero = prompt("Digite um número qualquer: ")
        numero = Number(numero)

        if(numero % 2 == 0){
            alert("O seu número é par")
        }else{
            alert("O seu número é impar")
        }
    }
        return (
    <div>
        <h2>Par ou Impar</h2>
        <button onClick={parOuImpar}>Verificar número</button>
    </div>
  )
}

export default Paridade