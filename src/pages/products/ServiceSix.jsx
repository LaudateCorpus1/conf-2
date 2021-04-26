import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'
import imgDetail1 from "../../images/detalle-ser-6-1.jpg";
import imgDetail2 from "../../images/detalle-ser-6-2.jpg";
import Zoom from "../../images/zoom.svg";

const ServiceSix= () => {
  const {state} = useContext(AppContext)
  const { services } = state;


  return (
    <>
      <div className="content_service-detail">
        <div className="header-service-6">
          <div className="header-content">
            <div className="overlay">
                <div className="content-title">
                    <p>
                      {services[4].name}
                    </p>
                </div>
              </div>
          </div>
        </div>
        
          
          <div className="content-service">
          <div className="info-parrafo">
              <p className="information">
              los registros akáshicos son los archivos de las memorias del alma. No es un espacio físico de esta dimensión, sino energético donde no existe el tiempo.  Aquí es donde se guardan los archivos que contienen la historia de toda la existencia. Todos los seres tienen su registro. En los registros se pueden ver las vivencias de reencarnaciones anteriores y nuestra tarea o misión en la reencarnación actual. 
              <br/><br/>
              Aquí se archiva todo lo que vivió un alma en sus diferentes reencarnaciones, lo que vive y probablemente lo que vivirá, pero no desde una forma adivinatoria, sino de posibles caminos. Los registros no tienen como fin ser una herramienta adivinatoria, se canaliza información que se encuentra en la akasha. 
              <br/><br/>
              La lectura y desbloqueo de registros se utiliza como un camino de autoconocimiento del alma. Su fin es ayudar en la solución de conflictos personales internos, pero como siempre, dependerá del paciente lograr mejorar. 

              </p>
              <div className="content-payment">
                <div className="content-pay">
                  <div className="columnOne">
                    <div className="name-column">
                     
                      <p>Sesión: </p>
                    </div>
                    <div className="icon-column">
                     
                      <p>{services[4].hora}</p>
                    </div>
                  </div>
                  <div className="columnOne">
                      <div className="name-column">
                    
                      <p>Precio: </p>
                    </div>
                    <div className="icon-column">
                      
                      <p>{services[4].price}</p>
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
                <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[4].mensaje}`} rel="noopener noreferrer" target="_blank">
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

export default ServiceSix;
