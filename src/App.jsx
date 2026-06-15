import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/header";
import Exercicios from "./pages/Exercicio";
import Detalhes from "./pages/Detalhes";
import Historico from "./pages/historico";
import Favoritos from "./pages/Favoritos";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  useEffect(() => {

    function ficouOnline() {
      toast.success("Conexão restabelecida");
    }

    function ficouOffline() {
      toast.error("Modo offline ativado");
    }

    window.addEventListener("online", ficouOnline);

    window.addEventListener("offline", ficouOffline);

    return () => {
      window.removeEventListener("online", ficouOnline);

      window.removeEventListener("offline", ficouOffline);
    };

  }, []);

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

      <ToastContainer
        theme="dark"
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
      />
    </BrowserRouter>
  );
}

export default App;