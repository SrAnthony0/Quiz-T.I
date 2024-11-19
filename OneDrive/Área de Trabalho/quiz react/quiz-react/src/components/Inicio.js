import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Inicio() {
  const navigate = useNavigate();

  const iniciarJogo = () => {
    navigate("/categoria");
  };

  return (
    <div className="container">
      <h1>Bem-vindo ao Quiz T.I</h1>
      <p>Teste seus conhecimentos em T.I!</p>
      <button onClick={iniciarJogo}>Começar</button>
    </div>
  );
}

export default Inicio;
