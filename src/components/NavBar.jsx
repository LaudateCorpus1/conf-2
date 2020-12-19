import React,{ useState} from 'react'
import { Link as LinkRouter } from "@reach/router";
import Menu from '../images/bars-solid.svg'
import Close from '../images/times-solid.svg'
import logoAle from '../images/logo.png'
import "./styles/navbar.css";

const NavBar = () => {
  const [menu, setMenu] = useState(false)

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
  return (
    <div>
     <div className="content_navbar">
       <div className="content-nav">
       <div className="menu" onClick={toggleMenu}>
            <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <LinkRouter to="/"><img src={logoAle} alt=""/></LinkRouter>
            </div>
            <ul style={styleMenu}>
                <li className="navLink"><LinkRouter to="/">Inico</LinkRouter></li>
                <li className="navLink"><LinkRouter to="/conoceme">Conoceme</LinkRouter></li>
                <li className="navLink"><LinkRouter to="/servicios">Servicios</LinkRouter></li>
                <li className="navLink"><LinkRouter to="/contacto">Contact</LinkRouter></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

       </div>
     </div>
    </div>
  )
}

export default NavBar;