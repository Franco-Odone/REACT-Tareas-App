import { useEffect, useState } from "react";
import { Tarea } from "../Tarea/Tarea";
import { TareaFormulario } from "../TareaFormulario/TareaFormulario";
import "./lista-de-tareas.css";

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  // Funciones para leer y escribir en el local storage
  const save = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  const read = (key) => {
    return JSON.parse(window.localStorage.getItem(key)) || [];
  };

  useEffect(() => {
    setTareas(read("tareas"));
  }, []);

  // La única función que se ejecuta en TareaFormulario
  const agregarTarea = (tareaNueva) => {
    let tareasActualizadas;
    tareaNueva.texto && tareaNueva.texto.trim();
    tareasActualizadas = [tareaNueva, ...tareas];
    // tareasActualizadas viene con los valores del array ya actualizados
    save("tareas", tareasActualizadas);
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const filtroTareas = tareas.filter((tarea) => tarea.id !== id);

    // filtroTareas viene con los valores del array ya actualizados
    save("tareas", filtroTareas);
    setTareas(filtroTareas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }

      return tarea;
    });

    // tareasActualizadas viene con los valores del array ya actualizados
    save("tareas", tareasActualizadas);
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            // El atributo key no se puede usar como prop
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
};

export { ListaDeTareas };
