/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react'
import { Link } from '@reach/router'
import AppContext from "../context/AppContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './styles/services.css'
import Products from "../pages/Products";

function Services () {
  const {state} =useContext(AppContext)
  const { services } = state;
  return (
    <>
      <div className="content_services">
        <div className="content">
          <div className="title-event">
          <p>
            Mis Servicios

          </p>
          </div>
          
          <div className="services_detail">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
          {services.map((service, i) => (
            <SwiperSlide key={service+i}>
                      <div key={i} className="content-swiper">
                      <div className="content-imagen">
                     
                        <img src={service.image} alt={service.name}/>
                      </div>
                        <div className="detalle">
                          <p className="detail-title">{service.name}</p>
                          <p className="detail-price">{service.price}</p>
                          <div className="little-description">
                              <div className="breve">{service.breve}</div>
                          </div>
                          <div className="content-button">
                            <div className="content-bo">
                            <button className="button-whatsapp" type="button">
                            <a class="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51950653902&text=${service.mensaje}`} rel="noopener noreferrer" target="_blank">
                               <i class="fab fa-whatsapp"></i> Solicitarlo
                               </a>
                              </button>
                            </div>
                            <div className="content-bt">
                            <Link className="detail-ver" to={`/${service.tipo}/${service.details}`}>ver más</Link>
                            </div>
                          </div>
                        </div>
                    </div>
              </SwiperSlide>
                ))}
          </Swiper>
          </div>
          <div className="details-products">
            <Products/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;