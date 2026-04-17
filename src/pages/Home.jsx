import Hero from '../assets/hero.jpeg'
import About from '../assets/about.jpg'
import RegisterIcon from '../assets/register.png'
import './home.css'
import { FaRegStar,FaHistory } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";

function Home() {


  return (
    <div className='home-container'>

      <div className='hero'>
        <div className='hero-content'>
          <h1 className='hero-title'>ACOMPANHE SUA EVOLUÇÃO</h1>
          <p className='hero-subtitle'>Registre seus treinos e supere seus limites!</p>
          <button className='hero-button'>COMEÇAR</button>
        </div>
        <img className='hero-img' src={Hero} alt="" />

      </div>



      <div className='about-container'>
        <img className='about-img' src={About} alt="" />

        <div className='about-content'>

          <div className='about-top'>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
            <h1>SOBRE NÓS</h1>
          </div>


          <div className='about-list'>

            <div className='about-item'>
              <img className='about-icon' src={RegisterIcon} height={40} alt="" />
              <h3>REGISTRE</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi illum maxime, iusto iure corporis molestiae.</p>
            </div>

            <div className='about-item'>
              <FaPeoplePulling className='about-icon' size={40} color='#F16D10'/>
              <h3>ACOMPANHE</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi illum maxime, iusto iure corporis molestiae.</p>
            </div>


            <div className='about-item'>
              <FaRegStar className='about-icon' size={40} color='#F16D10'/>
              <h3>FAVORITE</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi illum maxime, iusto iure corporis molestiae.</p>
            </div>


            <div className='about-item'>
              <FaHistory className='about-icon' size={40} color='#F16D10'/>
              <h3>HISTÓRICO</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi illum maxime, iusto iure corporis molestiae.</p>
            </div>




          </div>


        </div>
      </div>

    </div>

  );
}

export default Home;