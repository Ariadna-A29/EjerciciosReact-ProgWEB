import { useState } from "react";
import Reloj from "./components/Reloj";
import ContadorRenders from "./components/ContadorRenders";
import Ficha from "./components/Ficha";
import ContadorDeVisitas from "./components/ContadorVisitas";
import ContadorDeCafes from "./components/ContadorCafe";

function App() {
  const [mostrarReloj, setMostrarReloj] = useState(true);

  return (
    <>
      <h1>Ejercicio 1</h1>

      <button onClick={() => setMostrarReloj(!mostrarReloj)}>
        {mostrarReloj ? "Esconder reloj" : "Mostrar reloj"}
      </button>

      {mostrarReloj && <Reloj />}

      <h1>Ejercicio 2</h1>

      <ContadorRenders />

      <h1>Ejercicio 3</h1>

      <Ficha
        nombre="Ariadna"
        rol="Desarrolladora"
      />

      <h1>Ejercicio 4</h1>

      <ContadorDeVisitas />
      <ContadorDeCafes />
    </>
  );
}

export default App;