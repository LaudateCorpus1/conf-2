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
								<p>{services[6].name}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="content-service">
					<div className="info-parrafo">
						<p className="information">
							<b>Sanación con cristales atlantes:</b>
							<br />
							<br />
							Los Cristales Etéricos son las energías de un Cristal plasmadas en
							el Éter.
							<br />
							<br />
							Los Cristales Etéricos Atlantes son energías de los cristales que
							utilizaban los atlantes, tanto para desarrollar y utilizar su
							tecnología como para la sanación, protección, rituales, etc.
							<br />
							<br />
							Un cristal etérico es la energía, que fue plasmada en el universo
							del mencionado cristal. Los atlantes conocían y utilizaban los
							rituales etéricos, por ello hoy podemos acceder a canalizar.
							<br />
							<br />
							<b> Usos de los Cristales Etéricos Atlantes:</b>
							<br />
							<br />
						</p>
						<div className="information-list">
							<ul className="lista">
								<li>Sanación </li>
								<li>
									Despertar y Desarrollar habilidades Psíquicas, meditación y
									conexión con la Fuente.
								</li>
								<li>
									El incremento de la capacidad mental y de la claridad de
									pensamiento.
								</li>
								<li>
									Guardar Registros y otros conocimientos de un modo parecido a
									como lo haría una computadora.
								</li>
								<li>Crecimiento de plantas y semejantes.</li>
								<li>Ciencia y Tecnología</li>
								<li>
									Producir y teletransportar materia y desmaterialización.
								</li>
								<li>Telequinesis. </li>
								<li>
									Comunicación; ya que los cristales tiene la habilidad de
									transferir energía, retenerla, mantener su intensidad, enfocar
									y transmitirla a una gran distancia sobre receptores
									similares, ya que son iguales o comparables al transmisor.
								</li>
							</ul>
							<br />
						</div>
						<p className="information">
							En un nivel espiritual más elevado, los cuartos hechos de
							cristales eran lugares en donde los iniciados dejaban sus cuerpos
							en la Trascendencia final, con frecuencia para nunca volver.
							<br />
							<br />
							Existe un cristal para cada necesidad.
							<br />
							<br />
							<b> Sanación con cristales lemurianos:</b>
							<br />
							<br />
							Los Cristales Semilla son herramientas Lemurianas que fueron
							creadas con la finalidad de transmitir energía desde las esferas
							más elevadas a las cuales los seres humanos tenemos acceso. Los
							Sacerdotes Lemurianos fueron capaces de establecer una conexión
							con los Cristales Semilla. Los Cristales Semilla Lemurianos fueron
							usados para construir puentes y casas, así como para calentar el
							agua. Algunos Cristales también fueron usados como herramientas,
							otros para ayudar con el trabajo de sanación espiritual y otros
							fueron utilizados en la disolución de hilos Kármicos y son todavía
							importantes hoy en día para la gente que ha tenido una antigua
							encarnación con algunas ataduras kármicas.
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
										<p>{services[6].hora}</p>
									</div>
								</div>
								<div className="columnOne">
									<div className="name-column">
										<p>Precio: </p>
									</div>
									<div className="icon-column">
										<p>{services[6].price}</p>
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
									href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[6].mensaje}`}
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
