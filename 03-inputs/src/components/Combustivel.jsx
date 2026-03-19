import { useState } from 'react'

function Combustivel() {
    
    function tipos() {

    }
    return (
        <div>
            <h2>Tipo de combustível</h2>

            <input type="Number"
                value={inputTipo}
                onChange={(e) => setInputTipo(e.target.value)}
            />
            <br/>
            <button onClick={tipos}>Ver tipo de Combustivel</button>
            <br/>

        </div>
    )
}

export default Combustivel
