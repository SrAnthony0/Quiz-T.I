import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

function RespostaErrada() {
  const { state } = useLocation();
  const { explicacao } = state || {};

  return (
    <div className="container">
      <h2>Resposta Errada</h2>
      {explicacao && <div className="explicacao">{explicacao}</div>}
      <button onClick={() => window.location.href = "/"}>Voltar para o início</button>
    </div>
  );
}

export default RespostaErrada;
