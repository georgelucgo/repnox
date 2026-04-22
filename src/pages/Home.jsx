import Hero from "../assets/hero.jpeg";
import About from "../assets/about.jpg";
import RegisterIcon from "../assets/register.png";
import "./home.css";
import { FaRegStar, FaHistory } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import treinos from "../data/exercicios.json";
import { Link } from "react-router-dom";

function Home() {
  const agrupado = {};
  treinos.exercicios.forEach((item) => {
    if (!agrupado[item.musculo]) {
      agrupado[item.musculo] = [];
    }
    agrupado[item.musculo].push(item);
  });

  console.log(agrupado);

  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">ACOMPANHE SUA EVOLUÇÃO</h1>
          <p className="hero-subtitle">
            Registre seus treinos e supere seus limites!
          </p>
          <a href="#exercicios">
          <button className="hero-button">COMEÇAR</button>
          </a>
        </div>
        <img className="hero-img" src={Hero} alt="" />
      </div>

      <div className="about-container">
        <img className="about-img" src={About} alt="" />

        <div className="about-content">
          <div className="about-top">
            <h2>Organize seus treinos, acompanhe seu progresso e evolua todos os dias

 </h2>
            <h1>SOBRE NÓS</h1>
          </div>

          <div className="about-list">
            <div className="about-item">
              <img
                className="about-icon"
                src={RegisterIcon}
                height={40}
                alt=""
              />
              <h3>REGISTRE</h3>
              <p>
                Registre seus treinos de forma rápida e prática, anotando séries, peso e repetições para acompanhar sua evolução.
              </p>
            </div>

            <div className="about-item">
              <FaPeoplePulling
                className="about-icon"
                size={40}
                color="#F16D10"
              />
              <h3>ACOMPANHE</h3>
              <p>
                Visualize seu progresso ao longo do tempo e entenda como seu desempenho está evoluindo a cada treino.
              </p>
            </div>

            <div className="about-item">
              <FaRegStar className="about-icon" size={40} color="#F16D10" />
              <h3>FAVORITE</h3>
              <p>
                Salve seus exercícios favoritos e tenha acesso rápido aos treinos que você mais utiliza no seu dia a dia.
              </p>
            </div>

            <div className="about-item">
              <FaHistory className="about-icon" size={40} color="#F16D10" />
              <h3>HISTÓRICO</h3>
              <p>
                Consulte todo o seu histórico de treinos e acompanhe sua evolução de forma organizada e detalhada.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="exercicios" className="exercicios-container">
        <div className="exercicios-title">
          <p>Escolha um conjunto</p>
          <h1>EXERCICIOS</h1>
        </div>

        <div className="exercicios-card-container">
          {Object.keys(agrupado).map((musculo) => {
            const exercicio = agrupado[musculo][0];

            return (
              <Link to={`exercicios/${musculo}`}>
              <div className="exercicios-card" key={musculo}>
                <img src={exercicio.imagem} alt="" />
                <div className="exercicios-card-text">
                <h1>{musculo}</h1>
                <p>{treinos.musculos[musculo]}</p>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
