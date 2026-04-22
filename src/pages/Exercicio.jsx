import { Link, useParams } from 'react-router-dom';
import './exercicio.css'
import treinos from "../data/exercicios.json";
import { IoSearch } from "react-icons/io5";

function Exercicios() {
const { musculo } = useParams();

  const exercicios = treinos.exercicios.filter(
    (item) => item.musculo === musculo
  );


  return (
    <div className='exercicio-container'>
    
    <div className='exercicio-content'>

    <h1 className='exercicio-title'>Exercicios de {musculo}</h1>

    <div className='buscar'>
    <input type="text" />
    <IoSearch className='icon' />
    </div>
   


    <div className='card-container'>
     {exercicios.map((item)=>(
        <Link to={`/exercicio/${item.id}`}>
        <div className='card' key={item.id}>
            <img src={item.imagem} alt="" />
            <h1>{item.nome}</h1>
        </div>
        </Link>
     )
        
       
     )}

     </div>

    </div>

    </div>

  );
}

export default Exercicios;