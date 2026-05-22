import './App.css'
import { useState } from 'react';
import CardVideogames from './components/CardComponents';

function App() {

  const [videogames, setVideogames] = useState([
    {
      id: 0,
      nome: 'PlayStation 5',
      preco: 4499,
      imagem: "🎮",
      raridade: "Muito comum"
    },
    {
      id: 1,
      nome: 'Xbox Series X',
      preco: 4299,
      imagem: "🕹️",
      raridade: "Comum"
    },
    {
      id: 2,
      nome: 'Nintendo Switch',
      preco: 2399,
      imagem: "🎲",
      raridade: "Muito comum"
    },
    {
      id: 3,
      nome: 'Steam Deck',
      preco: 3899,
      imagem: "💻",
      raridade: "Incomum"
    },
    {
      id: 4,
      nome: 'Game Boy Color',
      preco: 799,
      imagem: "👾",
      raridade: "Raro"
    },
    {
      id: 5,
      nome: 'Mega Drive',
      preco: 650,
      imagem: "🕹️",
      raridade: "Raro"
    },
    {
      id: 6,
      nome: 'Super Nintendo',
      preco: 1200,
      imagem: "🎮",
      raridade: "Raro"
    },
    {
      id: 7,
      nome: 'PlayStation 2',
      preco: 900,
      imagem: "📀",
      raridade: "Comum"
    },
    {
      id: 8,
      nome: 'Nintendo 64',
      preco: 1500,
      imagem: "👾",
      raridade: "Muito Raro"
    },
    {
      id: 9,
      nome: 'Atari 2600',
      preco: 500,
      imagem: "🕹️",
      raridade: "Colecionador"
    }
  ])
  const [inputImagem, setInputimagem] = useState('')
  const [inputNome, setInputNome] = useState('')
  const [inputPreco, setInputPreco] = useState('')
  const [inputRaridade, setInputRaridade] = useState('')
  function cadastrar() {
    let videogameNovo = {
      id: Date.now(),
      nome: inputNome,
      preco: Number(inputPreco),
      imagem: inputImagem,
      raridade: inputRaridade
    }
    setVideogames([...videogames, videogameNovo])
    setInputimagem('')
    setInputNome('')
    setInputPreco('')
    setInputRaridade('')
  }

  function excluir(id) {
    setVideogames(videogames.filter((v) => v.id != id))
  }

  return (
    <>
      <div className="titulo">
        <h2>Loja de videogames</h2>
      </div>

      <hr />

      <div className="cont-form">
      
        <h2>Cadastro de coisas</h2>

        <div className="input-container">
          <label>Imagem do videogame</label>
          <input
            type="text"
            placeholder="Digite aqui"
            value={inputImagem}
            onChange={(e) => setInputimagem(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label>Nome do videogame</label>
          <input type="text"
            placeholder="Digite aqui"
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label>Preço do videogame</label>
          <input type="text"
            placeholder="Digite aqui"
            value={inputPreco}
            onChange={(e) => setInputPreco(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label>Raridade do videogame</label>
          <input type="text"
            placeholder="Digite aqui"
            value={inputRaridade}
            onChange={(e) => setInputRaridade(e.target.value)}
          />
        </div>

        <button onClick={cadastrar}>cadastrar</button>

      </div>

      <hr />

      <h1 className="name-exib">Lista de Exibição</h1>

      <div className="lista-videogames">
        {
          videogames.map((videogame) => (
            <CardVideogames v={videogame} key={videogame.id} excluir={excluir} />))
        }
      </div>

    </>
  )
}

export default App