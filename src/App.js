import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { ListaPrincipal } from "./components/ListaPrincipal/ListaPrincipal";
import { Logo } from "./components/Logo/Logo";

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <ListaPrincipal />
      <Footer />
    </div>
  );
}

export default App;
