// sq2-15

function CalculoDeIMC() {
    function calculoIMC() {
        let peso = prompt("Digite seu peso:")
        let altura = prompt("Digite sua altura:")
        let IMC = peso / (altura * altura)
        alert("Seu IMC é " + IMC)
    }
  return (
    <div>
        <h2>Calculo do seu IMC</h2>
        <button onClick={calculoIMC}>Calcule seu IMC</button>
    </div>
  )
}

export default CalculoDeIMC