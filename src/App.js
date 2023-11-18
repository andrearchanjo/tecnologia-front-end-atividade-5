import './App.css';
import { useState } from 'react';
import ListaTarefas from './components/ListaTarefas';

const App = () => {
  const [inputTarefa, setInputTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const onAddTarefa = (novaTarefa) => {
    setTarefas((prevTarefas) => {
      const novasTarefas = [...prevTarefas, { id: prevTarefas.length, value: novaTarefa }];
      return novasTarefas;
    });

    setInputTarefa('');
  };

  const handleInputChange = (e) => {
    const newInputTarefa = e.target.value;
    setInputTarefa(newInputTarefa);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAddTarefa(inputTarefa);
    }
  };

  const editarTarefa = (id, novoValor) => {
    setTarefas((prevTarefas) => {
      const novasTarefas = [...prevTarefas];
      const index = novasTarefas.findIndex((tarefa) => tarefa.id === id);
      if (index !== -1) {
        novasTarefas[index].value = novoValor;
      }
      return novasTarefas;
    });
  };

  const excluirTarefa = (id) => {
    setTarefas((prevTarefas) => {
      return prevTarefas.filter((tarefa) => tarefa.id !== id);
    });
  };

  return (
    <div className='App'>
      <label htmlFor='tarefa'> Tarefa: </label>
      <input
        id='tarefa'
        type="text"
        placeholder='Digite a sua tarefa...'
        value={inputTarefa}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className='input-tarefa'/>
      <hr />
      <ListaTarefas
        listaTarefas={tarefas}
        onEditarTarefa={editarTarefa}
        onExcluirTarefa={excluirTarefa}/>
    </div>
  );
};

export default App;