import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'
import imgDetail1 from "../../images/detalle-ser-7-2.jpg";
import imgDetail2 from "../../images/detalle-ser-7-1.jpg";
import Zoom from "../../images/zoom.svg";

const ServiceSeven= () => {
  const {state} = useContext(AppContext)
  const { services } = state;


  return (
    <>
      <div className="content_service-detail">
        <div className="header-service-7">
          <div className="header-content">
            <div className="overlay">
                <div className="content-title">
                    <p>
                      {services[5].name}
                    </p>
                </div>
              </div>
          </div>
        </div>
        
          
          <div className="content-service">
          <div className="info-parrafo">
              <p className="information">
              Es una carta muy parecida a la carta natal pero que se inicia en el Nodo Norte de la Luna. A veces se refieren a ella como el Zodíaco del Alma. Por ser una rama de la astrología que inicia en el Nodo Norte de la Luna se trata mucho del tema subconsciente. La Luna es uno de los “planetas” que más nos habla del mundo subconsciente, el mundo emocional, o se podría decir, lo más íntimo. 
              <br/><br/>
            En esta carta se ven más vivencias del tipo emocional/almico. En esta carta los planetas refieren a otro plano de percepción más inconsciente y profundo, más de la psiquis.  Muchas veces sucede que leemos nuestro signo en el zodíaco y más aún en la lectura de la carta natal parece que falta como una pieza, sería como leer el aura de la persona. 
            <br/><br/>
            La verdadera interpretación de la carta dracónica es cuando se superpone con la carta natal. Cuando integramos ambas cartas es cuando se ve el valor real de la carta draconica. Es cuando permitimos que se integren ambas energías. 
            <br/><br/>
            En la carta dracónica hay una visión que va mucho más allá del plano físico, está muy asociada a nuestro karma y cuerpo astral, nos habla de temas muy íntimos que no manifestamos pero que viven en nuestro espacio más profundo, más íntimo.  
            <br/><br/>
            De igual manera se necesita hora, fecha y lugar exacto de nacimiento. 
              </p>
              <div className="content-payment">
                <div className="content-pay">
                  <div className="columnOne">
                    <div className="name-column">
                     
                      <p>Sesión: </p>
                    </div>
                    <div className="icon-column">
                     
                      <p>{services[5].hora}</p>
                    </div>
                  </div>
                  <div className="columnOne">
                      <div className="name-column">
                    
                      <p>Precio: </p>
                    </div>
                    <div className="icon-column">
                      
                      <p>{services[5].price}</p>
                    </div>
                  </div>
                </div>
                <div className="content-pay">
                  <div className="columnTwo">
                    <div className="name-column">
                    <p><i className="">&nbsp;</i></p>
                    <p>modalidad: </p>
                    </div>
                    <div className="icon-column">
                      <p className="i-pago" ><i className="fab fa-whatsapp"></i>
                      
                        <img src={Zoom} alt=""/>
                      
                      </p>
                      <p >WhatsApp o Zoom </p>
                    </div>
                  </div>
                  <div className="columnTwo">
                    <div className="name-column">
                    <p><i className="">&nbsp;</i></p>
                    <p>Medio de pago: </p>
                    </div>
                    <div className="icon-column">
                      <p className="i-pago"><i className="fab fa-cc-paypal"></i><i className="fas fa-random"></i></p>
                      <p className="pago">Paypal o Transferencia</p>
                    </div>
                  </div>
                </div>


                <div className="sale-button">
                <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[5].mensaje}`} rel="noopener noreferrer" target="_blank">
                    <button type="button">
                    <i className="fab fa-whatsapp"></i> Solicitar
                    </button>
                    </a>
                </div>
              </div>
            </div>
            <div className="info-images">
              <div className="img">
                <img src={imgDetail1} alt=""/>
              </div>
              <div className="img">
                <img src={imgDetail2} alt=""/>
              </div>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default ServiceSeven;
