import "./historico.css";
import treinos from "../data/exercicios.json";
import { useState } from "react";

function Historico() {
  const [historico, setHistorico] = useState(() => {
    const salvo = localStorage.getItem("historico");
    return salvo ? JSON.parse(salvo) : [];
  });

  const exerciciosMap = {};

  treinos.exercicios.forEach((ex) => {
    exerciciosMap[ex.id] = ex;
  });

  const agrupado = {};

  historico.forEach((treino) => {
    const musculo = treino.musculo;

    if (!agrupado[musculo]) {
      agrupado[musculo] = {};
    }

    treino.exercicios.forEach((ex) => {
      const exId = Number(ex.id);

      if (!agrupado[musculo][exId]) {
        agrupado[musculo][exId] = [];
      }

      agrupado[musculo][exId].push({
        ...ex,
        data: treino.data,
      });
    });
  });

  function parseDataBR(data) {
    const [dia, mes, ano] = data.split("/");
    return new Date(`${ano}-${mes}-${dia}`);
  }

  function formatarData(data) {
    let dataFormatada = "";
    if (data) {
      const [ano, mes, dia] = data.split("-");
      dataFormatada = new Date(ano, mes - 1, dia).toLocaleDateString("pt-BR");
    }
    console.log(dataFormatada)
    return dataFormatada
  }
  
  return (
    <div className="h-container">
      <div className="h-content">
        <h1 className="h-title">HISTÓRICO DE EXERCÍCIOS</h1>

        {Object.keys(agrupado).map((musculo) => (
          <div className="h-historico" key={musculo}>
            <h1>{musculo}</h1>

            {Object.keys(agrupado[musculo]).map((exId) => {
              const exercicio = exerciciosMap[exId];

              return (
                <div className="h-card" key={exId}>
                  <div className="h-exercicio">
                    <img src={exercicio?.imagem} alt="" />
                    <h2>{exercicio?.nome}</h2>
                  </div>

                  <div className="h-historico-container">
                    <div className="h-header">
                      <p>Data</p>
                      <p>Séries</p>
                      <p>Peso</p>
                      <p>Repetições</p>
                    </div>

                    {[...agrupado[musculo][exId]]
                      .sort((a, b) => parseDataBR(b.data) - parseDataBR(a.data)) 
                      .slice(0, 4)
                      .map((item, index) => (
                        <div key={index} className="h-linha">
                          <p>{formatarData(item.data)}</p>
                          <p>{item.series}</p>
                          <p>{item.peso}</p>
                          <p>{item.repeticoes}</p>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Historico;
