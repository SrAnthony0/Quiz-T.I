import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Categoria({ setCategoria }) {
  const navigate = useNavigate();

  const categorias = ["Front-End", "Back-End", "Fullstack"];

  const selecionarCategoria = (categoria) => {
    setCategoria(categoria);
    navigate(`/pergunta/${categoria}`);
  };

  return (
    <div className="container">
      <h1>Escolha uma Categoria</h1>
      {categorias.map((categoria, index) => (
        <button key={index} onClick={() => selecionarCategoria(categoria)}>
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default Categoria;
