import React from 'react'
import { Routes, Route, Link, Outlet, Switch, Redirect} from 'react-router-dom';
             
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';
          
import Home from '../public/Home';
import Informacion from '../public/Informacion'
import LoginForm from '../login/LoginForm';
import Noticias from '../public/noticias';
import dashboard from '../public/dashboard';






const BarraRutasPublic = () => {
    const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
  
    const handleSignOut = () => {
      if (user) {
        signOut(auth)
          .then(() => {
            // Cierre de sesión exitoso
            navigate('/home'); // Redirigir a ruta /home
          })
          .catch((error) => {
            console.error('Error al cerrar sesión:', error);
          });
      }
    }
    
    
    
  
    return (
      <div style={{ background:"greenyellow", }}>
        <nav>
          <div id="login">
            <ul>
            {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
              )}
  
  
            </ul>
          </div>
          
          <div id="menu">
            <ul>
            <li><Link to="/Noticias">Noticias</Link> </li>
             <li><Link to="/Informacion">Informacion</Link> </li>
              <li><Link to="/dashboard">Portada(Dashboard)</Link> </li>
              <li><Link to="/Home">Home</Link> </li>
            </ul>
          </div>
        </nav>
  
        <Routes>
          <Route path="/Iniciarsesion" element={<LoginForm/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Ddashboard" element={<dashboard />} />
          <Route path="/Informacion" element={<Informacion />} />
          <Route path="/Noticias" element={<Noticias />} />


        </Routes> 
      </div>
    )
}

export default BarraRutasPublic;

/*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
              )}
  
  
  /*


/*
const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Cierre de sesión exitoso
          navigate('/home'); // Redirigir a ruta /home
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
    }
  }
*/

