import React from 'react'
import './styles/home.css'
import logoheader from '../images/logo-header.png'
import { Link } from '@reach/router'

 const Home = () => {
  return (
    <>
      <div className="content_home">
        <div className="content_home-global">
          <div className="content_img"></div>
          <div className="content_detail"></div>
          <div className="logo-lettering">
              <div className="logo-psd">
              <img src={logoheader} alt=""/>
              </div>

              <div className="read-me">
              <Link to="/conoceme">
              ver más
                </Link>  
              </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default Home;