import Hero from '../assets/hero.jpeg'
import './home.css'

function Home() {
 

  return (
    <div className='home-container'>

    <div className='hero'>


      <div className='hero-content'>
      <h1 className='hero-title'>ACOMPANHE SUA EVOLUÇÃO</h1>
      <p className='hero-subtitle'>Registre seus treinos e supere seus limites!</p>
      <button className='hero-button'>SAIBA MAIS</button>
      </div>
     <img className='hero-img' src={Hero} alt="" />

    </div>
        </div>

  );
}

export default Home;