import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import FormDivisa from "./componentes/FormDivisa";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [sesion, cambiarSesion] = useState(true);
  const [contador, setContador] = useState(0);

  return (
    <>
      <FormDivisa/>
    </>
  );
};

root.render(<App />);