import './App.css'
import DiaDaSemana from './components/DiaDaSemana'
import Paridade from './components/Paridade'
import Notas from './components/Notas'
import MaiorNumero from './components/MaiorNumero'
import IdadeDoCachorro from './components/IdadeDoCachorro'
import CalculoDeIMC from './components/CalculoDeIMC'
import ManoJuca from './components/ManoJuca'
import JucaUber from './components/JucaUber'

function App() {

  return (
    <>
    <h1>01-componentes</h1>   
      <Paridade />
      <DiaDaSemana />
      <Notas />
      <MaiorNumero />
      <IdadeDoCachorro />
      <CalculoDeIMC/>
      <ManoJuca/>
      <JucaUber/>
    </>
  )
}

export default App
