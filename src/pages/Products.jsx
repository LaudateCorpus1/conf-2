/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react'
import { Link } from '@reach/router'
import AppContext from "../context/AppContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './styles/services.css'
import './styles/products.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);
function Products () {
  const {state} =useContext(AppContext)
  const { products } = state;
  return (
    <>
      
        <div className="content">
        <div className="title-event">
          <p>
             Productos

          </p>
          </div>
          <div className="Products_detail">
          <Swiper
            spaceBetween={50}
            navigation
            slidesPerView={3}
             loop={true}
            /* autoplay={{ delay: 2500, disableOnInteraction: false }} */
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
          {products.map((product, i) => (
            <SwiperSlide key={product+i}>
                      <div key={i} className="content-swiper">
                      <div className="content-imagen">
                     
                        <img src={product.image} alt={product.name}/>
                      </div>
                        <div className="detalle">
                          <p className="detail-title">{product.name}</p>
                          <p className="detail-price">{product.price}</p>
                          <div className="little-description">
                              <div className="breve">{product.breve}</div>
                          </div>
                          
                              { product.buttontype === 'comprar' ? 
                              <div className="content-button">
                            <div className="content-bo">
                              <button className="button-whatsapp" type="button">
                              <a class="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51950653902&text=${product.mensaje}`} rel="noopener noreferrer" target="_blank">
                                 <i class="fab fa-whatsapp"></i> {product.buttontype}
                                 </a>
                                </button> 
                                
                                
                                </div>
                                <div className="content-bt">
                                <Link className="detail-ver" to={`/${product.tipo}/${product.details}`}>ver más</Link>
                                </div>
                                </div>

                                : 
                                <div className="content-button-disable">
                                  <div className="button-whatsapp-disable">{product.buttontype}</div>
                                </div>
                                
                            
                            }
                            
                            
                          
                        </div>
                    </div>
              </SwiperSlide>
                ))}
          </Swiper>
          </div>
        </div>
      
    </>
  )
}

export default Products;