// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
function App() {
  // 3-info guardará los valores traídos desde la API
  const [info, setInfo] = useState([]);
  // 2-Llamamos a la función consultarApi al momento de montar elcomponente
  useEffect(() => {
    consultarApi();
  }, []);
  // 1-Función que consulta la API
  const consultarApi = async () => {
    const url = "https://api.gameofthronesquotes.xyz/v1/random";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(`${data.sentence}-${data.character.name}`); // Con setInfoactualizamos el estado
  };
  return (
    <>
      {/* Mostramos la info */}
      {info}
    </>
  );
}
export default App;
