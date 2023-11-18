import React, { useState } from "react";

const InputTarefa = (props) => {
  const [inputTarefa, setInputTarefa] = useState('');

  const handleInputChange = (e) => {
    const newInputTarefa = e.target.value;
    setInputTarefa(newInputTarefa);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        props.onAddTarefa(inputTarefa)
        setInputTarefa('');
    }
  }

  return (
    <div>
      <label htmlFor={props.id}> {props.label} </label>
      <input id={props.id} type="text" value={inputTarefa} placeholder={props.placeholder} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
    </div>
  );
};

export default InputTarefa;