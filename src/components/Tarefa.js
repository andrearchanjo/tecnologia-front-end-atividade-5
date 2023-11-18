import React, { useEffect, useState } from 'react';

const Tarefa = (props) => {
    const [tarefaEditavel, setTarefaEditavel] = useState(false);
    const [valorEditado, setValorEditado] = useState(props.value);
    const [contemPalavrasChave, setContemPalavrasChave] = useState(false);

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
            props.onEditarTarefa(props.id, valorEditado);
        }
    };

    const excluirTarefa = () => {
        props.onExcluirTarefa(props.id);
    };

    useEffect(() => {
        const verificarPalavrasChave = () => {
            if (valorEditado) {
                const texto = valorEditado.trim().toLowerCase();
                const regex = /\b(ler|estudar)\b/;

                if (regex.test(texto)) {
                    setContemPalavrasChave(true);
                } else {
                    setContemPalavrasChave(false);
                }
            }
        };

        verificarPalavrasChave();
    }, [valorEditado]);

    return (
        <div>
            {tarefaEditavel ? (
                <div>
                    <input
                        id='tarefa'
                        type="text"
                        value={valorEditado}
                        className='input-tarefa'
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}/>
                    <button 
                        className='botao-tarefa' 
                        onClick={excluirTarefa}>
                        X
                    </button>
                </div>
            ) : (
                <div>
                    <p className={contemPalavrasChave ? 'destacado tarefa' : 'tarefa'} onClick={() => mudarStatus(true)}>{valorEditado}</p>
                </div>
            )}
        </div>
    );
};

export default Tarefa;