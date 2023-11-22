import { useContext } from "react";
import { UserContext } from "../../providers/UserContext"

export const NavBar = () => {
  const { user, logoutUser} = useContext(UserContext);

  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">TaskApp</span>
        {user !== null &&
          <span style={{ color: 'white' }}>
            {user.username}
            <button className="btn btn-light btn-sm ms-4" onClick={logoutUser}>Cerrar sesion</button>
          </span>
        }
      </div>
    </nav>
  );
}