//import logo from './logo.svg';
//import './App.css';
import React, {useState}  from 'react';
import {FiSearch} from 'react-icons/fi';
import '../src/styles.css';
import api from '../src/services/api' ;


function App() {
      const [input, setInput] = useState();
      const [cep, setCep] = useState({});

      async function handleClick(){
        
        if(input === ''){
          alert('Preencha algum cep!')
          return;
        }

        try{
          const response = await api.get(`${input}/json`);
          setCep(response.data)
          setInput('')
          console.log(response.data)
        }catch{
          alert('erro ao buscar cep');
        }
      }


  return (
    <div className='container'>
      <h1 className='title'>Buscador CEP</h1>

      <div className='containerInput'>
        <input type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className='buttonSearch' onClick={handleClick}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className='main'>
        <p>Rua: {cep.logradouro}</p>
        <p>Bairro: {cep.bairro}</p>
        <p>Logradouro: {cep.localidade}</p>
        <p>UF: {cep.uf}</p>
      </main>
    </div>
  );
}

export default App;
