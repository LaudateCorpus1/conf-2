import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './styles/styleSerOne.css';
import './styles/styleCurso.css';
import imgDetail1 from '../../images/detalle-ser-3.jpg';
import imgDetail2 from '../../images/detalle-ser-3-2.jpg';
import Zoom from '../../images/zoom.svg';

const CursoONe = () => {
	const { state } = useContext(AppContext);
	const { cursos } = state;

	return (
		<>
			<div className="content_service-detail">
				<div className="header-service-3">
					<div className="header-content">
						<div className="overlay">
							<div className="content-title">
								<p>{cursos[0].name}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="content-service">
					<div className="info-parrafo">
						<p className="information">
							<b>Personalizado: 48$ por nivel o 125$ por el curso completo.</b>
							<br />
							<br />
							<b>
								2 personas a más: 40$ por nivel o 100$ por el curso completo.{' '}
							</b>
							<br />
							<br />
							<b>INCLUYE: </b>
							<br />
							<br />
							- 18hrs. repartidas en 6 clases de 3 hrs cada una.
							<br />
							- Manual de registros akáshicos por nivel.
							<br />
							- Material de estudio, audios, videos y bibliografía.
							<br />
							- Certificación y seguimiento de aprendizaje.
							<br />
							<br />
							<b>NIVEL I, II y MAESTRÍA.</b>
							<br />
							<br />
						</p>
						<p className="information">
							<span className="title-curso">
								<b> NIVEL I</b>
							</span>
							<br />
							<br />
							<b>¿Qué son los Registros Akáshicos?</b>
							<br />
							Los Custodios o Guardianes de los Registros Akáshicos.
							<br />
							Jerarquía de los Seres de Luz de los Registros Akáshicos.
							<br />
							Los Guardianes de los RA de la Tierra (Gaia) (Puerta
							Interdimensional Sagrada)
							<br />
							<br />
							<b> ¿Qué puedo obtener a través de los Registros Akáshicos? </b>
							<br />
							<b>¿Qué es el lenguaje de Luz?</b>
							<br />
							El alma superior y el alma encarnada.
							<br />
							Los Chakras Transpersonales.
							<br />
							<br />
							<b>¿Qué significa canalizar? </b>
							<br />
							Iniciación y sintonización con la Energía y el tubo de luz.
							<br />
							Canalización y decodificación del lenguaje de Luz.
							<br />
							Conexión y comunicación con los Seres de Luz.
							<br />
							Aportes que podemos hacer a la Humanidad desde los registros
							Akáshicos.
							<br />
							Reglas Básicas para la Lectura de los Registros Akáshicos.
							<br />
							<br />
							<b>¿Qué tipo de información recibimos y cómo la obtenemos?</b>
							<br />
							Técnica y Decretos Universales para ingresar al recinto de tus RA.
							La sanación con los RA.
							<br />
							Liberación y transmutación de Bloqueos. energéticos, mentales,
							emocionales y espirituales.
							<br />
							Puntos de Gracia de Los Registros
							<br />
							<br />
							<span className="title-curso">
								<b>NIVEL II:</b>
							</span>
						</p>
						<div className="information-list">
							<ul className="lista">
								<li>Jerarquía Universal</li>
							</ul>
						</div>
						<br />
						<p className="information">
							<b>¿Qué es el ADN espiritual?</b>
						</p>

						<div className="information-list">
							<ul className="lista">
								<li>
									12 hebras en espiral o Capas del ADN-Códigos Científicos.
								</li>
								<li>Reconectando el ADN original.</li>
								<li>Ejercicios para activar el ADN.</li>
								<li>Lectura de R.A. a otras personas.</li>
								<li>Patrones de Interferencia en los R.A.</li>
							</ul>
						</div>
						<br />
						<p className="information">
							<b>¿Qué tipo de preguntas funcionan mejor en los R.A.?</b>
						</p>
						<div className="information-list">
							<ul className="lista">
								<li>Directrices antes de abrir los RA a otros seres.</li>
								<li>
									Práctica para realizar la lectura de R.A. a otros seres.
								</li>
								<li>
									Lecturas de RA a animales o mascotas, viviendas, empresas,
									etc.
								</li>
								<li>La Sanación en los RA.</li>
								<li>Meditación de Sanación con los Maestros del R.A.</li>
								<li>Puntos de Gracia del segundo Nivel de los RA.</li>
								<li>Ética en el trabajo.</li>
							</ul>
						</div>
						<br />
						<p className="information">
							<span className="title-curso">
								<b>MAESTRÍA:</b>
							</span>
						</p>
						<div className="information-list">
							<ul className="lista">
								<li>
									Lectura de Registros Akáshicos de la Tierra y el Cosmos.
								</li>
								<li>Activación de la Glándula Pineal.</li>
								<li>Símbolos Sagrados de los Registros Akáshicos.</li>
								<li>Procedimiento para realizar una Iniciación.</li>
								<li>Activar el tubo o Canal de Luz en los Iniciados.</li>
								<li>Sintonización e Iniciación de la Maestría.</li>
							</ul>
						</div>
						<div className="content-payment">
							<div className="content-pay">
								<div className="columnOne">
									<div className="name-column">
										<p>Sesión: </p>
									</div>
									<div className="icon-column">
										<p>{cursos[0].hora}</p>
									</div>
								</div>
								<div className="columnOne">
									<div className="name-column">
										<p>Precio: </p>
									</div>
									<div className="icon-column">
										<p>{cursos[0].price}</p>
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
									href={`https://api.whatsapp.com/send?phone=51990319569&text=${cursos[0].mensaje}`}
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

export default CursoONe;
