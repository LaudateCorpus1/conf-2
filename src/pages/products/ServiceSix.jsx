import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './styles/styleSerOne.css';
import imgDetail1 from '../../images/detalle-ser-6-1.jpg';
import imgDetail2 from '../../images/detalle-ser-6-2.jpg';
import Zoom from '../../images/zoom.svg';

const ServiceSix = () => {
	const { state } = useContext(AppContext);
	const { services } = state;

	return (
		<>
			<div className="content_service-detail">
				<div className="header-service-6">
					<div className="header-content">
						<div className="overlay">
							<div className="content-title">
								<p>{services[4].name}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="content-service">
					<div className="info-parrafo">
						<p className="information">
							Los Registros Akáshicos son amor. Sabemos que el amor todo lo
							puede puede, pero, cuando ese Amor se convierte en Conciencia
							Cósmica, comprendemos que no hay límite en el conocimiento, entrar
							en la Biblioteca Universal, es llegar a la Sabiduría Infinita.
							<br />
							<br />
							Desde Los Registros Akáshicos recordamos nuestro poder y fuerza
							para comprender y sanar cualquier inconveniente humano, sea de la
							índole que sea. Toda esa sabiduría está en ti.
							<br />
							<br />
							Los registros Akáshicos se realizan con apertura del Akash, que es
							el libro álmico donde está escrita cada una de las encarnaciones a
							través de los tiempos, desde que nos desprendemos del Uno hasta
							que retornamos a Él, todo queda registrado allí.
							<br />
							<br />
							El Akasha es un término sánscrito que significa Sustancia primaria
							o éter, espacio o materia universal. También se le conoce como
							quinta esencia o sonido sagrado. Es el vacío que permite existir y
							manifestarse.
							<br />
							<br />
							En tu Registro encontramos memoria del espíritu donde se encuentra
							todo: recuerdos felices y no felices, inconsciente y todo lo que
							llamamos aprendizaje de vida. Esto permite ver qué cosas en la
							actualidad te suceden reiteradas veces, sin saber por qué y no te
							permiten avanzar.
							<br />
							<br />
							Los orígenes de estas reiteraciones pueden referirse a
							experiencias de las cuales no hemos sido conscientes en esta u
							otras encarnaciones.
							<br />
							<br />
							Hacerse una lectura de registro akáshico implica tomar conciencia
							de todas aquellas experiencias que pueden servirnos para
							desarrollarnos en el aquí y ahora, tomar contacto quizás con lo
							que eventualmente pudiéramos no estar haciendo para evolucionar y
							así poder corregir la marcha. Es una oportunidad única de
							reorientar nuestra alma a nuestro verdadero camino limpiando el
							campo vibracional, y alivianando el karma que quizás no nos
							permite avanzar, ya que los maestros Ascendidos te darán guía
							específica para ayudarte a evolucionar y resolver los bloqueos
							emocionales, psicológicos y espirituales presentes en tu vida.
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
										<p>
											<i className="">&nbsp;</i>
										</p>
										<p>modalidad: </p>
									</div>
									<div className="icon-column">
										<p className="i-pago">
											<i className="fab fa-whatsapp"></i>

											<img src={Zoom} alt="" />
										</p>
										<p>WhatsApp o Zoom </p>
									</div>
								</div>
								<div className="columnTwo">
									<div className="name-column">
										<p>
											<i className="">&nbsp;</i>
										</p>
										<p>Medio de pago: </p>
									</div>
									<div className="icon-column">
										<p className="i-pago">
											<i className="fab fa-cc-paypal"></i>
											<i className="fas fa-random"></i>
										</p>
										<p className="pago">Paypal o Transferencia</p>
									</div>
								</div>
							</div>

							<div className="sale-button">
								<a
									className="btn-whatsapp"
									href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[4].mensaje}`}
									rel="noopener noreferrer"
									target="_blank"
								>
									<button type="button">
										<i className="fab fa-whatsapp"></i> Solicitar
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="info-images">
						<div className="img">
							<img src={imgDetail1} alt="" />
						</div>
						<div className="img">
							<img src={imgDetail2} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceSix;
