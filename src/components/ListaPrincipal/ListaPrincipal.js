import { ListaDeTareas } from "../ListaDeTareas/ListaDeTareas";
import "./lista-principal.css";

const ListaPrincipal = () => {
  return (
    <div className="tareas-lista-principal">
      <h2>Mis Tareas</h2>
      <ListaDeTareas />
    </div>
  );
};

export { ListaPrincipal };
