import { useState } from 'react'
import './App.css'
import Evento from './components/Evento';
import Celular from './components/Celular';

function App() {
  const [inputNome, setInputNome] = useState('')
  function cadastrar() {
    console.log("cadastrando:" + inputNome)
  }
  return (
    <>
      <h1>inputs controlados</h1>
      Nome <input type="text"
        value={inputNome}
        onChange={(e) => setInputNome(e.target.value)}
      />
      {/* <p>Nome digitado: {inputNome}</p> */}
      <button onClick={cadastrar}>cadastrar</button>

      <hr />
      <Evento />
      <hr />
      <Celular />
    </>
  )
}

export default App
