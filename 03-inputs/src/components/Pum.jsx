import { useState } from 'react'

function Pum() {

    const [inputNum, setInputNum] = useState('')
    const [numSaida, setNumSaida] = useState()

    function contarPum() {

        let texto = ''
        let pum = 0
        let i = 1

        while(pum < inputNum){
            if(i%4!=0){
                texto += i + ' '
            }else{
                texto += 'PUM '
                pum++
            }
            i++
        }

        setNumSaida(texto)
        
    }

    return (
        <div>
            <h2>Contagem de Pum</h2>

            <input type="number"
                value={inputNum}
                onChange={(e) => setInputNum(e.target.value)}
            />

            <br />

            <button onClick={contarPum}>contar os Pum</button>

            <br />

            <p>{numSaida}</p>
        </div>
    )
}

export default Pum
