import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import FormDivisa from "./componentes/FormDivisa";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <FormDivisa/>
    </>
  );
};

root.render(<App />);