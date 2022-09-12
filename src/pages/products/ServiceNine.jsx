import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './styles/styleSerOne.css';
import imgDetail1 from '../../images/detalle-ser-3.jpg';
import imgDetail2 from '../../images/detalle-ser-3-2.jpg';
import Zoom from '../../images/zoom.svg';

const ServiceNine = () => {
	const { state } = useContext(AppContext);
	const { services } = state;

	return (
		<>
			<div className="content_service-detail">
				<div className="header-service-3">
					<div className="header-content">
						<div className="overlay">
							<div className="content-title">
								<p>{services[8].name}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="content-service">
					<div className="info-parrafo">
						<p className="information">
							<b>Reconfiguración, Desmagnetización y Recodificación</b>
							<br />
							<br />
							Quantum Vórtex es un método revolucionario de terapia energética
							creada por Daniel Cipolat, que está basado en la comprensión de
							los diferentes planos de conciencia, su propósito y su relación
							con la configuración energética y la codificación cuántica humana.
							<br />
							<br />
							Son 7 los niveles de conciencia a considerar a la hora de realizar
							una evaluación del estado energético de la persona.
							<br />
							<br />
							El término Quantum Vórtex, remite a la simplificación de dichos
							niveles al nodo o vórtice principal del ser humano situado en el
							Corazón Energético y sus correspondientes niveles cuánticos. Todo
							problema físico, mental o emocional, está vinculado a los
							Restrictores Energéticos en su fase distorsionada que es preciso
							detectar.
							<br />
							<br />
							Muchos de los síntomas actuales, se producen porque tu
							Configuración Energética Preestablecida se está reconfigurando y
							actualizando, y estamos en un momento que es necesario que así
							sea, pero pocos entienden en profundidad éste proceso. La
							Configuración Energética está provista por defecto, de una serie
							de Restrictores Energéticos determinados que inhiben las
							capacidades innatas de tu Ser Real con el objetivo de que sólo te
							mantengas enfocado en la tarea de vida que viniste a realizar
							aquí, en éste plano vibratorio.
							<br />
							<br />
							El objetivo final de Quantum Vórtex, es el de desbloquear los
							Canales de Luz correspondientes del paciente para restituir el
							normal flujo de energía/conciencia que, por diversas razones, han
							permanecido hasta el momento bloqueados. Reconectar su Línea de
							Intención y Propósito con la de su Ser Superior y la Conciencia
							Cósmica Universal.
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
										<p>{services[8].hora}</p>
									</div>
								</div>
								<div className="columnOne">
									<div className="name-column">
										<p>Precio: </p>
									</div>
									<div className="icon-column">
										<p>{services[8].price}</p>
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
									href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[8].mensaje}`}
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

export default ServiceNine;
