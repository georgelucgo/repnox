import { Link } from 'react-router-dom';
import './header.css'
export default function Header() {
 

  return (
    <div className="header">
      <div className='header-content'>

      <h1 className='logo'><span className='span-logo'>REP</span>NOX</h1>
    
      <div className='navbar'>
        <Link to="/#secao-exercicios">EXERCÍCIOS</Link>
        <Link to="/favoritos">FAVORITOS</Link>
        <Link to="/historico">HISTÓRICO</Link>
      </div>
      </div>
    </div>
  );
}

