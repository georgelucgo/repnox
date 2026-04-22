import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/header";
import Exercicios from "./pages/Exercicio";
import Detalhes from "./pages/Detalhes";
import Historico from "./pages/historico";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <BrowserRouter>
  <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicios/:musculo" element={<Exercicios />} />
        <Route path="/exercicio/:id" element={<Detalhes />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;