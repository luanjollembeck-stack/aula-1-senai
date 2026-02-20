// sq2-8
function MaiorNumero() {
    function mostrarMaiorNumero(){
        let num = prompt("Digite um número: ")
        let num2 = prompt("Digite outro número")

        if(num > num2){
            alert("O " + num + " é maior que " + num2)
        }else{
            alert("O " + num2 + " é maior que " + num)
        }
    }
  return (
    <div>
        <h2>Maior número</h2>
        <button onClick={mostrarMaiorNumero}>Mostrar maior número</button>
    </div>
  )
}

export default MaiorNumero