import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { perguntasPorCategoria } from "../Perguntas";
import "../App.css";

function Pergunta({ categoria, rodadas, setRodadas, pontuacao, setPontuacao }) {
  const [tempo, setTempo] = useState(120);
  const navigate = useNavigate();

  const perguntas = perguntasPorCategoria[categoria];
  const perguntar = perguntas[rodadas - 1];

  useEffect(() => {
    if (rodadas > 5 && rodadas <= 10) setTempo(60);
    if (rodadas > 10) setTempo(30);
  }, [rodadas]);

  const resetGame = useCallback(() => {
    setRodadas(1);
    setPontuacao(0);
  }, [setRodadas, setPontuacao]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (tempo > 0) {
        setTempo(tempo - 1);
      } else {
        resetGame();
        navigate("/respostaErrada", { state: { explicacao: perguntar.explicacao } });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [tempo, resetGame, navigate, perguntar]);

  const verificarResposta = (opcao) => {
    if (opcao === perguntar.respostaCorreta) {
      setPontuacao(pontuacao + 1);
      if (rodadas < 15) {
        setRodadas(rodadas + 1);
      } else {
        navigate("/final");
      }
    } else {
      resetGame();
      navigate("/respostaErrada", { state: { explicacao: perguntar.explicacao } });
    }
  };

  return (
    <div className="container">
      <div className="counter">Pergunta {rodadas} de 15</div>
      <div className="timer">Tempo Restante: {tempo}s</div>
      <h2>{perguntar.pergunta}</h2>
      {perguntar.alternativas.map((opcao, index) => (
        <button key={index} onClick={() => verificarResposta(opcao)}>
          {opcao}
        </button>
      ))}
    </div>
  );
}

export default Pergunta;
