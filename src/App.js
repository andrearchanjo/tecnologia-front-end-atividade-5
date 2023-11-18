import './App.css';
import { useState } from 'react';
import InputTarefa from './components/InputTarefa';
import ListaTarefas from './components/ListaTarefas';

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  const addTarefa = (novaTarefa) => {
    setTarefas((prevTarefas) => {
      const novasTarefas = [...prevTarefas, novaTarefa];
      return novasTarefas;
    });
  };

  return (
    <div className='App'>
      <InputTarefa id="tarefa" label="Tarefa:" placeholder="Digite algo..." onAddTarefa={addTarefa} />
      <ListaTarefas listaTarefas={tarefas}/>
    </div>
  );
};

export default App;
