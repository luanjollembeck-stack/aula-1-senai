function PressãoAr() {
    function pressao() {
        let presInicial = Number(prompt("Digite a pressão de pneu inicial: "))
        let presDesejada = Number(prompt("Digite a pressão de pneu desejada: "))
        let presFinal = 0
        presFinal = presDesejada - presInicial
        let presPosta = ''
        presPosta = 'Foi adicionado ' + presFinal + ' de ar comprimido no pneu'
        alert(presPosta)
    }
    return (
        <div>
            <h2>Pressão de ar do pneu</h2>
            <button onClick={pressao}>Calcular pressão</button>
        </div>
    )
}

export default PressãoAr