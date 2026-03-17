import { useState } from 'react'

function Bondinho() {
    const [inputAlunos, setInputAlunos] = useState('')
    const [inputMonitores, setInputMonitores] = useState('')
    const [pessoasTotal, setPessoasTotal] = useState('')
    const [podeNPode, setPodeNPode] = useState('')
    function somarPessoas() {
        let alunos = Number(inputAlunos)
        let monitores = Number(inputMonitores)
        let pessoas = ''
        pessoas = 'tem ' + (alunos + monitores) + ' para ir no bondinho'
        setPessoasTotal(pessoas)

        if (pessoasTotal >= 50) {
            setPodeNPode('O bondinho pode prosseguir!')
        } else {
            setPodeNPode('O bondinho não pode prosseguir por conta de sobrepeso!')
        }

    }

    return (
        <div>

            <h2>Monitores e alunos</h2>

            <br />

            <input type="Number"
                value={inputAlunos}
                onChange={(e) => setInputAlunos(e.target.value)}
            />

            <br />

            <input type="Number"
                value={inputMonitores}
                onChange={(e) => setInputMonitores(e.target.value)}
            />

            <br />

            <button onClick={somarPessoas}>Verificar pessoas</button>

            <br />

            <p>{pessoasTotal}</p>

            <p>{podeNPode}</p>

        </div>
    )
}

export default Bondinho