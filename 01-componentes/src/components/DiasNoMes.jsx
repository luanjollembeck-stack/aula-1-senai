// sq2-17

function DiasNoMes() {
    function quantosDiasMes(){
        let mes = prompt("Digite o Mês que você quer saber(Letra maiuscula apenas na primeira letra)")
        if(mes == "Janeiro" || mes == "Março" || mes == "Maio" || mes == "Julho" || mes == "Setembro")
    }
  return (
    <div>
        <h2>Quantos dias tem no mês</h2>
        <button onClick={quantosDiasMes}></button>
    </div>
  )
}

export default DiasNoMes