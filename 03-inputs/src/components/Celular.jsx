import {useState} from 'react'

function Celular() {
    const[mostrar, setMostrar] = useState(false)
    function celularP(){
        setMostrar(!mostrar)
    }
    return (
        <div>
            <h2>Mensagem do Celular</h2>
            <button onClick={celularP}>Mostrar mensagem</button>
            {mostrar && <p>Celulares e jogos são proiidos no laboratório</p>}
        </div>
    )
}

export default Celular