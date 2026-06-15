import { Link } from "react-router-dom";
import { FaRegStar, FaHistory } from "react-icons/fa";

import "./header.css";

export default function Header() {
  return (
    <div className="header">

      <div className="header-content">

        <Link to="/">
          <h1 className="logo">
            <span className="span-logo">REP</span>NOX
          </h1>
        </Link>

        <div className="navbar">

          <Link to="/favoritos">

            <span className="texto">FAVORITOS</span>

            <FaRegStar className="icone" />

          </Link>

          <Link to="/historico">

            <span className="texto">HISTÓRICO</span>

            <FaHistory className="icone" />

          </Link>

        </div>

      </div>

    </div>
  );
}