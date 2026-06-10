import { Link } from "react-router-dom";
import "./exercicio.css";
import treinos from "../data/exercicios.json";
import { useState } from "react";

function Favoritos() {
const [favoritos] = useState(() => {
    const salvo = localStorage.getItem("favoritos");
    return salvo ? JSON.parse(salvo) : [];
  });

  const exerciciosFiltrados = treinos.exercicios.filter((item) =>
    favoritos.includes(item.id)
  );

  return (
    <div className="exercicio-container">
      <div className="exercicio-content">
        <h1 className="exercicio-title">Favoritos</h1>

        <div className="card-container">
          {exerciciosFiltrados.map((item) => (
            <Link to={`/exercicio/${item.id}`}>
              <div className="card" key={item.id}>
                <img src={item.imagem} alt="" />
                <h1>{item.nome}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favoritos;
