import React, { useEffect } from "react";
import Tarefa from "./Tarefa";

const ListaTarefas = (props) => {
    const { listaTarefas, onEditarTarefa, onExcluirTarefa } = props;

    return (
        <div>
            {listaTarefas.map((tarefa, index) => (
                <Tarefa
                    key={index}
                    index={index}
                    value={tarefa}
                    onEditarTarefa={onEditarTarefa}
                    onExcluirTarefa={onExcluirTarefa}/>
            ))}
        </div>
    );
};

export default ListaTarefas;