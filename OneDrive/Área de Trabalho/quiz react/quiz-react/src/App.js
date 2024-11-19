import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Categoria from "./components/Categoria";
import Pergunta from "./components/Pergunta";
import RespostaErrada from "./components/RespostaErrada";
import Parabens from "./components/Parabens";
import "./App.css";

function App() {
  const [categoria, setCategoria] = useState("");
  const [pontuacao, setPontuacao] = useState(0);
  const [rodadas, setRodadas] = useState(1);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/categoria"
          element={<Categoria setCategoria={setCategoria} />}
        />
        <Route
          path="/pergunta/:categoria"
          element={
            <Pergunta
              categoria={categoria}
              rodadas={rodadas}
              setRodadas={setRodadas}
              pontuacao={pontuacao}
              setPontuacao={setPontuacao}
            />
          }
        />
        <Route path="/respostaErrada" element={<RespostaErrada />} />
        <Route path="/parabens" element={<Parabens />} />
      </Routes>
    </Router>
  );
}

export default App;
