import React, { useState, useEffect } from "react";
import Tarefa from "./Tarefa";

const ListaTarefas = (props) => {

    const [listaTarefas, setListaTarefas] = useState(props.listaTarefas);

    useEffect(() => {
        setListaTarefas(props.listaTarefas);
    }, [props.listaTarefas]);
  
    return (
        <div>
            {
                listaTarefas.map((c, index) => (
                    <Tarefa key={index} value={c} index={index}/>
                ))
            }
        </div>
    );
};

export default ListaTarefas;