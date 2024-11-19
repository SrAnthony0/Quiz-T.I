import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Parabens() {
  const navigate = useNavigate();

  const reiniciarJogo = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Parabéns!</h1>
      <p>Você completou o quiz com sucesso!</p>
      <button onClick={reiniciarJogo}>Voltar ao Início</button>
    </div>
  );
}

export default Parabens;
