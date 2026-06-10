import { Link } from 'react-router-dom';
import './header.css'
export default function Header() {
 

  return (
    <div className="header">
      <div className='header-content'>

    <Link to='/'>
      <h1 className='logo'><span className='span-logo'>REP</span>NOX</h1>
      </Link>
    
      <div className='navbar'>
        <Link to="/favoritos">FAVORITOS</Link>
        <Link to="/historico">HISTÓRICO</Link>
      </div>
      </div>
    </div>
  );
}

