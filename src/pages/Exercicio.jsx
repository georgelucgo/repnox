import { Link, useParams } from "react-router-dom";
import "./exercicio.css";
import treinos from "../data/exercicios.json";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

function Exercicios() {
  const { musculo } = useParams();
  const [busca, setBusca] = useState("");
  const exerciciosFiltrados = treinos.exercicios
  .filter((item) => item.musculo === musculo)
  .filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="exercicio-container">
      <div className="exercicio-content">
        <h1 className="exercicio-title">Exercicios de {musculo}</h1>

        <div className="buscar">
          <input
            type="text"
            placeholder=""
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <IoSearch className="icon" />
        </div>

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

export default Exercicios;
