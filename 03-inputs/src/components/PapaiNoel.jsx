import { useState } from 'react'

function PapaiNoel() {

    const [inputNoel, setInputNoel] = useState('')
    const [frase, setFrase] = useState('')

    function papaiHo() {

        let noel = ''
        let palavra = 'Ho '

        for (let i = 0; i <= inputNoel; i++) {
            noel += palavra
        }

        setFrase(noel)
    }

    return (

        <div>

            <h2>Quantos "Ho" o Papai Noel terá que falar</h2>

            <input type="Number"
                value={inputNoel}
                onChange={(e) => setInputNoel(e.target.value)}
            /><br></br>

            <button onClick={papaiHo}>Contar os Hos</button>

            <p>{frase}</p>

        </div>
    )
}

export default PapaiNoel
