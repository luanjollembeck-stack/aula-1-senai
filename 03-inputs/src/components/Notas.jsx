import { useState } from 'react'

function Notas() {

    const [inputNotas, setInputNotas] = useState('')
    const [inputNotas2, setInputNotas2] = useState('')
    const [notaFinal, setNotaFinal] = useState('')
    const [aprovReprov, setAprovReprov] = useState('')

    function calculoMedia() {

        let nota1 = Number(inputNotas)
        let nota2 = Number(inputNotas2)
        let notaMedia = (nota1 + nota2) / 2
        setNotaFinal(notaMedia)

        if (notaMedia >= 7) {
            setAprovReprov('O aluno está Aprovado')
        } else if (notaMedia < 4) {
            setAprovReprov('O aluno está Reprovado')
        } else {
            setAprovReprov('O aluno está em Recuperação')
        }

    }

    return (
        <div>
            <h2>Média de nota final</h2>

            <input type="number"
                value={inputNotas}
                onChange={(e) => setInputNotas(e.target.value)} />

            <br />

            <input type="number"
                value={inputNotas2}
                onChange={(e) => setInputNotas2(e.target.value)} />

            <br />

            <button onClick={calculoMedia}>Calcular média</button>

            <br />

            <p>{notaFinal}</p>

            <p>{aprovReprov}</p>

        </div>
    )
}

export default Notas
