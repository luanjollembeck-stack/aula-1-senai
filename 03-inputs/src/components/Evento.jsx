import {useState} from 'react'

function Evento() {
    const[inputEvento, setInputEvento] = useState('')
    function handleInput(e){
        setInputEvento(e.target.value)
        console.log(e);
    }

    return (
        <div>
            <h2>Demo de eventos</h2>

            <input type="text"
                value={inputEvento}
                onChange={handleInput}
            />
            
            <button onClick={(e) => console.log(e)}>Evento onClick</button>
        </div>
    )
}

export default Evento