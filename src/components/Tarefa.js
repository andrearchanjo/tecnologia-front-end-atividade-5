import React, { useState } from "react";

const Tarefa = (props) => {
    const [tarefaEditavel, setTarefaEditavel] = useState(false);
    const [valorEditado, setValorEditado] = useState(props.value);
    
    const mudarStatus = (status) => {
        setTarefaEditavel(status);
    };

    const handleInputChange = (e) => {
        const novoValorEditado = e.target.value;
        setValorEditado(novoValorEditado);
      };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
    
            mudarStatus(false);
            props.onEditarTarefa(props.index, valorEditado)
        }
    }
    
    return (
        <div>
            {tarefaEditavel ? (
                <div>
                    <input 
                        id='tarefa' 
                        type="text"
                        value={valorEditado}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}/>
                </div>
            ) : (
                <div>
                    <p onClick={() => mudarStatus(true)}>{valorEditado}</p>
                </div>
            )}
        </div>
    );
};

export default Tarefa;