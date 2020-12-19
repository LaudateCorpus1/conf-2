/* eslint-disable jsx-a11y/alt-text */
import React, { useContext} from 'react'
import { Link } from '@reach/router'
import AppContext from "../context/AppContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './styles/services.css'

function Services () {
  const {state} =useContext(AppContext)
  const { products } = state;
  return (
    <>
      <div className="content_services">
        <div className="content">
          <p>Mis Servicios

          </p>
          <div className="services_detail">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
          {products.map((product, i) => (
            <SwiperSlide key={product+i}>
                      <div key={i} className="content-swiper">
                      <div className="content-imagen">
                     
                        <img src={product.image} alt={product.title}/>
                      </div>
                        <div className="detalle">
                          <p>{product.title}</p>
                          <Link to={`/servicio/${product.id}`}>
                          <p>vermas</p>
                          </Link>
                          <div className="">
                            <button type="button">solicitar</button>
                          </div>
                        </div>
                    </div>
              </SwiperSlide>
                ))}
          </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;