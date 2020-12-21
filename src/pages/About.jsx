import React from 'react'
import './styles/about.css'
import alexia from './../images/about-back.png'
import alexiaMobile from './../images/about-mobile.png'

 const Home = () => {
  return (
    <>
      <div className="content_about">
        <div className="content_about-global desktop">
          <div className="content_img-about">
            <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="about-img">
            <img src={alexia} alt=""/>
          </div>
          </div>
          <div className="content_detail-about">
            <div className="info-autor">
              <p>
              Mi nombre es <i>Alexia Fernandez</i>  soy <b>astrologa</b>, <b>terapeuta holistica</b> y <b>canalizadora</b>. Estoy aqui para ayudarte y acompañarte en tu camino por esta tierra. 
              <br/><br/>
            Los sucesos que vivi a lo largo de mi vida  me permitieron expandir mi consciencia y darme cuenta que somos mas que materia, mas que un cuerpo fisico, somos un ser completo en toda la dimensión. Somos parte de un infinito y ese infinito vive en el interior de cada uno de nosotros. Empece mi camino espiritual aprendiendo astrologia vedica, siguiendo con estudios en astrologia psicologica, eniologia y numerologia pitagorica. Ahora he decidido ayudar a quienes necesitan guia en este transito, por eso decidi abrir este espacio, para que cada uno de los que pase por aquí, pueda reencontrarse con esa luz que vive en su interior.
              </p>
            </div>
          </div>

          
        </div>

        <div className="content_about-global mobile">
          <div className="content_img-about">
            <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="about-img">
            <img src={alexiaMobile} alt=""/>
          </div>
          </div>
          <div className="content_detail-about">
            <div className="info-autor">
              <p>
              Mi nombre es <i>Alexia Fernandez</i>  soy <b>astrologa</b>, <b>terapeuta holistica</b> y <b>canalizadora</b>. Estoy aqui para ayudarte y acompañarte en tu camino por esta tierra. 
              <br/><br/>
            Los sucesos que vivi a lo largo de mi vida  me permitieron expandir mi consciencia y darme cuenta que somos mas que materia, mas que un cuerpo fisico, somos un ser completo en toda la dimensión. Somos parte de un infinito y ese infinito vive en el interior de cada uno de nosotros. Empece mi camino espiritual aprendiendo astrologia vedica, siguiendo con estudios en astrologia psicologica, eniologia y numerologia pitagorica. Ahora he decidido ayudar a quienes necesitan guia en este transito, por eso decidi abrir este espacio, para que cada uno de los que pase por aquí, pueda reencontrarse con esa luz que vive en su interior.
              </p>
            </div>
          </div>

          
        </div>
       
      </div>

    </>
  )
}

export default Home;