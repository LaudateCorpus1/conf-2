import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'
import imgDetail1 from "../../images/detalle-ser-1.jpg";
import imgDetail2 from "../../images/detalle-ser-1-2.jpg";
import Zoom from "../../images/zoom.svg";

const ServiceOne = () => {
  const {state} = useContext(AppContext)
  const { services } = state;


  console.log(services)


  return (
    <>
      <div className="content_service-detail">
        <div className="header-service">
          <div className="header-content">
            <div className="overlay">
                <div className="content-title">
                    <p>
                      {services[0].name}
                    </p>
                </div>
              </div>
          </div>
        </div>
        
          
          <div className="content-service">
          <div className="info-parrafo">
              <p className="information">
              El tarot es una  de las mancias mas antiguas del mundo, pero no solo es eso, tambien es una herramienta terapéutica  muy profunda que nos ayuda a reflexionar sobre nuestra propia realidad. 
              <br/><br/>
              El tarot evolutivo no es para predecir el futuro, es una herramienta que nos permite volvernos conscientes e iluminar nuestros caminos.
              <br/><br/>
              En el tarot evolutivo o psicotarot no te predisponemos al futuro, soy consciente de que tu eres el unico creador de tu destino y que todo esta en tus manos. 
              <br/><br/>
              En la sesion podras conectarte contigo mismo (a) entendiendo las situaciones desde una perspectiva distinta. El universo te guiara a traves de esta herramienta tan valiosa. 
              <br/><br/>
             <b> Las lecturas disponibles son: </b>
              <br/>
              Preguntas especificas. Se abre una tirada para analizar cada pregunta sobre los temas que mas te causen inquietud y asi poder darte la respuesta que necesitas para elegir el camino correcto.
              <br/><br/>
              <b>Lectura anual: </b>
              <br/>
              Se abre una tirada donde podremos obtener información concreta sobre hechos en el año siguiente desde el mes de la sesión. 
              </p>
              <div className="content-payment">
                <div className="content-pay">
                  <div className="columnOne">
                    <div className="name-column">
                     
                      <p>Sesión: </p>
                    </div>
                    <div className="icon-column">
                     
                      <p>{services[0].hora}</p>
                    </div>
                  </div>
                  <div className="columnOne">
                      <div className="name-column">
                    
                      <p>Precio: </p>
                    </div>
                    <div className="icon-column">
                      
                      <p>{services[0].price}</p>
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
                      <p className="i-pago" ><i class="fab fa-whatsapp"></i>
                      
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
                      <p className="i-pago"><i class="fab fa-cc-paypal"></i><i class="fas fa-random"></i></p>
                      <p className="pago">Paypal o Transferencia</p>
                    </div>
                  </div>
                </div>


                <div className="sale-button">
                <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[0].mensaje}`} rel="noopener noreferrer" target="_blank">
                    <button type="button">
                    <i class="fab fa-whatsapp"></i> Solicitar
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

export default ServiceOne;
