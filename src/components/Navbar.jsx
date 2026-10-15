import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="top-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          <Link className="navbar-brand" to="/">
            <div className="brand-icon">
              W
            </div>

            <div className="brand-text">
              <strong>Wesley Gabriel</strong>
              <span>Professor & Tecnologia</span>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarPrincipal"
            aria-controls="navbarPrincipal"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarPrincipal"
          >

            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/"
                >
                  Início
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/sobre"
                >
                  Sobre
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/projetos"
                >
                  Projetos
                </NavLink>
              </li>

              <li className="nav-item ms-lg-2">
                <NavLink
                  className="btn navbar-contact"
                  to="/contato"
                >
                  Fale comigo
                </NavLink>
              </li>

            </ul>

          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;