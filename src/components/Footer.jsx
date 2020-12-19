import React from 'react'
import './styles/footer.css'

 const Footer = () => {
  return (
    <>
     <div className="content_footer">
      <div className="content-layout">

      
       <div className="content_info">
         <div className="info">
           <p className="title-info">Contactame</p>
           <div className="">
            <p>Teléfono: +51(1) 456 1555</p>
            <p>correo: pisces@pisces.com</p>
            <p>direcion: pisces@pisces.com</p>
           </div>
         </div>
         <div className="redes">
            <p className="title-info">Sigueme:</p>
            <div className="icon-redes">
              <a href="www.faceo.com"><i class="fab fa-facebook-square"></i></a>
              <a href="www.faceo.com"><i class="fab fa-instagram"></i></a>

            </div>
         </div>
         <div className="explorer">
           <p className="title-info">Destacados</p>
           <div className="">
             <p>Conoceme</p>
             <p>servicios</p>
           </div>
         </div>
       </div>
       <div className="derechos">
         <p>© Copyright Pisces & Tonic 2020 -Todos los derechos reservados</p>
         <p>Diseñado y desarrollado por Leonardo Ramos</p>
       </div>
       </div>
     </div>
    </>
  )
}

export default Footer;
