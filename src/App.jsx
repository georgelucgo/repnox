import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/header";
import Exercicios from "./pages/Exercicio";
import Detalhes from "./pages/Detalhes";
import {  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
  <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicios/:musculo" element={<Exercicios />} />
        <Route path="/exercicio/:id" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;