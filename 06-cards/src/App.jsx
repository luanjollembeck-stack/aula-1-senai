import './App.css'
import CardProduto from './components/CardProduto';
import { useState } from 'react';

function App() {
  const [produtos,setProdutos] = useState([
    {id: 0,nome: 'kichute', preco: 333, imagem: "👟"},
    {id: 1,nome: 'Monareta', preco: 654, imagem: "🚲"},
    {id: 2,nome: 'Tamagochi', preco: 22, imagem: "🦆"},
    {id: 3,nome: 'genius', preco: 100, imagem: "🧞"}
  ])
  function cadastrar(){
    let produtoNovo = {id: Date.now(), nome: 'pogobol', preco: 10, imagem: "⚽"} 
    setProdutos([...produtos, produtoNovo])
  }
  return (
    <div>
      <h1>cards de coisas</h1>
      <button onClick={cadastrar}>+</button>
      <div className="listaCards">
      {
        produtos.map( (produto) => (
          <CardProduto p={produto} key={produto.id}/>
          ) )
        }
        </div>
    </div>
  )
}

export default App