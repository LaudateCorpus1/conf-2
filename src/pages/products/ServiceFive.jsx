import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './styles/styleSerOne.css';
import imgDetail1 from '../../images/detalle-ser-5-1.jpg';
import imgDetail2 from '../../images/detalle-ser-5-2.jpg';
import Zoom from '../../images/zoom.svg';

const ServiceFive = () => {
	const { state } = useContext(AppContext);
	const { services } = state;

	return (
		<>
			<div className="content_service-detail">
				<div className="header-service-5">
					<div className="header-content">
						<div className="overlay">
							<div className="content-title">
								<p>{services[3].name}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="content-service">
					<div className="info-parrafo">
						<p className="information">
							<b>hipnosis cuántica regresiva</b>
							<br />
							<br />
							La Hipnosis es un estado de relajación en el que la persona enfoca
							su atención en las instrucciones del terapeuta, cuyo proceso está
							supervisado y guiado por el terapeuta, en el proceso, somos
							conscientes de lo que sucede alrededor, escuchamos los ruidos,
							podemos abrir los ojos, caminar o aumentar la atención hacia
							determinados pensamientos que nos interesan. En dicho estado de
							calma el consultante puede aliviar el origen del dolor, recordar
							eventos olvidados, re-programar conductas, potenciar recursos y
							facultades del cuerpo.
							<br />
							<br />
							La Hipnosis Cuántica Regresiva es una herramienta que ayuda a
							identificar el origen de malestares y bloqueos, para liberar y
							facilitar la conexión con los guías espirituales, Ser Superior, o
							la Fuente, ya que reside más allá de la mente ordinaria. La
							Conciencia Universal es la mayor parte de nosotros mismos que
							siempre está conectada a Dios o la Fuente, y tiene conocimiento
							ilimitado y una capacidad ilimitada para ayudarnos a sanar. A
							veces, las enfermedades mentales y físicas están enraizadas en el
							trauma de vidas pasadas o la infancia.
							<br />
							<br />
							Ser capaz de visualizar y comprender los desafíos y las
							experiencias negativas de nuestro pasado puede ayudarnos a
							comprender las cualidades negativas de nosotros mismos con las que
							luchamos hoy. Al exponer algo de este dolor y negatividad, podemos
							entenderlo, procesarlo y dejarlo ir, lo que libera su control
							mental sobre nosotros durante nuestras vidas actuales.
							<br />
							<br />
							Serás guiado a través de cada paso, y al final, obtendrás una
							tremenda claridad sobre quién eres realmente en un nivel mucho más
							grande. A medida que continúe con su día, semana o año, surgirán
							nuevos recuerdos como resultado de esta hipnosis inicial.
							<br />
							<br />
							<b>Progresión</b>
							<br />
							<br />
							Si bien la regresión a vidas pasadas generalmente expone
							aventuras, experiencias y eventos del pasado, algunas personas
							también pueden ver hacia adelante en sus próximas vidas. En lugar
							de ver quién eras, puedes vislumbrar quién serás o podrás ser.
							Esta experiencia única permite te permite aceptar el potencial que
							tienes ante ti. Te brinda la capacidad de ver a dónde pueden
							llevarte tus elecciones y situaciones actuales si continúas en el
							mismo camino.
						</p>
						<div className="content-payment">
							<div className="content-pay">
								<div className="columnOne">
									<div className="name-column">
										<p>Sesión: </p>
									</div>
									<div className="icon-column">
										<p>{services[3].hora}</p>
									</div>
								</div>
								<div className="columnOne">
									<div className="name-column">
										<p>Precio: </p>
									</div>
									<div className="icon-column">
										<p>{services[3].price}</p>
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
									href={`https://api.whatsapp.com/send?phone=51990319569&text=${services[3].mensaje}`}
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

export default ServiceFive;
