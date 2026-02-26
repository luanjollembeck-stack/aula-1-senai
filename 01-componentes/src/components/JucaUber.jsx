
function JucaUber() {
    function diariaHotel(){
        let diaria = 100
        let multa = 150
        let dias = Number(prompt("Dias que Juca esteve hospedado: "))
        if(dias >= 6 && dias <= 10){
            diaria = 90
        }else if(dias >= 11){
            diaria = 80
        }
        let valor = diaria * dias
        let valorDesconto = valor * 25/100
        let valorFinal = valor + multa - valorDesconto
        alert("Juca pagou " + valorFinal + " nesses dias hospedados")
    }
  return (
    <div>
      <h2>Calculo de preço por dias em estadia</h2>
      <button onClick={diariaHotel}>Veja o valor total das diárias</button>
    </div>
  )
}

export default JucaUber
