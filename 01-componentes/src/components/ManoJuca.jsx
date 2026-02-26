// SQ5-5.10

import { useState } from "react"

function ManoJuca() {
  const[saida, setSaida] = useState(0)
  // let saida = 
  function calculoMacas() {
    let quantidadeMacas = Number(prompt("Fale quantas maçãs irá comprar: "))
    let precoMacas = 0.30
    if (quantidadeMacas >= 12) {
      precoMacas = 0.25
    }
    let precoFinal = precoMacas * quantidadeMacas
    // prompt("o preço total foi de " + precoFinal)
    // saida = precoFinal
    setSaida(precoFinal)
  }
  return (
    <div>
      <h2>Cálculo de maçãs</h2>
      <p>
        Resultado: {saida}
      </p>
      <button onClick={calculoMacas}>calcular preço</button>
    </div>
  )
}

export default ManoJuca