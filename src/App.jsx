import './App.scss';
import React, {useState} from 'react';
import TodoItem from './TodoItem';

function App() {
  // Estado para o texto que o utilizador está a digitar
  const [textoInput, setTextoInput] = useState("");

  // Estado para a lista de tarefas (começa como um array vazio)
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (textoInput.trim() !== "") {
      //array com o que ja tinha + a nova tarefa 
      setTarefas([...tarefas, textoInput]);

      // Limpa o campo após adicionar
      setTextoInput(""); 
    }
  }

  const removerTarefa = (indexParaRemover) => {
    // Filtramos a lista para manter apenas quem não tem o index clicado
    const novaLista = tarefas.filter((_, index) => index !== indexParaRemover);
    console.log(novaLista);
    setTarefas(novaLista);
  }

  const removerTodasTarefas = () => {
    // Devolvemos uma lista vazia, sem itens
    setTarefas([]);
  }

  return (
    <div className="content">
      <div className='main'>
        <h1>Minha Lista de Tarefas</h1>
        <h3>Tarefas:</h3>
        <ul>
          <li>
            <input 
          type="text"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
          placeholder='O que precisa fazer?'
          />
        <button onClick={adicionarTarefa} className='adiciona'>+</button>
        </li>

          {tarefas.map((item, index) => (
            <TodoItem
              key={index}
              tarefa={item}
              aoRemover={() => removerTarefa(index)}
              />
          ))}
        </ul>
        <div className="footer">
          <button className='remove-all' onClick={removerTodasTarefas}>Remover Todos</button>
        </div>
      </div>

    </div>
  );
}

export default App;