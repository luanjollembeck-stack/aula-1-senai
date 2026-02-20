// sq2-12

function IdadeDoCachorro() {
    function calculoIdade(){
        let idadeDog = prompt("Digite a idade do seu doguinho: ")
        let idadeHumana = idadeDog * 7
        alert("Seu doguinho tem " + idadeHumana + " em idade humana")
    }
  return (
    <div>
        <h2>Calculo da idade do cachorro</h2>
        <button onClick={calculoIdade}>Calcular idade</button>
    </div>
  )
}

export default IdadeDoCachorro