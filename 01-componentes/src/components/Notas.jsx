// sq2-7
function Notas() {
    function verificarNota(){
        let nota = Number(prompt("Digite sua nota:"))
        if(nota >= 81 && nota <= 100){
            alert("Nota A")
        }else if(nota >= 61 && nota <= 80){
            alert("Nota B")
        }else if(nota >= 41 && nota <= 60){
            alert("Nota C")
        }else if(nota >= 21 && nota <= 40){
            alert("Nota D")
        }else if(nota <= 20){
            alert("Nota E")
        }else{
            alert("Entre 0 e 100 por favor PNC")
        }
    }
  return (
    <div>
        <h2>Calcular notas</h2>
        <button onClick={verificarNota}>Verificar a Nota</button>
    </div>
  )
}

export default Notas