import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import CreateCharacter from './pages/CreateCharacter';
import CharacterSheet from './pages/CharacterSheet';

function App() {
  return (
    <Router>
      {/** Componente de Cabeçalho com links de navegação */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-personagem" element={<CreateCharacter />} />
        <Route path="/ficha" element={<CharacterSheet />} />
      </Routes>
    </Router>
  );
}

export default App;