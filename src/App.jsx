import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/projetos"
          element={<Projetos />}
        />

        <Route
          path="/sobre"
          element={<Sobre />}
        />

        <Route
          path="/contato"
          element={<Contato />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;