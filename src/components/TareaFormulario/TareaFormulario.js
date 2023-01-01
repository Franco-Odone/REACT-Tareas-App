import { useState, useRef } from "react";
import "./tarea-formulario.css";

const TareaFormulario = (props) => {
  const [input, setInput] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: crypto.randomUUID(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
    inputRef.current.value = "";
  };
  return (
    <form className="tarea-formulario" onSubmit={handleSubmit}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        ref={inputRef}
        onChange={handleChange}
      />
      <button className="tarea-boton">agregar tarea</button>
    </form>
  );
};

export { TareaFormulario };
