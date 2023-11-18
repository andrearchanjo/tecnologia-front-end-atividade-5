import React from 'react';
import Tarefa from './Tarefa';

const ListaTarefas = (props) => {
  const { listaTarefas, onEditarTarefa, onExcluirTarefa } = props;

  return (
    <div>
        {listaTarefas.map((tarefa) => (
            <Tarefa
                key={tarefa.id}
                id={tarefa.id}
                value={tarefa.value}
                onEditarTarefa={onEditarTarefa}
                onExcluirTarefa={onExcluirTarefa}
            />
        ))}
    </div>
  );
};

export default ListaTarefas;