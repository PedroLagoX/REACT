import { useState } from 'react';
import './App.css';

function App() {

  const [usuario, setUsuario] = useState('')
  const [usuarios, setUsuarios] = useState(['Maria', 'Lucas', 'José']);

  const adicionarUsuario = () => {
    //Verificação se o novo usuario já existe na linha.
    if (usuarios.includes(usuario)) {
      alert('Usuario já existe na lista.');
      return;
    }

    // Adcionar novo usuario na lista, mantendo os anteriores.
    setUsuarios([...usuarios, usuario]);
    // Limpar campo de entrada.
    setUsuario('');
  }

  return (
    <div className = 'App'>
      <img src='https://i.pinimg.com/736x/07/38/a8/0738a8eebc4713ae05ddb8c5b8e78c42.jpg'>
      </img>
      <hr/>
      <h2>Adicionar usuário</h2>
      <input
      type='text'
      placeholder='Digite o nome do usuario'
      value={usuario}
      onChange={(e) => setUsuario(e.target.value)}
      />
      <button onClick={adicionarUsuario}> Adicionar</button>
      <hr/>
      <h2>Lista de usuarios</h2>
      <ol>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
