import './App.css';
import { useState } from 'react';
import ListaTarefas from './components/ListaTarefas';

const App = () => {
  const [inputTarefa, setInputTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const onAddTarefa = (novaTarefa) => {
    setTarefas((prevTarefas) => {
      const novasTarefas = [...prevTarefas, novaTarefa];
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

  const editarTarefa = (index, novoValor) => {
    setTarefas((prevTarefas) => {
      const novasTarefas = [...prevTarefas];
      novasTarefas[index] = novoValor;
      return novasTarefas;
    });
  };

  const excluirTarefa = (index) => {
    setTarefas((prevTarefas) => {
      const novasTarefas = [...prevTarefas];
      novasTarefas.splice(index, 1);
      return novasTarefas;
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
        onKeyDown={handleKeyDown}/>
      <hr />
      <ListaTarefas
        listaTarefas={tarefas}
        onEditarTarefa={editarTarefa}
        onExcluirTarefa={excluirTarefa}/>
    </div>
  );
};

export default App;
