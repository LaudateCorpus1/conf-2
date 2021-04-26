import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'
import imgDetail1 from "../../images/detalle-ser-5-1.jpg";
import imgDetail2 from "../../images/detalle-ser-5-2.jpg";
import Zoom from "../../images/zoom.svg";

const ServiceFive= () => {
  const {state} = useContext(AppContext)
  const { services } = state;


  return (
    <>
      <div className="content_service-detail">
        <div className="header-service-5">
          <div className="header-content">
            <div className="overlay">
                <div className="content-title">
                    <p>
                      {services[3].name}
                    </p>
                </div>
              </div>
          </div>
        </div>
        
          
          <div className="content-service">
          <div className="info-parrafo">
              <p className="information">
             <b>¿Cómo es hacerse una Regresión?</b>  
              <br/><br/>
              Al realizar una Terapia regresiva, se vivencian experiencias de vidas anteriores, en lugares, tiempos y contextos socioculturales muy específicos.
              <br/><br/>
              Allí, en tu ser, hay una energía que, al finalizar cada etapa de vida, va recorriendo caminos por diferentes espacios y tiempos. Ahí donde puede haberse vivido alguna situación traumática o compleja, generando emocionalmente un trauma que luego se replica en existencias posteriores.
              <br/><br/>
              En las sesiones, además de indagar en tus vidas anteriores, también pueden experimentarse vivencias de gran importancia de tu existencia actual, como estar en el vientre materno, el nacimiento o los primeros meses de vida; no necesariamente siempre se regresa a vidas pasadas.
              <br/><br/>
              Esta Terapia breve y efectiva, entiende que esos traumas y conflictos que se produjeron en otras etapas de tu ser. Es posible resolver/ liberar esos traumas re-vivenciando la situación que le dio origen a éstos, agotando emocionalmente toda la energía reprimida y contenida en ese síntoma.
              <br/><br/>
              <b>¿Para qué sirve?</b>  
              <br/><br/>
              La Terapia de Regresión a Vidas Pasadas es un recurso de valor invaluable donde podrás permitirte explorar, observar y sanar tu pasado, para que puedas modificar ciertos programantes de vida, comprender el por qué y para qué, de algunas vivencias, conductas, patrones, ó fobias actuales, que bloquean o imposibilitan tu desarrollo humano HOY.
              <br/><br/>
              <b>¿Cualquiera puede hacer una Terapia de Regresión?</b>  
              <br/><br/>
              Es una terapia del tipo espiritual, por lo tanto cualquier persona que sienta necesidad de explorar esta parte de su Ser para hallar respuestas, es mas que bienvenido.
              <br/><br/>
              <b>¿Cuántas veces debo ir?</b> 
              <br/><br/>
              La frecuencia con que asistirá a las sesiones las determina el paciente; hay quienes asisten a una sola sesión y con eso basta para resolver la mayoría de sus conflictos, y hay quienes necesitan realizar 2, 3 ó 4 sesiones. Pero eso siempre será decisión del consultante.
              <br/><br/>
              Estarás en un espacio de contención, acompañamiento, y profesionalismo.
              <br/><br/>
              Hacer una Terapia de Regresión, es una experiencia maravillosa y movilizante. Es una Terapia que te confronta con tu propio ser en toda su evolución, reparando, sanando y liberando toda la energía reprimida por siglos o milenios.


              </p>
              <div className="content-payment">
                <div className="content-pay">
                  <div className="columnOne">
                    <div className="name-column">
                     
                      <p>Sesión: </p>
                    </div>
                    <div className="icon-column">
                     
                      <p>{services[3].hora}</p>
                    </div>
                  </div>
                  <div className="columnOne">
                      <div className="name-column">
                    
                      <p>Precio: </p>
                    </div>
                    <div className="icon-column">
                      
                      <p>{services[3].price}</p>
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
                <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[3].mensaje}`} rel="noopener noreferrer" target="_blank">
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

export default ServiceFive;
