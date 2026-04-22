import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./detalhes.css";
import treinos from "../data/exercicios.json";
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";

function Detalhes() {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [historico, setHistorico] = useState(() => {
    const salvo = localStorage.getItem("historico");

    if (salvo) return JSON.parse(salvo);

    return treinos.historico || [];
  });
  const [data, setData] = useState("");
  const [series, setSeries] = useState(0);
  const [peso, setPeso] = useState(0);
  const [reps, setReps] = useState(0);
  const [editando, setEditando] = useState(null);
  const [favoritos, setFavoritos] = useState(() => {
    const salvo = localStorage.getItem("favoritos");
    return salvo ? JSON.parse(salvo) : [];
  });

  const navigate = useNavigate();

  const exercicios = treinos.exercicios.filter(
    (item) => item.id === Number(id),
  );

  useEffect(() => {
    localStorage.setItem("historico", JSON.stringify(historico));
  }, [historico]);

  useEffect(() => {
    if (editando) {
      setData(editando.data);

      const ex = editando.exercicios[0];
      setSeries(ex.series);
      setPeso(ex.peso);
      setReps(ex.repeticoes);
    }
  }, [editando]);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  let dataFormatada = "";

  if (data) {
    const [ano, mes, dia] = data.split("-");
    dataFormatada = new Date(ano, mes - 1, dia).toLocaleDateString("pt-BR");
  }

  const adicionarTreino = () => {
    const novoTreino = {
      id: Date.now(),
      data: dataFormatada,
      musculo: exercicios[0].musculo,
      exercicios: [
        {
          id: id,
          series: series,
          repeticoes: reps,
          peso: peso,
        },
      ],
    };

    setHistorico([...historico, novoTreino]);
    setModal(false);
  };

  const removerTreino = (id) => {
    setHistorico((prev) => prev.filter((treino) => treino.id !== id));
  };

  console.log(historico);

  const salvarEdicao = () => {
    setHistorico((prev) =>
      prev.map((treino) => {
        if (treino.id !== editando.id) return treino;

        return {
          ...treino,
          data: dataFormatada,
          exercicios: [
            {
              ...treino.exercicios[0],
              series,
              repeticoes: reps,
              peso,
            },
          ],
        };
      }),
    );

    setEditando(null);
    setModal(false);
  };

  const historicoFiltrado = historico.filter((treino) =>
    treino.exercicios.some((ex) => Number(ex.id) === Number(id)),
  );

  console.log(historicoFiltrado);

  const favoritar = () => {
    const exercicioId = Number(id);

    if (favoritos.includes(exercicioId)) {
      setFavoritos(favoritos.filter((fav) => fav !== exercicioId));
    } else {
      setFavoritos([...favoritos, exercicioId]);
    }
  };

  return (
    <div className="detalhe-container">
      <div className="detalhe-content">
        {exercicios.map((item) => (
          <div className="detalhe-exercicio" key={item.id}>
            <div className="detalhe-exercicio-content">
              <div className="detalhe-title">
                <h1>{item.nome}</h1>
                <p>{item.descricao}</p>
              </div>

              <div className="detalhe-info">
                <div className="detalhe-info-left">
                  <img src={item.imagem} alt="" />
                  <h2>Grupo Muscular</h2>
                  <h2>Tipo do Exercício</h2>
                  <h2>Equipamento</h2>
                </div>

                <div className="detalhe-info-right">
                  <img src={item.musculoImagem} alt="" />
                  <p>{item.musculo}</p>
                  <p>{item.tipo}</p>
                  <p>{item.equipamento}</p>
                </div>
              </div>

              <div className="detalhe-tutorial">
                <h2>Como fazer?</h2>
                <p>{item.tutorial}</p>
              </div>
            </div>

            <div className="historico-container">
              <h2>Histórico</h2>

              <div className="historico-content">
                <h3>Data</h3>
                <h3>Séries</h3>
                <h3>Peso</h3>
                <h3>Repetições</h3>
              </div>

              <div className="historico">
                {historicoFiltrado.length > 0 ? (
                  historicoFiltrado.map((treino) => (
                    <div key={treino.id}>
                      {treino.exercicios.map((item) => (
                        <div className="historico-treino">
                          <p>{treino.data}</p>
                          <p>{item.series}</p>
                          <p>{item.peso}</p>
                          <p>{item.repeticoes}</p>

                          <div className="botoes">
                            <button
                              className="botao-editar"
                              onClick={() => {
                                setEditando(treino);
                                setModal(true);
                              }}
                            >
                              <FaEdit size={18} color="#fff" />
                            </button>

                            <button
                              onClick={() => removerTreino(treino.id)}
                              className="botao-deletar"
                            >
                              <FaTrash size={18} color="#fff" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  <div className="historico-sem-treino">
                    <p>Nenhum treino cadastrado</p>
                  </div>
                )}

                <div className="div-botao">
                  <button
                    className="botao-adicionar"
                    onClick={() => setModal(true)}
                  >
                    Adicionar
                  </button>
                </div>
              </div>

              {modal && (
                <div className="modal">
                  <div className="modal-content">
                    <IoIosCloseCircle
                      onClick={() => setModal(false)}
                      className="icon-fechar"
                      size={50}
                    />
                    <div className="input">
                      <label htmlFor="">Data</label>
                      <input
                        type="date"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                      />
                      <br />
                    </div>

                    <div className="input">
                      <label htmlFor="">Séries</label>
                      <input
                        type="text"
                        value={series}
                        onChange={(e) => setSeries(e.target.value)}
                      />
                      <br />
                    </div>

                    <div className="input">
                      <label htmlFor="">Peso</label>
                      <input
                        type="text"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                      />
                      <br />
                    </div>

                    <div className="input">
                      <label htmlFor="">Repetições</label>
                      <input
                        type="text"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                      />
                      <br />
                    </div>

                    <button
                      className="botao-registrar"
                      onClick={editando ? salvarEdicao : adicionarTreino}
                    >
                      {editando ? "Salvar" : "Registrar"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="botoes-final">
              <button className="botao-voltar" onClick={() => navigate(-1)}>
                Voltar
              </button>
              <button className="botao-favoritar" onClick={favoritar}>
                {favoritos.includes(Number(id)) ? "Favoritado" : "Favoritar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detalhes;
