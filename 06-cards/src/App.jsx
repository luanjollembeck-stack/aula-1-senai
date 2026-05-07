import './App.css'
import CardProduto from './components/CardProduto';
import CardCavalos from './components/CardCavalos';
import CardCarros from './components/CardCarros';
import { useState } from 'react';

function App() {
  const [produtos, setProdutos] = useState([
    { id: 0, nome: 'kichute', preco: 333, imagem: "👟" },
    { id: 1, nome: 'Monareta', preco: 654, imagem: "🚲" },
    { id: 2, nome: 'Tamagochi', preco: 22, imagem: "🦆" },
    { id: 3, nome: 'genius', preco: 100, imagem: "🧞" }
  ])

  const [cavalos, setCavalos] = useState([
    {
      id: 1,
      nome: "Trovão",
      raca: "Mangalarga Marchador",
      idade: 5,
      pelagem: "Tordilho",
      imagem: "🐎"
    },
    {
      id: 2,
      nome: "Pérola",
      raca: "Quarto de Milha",
      idade: 4,
      pelagem: "Alazã",
      imagem: "🐎"
    },
    {
      id: 3,
      nome: "Espírito",
      raca: "Mustang",
      idade: 7,
      pelagem: "Baio",
      imagem: "🐎"
    },
    {
      id: 4,
      nome: "Apolo",
      raca: "Puro Sangue Inglês",
      idade: 6,
      pelagem: "Castanho",
      imagem: "🐎"
    },
    {
      id: 5,
      nome: "Luna",
      raca: "Appaloosa",
      idade: 3,
      pelagem: "Sardenta",
      imagem: "🐎"
    },
    {
      id: 6,
      nome: "Barão",
      raca: "Crioulo",
      idade: 10,
      pelagem: "Zaino",
      imagem: "🐎"
    },
    {
      id: 7,
      nome: "Zéfiro",
      raca: "Lusitano",
      idade: 8,
      pelagem: "Branco",
      imagem: "🐎"
    },
    {
      id: 8,
      nome: "Fagulha",
      raca: "Árabe",
      idade: 5,
      pelagem: "Preto",
      imagem: "🐎"
    },
    {
      id: 9,
      nome: "Diamante",
      raca: "Andaluz",
      idade: 9,
      pelagem: "Cinza",
      imagem: "🐎"
    },
    {
      id: 10,
      nome: "Cigana",
      raca: "Campolina",
      idade: 4,
      pelagem: "Pampa",
      imagem: "🐎"
    }
  ])

  const[carros, setCarros] = useState([
    {
      id: 1,
      modelo: "Fusca 1300",
      marca: "Volkswagen",
      ano: 1974,
      cor: "Azul Pastel",
      quilometragem: 45000
    },
    {
      id: 2,
      modelo: "Mustang Fastback",
      marca: "Ford",
      ano: 1967,
      cor: "Preto",
      quilometragem: 12000
    },
    {
      id: 3,
      modelo: "Opala Diplomata",
      marca: "Chevrolet",
      ano: 1988,
      cor: "Cinza Metálico",
      quilometragem: 82000
    },
    {
      id: 4,
      modelo: "DeLorean DMC-12",
      marca: "DeLorean",
      ano: 1981,
      cor: "Aço Escovado",
      quilometragem: 5000
    },
    {
      id: 5,
      modelo: "F-40",
      marca: "Ferrari",
      ano: 1987,
      cor: "Vermelho Corsa",
      quilometragem: 2500
    },
    {
      id: 6,
      modelo: "Maverick GT",
      marca: "Ford",
      ano: 1975,
      cor: "Laranja",
      quilometragem: 67000
    },
    {
      id: 7,
      modelo: "911 Carrera",
      marca: "Porsche",
      ano: 1993,
      cor: "Branco",
      quilometragem: 31000
    },
    {
      id: 8,
      modelo: "Kombi Corujinha",
      marca: "Volkswagen",
      ano: 1962,
      cor: "Saia e Blusa (Vermelho/Branco)",
      quilometragem: 95000
    },
    {
      id: 9,
      modelo: "Charger RT",
      marca: "Dodge",
      ano: 1971,
      cor: "Amarelo",
      quilometragem: 54000
    },
    {
      id: 10,
      modelo: "Shelby Cobra",
      marca: "AC Cars",
      ano: 1965,
      cor: "Azul com Faixas Brancas",
      quilometragem: 1800
    }
  ])

  const [inputImagem, setInputimagem] = useState('')
  const [inputNome, setInputNome] = useState('')
  const [inputPreco, setInputPreco] = useState('')

  function cadastrar() {
    let produtoNovo = {
      id: Date.now(),
      nome: inputNome,
      preco: Number(inputPreco),
      imagem: inputImagem
    }
    setProdutos([...produtos, produtoNovo])
    setInputimagem('')
    setInputNome('')
    setInputPreco('')
  }
  return (
    <div>
      <section>
        <h2>Cavalos</h2>
      </section>

      <div className="lista-cavalos">
      {
        cavalos.map((cavalo) => (
          <CardCavalos p={cavalo} key={cavalo.id}/>))
        }
      </div>

      <hr />

      <section>
        <h2>Concessionária</h2>
      </section>

      <div className="lista-carros">
        {
          carros.map((carro) => (
            <CardCarros p={carro} key={carro.id} />))
          }
      </div>

      <hr/>

      <h1>cards de coisas</h1>
      <div className="cont-form">
        <h2>Cadastro de coisas</h2>
        <div className="input-container">
          <label htmlFor="">Imagem</label>
          <input type="text"
            value={inputImagem}
            onChange={(e) => setInputimagem(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Nome</label>
          <input type="text"
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Preço</label>
          <input type="text"
            value={inputPreco}
            onChange={(e) => setInputPreco(e.target.value)}
          />
        </div>
        <button onClick={cadastrar}>cadastrar</button>
      </div>
      <div className="listaCards">
        {
          produtos.map((produto) => (
            <CardProduto p={produto} key={produto.id} />
          ))
        }
      </div>
    </div>
  )
}

export default App