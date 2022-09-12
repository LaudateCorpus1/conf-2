import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './styles/styleSerOne.css';
import imgDetail1 from '../../images/detalle-ser-3.jpg';
import imgDetail2 from '../../images/detalle-ser-3-2.jpg';
import Zoom from '../../images/zoom.svg';

const ServiceEight = () => {
	const { state } = useContext(AppContext);
	const { services } = state;

	return (
		<>
			<div className="content_service-detail">
				<div className="header-service-3">
					<div className="header-content">
						<div className="overlay">
							<div className="content-title">
								<p>{services[7].name}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="content-service">
					<div className="info-parrafo">
						<p className="information">
							La Terapia de Respuesta Espiritual es una terapia, que busca
							laborar con la parte espiritual del paciente, a través de su
							conexión con el yo superior, en donde se usa una técnica de
							preguntas y respuestas que permiten mover la parte energética del
							paciente, con el objeto de armonizar y equilibrar los aspectos que
							pudieran estar bloqueados en su vida.
							<br />
							<br />
							Aquí se trabaja directamente con el akasha y el yo superior,
							mediante gráficos y el péndulo de Isis logramos canalizar y
							encontrar los bloqueos que se encuentran en el campo energético
							del paciente.
							<br />
							<br />
							Podemos localizar desde bloqueos físicos, bloqueos emocionales
							hasta bloqueos kármicos que cargamos de vidas pasadas y
							pre-programación del espíritu.
							<br />
							<br />
							En cada aspecto trabajado, solicitaré la limpieza de la vibración
							negativa detectada, para liberar los bloqueos energéticos que
							pueda tener el paciente, y así, limpiar algún desequilibrio
							relacionado con la información emocional y espiritual que pueda
							estar cargando el alma y poder alcanzar el bienestar.
							<br />
							<br />
							<b> La sesión se da en dos etapas:</b>
							<br />
							<br />
							La detección y limpieza de los bloqueos.
							<br />
							<br />
							La sesión online para realizar la sanación akáshica y así alcanzar
							la máxima liberación del espíritu.
							<br />
							<br />
						</p>

						<div className="content-payment">
							<div className="content-pay">
								<div className="columnOne">
									<div className="name-column">
										<p>Sesión: </p>
									</div>
									<div className="icon-column">
										<p>{services[7].hora}</p>
									</div>
								</div>
								<div className="columnOne">
									<div className="name-column">
										<p>Precio: </p>
									</div>
									<div className="icon-column">
										<p>{services[7].price}</p>
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
									href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[7].mensaje}`}
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

export default ServiceEight;
