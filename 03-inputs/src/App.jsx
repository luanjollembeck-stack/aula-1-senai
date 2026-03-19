import { useState } from 'react'
import './App.css'
import Evento from './components/Evento';
import Celular from './components/Celular';
import PressãoAr from './components/PressãoAr';
import PapaiNoel from './components/PapaiNoel';
import Notas from './components/Notas';
import Bondinho from './components/Bondinho';
import Pum from './components/Pum';
import Combustivel from './components/Combustivel';

function App() {
  // const [inputNome, setInputNome] = useState('')
  // function cadastrar() {
  //   console.log("cadastrando:" + inputNome)
  
  return (
    <>
      {/* <h1>inputs controlados</h1>
      Nome <input type="text"
        value={inputNome}
        onChange={(e) => setInputNome(e.target.value)} */}
      {/* <p>Nome digitado: {inputNome}</p>
      <button onClick={cadastrar}>cadastrar</button> */}

      {/* <hr /> */}
      <Evento />
      <hr />
      <Celular />
      <hr />
      <PressãoAr />
      <hr />
      <PapaiNoel />
      <hr/>
      <Notas />
      <hr/>
      <Bondinho />
      <hr/>
      <Pum />
      <hr />
      <Combustivel />
    </>
  )
}

export default App
