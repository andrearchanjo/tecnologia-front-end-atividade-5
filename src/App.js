import './App.css';
import InputTarefa from './components/InputTarefa';
import { useState } from 'react';

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
    </div>
  );
};

export default App;
