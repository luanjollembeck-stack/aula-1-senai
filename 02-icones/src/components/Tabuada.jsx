import React from 'react'

function tabuada() {
    function calculoTabuada() {
        let numero = Number(prompt("Digite um número: "))
        let resultado = ''
        for (let i = 1; i <= 10; i++) {
            resultado += i + 'x' + numero + '=' + numero * i + "\n"
        }
        alert(resultado)
    }
    return (
        <div>
            <h1>tabuada</h1>
            <button onClick={calculoTabuada}>Calcular tabuada</button>
        </div>
    )
}

export default tabuada
